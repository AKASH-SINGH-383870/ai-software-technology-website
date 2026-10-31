import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { caseStudies } from '@/mocks/caseStudies';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const study = slug ? caseStudies.find((c) => c.slug === slug) : undefined;

  usePageSEO({
    title: study
      ? `${study.title} | Case Study — AI Software Technology`
      : 'Case Study | AI Software Technology — A Brand of Digi India Solutions',
    description: study
      ? `${study.overview} Explore business challenges, solution architecture, key features, workflow, and technology stack by AI Software Technology.`
      : 'Explore software implementation case studies by AI Software Technology (A Brand of Digi India Solutions).',
    ogTitle: study ? `${study.title} — Case Study` : 'Case Studies — AI Software Technology',
    ogDescription: study?.overview,
    ogImage: study?.image,
    ogType: 'article',
    canonical: study
      ? `https://aisoftwaretechnology.in/case-studies/${study.slug}`
      : 'https://aisoftwaretechnology.in/case-studies',
    jsonLd: study
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: study.title,
            description: study.overview,
            url: `https://aisoftwaretechnology.in/case-studies/${study.slug}`,
            image: study.image,
            author: {
              '@type': 'Organization',
              name: 'AI Software Technology',
              url: 'https://aisoftwaretechnology.in',
            },
            publisher: {
              '@type': 'Organization',
              name: 'AI Software Technology',
              url: 'https://aisoftwaretechnology.in',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Digi India Solutions',
              },
            },
            about: { '@type': 'Thing', name: study.industry },
            keywords: study.tags.join(', '),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://aisoftwaretechnology.in/case-studies' },
              { '@type': 'ListItem', position: 3, name: study.title, item: `https://aisoftwaretechnology.in/case-studies/${study.slug}` },
            ],
          },
        ]
      : undefined,
  });

  if (!study) {
    return (
      <div className="min-h-screen bg-dark-500 text-white">
        <Navbar />
        <main className="pt-24">
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6">
                <i className="ri-file-search-line text-3xl text-white/30"></i>
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-2">Case Study Not Found</h2>
              <p className="text-white/40 text-sm mb-6">The case study you are looking for does not exist.</p>
              <button onClick={() => navigate('/case-studies')} className="glass-btn cursor-pointer">
                View All Case Studies
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.overview,
    url: `https://aisoftwaretechnology.in/case-studies/${study.slug}`,
    image: study.image,
    author: {
      '@type': 'Organization',
      name: 'AI Software Technology',
      url: 'https://aisoftwaretechnology.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI Software Technology',
      url: 'https://aisoftwaretechnology.in',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Digi India Solutions',
      },
    },
    about: { '@type': 'Thing', name: study.industry },
    keywords: study.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}></script>
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
          <Breadcrumb customLabel={study.title} customPath={`/case-studies/${study.slug}`} />
        </div>

        {/* Hero Image */}
        <section className="relative min-h-[320px] md:min-h-[440px] flex items-end overflow-hidden py-10">
          <img
            src={study.image}
            alt={study.title}
            loading="eager"
            decoding="async"
            width="1400"
            height="760"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/50 via-dark-500/75 to-dark-500"></div>
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pb-2">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-dark-500/85 backdrop-blur-md text-white/85 text-[11px] font-bold uppercase tracking-wider border border-white/10">
                {study.industry}
              </span>
              {study.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-accent-500/15 backdrop-blur-md text-accent-300 text-[11px] font-semibold uppercase tracking-wider border border-accent-400/25">
                  {tag}
                </span>
              ))}
            </div>
            <motion.h1
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {study.title}
            </motion.h1>
          </div>
        </section>

        {/* Meta & Live Visit Bar (Section 2: Industry & Section 9: Project Visit Link) */}
        <section className="border-b border-white/[0.08] bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 py-4">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center">
                    <i className="ri-building-4-line text-primary-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider">Industry</p>
                    <p className="text-white/85 text-xs font-semibold">{study.industry}</p>
                  </div>
                </div>
                <div className="w-px h-7 bg-white/[0.08] hidden sm:block"></div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-500/15 flex items-center justify-center">
                    <i className="ri-user-star-line text-accent-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider">Domain / Client</p>
                    <p className="text-white/85 text-xs font-semibold">{study.client}</p>
                  </div>
                </div>
                <div className="w-px h-7 bg-white/[0.08] hidden md:block"></div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center">
                    <i className="ri-team-line text-primary-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider">Engineering Team</p>
                    <p className="text-white/85 text-xs font-semibold">{study.team}</p>
                  </div>
                </div>
              </div>

              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500 text-dark-500 hover:bg-accent-400 text-xs font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,194,255,0.25)] cursor-pointer"
                >
                  <i className="ri-external-link-line text-sm"></i>
                  <span>Visit Live Project</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Main Case Study Sections */}
        <section className="py-12 md:py-20">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 md:px-10 space-y-12">
            {/* 1. Project Overview */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-accent-500/15 flex items-center justify-center">
                  <i className="ri-file-list-3-line text-accent-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">1. Project Overview</h2>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-[1.85]">{study.overview}</p>
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs text-white/55">
                <span className="font-semibold text-accent-400">2. Industry:</span>
                <span>{study.industry}</span>
              </div>
            </motion.div>

            {/* 3. Business Challenge */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center">
                  <i className="ri-alert-line text-red-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">3. Business Challenge</h2>
              </div>
              <p className="text-white/65 text-sm sm:text-base leading-[1.85]">{study.challenge}</p>
            </motion.div>

            {/* 4. Solution */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-500/15 flex items-center justify-center">
                  <i className="ri-lightbulb-line text-primary-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">4. Solution Architecture</h2>
              </div>
              <p className="text-white/65 text-sm sm:text-base leading-[1.85]">{study.approach}</p>
            </motion.div>

            {/* 5. Key Features */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent-500/15 flex items-center justify-center">
                  <i className="ri-checkbox-multiple-line text-accent-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">5. Key Features</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {study.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-accent-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-accent-400 text-xs"></i>
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 6. System Workflow */}
            {study.workflow && study.workflow.length > 0 && (
              <motion.div
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center">
                    <i className="ri-flow-chart text-purple-400 text-base"></i>
                  </div>
                  <h2 className="font-heading font-bold text-white text-lg sm:text-xl">6. Operational Workflow</h2>
                </div>
                <div className="space-y-3">
                  {study.workflow.map((step, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="w-7 h-7 rounded-lg bg-accent-500/15 border border-accent-400/25 flex items-center justify-center text-accent-300 font-heading font-bold text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 7. Technology Stack */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary-500/15 flex items-center justify-center">
                  <i className="ri-stack-line text-primary-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">7. Technology Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {study.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white/80 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 8. Business Benefits */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center">
                  <i className="ri-bar-chart-box-line text-green-400 text-base"></i>
                </div>
                <h2 className="font-heading font-bold text-white text-lg sm:text-xl">8. Business Benefits</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {study.results.map((r, i) => (
                  <motion.div
                    key={r.label}
                    className="rounded-xl p-4 text-center bg-white/[0.03] border border-white/[0.06]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    <div className="text-lg sm:text-xl font-heading font-bold text-accent-400 mb-1">{r.value}</div>
                    <div className="text-white/55 text-xs">{r.label}</div>
                  </motion.div>
                ))}
              </div>

              {study.businessBenefits && study.businessBenefits.length > 0 && (
                <ul className="space-y-2.5">
                  {study.businessBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                      <i className="ri-checkbox-circle-fill text-green-400 text-base flex-shrink-0 mt-0.5"></i>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* 9. Project Visit Link */}
            {study.liveUrl && (
              <motion.div
                className="glass-card rounded-2xl p-6 sm:p-8 border border-accent-400/25 bg-gradient-to-r from-primary-500/10 via-dark-600 to-accent-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <span className="text-accent-400 text-xs uppercase tracking-wider font-bold block mb-1">
                    9. Live Deployment Link
                  </span>
                  <h3 className="font-heading font-bold text-white text-lg">Explore the Live Application</h3>
                  <p className="text-white/55 text-xs sm:text-sm mt-1 break-all">{study.liveUrl}</p>
                </div>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 text-dark-500 hover:bg-accent-400 font-bold text-xs sm:text-sm transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Visit Live Project</span>
                </a>
              </motion.div>
            )}

            {/* 10. Related Services */}
            {study.relatedServices && study.relatedServices.length > 0 && (
              <motion.div
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-accent-500/15 flex items-center justify-center">
                    <i className="ri-apps-2-line text-accent-400 text-base"></i>
                  </div>
                  <h2 className="font-heading font-bold text-white text-lg sm:text-xl">10. Related Software Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.relatedServices.map((srv) => (
                    <button
                      key={srv.slug}
                      type="button"
                      onClick={() => { navigate(`/services/${srv.slug}`); window.scrollTo(0, 0); }}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-accent-400/30 text-left transition-all duration-300 group cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-white/85 group-hover:text-accent-300 transition-colors">
                        {srv.name}
                      </span>
                      <i className="ri-arrow-right-up-line text-accent-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 11. Contact CTA */}
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10"></div>
              <div className="relative z-10">
                <span className="text-accent-400 text-xs font-bold uppercase tracking-wider block mb-2">
                  11. Start Your Project
                </span>
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                  Need a Similar Custom Software Solution?
                </h2>
                <p className="text-white/55 text-sm max-w-xl mx-auto mb-6">
                  Connect with AI Software Technology (A Brand of Digi India Solutions) to discuss your workflow, features, and deployment timeline.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="glass-btn-primary cursor-pointer"
                  >
                    <span>Request Free Consultation</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                  <a
                    href={`https://wa.me/919990390519?text=${encodeURIComponent(`Hello AI Software Technology,\n\nI reviewed the "${study.title}" case study and would like to discuss a similar software requirement for my business.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn cursor-pointer"
                  >
                    <i className="ri-whatsapp-line text-green-400 mr-2"></i>
                    <span>WhatsApp +91 9990390519</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Case Studies */}
        <section className="py-16 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-tag mx-auto">More Implementations</div>
              <h2 className="section-title text-white">Other Case Studies</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {caseStudies
                .filter((c) => c.slug !== study.slug)
                .slice(0, 3)
                .map((cs, i) => (
                  <motion.div
                    key={cs.id}
                    className="glass-card-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    onClick={() => { navigate(`/case-studies/${cs.slug}`); window.scrollTo(0, 0); }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/20 to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-dark-500/85 text-accent-400 text-[10px] font-bold">
                          {cs.industry}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="font-heading font-semibold text-white text-sm mb-2 group-hover:text-accent-300 transition-colors duration-300">
                        {cs.title}
                      </h4>
                      <p className="text-white/45 text-xs line-clamp-2 mb-4 flex-grow">{cs.overview}</p>
                      <span className="text-accent-400 text-xs font-semibold inline-flex items-center gap-1">
                        Read Case Study
                        <i className="ri-arrow-right-line"></i>
                      </span>
                    </div>
                  </motion.div>
                ))}
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