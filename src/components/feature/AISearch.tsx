import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  desc: string;
  path: string;
  category: string;
  icon: string;
}

const allItems: SearchResult[] = [
  // Core Software & Enterprise Services
  { title: 'Custom Software Development', desc: 'Tailor-made business software, internal dashboards & workflow management', path: '/services/custom-software', category: 'Services', icon: 'ri-code-s-slash-line' },
  { title: 'ERP Software Development', desc: 'Inventory, purchase, sales, GST billing & multi-branch ERP systems', path: '/services/erp-solutions', category: 'Services', icon: 'ri-building-2-line' },
  { title: 'CRM Software Development', desc: 'Lead capture, sales pipeline, WhatsApp & email integration, quotations', path: '/services/crm-solutions', category: 'Services', icon: 'ri-customer-service-2-line' },
  { title: 'HRMS Software Development', desc: 'Employee records, biometric attendance, payroll, PF/ESI & HR portal', path: '/services/hrms-software', category: 'Services', icon: 'ri-team-line' },
  { title: 'SaaS Application Development', desc: 'Multi-tenant cloud SaaS platforms, subscriptions & role-based dashboards', path: '/services/saas-development', category: 'Services', icon: 'ri-cloud-windy-line' },
  { title: 'Website & Web App Development', desc: 'Custom business websites, portals, admin panels & e-commerce', path: '/services/website-development', category: 'Services', icon: 'ri-global-line' },
  { title: 'Mobile App Development', desc: 'Android, iOS, Flutter & React Native mobile applications', path: '/services/mobile-app-development', category: 'Services', icon: 'ri-smartphone-line' },
  { title: 'AI Automation Solutions', desc: 'AI chatbots, document OCR, lead automation & business workflows', path: '/services/ai-automation', category: 'Services', icon: 'ri-brain-line' },
  { title: 'Digital Marketing & SEO', desc: 'Technical SEO, Google Ads, content marketing & lead generation', path: '/services/digital-marketing', category: 'Services', icon: 'ri-megaphone-line' },
  { title: 'Cloud Deployment & Server Setup', desc: 'AWS, Azure, GCP, Docker, Kubernetes & CI/CD pipelines', path: '/services/cloud-solutions', category: 'Services', icon: 'ri-cloud-line' },
  { title: 'UI/UX Design', desc: 'User research, wireframing, prototyping & design systems', path: '/services/ui-ux-design', category: 'Services', icon: 'ri-palette-line' },
  // Pages
  { title: 'Portfolio', desc: 'Explore our software, ERP, CRM, web & mobile projects', path: '/portfolio', category: 'Pages', icon: 'ri-folder-3-line' },
  { title: 'Case Studies', desc: 'Detailed engineering case studies and business software implementations', path: '/case-studies', category: 'Pages', icon: 'ri-file-chart-line' },
  { title: 'About AI Software Technology', desc: 'Learn about AI Software Technology — A Brand of Digi India Solutions', path: '/about', category: 'Pages', icon: 'ri-team-line' },
  { title: 'Careers', desc: 'Join our software engineering and product design team', path: '/careers', category: 'Pages', icon: 'ri-briefcase-line' },
  { title: 'Contact Us', desc: 'Call or WhatsApp +91 9990390519 for a free software consultation', path: '/contact', category: 'Pages', icon: 'ri-mail-send-line' },
  { title: 'Cost Calculators', desc: 'Estimate website, app, ERP, CRM, or custom software cost instantly', path: '/calculators', category: 'Tools', icon: 'ri-calculator-line' },
  { title: 'AI Capabilities', desc: 'Explore our AI automation and intelligent software features', path: '/ai-features', category: 'Tools', icon: 'ri-sparkling-line' },
  { title: 'Knowledge Center', desc: 'Guides, whitepapers, docs, and resources', path: '/knowledge-center', category: 'Resources', icon: 'ri-book-open-line' },
  // Comparisons
  { title: 'React vs Angular', desc: 'Comprehensive framework comparison for 2026', path: '/comparisons/react-vs-angular', category: 'Comparisons', icon: 'ri-scales-3-line' },
  { title: 'Flutter vs React Native', desc: 'Which cross-platform framework is right for you?', path: '/comparisons/flutter-vs-react-native', category: 'Comparisons', icon: 'ri-scales-3-line' },
  { title: 'Custom Software vs SaaS', desc: 'Build vs buy decision framework for enterprises', path: '/comparisons/custom-software-vs-saas', category: 'Comparisons', icon: 'ri-scales-3-line' },
  // Industries
  { title: 'Healthcare & Hospital Software', desc: 'Hospital management, clinic systems, lab & pharmacy software', path: '/industries/healthcare', category: 'Industries', icon: 'ri-heart-pulse-line' },
  { title: 'Education & School ERP', desc: 'School management, coaching systems, LMS & student portals', path: '/industries/education', category: 'Industries', icon: 'ri-graduation-cap-line' },
  { title: 'Real Estate & Property CRM', desc: 'Property CRM, lead management & broker portals', path: '/industries/real-estate', category: 'Industries', icon: 'ri-home-4-line' },
  { title: 'Retail & E-Commerce', desc: 'POS software, inventory billing & omnichannel commerce', path: '/industries/retail', category: 'Industries', icon: 'ri-store-2-line' },
  { title: 'Finance & Accounting', desc: 'Financial dashboards, billing & compliance platforms', path: '/industries/finance', category: 'Industries', icon: 'ri-bank-line' },
  { title: 'Hospitality & Hotel Software', desc: 'Hotel management, restaurant POS & reservation systems', path: '/industries/hospitality', category: 'Industries', icon: 'ri-hotel-line' },
  { title: 'Manufacturing ERP', desc: 'Production planning, BOM, quality control & inventory ERP', path: '/industries/manufacturing', category: 'Industries', icon: 'ri-settings-3-line' },
  { title: 'Construction Management', desc: 'Project tracking, site management, BOQ & contractor billing', path: '/industries/construction', category: 'Industries', icon: 'ri-Hammer-line' },
  // Featured Blogs
  { title: 'Why Growing Businesses Need Custom Software Instead of Spreadsheets', desc: 'How custom software eliminates spreadsheet chaos and scales operations', path: '/blogs/why-growing-businesses-need-custom-software-instead-of-spreadsheets', category: 'Blogs', icon: 'ri-article-line' },
  { title: 'Complete Guide to CRM Software for Sales and Lead Management', desc: 'Everything sales teams need to capture, nurture, and convert leads', path: '/blogs/complete-guide-to-crm-software-for-sales-and-lead-management', category: 'Blogs', icon: 'ri-article-line' },
  { title: 'How ERP Software Improves Inventory, Billing and Operations', desc: 'Centralize multi-branch operations, GST billing, and stock control', path: '/blogs/how-erp-software-improves-inventory-billing-and-operations', category: 'Blogs', icon: 'ri-article-line' },
  { title: 'HRMS Software Features Every Growing Company Needs', desc: 'Automate attendance, payroll, PF/ESI, and employee self-service', path: '/blogs/hrms-software-features-every-growing-company-needs', category: 'Blogs', icon: 'ri-article-line' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AISearch({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const filtered = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.desc.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems.slice(0, 8);

  const grouped = filtered.reduce<Record<string, SearchResult[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-20 md:pt-28 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl bg-dark-500/98 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
              <i className="ri-sparkling-line text-accent-400 text-lg"></i>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search software, ERP, CRM, HRMS, industries, articles..."
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-white/30 hover:text-white/60 cursor-pointer">
                  <i className="ri-close-circle-line text-base"></i>
                </button>
              )}
              <kbd className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] text-white/30 font-mono">ESC</kbd>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto p-3">
              {Object.keys(grouped).length === 0 ? (
                <div className="py-12 text-center">
                  <i className="ri-search-eye-line text-3xl text-white/15 mb-2 block"></i>
                  <p className="text-sm text-white/35">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs text-white/20 mt-1">Try searching for ERP, CRM, HRMS, SaaS, mobile apps, or industries</p>
                </div>
              ) : (
                Object.entries(grouped).map(([category, items]) => (
                  <div key={category} className="mb-3 last:mb-0">
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                      {category}
                    </div>
                    {items.map((item) => (
                      <button
                        key={item.path + item.title}
                        onClick={() => handleSelect(item.path)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors text-left group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-accent-400/30 transition-colors">
                          <i className={`${item.icon} text-accent-400 text-sm`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white/80 group-hover:text-white truncate transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-white/35 truncate">{item.desc}</div>
                        </div>
                        <i className="ri-arrow-right-s-line text-white/20 group-hover:text-accent-400 transition-colors"></i>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-white/25">
              <div className="flex items-center gap-1">
                <i className="ri-sparkling-fill text-accent-400 text-xs"></i>
                <span>AI Software Technology Search</span>
              </div>
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}