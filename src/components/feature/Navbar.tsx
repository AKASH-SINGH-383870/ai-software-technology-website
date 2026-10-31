import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import AISearch from './AISearch';
import LanguageSwitcher from './LanguageSwitcher';

const megaMenuServices = [
  {
    category: 'Core Enterprise Software',
    items: [
      { name: 'Custom Software Development', path: '/services/custom-software', icon: 'ri-code-s-slash-line', desc: 'Tailor-made business & workflow software' },
      { name: 'ERP Software Development', path: '/services/erp-solutions', icon: 'ri-building-2-line', desc: 'Inventory, billing, GST & multi-branch ERP' },
      { name: 'CRM Software Development', path: '/services/crm-solutions', icon: 'ri-customer-service-2-line', desc: 'Lead capture, pipeline & WhatsApp CRM' },
      { name: 'HRMS & Payroll Software', path: '/services/hrms-software', icon: 'ri-team-line', desc: 'Attendance, payroll, PF/ESI & HR portal' },
      { name: 'Attendance & Workforce Software', path: '/services/attendance-workforce-software', icon: 'ri-fingerprint-line', desc: 'Gate pass, shift & contractor tracking' },
    ],
  },
  {
    category: 'Operations & Industry Systems',
    items: [
      { name: 'Inventory Management Software', path: '/services/inventory-management-software', icon: 'ri-archive-drawer-line', desc: 'Multi-warehouse stock, batch & barcode' },
      { name: 'Billing & GST Software', path: '/services/billing-gst-software', icon: 'ri-bill-line', desc: 'E-invoicing, e-way bill & ledger accounting' },
      { name: 'Order Management Software', path: '/services/order-management-software', icon: 'ri-file-list-3-line', desc: 'B2B dealer portals & dispatch workflows' },
      { name: 'Manufacturing Software', path: '/services/manufacturing-software', icon: 'ri-settings-5-line', desc: 'BOM, production planning & quality control' },
      { name: 'Hospital & Hotel Software', path: '/services/hospital-management-software', icon: 'ri-hospital-line', desc: 'HMS, clinic EMR & hotel PMS solutions' },
    ],
  },
  {
    category: 'SaaS, Web, Mobile & AI',
    items: [
      { name: 'SaaS Application Development', path: '/services/saas-development', icon: 'ri-cloud-windy-line', desc: 'Multi-tenant cloud SaaS platforms' },
      { name: 'Android & iOS App Development', path: '/services/mobile-app-development', icon: 'ri-smartphone-line', desc: 'Native & Flutter/React Native apps' },
      { name: 'Website & Web App Development', path: '/services/website-development', icon: 'ri-global-line', desc: 'Business websites, portals & web apps' },
      { name: 'AI & Business Automation', path: '/services/ai-automation', icon: 'ri-brain-line', desc: 'AI chatbots, OCR & workflow automation' },
      { name: 'WhatsApp API & Chatbots', path: '/services/whatsapp-automation', icon: 'ri-whatsapp-line', desc: 'Automated alerts, bots & CRM sync' },
    ],
  },
  {
    category: 'Specialized & Support',
    items: [
      { name: 'Logistics & Field Sales Tracking', path: '/services/logistics-software', icon: 'ri-truck-line', desc: 'Fleet dispatch & GPS sales force tracking' },
      { name: 'Retail POS & E-commerce', path: '/services/retail-pos-software', icon: 'ri-store-2-line', desc: 'Barcode POS billing & online stores' },
      { name: 'API Development & Integration', path: '/services/api-development-integration', icon: 'ri-plug-line', desc: 'Payment, ERP, tally & webhook APIs' },
      { name: 'Software Maintenance & Support', path: '/services/software-maintenance-support', icon: 'ri-shield-check-line', desc: 'SLA support, upgrades & server care' },
      { name: 'Explore All 22+ Services', path: '/services', icon: 'ri-apps-2-line', desc: 'View complete software solutions catalog' },
    ],
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services', hasMega: true },
    { name: t('nav.portfolio'), path: '/portfolio' },
    { name: t('nav.industries'), path: '/industries' },
    { name: t('nav.caseStudies'), path: '/case-studies' },
    { name: t('nav.blogs'), path: '/blogs' },
    { name: t('nav.about'), path: '/about' },
    { name: 'Our Journey', path: '/our-journey' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 lg:top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || megaOpen
            ? 'bg-[#07111F] border-b border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.75)]'
            : 'bg-[#07111F]/85 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group flex-shrink-0">
              <img
                src="/logo.png"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/8g96Y6FF/Chat-GPT-Image-Oct-30-2026-07-57-59-PM-Photoroom.png';
                }}
                alt="AI Software Technology — A Brand of Digi India Solutions"
                title="AI Software Technology — A Brand of Digi India Solutions"
                width="160"
                height="48"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
              <div className="hidden xl:flex flex-col border-l border-white/10 pl-2.5">
                <span className="font-heading font-bold text-white text-xs tracking-wide leading-tight">AI SOFTWARE TECHNOLOGY</span>
                <span className="text-[9px] text-accent-400/80 tracking-wider uppercase">A Brand of Digi India Solutions</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                  onMouseLeave={() => link.hasMega && setMegaOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                      location.pathname === link.path || (link.hasMega && location.pathname.startsWith('/services'))
                        ? 'text-accent-400 bg-accent-500/8'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                    {link.hasMega && (
                      <i className={`ri-arrow-down-s-line text-xs transition-transform duration-300 ${megaOpen ? 'rotate-180 text-accent-400' : ''}`}></i>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] text-white/40 hover:text-white/70 text-xs transition-all duration-300 cursor-pointer"
              >
                <i className="ri-search-line text-sm"></i>
                <span className="hidden xl:inline">{t('search.placeholder').split(',')[0]}...</span>
                <kbd className="hidden xl:inline px-1.5 py-0.5 rounded bg-white/[0.05] text-[10px] text-white/25 font-mono">⌘K</kbd>
              </button>
              <button
                onClick={() => handleNavClick('/calculators')}
                className="px-3 py-2 rounded-xl text-white/50 hover:text-accent-400 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
              >
                <i className="ri-calculator-line text-sm"></i>
                <span className="hidden xl:inline">{t('nav.calculators')}</span>
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className="glass-btn-primary text-xs !px-5 !py-2.5 cursor-pointer"
              >
                <span>{t('cta.quote')}</span>
                <i className="ri-arrow-right-up-line ml-1 text-sm"></i>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-1.5">
              <LanguageSwitcher />
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Search"
              >
                <i className="ri-search-line text-base"></i>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu — 100% Solid Opaque Background (#07111F) with High Contrast */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-[#07111F] border-t border-b border-white/10 shadow-[0_32px_90px_rgba(0,0,0,0.96)] z-50"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <div className="max-w-[1400px] mx-auto px-10 py-8 bg-[#07111F]">
                <div className="grid grid-cols-4 gap-6">
                  {megaMenuServices.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-400 mb-3.5 pb-2 border-b border-white/[0.06]">
                        {group.category}
                      </h4>
                      <div className="space-y-1.5">
                        {group.items.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleNavClick(item.path)}
                            className="w-full flex items-start gap-3 p-2.5 rounded-xl bg-[#0C192C] hover:bg-[#132642] border border-white/[0.05] hover:border-accent-400/35 transition-all duration-200 group text-left cursor-pointer"
                          >
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/15 border border-primary-400/25 flex items-center justify-center flex-shrink-0 group-hover:border-accent-400/50 group-hover:shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all duration-300">
                              <i className={`${item.icon} text-accent-400 text-base`}></i>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[13px] font-semibold text-white group-hover:text-accent-400 transition-colors leading-snug">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-white/55 mt-0.5 line-clamp-1">{item.desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="text-xs font-semibold text-accent-400 hover:text-accent-300 flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View All 22+ Services <i className="ri-arrow-right-line"></i>
                    </button>
                    <button
                      onClick={() => handleNavClick('/ai-features')}
                      className="text-xs font-medium text-white/65 hover:text-white flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-sparkling-line text-accent-400"></i> AI Capabilities
                    </button>
                    <button
                      onClick={() => handleNavClick('/knowledge-center')}
                      className="text-xs font-medium text-white/65 hover:text-white flex items-center gap-1 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-book-open-line text-primary-400"></i> Knowledge Center
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span>Compare:</span>
                    <button onClick={() => handleNavClick('/comparisons/react-vs-angular')} className="text-white/65 hover:text-accent-400 transition-colors cursor-pointer whitespace-nowrap">React vs Angular</button>
                    <span>·</span>
                    <button onClick={() => handleNavClick('/comparisons/flutter-vs-react-native')} className="text-white/65 hover:text-accent-400 transition-colors cursor-pointer whitespace-nowrap">Flutter vs RN</button>
                    <span>·</span>
                    <button onClick={() => handleNavClick('/comparisons/custom-software-vs-saas')} className="text-white/65 hover:text-accent-400 transition-colors cursor-pointer whitespace-nowrap">Custom vs SaaS</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#07111F] border-t border-white/10 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="px-4 sm:px-6 py-5 space-y-1">
                <div className="px-4 pb-3 mb-2 border-b border-white/[0.08] flex items-center gap-3">
                  <img
                    src="/logo.png"
                    onError={(e) => {
                      e.currentTarget.src = 'https://i.ibb.co/8g96Y6FF/Chat-GPT-Image-Oct-30-2026-07-57-59-PM-Photoroom.png';
                    }}
                    alt="AI Software Technology"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <p className="font-heading font-bold text-white text-sm">AI Software Technology</p>
                    <p className="text-[11px] text-accent-400">A Brand of Digi India Solutions</p>
                  </div>
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      location.pathname === link.path
                        ? 'text-accent-400 bg-accent-500/10'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <i className="ri-arrow-right-s-line text-white/20"></i>
                  </button>
                ))}
                <div className="pt-2 border-t border-white/[0.05] space-y-1">
                  <button
                    onClick={() => handleNavClick('/calculators')}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-white/50 hover:text-white cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-calculator-line text-accent-400"></i> Cost Calculators
                  </button>
                  <button
                    onClick={() => handleNavClick('/ai-features')}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-white/50 hover:text-white cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-sparkling-line text-accent-400"></i> AI Capabilities
                  </button>
                  <button
                    onClick={() => handleNavClick('/knowledge-center')}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-white/50 hover:text-white cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-book-open-line text-primary-400"></i> Knowledge Center
                  </button>
                  <button
                    onClick={() => handleNavClick('/careers')}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium text-white/50 hover:text-white cursor-pointer flex items-center gap-2"
                  >
                    <i className="ri-briefcase-line text-primary-400"></i> {t('nav.careers')}
                  </button>
                </div>

                {/* Quick Contact in Mobile Menu */}
                <div className="pt-3 border-t border-white/[0.05] space-y-2">
                  <div className="flex gap-2">
                    <a
                      href="tel:+919990390519"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/70 text-xs font-medium"
                    >
                      <i className="ri-phone-line text-accent-400"></i> +91 9990390519
                    </a>
                    <a
                      href="https://wa.me/919990390519"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                    >
                      <i className="ri-whatsapp-line"></i> WhatsApp
                    </a>
                  </div>
                  <button
                    onClick={() => handleNavClick('/contact')}
                    className="w-full glass-btn-primary text-sm justify-center cursor-pointer"
                  >
                    Get Free Consultation
                    <i className="ri-arrow-right-up-line ml-1"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* AI Search Modal */}
      <AISearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}