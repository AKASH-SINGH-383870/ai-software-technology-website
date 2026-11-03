import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Interactive3DBackground from '@/components/feature/Interactive3DBackground';

const heroStats = [
  { value: '22+', label: 'Core Software Suites', icon: 'ri-apps-2-line' },
  { value: 'ERP • CRM', label: 'HRMS & SaaS', icon: 'ri-building-2-line' },
  { value: '100%', label: 'Custom Workflows', icon: 'ri-settings-4-line' },
  { value: '24/7', label: 'Dedicated Support', icon: 'ri-customer-service-2-line' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://readdy.ai/api/search-image?query=Abstract%20dark%20futuristic%20digital%20network%20with%20glowing%20blue%20and%20cyan%20light%20streams%20flowing%20through%20geometric%20nodes%20in%20deep%20navy%20space%2C%20minimal%20clean%20tech%20background%20with%20depth%20of%20field%20bokeh%20particles%2C%20cinematic%20lighting&width=1920&height=1080&seq=hero-poster-1&orientation=landscape"
          className="w-full h-full object-cover opacity-25"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500/80 via-dark-500/55 to-dark-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-500/85 via-transparent to-dark-500/85"></div>
      </div>

      {/* Interactive 3D Particle & Geometric Wireframe Canvas */}
      <Interactive3DBackground variant="hero" />

      {/* Aurora Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] rounded-full bg-primary-500/10 blur-[140px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] rounded-full bg-accent-500/8 blur-[130px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-20 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-medium text-white/75 tracking-wide">
              AI Software Technology — A Brand of Digi India Solutions
            </span>
            <i className="ri-arrow-right-s-line text-accent-400 text-sm"></i>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-4 sm:mb-5"
          >
            <span className="text-white">Custom Software Built </span>
            <span className="text-gradient">Around Your Business.</span>
          </motion.h1>

          {/* Supporting Headline */}
          <motion.p
            variants={itemVariants}
            className="font-heading text-base sm:text-lg md:text-2xl font-semibold text-accent-400/90 max-w-3xl mx-auto mb-4 leading-snug px-2"
          >
            Transform Your Business with Smart, Scalable Digital Solutions.
          </motion.p>

          {/* Hero Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-3 leading-relaxed font-body px-2"
          >
            AI Software Technology develops customized ERP, CRM, HRMS, SaaS platforms, mobile applications and business management software designed to simplify operations, improve productivity and support business growth.
          </motion.p>

          {/* Primary Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-white/35 uppercase tracking-[0.18em] font-medium mb-8 sm:mb-10"
          >
            Your Business. Our Technology. Let&apos;s Build Together.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
            <button
              onClick={() => navigate('/contact')}
              className="glass-btn-primary text-sm !px-6 sm:!px-8 !py-3.5 sm:!py-4 cursor-pointer w-full sm:w-auto justify-center"
            >
              <i className="ri-rocket-2-line mr-2 text-base"></i>
              Get Free Consultation
            </button>
            <button
              onClick={() => navigate('/services')}
              className="glass-btn text-sm !px-6 sm:!px-7 !py-3.5 sm:!py-4 cursor-pointer w-full sm:w-auto justify-center"
            >
              <i className="ri-apps-2-line mr-2 text-base text-accent-400"></i>
              Explore Our Services
            </button>
            <a
              href="https://wa.me/919990390519"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn text-sm !px-5 sm:!px-6 !py-3.5 sm:!py-4 !border-emerald-500/20 hover:!bg-emerald-500/10 cursor-pointer w-full sm:w-auto justify-center"
            >
              <i className="ri-whatsapp-line mr-2 text-base text-emerald-400"></i>
              {t('cta.whatsapp')}
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto"
          >
            {heroStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center group hover:border-accent-400/20 transition-all duration-500"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
              >
                <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.2)] transition-all duration-300">
                  <i className={`${stat.icon} text-accent-400 text-sm sm:text-base`}></i>
                </div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent z-10"></div>
    </section>
  );
}