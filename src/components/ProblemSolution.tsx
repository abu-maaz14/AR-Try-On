import React from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, Eye, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  const customerQuestions = [
    {
      q: '“Will it fit through the doorway and in my living room?”',
      sub: 'Static dimensions require tape measures and spatial guesswork.',
    },
    {
      q: '“How will this finish look next to my existing floor?”',
      sub: 'Studio lighting photos cannot reflect actual home ambience.',
    },
    {
      q: '“Is the scale too bulky or too petite for the corner?”',
      sub: 'Without context, photos distort physical presence and volume.',
    },
    {
      q: '“Will it match the rest of my interior aesthetic?”',
      sub: 'Customers hesitate when they can’t visualize colors in situ.',
    },
    {
      q: '“Can I truly imagine living with this product?”',
      sub: 'Hesitation causes cart abandonment and endless support inquiries.',
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest">
            The Fundamental Commerce Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Customers Don’t Just Want to See Products. <br className="hidden sm:inline" />
            They Want to Know How They’ll Look in Their Space.
          </h2>
          <p className="text-base text-[#5A5A58] leading-relaxed">
            Traditional product pages provide photos, specifications, and dimensions.
            Yet high-ticket decisions stall because customers cannot bridge the mental gap
            between a 2D screen and their real home.
          </p>
        </div>

        {/* The Two Sides: Traditional Shopping Limitations vs Innovify XR AR Experience */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Traditional Product Shopping (The Hesitation) */}
          <div className="lg:col-span-6 bg-[#FBFBF9] border border-[#191919]/08 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#191919]/08 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider block">
                    Conventional Catalog
                  </span>
                  <h3 className="text-xl font-serif text-[#191919] font-medium mt-0.5">
                    What Traditional E-Commerce Offers
                  </h3>
                </div>
                <div className="text-xs text-[#737373] bg-[#EAE8E3] px-3 py-1 rounded-md font-mono">
                  Static 2D
                </div>
              </div>

              {/* What they provide */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="p-3 bg-white rounded-xl border border-[#191919]/05 text-xs text-[#4A4A48]">
                  <span className="font-semibold block text-[#191919]">Studio Photos</span>
                  <span className="text-[#737373]">Shot under artificial studio lights</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#191919]/05 text-xs text-[#4A4A48]">
                  <span className="font-semibold block text-[#191919]">Spec Sheets</span>
                  <span className="text-[#737373]">Dimensions in centimeters and inches</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#191919]/05 text-xs text-[#4A4A48]">
                  <span className="font-semibold block text-[#191919]">Product Video</span>
                  <span className="text-[#737373]">Pre-recorded in commercial sets</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#191919]/05 text-xs text-[#4A4A48]">
                  <span className="font-semibold block text-[#191919]">Description Copy</span>
                  <span className="text-[#737373]">Bullet points and care guides</span>
                </div>
              </div>

              {/* The persistent customer doubts */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                  Yet customers still ask themselves:
                </p>
                {customerQuestions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#191919]/05">
                    <HelpCircle className="w-4 h-4 text-[#966A38] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#191919]">{item.q}</p>
                      <p className="text-[11px] text-[#737373]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#191919]/08 text-xs text-[#737373]">
              Result: Indecision, prolonged sales cycles, returns, and lost conversions.
            </div>
          </div>

          {/* Right: The Innovify XR AR Solution */}
          <div className="lg:col-span-6 bg-[#191919] text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#966A38]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#966A38] uppercase tracking-wider block">
                    The AR Breakthrough
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium mt-0.5">
                    AR Lets Them Experience It Before They Buy.
                  </h3>
                </div>
                <div className="text-xs text-[#966A38] bg-[#966A38]/20 border border-[#966A38]/40 px-3 py-1 rounded-md font-mono">
                  Spatial 3D
                </div>
              </div>

              <blockquote className="text-lg font-serif italic text-white/95 leading-snug mb-8 border-l-2 border-[#966A38] pl-4">
                “Your product. Their space. One immersive experience.”
              </blockquote>

              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Innovify XR creates custom AR Try-On experiences for websites and mobile apps, 
                allowing your customers to visualize and interact with your products using their smartphone. 
                Instead of imagining, they see the actual product standing right in front of them.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/05 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#966A38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Instant Spatial Verification</h4>
                    <p className="text-xs text-white/70 mt-0.5">
                      Clients see physical boundaries in 1:1 true scale. Clearances, hallways, and living zones are verified in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/05 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#966A38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Lighting &amp; Material Harmony</h4>
                    <p className="text-xs text-white/70 mt-0.5">
                      Colors and textures react to the customer’s actual home lighting and floor finish, eliminating aesthetic uncertainty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/05 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#966A38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Emotional Ownership</h4>
                    <p className="text-xs text-white/70 mt-0.5">
                      Seeing the sofa, bed, or decor placed in their room creates an immediate psychological bond, accelerating the buying decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/70 relative z-10">
              <span>Built by <strong className="text-white">Innovify XR</strong></span>
              <span className="text-[#966A38] font-medium">WebAR &amp; Native Mobile AR</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
