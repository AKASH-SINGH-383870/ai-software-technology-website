import { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { servicesData } from '@/mocks/services';
import { servicePricing } from '@/mocks/pricing';
import { testimonials } from '@/mocks/testimonials';
import { caseStudies } from '@/mocks/caseStudies';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  validateEnquiryForm,
  openWhatsAppEnquiry,
  getWhatsAppEnquiryUrl,
} from '@/utils/whatsappEnquiry';

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'inventory-billing-software': 'inventory-management-software',
  'web-application-development': 'website-development',
  'payroll-management-system': 'hrms-software',
  'hospital-clinic-management-software': 'hospital-management-software',
  'lead-management-system': 'crm-solutions',
  'school-management-software': 'erp-solutions',
};

const defaultServicePricing = [
  {
    name: 'Starter / MVP Module',
    desc: 'Ideal for startups and single-branch businesses digitizing core workflows',
    price: 'Custom Scope',
    period: 'Core Modules',
    features: [
      'Core Workflow & Admin Dashboard',
      'Role-Based Staff & Admin Logins',
      'Mobile-Responsive Web Interface',
      'Standard PDF / Excel Reports',
      'WhatsApp & Email Notification Hooks',
      '3 Months Post-Launch Support',
    ],
    cta: 'Request Starter Quote',
    popular: false,
  },
  {
    name: 'Growth / Multi-Module Suite',
    desc: 'Complete operational system tailored for growing multi-team businesses',
    price: 'Custom Scope',
    period: 'Full Business Suite',
    features: [
      'All Core + Department Modules',
      'Multi-Branch & Approval Workflows',
      'Custom Billing / Inventory / CRM Sync',
      'Third-Party API & WhatsApp Integration',
      'Executive Analytics & MIS Dashboards',
      '6 Months Priority Support & Training',
    ],
    cta: 'Get Growth Proposal',
    popular: true,
  },
  {
    name: 'Enterprise & Custom Cloud',
    desc: 'High-scale multi-location or commercial SaaS architecture with mobile apps',
    price: 'Custom Scope',
    period: 'Enterprise Grade',
    features: [
      'Unlimited Users & Multi-Location Setup',
      'Companion Android & iOS Mobile Apps',
      'Custom Hardware / Biometric / ERP Sync',
      'Dedicated Cloud Server & Auto-Backups',
      'Complete Source Code & IP Ownership',
      '12 Months Dedicated SLA Maintenance',
    ],
    cta: 'Speak With Solution Architect',
    popular: false,
  },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'features' | 'process' | 'pricing'>('features');

  // Service Enquiry Form State
  const [enqName, setEnqName] = useState('');
  const [enqMobile, setEnqMobile] = useState('');
  const [enqEmail, setEnqEmail] = useState('');
  const [enqCompany, setEnqCompany] = useState('');
  const [enqBudget, setEnqBudget] = useState('₹50,000 - ₹1,50,000');
  const [enqMessage, setEnqMessage] = useState('');
  const [enqError, setEnqError] = useState('');
  const [enqWaOpened, setEnqWaOpened] = useState(false);
  const [enqLastUrl, setEnqLastUrl] = useState('');

  const resolvedSlug = slug ? SERVICE_SLUG_ALIASES[slug] || slug : undefined;
  const service = servicesData.find((s) => s.slug === resolvedSlug);
  const pricing = resolvedSlug && servicePricing[resolvedSlug]?.length ? servicePricing[resolvedSlug] : defaultServicePricing;
  const relatedTestimonials = testimonials.filter((t) => t.service === resolvedSlug);
  const relatedCaseStudies = caseStudies.filter(
    (cs) => cs.service === resolvedSlug || cs.relatedServices.some((rs) => rs.slug === resolvedSlug)
  ).slice(0, 3);
  const otherServices = servicesData.filter((s) => s.slug !== resolvedSlug).slice(0, 4);

  usePageSEO({
    title: service
      ? `${service.name} Company in India | AI Software Technology`
      : 'Software Development Services | AI Software Technology',
    description: service
      ? `${service.heroDesc} Call +91 9990390519 for a free consultation with AI Software Technology — A Brand of Digi India Solutions.`
      : 'Explore custom software development, ERP, CRM, HRMS, SaaS, mobile apps, and AI automation services from AI Software Technology.',
    ogTitle: service ? `${service.name} — AI Software Technology` : 'Services — AI Software Technology',
    ogDescription: service?.heroDesc || 'Custom software development and business technology solutions.',
    ogImage: service?.bannerImage,
    canonical: service ? `https://aisoftwaretechnology.in/services/${service.slug}` : 'https://aisoftwaretechnology.in/services',
    jsonLd: service
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            description: service.heroDesc,
            url: `https://aisoftwaretechnology.in/services/${service.slug}`,
            image: service.bannerImage,
            serviceType: service.name,
            provider: {
              '@type': 'ProfessionalService',
              name: 'AI Software Technology',
              alternateName: 'AI Software Technology — A Brand of Digi India Solutions',
              url: 'https://aisoftwaretechnology.in',
              telephone: '+91-9990390519',
              email: 'aisoftwaretechnology2026@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rohini Sector-24',
                addressLocality: 'New Delhi',
                addressRegion: 'Delhi',
                postalCode: '110085',
                addressCountry: 'IN',
              },
            },
            areaServed: [
              { '@type': 'City', name: 'New Delhi' },
              { '@type': 'Country', name: 'India' },
            ],
          },
          ...(service.faqs && service.faqs.length > 0
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: service.faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: f.a,
                    },
                  })),
                },
              ]
            : []),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aisoftwaretechnology.in/services' },
              { '@type': 'ListItem', position: 3, name: service.name, item: `https://aisoftwaretechnology.in/services/${service.slug}` },
            ],
          },
        ]
      : undefined,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaq(0);
    setActiveTab('features');
    setEnqError('');
    setEnqWaOpened(false);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-dark-500 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-400/20 flex items-center justify-center mx-auto mb-6">
              <i className="ri-error-warning-line text-accent-400 text-2xl"></i>
            </div>
            <h1 className="font-heading text-2xl font-bold text-white mb-3">Service Not Found</h1>
            <p className="text-sm text-white/40 mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
            <button onClick={() => navigate('/services')} className="glass-btn-primary text-sm cursor-pointer">
              View All Services
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleServiceEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setEnqError('');

    const payload = {
      name: enqName,
      mobile: enqMobile,
      email: enqEmail,
      companyName: enqCompany,
      serviceRequired: service.name,
      estimatedBudget: enqBudget,
      projectRequirements: enqMessage,
      enquirySource: 'Service Enquiry Form',
    };

    const validation = validateEnquiryForm(payload);
    if (!validation.valid) {
      setEnqError(validation.error || 'Please fill in all required fields.');
      return;
    }

    const waUrl = getWhatsAppEnquiryUrl(payload);
    setEnqLastUrl(waUrl);
    openWhatsAppEnquiry(payload);
    setEnqWaOpened(true);
  };

  const scrollToEnquiryForm = () => {
    const el = document.getElementById('service-enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumb />

      <main>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.name,
              description: service.heroDesc,
              provider: {
                '@type': 'Organization',
                name: 'AI Software Technology',
                legalName: 'Digi India Solutions',
                parentOrganization: {
                  '@type': 'Organization',
                  name: 'Digi India Solutions',
                },
                url: 'https://aisoftwaretechnology.in',
                telephone: '+91-99903-90519',
                email: 'aisoftwaretechnology2026@gmail.com',
              },
              url: `https://aisoftwaretechnology.in/services/${service.slug}`,
              areaServed: 'Worldwide',
            }),
          }}
        />

        {/* Service-Specific Banner Hero Section */}
        <section className="relative min-h-[420px] md:min-h-[480px] flex items-center py-12 md:py-20 overflow-hidden border-b border-white/[0.06]">
          {/* Ambient Dark Gradient Backdrop (avoids placing duplicate text over the banner image's title) */}
          <div className="absolute inset-0 aurora-bg z-0"></div>
          <div className="absolute inset-0 grid-bg opacity-25 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F] via-[#07111F]/95 to-[#07111F]/80 z-0"></div>

          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/10 blur-[150px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-500/8 blur-[130px] pointer-events-none"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Heading & CTAs */}
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <i className={`${service.icon} text-white text-xl`}></i>
                  </div>
                  <span className="text-xs font-semibold text-accent-400 uppercase tracking-widest">
                    AI Software Technology — A Brand of Digi India Solutions
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.12] mb-4">
                  {service.name}
                </h1>

                <p className="font-heading text-base sm:text-lg md:text-xl text-gradient font-semibold mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-8 max-w-2xl">
                  {service.heroDesc}
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={scrollToEnquiryForm}
                    className="glass-btn-primary text-sm cursor-pointer"
                  >
                    <i className="ri-whatsapp-line mr-2 text-base"></i>
                    Enquire Now on WhatsApp
                  </button>
                  <button
                    onClick={() => navigate('/calculators')}
                    className="glass-btn text-sm cursor-pointer"
                  >
                    <i className="ri-calculator-line mr-2 text-accent-400"></i>
                    Estimate Cost
                  </button>
                  <a
                    href="tel:+919990390519"
                    className="glass-btn text-sm !border-white/15 hover:!bg-white/10 cursor-pointer"
                  >
                    <i className="ri-phone-line mr-2 text-accent-400"></i>
                    +91 9990390519
                  </a>
                </div>
              </motion.div>

              {/* Right: Official 640x427 Service Banner Image Showcase (Uncropped & Unobstructed) */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.7)] bg-[#060D1A] group">
                  <div className="relative w-full aspect-[640/427] bg-[#060D1A] overflow-hidden">
                    <img
                      src={service.bannerImage}
                      alt={service.imageAlt || `${service.name} Services — AI Software Technology`}
                      title={service.name}
                      loading="eager"
                      decoding="async"
                      width="640"
                      height="427"
                      onError={(e) => {
                        if (service.fallbackImage && e.currentTarget.src !== service.fallbackImage) {
                          e.currentTarget.src = service.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4 sm:p-5 bg-[#07111F]/95 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                        <span className="text-xs font-bold text-white truncate">{service.name}</span>
                      </div>
                      <div className="text-[11px] text-white/50">100% Custom Engineered • Web • Mobile • API</div>
                    </div>
                    <button
                      onClick={scrollToEnquiryForm}
                      className="px-3.5 py-2 rounded-xl bg-accent-500/15 border border-accent-400/30 text-accent-400 text-xs font-semibold hover:bg-accent-500/25 transition-colors cursor-pointer whitespace-nowrap flex-shrink-0"
                    >
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Metrics Strip */}
        <section className="relative py-12 bg-dark-600/80 border-b border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.benefits.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {b.metric}
                  </div>
                  <div className="font-heading text-sm font-semibold text-white mb-0.5">{b.label}</div>
                  <div className="text-xs text-white/40">{b.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Capability Checklist for CRM, ERP & HRMS */}
        {(service.slug === 'crm-solutions' || service.slug === 'erp-solutions' || service.slug === 'hrms-software') && (
          <section className="py-16 md:py-20 bg-dark-500 border-b border-white/[0.04]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="text-center mb-12">
                <div className="section-tag mx-auto">
                  <i className="ri-checkbox-multiple-line"></i> Complete Module Checklist
                </div>
                <h2 className="section-title text-white mb-3">
                  Every Capability Included in <span className="text-gradient">{service.name}</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Built and customized around your business rules, approval hierarchies, and reporting needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {(service.slug === 'crm-solutions'
                  ? [
                      'Lead Capture & Management',
                      'Website Lead Form Integration',
                      'Facebook / Instagram / Google Lead Integration',
                      'Lead Source Tracking',
                      'Automated Lead Assignment',
                      'Sales Pipeline Management',
                      'Follow-Up Reminder System',
                      'WhatsApp Integration',
                      'Email & SMS Notification Integration',
                      'Call / Meeting Notes Logging',
                      'Quotation & Proposal Management',
                      'Customer Database Management',
                      'Deal Stage Tracking',
                      'Task & Activity Management',
                      'Sales Team Performance Tracking',
                      'Role-Based User Access Control',
                      'Lead Conversion Reports',
                      'Sales Forecasting & Analytics Dashboard',
                      'Customer Support Ticket System',
                      'Invoice & Payment Tracking',
                      'Client Communication History',
                      'Data Export & Reporting',
                      'Multi-Branch / Multi-Team Support',
                      'Mobile-Friendly CRM Access',
                    ]
                  : service.slug === 'erp-solutions'
                  ? [
                      'Inventory & Stock Management',
                      'Purchase & Vendor Management',
                      'Sales Order Management',
                      'Billing & GST Invoicing',
                      'Accounts & Expense Tracking',
                      'Multi-Branch Operations Management',
                      'Warehouse & Dispatch Management',
                      'Production / Operations Workflow Tracking',
                      'Role-Based Permissions',
                      'Reports & Business Analytics',
                      'Low Stock Alerts & Reorder Management',
                      'Approval Workflows',
                    ]
                  : [
                      'Employee Database Management',
                      'Attendance & Shift Management',
                      'Biometric / Attendance Device Integration',
                      'Leave & Holiday Management',
                      'Payroll & Salary Slip Generation',
                      'Employee Self-Service Portal',
                      'Department & Role Management',
                      'Recruitment & Onboarding Management',
                      'Performance & Appraisal Tracking',
                      'Expense & Reimbursement Management',
                      'Statutory & Deduction Management',
                      'HR Reports & Analytics',
                    ]
                ).map((capability, idx) => (
                  <div
                    key={capability}
                    className="glass-card rounded-xl p-4 flex items-center gap-3 border border-white/[0.06] hover:border-accent-400/30 transition-all"
                  >
                    <div className="w-7 h-7 rounded-lg bg-accent-500/15 border border-accent-400/20 flex items-center justify-center flex-shrink-0 text-accent-400 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-white/85">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation Tabs */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center justify-center gap-2 mb-14">
              {[
                { key: 'features' as const, label: 'Features & Capabilities', icon: 'ri-sparkling-line' },
                { key: 'process' as const, label: 'Our Process', icon: 'ri-flow-chart' },
                { key: 'pricing' as const, label: 'Engagement Models', icon: 'ri-price-tag-3-line' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_4px_20px_rgba(31,60,255,0.4)]'
                      : 'glass-card text-white/50 hover:text-white'
                  }`}
                >
                  <i className={`${tab.icon} text-sm`}></i>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Features Tab */}
              {activeTab === 'features' && (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="section-title text-white mb-3">
                      Key <span className="text-gradient">Features &amp; Modules</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                      Every {service.name.toLowerCase()} engagement includes these core modules and engineering standards.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {service.features.map((f, i) => (
                      <motion.div
                        key={f.title}
                        className="glass-card-hover rounded-2xl p-7 group"
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center mb-5 group-hover:border-accent-400/30 group-hover:shadow-[0_0_25px_rgba(0,194,255,0.2)] transition-all duration-300">
                          <i className={`${f.icon} text-accent-400 text-xl`}></i>
                        </div>
                        <h3 className="font-heading text-base font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                          {f.title}
                        </h3>
                        <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Process Tab */}
              {activeTab === 'process' && (
                <motion.div
                  key="process"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="section-title text-white mb-3">
                      How We <span className="text-gradient">Deliver</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                      A proven 5-step engineering workflow that ensures reliable, on-time delivery.
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto space-y-4">
                    {service.process.map((p, i) => (
                      <motion.div
                        key={p.step}
                        className="glass-card-hover rounded-2xl p-6 md:p-8 flex items-start gap-5 group"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/15 border border-primary-400/20 flex items-center justify-center flex-shrink-0 font-heading text-base font-bold text-accent-400 group-hover:shadow-[0_0_25px_rgba(0,194,255,0.25)] transition-all">
                          {p.step}
                        </div>
                        <div>
                          <h3 className="font-heading text-base md:text-lg font-bold text-white mb-1.5 group-hover:text-accent-300 transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Pricing Tab */}
              {activeTab === 'pricing' && (
                <motion.div
                  key="pricing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="section-title text-white mb-3">
                      Flexible <span className="text-gradient">Engagement Models</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                      Every software system is scoped to your required modules, integrations, and team size.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {pricing.map((plan, i) => (
                      <motion.div
                        key={plan.name}
                        className={`rounded-2xl p-7 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ${
                          plan.popular
                            ? 'bg-gradient-to-b from-primary-500/15 via-dark-400/90 to-accent-500/10 border-2 border-accent-400/30 shadow-[0_0_50px_rgba(0,194,255,0.12)]'
                            : 'glass-card-hover'
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 px-3.5 py-1 rounded-bl-xl bg-gradient-to-r from-primary-500 to-accent-500 text-[10px] font-bold text-white uppercase tracking-wider">
                            Recommended
                          </div>
                        )}

                        <div>
                          <h3 className="font-heading text-lg font-bold text-white mb-1">{plan.name}</h3>
                          <p className="text-xs text-white/35 mb-5">{plan.desc}</p>

                          <div className="flex items-baseline gap-1.5 mb-6">
                            <span className="font-heading text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
                            <span className="text-xs text-white/30">({plan.period})</span>
                          </div>

                          <div className="space-y-2.5 mb-8">
                            {plan.features.map((feat) => (
                              <div key={feat} className="flex items-center gap-2.5 text-xs text-white/55">
                                <i className="ri-check-line text-accent-400 text-sm flex-shrink-0"></i>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={scrollToEnquiryForm}
                          className={`w-full py-3.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                            plan.popular
                              ? 'glass-btn-primary justify-center'
                              : 'glass-btn justify-center w-full'
                          }`}
                        >
                          {plan.cta}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Case Study Highlight */}
        {service.caseStudy && (
          <section className="py-16 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div
                className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-primary-500/8 blur-[100px]"></div>

                <div className="relative z-10">
                  <div className="section-tag mb-6">
                    <i className="ri-trophy-line"></i> Implementation Highlight
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                        {service.caseStudy.client}
                      </h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">Business Challenge</span>
                          <p className="text-sm text-white/50 mt-1 leading-relaxed">{service.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Implemented Solution</span>
                          <p className="text-sm text-white/50 mt-1 leading-relaxed">{service.caseStudy.solution}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate('/case-studies')}
                        className="glass-btn text-xs cursor-pointer"
                      >
                        <span>View All Case Studies</span>
                        <i className="ri-arrow-right-up-line ml-1.5"></i>
                      </button>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="grid grid-cols-2 gap-3">
                        {service.caseStudy.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="glass-card rounded-xl p-4 text-center border border-accent-400/10"
                          >
                            <i className="ri-checkbox-circle-fill text-emerald-400 text-lg mb-1.5 block"></i>
                            <div className="text-xs font-semibold text-white/80 leading-snug">{result}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Technologies & Industries */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="glass-card rounded-2xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-primary-500/15 border border-primary-400/15 flex items-center justify-center">
                    <i className="ri-code-box-line text-accent-400 text-base"></i>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">Technologies We Use</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-white/60 hover:text-accent-400 hover:border-accent-400/20 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/15 border border-accent-400/15 flex items-center justify-center">
                    <i className="ri-building-4-line text-accent-400 text-base"></i>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">Industries &amp; Use Cases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind) => (
                    <span
                      key={ind}
                      onClick={() => navigate('/industries')}
                      className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-white/60 hover:text-accent-400 hover:border-accent-400/20 transition-all duration-200 cursor-pointer"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        {relatedTestimonials.length > 0 && (
          <section className="py-16 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="text-center mb-12">
                <div className="section-tag mx-auto">
                  <i className="ri-chat-quote-line"></i> Client Feedback
                </div>
                <h2 className="section-title text-white">
                  What Clients Say About Our <span className="text-gradient">{service.name}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedTestimonials.map((t) => (
                  <div key={t.id} className="glass-card rounded-2xl p-7">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <i key={j} className="ri-star-fill text-amber-400 text-sm"></i>
                      ))}
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-heading font-bold text-white text-xs">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-heading text-sm font-semibold text-white">{t.name}</div>
                        <div className="text-xs text-white/35">{t.role}, {t.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Enquiry Form — Free WhatsApp Click-to-Chat Integration (Section 10) */}
        <section id="service-enquiry-section" className="py-16 md:py-24 bg-dark-600/60 border-y border-white/[0.05]">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="section-tag mx-auto mb-3">
                  <i className="ri-whatsapp-line text-emerald-400"></i> Direct WhatsApp Service Enquiry
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                  Enquire About <span className="text-gradient">{service.name}</span>
                </h2>
                <p className="text-xs sm:text-sm text-white/45">
                  Share your requirements below to open WhatsApp with your structured project enquiry addressed to our team (+91 9990390519).
                </p>
              </div>

              <form onSubmit={handleServiceEnquirySubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/45 text-xs mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={enqName}
                      onChange={(e) => setEnqName(e.target.value)}
                      placeholder="Rahul Sharma"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/45 text-xs mb-1.5">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      value={enqMobile}
                      onChange={(e) => setEnqMobile(e.target.value)}
                      placeholder="+91 9876543210"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white/45 text-xs mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={enqEmail}
                      onChange={(e) => setEnqEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/45 text-xs mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={enqCompany}
                      onChange={(e) => setEnqCompany(e.target.value)}
                      placeholder="Your Business Name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/45 text-xs mb-1.5">Estimated Budget</label>
                    <select
                      value={enqBudget}
                      onChange={(e) => setEnqBudget(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-400/40 cursor-pointer"
                    >
                      <option value="₹25,000 - ₹50,000" className="bg-dark-500 text-white">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,50,000" className="bg-dark-500 text-white">₹50,000 - ₹1,50,000</option>
                      <option value="₹1,50,000 - ₹3,50,000" className="bg-dark-500 text-white">₹1,50,000 - ₹3,50,000</option>
                      <option value="₹3,50,000 - ₹7,50,000" className="bg-dark-500 text-white">₹3,50,000 - ₹7,50,000</option>
                      <option value="₹7,50,000+ (Enterprise Scale)" className="bg-dark-500 text-white">₹7,50,000+ (Enterprise Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/45 text-xs mb-1.5">Project Requirements *</label>
                  <textarea
                    rows={3}
                    value={enqMessage}
                    onChange={(e) => setEnqMessage(e.target.value)}
                    placeholder={`Describe your requirements for ${service.name}...`}
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40 resize-none"
                  />
                </div>

                {enqError && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                    <i className="ri-error-warning-line text-base"></i>
                    <span>{enqError}</span>
                  </div>
                )}

                {enqWaOpened && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs space-y-2">
                    <p className="font-semibold text-white">
                      WhatsApp is opening with your enquiry details. Please press Send to complete your enquiry.
                    </p>
                    {enqLastUrl && (
                      <a
                        href={enqLastUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition-colors"
                      >
                        <i className="ri-whatsapp-line"></i> Open WhatsApp Again
                      </a>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full glass-btn-primary justify-center text-sm !py-3.5 cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2 text-lg"></i>
                  Continue to WhatsApp for {service.name}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
              <div className="text-center mb-12">
                <div className="section-tag mx-auto">
                  <i className="ri-question-line"></i> FAQ
                </div>
                <h2 className="section-title text-white">
                  Common Questions About <span className="text-gradient">{service.name}</span>
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="glass-card rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                    >
                      <span className="font-heading text-sm md:text-base font-semibold text-white/90 group-hover:text-white pr-4 transition-colors">
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-accent-500/15 text-accent-400 rotate-180' : 'text-white/40'}`}>
                        <i className="ri-arrow-down-s-line text-lg"></i>
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/[0.04] pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explore Other Services */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="section-tag">
                  <i className="ri-apps-2-line"></i> More Services
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                  Explore Other <span className="text-gradient">Solutions</span>
                </h2>
              </div>
              <button
                onClick={() => navigate('/services')}
                className="glass-btn text-xs cursor-pointer hidden sm:inline-flex"
              >
                All Services <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.map((s) => (
                <div
                  key={s.slug}
                  onClick={() => navigate(`/services/${s.slug}`)}
                  className="glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative w-full aspect-[640/427] bg-[#060D1A] overflow-hidden border-b border-white/[0.06]">
                      <img
                        src={s.bannerImage}
                        alt={s.imageAlt || `${s.name} Services — AI Software Technology`}
                        title={s.name}
                        loading="lazy"
                        decoding="async"
                        width="640"
                        height="427"
                        onError={(e) => {
                          if (s.fallbackImage && e.currentTarget.src !== s.fallbackImage) {
                            e.currentTarget.src = s.fallbackImage;
                          }
                        }}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5 pb-3">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center flex-shrink-0 group-hover:border-accent-400/30 transition-all">
                          <i className={`${s.icon} text-accent-400 text-sm`}></i>
                        </div>
                        <h3 className="font-heading text-sm font-bold text-white group-hover:text-accent-300 transition-colors leading-snug">
                          {s.name}
                        </h3>
                      </div>
                      <p className="text-xs text-white/40 line-clamp-2 mb-2">{s.tagline}</p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 border-t border-white/[0.04]">
                    <span className="text-xs font-semibold text-accent-400 flex items-center gap-1">
                      Learn More <i className="ri-arrow-right-s-line"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {relatedCaseStudies.length > 0 && (
              <div className="mt-14 pt-12 border-t border-white/[0.06]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="section-tag">
                      <i className="ri-file-list-3-line"></i> Proven Implementations
                    </div>
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-white">
                      Related <span className="text-gradient">Case Studies</span>
                    </h2>
                  </div>
                  <a
                    href="/case-studies"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/case-studies');
                    }}
                    className="text-xs font-semibold text-accent-400 hover:underline"
                  >
                    View All Case Studies →
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {relatedCaseStudies.map((cs) => (
                    <a
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/case-studies/${cs.slug}`);
                      }}
                      className="glass-card-hover rounded-2xl p-5 block group"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-400 text-[10px] font-semibold uppercase tracking-wider mb-3">
                        {cs.industry}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-white mb-2 group-hover:text-accent-300 transition-colors line-clamp-2">
                        {cs.title}
                      </h3>
                      <p className="text-xs text-white/40 line-clamp-2 mb-3">{cs.overview}</p>
                      <span className="text-xs font-semibold text-accent-400 flex items-center gap-1">
                        Read Case Study <i className="ri-arrow-right-s-line"></i>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your <span className="text-gradient">{service.name}</span> Project?
            </h2>
            <p className="text-sm text-white/40 max-w-lg mx-auto mb-8">
              Get a free consultation and custom project proposal from AI Software Technology — A Brand of Digi India Solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToEnquiryForm}
                className="glass-btn-primary text-sm !px-8 !py-4 cursor-pointer"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                Enquire on WhatsApp
              </button>
              <a
                href="tel:+919990390519"
                className="glass-btn text-sm !px-7 !py-4 cursor-pointer"
              >
                <i className="ri-phone-line mr-2 text-accent-400"></i>
                Call +91 9990390519
              </a>
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