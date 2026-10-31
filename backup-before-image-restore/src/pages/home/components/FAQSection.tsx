import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What software solutions does AI Software Technology build?',
    a: 'AI Software Technology, a brand of Digi India Solutions, specializes in custom software development including ERP software, CRM systems, HRMS & payroll software, multi-tenant SaaS applications, mobile apps (Android, iOS, Flutter, React Native), AI workflow automation, business websites, and industry-specific management software for hospitals, schools, real estate, hotels, retail, manufacturing, and service businesses.',
  },
  {
    q: 'What is the relationship between AI Software Technology and Digi India Solutions?',
    a: 'AI Software Technology is the dedicated custom software development and business technology brand of Digi India Solutions. Clients benefit from focused software engineering expertise backed by the established infrastructure and client support of Digi India Solutions.',
  },
  {
    q: 'Can you customize ERP, CRM, or HRMS software around our exact business process?',
    a: 'Yes. Unlike rigid off-the-shelf software that forces you to change how you work, we design custom modules, approval hierarchies, role-based dashboards, GST billing formats, and reporting workflows tailored specifically to your organization.',
  },
  {
    q: 'Can your software integrate with WhatsApp, payment gateways, biometric devices, and Tally?',
    a: 'Absolutely. We integrate software systems with WhatsApp Business APIs, Facebook & Google Lead Ads, Razorpay/Stripe/PayU payment gateways, biometric attendance machines, barcode scanners, Tally/accounting tools, and custom third-party REST APIs.',
  },
  {
    q: 'How does your software development process work?',
    a: 'We follow a structured 5-stage approach: (1) Understand the Business Process, (2) Plan the Right System Architecture, (3) Design Clean and Easy-to-Use Interfaces, (4) Develop Secure, Scalable Software, and (5) Provide Testing, Deployment, Training, and Support.',
  },
  {
    q: 'Do we get source code ownership and post-launch technical support?',
    a: 'Yes. For custom software projects, we provide structured documentation, user training for your team, smooth cloud or server deployment, and ongoing maintenance and technical support packages.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-dark-500 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">
            <i className="ri-question-line"></i> FAQ
          </div>
          <h2 className="section-title text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about building custom software with AI Software Technology.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
              >
                <span className="font-heading text-sm md:text-base font-semibold text-white/90 group-hover:text-white pr-4 transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-accent-500/15 text-accent-400 rotate-180' : 'text-white/40'}`}>
                  <i className="ri-arrow-down-s-line text-lg"></i>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-white/45 leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}