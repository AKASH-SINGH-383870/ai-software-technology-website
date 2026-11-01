import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { caseStudies } from '@/mocks/caseStudies';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function CaseStudies() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'Software Case Studies | AI Software Technology — ERP, CRM, HRMS & Automation Implementations',
    description:
      'Explore software architecture and implementation case studies from AI Software Technology (A Brand of Digi India Solutions) across Custom ERP, Sales CRM, HRMS & Payroll, Healthcare HMS, Education ERP, and AI Workflow Automation.',
    keywords:
      'software case studies, ERP implementation case study, CRM software case study, HRMS payroll software case study, AI Software Technology case studies, custom software development India',
    canonical: 'https://aisoftwaretechnology.in/case-studies',
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[380px] md:min-h-[480px] flex items-center justify-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 via-dark-500/40 to-dark-500"></div>
          <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="section-tag mx-auto mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Software Case Studies
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Practical Solutions for <span className="text-gradient">Real Business Workflows</span>
              </motion.h1>
              <motion.p
                className="text-white/45 text-base md:text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Explore how AI Software Technology architects and delivers custom ERP, CRM, HRMS, SaaS, mobile applications, and AI workflow automation across industries.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[
                { val: '6', label: 'Core Software Blueprints' },
                { val: '30+', label: 'Enterprise Modules' },
                { val: '100%', label: 'Custom Workflow Fit' },
                { val: 'End-to-End', label: 'Architecture & Support' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-1">{s.val}</div>
                  <div className="text-white/35 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Study Cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="space-y-8">
              {caseStudies.map((study, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={study.id}
                    className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                    onClick={() => { navigate(`/case-studies/${study.slug}`); window.scrollTo(0, 0); }}
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Image */}
                      <div className="relative w-full lg:w-[46%] aspect-[640/427] bg-[#060D1A] flex-shrink-0 overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.imageAlt || study.title}
                          title={study.title}
                          width="640"
                          height="427"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            if (study.fallbackImage && e.currentTarget.src !== study.fallbackImage) {
                              e.currentTarget.src = study.fallbackImage;
                            }
                          }}
                          className="w-full h-full object-contain lg:object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-500/70 via-transparent to-transparent pointer-events-none"></div>
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-dark-500/80 backdrop-blur-md text-white/70 text-[10px] font-bold uppercase tracking-wider border border-white/[0.06]">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-accent-500/15 backdrop-blur-md text-accent-400 text-[10px] font-bold uppercase tracking-wider border border-accent-400/20">
                            {study.duration}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                        <div>
                          <p className="text-white/30 text-[10px] uppercase tracking-[0.15em] font-semibold mb-2">
                            {study.client}
                          </p>
                          <h3 className="font-heading font-semibold text-white text-lg md:text-xl leading-snug mb-3 group-hover:text-accent-300 transition-colors duration-300">
                            {study.title}
                          </h3>
                          <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                            {study.challenge}
                          </p>

                          {/* Results */}
                          <div className="flex flex-wrap gap-3 mb-5">
                            {study.results.slice(0, 3).map((r) => (
                              <div key={r.label} className="flex items-baseline gap-1">
                                <span className="text-sm font-bold text-accent-400">{r.value}</span>
                                <span className="text-[10px] text-white/35 font-medium">{r.label}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {study.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.05] text-[10px] text-white/40">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                          <span className="text-white/40 text-xs">{study.team}</span>
                          <div className="flex items-center gap-2.5">
                            {study.liveUrl && (
                              <a
                                href={study.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/85 text-xs font-semibold transition-all duration-300 cursor-pointer"
                              >
                                <i className="ri-external-link-line text-accent-400"></i>
                                <span>Visit</span>
                              </a>
                            )}
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent-500/15 border border-accent-400/25 text-accent-300 text-xs font-semibold">
                              <span>Case Study</span>
                              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
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
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Need a Similar Software System for Your Business?
                </h3>
                <p className="text-white/45 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Book a free discovery consultation with AI Software Technology to map your operational workflows and software requirements.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary inline-flex items-center cursor-pointer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Free Demo
                    <i className="ri-arrow-right-line ml-2"></i>
                  </motion.a>
                  <a
                    href="https://wa.me/919990390519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn inline-flex items-center cursor-pointer"
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
      <ScrollToTop />
    </div>
  );
}