import { motion } from 'framer-motion';

const reasons = [
  {
    icon: 'ri-settings-4-line',
    title: 'Built Around Your Workflow',
    desc: 'We never force your business into rigid templates. Every ERP, CRM, HRMS, and custom software module is mapped to your real operational processes.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Secure & Scalable Architecture',
    desc: 'Role-based access controls, encrypted databases, complete audit logs, and cloud-ready architectures designed to scale as your team and branches grow.',
  },
  {
    icon: 'ri-plug-line',
    title: 'Seamless Integrations',
    desc: 'Connect your software directly with WhatsApp Business, payment gateways, biometric devices, GST billing, Tally, email, and third-party APIs.',
  },
  {
    icon: 'ri-Checkbox-circle-line',
    title: 'Transparent Milestone Delivery',
    desc: 'Structured requirement discovery, interactive UI/UX wireframes, sprint-wise demonstrations, and thorough QA testing before go-live.',
  },
  {
    icon: 'ri-team-line',
    title: 'Backed by Digi India Solutions',
    desc: 'As a dedicated software development brand of Digi India Solutions, we combine specialized software engineering with dependable long-term business support.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Training & Ongoing Support',
    desc: 'Complete staff training, admin documentation, smooth deployment, and responsive post-launch technical support to keep your operations running smoothly.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-600 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-500/3 blur-[150px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">
            <i className="ri-award-line"></i> Why AI Software Technology
          </div>
          <h2 className="section-title text-white mb-4">
            Why Businesses <span className="text-gradient">Build With Us</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Practical engineering, business-first design, and reliable execution — backed by Digi India Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="glass-card-hover rounded-2xl p-7 group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center mb-5 group-hover:border-accent-400/30 group-hover:shadow-[0_0_25px_rgba(0,194,255,0.2)] transition-all duration-300">
                <i className={`${item.icon} text-accent-400 text-xl`}></i>
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}