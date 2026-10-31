import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioProjectsA } from '@/mocks/portfolio';

const featuredProjects = portfolioProjectsA.slice(0, 6);

export default function PortfolioPreview() {
  const navigate = useNavigate();

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-dark-500 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/4 blur-[150px]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 md:mb-16 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="section-tag">
              <i className="ri-stack-line"></i> Featured Work
            </div>
            <h2 className="section-title text-white">
              Projects That <span className="text-gradient">Deliver Results</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/portfolio')}
            className="glass-btn self-start md:self-auto cursor-pointer text-xs sm:text-sm"
          >
            <span>View All Projects</span>
            <i className="ri-arrow-right-up-line ml-1.5"></i>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((project, i) => {
            const caseStudyTarget = project.caseStudyUrl || `/portfolio/${project.slug}`;
            return (
              <motion.div
                key={project.id}
                onClick={() => navigate(caseStudyTarget)}
                className="glass-card-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/20 to-transparent"></div>
                  <div className="absolute top-3.5 left-3.5 right-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-dark-500/85 backdrop-blur-md border border-white/[0.08] text-[11px] text-accent-400 font-medium truncate max-w-full">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${project.name}`}
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-lg bg-dark-500/85 backdrop-blur-md border border-white/[0.08] flex items-center justify-center text-white/60 hover:text-accent-400 transition-colors"
                  >
                    <i className="ri-external-link-line text-sm"></i>
                  </a>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[10px] text-white/45 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.06]">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-white/85 hover:text-white text-xs font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-external-link-line text-accent-400 text-xs"></i>
                      <span>Visit</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(caseStudyTarget);
                      }}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-accent-500/15 hover:bg-accent-500/25 border border-accent-400/25 text-accent-300 hover:text-white text-xs font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-article-line text-xs"></i>
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}