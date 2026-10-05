import React from 'react';
import { ArrowRight, QrCode, Play, Smartphone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductSample } from '../types';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenARModal: (product: ProductSample, mode?: 'qr' | 'simulator') => void;
  onExploreHowItWorks: () => void;
  onGetSolution: () => void;
  sampleProduct: ProductSample;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenARModal,
  onExploreHowItWorks,
  onGetSolution,
  sampleProduct,
}) => {
  const handleTryInSpaceClick = () => {
    trackEvent('ar_demo_launch', 'Hero Try It in Your Space Clicked', {
      productId: sampleProduct.id,
    });
    onOpenARModal(sampleProduct, 'qr');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FBFBF9] via-[#F6F5F1] to-[#FBFBF9]">
      {/* Background Architectural Grid Lines */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Strategic CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Category / Sub-label per Zero-Pill discipline: unboxed clean text with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#737373] tracking-wider uppercase">
              <span className="text-[#966A38] font-semibold">Innovify XR</span>
              <span aria-hidden="true">·</span>
              <span>Custom WebAR</span>
              <span aria-hidden="true">·</span>
              <span>Mobile AR</span>
              <span aria-hidden="true">·</span>
              <span>3D Product Experiences</span>
            </div>

            {/* Marquee Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#191919] font-normal leading-[1.08] tracking-tight text-balance">
              Let Your Customers <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#966A38]">Try Your Products</span> <br />
              in Their Own Space.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#5A5A58] max-w-xl leading-relaxed">
              Custom AR Try-On experiences for your website and mobile app—built by{' '}
              <strong className="font-semibold text-[#191919]">Innovify XR</strong>. 
              Allow customers to visualize, position, and interact with your products using their 
              smartphones before making a purchase.
            </p>

            {/* Quick Flow Hint */}
            <div className="flex items-center gap-2 text-xs text-[#737373] pt-1">
              <span className="font-medium text-[#191919]">Seamless Workflow:</span>
              <span>Your Product</span>
              <span className="text-[#966A38]">→</span>
              <span>Phone</span>
              <span className="text-[#966A38]">→</span>
              <span>WebAR</span>
              <span className="text-[#966A38]">→</span>
              <span>Customer’s Space</span>
            </div>

            {/* CTA Cluster */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent('pricing_click', 'Hero Get Your AR Solution');
                  onGetSolution();
                }}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#191919] hover:bg-[#2A2A28] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Your AR Solution</span>
                <ArrowRight className="w-4 h-4 text-[#966A38] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent('demo_click', 'Hero See How It Works');
                  onExploreHowItWorks();
                }}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#191919] hover:text-[#966A38] bg-white border border-[#191919]/12 hover:border-[#191919]/30 rounded-xl transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#191919]" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-[#191919]/08 grid grid-cols-3 gap-4 text-xs text-[#5A5A58]">
              <div>
                <span className="block font-semibold text-[#191919] text-sm">No App Needed</span>
                <span className="text-[#737373]">Runs in mobile browser</span>
              </div>
              <div>
                <span className="block font-semibold text-[#191919] text-sm">Keep Current Site</span>
                <span className="text-[#737373]">Zero rebuild required</span>
              </div>
              <div>
                <span className="block font-semibold text-[#191919] text-sm">Flexible Model</span>
                <span className="text-[#737373]">One-Time or Monthly</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual + Interactive Sample Product Try-On Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Cinematic Visual: Room + Phone Screen + AR Furniture */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#191919]/10 bg-white group">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-neutral-100">
                  <img
                    src="/src/assets/images/hero_ar_room_placement_1791173807983.jpg"
                    alt="Customer using smartphone AR to place digital 3D modern furniture into real room space"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle AR Spatial Grid Overlay on floor */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Surface Detection HUD indicator */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-medium tracking-wide">
                      Innovify XR Surface Tracking
                    </span>
                  </div>

                  {/* Dimension overlay badge */}
                  <div className="absolute bottom-4 left-4 text-white text-xs">
                    <p className="font-serif text-sm font-medium">Real-World Scale Precision</p>
                    <p className="text-white/70 text-[11px]">Exact 1:1 metric measurements in customer’s room</p>
                  </div>
                </div>

                {/* Interactive Product Preview Card (Hero Try-On Interaction) */}
                <div className="p-5 bg-white border-t border-[#191919]/08">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#FBFBF9] border border-[#191919]/08 shrink-0 flex items-center justify-center p-1">
                        <img
                          src={sampleProduct.image}
                          alt={sampleProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-[#191919]">
                            {sampleProduct.name}
                          </span>
                          <span className="text-[10px] text-[#966A38] uppercase font-semibold">
                            · AR Demo
                          </span>
                        </div>
                        <p className="text-xs text-[#737373]">
                          {sampleProduct.price} · {sampleProduct.dimensions.width} (W)
                        </p>
                      </div>
                    </div>

                    {/* Try It in Your Space Trigger Button */}
                    <button
                      type="button"
                      onClick={handleTryInSpaceClick}
                      className="px-4 py-2.5 text-xs font-medium text-white bg-[#966A38] hover:bg-[#805628] active:bg-[#6D4922] rounded-xl transition-colors shadow-xs flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="font-semibold">Try It in Your Space</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#8C8C88] mt-3 pt-3 border-t border-[#191919]/06 flex items-center justify-between">
                    <span>Click button to test desktop QR modal or phone simulator</span>
                    <span className="font-medium text-[#191919]">Sample client workflow</span>
                  </p>
                </div>
              </div>

              {/* Floating Quality Callout */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#191919] text-white p-3.5 rounded-xl shadow-xl border border-white/10 items-center gap-3 max-w-[240px]">
                <div className="w-8 h-8 rounded-lg bg-[#966A38]/30 flex items-center justify-center text-[#966A38] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-[11px] leading-snug">
                  <span className="font-semibold block text-white">Zero App Downloads</span>
                  <span className="text-white/70">Instant WebAR on iOS &amp; Android browsers</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
