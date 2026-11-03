import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import FloatingCTA from '@/components/feature/FloatingCTA';
import { portfolioProjectsA } from '@/mocks/portfolio';
import { portfolioProjectsB } from '@/mocks/portfolioExtended';
import { portfolioProjectsC } from '@/mocks/portfolioNew';
import { usePageSEO } from '@/hooks/usePageSEO';
import { sanitizeExternalUrl } from '@/utils/security';

const allProjects = [...portfolioProjectsA, ...portfolioProjectsB, ...portfolioProjectsC];

const allCategories = [
  'All',
  'Manufacturing / Order Management',
  'Custom Web Application / Multi-Portal Platform',
  'Attendance / HRMS / Workforce Management',
  'Corporate Website',
  'Business Website',
  'Healthcare',
  'Healthcare Technology',
  'Education',
  'E-Commerce',
  'Hotel Software',
  'Restaurant',
  'Art & Design',
  'Gaming',
  'Media & Entertainment',
  'Fitness & Wellness',
  'Manufacturing',
  'Industrial',
  'Real Estate',
  'Legal',
  'Security',
  'NGO',
  'Coaching',
];

const filterIcons: Record<string, string> = {
  'All': 'ri-apps-line',
  'Manufacturing / Order Management': 'ri-box-3-line',
  'Custom Web Application / Multi-Portal Platform': 'ri-layout-masonry-line',
  'Attendance / HRMS / Workforce Management': 'ri-Pass-valid-line',
  'Corporate Website': 'ri-building-4-line',
  'Business Website': 'ri-briefcase-4-line',
  'Healthcare': 'ri-heart-pulse-line',
  'Healthcare Technology': 'ri-microscope-line',
  'Education': 'ri-graduation-cap-line',
  'E-Commerce': 'ri-shopping-cart-2-line',
  'Hotel Software': 'ri-hotel-line',
  'Restaurant': 'ri-restaurant-line',
  'Art & Design': 'ri-palette-line',
  'Gaming': 'ri-gamepad-line',
  'Media & Entertainment': 'ri-film-line',
  'Fitness & Wellness': 'ri-heart-pulse-line',
  'Manufacturing': 'ri-settings-3-line',
  'Industrial': 'ri-tools-line',
  'Real Estate': 'ri-building-2-line',
  'Legal': 'ri-scales-line',
  'Security': 'ri-shield-check-line',
  'NGO': 'ri-heart-line',
  'Coaching': 'ri-user-heart-line',
};

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);

  usePageSEO({
    title: 'Software & Web Portfolio | AI Software Technology — A Brand of Digi India Solutions',
    description: 'Explore AI Software Technology portfolio of 42+ delivered projects across custom ERP systems, order management software, multi-portal web platforms, factory attendance & HRMS portals, CRM platforms, SaaS applications, mobile apps, and business web solutions.',
    canonical: 'https://aisoftwaretechnology.in/portfolio',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Software & Web Portfolio — AI Software Technology',
        description:
          'Explore 42+ software and web development portfolio projects delivered by AI Software Technology (A Brand of Digi India Solutions).',
        url: 'https://aisoftwaretechnology.in/portfolio',
        isPartOf: { '@id': 'https://aisoftwaretechnology.in/#website' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: allProjects.length,
          itemListElement: allProjects.slice(0, 15).map((proj, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: proj.name,
            url: `https://aisoftwaretechnology.in/portfolio/${proj.slug}`,
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://aisoftwaretechnology.in/portfolio' },
        ],
      },
    ],
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filtered = useMemo(() => {
    let result = activeFilter === 'All' ? allProjects : allProjects.filter((p) => p.category === activeFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeFilter, searchQuery]);

  const displayed = showAll ? filtered : filtered.slice(0, 15);

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden pt-20 pb-12">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/30 to-dark-500"></div>
          <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[100px]"></div>
          <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                className="section-tag mx-auto mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Our Portfolio
              </motion.div>
              <motion.h1
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.12] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                Work That <span className="text-gradient">Speaks</span>{' '}
                <span className="block">For Itself</span>
              </motion.h1>
              <motion.p
                className="text-white/55 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                Explore our live software deployments and digital platforms — including order management systems, multi-portal web applications, factory attendance &amp; workforce portals, ERP/CRM systems, and industry websites.
              </motion.p>
            </motion.div>

            {/* Search */}
            <motion.div
              className="mt-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              <div className="relative">
                <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm"></i>
                <input
                  type="text"
                  placeholder="Search projects, technologies, industries..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
                  className="w-full pl-10 pr-9 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent-400/50 focus:ring-2 focus:ring-accent-500/15 transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <i className="ri-close-line text-white/70 text-[10px]"></i>
                  </button>
                )}
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { v: `${allProjects.length}+`, l: 'Projects' },
                { v: '20+', l: 'Industries' },
                { v: '100%', l: 'Custom Architecture' },
                { v: 'End-to-End', l: 'Delivery & Support' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gradient">{s.v}</div>
                  <div className="text-white/45 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-4 pt-3 sticky top-[64px] lg:top-[76px] z-30 bg-[#07111F]/95 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                  className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeFilter === cat
                      ? 'bg-accent-500 text-dark-500 shadow-[0_0_20px_rgba(0,194,255,0.3)]'
                      : 'bg-white/[0.04] text-white/60 border border-white/[0.06] hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <i className={`${filterIcons[cat] || 'ri-folder-line'} text-[11px]`}></i>
                  {cat}
                </button>
              ))}
            </motion.div>
            {searchQuery && (
              <div className="mt-2 text-xs text-white/50">
                <i className="ri-search-line mr-1"></i>
                Found {filtered.length} results for &ldquo;<span className="font-medium text-white/80">{searchQuery}</span>&rdquo;
              </div>
            )}
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-10 md:py-16">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-10" ref={gridRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + searchQuery}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {displayed.map((project, i) => {
                  const caseStudyTarget = project.caseStudyUrl || `/portfolio/${project.slug}`;
                  return (
                    <motion.div
                      key={project.id}
                      onClick={() => navigate(caseStudyTarget)}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col glass-card-hover border border-white/[0.08]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, duration: 0.45 }}
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 194, 255, 0.08), transparent 40%)`,
                        }}
                      ></div>

                      {/* Image */}
                      <div className="relative w-full aspect-[640/427] overflow-hidden bg-[#060D1A] flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.imageAlt || `${project.name} — AI Software Technology`}
                          title={project.name}
                          width="640"
                          height="427"
                          decoding="async"
                          onError={(e) => {
                            if (project.fallbackImage && e.currentTarget.src !== project.fallbackImage) {
                              e.currentTarget.src = project.fallbackImage;
                            }
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-500/85 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-dark-500/85 backdrop-blur-md text-accent-400 text-[10px] font-bold uppercase tracking-wider border border-white/10 line-clamp-1">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-dark-500/80 backdrop-blur-md text-white/75 text-[10px] font-medium border border-white/10">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow relative z-10">
                        <h3 className="font-heading font-bold text-white text-base leading-snug mb-2 group-hover:text-accent-300 transition-colors duration-300">
                          {project.name}
                        </h3>

                        <p className="text-white/55 text-xs leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 3).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] text-white/55 font-medium">
                              {t}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-white/35">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Highlight */}
                        {project.businessResults?.[0] && (
                          <div className="mb-4 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            <span className="text-accent-400 text-[9px] uppercase tracking-wider font-bold block mb-0.5">
                              Key Highlight
                            </span>
                            <p className="text-white/65 text-[11px] leading-snug line-clamp-1">
                              {project.businessResults[0]}
                            </p>
                          </div>
                        )}

                        {/* Two Action Buttons: Visit & Case Study */}
                        <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.06]">
                          <a
                            href={sanitizeExternalUrl(project.url) || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/85 hover:text-white text-xs font-semibold transition-all duration-300 cursor-pointer"
                          >
                            <i className="ri-external-link-line text-xs text-accent-400"></i>
                            <span>Visit</span>
                          </a>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(caseStudyTarget);
                            }}
                            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-accent-500/15 hover:bg-accent-500/25 border border-accent-400/25 text-accent-300 hover:text-white text-xs font-semibold transition-all duration-300 cursor-pointer"
                          >
                            <i className="ri-article-line text-xs"></i>
                            <span>Case Study</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Show More */}
            {filtered.length > 15 && (
              <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="glass-btn cursor-pointer"
                >
                  {showAll ? 'Show Less' : `View All ${filtered.length} Projects`}
                  <i className={showAll ? 'ri-arrow-up-line ml-2' : 'ri-arrow-down-line ml-2'}></i>
                </button>
              </motion.div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.04] flex items-center justify-center mb-4">
                  <i className="ri-folder-open-line text-2xl text-white/30"></i>
                </div>
                <p className="text-white/45 text-sm">No projects found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                  className="mt-3 text-xs text-accent-400 hover:text-accent-300 cursor-pointer transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-accent-500/8 to-primary-500/8"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-500/10 blur-[100px]"></div>
              <div className="relative z-10">
                <motion.div className="section-tag mx-auto mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  Let&apos;s Build Yours
                </motion.div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Ready to Build Your Next{' '}
                  <span className="text-gradient">Software Solution?</span>
                </h2>
                <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Let&apos;s transform your business operations with custom ERP, CRM, HRMS, SaaS, or web applications tailored to your workflow.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Free Consultation
                    <i className="ri-arrow-right-line ml-2"></i>
                  </motion.a>
                  <a
                    href="https://wa.me/919990390519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn cursor-pointer"
                  >
                    <i className="ri-whatsapp-line text-green-400 mr-2"></i>
                    WhatsApp +91 9990390519
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}