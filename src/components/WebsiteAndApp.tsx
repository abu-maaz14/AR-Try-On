import React, { useState } from 'react';
import { Globe, Smartphone, QrCode, ArrowRight, CheckCircle2, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface WebsiteAndAppProps {
  onOpenDemo: () => void;
  onRequestQuote: () => void;
}

export const WebsiteAndApp: React.FC<WebsiteAndAppProps> = ({ onOpenDemo, onRequestQuote }) => {
  const [activeTab, setActiveTab] = useState<'web' | 'app'>('web');

  return (
    <section id="web-and-app" className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Multi-Platform Integration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            AR Where Your Customers Already Shop.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Whether your buyers browse on desktop laptops, mobile browsers, or dedicated iOS and Android apps, 
            Innovify XR activates spatial try-on natively where they are.
          </p>
        </div>

        {/* Two Large Luxury Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: WEBSITE AR */}
          <div className="bg-[#FBFBF9] border border-[#191919]/08 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#966A38]/30 transition-all duration-300 shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#191919]/08 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#191919]/08 flex items-center justify-center text-[#966A38] shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                      Zero Rebuild Required
                    </span>
                    <h3 className="text-2xl font-serif text-[#191919] font-medium">
                      Website AR
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-[#191919] font-medium bg-white px-3 py-1 rounded-full border border-[#191919]/08">
                  WebAR
                </span>
              </div>

              <h4 className="text-lg font-serif text-[#191919] font-medium mb-3">
                Add AR to Your Existing Website
              </h4>
              <p className="text-sm text-[#5A5A58] leading-relaxed mb-8">
                Shoppers visit your digital storefront as usual. On any enabled product page,
                they find an elegant <strong>“Try It in Your Space”</strong> button that seamlessly adapts
                to their screen.
              </p>

              {/* Responsive Flow Split: Desktop vs Mobile */}
              <div className="space-y-4 mb-8">
                {/* Desktop Website Flow */}
                <div className="p-4 bg-white rounded-xl border border-[#191919]/06">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#191919] flex items-center gap-1.5">
                      <QrCode className="w-3.5 h-3.5 text-[#966A38]" />
                      Desktop &amp; Laptop Shoppers
                    </span>
                    <span className="text-[11px] text-[#737373]">Cross-device QR</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5A5A58] flex-wrap">
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Scan QR</span>
                    <span className="text-[#966A38]">→</span>
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Open on Phone</span>
                    <span className="text-[#966A38]">→</span>
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Try Product in Room</span>
                  </div>
                </div>

                {/* Mobile Website Flow */}
                <div className="p-4 bg-white rounded-xl border border-[#191919]/06">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#191919] flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#966A38]" />
                      Mobile Browser Shoppers
                    </span>
                    <span className="text-[11px] text-[#737373]">Frictionless Tap</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5A5A58] flex-wrap">
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Tap Button</span>
                    <span className="text-[#966A38]">→</span>
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Launch WebAR</span>
                    <span className="text-[#966A38]">→</span>
                    <span className="px-2 py-1 bg-[#FBFBF9] rounded font-medium text-[#191919]">Place &amp; Walk Around</span>
                  </div>
                </div>
              </div>

              {/* Value Points */}
              <ul className="space-y-2.5 text-xs text-[#5A5A58] mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>Works on Shopify, Magento, WooCommerce, BigCommerce, or custom stack</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>No customer application download required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>Retains existing payment gateways, stock systems, and cart logic</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#191919]/08 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  trackEvent('demo_click', 'Website AR Card Demo Clicked');
                  onOpenDemo();
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#191919] hover:text-[#966A38] transition-colors cursor-pointer"
              >
                <span>Preview Website AR Flow</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#737373]">WebAR Ready</span>
            </div>
          </div>

          {/* Card 2: MOBILE APP AR */}
          <div className="bg-[#191919] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#966A38]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#966A38] shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#966A38]">
                      Native Performance
                    </span>
                    <h3 className="text-2xl font-serif text-white font-medium">
                      Mobile App AR
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-[#966A38] bg-[#966A38]/20 border border-[#966A38]/30 px-3 py-1 rounded-full font-mono">
                  iOS &amp; Android
                </span>
              </div>

              <h4 className="text-lg font-serif text-white font-medium mb-3">
                Bring AR Into Your Mobile App
              </h4>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                For brands with dedicated customer apps, Innovify XR provides SDK integration modules.
                Shoppers access high-frame-rate spatial tracking directly within your existing application navigation.
              </p>

              {/* Native App Step Flow */}
              <div className="p-5 bg-white/05 border border-white/10 rounded-xl mb-8">
                <span className="text-xs font-semibold text-[#966A38] uppercase tracking-wider block mb-3">
                  Native Customer Journey
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-white/90">
                  <div className="p-2.5 bg-white/05 rounded-lg border border-white/05 text-center">
                    <span className="block text-[10px] text-white/50 mb-0.5">01</span>
                    <strong className="block font-medium">Product Page</strong>
                  </div>
                  <div className="p-2.5 bg-white/05 rounded-lg border border-white/05 text-center">
                    <span className="block text-[10px] text-white/50 mb-0.5">02</span>
                    <strong className="block font-medium">Try in Space</strong>
                  </div>
                  <div className="p-2.5 bg-white/05 rounded-lg border border-white/05 text-center">
                    <span className="block text-[10px] text-white/50 mb-0.5">03</span>
                    <strong className="block font-medium">Camera / AR</strong>
                  </div>
                  <div className="p-2.5 bg-white/05 rounded-lg border border-white/05 text-center">
                    <span className="block text-[10px] text-white/50 mb-0.5">04</span>
                    <strong className="block font-medium">Place Product</strong>
                  </div>
                  <div className="p-2.5 bg-white/05 rounded-lg border border-white/05 text-center">
                    <span className="block text-[10px] text-white/50 mb-0.5">05</span>
                    <strong className="block font-medium">Explore Angles</strong>
                  </div>
                  <div className="p-2.5 bg-[#966A38]/30 rounded-lg border border-[#966A38]/40 text-center">
                    <span className="block text-[10px] text-[#966A38] mb-0.5">06</span>
                    <strong className="block font-medium text-white">Purchase</strong>
                  </div>
                </div>
              </div>

              {/* Value Points */}
              <ul className="space-y-2.5 text-xs text-white/70 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>Native ARKit (iOS) &amp; ARCore (Android) rendering engines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>Offline model caching for instantaneous load times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0" />
                  <span>Exact implementation tailored to your app framework (React Native, Flutter, Swift, Kotlin)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <button
                type="button"
                onClick={() => {
                  trackEvent('demo_click', 'App AR Card Inquire Clicked');
                  onRequestQuote();
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#966A38] transition-colors cursor-pointer"
              >
                <span>Discuss Mobile App Integration</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-white/50">Custom Architecture</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
