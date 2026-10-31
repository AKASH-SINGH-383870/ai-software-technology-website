import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Breadcrumb from '@/components/feature/Breadcrumb';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { blogPosts } from '@/mocks/blog';
import { servicesData } from '@/mocks/services';
import { portfolioProjectsA } from '@/mocks/portfolio';
import { portfolioProjectsB } from '@/mocks/portfolioExtended';
import { portfolioProjectsC } from '@/mocks/portfolioNew';
import { caseStudies } from '@/mocks/caseStudies';
import { usePageSEO } from '@/hooks/usePageSEO';

const allPortfolioProjects = [...portfolioProjectsA, ...portfolioProjectsB, ...portfolioProjectsC];

const staticSections = [
  {
    title: 'Core Pages (14 Routes)',
    links: [
      { label: 'Home — AI Software Technology', href: '/' },
      { label: 'About Us — A Brand of Digi India Solutions', href: '/about' },
      { label: 'All Software & Technology Services', href: '/services' },
      { label: 'Software & Web Portfolio', href: '/portfolio' },
      { label: 'Software Case Studies', href: '/case-studies' },
      { label: 'Industries We Serve', href: '/industries' },
      { label: 'Blog & Technology Insights', href: '/blogs' },
      { label: 'Project Cost Estimator & ROI Calculator', href: '/calculators' },
      { label: 'AI Automation & Business Intelligence', href: '/ai-features' },
      { label: 'Knowledge Center & Technical Guides', href: '/knowledge-center' },
      { label: 'Our Journey & Milestones', href: '/our-journey' },
      { label: 'Careers at AI Software Technology', href: '/careers' },
      { label: 'Contact Us & WhatsApp Enquiry', href: '/contact' },
      { label: 'HTML Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Industry Vertical Solutions (8 Routes)',
    links: [
      { label: 'Healthcare Software Solutions', href: '/industries/healthcare' },
      { label: 'Finance & Banking Software Solutions', href: '/industries/finance' },
      { label: 'Manufacturing ERP & IoT Solutions', href: '/industries/manufacturing' },
      { label: 'Education & EdTech Software Solutions', href: '/industries/education' },
      { label: 'Retail POS & Omnichannel Software', href: '/industries/retail' },
      { label: 'Hospitality & Hotel Management Software', href: '/industries/hospitality' },
      { label: 'Construction & Project Management Software', href: '/industries/construction' },
      { label: 'Real Estate CRM & Property Software', href: '/industries/real-estate' },
    ],
  },
  {
    title: 'Technology Comparisons & Case Studies (12 Routes)',
    links: [
      ...caseStudies.map((cs) => ({
        label: `Case Study: ${cs.title}`,
        href: `/case-studies/${cs.slug}`,
      })),
      { label: 'Comparison: React vs Angular', href: '/comparisons/react-vs-angular' },
      { label: 'Comparison: Flutter vs React Native', href: '/comparisons/flutter-vs-react-native' },
      { label: 'Comparison: Custom Software vs SaaS', href: '/comparisons/custom-software-vs-saas' },
    ],
  },
];

export default function SitemapPage() {
  usePageSEO({
    title: 'HTML Sitemap | Complete Directory of Pages — AI Software Technology',
    description:
      'Browse all 154+ public pages on AI Software Technology (A Brand of Digi India Solutions) — including 25 software services, 42 portfolio projects, 9 case studies, 8 industry verticals, and 53 B2B technology guides.',
    canonical: 'https://aisoftwaretechnology.in/sitemap',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'HTML Sitemap - AI Software Technology',
      description:
        'Complete HTML sitemap of AI Software Technology (A Brand of Digi India Solutions). Browse all custom software services, ERP, CRM, HRMS, SaaS, industries, portfolio projects, case studies, and blog articles.',
      url: 'https://aisoftwaretechnology.in/sitemap',
      isPartOf: {
        '@id': 'https://aisoftwaretechnology.in/#website',
      },
    },
  });

  const serviceLinks = servicesData.map((srv) => ({
    label: srv.name,
    href: `/services/${srv.slug}`,
  }));

  const portfolioLinks = allPortfolioProjects.map((proj) => ({
    label: `${proj.name} (${proj.category})`,
    href: `/portfolio/${proj.slug}`,
  }));

  const blogLinks = blogPosts.map((post) => ({
    label: post.title,
    href: `/blogs/${post.slug}`,
  }));

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Breadcrumb />

        <section className="py-12 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag mx-auto mb-4">Complete Crawl Directory</div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Website <span className="text-gradient">Sitemap</span>
              </h1>
              <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
                Complete index of all {14 + 8 + 3 + serviceLinks.length + portfolioLinks.length + caseStudies.length + blogLinks.length} canonical public pages on AI Software Technology — A Brand of Digi India Solutions.
              </p>
            </motion.div>

            {/* Core, Industries & Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {staticSections.map((section, sIdx) => (
                <motion.div
                  key={section.title}
                  className="glass-card rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.08, duration: 0.5 }}
                >
                  <h2 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                    <i className="ri-folder-line text-accent-400 text-xs"></i>
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-white/55 hover:text-accent-400 text-xs transition-colors duration-200 flex items-start gap-2 group"
                        >
                          <i className="ri-arrow-right-s-line text-white/25 group-hover:text-accent-400 text-xs mt-0.5 flex-shrink-0"></i>
                          <span className="leading-snug">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* All 25 Software Services */}
            <motion.div
              className="glass-card rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                <i className="ri-code-s-slash-line text-accent-400 text-xs"></i>
                All Software &amp; Technology Services ({serviceLinks.length} Service Pages)
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/55 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <i className="ri-arrow-right-s-line text-white/25 group-hover:text-accent-400 text-xs flex-shrink-0"></i>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* All 42 Portfolio Projects */}
            <motion.div
              className="glass-card rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                <i className="ri-briefcase-4-line text-accent-400 text-xs"></i>
                All Portfolio Projects ({portfolioLinks.length} Project Pages)
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {portfolioLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/55 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group truncate"
                    >
                      <i className="ri-arrow-right-s-line text-white/25 group-hover:text-accent-400 text-xs flex-shrink-0"></i>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* All 53 Blog Articles */}
            <motion.div
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                <i className="ri-article-line text-accent-400 text-xs"></i>
                All Blog Articles &amp; B2B Guides ({blogLinks.length} Articles)
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {blogLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/55 hover:text-accent-400 text-xs transition-colors duration-200 flex items-center gap-2 group truncate"
                    >
                      <i className="ri-arrow-right-s-line text-white/25 group-hover:text-accent-400 text-xs flex-shrink-0"></i>
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}