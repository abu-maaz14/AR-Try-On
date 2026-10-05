import React, { useState } from 'react';
import { LeadFormData } from '../types';
import { trackEvent } from '../utils/analytics';
import { Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, PhoneCall, Smartphone } from 'lucide-react';

interface ContactFormProps {
  initialSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    website: '',
    hasApp: 'no',
    productType: 'Furniture & Living',
    productCount: '1 - 5 Products (Pilot)',
    has3DModels: 'need_advice',
    interestedIn: initialSubject ? [initialSubject] : ['Website Integration', 'One-Time AR Implementation'],
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const interestOptions = [
    'One-Time AR Implementation',
    'Monthly AR License',
    'Website Integration',
    'Mobile App Integration',
    '3D Model Preparation',
    'Custom AR Workflow',
  ];

  const handleInterestToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.interestedIn.includes(item);
      const updated = exists
        ? prev.interestedIn.filter((i) => i !== item)
        : [...prev.interestedIn, item];
      return { ...prev, interestedIn: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.companyName.trim()) {
      setErrorMsg('Please complete your name, company, and valid business email.');
      return;
    }

    trackEvent('contact_form_submit', 'Submitted AR Consultation Form', {
      company: formData.companyName,
      productCount: formData.productCount,
      interestedIn: formData.interestedIn,
    });

    setErrorMsg(null);
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    trackEvent('whatsapp_click', 'Direct WhatsApp Button in Contact Section');
    const introMsg = encodeURIComponent(
      `Hi Innovify XR, I'm interested in adding AR Try-On to my website/app (${formData.companyName || 'my business'}) and would like to discuss the available options.`
    );
    window.open(`https://wa.me/923204513240?text=${introMsg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FBFBF9] border-b border-[#191919]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & WhatsApp Direct Connect */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-[#966A38] uppercase tracking-widest mb-3">
                Commercial Inquiry
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight text-balance">
                Let’s Put Your Products in Your Customers’ Space.
              </h2>
              <p className="text-base text-[#5A5A58] mt-4 leading-relaxed">
                Tell us about your product catalog, website, or mobile application and we will help you 
                determine the right AR Try-On architecture and financial model.
              </p>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#191919]/08 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/50 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#737373] block">
                    Immediate Direct Dialogue
                  </span>
                  <h3 className="text-lg font-serif text-[#191919] font-medium">
                    WhatsApp Advisory Desk
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#5A5A58] leading-relaxed">
                Prefer an immediate conversation? Message our spatial solutions team directly on WhatsApp
                for quick questions on feasibility, timelines, or pricing ballparks.
              </p>

              <div className="p-3 bg-[#FBFBF9] rounded-xl border border-[#191919]/06 flex items-center justify-between text-xs">
                <span className="text-[#737373]">Direct Line:</span>
                <span className="font-mono font-semibold text-[#191919]">+92 320 4513240</span>
              </div>

              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat With Us on WhatsApp</span>
              </button>
            </div>

            {/* Reassurance points */}
            <div className="space-y-3 text-xs text-[#5A5A58]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#966A38]" />
                <span>Strict non-disclosure on 3D assets and confidential designs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#966A38]" />
                <span>Initial technical feasibility review provided at no charge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#191919]/08 shadow-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#191919] font-medium">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#5A5A58] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#191919]">{formData.fullName}</strong>. An Innovify XR solutions architect will review <strong className="text-[#191919]">{formData.companyName}</strong>'s requirements and respond within 24 business hours.
                  </p>
                  
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleOpenWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#191919] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Also Send Via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#966A38]" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3 text-xs text-red-700 bg-red-50 rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Row 1: Name & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Atelier Living Co."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Job Title & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="e.g. Founder / Head of E-Commerce"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexander@atelierliving.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Phone / WhatsApp & Website */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Company Website URL
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="e.g. https://atelierliving.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: App Available? & Product Type */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Mobile App Available?
                      </label>
                      <select
                        value={formData.hasApp}
                        onChange={(e) => setFormData({ ...formData, hasApp: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors cursor-pointer"
                      >
                        <option value="no">No (Website Only)</option>
                        <option value="yes">Yes (iOS and/or Android Live)</option>
                        <option value="in_development">In Active Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Primary Product Category
                      </label>
                      <select
                        value={formData.productType}
                        onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors cursor-pointer"
                      >
                        <option value="Furniture & Living">Furniture &amp; Living</option>
                        <option value="Lighting & Decor">Lighting &amp; Home Decor</option>
                        <option value="Retail Products">Retail &amp; Appliances</option>
                        <option value="Showroom Architectural">Showroom &amp; Architectural</option>
                        <option value="Fashion & Accessories">Fashion &amp; Accessories</option>
                        <option value="Custom Bespoke">Custom / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Product Count & 3D Models */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Number of Products to Start
                      </label>
                      <select
                        value={formData.productCount}
                        onChange={(e) => setFormData({ ...formData, productCount: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors cursor-pointer"
                      >
                        <option value="1 - 5 Products (Pilot)">1 – 5 Flagship Items (Pilot)</option>
                        <option value="6 - 20 Products">6 – 20 Catalog Items</option>
                        <option value="21 - 50 Products">21 – 50 Products</option>
                        <option value="50+ Full Catalog">50+ (Full Catalog Digitization)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#191919] mb-1.5">
                        Do You Have 3D Models?
                      </label>
                      <select
                        value={formData.has3DModels}
                        onChange={(e) => setFormData({ ...formData, has3DModels: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors cursor-pointer"
                      >
                        <option value="need_advice">No (Need 3D Asset Creation)</option>
                        <option value="yes">Yes (GLB / CAD / 3D Ready)</option>
                        <option value="some">Some (Need Optimization)</option>
                      </select>
                    </div>
                  </div>

                  {/* Multi-Select: Interested In */}
                  <div>
                    <label className="block text-xs font-medium text-[#191919] mb-2">
                      Interested In (Select all that apply)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {interestOptions.map((opt) => {
                        const isChecked = formData.interestedIn.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => handleInterestToggle(opt)}
                            className={`p-2.5 rounded-xl text-xs text-left border transition-all flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? 'bg-[#966A38]/10 border-[#966A38] text-[#191919] font-medium'
                                : 'bg-[#FBFBF9] border-[#191919]/08 text-[#5A5A58] hover:border-[#191919]/20'
                            }`}
                          >
                            <span>{opt}</span>
                            <span className={`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] ${
                              isChecked ? 'bg-[#966A38] border-[#966A38] text-white' : 'border-[#191919]/20'
                            }`}>
                              {isChecked ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#191919] mb-1.5">
                      Project Notes / Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your target launch date, existing e-commerce platform (Shopify, WooCommerce, custom), or specific questions."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FBFBF9] border border-[#191919]/12 focus:border-[#966A38] focus:bg-white text-xs text-[#191919] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#191919] hover:bg-[#2A2A28] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#966A38]" />
                    <span>Request an AR Consultation</span>
                  </button>

                  <p className="text-[11px] text-[#737373] text-center">
                    We respond with a structured feasibility review and recommended rollout scope.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
