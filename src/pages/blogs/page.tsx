import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import { blogPosts, blogCategories } from '@/mocks/blog';
import { usePageSEO } from '@/hooks/usePageSEO';
import { isValidEmail, checkFormRateLimit } from '@/utils/security';

export default function Blogs() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  usePageSEO({
    title: 'Software, Web Development & Cloud Computing Blog | AI Software Technology',
    description:
      'Practical guides and B2B insights on Web Development, Cloud Computing, Custom Software, CRM, ERP, HRMS, SaaS architecture, and AI automation from AI Software Technology (A Brand of Digi India Solutions).',
    canonical: 'https://aisoftwaretechnology.in/blogs',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Software, Web Development & Cloud Computing Blog — AI Software Technology',
        description:
          'B2B software engineering, Web Development, Cloud Computing, ERP, CRM, HRMS, and AI automation guides published by AI Software Technology (A Brand of Digi India Solutions).',
        url: 'https://aisoftwaretechnology.in/blogs',
        isPartOf: { '@id': 'https://aisoftwaretechnology.in/#website' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: blogPosts.length,
          itemListElement: blogPosts.slice(0, 20).map((post, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: post.title,
            url: `https://aisoftwaretechnology.in/blogs/${post.slug}`,
          })),
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://aisoftwaretechnology.in/blogs' },
        ],
      },
    ],
  });

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const inTitle = p.title.toLowerCase().includes(query);
      const inExcerpt = p.excerpt.toLowerCase().includes(query);
      const inCategory = p.category.toLowerCase().includes(query);
      const inTags = p.tags.some((t) => t.toLowerCase().includes(query));
      const inKeyword = p.focusKeyword ? p.focusKeyword.toLowerCase().includes(query) : false;
      return inTitle || inExcerpt || inCategory || inTags || inKeyword;
    });
  }, [activeCategory, searchQuery]);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[360px] md:min-h-[420px] flex items-center overflow-hidden pt-14">
          <div className="absolute inset-0 aurora-bg opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/70 via-dark-500/40 to-dark-500"></div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <motion.div className="section-tag mb-5">Insights &amp; Articles</motion.div>
              <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                <span className="text-gradient">Software</span> &amp; Technology Insights
              </h1>
              <p className="text-white/45 text-base md:text-lg max-w-xl">
                Practical guides on Web Development, Cloud Computing, Custom Software, CRM, ERP, HRMS, SaaS, and AI Automation for growing businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <motion.div
                className="glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative w-full aspect-[3/2] bg-[#060D1A] overflow-hidden">
                  <img
                    src={featured[0].image}
                    alt={featured[0].imageAlt || featured[0].title}
                    title={featured[0].title}
                    loading="eager"
                    width="1200"
                    height="800"
                    onError={(e) => {
                      const fallback = `/images/blogs/${featured[0].slug}.svg`;
                      if (e.currentTarget.src !== window.location.origin + fallback) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-[10px] font-semibold uppercase tracking-wider">
                      {featured[0].category}
                    </span>
                    <span className="text-white/25 text-[10px]">{featured[0].readingTime}</span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {featured[0].title}
                  </h2>
                  <p className="text-white/35 text-sm leading-relaxed mb-5">{featured[0].excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                      {featured[0].author.avatar}
                    </div>
                    <div>
                      <p className="text-white text-xs font-medium">{featured[0].author.name}</p>
                      <p className="text-white/25 text-[10px]">{featured[0].date}</p>
                    </div>
                  </div>
                  <a
                    href={`/blogs/${featured[0].slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blogs/${featured[0].slug}`);
                    }}
                    className="mt-5 inline-flex items-center text-accent-400 text-xs font-semibold hover:text-accent-300 transition-colors cursor-pointer"
                  >
                    Read More
                    <i className="ri-arrow-right-line ml-1"></i>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Category Filter & Search */}
        <section className="pb-8">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <motion.div
                className="flex flex-wrap items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                        : 'bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.06] border border-white/[0.05]'
                    }`}
                  >
                    {cat === 'All' ? 'All Blogs' : cat}
                  </button>
                ))}
              </motion.div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 flex-shrink-0">
                <i className="ri-search-line absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 text-sm"></i>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, topics..."
                  aria-label="Search blog articles"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-accent-400/40 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-8 md:py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {filtered.length === 0 ? (
              <div className="glass-card rounded-2xl p-10 text-center">
                <p className="text-white/60 text-sm mb-4">
                  No blog articles matched your current filter or search query.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                  className="glass-btn text-xs cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    className="glass-card-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    onClick={() => navigate(`/blogs/${post.slug}`)}
                  >
                    <div>
                      <div className="relative aspect-[3/2] bg-[#060D1A] overflow-hidden border-b border-white/[0.05]">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          title={post.title}
                          loading="lazy"
                          decoding="async"
                          width="1200"
                          height="800"
                          onError={(e) => {
                            const fallback = `/images/blogs/${post.slug}.svg`;
                            if (e.currentTarget.src !== window.location.origin + fallback) {
                              e.currentTarget.src = fallback;
                            }
                          }}
                          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-dark-500/85 backdrop-blur border border-white/10 text-accent-400 text-[10px] font-semibold uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 pb-3">
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="text-white/35 text-[11px]">{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="text-white/35 text-[11px]">{post.readingTime}</span>
                        </div>
                        <h3 className="font-heading font-semibold text-white text-base leading-snug mb-2.5 group-hover:text-accent-300 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/45 text-xs leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-[9px] font-bold">
                          {post.author.avatar}
                        </div>
                        <span className="text-white/45 text-[11px] font-medium">{post.author.name}</span>
                      </div>
                      <span className="inline-flex items-center text-accent-400 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                        Read More <i className="ri-arrow-right-s-line ml-0.5"></i>
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-20 bg-dark-600">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <NewsletterSection />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}

function NewsletterSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('company_alt') as HTMLInputElement)?.value;
    if (honeypot?.trim()) {
      setStatus('success');
      return;
    }

    const emailInput = (form.elements.namedItem('email') as HTMLInputElement | null)?.value?.trim() || '';
    if (!isValidEmail(emailInput)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    const rateCheck = checkFormRateLimit('blogs-newsletter', 10000);
    if (!rateCheck.allowed) {
      setStatus('error');
      setErrorMsg(`Please wait ${rateCheck.retryAfterSec} seconds before trying again.`);
      return;
    }

    const fd = new FormData();
    fd.append('email', emailInput);
    try {
      const res = await fetch('https://readdy.ai/api/form/d9hski8h9dsfbuoi5jqg', {
        method: 'POST',
        body: fd,
        credentials: 'omit',
        referrerPolicy: 'strict-origin-when-cross-origin',
      });
      const text = await res.text();
      const data = JSON.parse(text);
      if (res.ok && data.code === 'OK') {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg('Unable to subscribe right now. Please try again later.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <motion.div
      className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-accent-500/8 blur-[80px]"></div>
      <div className="relative z-10 max-w-lg mx-auto">
        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/10 border border-primary-400/10 flex items-center justify-center mb-4">
          <i className="ri-mail-send-line text-xl text-accent-400"></i>
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
        <p className="text-white/40 text-sm mb-6">
          Get weekly insights on software engineering, AI trends, and digital strategy — no spam, ever.
        </p>

        {status === 'success' ? (
          <div className="glass-card rounded-xl p-4 border-green-500/20">
            <i className="ri-check-line text-green-400 text-xl mb-2"></i>
            <p className="text-green-400 text-sm font-medium">Thanks for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-readdy-form="newsletter">
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              maxLength={254}
              required
              className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent-500/30 focus:ring-1 focus:ring-accent-500/20"
            />
            <input
              type="text"
              name="company_alt"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              readOnly
              className="honeypot-field"
            />
            <button
              type="submit"
              className="glass-btn-primary cursor-pointer whitespace-nowrap"
            >
              Subscribe
              <i className="ri-arrow-right-line ml-1.5"></i>
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-red-400 text-xs mt-3">{errorMsg}</p>
        )}
      </div>
    </motion.div>
  );
}