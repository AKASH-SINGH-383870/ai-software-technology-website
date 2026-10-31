import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-dark-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-7 sm:p-10 md:p-16 lg:p-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-dark-400 to-accent-500/15"></div>
          <div className="absolute inset-0 border border-white/[0.08] rounded-2xl sm:rounded-3xl"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-500/15 blur-[120px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-500/15 blur-[120px]"></div>
          <div className="absolute inset-0 grid-bg opacity-30"></div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-medium text-white/70">Your Business. Our Technology. Let&apos;s Build Together.</span>
            </motion.div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Ready to Build Custom <span className="text-gradient">Software for Your Business?</span>
            </h2>

            <p className="text-sm sm:text-base text-white/45 mb-8 sm:mb-10 leading-relaxed">
              Speak directly with our software architects at AI Software Technology — A Brand of Digi India Solutions. Get a free consultation and tailored roadmap for your ERP, CRM, HRMS, SaaS, or mobile app project.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="glass-btn-primary text-sm !px-6 sm:!px-8 !py-3.5 sm:!py-4 cursor-pointer w-full sm:w-auto justify-center"
              >
                <i className="ri-calendar-check-line mr-2 text-base"></i>
                Get Free Consultation
              </button>
              <a
                href="tel:+919990390519"
                className="glass-btn text-sm !px-6 sm:!px-7 !py-3.5 sm:!py-4 cursor-pointer w-full sm:w-auto justify-center"
              >
                <i className="ri-phone-line mr-2 text-base text-accent-400"></i>
                Call +91 9990390519
              </a>
              <a
                href="https://wa.me/919990390519"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn text-sm !px-5 sm:!px-6 !py-3.5 sm:!py-4 !border-emerald-500/20 hover:!bg-emerald-500/10 cursor-pointer w-full sm:w-auto justify-center"
              >
                <i className="ri-whatsapp-line mr-2 text-base text-emerald-400"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}