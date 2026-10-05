import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FinalCTAProps {
  onGetStarted: () => void;
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted, onOpenConsultation }) => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'Final CTA WhatsApp Chat');
    const msg = encodeURIComponent(
      "Hi Innovify XR, I'd like to talk to someone about adding AR Try-On to my website/app."
    );
    window.open(`https://wa.me/923204513240?text=${msg}`, '_blank');
  };

  return (
    <section className="py-28 bg-[#191919] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#966A38]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle Brand Tagline */}
        <div className="text-xs font-mono tracking-widest text-[#966A38] uppercase">
          Your Products. Their Space. Our Technology.
        </div>

        {/* Marquee Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-tight text-balance">
          Don’t Just Show Your Products. <br />
          <span className="italic text-[#966A38]">Let Customers Experience Them.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Bring custom AR Try-On to your website or mobile app with Innovify XR.
          Transform buyer hesitation into confident, validated purchase decisions.
        </p>

        {/* CTA Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => {
              trackEvent('demo_click', 'Final CTA - Get Started');
              onGetStarted();
            }}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#191919] bg-white hover:bg-[#FBFBF9] rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group cursor-pointer"
          >
            <span>Let’s Build Your AR Experience</span>
            <ArrowRight className="w-4 h-4 text-[#966A38] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#966A38]" />
            <span>Talk to Innovify XR (+92 320 4513240)</span>
          </button>
        </div>

        {/* Clean unboxed footer line */}
        <div className="pt-8 text-xs text-white/60 tracking-wider">
          <span>Custom AR Experiences</span>
          <span className="mx-2 text-[#966A38]">·</span>
          <span>Website Integration</span>
          <span className="mx-2 text-[#966A38]">·</span>
          <span>App Integration</span>
        </div>

      </div>
    </section>
  );
};
