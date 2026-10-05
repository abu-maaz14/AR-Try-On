import React from 'react';
import { MousePointerClick, Smartphone, Scan, ShoppingBag, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose a Product',
      desc: 'Customer opens any furniture, decor, or retail item on your website or mobile catalog.',
      icon: MousePointerClick,
    },
    {
      num: '02',
      title: 'Tap “Try It in Your Space”',
      desc: 'A prominent, branded AR button launches the experience immediately without technical hurdles.',
      icon: Smartphone,
    },
    {
      num: '03',
      title: 'Place It in Their Space',
      desc: 'The customer uses their phone camera to position the true-scale 3D product on their actual floor or surface.',
      icon: Scan,
    },
    {
      num: '04',
      title: 'Experience Before Buying',
      desc: 'They verify dimensions, walk around the piece, observe textures, and proceed to checkout with total certainty.',
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            The Customer Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            How It Works
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            A frictionless, 4-step spatial interaction designed to eliminate customer doubt
            and guide them directly into checkout.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 bg-white rounded-2xl border border-[#191919]/08 flex flex-col justify-between shadow-xs group hover:border-[#966A38]/40 transition-all duration-300"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-serif text-[#966A38] font-semibold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FBFBF9] border border-[#191919]/06 flex items-center justify-center text-[#191919] group-hover:text-[#966A38] group-hover:bg-[#966A38]/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif text-[#191919] font-medium mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5A5A58] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#191919]/06 flex items-center justify-between text-[11px] text-[#737373]">
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#966A38] hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Connected Visual Pipeline Summary Bar */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-[#191919]/08 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              The Full Conversion Pipeline:
            </span>
            <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium text-[#191919] flex-wrap justify-center">
              <span className="px-3 py-1.5 bg-[#FBFBF9] rounded-lg border border-[#191919]/06">Product Page</span>
              <span className="text-[#966A38] font-bold">→</span>
              <span className="px-3 py-1.5 bg-[#FBFBF9] rounded-lg border border-[#191919]/06 text-[#966A38]">Try On Trigger</span>
              <span className="text-[#966A38] font-bold">→</span>
              <span className="px-3 py-1.5 bg-[#FBFBF9] rounded-lg border border-[#191919]/06">WebAR / Mobile AR</span>
              <span className="text-[#966A38] font-bold">→</span>
              <span className="px-3 py-1.5 bg-[#FBFBF9] rounded-lg border border-[#191919]/06">Customer’s Real Space</span>
              <span className="text-[#966A38] font-bold">→</span>
              <span className="px-3 py-1.5 bg-[#191919] text-white rounded-lg font-semibold">Purchase</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
