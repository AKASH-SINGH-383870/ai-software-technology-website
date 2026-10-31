import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Breadcrumb from '@/components/feature/Breadcrumb';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { blogPosts } from '@/mocks/blog';

const sitemapData = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Knowledge Center', href: '/knowledge-center' },
      { label: 'AI Features', href: '/ai-features' },
      { label: 'Calculators', href: '/calculators' },
    ],
  },
  {
    title: 'Services (22+ Solutions)',
    links: [
      { label: 'All Software & Technology Services', href: '/services' },
      { label: 'Custom Software Development', href: '/services/custom-software' },
      { label: 'CRM Software Development', href: '/services/crm-solutions' },
      { label: 'ERP Software Development', href: '/services/erp-solutions' },
      { label: 'HRMS Software Development', href: '/services/hrms-software' },
      { label: 'SaaS Application Development', href: '/services/saas-development' },
      { label: 'Web Application Development', href: '/services/web-application-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'AI Automation Solutions', href: '/services/ai-automation' },
      { label: 'API Development & System Integration', href: '/services/api-development-integration' },
      { label: 'E-Commerce Website & App Development', href: '/services/ecommerce-development' },
      { label: 'Business Website Development', href: '/services/website-development' },
      { label: 'Inventory & Billing Software', href: '/services/inventory-billing-software' },
      { label: 'School Management Software', href: '/services/school-management-software' },
      { label: 'Hospital / Clinic Management Software', href: '/services/hospital-clinic-management-software' },
      { label: 'Hotel & Restaurant Management Software', href: '/services/hotel-restaurant-management-software' },
      { label: 'Real Estate CRM Software', href: '/services/real-estate-crm-software' },
      { label: 'Lead Management System', href: '/services/lead-management-system' },
      { label: 'Appointment & Booking Software', href: '/services/appointment-booking-software' },
      { label: 'POS & Retail Billing Software', href: '/services/pos-retail-billing-software' },
      { label: 'Payroll Management System', href: '/services/payroll-management-system' },
      { label: 'Business Dashboard & Analytics', href: '/services/business-dashboard-analytics' },
      { label: 'Software Maintenance & Support', href: '/services/software-maintenance-support' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance & Banking', href: '/industries/finance' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Real Estate', href: '/industries/realestate' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'All Projects', href: '/portfolio' },
      { label: 'Lubricant Order Management Software', href: '/portfolio/lubricant-order-management-software' },
      { label: 'Astrology & Matrimonial Platform', href: '/portfolio/astrology-matrimonial-platform' },
      { label: 'Factory Attendance & Workforce Management Software', href: '/portfolio/factory-attendance-management-software' },
      { label: 'AI Software Technology Platform', href: '/portfolio/digi-india-solutions' },
      { label: 'Hotel Management Software', href: '/portfolio/hotel-management-software' },
      { label: 'Hartner', href: '/portfolio/hartner' },
      { label: 'Mansha Clinic', href: '/portfolio/mansha-clinic' },
      { label: 'Sartech India', href: '/portfolio/sartech-india' },
      { label: 'SDDIPL', href: '/portfolio/sddipl' },
      { label: 'Goyat Trading', href: '/portfolio/goyat-trading' },
      { label: 'Goel Mewe Wale', href: '/portfolio/goel-mewe-wale' },
      { label: 'Prothsahan Team', href: '/portfolio/prothsahan-team' },
      { label: 'NEET Physics', href: '/portfolio/neet-physics' },
      { label: 'Sunita Enterprises', href: '/portfolio/sunita-enterprises' },
      { label: 'Aryan Air Conditioner', href: '/portfolio/aryan-air-conditioner' },
      { label: 'SSP Infra', href: '/portfolio/ssp-infra' },
      { label: 'Surjeet India', href: '/portfolio/surjeet-india' },
    ],
  },
  {
    title: 'Case Studies',
    links: [
      { label: 'All Case Studies', href: '/case-studies' },
      { label: 'Lubricant Order Management Software', href: '/case-studies/lubricant-order-management-software' },
      { label: 'Astrology & Matrimonial Platform', href: '/case-studies/astrology-matrimonial-platform' },
      { label: 'Factory Attendance & Workforce Management Software', href: '/case-studies/factory-attendance-management-software' },
      { label: 'Multi-Clinic Hospital Management System', href: '/case-studies/medicare-patient-platform' },
      { label: 'Sales CRM & WhatsApp Automation Platform', href: '/case-studies/shopnow-ecommerce-scale' },
      { label: 'Multi-Warehouse ERP & Billing System', href: '/case-studies/logichain-erp-transformation' },
      { label: 'AI Workflow Automation & Chatbots', href: '/case-studies/brandvista-ai-marketing' },
      { label: 'End-to-End HRMS & Payroll Software', href: '/case-studies/finsecure-payment-platform' },
      { label: 'School & Coaching Management ERP', href: '/case-studies/edulearn-gamified-platform' },
    ],
  },
  {
    title: 'Technology Comparisons',
    links: [
      { label: 'React vs Angular', href: '/comparisons/react-vs-angular' },
      { label: 'Flutter vs React Native', href: '/comparisons/flutter-vs-react-native' },
      { label: 'Custom Software vs SaaS', href: '/comparisons/custom-software-vs-saas' },
    ],
  },
];

export default function SitemapPage() {
  const sitemapLD = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'HTML Sitemap - AI Software Technology',
    description: 'Complete sitemap of AI Software Technology (A Brand of Digi India Solutions). Browse all pages including custom software services, ERP, CRM, HRMS, SaaS, industries, portfolio, case studies, and blog posts.',
    url: 'https://aisoftwaretechnology.in/sitemap',
    isPartOf: {
      '@type': 'WebSite',
      name: 'AI Software Technology',
      url: 'https://aisoftwaretechnology.in',
    },
  };

  // Generate blog links dynamically from blogPosts
  const blogLinks = blogPosts.map((post) => ({
    label: post.title,
    href: `/blogs/${post.slug}`,
  }));

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapLD) }}></script>
      <Navbar />

      <main>
        <Breadcrumb />

        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag mx-auto mb-4">Navigate</div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Website <span className="text-gradient">Sitemap</span>
              </h1>
              <p className="text-white/35 text-sm md:text-base max-w-xl mx-auto">
                Find every page on the AI Software Technology website — custom software services, industry solutions, portfolio projects, case studies, and B2B technology guides.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sitemapData.map((section, sIdx) => (
                <motion.div
                  key={section.title}
                  className="glass-card rounded-xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.08, duration: 0.5 }}
                >
                  <h3 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                    <i className="ri-folder-line text-accent-400 text-xs"></i>
                    {section.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-white/40 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <i className="ri-arrow-right-s-line text-white/15 group-hover:text-accent-400/60 text-[10px] transition-colors"></i>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Blog section with dynamic links */}
              <motion.div
                className="glass-card rounded-xl p-5 lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.48, duration: 0.5 }}
              >
                <h3 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                  <i className="ri-article-line text-accent-400 text-xs"></i>
                  Blog & Insights ({blogPosts.length} articles)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5">
                  <li key="all-blogs" className="list-none">
                    <Link
                      to="/blogs"
                      className="text-white/50 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group font-medium"
                    >
                      <i className="ri-arrow-right-s-line text-white/15 group-hover:text-accent-400/60 text-[10px] transition-colors"></i>
                      All Blogs
                    </Link>
                  </li>
                  {blogLinks.map((link) => (
                    <li key={link.href} className="list-none">
                      <Link
                        to={link.href}
                        className="text-white/40 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group truncate"
                      >
                        <i className="ri-arrow-right-s-line text-white/15 group-hover:text-accent-400/60 text-[10px] transition-colors flex-shrink-0"></i>
                        <span className="truncate">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </div>
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