import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need to replace my existing website?',
      a: 'No. Depending on your technology stack, Innovify XR integrates AR into your existing website via a lightweight, asynchronous script or custom component. Your current URLs, layouts, checkout flow, and catalog backend remain completely untouched.',
    },
    {
      q: 'Can you add AR to my mobile app?',
      a: 'Yes. We build AR experiences for compatible mobile applications across iOS (Swift / React Native / Flutter using ARKit) and Android (ARCore / SceneViewer), engineered to fit your app architecture.',
    },
    {
      q: 'Do customers need to install an app?',
      a: 'For web-based AR experiences, no application download is required. The experience leverages native mobile browser spatial engines (Apple QuickLook on iOS Safari and Google SceneViewer / WebXR on Android Chrome) to minimize buyer friction.',
    },
    {
      q: 'How does desktop AR work?',
      a: 'When a shopper browses on a laptop or desktop monitor, clicking “Try It in Your Space” displays an elegant product-specific QR code. The customer scans it using their smartphone camera, and the 3D model opens instantly in WebAR on their phone.',
    },
    {
      q: 'How does mobile AR work?',
      a: 'When browsing directly on a compatible smartphone or tablet, the customer simply taps “Try It in Your Space” and the AR camera viewer launches immediately. They point the phone at the floor, and the product appears in 1:1 true scale.',
    },
    {
      q: 'Can I use my existing 3D models?',
      a: 'Yes, if they meet required technical standards. We accept GLB, glTF, USDZ, FBX, OBJ, and CAD files. We optimize polygons, compress textures, and ensure rapid sub-second streaming on mobile connections.',
    },
    {
      q: 'What if I don’t have 3D models?',
      a: 'Innovify XR provides 3D asset preparation and digital twin modeling. You simply provide dimension spec sheets and multi-angle photographs of your physical products, and our team models and bakes PBR textures for AR.',
    },
    {
      q: 'Can I start with a few products?',
      a: 'Yes. Most commercial clients start with 3 to 10 best-selling hero products to test customer adoption, conversion metrics, and return reduction before expanding across their broader catalog.',
    },
    {
      q: 'Do you offer one-time implementation?',
      a: 'Yes. Our One-Time AR Implementation model provides end-to-end integration, 3D asset setup, and deployment with complete asset ownership and zero mandatory recurring platform fees.',
    },
    {
      q: 'Do you offer monthly licensing?',
      a: 'Yes. Innovify XR offers monthly licensing options depending on required functionality, active product volume, infrastructure hosting, and ongoing technical updates.',
    },
  ];

  const toggle = (idx: number) => {
    const next = openIdx === idx ? null : idx;
    setOpenIdx(next);
    if (next !== null) {
      trackEvent('demo_click', `Opened FAQ: ${faqs[idx].q}`);
    }
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Clear Answers for Business Leaders.
          </h2>
          <p className="text-base text-[#5A5A58] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about integrating AR Try-On into your digital storefront or mobile application.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#191919]/08 bg-[#FBFBF9] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4F4F0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-[#191919]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-[#191919]/08 flex items-center justify-center text-[#191919] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#966A38]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5A5A58] leading-relaxed border-t border-[#191919]/06 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
