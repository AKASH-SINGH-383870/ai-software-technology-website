import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import Breadcrumb from '@/components/feature/Breadcrumb';
import { blogPosts } from '@/mocks/blog';
import { usePageSEO } from '@/hooks/usePageSEO';
import {
  sanitizeExternalUrl,
  openExternalUrlSafely,
  isValidEmail,
  checkFormRateLimit,
} from '@/utils/security';

function renderInlineFormatting(text: string): React.ReactNode {
  // Parse markdown links [Label](/path) and bold **text**
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) {
        const [, label, href] = match;
        const safeHref = sanitizeExternalUrl(href);
        if (safeHref.startsWith('/') && !safeHref.startsWith('//')) {
          return (
            <Link
              key={idx}
              to={safeHref}
              className="text-accent-400 hover:text-accent-300 underline underline-offset-4 font-medium transition-colors"
            >
              {label}
            </Link>
          );
        }
        return (
          <a
            key={idx}
            href={safeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-400 hover:text-accent-300 underline underline-offset-4 font-medium transition-colors"
          >
            {label}
          </a>
        );
      }
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="text-white/90 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-accent-300 text-xs font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const resolvedTitle = post
    ? post.seoTitle || `${post.title} | AI Software Technology Blog`
    : 'Blog | AI Software Technology';
  const resolvedDescription =
    post?.metaDescription ||
    post?.excerpt ||
    'Practical insights on custom software development, Web Development, Cloud Computing, ERP, CRM, HRMS, SaaS, and AI automation from AI Software Technology (A Brand of Digi India Solutions).';

  usePageSEO({
    title: resolvedTitle,
    description: resolvedDescription,
    ogTitle: post?.seoTitle || post?.title || 'AI Software Technology Blog',
    ogDescription: resolvedDescription,
    ogImage: post?.image || 'https://i.ibb.co/GvYrMC4M/Chat-GPT-Image-Oct-30-2026-07-57-59-PM.png',
    ogImageAlt: post?.imageAlt || post?.title,
    ogType: 'article',
    canonical: post ? `https://aisoftwaretechnology.in/blogs/${post.slug}` : 'https://aisoftwaretechnology.in/blogs',
    noindex: !post,
    schema: post
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: resolvedDescription,
            author: { '@type': 'Organization', name: post.author.name },
            datePublished: post.date,
            dateModified: post.date,
            image: post.image.startsWith('/')
              ? `https://aisoftwaretechnology.in${post.image}`
              : post.image,
            mainEntityOfPage: `https://aisoftwaretechnology.in/blogs/${post.slug}`,
            publisher: {
              '@type': 'Organization',
              name: 'AI Software Technology',
              url: 'https://aisoftwaretechnology.in',
              logo: {
                '@type': 'ImageObject',
                url: 'https://i.ibb.co/GvYrMC4M/Chat-GPT-Image-Oct-30-2026-07-57-59-PM.png',
              },
              parentOrganization: {
                '@type': 'Organization',
                name: 'Digi India Solutions',
              },
            },
            url: `https://aisoftwaretechnology.in/blogs/${post.slug}`,
            keywords: [
              ...(post.focusKeyword ? [post.focusKeyword] : []),
              ...(post.secondaryKeywords || []),
              ...post.tags,
            ].join(', '),
          },
          ...(post.faqs && post.faqs.length > 0
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: post.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.a,
                    },
                  })),
                },
              ]
            : []),
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisoftwaretechnology.in/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://aisoftwaretechnology.in/blogs' },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `https://aisoftwaretechnology.in/blogs/${post.slug}`,
              },
            ],
          },
        ]
      : undefined,
  });

  useEffect(() => {
    if (!post) {
      navigate('/blogs');
    }
    window.scrollTo(0, 0);
    setOpenFaq(0);
  }, [post, navigate]);

  if (!post) return null;

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4);

  const tocItems = post.content
    .split('\n')
    .filter((line) => line.trim().startsWith('## '))
    .map((line) => line.replace('## ', '').trim());

  const defaultInternalLinks =
    post.category === 'Cloud Computing'
      ? [
          {
            label: 'Cloud Deployment & Server Setup',
            href: '/services/cloud-solutions',
            desc: 'AWS, Microsoft Azure & Google Cloud architecture, CI/CD, and server management.',
          },
          {
            label: 'SaaS Application Development',
            href: '/services/saas-development',
            desc: 'Multi-tenant cloud SaaS applications with subscription billing and elastic scaling.',
          },
          {
            label: 'Software Maintenance & Support',
            href: '/services/software-maintenance-support',
            desc: '24/7 monitoring, security patching, backup verification, and SLA support.',
          },
          {
            label: 'API Development & Integration',
            href: '/services/api-development-integration',
            desc: 'Secure REST/GraphQL APIs and cloud-to-ERP/CRM data synchronization.',
          },
        ]
      : post.category === 'Web Development'
      ? [
          {
            label: 'Website & Web Application Development',
            href: '/services/website-development',
            desc: 'High-performance corporate websites, Next.js platforms, and custom web portals.',
          },
          {
            label: 'Custom Software Development',
            href: '/services/custom-software',
            desc: 'Tailor-made enterprise software engineered around your business workflows.',
          },
          {
            label: 'UI/UX Design Services',
            href: '/services/ui-ux-design',
            desc: 'Conversion-focused wireframes, design systems, and accessible interfaces.',
          },
          {
            label: 'SEO & Digital Marketing Support',
            href: '/services/digital-marketing',
            desc: 'Technical SEO, Core Web Vitals optimization, AEO/GEO schema, and organic growth.',
          },
        ]
      : [
          {
            label: 'Custom Software Development',
            href: '/services/custom-software',
            desc: 'Tailored web, desktop, and enterprise workflow systems.',
          },
          {
            label: 'ERP Software Solutions',
            href: '/services/erp-solutions',
            desc: 'Inventory, billing, procurement, and multi-branch ERP systems.',
          },
          {
            label: 'CRM & Lead Management',
            href: '/services/crm-solutions',
            desc: 'Sales pipeline, follow-up reminders, and WhatsApp CRM automation.',
          },
          {
            label: 'Website & Web Application Development',
            href: '/services/website-development',
            desc: 'Modern responsive websites and custom business portals.',
          },
        ];

  const activeInternalLinks = post.internalLinks || defaultInternalLinks;

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    const links: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    if (links[platform]) {
      openExternalUrlSafely(links[platform]);
    }
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem('phone_alt') as HTMLInputElement)?.value;
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
    const rateCheck = checkFormRateLimit('blog-detail-newsletter', 10000);
    if (!rateCheck.allowed) {
      setStatus('error');
      setErrorMsg(`Please wait ${rateCheck.retryAfterSec}s before trying again.`);
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

  // Group content lines into blocks (including markdown tables)
  const renderArticleContent = () => {
    const rawLines = post.content.split('\n');
    const elements: React.ReactNode[] = [];
    let sectionIdx = 0;
    let i = 0;

    while (i < rawLines.length) {
      const trimmed = rawLines[i].trim();
      if (!trimmed) {
        i++;
        continue;
      }

      // Markdown Table Block
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const tableLines: string[] = [];
        while (i < rawLines.length && rawLines[i].trim().startsWith('|')) {
          tableLines.push(rawLines[i].trim());
          i++;
        }
        const parsedRows = tableLines
          .filter((row) => !row.match(/^\|[\s:-]+\|$/))
          .map((row) =>
            row
              .slice(1, -1)
              .split('|')
              .map((cell) => cell.trim())
          );

        if (parsedRows.length > 0) {
          const headerRow = parsedRows[0];
          const bodyRows = parsedRows.slice(1);
          elements.push(
            <div
              key={`table-${i}`}
              className="my-8 overflow-x-auto rounded-2xl border border-white/10 bg-[#071022]"
            >
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-500/20 to-accent-500/15 border-b border-white/10">
                    {headerRow.map((hCell, cIdx) => (
                      <th
                        key={cIdx}
                        className="px-4 py-3.5 font-heading text-xs font-bold text-white uppercase tracking-wider"
                      >
                        {renderInlineFormatting(hCell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {bodyRows.map((bRow, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      {bRow.map((bCell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3.5 text-xs sm:text-sm text-white/65 leading-relaxed">
                          {renderInlineFormatting(bCell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (trimmed.startsWith('## ')) {
        const currentSectionId = `section-${sectionIdx}`;
        sectionIdx++;
        elements.push(
          <h2
            key={`h2-${i}`}
            id={currentSectionId}
            className="scroll-mt-28 font-heading text-xl md:text-2xl font-bold text-white mt-10 mb-4 pt-2 border-t border-white/[0.05] first:border-t-0"
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="font-heading text-base md:text-lg font-semibold text-accent-300 mt-6 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith('- ') && trimmed.includes(':')) {
        const [label, ...rest] = trimmed.replace('- ', '').split(': ');
        const desc = rest.join(': ');
        elements.push(
          <div key={`li-colon-${i}`} className="flex gap-3 mb-3">
            <span className="w-5 h-5 rounded-md bg-accent-500/15 border border-accent-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-check-line text-accent-400 text-xs"></i>
            </span>
            <p className="text-white/60 text-sm leading-relaxed">
              <span className="text-white/90 font-semibold">{renderInlineFormatting(label)}:</span>{' '}
              {renderInlineFormatting(desc)}
            </p>
          </div>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith('- ')) {
        elements.push(
          <div key={`li-${i}`} className="flex gap-3 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
            <p className="text-white/60 text-sm leading-relaxed">
              {renderInlineFormatting(trimmed.replace('- ', ''))}
            </p>
          </div>
        );
        i++;
        continue;
      }

      if (trimmed.match(/^\d+\./)) {
        const numMatch = trimmed.match(/^(\d+)\.\s*(.*)$/);
        const stepNum = numMatch ? numMatch[1] : trimmed.charAt(0);
        const stepText = numMatch ? numMatch[2] : trimmed.replace(/^\d+\.\s*/, '');
        elements.push(
          <div key={`ol-${i}`} className="flex gap-3 mb-3">
            <span className="w-6 h-6 rounded-full bg-primary-500/20 border border-primary-400/30 flex items-center justify-center flex-shrink-0 text-[11px] text-accent-400 font-bold mt-0.5">
              {stepNum}
            </span>
            <p className="text-white/60 text-sm leading-relaxed">{renderInlineFormatting(stepText)}</p>
          </div>
        );
        i++;
        continue;
      }

      elements.push(
        <p key={`p-${i}`} className="text-white/55 text-sm md:text-[15px] leading-[1.85] mb-4">
          {renderInlineFormatting(trimmed)}
        </p>
      );
      i++;
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-16">
        <Breadcrumb />

        {/* Hero Section */}
        <section className="relative py-10 md:py-14 border-b border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-500/15 border border-accent-500/25 text-accent-400 text-xs font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-white/45 text-xs">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/25"></span>
                  <span className="text-white/45 text-xs">{post.readingTime}</span>
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.16] mb-5">
                  {post.title}
                </h1>

                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  {post.excerpt}
                </p>

                {/* Author & Share Bar */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                      {post.author.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{post.author.name}</p>
                      <p className="text-white/40 text-xs">{post.author.role} · AI Software Technology</p>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    {[
                      { icon: 'ri-twitter-x-fill', key: 'twitter', label: 'Share on X' },
                      { icon: 'ri-linkedin-fill', key: 'linkedin', label: 'Share on LinkedIn' },
                      { icon: 'ri-facebook-fill', key: 'facebook', label: 'Share on Facebook' },
                    ].map((s) => (
                      <button
                        key={s.key}
                        onClick={() => handleShare(s.key)}
                        aria-label={s.label}
                        className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/50 hover:text-accent-400 hover:border-accent-400/30 transition-all cursor-pointer"
                      >
                        <i className={`${s.icon} text-xs`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Featured 1200x800 Image */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.65)] bg-[#060D1A]">
                  <div className="relative w-full aspect-[3/2] bg-[#060D1A]">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      title={post.title}
                      loading="eager"
                      width="1200"
                      height="800"
                      onError={(e) => {
                        const fallback = `/images/blogs/${post.slug}.svg`;
                        if (e.currentTarget.src !== window.location.origin + fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Inline Table of Contents on Mobile / Tablet */}
              {tocItems.length > 0 && (
                <div className="lg:hidden glass-card rounded-2xl p-5 mb-8 border border-white/10">
                  <h2 className="font-heading font-semibold text-white text-sm mb-3 flex items-center gap-2">
                    <i className="ri-list-check text-accent-400"></i>
                    Table of Contents
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tocItems.map((item, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="text-white/55 text-xs hover:text-accent-400 transition-colors flex items-start gap-2"
                      >
                        <span className="text-accent-400 font-semibold">{i + 1}.</span>
                        <span>{item}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Body */}
              <article className="prose-content">{renderArticleContent()}</article>

              {/* Related Internal Services Block */}
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0B1733] to-[#081024] border border-accent-400/20">
                <div className="flex items-center gap-2.5 mb-2">
                  <i className="ri-links-line text-accent-400 text-lg"></i>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-white">
                    Explore Related AI Software Technology Services
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-white/50 mb-5">
                  Looking to implement the strategies covered in this guide? Explore our specialized engineering services:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeInternalLinks.map((srv) => (
                    <Link
                      key={srv.href}
                      to={srv.href}
                      className="glass-card rounded-xl p-4 border border-white/10 hover:border-accent-400/40 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-heading text-sm font-bold text-white group-hover:text-accent-400 transition-colors flex items-center justify-between gap-2 mb-1">
                          <span>{srv.label}</span>
                          <i className="ri-arrow-right-up-line text-accent-400"></i>
                        </div>
                        <p className="text-xs text-white/45 leading-relaxed">{srv.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Structured FAQ Accordion (when post.faqs is present) */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12">
                  <div className="section-tag mb-3">
                    <i className="ri-question-answer-line"></i> Frequently Asked Questions
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-white mb-6">
                    Common Questions About <span className="text-gradient">{post.focusKeyword || post.title}</span>
                  </h2>
                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => (
                      <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/[0.07]">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                        >
                          <span className="font-heading text-sm md:text-base font-semibold text-white/90 group-hover:text-white pr-4">
                            {faq.q}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              openFaq === idx ? 'bg-accent-500/15 text-accent-400 rotate-180' : 'text-white/40'
                            }`}
                          >
                            <i className="ri-arrow-down-s-line text-lg"></i>
                          </div>
                        </button>
                        <AnimatePresence>
                          {openFaq === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-3 text-sm text-white/55 leading-relaxed border-t border-white/[0.05]">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/[0.06]">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/45 text-[11px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Sticky TOC */}
              {tocItems.length > 0 && (
                <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
                  <h4 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                    <i className="ri-list-check text-accent-400"></i>
                    Table of Contents
                  </h4>
                  <div className="space-y-2.5">
                    {tocItems.map((item, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="block text-white/50 text-xs hover:text-accent-400 transition-colors pl-3 border-l-2 border-white/[0.08] hover:border-accent-400 leading-snug"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services Sidebar */}
              <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
                <h4 className="font-heading font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <i className="ri-stack-line text-accent-400"></i>
                  Related Services
                </h4>
                <div className="space-y-2 text-xs">
                  {activeInternalLinks.map((srv) => (
                    <Link
                      key={srv.href}
                      to={srv.href}
                      className="flex items-center justify-between py-2 text-white/65 hover:text-accent-400 transition-colors border-b border-white/[0.05] last:border-0"
                    >
                      <span>{srv.label}</span>
                      <i className="ri-arrow-right-s-line text-accent-400"></i>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              {related.length > 0 && (
                <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
                  <h4 className="font-heading font-semibold text-white text-sm mb-4 flex items-center gap-2">
                    <i className="ri-article-line text-accent-400"></i>
                    Related {post.category} Articles
                  </h4>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <button
                        key={r.slug}
                        onClick={() => navigate(`/blogs/${r.slug}`)}
                        className="flex gap-3 text-left group cursor-pointer w-full"
                      >
                        <img
                          src={r.image}
                          alt={r.imageAlt || r.title}
                          title={r.title}
                          loading="lazy"
                          width="90"
                          height="60"
                          onError={(e) => {
                            const fallback = `/images/blogs/${r.slug}.svg`;
                            if (e.currentTarget.src !== window.location.origin + fallback) {
                              e.currentTarget.src = fallback;
                            }
                          }}
                          className="w-20 h-14 rounded-lg object-cover flex-shrink-0 border border-white/10"
                        />
                        <div className="min-w-0">
                          <p className="text-white text-xs font-medium group-hover:text-accent-400 transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </p>
                          <p className="text-white/30 text-[10px] mt-1">{r.readingTime}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Consultation Card */}
              <div className="glass-card rounded-2xl p-5 border border-accent-400/20 bg-gradient-to-b from-primary-500/10 to-transparent">
                <h4 className="font-heading font-semibold text-white text-sm mb-2">
                  Need Expert Implementation?
                </h4>
                <p className="text-white/45 text-xs leading-relaxed mb-4">
                  Speak directly with AI Software Technology (A Brand of Digi India Solutions) for a free technical consultation and custom estimate.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/919990390519?text=${encodeURIComponent(
                      `Hello AI Software Technology, I just read your article "${post.title}" and would like to discuss a project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full glass-btn-primary justify-center !py-2.5 !text-xs flex items-center gap-1.5"
                  >
                    <i className="ri-whatsapp-line text-sm"></i>
                    WhatsApp +91 9990390519
                  </a>
                  <Link
                    to="/contact"
                    className="w-full glass-btn justify-center !py-2.5 !text-xs flex items-center gap-1.5"
                  >
                    <i className="ri-mail-send-line text-accent-400"></i>
                    Request Free Proposal
                  </Link>
                </div>
              </div>

              {/* Newsletter Mini */}
              <div className="glass-card rounded-2xl p-5 border border-white/[0.08]">
                <h4 className="font-heading font-semibold text-white text-sm mb-2">Newsletter</h4>
                <p className="text-white/35 text-xs mb-4">Weekly insights on web, cloud, AI, and enterprise software.</p>
                {status === 'success' ? (
                  <div className="text-green-400 text-xs">Subscribed! ✓</div>
                ) : (
                  <form onSubmit={handleSubscribe} data-readdy-form="newsletter">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      maxLength={254}
                      required
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 mb-2 focus:outline-none focus:border-accent-500/30"
                    />
                    <input
                      type="text"
                      name="phone_alt"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                      className="honeypot-field"
                    />
                    <button type="submit" className="w-full glass-btn-primary !py-2 !text-xs cursor-pointer justify-center">
                      Subscribe
                    </button>
                  </form>
                )}
                {status === 'error' && <p className="text-red-400 text-[10px] mt-1">{errorMsg}</p>}
              </div>
            </motion.aside>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <section className="py-16 bg-dark-600 border-t border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <motion.div
              className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary-500/10 blur-[90px]"></div>
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="section-tag mx-auto mb-4">
                  <i className="ri-rocket-2-line"></i> Free Architecture &amp; Scope Consultation
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Build or Modernize Your <span className="text-gradient">Business Technology</span>?
                </h2>
                <p className="text-white/50 text-sm md:text-base mb-8">
                  Partner with AI Software Technology (A Brand of Digi India Solutions) for custom Web Applications, Cloud Deployment, SaaS, ERP, CRM, and HRMS systems.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contact" className="glass-btn-primary cursor-pointer inline-flex items-center">
                    Get Free Consultation
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                  <a
                    href="https://wa.me/919990390519"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn cursor-pointer inline-flex items-center"
                  >
                    <i className="ri-whatsapp-line text-emerald-400 mr-2"></i>
                    WhatsApp +91 9990390519
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