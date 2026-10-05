import React from 'react';
import { Layers, FileCode2, Cpu, CheckCircle2, ArrowRight, Sparkles, Box, HardDrive } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CustomARAnd3DProps {
  onDiscussIdea: () => void;
}

export const CustomARAnd3D: React.FC<CustomARAnd3DProps> = ({ onDiscussIdea }) => {
  const customDimensions = [
    { label: 'Your Products', desc: 'Form-fitted spatial collision bounds tailored to furniture, decor, or accessories.' },
    { label: 'Your Brand Identity', desc: 'Custom buttons, typography matching, bespoke UI controls, and branded loaders.' },
    { label: 'Your Website Stack', desc: 'Zero code bloat, asynchronous bundle loading, and full platform compatibility.' },
    { label: 'Your Customer Journey', desc: 'Direct cart routing, showroom floor QR triggers, and custom conversion tracking.' },
  ];

  const technologies = [
    { title: 'WebAR Frameworks', desc: 'Zero-install spatial tracking directly inside Safari, Chrome, Edge, and mobile browsers.' },
    { title: 'WebXR Compatible', desc: 'Next-generation web spatial standards supported on modern handhelds and headsets.' },
    { title: 'Three.js & Canvas', desc: 'High-performance interactive 3D WebGL viewport rendering with PBR shaders.' },
    { title: 'GLB & glTF Standards', desc: 'Lightweight, compressed 3D file formats optimized for sub-second mobile streaming.' },
    { title: 'USDZ for iOS QuickLook', desc: 'Native Apple AR integration with realistic surface reflection and depth sensors.' },
    { title: 'Dynamic QR Engine', desc: 'Instant server-rendered product QR codes with cross-device session continuation.' },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Custom AR Tailoring */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest">
              Bespoke Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
              Your Business. Your Products. <br />
              <span className="italic text-[#966A38]">Your AR Experience.</span>
            </h2>
            <p className="text-base text-[#5A5A58] leading-relaxed">
              Innovify XR does not provide a rigid, one-size-fits-all plugin. We engineer the AR experience
              specifically around your product catalog, brand aesthetic, existing e-commerce stack, and buyer funnel.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {customDimensions.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#FBFBF9] rounded-xl border border-[#191919]/06">
                  <h4 className="text-xs font-semibold text-[#191919] mb-1">{item.label}</h4>
                  <p className="text-xs text-[#737373] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  trackEvent('demo_click', 'Discuss Your AR Idea Clicked');
                  onDiscussIdea();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#191919] hover:bg-[#2A2A28] rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <span>Discuss Your AR Idea</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#966A38]" />
              </button>
            </div>
          </div>

          {/* Part 2: 3D Model Support (Already Have vs Don't Have) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Box A: Already Have 3D Models */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBFBF9] border border-[#191919]/08">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#191919]/08 flex items-center justify-center text-[#966A38] shadow-2xs">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">
                    Asset Readiness
                  </span>
                  <h3 className="text-xl font-serif text-[#191919] font-medium">
                    Already Have 3D Models?
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#5A5A58] leading-relaxed mb-4">
                If your design team or suppliers already maintain CAD or 3D files, Innovify XR can ingest,
                clean, and compress them for real-time web delivery.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-[#191919] flex-wrap">
                <span className="px-2.5 py-1 bg-white border border-[#191919]/08 rounded-md font-semibold">.GLB</span>
                <span className="px-2.5 py-1 bg-white border border-[#191919]/08 rounded-md font-semibold">.glTF</span>
                <span className="px-2.5 py-1 bg-white border border-[#191919]/08 rounded-md font-semibold">.USDZ</span>
                <span className="px-2.5 py-1 bg-white border border-[#191919]/08 rounded-md font-semibold">.FBX / .OBJ</span>
              </div>
            </div>

            {/* Box B: Don't Have 3D Models */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#191919] text-white border border-[#191919] shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#966A38]">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#966A38]">
                    Full-Service Production
                  </span>
                  <h3 className="text-xl font-serif text-white font-medium">
                    Don’t Have 3D Models?
                  </h3>
                </div>
              </div>

              <p className="text-xs text-white/80 leading-relaxed mb-4">
                No problem. Innovify XR provides 3D asset preparation and digital twin modeling.
                Send us multi-angle high-resolution photographs and dimensions, and our 3D artists will create
                photorealistic, featherlight models optimized for AR Try-On.
              </p>

              <ul className="space-y-1.5 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#966A38]" />
                  <span>CAD polygon decimation &amp; mesh cleanup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#966A38]" />
                  <span>Physically Based Rendering (PBR) texture baking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Part 3: Technology Infrastructure */}
        <div className="pt-16 border-t border-[#191919]/08">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-2">
              Engineering Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal">
              Built With Modern AR Technology.
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A58] mt-2 leading-relaxed">
              We leverage production-grade open standards and native mobile spatial stacks to guarantee
              instant loading times, buttery-smooth frame rates, and zero browser crashes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="p-6 bg-[#FBFBF9] rounded-xl border border-[#191919]/06">
                <h4 className="text-sm font-semibold text-[#191919] mb-1.5">
                  {tech.title}
                </h4>
                <p className="text-xs text-[#5A5A58] leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
