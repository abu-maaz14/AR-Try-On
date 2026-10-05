import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Website & App', href: '#web-and-app' },
    { name: 'Why AR', href: '#why-ar' },
    { name: 'Licensing', href: '#licensing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (name: string, href: string) => {
    trackEvent('demo_click', `Navigated to ${name}`);
    setMobileMenuOpen(false);
  };

  const handleWhatsAppDirect = () => {
    trackEvent('whatsapp_click', 'Navbar WhatsApp CTA');
    const msg = encodeURIComponent(
      "Hi Innovify XR, I'm interested in adding AR Try-On to my website/app and would like to discuss the available options."
    );
    window.open(`https://wa.me/923204513240?text=${msg}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#191919]/08 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-2xl sm:text-2xl font-serif text-[#191919] tracking-tight font-medium hover:text-[#966A38] transition-colors"
          >
            Innovify XR
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A4A48]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name, link.href)}
                className="hover:text-[#191919] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#966A38] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#4A4A48] hover:text-[#191919] transition-colors rounded-lg border border-[#191919]/10 hover:border-[#191919]/25 bg-white/70"
            >
              <span>+92 320 4513240</span>
            </button>

            <button
              type="button"
              onClick={() => {
                trackEvent('demo_click', 'Navbar Get AR Demo');
                onOpenDemo();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#191919] hover:bg-[#2A2A28] rounded-lg transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Get AR Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#966A38]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDemo()}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#191919] rounded-lg"
            >
              AR Demo
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#191919] hover:bg-[#EAE8E3] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBFBF9] border-b border-[#191919]/10 px-6 py-6 space-y-4 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name, link.href)}
                className="text-base font-medium text-[#191919] hover:text-[#966A38] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#191919]/08 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-white bg-[#191919] rounded-lg"
            >
              Get Your AR Solution
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-[#191919] bg-white border border-[#191919]/10 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp (+92 320 4513240)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
