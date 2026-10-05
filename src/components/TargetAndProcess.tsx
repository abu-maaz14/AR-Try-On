import React from 'react';
import { 
  Briefcase, 
  Users, 
  Compass, 
  FileCheck, 
  Wrench, 
  Plug, 
  CheckCircle, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface TargetAndProcessProps {
  onStartProcess: () => void;
}

export const TargetAndProcess: React.FC<TargetAndProcessProps> = ({ onStartProcess }) => {
  const roles = [
    { title: 'Founders & CEOs', focus: 'Brand differentiation, high perceived value, and modern tech leadership.' },
    { title: 'E-Commerce Managers', focus: 'Reduced return rates, higher conversion velocity, and engaged session duration.' },
    { title: 'Retail & Showroom Directors', focus: 'Bridging physical floor visits to the customer’s residential space.' },
    { title: 'Product & Tech Leads', focus: 'Featherlight script injection, zero site rebuilds, and secure asset hosting.' },
    { title: 'Marketing Directors', focus: 'Viral social shareability, memorable buyer journeys, and PR buzz.' },
    { title: 'Digital Transformation Teams', focus: 'Future-proofing commercial pipelines for spatial computing.' },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'We examine your catalog, review customer purchase friction points, and identify high-leverage products for AR.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'PLAN',
      desc: 'We specify the optimal delivery architecture: WebAR, QR bridge, or native iOS/Android SDK embedding.',
      icon: FileCheck,
    },
    {
      num: '03',
      title: 'PREPARE',
      desc: '3D assets are scanned, cleaned, decimated, and baked with realistic PBR materials and true metric sizing.',
      icon: Wrench,
    },
    {
      num: '04',
      title: 'INTEGRATE',
      desc: 'The lightweight Innovify XR trigger is connected to your existing product detail templates and CMS.',
      icon: Plug,
    },
    {
      num: '05',
      title: 'TEST',
      desc: 'Rigorous cross-device QA across iPhones, iPads, and Android smartphones to guarantee seamless surface tracking.',
      icon: CheckCircle,
    },
    {
      num: '06',
      title: 'LAUNCH',
      desc: 'Your customers begin placing and experiencing your products in their own living spaces immediately.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Target Decision Makers */}
        <div className="mb-24">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
              Executive Stakeholders
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
              Built for Businesses That Want to Move Beyond Traditional Product Pages.
            </h2>
            <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
              Whether you’re running a furniture showroom, an e-commerce store, a retail brand, or a product-based business, 
              Innovify XR can help you introduce an immersive AR experience into your customer journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl border border-[#191919]/08 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#966A38]" />
                    <h3 className="text-base font-serif font-medium text-[#191919]">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#5A5A58] leading-relaxed">
                    {r.focus}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#191919]/06 text-[11px] text-[#966A38] font-medium">
                  Innovify XR Alignment
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: 6-Step Integration Process */}
        <div className="pt-16 border-t border-[#191919]/08">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
              Turn-Key Execution
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
              How We Deliver Your AR Experience.
            </h2>
            <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
              Our structured 6-phase rollout ensures smooth technical coordination, fast turnaround, 
              and zero disturbance to ongoing sales operations.
            </p>
          </div>

          {/* 6 Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 bg-white rounded-2xl border border-[#191919]/08 shadow-xs hover:border-[#966A38]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#966A38]">
                        PHASE {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#FBFBF9] border border-[#191919]/06 flex items-center justify-center text-[#191919]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif text-[#191919] font-medium mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#5A5A58] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#191919]/06 text-[11px] text-[#737373] flex items-center justify-between">
                    <span>Milestone Verified</span>
                    <span className="text-[#966A38]">Step {idx + 1}/6</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => {
                trackEvent('demo_click', 'TargetAndProcess - Initiate Integration Review');
                onStartProcess();
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#191919] hover:bg-[#2A2A28] rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <span>Initiate Integration Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#966A38]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
