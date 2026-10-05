import React from 'react';
import { Check, Minus, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ComparisonTableProps {
  onSelectTier: (tierName: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onSelectTier }) => {
  const tiers = [
    {
      name: 'AR Starter',
      target: 'Boutique Showrooms & Emerging Brands',
      model: 'One-Time or Monthly',
      features: [
        'Up to 5 Flagship Products in AR',
        'Website WebAR Integration script',
        'Dynamic QR Code Generation for Desktop',
        '1:1 Real-world Surface Tracking',
        'Standard Email & Setup Support',
        'Device Compatibility Testing',
      ],
      cta: 'Inquire About Starter',
    },
    {
      name: 'AR Business',
      target: 'Growing E-Commerce Stores & Retailers',
      model: 'One-Time or Monthly',
      featured: true,
      features: [
        'Up to 25 Catalog Products in AR',
        'Website & Mobile Browser Optimization',
        'Multi-finish / Texture variant toggles',
        '3D Model Compression & Asset QA',
        'Analytics Event Tracking Integration',
        'Priority Technical Support & Updates',
      ],
      cta: 'Inquire About Business',
    },
    {
      name: 'AR Enterprise',
      target: 'National Showroom Chains & Large Catalogs',
      model: 'Custom Bespoke Model',
      features: [
        '50+ Products / Full Catalog Digitization',
        'Native iOS & Android App SDK Modules',
        'Custom CAD to PBR Asset Pipeline',
        'Dedicated Solutions Architect & SLA',
        'Custom Spatial UI & White-Label Theming',
        'Continuous Cloud Hosting & Edge CDN',
      ],
      cta: 'Inquire About Enterprise',
    },
  ];

  const comparisonRows = [
    { feature: 'Custom AR Experience', oneTime: '✓ Included', monthly: '✓ Included' },
    { feature: 'Website Integration', oneTime: '✓ Included', monthly: '✓ Included' },
    { feature: 'Mobile App Integration', oneTime: '✓ Available', monthly: '✓ Available' },
    { feature: 'Product AR Setup & Tuning', oneTime: '✓ Included', monthly: '✓ Included' },
    { feature: 'Initial Deployment & QA', oneTime: '✓ Included', monthly: '✓ Included' },
    { feature: 'Ongoing Experience Maintenance', oneTime: 'Optional SLA', monthly: '✓ Included' },
    { feature: 'Browser & OS Compatibility Updates', oneTime: 'Optional SLA', monthly: '✓ Included' },
    { feature: 'Dedicated Support Channel', oneTime: '30-Day Launch Support', monthly: '✓ Continuous Priority' },
    { feature: 'Catalog Product Expansion', oneTime: 'Custom Per-Asset Quote', monthly: 'Flexible Monthly Add-on' },
    { feature: 'Asset Hosting & CDN Infrastructure', oneTime: 'Self-Hosted or Optional Managed', monthly: '✓ Fully Managed High-Speed' },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tier Framework Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Commercial Packaging
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            Pricing Framework &amp; Feature Matrix.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Transparent, configurable plans tailored to catalog volume and technical integration requirements.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                t.featured
                  ? 'bg-[#191919] text-white shadow-xl border border-[#966A38]/50 relative'
                  : 'bg-[#FBFBF9] text-[#191919] border border-[#191919]/08 shadow-xs'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-8 bg-[#966A38] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular for E-Commerce
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-medium">{t.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                    t.featured ? 'bg-white/10 text-[#966A38]' : 'bg-[#EAE8E3] text-[#5A5A58]'
                  }`}>
                    {t.model}
                  </span>
                </div>

                <p className={`text-xs mb-6 ${t.featured ? 'text-white/70' : 'text-[#737373]'}`}>
                  {t.target}
                </p>

                <div className="pt-4 border-t border-current/10 mb-6">
                  <span className="text-xs uppercase tracking-wider font-semibold opacity-70 block mb-1">
                    Investment:
                  </span>
                  <div className="text-xl font-serif font-semibold">
                    Contact Us for Custom Pricing
                  </div>
                  <span className={`text-[11px] block mt-1 ${t.featured ? 'text-white/60' : 'text-[#737373]'}`}>
                    Tailored to product specifications and 3D readiness
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {t.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${t.featured ? 'text-[#966A38]' : 'text-emerald-700'}`} />
                      <span className={t.featured ? 'text-white/90' : 'text-[#4A4A48]'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('pricing_click', `Selected Tier: ${t.name}`);
                    onSelectTier(t.name);
                  }}
                  className={`w-full py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    t.featured
                      ? 'bg-[#966A38] hover:bg-[#805628] text-white shadow-md'
                      : 'bg-[#191919] hover:bg-[#2A2A28] text-white'
                  }`}
                >
                  <span>{t.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed One-Time vs Monthly Comparison Table */}
        <div className="pt-8">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-[#191919] font-medium">
              One-Time vs. Monthly License Comparison
            </h3>
            <p className="text-xs text-[#737373] mt-1">
              Understand the core operational and financial differences between the two engagement paths.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#191919]/08 bg-[#FBFBF9] shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#191919]/08 bg-[#F4F4F0] text-[#191919]">
                  <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider">
                    Feature / Capability
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider text-[#191919]">
                    One-Time Implementation
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase text-xs tracking-wider text-[#966A38]">
                    Monthly AR License
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#191919]/06 bg-white">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FBFBF9] transition-colors">
                    <td className="py-3.5 px-6 font-medium text-[#191919]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-6 text-[#5A5A58]">
                      {row.oneTime}
                    </td>
                    <td className="py-3.5 px-6 font-medium text-[#966A38]">
                      {row.monthly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[#737373] mt-4 italic">
            * Final features, deliverables, and service levels depend on the selected package and written agreement.
          </p>
        </div>

      </div>
    </section>
  );
};
