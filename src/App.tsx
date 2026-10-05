import React, { useState } from 'react';
import { SAMPLE_PRODUCTS } from './data/products';
import { ProductSample } from './types';
import { trackEvent } from './utils/analytics';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Capabilities } from './components/Capabilities';
import { WebsiteAndApp } from './components/WebsiteAndApp';
import { HowItWorks } from './components/HowItWorks';
import { DesktopAndMobileFlow } from './components/DesktopAndMobileFlow';
import { KeepYourWebsite } from './components/KeepYourWebsite';
import { Industries } from './components/Industries';
import { WhyAR } from './components/WhyAR';
import { BeforeAfter } from './components/BeforeAfter';
import { CenterpieceProductCard } from './components/CenterpieceProductCard';
import { CustomARAnd3D } from './components/CustomARAnd3D';
import { ServiceModel } from './components/ServiceModel';
import { ComparisonTable } from './components/ComparisonTable';
import { TargetAndProcess } from './components/TargetAndProcess';
import { InteractiveARDemo } from './components/InteractiveARDemo';
import { CaseStudies } from './components/CaseStudies';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ARModal } from './components/ARModal';

// Icons
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeModalProduct, setActiveModalProduct] = useState<ProductSample | null>(SAMPLE_PRODUCTS[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<'qr' | 'simulator'>('qr');
  const [contactSubject, setContactSubject] = useState<string>('Website Integration');

  // Trigger modal from any card/button
  const handleOpenARModal = (product: ProductSample, mode: 'qr' | 'simulator' = 'qr') => {
    setActiveModalProduct(product);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleCloseARModal = () => {
    setIsModalOpen(false);
  };

  const scrollToContact = (subject?: string) => {
    if (subject) setContactSubject(subject);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    trackEvent('whatsapp_click', 'Floating Action WhatsApp Button');
    const msg = encodeURIComponent(
      "Hi Innovify XR, I'm interested in adding AR Try-On to my website/app and would like to discuss the available options."
    );
    window.open(`https://wa.me/923204513240?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#191919] font-sans selection:bg-[#966A38]/20 selection:text-[#191919]">
      {/* Sticky 3-Zone Navigation */}
      <Navbar
        onOpenConsultation={() => scrollToContact()}
        onOpenDemo={scrollToDemo}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with Marquee Proposition & Product Card preview */}
        <Hero
          sampleProduct={SAMPLE_PRODUCTS[1]}
          onOpenARModal={handleOpenARModal}
          onExploreHowItWorks={scrollToHowItWorks}
          onGetSolution={() => scrollToContact('One-Time AR Implementation')}
        />

        {/* 2. Main Message: Customer Questions vs AR Experience */}
        <ProblemSolution />

        {/* 3. What Innovify XR Provides: 6 Core Capabilities */}
        <Capabilities
          onSelectCapability={(cap) => scrollToContact(cap)}
        />

        {/* 4. Website + App AR: Core Multi-Platform Cards */}
        <WebsiteAndApp
          onOpenDemo={scrollToDemo}
          onRequestQuote={() => scrollToContact('Website & Mobile App AR')}
        />

        {/* 5. 4-Step How It Works & Full Conversion Pipeline */}
        <HowItWorks />

        {/* 6. Desktop QR Handoff vs 1-Tap Mobile AR Experience */}
        <DesktopAndMobileFlow
          onOpenDemo={(mode) => handleOpenARModal(SAMPLE_PRODUCTS[0], mode || 'qr')}
        />

        {/* 7. Zero Rebuild Needed: Keep Your Existing Website */}
        <KeepYourWebsite
          onConsultationClick={() => scrollToContact('Website Integration Review')}
        />

        {/* 8. Industry Versatility: Furniture, Showrooms, Decor & Retail */}
        <Industries />

        {/* 9. Why AR: 6 Strategic Benefit Cards */}
        <WhyAR />

        {/* 10. Before vs After: Conventional vs Innovify XR AR */}
        <BeforeAfter />

        {/* 11. Centerpiece Feature: Luxury Furniture "Try It in Your Space" */}
        <CenterpieceProductCard
          product={SAMPLE_PRODUCTS[0]}
          onOpenARModal={handleOpenARModal}
        />

        {/* 12. Custom AR Tailoring, 3D Asset Support & Modern Tech Stack */}
        <CustomARAnd3D
          onDiscussIdea={() => scrollToContact('Custom AR Workflow')}
        />

        {/* 13. Service Models: One-Time Implementation vs Monthly License */}
        <ServiceModel
          onRequestQuote={(plan) => scrollToContact(plan)}
        />

        {/* 14. Packaging Framework & Feature Comparison Matrix */}
        <ComparisonTable
          onSelectTier={(tier) => scrollToContact(`Inquiry: ${tier}`)}
        />

        {/* 15. Target Decision Makers & 6-Step Implementation Process */}
        <TargetAndProcess
          onStartProcess={() => scrollToContact('Integration Review')}
        />

        {/* 16. Interactive AR Demo Studio (Live Interactive Workbench) */}
        <InteractiveARDemo
          onOpenARModal={handleOpenARModal}
        />

        {/* 17. Case Studies & Experience Types We Build */}
        <CaseStudies
          onSelectCategory={(cat) => scrollToContact(`Category: ${cat}`)}
        />

        {/* 18. Executive FAQ Accordion */}
        <FAQ />

        {/* 19. Contact & Lead Capture Form + Direct WhatsApp Advisory */}
        <ContactForm
          initialSubject={contactSubject}
        />

        {/* 20. Final High-Impact CTA */}
        <FinalCTA
          onGetStarted={() => scrollToContact('Get Started')}
          onOpenConsultation={() => scrollToContact('Consultation')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Unified Try-On & QR Handoff Modal */}
      <ARModal
        product={activeModalProduct}
        isOpen={isModalOpen}
        onClose={handleCloseARModal}
        initialMode={modalMode}
      />

      {/* Floating WhatsApp Action Pill (Subtle, fixed bottom-right) */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={handleFloatingWhatsApp}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs font-semibold cursor-pointer group hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </button>
      </aside>
    </div>
  );
}
