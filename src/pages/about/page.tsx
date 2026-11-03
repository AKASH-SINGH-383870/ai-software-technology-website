import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { companyStats, milestones, values } from '@/mocks/team';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function About() {
  const navigate = useNavigate();

  usePageSEO({
    title: 'About AI Software Technology | Custom Software Development Brand of Digi India Solutions',
    description:
      'AI Software Technology is a specialized software development brand of Digi India Solutions, created to help businesses replace manual operations and disconnected tools with powerful, easy-to-use digital systems including ERP, CRM, HRMS, SaaS and AI automation.',
    canonical: 'https://aisoftwaretechnology.in/about',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About AI Software Technology — A Brand of Digi India Solutions',
        description:
          'AI Software Technology is the custom software development and business technology brand of Digi India Solutions in New Delhi, India.',
        url: 'https://aisoftwaretechnology.in/about',
        isPartOf: { '@id': 'https://aisoftwaretechnology.in/#website' },
        mainEntity: { '@id': 'https://aisoftwaretechnology.in/#organization' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://aisoftwaretechnology.in/about' },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[420px] md:min-h-[540px] flex items-center overflow-hidden pt-20 pb-12">
          <div className="absolute inset-0 aurora-bg opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/40 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="section-tag mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                A Brand of Digi India Solutions
              </motion.div>
              <motion.h1
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                About <span className="text-gradient">AI Software Technology</span>
              </motion.h1>
              <motion.p
                className="text-white/60 text-base md:text-lg leading-relaxed mb-4 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                AI Software Technology is a specialized software development brand of Digi India Solutions, created to help businesses replace manual operations and disconnected tools with powerful, easy-to-use digital systems.
              </motion.p>
              <motion.p
                className="text-white/45 text-sm md:text-base leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                We focus on building custom software, CRM platforms, ERP solutions, HRMS systems, SaaS applications, mobile apps and AI-enabled business workflows tailored to real business needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-20 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {companyStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3">
                    <i className={`${stat.icon} text-accent-400 text-lg`}></i>
                  </div>
                  <div className="text-xl md:text-2xl font-heading font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-white/40 text-[11px]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision & Parent Brand Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="section-tag mb-5">Purpose &amp; Ownership</div>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  Your Business. Our Technology. <span className="text-gradient">Let&apos;s Build Together.</span>
                </h2>
                <p className="text-white/50 text-sm leading-[1.8] mb-6">
                  Every growing organization reaches a stage where spreadsheets, manual follow-ups, and disconnected software slow down daily operations. We partner with business owners, operations heads, and enterprise teams to engineer systems that fit their exact business logic.
                </p>

                {/* Parent Brand Card */}
                <div className="glass-card rounded-2xl p-6 border border-accent-500/20 bg-gradient-to-br from-primary-500/10 via-dark-600 to-accent-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/15 flex items-center justify-center">
                      <i className="ri-building-4-line text-accent-400 text-lg"></i>
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-accent-400 font-semibold block">
                        Parent Business Relationship
                      </span>
                      <h3 className="font-heading font-bold text-white text-lg">
                        A Brand of Digi India Solutions
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    AI Software Technology operates as a dedicated software development and technology solutions brand of Digi India Solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    className="glass-card-hover rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-3">
                      <i className={`${v.icon} text-lg text-accent-400`}></i>
                    </div>
                    <h4 className="font-heading font-semibold text-white text-base mb-2">{v.title}</h4>
                    <p className="text-white/45 text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach (5 Steps) */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">Our Approach</div>
              <h2 className="section-title text-white">
                How We Build <span className="text-gradient">Reliable Business Software</span>
              </h2>
              <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">
                A structured 5-stage methodology designed to align software architecture with your real operational goals.
              </p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-accent-500/20 to-transparent"></div>

              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    className={`relative flex items-start gap-6 md:gap-8 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <div className={`hidden md:block w-[calc(50%-32px)] ${isLeft ? 'text-right' : 'text-left'}`}>
                      <div className={`glass-card rounded-xl p-5 ${isLeft ? 'ml-auto' : 'mr-auto'} max-w-[320px]`}>
                        <p className="text-accent-400 font-heading font-bold text-xs uppercase tracking-wider mb-1">{m.year}</p>
                        <h4 className="text-white font-heading font-semibold text-base mb-1.5">{m.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    <div className="w-8 flex-shrink-0 flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent-500 border-2 border-dark-500 shadow-[0_0_10px_rgba(0,194,255,0.5)] mt-2"></div>
                    </div>

                    <div className="flex-grow md:hidden">
                      <div className="glass-card rounded-xl p-4">
                        <p className="text-accent-400 font-heading font-bold text-xs uppercase tracking-wider mb-1">{m.year}</p>
                        <h4 className="text-white font-heading font-semibold text-sm mb-1">{m.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    <div className="hidden md:block w-[calc(50%-32px)]"></div>
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
                  Ready to Build Custom Software for Your Business?
                </h3>
                <p className="text-white/45 text-sm md:text-base max-w-xl mx-auto mb-8">
                  Speak with our software architects about custom ERP, CRM, HRMS, SaaS, or workflow automation tailored to your operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                    className="glass-btn-primary cursor-pointer"
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