import React, { useState } from 'react';
import { ArrowRight, Check, X, HelpCircle, Sparkles, Smartphone, Eye } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const BeforeAfter: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'ar' | 'traditional'>('ar');

  return (
    <section className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            The Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            From Looking at Products to Experiencing Them.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            See the side-by-side contrast between conventional online shopping and an interactive AR Try-On customer journey.
          </p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Traditional Experience */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#FBFBF9] border border-[#191919]/08 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#191919]/08 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    The Conventional Path
                  </span>
                  <h3 className="text-2xl font-serif text-[#191919] font-medium mt-1">
                    Traditional Shopping
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#737373] bg-[#EAE8E3] px-3 py-1 rounded-md">
                  Passive
                </span>
              </div>

              {/* Vertical Step Sequence */}
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-3.5 bg-white rounded-xl border border-[#191919]/06">
                  <span className="w-6 h-6 rounded-full bg-[#EAE8E3] text-[#737373] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="text-xs font-semibold text-[#191919]">Product Image</h4>
                    <p className="text-xs text-[#737373]">Customer views 3–4 standard catalog studio photos.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#191919]/15" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-white rounded-xl border border-[#191919]/06">
                  <span className="w-6 h-6 rounded-full bg-[#EAE8E3] text-[#737373] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="text-xs font-semibold text-[#191919]">Product Details</h4>
                    <p className="text-xs text-[#737373]">Reads width, depth, and height numbers in text specs.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#191919]/15" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/50">
                  <HelpCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-amber-900">Customer Imagines Product</h4>
                    <p className="text-xs text-amber-700">Tries to guess scale, floor match, and room clearance mentally.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#191919]/15" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-white rounded-xl border border-[#191919]/06">
                  <span className="w-6 h-6 rounded-full bg-[#EAE8E3] text-[#737373] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="text-xs font-semibold text-[#191919]">Hesitant Purchase Decision</h4>
                    <p className="text-xs text-[#737373]">High hesitation, abandoned carts, or frequent return anxiety.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#191919]/08 text-xs text-[#737373]">
              Friction: The customer must do the spatial translation in their head.
            </div>
          </div>

          {/* Column 2: With Innovify XR AR */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#191919] text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#966A38]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#966A38]">
                    The Innovify XR Difference
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium mt-1">
                    With AR Try-On
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#966A38] bg-[#966A38]/20 border border-[#966A38]/30 px-3 py-1 rounded-md">
                  Active
                </span>
              </div>

              {/* Vertical Step Sequence */}
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-3.5 bg-white/05 rounded-xl border border-white/10">
                  <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Product Image &amp; Details</h4>
                    <p className="text-xs text-white/70">Buyer browses standard product photography and specifications.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#966A38]" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-[#966A38]/25 rounded-xl border border-[#966A38]/40">
                  <Smartphone className="w-6 h-6 text-[#966A38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">“Try It in Your Space”</h4>
                    <p className="text-xs text-white/80">Prominent AR button launches WebAR or mobile viewer immediately.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#966A38]" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-[#966A38]/15 rounded-xl border border-[#966A38]/30">
                  <Eye className="w-6 h-6 text-[#966A38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Customer Sees Product in Their Environment</h4>
                    <p className="text-xs text-white/80">1:1 metric scale, real shadows, walk around in 360°, inspect clearance.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-[1.5px] h-3 bg-[#966A38]" />
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30">
                  <Check className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-300">Confident Purchase Decision</h4>
                    <p className="text-xs text-emerald-200/80">Clearance confirmed, color verified, checkout completed with peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-white/70 relative z-10 flex items-center justify-between">
              <span>Solution: Zero spatial doubt</span>
              <span className="text-[#966A38] font-medium">Powered by Innovify XR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
