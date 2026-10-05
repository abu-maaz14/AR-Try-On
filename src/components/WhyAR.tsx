import React from 'react';
import { Eye, ShieldCheck, Sparkles, Award, Compass, Crown } from 'lucide-react';

export const WhyAR: React.FC = () => {
  const benefits = [
    {
      title: 'Better Visualization',
      desc: 'Customers can understand product volume, true proportion, and physical depth far beyond what flat 2D studio photography can convey.',
      icon: Eye,
    },
    {
      title: 'Greater Confidence',
      desc: 'Buyers see how finishes, fabric textures, and colors interact with their actual flooring and ambient light, removing buyer hesitation.',
      icon: ShieldCheck,
    },
    {
      title: 'More Engagement',
      desc: 'Transforms passive catalog scrolling into an active, tactile spatial experience that keeps prospective buyers engaged with your brand.',
      icon: Sparkles,
    },
    {
      title: 'Stronger Differentiation',
      desc: 'Offers a sophisticated digital feature that sets your brand apart in competitive furniture and design markets.',
      icon: Award,
    },
    {
      title: 'Better Product Discovery',
      desc: 'Gives shoppers a compelling new reason to explore alternative sizes, matching armchairs, and complimentary catalog pieces in their room.',
      icon: Compass,
    },
    {
      title: 'Modern Brand Experience',
      desc: 'Positions your company as an innovative, forward-thinking market leader utilizing modern web and mobile technology.',
      icon: Crown,
    },
  ];

  return (
    <section id="why-ar" className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Strategic Value
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Turn Product Browsing Into Product Experience.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            By shifting from static representations to true spatial presence, you solve the critical
            customer friction points that delay purchasing decisions.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-[#191919]/08 shadow-xs hover:shadow-md hover:border-[#966A38]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FBFBF9] border border-[#191919]/06 flex items-center justify-center text-[#966A38] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif text-[#191919] font-medium mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-[#5A5A58] leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#191919]/06 flex items-center gap-2 text-xs text-[#966A38] font-medium">
                  <span>Enhanced Experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
