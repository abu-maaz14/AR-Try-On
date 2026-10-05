import React from 'react';
import { Armchair, Lamp, ShoppingBag, Watch, Store, Globe, Sparkles, Info } from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Furniture & Living',
      items: 'Sofas, sectionals, beds, dining tables, armchairs, credenzas, storage units.',
      impact: 'Crucial for dimensional fit through doors and spatial clearance in living spaces.',
      icon: Armchair,
    },
    {
      title: 'Home & Interior Decor',
      items: 'Sculptural lighting, floor lamps, wall art, ceramic vases, rugs, architectural mirrors.',
      impact: 'Allows buyers to check proportions and aesthetic match against their paint and trim.',
      icon: Lamp,
    },
    {
      title: 'Physical Showrooms',
      items: 'Design galleries, bathroom fittings, luxury hardware, flagship boutique studios.',
      impact: 'Extends showroom visits into the customer’s home long after they walk out the door.',
      icon: Store,
    },
    {
      title: 'E-Commerce Brands',
      items: 'Direct-to-consumer product brands and specialized high-ticket online marketplaces.',
      impact: 'Dramatically improves conversion velocity on key catalog hero items.',
      icon: Globe,
    },
    {
      title: 'Retail Products',
      items: 'Consumer appliances, fitness equipment, gaming desks, premium audio setups.',
      impact: 'Helps customers verify where the appliance sits on a counter or beside furniture.',
      icon: ShoppingBag,
    },
    {
      title: 'Fashion & Accessories',
      items: 'Eyewear, watches, jewelry, headwear, structured luxury handbags.',
      impact: 'Face and wrist AR try-on enhances discoverability and fit reassurance.',
      icon: Watch,
    },
    {
      title: 'Custom Architectural Products',
      items: 'Custom cabinetry, bespoke acoustic wall panels, commercial office pods.',
      impact: 'Enables B2B architectural clients and specifiers to evaluate custom builds.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Industry Versatility
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            If Your Customers Need to Imagine It, <br />
            <span className="italic text-[#966A38]">They Can Try It.</span>
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            From luxury furniture ateliers to high-end retail showrooms, Innovify XR unlocks
            spatial immersion across diverse categories.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBFBF9] border border-[#191919]/08 hover:border-[#966A38]/30 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#191919]/06 flex items-center justify-center text-[#966A38] mb-5 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-serif text-[#191919] font-medium mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[#5A5A58] leading-relaxed mb-4">
                    {ind.items}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#191919]/06 text-[11px] text-[#737373]">
                  <strong className="text-[#191919] font-semibold block mb-0.5">Spatial Advantage:</strong>
                  <span>{ind.impact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Feasibility Disclaimer per prompt instructions */}
        <div className="mt-12 p-4 rounded-xl bg-[#F4F4F0] border border-[#191919]/08 flex items-start gap-3 text-xs text-[#5A5A58]">
          <Info className="w-4 h-4 text-[#966A38] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#191919]">Feasibility Note:</strong> Innovify XR conducts a technical feasibility assessment for every project. While spatial room placement is ideal for rigid products like furniture, lighting, and decor, certain complex flexible garments or specialized categories depend on product geometry, material physics, and the specific AR tracking environment required.
          </p>
        </div>

      </div>
    </section>
  );
};
