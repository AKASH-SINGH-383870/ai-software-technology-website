import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const footerServices = [
  { name: 'Custom Software Development', path: '/services/custom-software' },
  { name: 'ERP Software Development', path: '/services/erp-solutions' },
  { name: 'CRM Software Development', path: '/services/crm-solutions' },
  { name: 'HRMS Software Development', path: '/services/hrms-software' },
  { name: 'SaaS Application Development', path: '/services/saas-development' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
  { name: 'Website & Web Applications', path: '/services/website-development' },
  { name: 'AI Automation Solutions', path: '/services/ai-automation' },
  { name: 'Cloud & Server Deployment', path: '/services/cloud-solutions' },
  { name: 'UI/UX Design', path: '/services/ui-ux-design' },
];

const footerCompany = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Journey', path: '/our-journey' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
  { name: 'Sitemap', path: '/sitemap' },
];

const footerResources = [
  { name: 'Cost Calculators', path: '/calculators' },
  { name: 'AI Capabilities', path: '/ai-features' },
  { name: 'Knowledge Center', path: '/knowledge-center' },
  { name: 'React vs Angular', path: '/comparisons/react-vs-angular' },
  { name: 'Flutter vs React Native', path: '/comparisons/flutter-vs-react-native' },
  { name: 'Custom vs SaaS', path: '/comparisons/custom-software-vs-saas' },
];

const footerIndustries = [
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Education', path: '/industries/education' },
  { name: 'Real Estate', path: '/industries/realestate' },
  { name: 'Retail & E-Commerce', path: '/industries/retail' },
  { name: 'Finance & Banking', path: '/industries/finance' },
  { name: 'Hospitality', path: '/industries/hospitality' },
  { name: 'Manufacturing', path: '/industries/manufacturing' },
  { name: 'Construction', path: '/industries/construction' },
];

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subError, setSubError] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubError(false);
    try {
      const formBody = new URLSearchParams();
      formBody.append('email', email);
      const res = await fetch('https://readdy.ai/api/form/d9hski8h9dsfbuoi5jqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 4000);
      } else {
        setSubError(true);
      }
    } catch {
      setSubError(true);
    }
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-600 border-t border-white/[0.05] overflow-hidden pb-16 lg:pb-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>
      <div className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-primary-500/3 blur-[120px]"></div>
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full bg-accent-500/3 blur-[120px]"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-14 md:pt-20 pb-8">
        {/* Top Row: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/[0.05]">
          <div className="lg:col-span-5">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-4">
              <img
                src="/logo.png"
                onError={(e) => {
                  e.currentTarget.src = 'https://i.ibb.co/8g96Y6FF/Chat-GPT-Image-Oct-30-2026-07-57-59-PM-Photoroom.png';
                }}
                alt="AI Software Technology — A Brand of Digi India Solutions"
                title="AI Software Technology — A Brand of Digi India Solutions"
                loading="lazy"
                width="160"
                height="48"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white font-heading font-bold text-sm mb-1">
              AI Software Technology — A Brand of Digi India Solutions
            </p>
            <p className="text-accent-400/90 text-xs font-semibold tracking-wide mb-3">
              Your Business. Our Technology. Let&apos;s Build Together.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              AI Software Technology is a custom software development brand of Digi India Solutions, focused on delivering modern, scalable and business-specific software solutions, including ERP, CRM, HRMS, SaaS applications, mobile applications, AI automation and industry-specific management software.
            </p>
            {/* Contact Details */}
            <div className="space-y-2 mb-5 text-xs text-white/40">
              <div className="flex items-start gap-2">
                <i className="ri-map-pin-2-line text-accent-400 text-sm mt-0.5 flex-shrink-0"></i>
                <span>House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, Delhi – 110085, India</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-phone-line text-accent-400 text-sm flex-shrink-0"></i>
                <a href="tel:+919990390519" className="hover:text-accent-400 transition-colors">+91 9990390519</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-whatsapp-line text-emerald-400 text-sm flex-shrink-0"></i>
                <a href="https://wa.me/919990390519" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp: +91 9990390519</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-mail-line text-accent-400 text-sm flex-shrink-0"></i>
                <a href="mailto:aisoftwaretechnology2026@gmail.com" className="hover:text-accent-400 transition-colors">aisoftwaretechnology2026@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-global-line text-accent-400 text-sm flex-shrink-0"></i>
                <a href="https://aisoftwaretechnology.in" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">aisoftwaretechnology.in</a>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: 'ri-whatsapp-line', href: 'https://wa.me/919990390519', label: 'WhatsApp' },
                { icon: 'ri-phone-line', href: 'tel:+919990390519', label: 'Call AI Software Technology' },
                { icon: 'ri-mail-line', href: 'mailto:aisoftwaretechnology2026@gmail.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-accent-400 hover:border-accent-400/30 hover:bg-accent-500/5 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-semibold text-white text-base mb-1">{t('footer.newsletter')}</h4>
                  <p className="text-white/40 text-xs">{t('footer.newsletter.desc')}</p>
                </div>
                <form onSubmit={handleSubscribe} data-readdy-form id="newsletter-form" className="flex gap-2 flex-1 max-w-md">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/25 focus:outline-none focus:border-accent-400/40 transition-colors min-w-0"
                  />
                  <button
                    type="submit"
                    className="glass-btn-primary text-xs !px-5 !py-2.5 cursor-pointer flex-shrink-0"
                  >
                    {subscribed ? 'Subscribed!' : t('footer.subscribe')}
                  </button>
                </form>
                {subError && <p className="text-red-400 text-xs mt-1">Could not subscribe. Try again.</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-12 border-b border-white/[0.05]">
          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="text-white/40 hover:text-accent-400 text-xs sm:text-sm transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="text-white/40 hover:text-accent-400 text-xs sm:text-sm transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerResources.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="text-white/40 hover:text-accent-400 text-xs sm:text-sm transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-[0.15em] mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {footerIndustries.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="text-white/40 hover:text-accent-400 text-xs sm:text-sm transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-white/35">
            <span>&copy; {new Date().getFullYear()} AI Software Technology — A Brand of Digi India Solutions. {t('footer.copyright')}</span>
            <span className="hidden md:inline">·</span>
            <span className="flex items-center gap-1"><i className="ri-shield-check-line text-emerald-400"></i> {t('footer.iso')}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><i className="ri-lock-line text-accent-400"></i> {t('footer.gdpr')}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><i className="ri-verified-badge-line text-primary-400"></i> {t('footer.cmmi')}</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick('/sitemap')} className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer whitespace-nowrap">Sitemap</button>
            <button onClick={() => handleLinkClick('/contact')} className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer whitespace-nowrap">Privacy Policy</button>
            <button onClick={() => handleLinkClick('/contact')} className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer whitespace-nowrap">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}