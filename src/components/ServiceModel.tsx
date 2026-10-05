import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, RefreshCw, Key } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServiceModelProps {
  onRequestQuote: (planType: string) => void;
}

export const ServiceModel: React.FC<ServiceModelProps> = ({ onRequestQuote }) => {
  const oneTimeIncludes = [
    'Custom AR experience crafted for your brand',
    'Full website or mobile app integration',
    'Product 3D/AR optimization and setup',
    'QR-based desktop-to-mobile transfer',
    'Mobile browser WebAR deployment',
    'Device testing across iOS & Android',
    'Initial launch configuration & monitoring',
    'Full ownership of delivered implementation',
  ];

  const monthlyIncludes = [
    'Innovify XR cloud technology access',
    'Managed high-speed 3D CDN asset hosting',
    'Continuous browser & OS compatibility updates',
    'Product AR catalog management dashboard',
    'Regular AR experience performance tuning',
    'Priority technical support & SLA',
    'Seamless product expansion options',
    'Lower upfront initial expenditure',
  ];

  return (
    <section id="licensing" className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Engagement Models
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Choose the AR Model That Fits Your Business.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Whether you want full ownership via a turn-key one-time rollout, or an ongoing managed subscription 
            with continuous support and updates, Innovify XR accommodates your commercial strategy.
          </p>
        </div>

        {/* Two Large Service Model Cards */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: ONE-TIME AR IMPLEMENTATION */}
          <div className="bg-white rounded-3xl border border-[#191919]/08 p-8 sm:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#191919]/08 mb-6">
                <div>
                  <span className="text-xs font-mono font-medium text-[#966A38] block mb-1">
                    OPTION 01
                  </span>
                  <h3 className="text-2xl font-serif text-[#191919] font-medium">
                    One-Time AR Implementation
                  </h3>
                  <p className="text-xs text-[#737373] mt-0.5">“Own Your AR Experience”</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#FBFBF9] border border-[#191919]/08 flex items-center justify-center text-[#966A38]">
                  <Key className="w-6 h-6" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs uppercase font-semibold text-[#737373] tracking-wider block mb-1">
                  Pricing Framework
                </span>
                <div className="text-2xl sm:text-3xl font-serif text-[#191919] font-medium">
                  Custom One-Time Pricing
                </div>
                <p className="text-xs text-[#5A5A58] mt-1">
                  Scope-based quote tailored to catalog size and platform complexity.
                </p>
              </div>

              <p className="text-xs text-[#5A5A58] leading-relaxed mb-6">
                Designed for businesses that want an end-to-end, turn-key AR implementation 
                deployed onto their systems with full asset ownership and zero required recurring software fees.
              </p>

              {/* Inclusions List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-semibold text-[#191919] uppercase tracking-wider block">
                  What’s Included:
                </span>
                {oneTimeIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A4A48]">
                    <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#191919]/08 space-y-3">
              <button
                type="button"
                onClick={() => {
                  trackEvent('pricing_click', 'Clicked Request a Quote (One-Time)');
                  onRequestQuote('One-Time AR Implementation');
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#191919] hover:bg-[#2A2A28] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#966A38]" />
              </button>
              <p className="text-[11px] text-center text-[#737373]">
                Pricing depends on product count, 3D asset readiness, and custom workflows.
              </p>
            </div>
          </div>

          {/* Card 2: MONTHLY AR LICENSE */}
          <div className="bg-[#191919] text-white rounded-3xl border border-[#191919] p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#966A38]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono font-medium text-[#966A38] block mb-1">
                    OPTION 02
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium">
                    Monthly AR License
                  </h3>
                  <p className="text-xs text-[#966A38] mt-0.5">“AR as a Service”</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#966A38]">
                  <RefreshCw className="w-6 h-6" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs uppercase font-semibold text-[#966A38] tracking-wider block mb-1">
                  Pricing Framework
                </span>
                <div className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  Custom Monthly Pricing
                </div>
                <p className="text-xs text-white/70 mt-1">
                  Predictable operational subscription including maintenance &amp; hosting.
                </p>
              </div>

              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Monthly licensing allows businesses to leverage the complete Innovify XR AR platform
                without a large capital expenditure, ensuring continuous updates as iOS and Android roll out new AR features.
              </p>

              {/* Inclusions List */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                  What’s Included:
                </span>
                {monthlyIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#966A38] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 relative z-10">
              <button
                type="button"
                onClick={() => {
                  trackEvent('pricing_click', 'Clicked Request Monthly Plan');
                  onRequestQuote('Monthly AR License');
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#966A38] hover:bg-[#805628] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Monthly Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-center text-white/60">
                Scales seamlessly with catalog volume and bandwidth usage.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
