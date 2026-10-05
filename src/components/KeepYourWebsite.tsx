import React from 'react';
import { Layers, CheckCircle2, Plus, Equal, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface KeepYourWebsiteProps {
  onConsultationClick: () => void;
}

export const KeepYourWebsite: React.FC<KeepYourWebsiteProps> = ({ onConsultationClick }) => {
  const retainedAssets = [
    { title: 'Keep Your Current Website', desc: 'No costly redesigns, no server migrations, no URL restructuring.' },
    { title: 'Keep Your Product Pages', desc: 'Your current layouts, descriptions, photography, and reviews stay identical.' },
    { title: 'Keep Your Existing Catalog', desc: 'Maintain your existing SKU management, inventory counts, and ERP sync.' },
    { title: 'Keep Your Checkout & Cart', desc: 'Payment gateways, shipping calculations, and order handling are untouched.' },
    { title: 'Add AR to Selected Products', desc: 'Start with 3, 5, or 10 flagship pieces to test customer adoption.' },
    { title: 'Expand Whenever Ready', desc: 'Seamlessly roll out spatial try-on across further collections over time.' },
  ];

  return (
    <section className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            Zero Disruption Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            You Don’t Need to Rebuild Your Website.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Innovify XR can add an AR experience to your existing digital storefront, 
            depending on your platform and technical architecture. We treat AR as a high-performance 
            interactive overlay rather than a risky platform rebuild.
          </p>
        </div>

        {/* Visual Architectural Equation */}
        <div className="p-8 sm:p-10 bg-white rounded-2xl border border-[#191919]/08 shadow-xs mb-16">
          <div className="grid md:grid-cols-5 gap-6 items-center text-center">
            
            {/* Box 1 */}
            <div className="p-6 rounded-xl bg-[#FBFBF9] border border-[#191919]/06">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] block mb-1">
                Foundation
              </span>
              <h4 className="text-lg font-serif text-[#191919] font-medium">
                Your Existing Website
              </h4>
              <p className="text-xs text-[#737373] mt-2">
                Your current domain, layout, and shopping infrastructure.
              </p>
            </div>

            {/* Operator: Plus */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#FBFBF9] border border-[#191919]/10 flex items-center justify-center text-[#966A38] font-bold text-lg">
                +
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-6 rounded-xl bg-[#191919] text-white border border-[#191919]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#966A38] block mb-1">
                Technology
              </span>
              <h4 className="text-lg font-serif text-white font-medium">
                Innovify XR AR Layer
              </h4>
              <p className="text-xs text-white/70 mt-2">
                Lightweight WebAR triggers, 3D models &amp; QR routing.
              </p>
            </div>

            {/* Operator: Equals */}
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#FBFBF9] border border-[#191919]/10 flex items-center justify-center text-[#966A38] font-bold text-lg">
                =
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-xl bg-[#966A38]/10 border border-[#966A38]/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#966A38] block mb-1">
                Outcome
              </span>
              <h4 className="text-lg font-serif text-[#191919] font-medium">
                Interactive Experience
              </h4>
              <p className="text-xs text-[#5A5A58] mt-2">
                Customers experience products in their rooms before buying.
              </p>
            </div>

          </div>
        </div>

        {/* 6 Grid Bullets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {retainedAssets.map((asset, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-[#191919]/08 hover:border-[#966A38]/30 transition-colors shadow-xs"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#966A38] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-serif text-[#191919] font-medium">
                    {asset.title}
                  </h4>
                  <p className="text-xs text-[#5A5A58] mt-1.5 leading-relaxed">
                    {asset.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => {
              trackEvent('demo_click', 'Keep Website Section - Request Architecture Review');
              onConsultationClick();
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#191919] hover:bg-[#2A2A28] px-6 py-3.5 rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <span>Request Website Compatibility Review</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#966A38]" />
          </button>
        </div>

      </div>
    </section>
  );
};
