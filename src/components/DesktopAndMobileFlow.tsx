import React from 'react';
import { Laptop, Smartphone, QrCode, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface DesktopAndMobileFlowProps {
  onOpenDemo: (mode?: 'qr' | 'simulator') => void;
}

export const DesktopAndMobileFlow: React.FC<DesktopAndMobileFlowProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Desktop Experience */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#966A38] uppercase tracking-widest">
              <Laptop className="w-4 h-4" />
              <span>Desktop &amp; Laptop Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal leading-tight text-balance">
              Shopping on a Laptop? <br />
              <span className="italic text-[#966A38]">Send AR to Their Phone.</span>
            </h2>

            <p className="text-base text-[#5A5A58] leading-relaxed">
              When customers browse your website from a desktop or laptop, they can click 
              <strong>“Try It in Your Space”</strong>. A product-specific, dynamic QR code immediately appears.
              The customer scans it with their phone camera, and the exact 3D model opens automatically in true 1:1 scale.
            </p>

            {/* Desktop Flow Diagram */}
            <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#191919]/08 flex items-center justify-between gap-2 text-xs text-[#191919] flex-wrap">
              <span className="font-medium">Desktop Website</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium">Try It Click</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium text-[#966A38]">Instant QR</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium">Phone Camera</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium">AR Experience</span>
            </div>

            <ul className="space-y-2 text-xs text-[#5A5A58]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#966A38]" />
                <span>Zero app installations or registration forms for the buyer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#966A38]" />
                <span>Each QR code passes precise product SKU, active finish &amp; color variant</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#966A38]" />
                <span>Synchronized cart intent maintains cross-device session data</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => {
                trackEvent('demo_click', 'Clicked Test Desktop QR Modal');
                onOpenDemo('qr');
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#191919] hover:bg-[#2A2A28] rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <QrCode className="w-3.5 h-3.5 text-[#966A38]" />
              <span>Test Desktop QR Modal</span>
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#191919]/10 bg-white">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="/src/assets/images/laptop_desktop_ar_flow_1791173842897.jpg"
                  alt="Desktop laptop displaying luxury furniture page alongside smartphone scanning QR code"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-white border-t border-[#191919]/08 flex items-center justify-between text-xs text-[#737373]">
                <span>Cross-Device WebAR Protocol</span>
                <span className="text-[#966A38] font-medium">Powered by Innovify XR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Mobile Experience */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="p-8 bg-[#191919] text-white rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#966A38]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#966A38]">
                    One-Tap Activation
                  </span>
                  <span className="text-xs text-white/60 bg-white/10 px-2.5 py-1 rounded-md">
                    Zero QR Required
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white font-medium">
                  Direct Mobile WebAR Pipeline
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  When a shopper is already browsing from their iPhone, iPad, or Android phone,
                  there is zero need for QR transfer. One tap launches the spatial viewer in under a second.
                </p>

                {/* Direct Mobile Steps */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white/05 rounded-xl border border-white/10">
                    <span className="text-[#966A38] font-bold block mb-1">01. Tap Button</span>
                    <span className="text-white/70">User touches “Try It in Your Space” on the mobile PDP.</span>
                  </div>
                  <div className="p-3 bg-white/05 rounded-xl border border-white/10">
                    <span className="text-[#966A38] font-bold block mb-1">02. Instant Launch</span>
                    <span className="text-white/70">iOS QuickLook or Android SceneViewer opens natively.</span>
                  </div>
                  <div className="p-3 bg-white/05 rounded-xl border border-white/10">
                    <span className="text-[#966A38] font-bold block mb-1">03. Place &amp; Walk</span>
                    <span className="text-white/70">Surface is tracked; item appears anchored to the floor.</span>
                  </div>
                  <div className="p-3 bg-[#966A38]/30 rounded-xl border border-[#966A38]/40">
                    <span className="text-white font-bold block mb-1">04. Return &amp; Buy</span>
                    <span className="text-white/80">User closes viewer directly into pre-filled checkout.</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-white/60 border-t border-white/10">
                  <span>Supported on 98%+ modern smartphones</span>
                  <span className="text-[#966A38] font-medium">Frictionless UX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#966A38] uppercase tracking-widest">
              <Smartphone className="w-4 h-4" />
              <span>Mobile Smartphone Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal leading-tight text-balance">
              Already on a Phone? <br />
              <span className="italic text-[#966A38]">Just Tap and Try.</span>
            </h2>

            <p className="text-base text-[#5A5A58] leading-relaxed">
              When customers browse from a compatible smartphone or tablet, the experience is completely seamless.
              No QR code is required. They tap the button, grant camera permission with a single prompt,
              and immediately see the product standing in their room.
            </p>

            {/* Visual Step Sequence */}
            <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#191919]/08 flex items-center justify-between gap-2 text-xs text-[#191919] flex-wrap">
              <span className="font-medium">Product Page</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium text-[#966A38]">“Try It in Your Space”</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium">AR Opens</span>
              <span className="text-[#966A38]">→</span>
              <span className="font-medium">Place Product</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent('demo_click', 'Clicked Test Mobile Simulator');
                  onOpenDemo('simulator');
                }}
                className="px-5 py-2.5 text-xs font-semibold text-[#191919] hover:text-[#966A38] bg-white border border-[#191919]/12 hover:border-[#191919]/30 rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Zap className="w-3.5 h-3.5 text-[#966A38]" />
                <span>Preview Mobile AR Simulator</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
