import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  validateEnquiryForm,
  openWhatsAppEnquiry,
  getWhatsAppEnquiryUrl,
} from '@/utils/whatsappEnquiry';

const contactInfo = [
  {
    icon: 'ri-phone-line',
    title: 'Official Mobile',
    value: '+91 9990390519',
    link: 'tel:+919990390519',
    color: 'from-primary-500/20 to-primary-400/10',
  },
  {
    icon: 'ri-whatsapp-line',
    title: 'Official WhatsApp',
    value: '+91 9990390519',
    link: 'https://wa.me/919990390519',
    color: 'from-green-500/20 to-accent-500/10',
  },
  {
    icon: 'ri-mail-line',
    title: 'Official Email',
    value: 'aisoftwaretechnology2026@gmail.com',
    link: 'mailto:aisoftwaretechnology2026@gmail.com',
    color: 'from-accent-500/20 to-accent-400/10',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Office Address',
    value: 'House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085',
    link: 'https://maps.google.com/?q=House+No.+158-159+Pocket-10+Sector-24+Rohini+New+Delhi+110085',
    color: 'from-primary-500/20 to-accent-500/10',
  },
  {
    icon: 'ri-time-line',
    title: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    link: '#contact-form',
    color: 'from-accent-400/20 to-primary-500/10',
  },
];

const socialLinks = [
  { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/digiindiasolutions/', label: 'LinkedIn' },
  { icon: 'ri-twitter-x-fill', href: 'https://twitter.com/digiindiasolutions', label: 'Twitter' },
  { icon: 'ri-instagram-line', href: 'https://www.instagram.com/digiindiasolutions/', label: 'Instagram' },
  { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/digiindiasolution/', label: 'Facebook' },
  { icon: 'ri-youtube-fill', href: 'https://www.youtube.com/@digiindiasolutions', label: 'YouTube' },
];

const serviceOptions = [
  'Custom Software Development',
  'ERP Software Development',
  'CRM Software Development',
  'HRMS & Payroll Software',
  'SaaS Application Development',
  'Android & iOS App Development',
  'Website & Web Application Development',
  'AI & Business Automation',
  'WhatsApp Business API & Chatbot Integration',
  'Inventory Management Software',
  'Billing & GST Software',
  'Order Management Software',
  'Manufacturing Management Software',
  'Hospital & Clinic Management Software',
  'Hotel Management Software',
  'Logistics & Shipment Tracking Software',
  'Field Sales & GPS Tracking Software',
  'Attendance & Workforce Management Software',
  'Retail & POS Software',
  'E-commerce Development',
  'API Development & Integration',
  'Software Maintenance & Support',
  'Other',
];

const budgetOptions = [
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,50,000',
  '₹1,50,000 - ₹3,50,000',
  '₹3,50,000 - ₹7,50,000',
  '₹7,50,000+ (Enterprise Scale)',
  'Need Custom Scope Assessment',
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'whatsapp_opened' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

  usePageSEO({
    title: 'Contact AI Software Technology | Book Free Software Demo | +91 9990390519',
    description:
      'Contact AI Software Technology (A Brand of Digi India Solutions) at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085. Call or WhatsApp +91 9990390519 or email aisoftwaretechnology2026@gmail.com for Custom Software, ERP, CRM, HRMS, SaaS, Mobile Apps, and AI Automation.',
    keywords:
      'contact AI Software Technology, book software demo, custom software consultation India, ERP CRM HRMS quote, +91 9990390519, aisoftwaretechnology2026@gmail.com, Digi India Solutions Rohini New Delhi',
    canonical: 'https://aisoftwaretechnology.in/contact',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('company_alt') as HTMLInputElement)?.value?.trim();
    if (honeypot) {
      return;
    }

    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => {
      if (key !== 'company_alt' && typeof val === 'string') {
        data[key] = val.trim();
      }
    });

    const enquiryPayload = {
      name: data.name || '',
      mobile: data.phone || data.whatsapp || '',
      email: data.email || '',
      companyName: data.company || '',
      serviceRequired: data.service || 'Custom Software Development',
      estimatedBudget: data.budget || 'To be discussed',
      projectRequirements: data.message || '',
      enquirySource: 'Contact Form',
    };

    const validation = validateEnquiryForm(enquiryPayload);
    if (!validation.valid) {
      setStatus('error');
      setErrorMsg(validation.error || 'Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Open WhatsApp Click-to-Chat immediately on user gesture
    const waUrl = getWhatsAppEnquiryUrl(enquiryPayload);
    setLastWhatsAppUrl(waUrl);
    openWhatsAppEnquiry(enquiryPayload);
    setStatus('whatsapp_opened');

    // Also preserve non-blocking background form logging if available
    try {
      await fetch('https://readdy.ai/api/form/d9hs9fghpes2mi34rs40', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data),
      });
    } catch {
      // Background logging is optional; WhatsApp Click-to-Chat is primary
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="absolute inset-0 aurora-bg"></div>
          <div className="absolute inset-0 grid-bg"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">AI Software Technology — A Brand of Digi India Solutions</div>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Let&apos;s <span className="text-gradient">Build Together</span>
              </h1>
              <p className="text-white/45 text-base md:text-lg">
                Have a custom software, ERP, CRM, HRMS, SaaS, or mobile app project in mind? Speak with our solution architects or send your requirements directly via WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="relative z-10 -mt-8 max-w-[1400px] mx-auto px-6 md:px-10 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card-hover rounded-2xl p-5 text-center group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${info.color} border border-white/[0.06] flex items-center justify-center mb-3`}>
                  <i className={`${info.icon} text-xl text-accent-400`}></i>
                </div>
                <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{info.title}</div>
                <div className="text-white text-sm font-medium break-all">{info.value}</div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section id="contact-form" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Form */}
              <motion.div
                className="glass-card rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-white text-xl">Request a Free Consultation or Demo</h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                    <i className="ri-whatsapp-line"></i> Direct WhatsApp
                  </span>
                </div>
                <p className="text-white/40 text-xs mb-6">
                  Fill in your project requirements below. Submitting will open WhatsApp with your structured enquiry ready to send to our team at +91 9990390519.
                </p>

                <form
                  data-readdy-form="d9ie9a4oq4dpg2lrnbcg"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="hp-field"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                        placeholder="rahul@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Company / Business Name</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Service Required *</label>
                      <select
                        name="service"
                        required
                        defaultValue="Custom Software Development"
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-dark-500 text-white">{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Estimated Budget</label>
                      <select
                        name="budget"
                        defaultValue="₹50,000 - ₹1,50,000"
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-dark-500 text-white">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">City / Location</label>
                      <input
                        type="text"
                        name="city"
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all"
                        placeholder="New Delhi, India"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs mb-1.5">Project Timeline</label>
                      <select
                        name="timeline"
                        className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: 'none' }}
                      >
                        <option value="" className="bg-dark-500 text-white">Select timeline...</option>
                        <option value="Immediate (1-2 weeks)" className="bg-dark-500 text-white">Immediate (1–2 weeks)</option>
                        <option value="Short (1 month)" className="bg-dark-500 text-white">Short (1 month)</option>
                        <option value="Medium (1-3 months)" className="bg-dark-500 text-white">Medium (1–3 months)</option>
                        <option value="Long (3-6 months)" className="bg-dark-500 text-white">Long (3–6 months)</option>
                        <option value="Ongoing" className="bg-dark-500 text-white">Ongoing / Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs mb-1.5">Project Requirements *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      maxLength={800}
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-400/40 focus:bg-white/[0.05] transition-all resize-none"
                      placeholder="Describe your business workflow, software modules needed, and goals..."
                    />
                    <div className="text-right text-white/20 text-xs mt-1">Max 800 characters</div>
                  </div>

                  {status === 'error' && errorMsg && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      <i className="ri-error-warning-line text-base flex-shrink-0"></i>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {status === 'whatsapp_opened' && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs space-y-2">
                      <div className="flex items-start gap-2.5">
                        <i className="ri-whatsapp-line text-lg text-emerald-400 flex-shrink-0 mt-0.5"></i>
                        <div>
                          <p className="font-semibold text-white">
                            WhatsApp is opening with your enquiry details. Please press Send to complete your enquiry.
                          </p>
                          <p className="text-white/60 mt-1">
                            Your form details remain visible above for your review. If WhatsApp did not open automatically, click the button below:
                          </p>
                        </div>
                      </div>
                      {lastWhatsAppUrl && (
                        <div className="pt-1 flex items-center gap-3">
                          <a
                            href={lastWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                          >
                            <i className="ri-whatsapp-line"></i> Open WhatsApp Again
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              const formEl = document.querySelector('#contact-form form') as HTMLFormElement | null;
                              formEl?.reset();
                              setStatus('idle');
                            }}
                            className="text-white/50 hover:text-white underline cursor-pointer"
                          >
                            Clear Form
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full glass-btn-primary cursor-pointer disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-whatsapp-line text-lg"></i>
                      Continue to WhatsApp with Enquiry Details
                      <i className="ri-arrow-right-up-line"></i>
                    </span>
                  </motion.button>
                </form>
              </motion.div>

              {/* Map + Social */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6244666711914!2d77.0841007755044!3d28.730766875611323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1784969452127!5m2!1sen!2sin"
                    width="100%"
                    height="360"
                    style={{ border: 0, borderRadius: '20px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="AI Software Technology (A Brand of Digi India Solutions) - Rohini, New Delhi Office"
                  />
                </div>

                {/* Map Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="https://maps.google.com/?q=House+No.+158-159+Pocket-10+Sector-24+Rohini+New+Delhi+110085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold hover:bg-accent-500/15 transition-all cursor-pointer"
                  >
                    <i className="ri-direction-line"></i>
                    Get Directions
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Digi+India+Solutions/@28.7307669,77.0841008,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 text-sm font-semibold hover:bg-white/[0.06] hover:text-white transition-all cursor-pointer"
                  >
                    <i className="ri-external-link-line"></i>
                    Open in Google Maps
                  </a>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-6">
                  <h4 className="font-heading font-semibold text-white text-sm mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-accent-400 hover:bg-white/[0.06] hover:border-accent-400/20 transition-all cursor-pointer"
                      >
                        <i className={s.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919990390519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover rounded-2xl p-5 flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-xl text-green-400"></i>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">Chat on WhatsApp (+91 9990390519)</div>
                    <div className="text-white/30 text-xs">Instant consultation with our software team</div>
                  </div>
                  <i className="ri-arrow-right-line text-white/20 group-hover:text-accent-400 ml-auto transition-colors"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}