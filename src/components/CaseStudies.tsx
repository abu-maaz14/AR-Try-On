import React from 'react';
import { Armchair, ShoppingCart, Smartphone, Globe, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CaseStudiesProps {
  onSelectCategory: (category: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      title: 'Furniture AR',
      tag: 'Interior Spatial Placement',
      desc: 'True-scale sectionals, luxury dining sets, and bedroom suites anchored to customer residential flooring with dynamic room illumination.',
      icon: Armchair,
      status: 'Project Template Ready',
    },
    {
      title: 'Retail AR',
      tag: 'Boutique & Showroom Commerce',
      desc: 'Consumer hardware, architectural fixtures, and luxury appliances placed on kitchen countertops and office workstations.',
      icon: ShoppingCart,
      status: 'Project Template Ready',
    },
    {
      title: 'Product Visualization',
      tag: '3D Interactive Inspection',
      desc: 'Exploded component views, mechanical rotation, tactile fabric inspectability, and custom dimensional measuring calipers.',
      icon: Eye,
      status: 'Project Template Ready',
    },
    {
      title: 'E-Commerce AR',
      tag: 'Shopify / WooCommerce / Custom',
      desc: 'High-converting “Try It in Your Space” button embeds paired with dynamic product SKU variant passing.',
      icon: Globe,
      status: 'Project Template Ready',
    },
    {
      title: 'Mobile AR',
      tag: 'Native iOS & Android SDKs',
      desc: 'In-app spatial experiences built on ARKit and ARCore with local asset caching for high-frequency direct app users.',
      icon: Smartphone,
      status: 'Project Template Ready',
    },
    {
      title: 'WebAR Solutions',
      tag: 'Zero-Install Browser Engine',
      desc: 'Frictionless QR handoff from laptop browsers to instant Safari / Chrome spatial viewers with zero app store friction.',
      icon: Sparkles,
      status: 'Project Template Ready',
    },
  ];

  return (
    <section className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Portfolio Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            AR Experiences We Can Build.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Every business requires a distinct spatial presentation. Here are the core implementation architectures 
            we engineer for our commercial partners.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#191919]/08 shadow-xs hover:shadow-md hover:border-[#966A38]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#191919]/06 mb-6">
                    <span className="text-[11px] font-semibold text-[#966A38] uppercase tracking-wider">
                      {cat.tag}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#FBFBF9] border border-[#191919]/06 flex items-center justify-center text-[#191919]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#191919] font-medium mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#5A5A58] leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#191919]/06 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#737373]">{cat.status}</span>
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('demo_click', `Selected Case Study Category: ${cat.title}`);
                      onSelectCategory(cat.title);
                    }}
                    className="text-xs font-semibold text-[#191919] hover:text-[#966A38] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-[#737373] mt-8 text-center">
          * Implementation blueprints prepared for commercial integration. Innovify XR works closely with your engineering team.
        </p>

      </div>
    </section>
  );
};
