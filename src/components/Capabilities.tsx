import React from 'react';
import { 
  Scan, 
  Globe, 
  Smartphone, 
  Box, 
  QrCode, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CapabilitiesProps {
  onSelectCapability: (capTitle: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  const capabilities = [
    {
      index: '01',
      title: 'Custom AR Try-On',
      desc: 'Allow your customers to place 1:1 true-scale 3D products directly into their physical room using mobile spatial tracking.',
      icon: Scan,
      deliverables: ['Real-world surface detection', 'Accurate metric sizing', 'Contact shadows & ambient occlusion'],
    },
    {
      index: '02',
      title: 'Website Integration',
      desc: 'Add seamless “Try It in Your Space” triggers to your existing website or online storefront without rebuilding pages or checkout.',
      icon: Globe,
      deliverables: ['Embeddable WebAR script', 'Zero friction for shoppers', 'Works on Shopify, WooCommerce, custom stacks'],
    },
    {
      index: '03',
      title: 'Mobile App Integration',
      desc: 'Integrate native AR experiences into your iOS (ARKit) or Android (ARCore) mobile applications for high-frequency brand shoppers.',
      icon: Smartphone,
      deliverables: ['Native SDK wrappers', 'Persistent catalog anchors', 'Low latency rendering'],
    },
    {
      index: '04',
      title: '3D Product Experiences',
      desc: 'Prepare, optimize, and compress CAD and 3D files for photorealistic, featherlight web and mobile rendering.',
      icon: Box,
      deliverables: ['PBR texture baking', 'glTF, GLB & USDZ generation', 'Sub-5MB asset streaming'],
    },
    {
      index: '05',
      title: 'QR-Based AR Activation',
      desc: 'Bridge the desktop-to-mobile journey smoothly. Laptop shoppers scan a product QR code to launch AR instantly on their smartphone.',
      icon: QrCode,
      deliverables: ['Instant dynamic QR codes', 'Direct camera deep link', 'No app store visit required'],
    },
    {
      index: '06',
      title: 'Custom AR Experiences',
      desc: 'Architect tailored AR flows aligned with your unique sales cycle, custom product variants, fabrics, and interactive configurators.',
      icon: Sparkles,
      deliverables: ['Multi-finish variant toggles', 'Bespoke UI themes', 'Custom analytics telemetry'],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
            What Innovify XR Provides
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
            We Bring Your Products Into Your Customer’s World.
          </h2>
          <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
            Innovify XR transforms your product catalog into an interactive AR experience.
            From initial 3D asset optimization to seamless storefront embeds and mobile SDKs,
            we handle every technical layer.
          </p>
        </div>

        {/* 6 Capabilities Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.index}
                className="group p-8 rounded-2xl bg-white border border-[#191919]/08 hover:border-[#966A38]/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#191919]/06 mb-6">
                    <span className="text-xs font-mono font-medium text-[#966A38]">
                      {item.index}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FBFBF9] border border-[#191919]/06 flex items-center justify-center text-[#191919] group-hover:text-[#966A38] group-hover:bg-[#966A38]/10 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#191919] font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A5A58] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 pt-4 border-t border-[#191919]/06 text-xs text-[#737373]">
                    {item.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#966A38]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('demo_click', `Clicked capability: ${item.title}`);
                      onSelectCapability(item.title);
                    }}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#191919] group-hover:text-[#966A38] transition-colors cursor-pointer"
                  >
                    <span>Discuss {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
