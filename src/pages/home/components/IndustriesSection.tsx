import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const industries = [
  { icon: 'ri-heart-pulse-line', name: 'Healthcare', slug: '/industries/healthcare', desc: 'Hospital management, patient portals, OPD/IPD billing, and clinic software' },
  { icon: 'ri-graduation-cap-line', name: 'Education', slug: '/industries/education', desc: 'School ERP, LMS, coaching portals, attendance, and fee management' },
  { icon: 'ri-shopping-bag-3-line', name: 'Retail & E-Commerce', slug: '/industries/retail', desc: 'POS billing, inventory sync, multi-vendor stores, and B2B order portals' },
  { icon: 'ri-building-2-line', name: 'Real Estate', slug: '/industries/real-estate', desc: 'Property CRM, site-visit scheduling, broker portals, and lead tracking' },
  { icon: 'ri-hotel-line', name: 'Hospitality', slug: '/industries/hospitality', desc: 'Hotel PMS, room reservations, housekeeping, KOT, and restaurant POS' },
  { icon: 'ri-settings-3-line', name: 'Manufacturing', slug: '/industries/manufacturing', desc: 'Manufacturing ERP, BOM, dealer order booking, and factory attendance' },
  { icon: 'ri-bank-line', name: 'Finance & Billing', slug: '/industries/finance', desc: 'GST invoicing, ledger management, payment integration, and financial MIS' },
  { icon: 'ri-building-4-line', name: 'Construction', slug: '/industries/construction', desc: 'Site material tracking, contractor billing, workforce logs, and project ERP' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: 'easeOut' as const },
  }),
};

export default function IndustriesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-dark-500">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag mx-auto">Industries We Serve</div>
          <h2 className="section-title text-white mb-4">
            Software Solutions Across <span className="text-gradient">Industries</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tailored business software engineered around the operational workflows of your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Link
                to={ind.slug}
                className="glass-card-hover rounded-2xl p-5 md:p-6 text-center group cursor-pointer block h-full"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-500">
                  <i className={`${ind.icon} text-xl md:text-2xl text-accent-400`}></i>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1.5 group-hover:text-accent-300 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed hidden md:block">{ind.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}