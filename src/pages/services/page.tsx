import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { servicesData, serviceCategories } from '@/mocks/services';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function Services() {
  const navigate = useNavigate();
  const [activeCat, setActiveCat] = useState<string>('all');

  usePageSEO({
    title: 'Custom Software Development Services | ERP, CRM, HRMS, SaaS & Mobile Apps | AI Software Technology',
    description: 'Explore 30+ custom software development services by AI Software Technology — A Brand of Digi India Solutions. Custom ERP, CRM, HRMS, SaaS applications, mobile apps, industry-specific software, and AI automation. Call +91 9990390519.',
    keywords: 'custom software development services, ERP software development, CRM software development, HRMS software development, SaaS application development, mobile app development India, hospital management software, school ERP software, AI automation solutions, AI Software Technology',
    canonical: 'https://aisoftwaretechnology.in/services',
  });

  const visibleCategories = activeCat === 'all'
    ? serviceCategories
    : serviceCategories.filter((c) => c.id === activeCat);

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 aurora-bg"></div>
          <div className="absolute inset-0 grid-bg opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[140px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-500/6 blur-[120px]"></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag mx-auto">
                <i className="ri-sparkling-line"></i> AI Software Technology — A Brand of Digi India Solutions
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                Custom Software &amp; <span className="text-gradient">Business Technology</span> Services
              </h1>
              <p className="section-subtitle mx-auto mb-8 max-w-2xl">
                We design and develop modern, scalable software tailored to your exact workflows — from ERP, CRM, HRMS, and SaaS platforms to industry-specific management systems and AI automation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={() => navigate('/contact')} className="glass-btn-primary text-sm cursor-pointer">
                  <i className="ri-calendar-check-line mr-2"></i> Get Free Consultation
                </button>
                <a href="https://wa.me/919990390519" target="_blank" rel="noopener noreferrer" className="glass-btn text-sm !border-emerald-500/20 hover:!bg-emerald-500/10 cursor-pointer">
                  <i className="ri-whatsapp-line mr-2 text-emerald-400"></i> WhatsApp +91 9990390519
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Flagship Deep-Dive Solutions */}
        <section className="py-16 md:py-24 border-b border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto">
                <i className="ri-layers-line"></i> Flagship Platforms
              </div>
              <h2 className="section-title text-white mb-3">
                Enterprise <span className="text-gradient">Software Suites</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Click any flagship platform below to explore detailed modules, capabilities, technology stacks, and implementation workflows.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, i) => (
                <motion.div
                  key={service.slug}
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="glass-card-hover rounded-2xl p-8 flex flex-col justify-between group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center mb-6 group-hover:border-accent-400/30 group-hover:shadow-[0_0_30px_rgba(0,194,255,0.2)] transition-all duration-300">
                      <i className={`${service.icon} text-accent-400 text-2xl`}></i>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs font-medium text-accent-400/70 mb-3">{service.tagline}</p>
                    <p className="text-sm text-white/40 leading-relaxed mb-6 line-clamp-3">
                      {service.heroDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((f) => (
                        <div key={f.title} className="flex items-center gap-2 text-xs text-white/50">
                          <i className="ri-check-line text-accent-400 text-sm flex-shrink-0"></i>
                          <span>{f.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] text-white/35">{t}</span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-accent-400 flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap">
                      Explore Capabilities <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete 30-Service Catalog Organized into 3 Categories */}
        <section className="py-16 md:py-24 bg-dark-600/50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto">
                <i className="ri-apps-2-line"></i> Complete Service Directory
              </div>
              <h2 className="section-title text-white mb-4">
                30 Specialized <span className="text-gradient">Software &amp; Digital Solutions</span>
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                Organized into Core Software Development, Industry-Specific Software, and Automation &amp; Digital Solutions.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() => setActiveCat('all')}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    activeCat === 'all'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                      : 'bg-white/[0.03] text-white/50 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  All 30 Solutions
                </button>
                {serviceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      activeCat === cat.id
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                        : 'bg-white/[0.03] text-white/50 hover:text-white border border-white/[0.06]'
                    }`}
                  >
                    <i className={cat.icon}></i>
                    <span>{cat.title} ({cat.services.length})</span>
                  </button>
                ))}
              </div>
            </motion.div>

            <div className="space-y-16">
              {visibleCategories.map((category, catIdx) => (
                <div key={category.id}>
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="text-accent-400 text-xs font-semibold uppercase tracking-widest mb-1 flex items-center gap-2">
                        <i className={category.icon}></i> Category {catIdx + 1}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                      <p className="text-white/40 text-sm mt-1">{category.subtitle}</p>
                    </div>
                    <span className="mt-3 md:mt-0 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50 text-xs">
                      {category.services.length} Specialized Solutions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.services.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx % 3) * 0.06, duration: 0.4 }}
                        whileHover={{ y: -4 }}
                        onClick={() => navigate((item as { industryPath?: string }).industryPath || `/services/${item.slug}`)}
                        className="glass-card-hover rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center group-hover:border-accent-400/30 transition-all">
                              <i className={`${item.icon} text-accent-400 text-lg`}></i>
                            </div>
                            <span className="text-[10px] font-mono text-white/25 bg-white/[0.03] px-2 py-0.5 rounded">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h4 className="font-heading text-base font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-white/40 leading-relaxed mb-5">
                            {item.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] text-white/35">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <i className="ri-arrow-right-up-line text-white/30 group-hover:text-accent-400 transition-colors text-sm ml-2"></i>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-3xl p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/10 blur-[100px]"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="section-tag mx-auto mb-4">Your Business. Our Technology. Let&apos;s Build Together.</span>
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4">
                  Need a Custom Software Solution Not Listed Above?
                </h3>
                <p className="text-white/45 text-sm md:text-base mb-8">
                  We architect custom software around your exact workflow, user roles, and operational requirements. Talk to our engineering team today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button onClick={() => navigate('/contact')} className="glass-btn-primary cursor-pointer">
                    Request Free Consultation <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                  <a href="tel:+919990390519" className="glass-btn cursor-pointer">
                    <i className="ri-phone-line mr-2 text-accent-400"></i> Call +91 9990390519
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