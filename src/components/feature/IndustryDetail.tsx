import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ScrollToTop from './ScrollToTop';
import Breadcrumb from './Breadcrumb';
import { usePageSEO } from '@/hooks/usePageSEO';

export interface IndustryData {
  slug: string;
  title: string;
  icon: string;
  heroImage: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
  };
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  modules: string[];
  benefits: { value: string; label: string }[];
  caseStudies: { title: string; desc: string; image: string }[];
}

interface Props {
  data: IndustryData;
}

export default function IndustryDetail({ data }: Props) {
  const navigate = useNavigate();

  usePageSEO({
    title: data ? data.meta.title : 'Industry Solutions | AI Software Technology',
    description: data
      ? `${data.meta.description} Call +91 9990390519.`
      : 'Industry-specific IT and custom software solutions by AI Software Technology — A Brand of Digi India Solutions.',
    keywords: data ? data.meta.keywords : 'industry software solutions, AI Software Technology',
    canonical: data ? data.meta.canonicalUrl : 'https://aisoftwaretechnology.in/industries',
  });

  if (!data) {
    return (
      <div className="min-h-screen bg-dark-500 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Industry Not Found</h2>
          <button onClick={() => navigate('/industries')} className="glass-btn-primary cursor-pointer">
            View All Industries
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />
      <Breadcrumb />

      <main>
        {/* Hero */}
        <section className="relative min-h-[380px] md:min-h-[480px] flex items-center overflow-hidden pt-4">
          <div className="absolute inset-0">
            <img
              src={data.heroImage}
              alt={`${data.title} Software Solutions — AI Software Technology`}
              title={data.title}
              loading="eager"
              width="1200"
              height="500"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-500 via-dark-500/90 to-dark-500/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-dark-500/40"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full py-12">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag mb-4 flex items-center gap-2">
                <i className={data.icon}></i>
                {data.title} Solutions
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Custom {data.title} <span className="text-gradient">Software Solutions</span>
              </h1>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-8">
                {data.meta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/contact');
                  }}
                  className="glass-btn-primary cursor-pointer"
                >
                  Discuss Your {data.title} Project
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
                <a
                  href="https://wa.me/919990390519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn cursor-pointer"
                >
                  <i className="ri-whatsapp-line mr-2 text-emerald-400"></i>
                  Quick Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits / Stats */}
        <section className="py-10 bg-dark-600 border-y border-white/[0.03]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.benefits.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/30 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="py-14 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto">Challenges</div>
              <h2 className="section-title text-white">
                {data.title} <span className="text-gradient">Pain Points</span> We Solve
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="glass-card-hover rounded-2xl p-5 sm:p-6"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center mb-4">
                    <i className="ri-error-warning-line text-red-400"></i>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2">{c.title}</h3>
                  <p className="text-white/35 text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-14 md:py-24 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto">Solutions</div>
              <h2 className="section-title text-white">
                Our {data.title} <span className="text-gradient">Software Suite</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="glass-card-hover rounded-2xl p-5 sm:p-6"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-4">
                    <i className={`${data.icon} text-accent-400 text-lg`}></i>
                  </div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-2">{s.title}</h4>
                  <p className="text-white/35 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-tag mx-auto">Modules</div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-8">
                Core {data.title} Modules We Deliver
              </h3>
              <div className="flex flex-wrap justify-center gap-2.5">
                {data.modules.map((m) => (
                  <span
                    key={m}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white/50 text-xs font-medium hover:border-accent-400/20 hover:text-accent-400 transition-all"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Highlight */}
        {data.caseStudies && data.caseStudies.length > 0 && (
          <section className="py-14 md:py-24 bg-dark-600">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
              {data.caseStudies.map((cs) => (
                <motion.div
                  key={cs.title}
                  className="glass-card rounded-2xl p-6 sm:p-8 md:p-12 border-l-2 border-l-accent-500/40"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="section-tag mb-4">Success Story</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-2xl">{cs.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/case-studies"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/case-studies');
                      }}
                      className="glass-btn-primary !text-xs cursor-pointer"
                    >
                      View Case Studies <i className="ri-arrow-right-line ml-1.5"></i>
                    </a>
                    <a
                      href="/portfolio"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/portfolio');
                      }}
                      className="glass-btn !text-xs cursor-pointer"
                    >
                      See Portfolio
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-14 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
            <motion.div
              className="glass-card rounded-2xl p-6 sm:p-8 md:p-14 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-accent-500/8 blur-[100px]"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
                  Ready to Transform Your {data.title} Business?
                </h3>
                <p className="text-white/40 text-sm max-w-lg mx-auto mb-8">
                  Get a free consultation with our {data.title.toLowerCase()} software specialists at AI Software Technology. No commitment, just actionable insights.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate('/contact');
                    }}
                    className="glass-btn-primary cursor-pointer"
                  >
                    Get Free {data.title} Consultation <i className="ri-arrow-right-line ml-2"></i>
                  </a>
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