import React from 'react';
import { MessageSquare, ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'Footer WhatsApp');
    const msg = encodeURIComponent(
      "Hi Innovify XR, I'm reaching out from your website regarding AR Try-On solutions."
    );
    window.open(`https://wa.me/923204513240?text=${msg}`, '_blank');
  };

  const handleSocialClick = (platform: string) => {
    trackEvent('social_click', `Clicked ${platform}`);
  };

  return (
    <footer className="bg-[#141413] text-[#A3A3A0] text-xs border-t border-white/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Lockup & Value statement */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-2xl font-serif text-white tracking-tight font-medium inline-block">
              Innovify XR
            </a>
            <p className="text-xs text-[#8A8A85] max-w-sm leading-relaxed">
              Custom AR Try-On and “View in Your Space” technology engineered for modern websites and mobile applications. 
              Let your customers experience products before making purchasing decisions.
            </p>

            <div className="pt-2 text-xs text-[#8A8A85] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-white">Direct WhatsApp:</span>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="font-mono text-[#966A38] hover:underline cursor-pointer"
                >
                  +92 320 4513240
                </button>
              </div>
              <p>Email: <span className="text-white">contact@innovifyxr.com</span></p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#web-and-app" className="hover:text-white transition-colors">AR for Websites</a></li>
              <li><a href="#web-and-app" className="hover:text-white transition-colors">AR for Apps</a></li>
              <li><a href="#licensing" className="hover:text-white transition-colors">Licensing Models</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Custom AR Try-On</span></li>
              <li><span className="text-white/80">WebAR Integration</span></li>
              <li><span className="text-white/80">Mobile AR (iOS / Android)</span></li>
              <li><span className="text-white/80">3D Product Visualization</span></li>
              <li><span className="text-white/80">CAD to PBR Asset Baking</span></li>
              <li><span className="text-white/80">Cross-Device QR Handoff</span></li>
            </ul>
          </div>

          {/* Col 5: Social Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('Instagram')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#966A38]" />
                  <span>Instagram — Innovify XR</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('Facebook')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#966A38]" />
                  <span>Facebook — Innovify XR</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('LinkedIn')}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#966A38]" />
                  <span>LinkedIn — Innovify XR</span>
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/08 hover:bg-white/12 text-white text-[11px] border border-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#966A38]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-white/08 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © {new Date().getFullYear()} Innovify XR. All rights reserved.
          </div>
          <div className="text-[#966A38] font-medium tracking-wide">
            AR technology by Innovify XR
          </div>
        </div>

      </div>
    </footer>
  );
};
