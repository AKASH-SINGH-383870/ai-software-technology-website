import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    slug: 'custom-software',
    name: 'Custom Software Development',
    desc: 'Tailor-made business applications, internal workflow systems, admin dashboards, and automation engines built specifically around your operations.',
    icon: 'ri-code-s-slash-line',
    tags: ['Business Software', 'Workflows', 'APIs', 'Cloud'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'erp-solutions',
    name: 'ERP Software Development',
    desc: 'Centralized ERP systems for inventory, purchase, sales, GST invoicing, accounting, multi-branch operations, and management analytics.',
    icon: 'ri-building-2-line',
    tags: ['Inventory', 'GST Billing', 'Multi-Branch', 'Analytics'],
    span: '',
  },
  {
    slug: 'crm-solutions',
    name: 'CRM Software Development',
    desc: 'Complete sales & lead management CRM with Facebook/Google lead capture, WhatsApp & email integration, pipeline tracking, and quotations.',
    icon: 'ri-customer-service-2-line',
    tags: ['Lead Capture', 'WhatsApp CRM', 'Pipeline', 'Quotations'],
    span: '',
  },
  {
    slug: 'hrms-software',
    name: 'HRMS Software Development',
    desc: 'End-to-end HR & payroll management with employee records, biometric attendance, leave approvals, salary slip generation, PF/ESI, and self-service portals.',
    icon: 'ri-team-line',
    tags: ['Payroll & PF/ESI', 'Biometric Attendance', 'Leave Portal', 'HRMS'],
    span: 'lg:col-span-2',
  },
  {
    slug: 'saas-development',
    name: 'SaaS Application Development',
    desc: 'Scalable multi-tenant cloud SaaS platforms with subscription plans, payment gateway integration, role-based access, and customer dashboards.',
    icon: 'ri-cloud-windy-line',
    tags: ['Multi-Tenant', 'Subscriptions', 'RBAC', 'Cloud Native'],
    span: '',
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    desc: 'Native Android, iOS, and cross-platform Flutter & React Native mobile apps for customers, field sales teams, delivery staff, and executives.',
    icon: 'ri-smartphone-line',
    tags: ['Android', 'iOS', 'Flutter', 'React Native'],
    span: '',
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation Solutions',
    desc: 'Intelligent business process automation, AI chatbots, WhatsApp automation, document extraction, and predictive analytics integrated with your systems.',
    icon: 'ri-brain-line',
    tags: ['AI Chatbots', 'WhatsApp Bot', 'OCR', 'Workflow Automation'],
    span: '',
  },
  {
    slug: 'website-development',
    name: 'Website & Web App Development',
    desc: 'High-converting business websites, client portals, booking systems, and e-commerce platforms engineered for speed, SEO, and lead generation.',
    icon: 'ri-global-line',
    tags: ['React / Next.js', 'Web Portals', 'E-Commerce', 'SEO'],
    span: '',
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Deployment & Server Setup',
    desc: 'Cloud architecture, AWS/Azure/GCP deployment, CI/CD pipelines, automated backups, security hardening, and high-availability server setups.',
    icon: 'ri-cloud-line',
    tags: ['AWS', 'Azure', 'Docker', 'CI/CD'],
    span: '',
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    desc: 'User-centered interface design, interactive Figma prototypes, and scalable design systems for enterprise software, web dashboards, and mobile apps.',
    icon: 'ri-palette-line',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'UX Research'],
    span: '',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-dark-500 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary-500/4 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-500/4 blur-[130px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">
            <i className="ri-sparkling-line"></i> What We Build
          </div>
          <h2 className="section-title text-white mb-4">
            Software Solutions Built for <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From custom ERP, CRM, and HRMS platforms to SaaS products, mobile apps, and AI automation — we build software around your exact business workflows.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              onClick={() => navigate(`/services/${service.slug}`)}
              className={`glass-card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between group cursor-pointer ${service.span}`}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/15 flex items-center justify-center mb-5 group-hover:border-accent-400/30 group-hover:shadow-[0_0_25px_rgba(0,194,255,0.2)] transition-all duration-300">
                  <i className={`${service.icon} text-accent-400 text-xl`}></i>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2.5 group-hover:text-accent-300 transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed mb-5">
                  {service.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] text-white/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/30 group-hover:text-accent-400 group-hover:bg-accent-500/10 transition-all duration-300 flex-shrink-0 ml-3">
                  <i className="ri-arrow-right-up-line text-sm"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/services')}
            className="glass-btn cursor-pointer"
          >
            <span>Explore All 30+ Software Services</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}