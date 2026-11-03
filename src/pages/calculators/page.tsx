import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  validateEnquiryForm,
  openWhatsAppEnquiry,
  getWhatsAppEnquiryUrl,
} from '@/utils/whatsappEnquiry';
import { checkFormRateLimit } from '@/utils/security';

const baseCalcOptions = {
  website: {
    title: 'Website & Web App Development',
    icon: 'ri-global-line',
    basePrice: 80000,
    categories: [
      {
        name: 'Pages',
        feature: 'pages',
        options: [
          { label: 'Landing Page (1-3 pages)', price: 0, feature: 'pages', value: 1 },
          { label: 'Small Site (5-10 pages)', price: 50000, feature: 'pages', value: 2 },
          { label: 'Mid Site (10-25 pages)', price: 120000, feature: 'pages', value: 3 },
          { label: 'Large Site (25-50 pages)', price: 250000, feature: 'pages', value: 4 },
        ],
      },
      {
        name: 'Design',
        feature: 'design',
        options: [
          { label: 'Template Customization', price: 0, feature: 'design', value: 1 },
          { label: 'Custom UI Design', price: 60000, feature: 'design', value: 2 },
          { label: 'Premium Branding + Design System', price: 150000, feature: 'design', value: 3 },
        ],
      },
      {
        name: 'Functionality',
        feature: 'func',
        options: [
          { label: 'Static Website', price: 0, feature: 'func', value: 1 },
          { label: 'CMS / Blog Integration', price: 40000, feature: 'func', value: 2 },
          { label: 'E-Commerce (Shop)', price: 120000, feature: 'func', value: 3 },
          { label: 'Custom Web Application', price: 250000, feature: 'func', value: 4 },
        ],
      },
      {
        name: 'Extras',
        feature: 'extra',
        options: [
          { label: 'None', price: 0, feature: 'extra', value: 0 },
          { label: 'SEO + Analytics', price: 30000, feature: 'extra', value: 1 },
          { label: 'Multilingual Support', price: 50000, feature: 'extra', value: 2 },
          { label: 'Membership System', price: 80000, feature: 'extra', value: 3 },
          { label: 'AI Chatbot Integration', price: 100000, feature: 'extra', value: 4 },
        ],
      },
    ],
  },
  mobile: {
    title: 'Android & iOS App Development',
    icon: 'ri-smartphone-line',
    basePrice: 200000,
    categories: [
      {
        name: 'Platform',
        feature: 'platform',
        options: [
          { label: 'iOS Only', price: 0, feature: 'platform', value: 1 },
          { label: 'Android Only', price: 0, feature: 'platform', value: 2 },
          { label: 'Both (iOS + Android)', price: 100000, feature: 'platform', value: 3 },
        ],
      },
      {
        name: 'Complexity',
        feature: 'complexity',
        options: [
          { label: 'Simple App (CRUD)', price: 0, feature: 'complexity', value: 1 },
          { label: 'Medium (API + Database)', price: 100000, feature: 'complexity', value: 2 },
          { label: 'Complex (Real-time + AI)', price: 300000, feature: 'complexity', value: 3 },
        ],
      },
      {
        name: 'Features',
        feature: 'features',
        options: [
          { label: 'Basic', price: 0, feature: 'features', value: 1 },
          { label: 'Social + Payments', price: 80000, feature: 'features', value: 2 },
          { label: 'Chat + Live Tracking', price: 180000, feature: 'features', value: 3 },
        ],
      },
    ],
  },
  software: {
    title: 'Custom Software / ERP / CRM',
    icon: 'ri-settings-line',
    basePrice: 300000,
    categories: [
      {
        name: 'Type',
        feature: 'type',
        options: [
          { label: 'ERP Solution', price: 500000, feature: 'type', value: 1 },
          { label: 'CRM System', price: 300000, feature: 'type', value: 2 },
          { label: 'HRMS & Attendance Platform', price: 250000, feature: 'type', value: 3 },
          { label: 'Inventory & Order Management', price: 200000, feature: 'type', value: 4 },
        ],
      },
      {
        name: 'Scale',
        feature: 'scale',
        options: [
          { label: 'Small (1-50 users)', price: 0, feature: 'scale', value: 1 },
          { label: 'Medium (50-500 users)', price: 100000, feature: 'scale', value: 2 },
          { label: 'Enterprise (500+ users)', price: 300000, feature: 'scale', value: 3 },
        ],
      },
      {
        name: 'Integration',
        feature: 'integration',
        options: [
          { label: 'Standalone', price: 0, feature: 'integration', value: 1 },
          { label: '2-3 API Integrations', price: 50000, feature: 'integration', value: 2 },
          { label: '5+ System Integration', price: 150000, feature: 'integration', value: 3 },
        ],
      },
    ],
  },
  marketing: {
    title: 'AI & Business Automation',
    icon: 'ri-brain-line',
    basePrice: 60000,
    categories: [
      {
        name: 'Automation Scope',
        feature: 'service',
        options: [
          { label: 'WhatsApp Business API + Chatbot', price: 40000, feature: 'service', value: 1 },
          { label: 'CRM Lead & Follow-up Automation', price: 75000, feature: 'service', value: 2 },
          { label: 'AI Document / OCR Workflow', price: 120000, feature: 'service', value: 3 },
          { label: 'Full Enterprise AI & ERP Automation', price: 220000, feature: 'service', value: 4 },
        ],
      },
      {
        name: 'Support & Maintenance',
        feature: 'duration',
        options: [
          { label: '3 Months Included', price: 0, feature: 'duration', value: 1 },
          { label: '6 Months SLA Support', price: 1.5, feature: 'duration', value: 2 },
          { label: '12 Months Annual AMC', price: 2.2, feature: 'duration', value: 3 },
        ],
      },
    ],
  },
};

type CalcType = 'website' | 'mobile' | 'software' | 'marketing';

export default function Calculators() {
  const [calcType, setCalcType] = useState<CalcType>('software');
  const calc = baseCalcOptions[calcType];

  usePageSEO({
    title: 'Software Project Cost Calculator | AI Software Technology',
    description:
      'Estimate scope and investment for Custom Software, ERP, CRM, HRMS, Mobile Apps, and Web Applications with AI Software Technology (A Brand of Digi India Solutions).',
    canonical: 'https://aisoftwaretechnology.in/calculators',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Software Project Cost Calculator — AI Software Technology',
        description:
          'Interactive software project cost and scope estimator for Custom Software, ERP, CRM, HRMS, Mobile Apps, Web Applications, and AI Automation.',
        url: 'https://aisoftwaretechnology.in/calculators',
        isPartOf: { '@id': 'https://aisoftwaretechnology.in/#website' },
        about: { '@id': 'https://aisoftwaretechnology.in/#organization' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
          { '@type': 'ListItem', position: 2, name: 'Cost Calculators', item: 'https://aisoftwaretechnology.in/calculators' },
        ],
      },
    ],
  });

  const [selections, setSelections] = useState<Record<string, number>>({});
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [requirements, setRequirements] = useState('');
  const [formError, setFormError] = useState('');
  const [waOpened, setWaOpened] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const getPrice = () => {
    let total = calc.basePrice;
    calc.categories.forEach((cat) => {
      cat.options.forEach((opt) => {
        const key = `${calcType}-${cat.feature}`;
        const selectedValue = selections[key];
        if (selectedValue === opt.value || (!selectedValue && opt.price === 0)) {
          if (key === `${calcType}-duration` && opt.price > 0) {
            total = Math.round(total * opt.price);
          } else {
            total += opt.price;
          }
        }
      });
    });
    return total;
  };

  const getSelectedSummary = () => {
    const chosen: string[] = [];
    calc.categories.forEach((cat) => {
      const key = `${calcType}-${cat.feature}`;
      const selectedValue = selections[key];
      const match =
        cat.options.find((o) => o.value === selectedValue) ||
        cat.options.find((o) => o.price === 0) ||
        cat.options[0];
      if (match) {
        chosen.push(`${cat.name}: ${match.label}`);
      }
    });
    return chosen.join(' | ');
  };

  const total = getPrice();
  const minBudget = total * 0.85;
  const maxBudget = total * 1.15;
  const budgetRangeLabel = `₹${(minBudget / 100000).toFixed(1)}L - ₹${(maxBudget / 100000).toFixed(1)}L (Est. ₹${(total / 100000).toFixed(1)}L)`;

  const handleEstimateSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('company_alt') as HTMLInputElement | null)?.value?.trim();
    if (honeypot) {
      return;
    }

    const summary = getSelectedSummary();
    const combinedRequirements = requirements.trim()
      ? `${requirements.trim()}\n[Selected Configuration: ${summary}]`
      : `Requesting project estimate for ${calc.title}. Selected Configuration: ${summary}`;

    const payload = {
      name,
      mobile,
      email,
      companyName,
      serviceRequired: calc.title,
      estimatedBudget: budgetRangeLabel,
      projectRequirements: combinedRequirements,
      enquirySource: 'Get Estimate Form',
    };

    const validation = validateEnquiryForm(payload);
    if (!validation.valid) {
      setFormError(validation.error || 'Please fill in all required fields.');
      return;
    }

    const rateCheck = checkFormRateLimit('calculator-estimate', 8000);
    if (!rateCheck.allowed) {
      setFormError(`Please wait ${rateCheck.retryAfterSec} seconds before submitting another quote request.`);
      return;
    }

    const url = getWhatsAppEnquiryUrl(payload);
    setLastWaUrl(url);
    openWhatsAppEnquiry(payload);
    setWaOpened(true);
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <section className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag mb-5">Instant Pricing &amp; WhatsApp Quote</div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3">
                Project <span className="text-gradient">Cost Calculator</span>
              </h1>
              <p className="text-white/45 text-base max-w-xl">
                Get an instant, no-commitment estimate for your software project. Adjust modules to see real-time pricing and send your estimate directly to our team via WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Calculator Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {(Object.keys(baseCalcOptions) as CalcType[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setCalcType(key);
                  setSelections({});
                  setWaOpened(false);
                }}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  calcType === key
                    ? 'glass-card bg-accent-500/10 border-accent-500/20 text-white'
                    : 'text-white/40 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <i className={baseCalcOptions[key].icon}></i>
                {baseCalcOptions[key].title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
            {/* Options */}
            <div className="space-y-6">
              {calc.categories.map((cat) => (
                <div key={cat.name} className="glass-card rounded-2xl p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-white text-sm mb-4">{cat.name}</h3>
                  <div className="space-y-2">
                    {cat.options.map((opt) => {
                      const key = `${calcType}-${cat.feature}`;
                      const selected =
                        selections[key] === opt.value || (!selections[key] && opt.price === 0);
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setSelections((s) => ({ ...s, [key]: opt.value }))}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                            selected
                              ? 'bg-accent-500/10 border border-accent-500/20 text-white'
                              : 'bg-white/[0.02] border border-white/[0.04] text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                          }`}
                        >
                          <span className="text-xs">{opt.label}</span>
                          <span
                            className={`text-xs font-semibold whitespace-nowrap ${
                              selected ? 'text-accent-400' : 'text-white/30'
                            }`}
                          >
                            {opt.price === 0
                              ? 'Included'
                              : cat.feature === 'duration'
                              ? `${opt.price}x`
                              : `+ ₹${(opt.price / 1000).toFixed(0)}K`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Summary + Get Estimate Form */}
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="glass-card rounded-2xl p-6 md:p-7 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-500/8 blur-[60px] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-center pb-5 mb-5 border-b border-white/[0.06]">
                    <p className="text-white/35 text-xs uppercase tracking-[0.2em] mb-2">
                      Estimated Investment
                    </p>
                    <motion.p
                      key={total}
                      className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-1.5"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ₹{(total / 100000).toFixed(1)}L
                    </motion.p>
                    <p className="text-white/40 text-xs">
                      Range: ₹{(minBudget / 100000).toFixed(1)}L – ₹{(maxBudget / 100000).toFixed(1)}L
                    </p>
                  </div>

                  {/* Get Detailed Estimate via WhatsApp Form */}
                  <h4 className="font-heading font-semibold text-white text-sm mb-1 flex items-center gap-2">
                    <i className="ri-whatsapp-line text-emerald-400"></i>
                    Get Detailed Quote on WhatsApp
                  </h4>
                  <p className="text-white/40 text-[11px] mb-4">
                    Enter your details to open WhatsApp with this estimate and your requirements pre-filled.
                  </p>

                  <form onSubmit={handleEstimateSubmit} className="space-y-3" noValidate>
                    <input
                      type="text"
                      name="company_alt"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                      className="hp-field"
                    />
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name *"
                        maxLength={100}
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Mobile / WhatsApp Number *"
                        maxLength={20}
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address *"
                        maxLength={254}
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company Name (Optional)"
                        maxLength={150}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        placeholder="Brief project requirements or modules needed *"
                        maxLength={800}
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40 resize-none"
                      />
                    </div>

                    {formError && (
                      <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] flex items-center gap-1.5">
                        <i className="ri-error-warning-line"></i>
                        <span>{formError}</span>
                      </div>
                    )}

                    {waOpened && (
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] space-y-2">
                        <p className="font-semibold text-white">
                          WhatsApp is opening with your enquiry details. Please press Send to complete your enquiry.
                        </p>
                        {lastWaUrl && (
                          <a
                            href={lastWaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                          >
                            <i className="ri-whatsapp-line"></i> Open WhatsApp
                          </a>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="glass-btn-primary w-full justify-center text-xs !py-3 cursor-pointer"
                    >
                      <i className="ri-whatsapp-line mr-1.5 text-sm"></i>
                      Get Detailed Quote on WhatsApp
                    </button>
                  </form>
                </div>
              </div>

              {/* What's Included */}
              <div className="glass-card rounded-2xl p-5">
                <h4 className="font-heading font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <i className="ri-check-double-line text-accent-400"></i>
                  Always Included
                </h4>
                <div className="space-y-2">
                  {[
                    'Dedicated Project Manager',
                    'Source Code Ownership',
                    '3 Months Post-Launch Support',
                    'Technical Documentation',
                    'Free Architecture Consultation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/40 text-xs">
                      <i className="ri-check-line text-accent-400/60 text-[10px]"></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Standards */}
        <section className="py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: 'ri-timer-line', title: 'Structured Milestones', desc: 'Phased sprint delivery with regular working demos' },
                { icon: 'ri-shield-check-line', title: '100% Custom Scope', desc: 'Built specifically around your operational workflows' },
                { icon: 'ri-team-line', title: 'Dedicated Engineering Team', desc: 'Full-stack architects from discovery to deployment' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
                    <i className={`${item.icon} text-accent-400`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-white/30 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}