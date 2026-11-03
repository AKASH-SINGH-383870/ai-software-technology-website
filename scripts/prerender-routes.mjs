import fs from 'node:fs';
import path from 'node:path';
import { servicesData } from '../src/mocks/services.ts';
import { portfolioProjectsA } from '../src/mocks/portfolio.ts';
import { portfolioProjectsB } from '../src/mocks/portfolioExtended.ts';
import { portfolioProjectsC } from '../src/mocks/portfolioNew.ts';
import { caseStudies } from '../src/mocks/caseStudies.ts';
import { blogPosts } from '../src/mocks/blog.ts';
import { industriesData } from '../src/mocks/industryDetails.ts';

const SITE_URL = 'https://aisoftwaretechnology.in';
const DEFAULT_OG_IMAGE = 'https://i.ibb.co/GvYrMC4M/Chat-GPT-Image-Oct-30-2026-07-57-59-PM.png';
const allPortfolio = [...portfolioProjectsA, ...portfolioProjectsB, ...portfolioProjectsC];

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function resolveImageUrl(img = DEFAULT_OG_IMAGE) {
  if (!img) return DEFAULT_OG_IMAGE;
  return img.startsWith('/') ? `${SITE_URL}${img}` : img;
}

const providerEntity = {
  '@type': 'ProfessionalService',
  name: 'AI Software Technology',
  alternateName: 'AI Software Technology — A Brand of Digi India Solutions',
  url: SITE_URL,
  telephone: '+91-9990390519',
  email: 'aisoftwaretechnology2026@gmail.com',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Digi India Solutions',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'House No. 158-159, Pocket-10, Sector-24, Rohini',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
};

function makeBreadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Build complete inventory of 164 canonical routes
const staticRouteSpecs = [
  {
    routePath: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'AI Software Technology | Custom Software Development Company in Delhi, India',
    description:
      'AI Software Technology, a brand of Digi India Solutions in New Delhi, builds custom ERP, CRM, HRMS, SaaS platforms, mobile apps, and AI automation software. Call +91 9990390519.',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'AI Software Technology — A Brand of Digi India Solutions',
    h1: 'AI Software Technology — Custom Software Development Company in Delhi, India',
    intro:
      'AI Software Technology (A Brand of Digi India Solutions) engineers custom business software, ERP systems, CRM platforms, HRMS & payroll software, SaaS applications, mobile apps, web applications, and AI workflow automation tailored to real business operations.',
    sections: [
      {
        heading: 'Core Custom Software & Enterprise Solutions',
        items: servicesData.slice(0, 12).map((s) => `${s.name}: ${s.tagline}`),
      },
      {
        heading: 'Industries We Serve Across India & Worldwide',
        items: [
          'Healthcare & Multi-Clinic Hospital Management Software',
          'Manufacturing ERP, BOM, Procurement & Shop-Floor Tracking',
          'Education, School, Coaching & LMS Software',
          'Real Estate CRM, Property & Channel Partner Portals',
          'Retail POS, Multi-Store Billing & Inventory Control',
          'Finance, Hospitality & Construction Project Management Systems',
        ],
      },
    ],
    links: [
      { label: 'Explore All 25 Software Services', href: '/services' },
      { label: 'View 42+ Portfolio Projects', href: '/portfolio' },
      { label: 'Read Engineering Case Studies', href: '/case-studies' },
      { label: 'Browse 63+ B2B Technology Blog Guides', href: '/blogs' },
      { label: 'Estimate Project Cost Calculator', href: '/calculators' },
      { label: 'Contact AI Software Technology (+91 9990390519)', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        name: 'AI Software Technology | Custom Software Development Company in Delhi, India',
        description:
          'Custom software development brand of Digi India Solutions delivering ERP, CRM, HRMS, SaaS, mobile applications, order management, factory attendance, and AI workflow automation.',
        url: `${SITE_URL}/`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What software solutions does AI Software Technology develop?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI Software Technology, a brand of Digi India Solutions, develops custom business software including ERP systems, CRM platforms, HRMS and payroll software, SaaS applications, mobile apps, order management software, factory attendance systems, and AI workflow automation.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the relationship between AI Software Technology and Digi India Solutions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI Software Technology operates as the dedicated custom software development and business technology solutions brand of Digi India Solutions, headquartered at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, India.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you customize ERP, CRM, or HRMS software around our existing business workflows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every ERP, CRM, HRMS, and operational management system we engineer is tailored around your exact user roles, approval hierarchies, billing rules, and departmental handoffs.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact AI Software Technology for a project consultation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can call or WhatsApp +91 9990390519, email aisoftwaretechnology2026@gmail.com, or submit your project details through our Contact or Cost Estimator pages.',
            },
          },
        ],
      },
    ],
  },
  {
    routePath: '/about',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'About AI Software Technology | Custom Software Development Brand of Digi India Solutions',
    description:
      'AI Software Technology is a specialized software development brand of Digi India Solutions, created to help businesses replace manual operations and disconnected tools with powerful, easy-to-use digital systems including ERP, CRM, HRMS, SaaS and AI automation.',
    ogType: 'website',
    h1: 'About AI Software Technology — A Brand of Digi India Solutions',
    intro:
      'AI Software Technology is the specialized custom software engineering brand of Digi India Solutions in Rohini, New Delhi, focused on helping growing companies replace manual spreadsheets with scalable ERP, CRM, HRMS, SaaS, mobile, and AI-enabled systems.',
    sections: [
      {
        heading: 'Our Engineering Philosophy & Brand Relationship',
        items: [
          'Dedicated software division of Digi India Solutions',
          '100% custom workflow architecture tailored around real business teams',
          'Full-lifecycle delivery from requirement discovery and UI/UX to cloud deployment and SLA support',
        ],
      },
    ],
    links: [
      { label: 'Our Journey & Milestones', href: '/our-journey' },
      { label: 'All Software Development Services', href: '/services' },
      { label: 'Software Portfolio', href: '/portfolio' },
      { label: 'Contact Our Team', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About AI Software Technology — A Brand of Digi India Solutions',
        description:
          'AI Software Technology is the custom software development and business technology brand of Digi India Solutions in New Delhi, India.',
        url: `${SITE_URL}/about`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'About Us', url: `${SITE_URL}/about` },
      ]),
    ],
  },
  {
    routePath: '/contact',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Contact AI Software Technology | Book Free Software Demo | +91 9990390519',
    description:
      'Contact AI Software Technology (A Brand of Digi India Solutions) at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085. Call or WhatsApp +91 9990390519 or email aisoftwaretechnology2026@gmail.com for Custom Software, ERP, CRM, HRMS, SaaS, Mobile Apps, and AI Automation.',
    ogType: 'website',
    h1: 'Contact AI Software Technology — Request a Free Software Consultation',
    intro:
      'Connect with our software architects at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085. Call or WhatsApp +91 9990390519 or email aisoftwaretechnology2026@gmail.com.',
    sections: [
      {
        heading: 'Official Contact Details',
        items: [
          'Brand: AI Software Technology (A Brand of Digi India Solutions)',
          'Address: House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, Delhi – 110085, India',
          'Phone & WhatsApp: +91 9990390519',
          'Official Email: aisoftwaretechnology2026@gmail.com',
          'Working Hours: Monday to Saturday, 9:00 AM – 7:00 PM IST',
        ],
      },
    ],
    links: [
      { label: 'Explore Software Services', href: '/services' },
      { label: 'Estimate Project Cost', href: '/calculators' },
      { label: 'View Live Case Studies', href: '/case-studies' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact AI Software Technology — A Brand of Digi India Solutions',
        description:
          'Get in touch with AI Software Technology at House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi – 110085. Call or WhatsApp +91 9990390519 or email aisoftwaretechnology2026@gmail.com.',
        url: `${SITE_URL}/contact`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#localbusiness` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Contact Us', url: `${SITE_URL}/contact` },
      ]),
    ],
  },
  {
    routePath: '/sitemap',
    priority: '0.6',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'HTML Sitemap | Complete Directory of Pages — AI Software Technology',
    description:
      'Browse all 164+ public pages on AI Software Technology (A Brand of Digi India Solutions) — including 25 software services, 42 portfolio projects, 9 case studies, 8 industry verticals, and 63 B2B technology guides.',
    ogType: 'website',
    h1: 'Website Sitemap — Complete Directory of Public Pages',
    intro:
      'Complete HTML directory of all 164 canonical pages on AI Software Technology (A Brand of Digi India Solutions), covering core pages, 25 software services, 42 portfolio projects, 9 case studies, 8 industries, 3 comparisons, and 63 blog articles.',
    sections: [
      {
        heading: 'All 25 Software Services',
        items: servicesData.map((s) => `${s.name} (/services/${s.slug})`),
      },
    ],
    links: [
      ...servicesData.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
      ...caseStudies.map((c) => ({ label: `Case Study: ${c.title}`, href: `/case-studies/${c.slug}` })),
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'HTML Sitemap - AI Software Technology',
        description:
          'Complete HTML sitemap of AI Software Technology (A Brand of Digi India Solutions). Browse all custom software services, ERP, CRM, HRMS, SaaS, industries, portfolio projects, case studies, and blog articles.',
        url: `${SITE_URL}/sitemap`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'HTML Sitemap', url: `${SITE_URL}/sitemap` },
      ]),
    ],
  },
  {
    routePath: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'Custom Software Development Services | ERP, CRM, HRMS, SaaS & Mobile Apps | AI Software Technology',
    description:
      'Explore 25+ custom software development services by AI Software Technology — A Brand of Digi India Solutions. Custom ERP, CRM, HRMS, SaaS applications, mobile apps, industry-specific software, and AI automation. Call +91 9990390519.',
    ogType: 'website',
    h1: 'Custom Software & Business Technology Services',
    intro:
      'We design and develop modern, scalable software tailored to your exact workflows — from ERP, CRM, HRMS, and SaaS platforms to industry-specific management systems, cloud deployment, and AI automation.',
    sections: [
      {
        heading: 'All 25 Software Engineering Services',
        items: servicesData.map((s) => `${s.name}: ${s.heroDesc}`),
      },
    ],
    links: servicesData.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Custom Software Development Services — AI Software Technology',
        description:
          'Complete catalog of 25 custom software development, ERP, CRM, HRMS, SaaS, mobile app, web development, cloud deployment, and AI automation services by AI Software Technology (A Brand of Digi India Solutions).',
        url: `${SITE_URL}/services`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: servicesData.length,
          itemListElement: servicesData.map((srv, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: srv.name,
            url: `${SITE_URL}/services/${srv.slug}`,
          })),
        },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Services', url: `${SITE_URL}/services` },
      ]),
    ],
  },
  {
    routePath: '/portfolio',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'Software & Web Portfolio | AI Software Technology — A Brand of Digi India Solutions',
    description:
      'Explore AI Software Technology portfolio of 42+ delivered projects across custom ERP systems, order management software, multi-portal web platforms, factory attendance & HRMS portals, CRM platforms, SaaS applications, mobile apps, and business web solutions.',
    ogType: 'website',
    h1: 'Software & Web Development Portfolio',
    intro:
      'Explore 42+ software platforms, enterprise portals, order management systems, workforce attendance dashboards, and digital products engineered by AI Software Technology (A Brand of Digi India Solutions).',
    sections: [
      {
        heading: 'Featured Live Systems & Portfolio Projects',
        items: allPortfolio.slice(0, 15).map((p) => `${p.name} (${p.category}): ${p.description}`),
      },
    ],
    links: allPortfolio.map((p) => ({ label: `${p.name} (${p.category})`, href: `/portfolio/${p.slug}` })),
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Software & Web Portfolio — AI Software Technology',
        description:
          'Explore 42+ software and web development portfolio projects delivered by AI Software Technology (A Brand of Digi India Solutions).',
        url: `${SITE_URL}/portfolio`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: allPortfolio.length,
          itemListElement: allPortfolio.slice(0, 15).map((proj, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: proj.name,
            url: `${SITE_URL}/portfolio/${proj.slug}`,
          })),
        },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Portfolio', url: `${SITE_URL}/portfolio` },
      ]),
    ],
  },
  {
    routePath: '/industries',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Industries We Serve | AI Software Technology — Healthcare, Education, Real Estate, Manufacturing',
    description:
      'AI Software Technology (A Brand of Digi India Solutions) delivers custom ERP, CRM, HRMS, and industry-specific management software across Healthcare, Education, Real Estate, Manufacturing, Retail, Finance, Hospitality, and Construction.',
    ogType: 'website',
    h1: 'Industry-Specific Custom Software Solutions',
    intro:
      'We build domain-specific ERP, CRM, HRMS, and workflow automation software tailored for Healthcare, Finance, Manufacturing, Education, Retail, Hospitality, Construction, and Real Estate enterprises.',
    sections: [
      {
        heading: '8 Core Industry Verticals',
        items: Object.values(industriesData).map((ind) => `${ind.title}: ${ind.meta.description}`),
      },
    ],
    links: Object.values(industriesData).map((ind) => ({
      label: `${ind.title} Software Solutions`,
      href: `/industries/${ind.slug}`,
    })),
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Industries We Serve — AI Software Technology',
        url: `${SITE_URL}/industries`,
        description:
          'Industry-specific custom software, ERP, CRM, HRMS, and automation solutions across Healthcare, Manufacturing, Education, Retail, Real Estate, Finance, Hospitality, and Construction.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: Object.values(industriesData).map((ind, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: `${ind.title} Software Solutions`,
            url: ind.meta.canonicalUrl,
          })),
        },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Industries', url: `${SITE_URL}/industries` },
      ]),
    ],
  },
  {
    routePath: '/case-studies',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'Software Case Studies | AI Software Technology — ERP, CRM, HRMS & Automation Implementations',
    description:
      'Explore software architecture and implementation case studies from AI Software Technology (A Brand of Digi India Solutions) across Custom ERP, Sales CRM, HRMS & Payroll, Healthcare HMS, Education ERP, and AI Workflow Automation.',
    ogType: 'website',
    h1: 'Practical Solutions for Real Business Workflows — Software Case Studies',
    intro:
      'Explore how AI Software Technology architects and delivers custom ERP, CRM, HRMS, order management, factory attendance, multi-portal web applications, and AI workflow automation across industries.',
    sections: [
      {
        heading: 'Featured Engineering Case Studies',
        items: caseStudies.map((cs) => `${cs.title}: ${cs.overview}`),
      },
    ],
    links: caseStudies.map((cs) => ({ label: cs.title, href: `/case-studies/${cs.slug}` })),
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Software Implementation Case Studies — AI Software Technology',
        description:
          'Detailed software architecture and implementation case studies by AI Software Technology (A Brand of Digi India Solutions).',
        url: `${SITE_URL}/case-studies`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: caseStudies.length,
          itemListElement: caseStudies.map((cs, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: cs.title,
            url: `${SITE_URL}/case-studies/${cs.slug}`,
          })),
        },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
      ]),
    ],
  },
  {
    routePath: '/blogs',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'Software, Web Development & Cloud Computing Blog | AI Software Technology',
    description:
      'Practical guides and B2B insights on Web Development, Cloud Computing, Custom Software, CRM, ERP, HRMS, SaaS architecture, and AI automation from AI Software Technology (A Brand of Digi India Solutions).',
    ogType: 'website',
    h1: 'Software, Web Development & Cloud Computing Insights',
    intro:
      'Explore 63+ in-depth technical guides and business decision frameworks covering Web Development, Cloud Computing, Custom Software, ERP, CRM, HRMS, Mobile Apps, Cyber Security, and AI Automation.',
    sections: [
      {
        heading: 'Latest Articles & Guides',
        items: blogPosts.slice(0, 20).map((b) => `${b.title} (${b.category})`),
      },
    ],
    links: blogPosts.map((b) => ({ label: b.title, href: `/blogs/${b.slug}` })),
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Software, Web Development & Cloud Computing Blog — AI Software Technology',
        description:
          'B2B software engineering, Web Development, Cloud Computing, ERP, CRM, HRMS, and AI automation guides published by AI Software Technology (A Brand of Digi India Solutions).',
        url: `${SITE_URL}/blogs`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: blogPosts.length,
          itemListElement: blogPosts.slice(0, 20).map((post, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: post.title,
            url: `${SITE_URL}/blogs/${post.slug}`,
          })),
        },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Blogs', url: `${SITE_URL}/blogs` },
      ]),
    ],
  },
  {
    routePath: '/careers',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Careers at AI Software Technology | Software Engineering & Product Roles',
    description:
      'Join AI Software Technology (A Brand of Digi India Solutions) in New Delhi. Explore open roles in Full-Stack Engineering, AI Automation, Mobile Apps, UI/UX Design, and Business Analysis.',
    ogType: 'website',
    h1: 'Build the Future With Us — Careers at AI Software Technology',
    intro:
      'Join AI Software Technology (A Brand of Digi India Solutions) in New Delhi to engineer custom ERP, CRM, HRMS, SaaS, and AI-enabled software systems for growing businesses.',
    sections: [
      {
        heading: 'Engineering & Product Departments',
        items: ['Full-Stack React & Node.js Engineering', 'Mobile App Development (Flutter & React Native)', 'AI & Workflow Automation', 'Enterprise UI/UX Design'],
      },
    ],
    links: [
      { label: 'About AI Software Technology', href: '/about' },
      { label: 'Our Journey', href: '/our-journey' },
      { label: 'Contact HR & Engineering', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Careers at AI Software Technology — A Brand of Digi India Solutions',
        description:
          'Software engineering, AI automation, UI/UX design, and product development careers at AI Software Technology in New Delhi, India.',
        url: `${SITE_URL}/careers`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Careers', url: `${SITE_URL}/careers` },
      ]),
    ],
  },
  {
    routePath: '/calculators',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Software Project Cost Calculator | AI Software Technology',
    description:
      'Estimate scope and investment for Custom Software, ERP, CRM, HRMS, Mobile Apps, and Web Applications with AI Software Technology (A Brand of Digi India Solutions).',
    ogType: 'website',
    h1: 'Software & App Development Project Cost Calculator',
    intro:
      'Estimate the scope, module breakdown, and budget range for Custom Software, ERP, CRM, HRMS, Android & iOS Mobile Apps, Website Development, and AI Business Automation.',
    sections: [
      {
        heading: 'Available Cost Estimators',
        items: [
          'Custom Software / ERP / CRM / HRMS Cost Estimator',
          'Website & Web Application Development Cost Estimator',
          'Android & iOS Mobile App Development Cost Estimator',
          'AI & WhatsApp Business Automation Scope Estimator',
        ],
      },
    ],
    links: [
      { label: 'Custom Software Development', href: '/services/custom-software' },
      { label: 'Website Development Cost Guide 2027', href: '/blogs/website-development-cost-india-2027' },
      { label: 'Request Custom Proposal', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Software Project Cost Calculator — AI Software Technology',
        description:
          'Interactive software project cost and scope estimator for Custom Software, ERP, CRM, HRMS, Mobile Apps, Web Applications, and AI Automation.',
        url: `${SITE_URL}/calculators`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Cost Calculators', url: `${SITE_URL}/calculators` },
      ]),
    ],
  },
  {
    routePath: '/ai-features',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'AI Automation & Business Intelligence | AI Software Technology',
    description:
      'Explore AI Chatbots, AI Lead Qualification, WhatsApp Automation, and Intelligent Business Workflows built by AI Software Technology (A Brand of Digi India Solutions).',
    ogType: 'website',
    h1: 'AI Automation & Intelligent Business Workflows',
    intro:
      'Explore conversational AI assistants, automated lead qualification, intelligent support triage, and document extraction workflows engineered by AI Software Technology.',
    sections: [
      {
        heading: 'Core AI Capabilities',
        items: [
          'AI Chat Assistant & 24/7 Customer Engagement',
          'AI Lead Qualification & CRM Scoring',
          'AI Support Ticket Triage & Knowledge Base Bot',
          'AI Requirement & Document Analyzer',
        ],
      },
    ],
    links: [
      { label: 'AI Automation Service', href: '/services/ai-automation' },
      { label: 'WhatsApp Business Automation', href: '/services/whatsapp-automation' },
      { label: 'CRM Software Development', href: '/services/crm-solutions' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'AI Automation & Business Intelligence — AI Software Technology',
        description:
          'Enterprise AI chatbots, project estimation engines, lead qualification, and workflow automation built by AI Software Technology (A Brand of Digi India Solutions).',
        url: `${SITE_URL}/ai-features`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'AI Capabilities', url: `${SITE_URL}/ai-features` },
      ]),
    ],
  },
  {
    routePath: '/knowledge-center',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: '2026-11-03',
    title: 'Knowledge Center | AI Software Technology — Guides, Case Studies & Documentation',
    description:
      'Explore software architecture guides, ERP/CRM/HRMS documentation, case studies, and technical resources from AI Software Technology (A Brand of Digi India Solutions).',
    ogType: 'website',
    h1: 'Knowledge Center — Architecture Guides, Case Studies & Technical Resources',
    intro:
      'Central resource hub featuring enterprise digital transformation playbooks, SaaS tech-stack decision frameworks, case studies, and engineering documentation.',
    sections: [
      {
        heading: 'Resource Categories',
        items: ['B2B Software & Cloud Blogs', 'Implementation Case Studies', 'Software Portfolio Showcases', 'Architecture Playbooks & Guides'],
      },
    ],
    links: [
      { label: 'All Blog Articles', href: '/blogs' },
      { label: 'All Case Studies', href: '/case-studies' },
      { label: 'All Software Services', href: '/services' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Knowledge Center — AI Software Technology',
        description:
          'Technical whitepapers, software architecture guides, ERP/CRM/HRMS documentation, case studies, and engineering resources by AI Software Technology.',
        url: `${SITE_URL}/knowledge-center`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Knowledge Center', url: `${SITE_URL}/knowledge-center` },
      ]),
    ],
  },
  {
    routePath: '/our-journey',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Our Journey | AI Software Technology — A Brand of Digi India Solutions',
    description:
      'Explore the evolution of AI Software Technology, a dedicated custom software development brand of Digi India Solutions, delivering ERP, CRM, HRMS, SaaS, Mobile Apps, and AI Automation.',
    ogType: 'website',
    h1: 'Our Journey — From Digi India Solutions to AI Software Technology',
    intro:
      'Explore how Digi India Solutions established AI Software Technology in Rohini, New Delhi as a specialized custom software engineering brand delivering ERP, CRM, HRMS, SaaS, Mobile Apps, and AI Automation.',
    sections: [
      {
        heading: 'Key Milestones (2022–2026+)',
        items: [
          '2022: Digi India Solutions founded in Rohini, New Delhi',
          '2023: Expanded into Custom Software, CRM, ERP & Mobile Apps',
          '2024: Scaled Cloud Solutions & Business Process Automation across India',
          '2025: Launched AI Chatbots, Smart ERP & Enterprise Dashboards',
          '2026: Launched AI Software Technology as our dedicated custom software brand',
        ],
      },
    ],
    links: [
      { label: 'About AI Software Technology', href: '/about' },
      { label: 'Explore Our Portfolio', href: '/portfolio' },
      { label: 'Contact Our Team', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'Our Journey & Milestones — AI Software Technology (A Brand of Digi India Solutions)',
        description:
          'Timeline and milestones of Digi India Solutions and its dedicated custom software engineering brand, AI Software Technology.',
        url: `${SITE_URL}/our-journey`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Our Journey', url: `${SITE_URL}/our-journey` },
      ]),
    ],
  },
  // 3 Comparison Pages
  {
    routePath: '/comparisons/react-vs-angular',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'React vs Angular Comparison Guide | Frontend Architecture — AI Software Technology',
    description:
      'Compare React vs Angular for custom web applications, ERP dashboards, and SaaS platforms. Evaluate performance, learning curve, ecosystem flexibility, and enterprise scalability with AI Software Technology.',
    ogType: 'article',
    h1: 'React vs Angular: Frontend Framework Comparison for Business Web Applications',
    intro:
      'Detailed technical comparison between React and Angular for custom web applications, enterprise ERP dashboards, CRM portals, and multi-tenant SaaS products.',
    sections: [
      {
        heading: 'Key Evaluation Dimensions',
        items: [
          'Component Architecture & Virtual DOM vs Incremental DOM',
          'Enterprise State Management & TypeScript Integration',
          'Bundle Size, Core Web Vitals & SSR/Next.js Ecosystem',
          'When to Choose React vs Angular for Business Software',
        ],
      },
    ],
    links: [
      { label: 'Website & Web Application Development', href: '/services/website-development' },
      { label: 'React vs Next.js Business Guide', href: '/blogs/react-vs-nextjs-business-website' },
      { label: 'Custom Software Development', href: '/services/custom-software' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'React vs Angular: Frontend Framework Comparison for Business Web Applications',
        description:
          'Detailed technical comparison between React and Angular for custom web application, ERP, CRM, and SaaS frontend architecture.',
        author: { '@type': 'Organization', name: 'AI Software Technology', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'AI Software Technology',
          url: SITE_URL,
          parentOrganization: { '@type': 'Organization', name: 'Digi India Solutions' },
        },
        mainEntityOfPage: `${SITE_URL}/comparisons/react-vs-angular`,
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'React vs Angular', url: `${SITE_URL}/comparisons/react-vs-angular` },
      ]),
    ],
  },
  {
    routePath: '/comparisons/flutter-vs-react-native',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Flutter vs React Native Comparison | Cross-Platform Mobile App Guide — AI Software Technology',
    description:
      'Compare Flutter vs React Native for Android and iOS mobile app development. Evaluate rendering performance, development speed, native integration, and maintenance with AI Software Technology.',
    ogType: 'article',
    h1: 'Flutter vs React Native: Cross-Platform Mobile App Framework Comparison',
    intro:
      'Technical comparison of Flutter and React Native for building high-performance Android and iOS mobile applications for customers, field sales teams, and enterprise operations.',
    sections: [
      {
        heading: 'Key Evaluation Dimensions',
        items: [
          'Impeller/Skia Canvas Rendering vs React Native JSI & Fabric Architecture',
          'Code Reuse Across Android, iOS, and Web',
          'Hardware, GPS, Biometric & Payment Gateway Native Modules',
          'Long-Term Maintenance & Total Cost of Ownership',
        ],
      },
    ],
    links: [
      { label: 'Android & iOS Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'Field Sales & GPS Tracking Software', href: '/services/field-sales-tracking-software' },
      { label: 'Contact Mobile Engineering Team', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Flutter vs React Native: Cross-Platform Mobile App Framework Comparison',
        description:
          'Technical comparison of Flutter and React Native for building Android and iOS business and consumer mobile applications.',
        author: { '@type': 'Organization', name: 'AI Software Technology', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'AI Software Technology',
          url: SITE_URL,
          parentOrganization: { '@type': 'Organization', name: 'Digi India Solutions' },
        },
        mainEntityOfPage: `${SITE_URL}/comparisons/flutter-vs-react-native`,
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Flutter vs React Native', url: `${SITE_URL}/comparisons/flutter-vs-react-native` },
      ]),
    ],
  },
  {
    routePath: '/comparisons/custom-software-vs-saas',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: 'Custom Software vs SaaS Comparison | Build vs Buy Guide — AI Software Technology',
    description:
      'Compare Custom Software Development vs Ready-Made SaaS for ERP, CRM, HRMS, and business operations. Analyze long-term ownership cost, workflow fit, data security, and scalability.',
    ogType: 'article',
    h1: 'Custom Software vs SaaS: Complete Build vs Buy Comparison for Growing Businesses',
    intro:
      'Evaluate Custom Software Development versus off-the-shelf SaaS subscriptions across 5-year TCO, workflow customization, per-user license fees, API integration, and full IP ownership.',
    sections: [
      {
        heading: 'Key Build vs Buy Factors',
        items: [
          'Zero Per-User License Tax vs Recurring Monthly Per-Seat SaaS Subscriptions',
          '100% Custom Workflow Fit vs Rigid Off-the-Shelf Templates',
          'Complete Source Code, Database & IP Control',
          'Seamless Integration with Tally, GST Billing, WhatsApp & Biometrics',
        ],
      },
    ],
    links: [
      { label: 'Custom Software Development', href: '/services/custom-software' },
      { label: 'SaaS Application Development', href: '/services/saas-development' },
      { label: 'ERP Software Solutions', href: '/services/erp-solutions' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Custom Software vs SaaS: Complete Build vs Buy Comparison for Growing Businesses',
        description:
          'Compare custom software engineering with off-the-shelf SaaS subscriptions across cost of ownership, customization, workflow fit, and security.',
        author: { '@type': 'Organization', name: 'AI Software Technology', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'AI Software Technology',
          url: SITE_URL,
          parentOrganization: { '@type': 'Organization', name: 'Digi India Solutions' },
        },
        mainEntityOfPage: `${SITE_URL}/comparisons/custom-software-vs-saas`,
      },
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Custom Software vs SaaS', url: `${SITE_URL}/comparisons/custom-software-vs-saas` },
      ]),
    ],
  },
];

// 8 Industry Routes
const industryRouteSpecs = Object.values(industriesData).map((ind) => ({
  routePath: `/industries/${ind.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
  lastmod: '2026-11-03',
  title: ind.meta.title,
  description: `${ind.meta.description} Call +91 9990390519.`,
  ogType: 'website',
  ogImage: ind.heroImage,
  ogImageAlt: `${ind.title} Software Solutions — AI Software Technology`,
  h1: `Custom ${ind.title} Software Solutions`,
  intro: ind.meta.description,
  image: {
    src: ind.heroImage,
    alt: `${ind.title} Software Solutions — AI Software Technology`,
  },
  sections: [
    {
      heading: `${ind.title} Pain Points We Solve`,
      items: ind.challenges.map((c) => `${c.title}: ${c.desc}`),
    },
    {
      heading: `Our ${ind.title} Software Suite`,
      items: ind.solutions.map((s) => `${s.title}: ${s.desc}`),
    },
    {
      heading: `Core ${ind.title} Modules`,
      items: ind.modules,
    },
  ],
  links: [
    { label: 'Custom Software Development', href: '/services/custom-software' },
    { label: 'ERP Software Solutions', href: '/services/erp-solutions' },
    { label: 'CRM & Lead Management', href: '/services/crm-solutions' },
    { label: 'HRMS & Attendance Software', href: '/services/hrms-software' },
    { label: 'All Industries We Serve', href: '/industries' },
    { label: 'Request Free Consultation', href: '/contact' },
  ],
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Custom ${ind.title} Software Solutions`,
      description: ind.meta.description,
      url: ind.meta.canonicalUrl,
      image: resolveImageUrl(ind.heroImage),
      serviceType: `${ind.title} Software Development`,
      provider: providerEntity,
      areaServed: [
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'Country', name: 'India' },
      ],
    },
    makeBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Industries', url: `${SITE_URL}/industries` },
      { name: ind.title, url: ind.meta.canonicalUrl },
    ]),
  ],
}));

// 25 Service Detail Routes
const serviceRouteSpecs = servicesData.map((srv) => ({
  routePath: `/services/${srv.slug}`,
  priority: '0.9',
  changefreq: 'weekly',
  lastmod: '2026-11-03',
  title: `${srv.name} Company in India | AI Software Technology`,
  description: `${srv.heroDesc} Call +91 9990390519 for a free consultation with AI Software Technology — A Brand of Digi India Solutions.`,
  ogTitle: `${srv.name} — AI Software Technology`,
  ogDescription: srv.heroDesc,
  ogType: 'website',
  ogImage: srv.bannerImage,
  ogImageAlt: srv.imageAlt || `${srv.name} Services — AI Software Technology`,
  h1: srv.name,
  intro: `${srv.tagline}. ${srv.heroDesc}`,
  image: {
    src: srv.bannerImage,
    alt: srv.imageAlt || `${srv.name} Services — AI Software Technology`,
  },
  sections: [
    {
      heading: `Key Features & Capabilities of ${srv.name}`,
      items: srv.features.map((f) => `${f.title}: ${f.desc}`),
    },
    {
      heading: 'Our 5-Step Software Engineering Process',
      items: srv.process.map((p) => `Step ${p.step} — ${p.title}: ${p.desc}`),
    },
    {
      heading: 'Technologies & Industries Served',
      items: [
        `Technologies: ${srv.technologies.join(', ')}`,
        `Industries: ${srv.industries.join(', ')}`,
      ],
    },
    {
      heading: `Frequently Asked Questions — ${srv.name}`,
      items: srv.faqs.map((faq) => `Q: ${faq.q} — A: ${faq.a}`),
    },
  ],
  links: [
    { label: 'All Software Services', href: '/services' },
    { label: 'Software Portfolio', href: '/portfolio' },
    { label: 'Implementation Case Studies', href: '/case-studies' },
    { label: 'Project Cost Calculator', href: '/calculators' },
    { label: 'Book Free Consultation (+91 9990390519)', href: '/contact' },
  ],
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: srv.name,
      description: srv.heroDesc,
      url: `${SITE_URL}/services/${srv.slug}`,
      image: resolveImageUrl(srv.bannerImage),
      serviceType: srv.name,
      provider: providerEntity,
      areaServed: [
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'Country', name: 'India' },
      ],
    },
    ...(srv.faqs && srv.faqs.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: srv.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.a,
              },
            })),
          },
        ]
      : []),
    makeBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: srv.name, url: `${SITE_URL}/services/${srv.slug}` },
    ]),
  ],
}));

// 42 Portfolio Detail Routes
const portfolioRouteSpecs = allPortfolio.map((proj) => ({
  routePath: `/portfolio/${proj.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: '2026-11-03',
  title: `${proj.name} — ${proj.category} Project | AI Software Technology`,
  description: `${proj.description} Built with ${proj.technologies.slice(0, 4).join(', ')} by AI Software Technology (A Brand of Digi India Solutions).`,
  ogTitle: `${proj.name} | AI Software Technology Portfolio`,
  ogDescription: proj.description,
  ogType: 'website',
  ogImage: proj.image,
  ogImageAlt: proj.imageAlt || `${proj.name} — ${proj.category} Project by AI Software Technology`,
  h1: proj.name,
  intro: `${proj.category} (${proj.industry}) — ${proj.description}`,
  image: {
    src: proj.image,
    alt: proj.imageAlt || `${proj.name} — ${proj.category} Project by AI Software Technology`,
  },
  sections: [
    {
      heading: 'Business Challenge & Project Goals',
      items: [proj.challenge, ...proj.goals],
    },
    {
      heading: 'Key Features Delivered',
      items: proj.features,
    },
    {
      heading: 'Technology Stack & Engineering Process',
      items: [
        `Technologies: ${proj.technologies.join(', ')}`,
        `Architecture & Development: ${proj.devProcess}`,
      ],
    },
  ],
  links: [
    ...(proj.caseStudyUrl ? [{ label: `Read Full Case Study: ${proj.name}`, href: proj.caseStudyUrl }] : []),
    { label: 'Custom Software Development', href: '/services/custom-software' },
    { label: 'Website & Web App Development', href: '/services/website-development' },
    { label: 'ERP Software Solutions', href: '/services/erp-solutions' },
    { label: 'All Portfolio Projects', href: '/portfolio' },
    { label: 'Request Similar Project Quote', href: '/contact' },
  ],
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: proj.name,
      description: proj.description,
      url: `${SITE_URL}/portfolio/${proj.slug}`,
      image: resolveImageUrl(proj.image),
      creator: {
        '@type': 'Organization',
        name: 'AI Software Technology',
        url: SITE_URL,
        parentOrganization: {
          '@type': 'Organization',
          name: 'Digi India Solutions',
        },
      },
      about: { '@type': 'Thing', name: proj.industry },
      keywords: proj.technologies.join(', '),
    },
    makeBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Portfolio', url: `${SITE_URL}/portfolio` },
      { name: proj.name, url: `${SITE_URL}/portfolio/${proj.slug}` },
    ]),
  ],
}));

// 9 Case Study Detail Routes
const caseStudyRouteSpecs = caseStudies.map((cs) => ({
  routePath: `/case-studies/${cs.slug}`,
  priority: '0.8',
  changefreq: 'monthly',
  lastmod: '2026-11-03',
  title: `${cs.title} | Case Study — AI Software Technology`,
  description: `${cs.overview} Explore business challenges, solution architecture, key features, workflow, and technology stack by AI Software Technology.`,
  ogTitle: `${cs.title} — Case Study`,
  ogDescription: cs.overview,
  ogType: 'article',
  ogImage: cs.image,
  ogImageAlt: cs.imageAlt || cs.title,
  h1: cs.title,
  intro: `${cs.industry} Case Study — ${cs.overview}`,
  image: {
    src: cs.image,
    alt: cs.imageAlt || cs.title,
  },
  sections: [
    {
      heading: 'Business Challenge & Engineering Approach',
      items: [cs.challenge, cs.approach],
    },
    {
      heading: 'Key Solution Capabilities',
      items: cs.solution,
    },
    {
      heading: 'Operational Workflow',
      items: cs.workflow,
    },
    {
      heading: 'Business Benefits & Technology Stack',
      items: [...cs.businessBenefits, `Tech Stack: ${cs.techStack.join(', ')}`],
    },
  ],
  links: [
    ...cs.relatedServices.map((rs) => ({ label: rs.name, href: `/services/${rs.slug}` })),
    { label: 'All Software Case Studies', href: '/case-studies' },
    { label: 'View Software Portfolio', href: '/portfolio' },
    { label: 'Discuss Your Requirement', href: '/contact' },
  ],
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: cs.title,
      description: cs.overview,
      url: `${SITE_URL}/case-studies/${cs.slug}`,
      image: resolveImageUrl(cs.image),
      author: {
        '@type': 'Organization',
        name: 'AI Software Technology',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'AI Software Technology',
        url: SITE_URL,
        parentOrganization: {
          '@type': 'Organization',
          name: 'Digi India Solutions',
        },
      },
      about: { '@type': 'Thing', name: cs.industry },
      keywords: cs.tags.join(', '),
    },
    makeBreadcrumb([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
      { name: cs.title, url: `${SITE_URL}/case-studies/${cs.slug}` },
    ]),
  ],
}));

// 63 Blog Detail Routes
const blogRouteSpecs = blogPosts.map((post) => {
  const resolvedTitle = post.seoTitle || `${post.title} | AI Software Technology Blog`;
  const resolvedDescription =
    post.metaDescription ||
    post.excerpt ||
    'Practical insights on custom software development, Web Development, Cloud Computing, ERP, CRM, HRMS, SaaS, and AI automation from AI Software Technology (A Brand of Digi India Solutions).';
  const headings = post.content
    .split('\n')
    .filter((l) => l.trim().startsWith('## '))
    .map((l) => l.replace(/^##\s+/, '').trim());

  const defaultLinks =
    post.category === 'Cloud Computing'
      ? [
          { label: 'Cloud Deployment & Server Setup', href: '/services/cloud-solutions' },
          { label: 'SaaS Application Development', href: '/services/saas-development' },
          { label: 'Custom Software Development', href: '/services/custom-software' },
        ]
      : post.category === 'Web Development'
      ? [
          { label: 'Website & Web Application Development', href: '/services/website-development' },
          { label: 'Custom Software Development', href: '/services/custom-software' },
          { label: 'UI/UX Design Services', href: '/services/ui-ux-design' },
        ]
      : [
          { label: 'Custom Software Development', href: '/services/custom-software' },
          { label: 'ERP Software Solutions', href: '/services/erp-solutions' },
          { label: 'CRM Software Development', href: '/services/crm-solutions' },
          { label: 'HRMS & Payroll Software', href: '/services/hrms-software' },
        ];

  return {
    routePath: `/blogs/${post.slug}`,
    priority: post.slug.includes('2027') || post.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
    lastmod: '2026-11-03',
    title: resolvedTitle,
    description: resolvedDescription,
    ogTitle: post.seoTitle || post.title,
    ogDescription: resolvedDescription,
    ogType: 'article',
    ogImage: post.image,
    ogImageAlt: post.imageAlt || `${post.title} — ${post.category} Guide by AI Software Technology`,
    h1: post.title,
    intro: post.excerpt,
    image: {
      src: post.image,
      alt: post.imageAlt || `${post.title} — ${post.category} Guide by AI Software Technology`,
    },
    sections: [
      {
        heading: 'Article Key Topics & Sections',
        items: headings.length > 0 ? headings : [post.excerpt],
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              heading: 'Frequently Asked Questions',
              items: post.faqs.map((f) => `Q: ${f.q} — A: ${f.a}`),
            },
          ]
        : []),
    ],
    links: [
      ...(post.internalLinks
        ? post.internalLinks.map((il) => ({ label: il.label, href: il.href }))
        : defaultLinks),
      { label: 'All Blog Articles', href: '/blogs' },
      { label: 'Book Free Consultation', href: '/contact' },
    ],
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: resolvedDescription,
        author: { '@type': 'Organization', name: post.author.name },
        datePublished: post.date,
        dateModified: post.date,
        image: resolveImageUrl(post.image),
        mainEntityOfPage: `${SITE_URL}/blogs/${post.slug}`,
        publisher: {
          '@type': 'Organization',
          name: 'AI Software Technology',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: DEFAULT_OG_IMAGE,
          },
          parentOrganization: {
            '@type': 'Organization',
            name: 'Digi India Solutions',
          },
        },
        url: `${SITE_URL}/blogs/${post.slug}`,
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
      makeBreadcrumb([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Blog', url: `${SITE_URL}/blogs` },
        { name: post.title, url: `${SITE_URL}/blogs/${post.slug}` },
      ]),
    ],
  };
});

const allCanonicalSpecs = [
  ...staticRouteSpecs,
  ...industryRouteSpecs,
  ...serviceRouteSpecs,
  ...portfolioRouteSpecs,
  ...caseStudyRouteSpecs,
  ...blogRouteSpecs,
];

function buildSemanticHtml(spec) {
  const canonicalUrl = spec.routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${spec.routePath}`;
  const imgBlock = spec.image
    ? `<figure class="my-6"><img src="${escapeHtml(spec.image.src)}" alt="${escapeHtml(spec.image.alt)}" width="800" height="450" loading="eager" decoding="async" /></figure>`
    : '';
  const sectionsHtml = (spec.sections || [])
    .map(
      (sec) =>
        `<section class="my-6"><h2>${escapeHtml(sec.heading)}</h2><ul>${sec.items
          .map((it) => `<li>${escapeHtml(it)}</li>`)
          .join('')}</ul></section>`
    )
    .join('\n');
  const linksHtml = (spec.links || [])
    .map(
      (lnk) =>
        `<li><a href="${escapeHtml(lnk.href)}">${escapeHtml(lnk.label)}</a></li>`
    )
    .join('');

  return `<main data-prerendered-route="${escapeHtml(spec.routePath)}" class="max-w-4xl mx-auto p-8 font-sans leading-relaxed text-white">
      <article>
        <h1>${escapeHtml(spec.h1)}</h1>
        <p><strong>AI Software Technology — A Brand of Digi India Solutions</strong> | Phone &amp; WhatsApp: <a href="tel:+919990390519">+91 9990390519</a> | Email: <a href="mailto:aisoftwaretechnology2026@gmail.com">aisoftwaretechnology2026@gmail.com</a></p>
        <p>${escapeHtml(spec.intro)}</p>
        ${imgBlock}
        ${sectionsHtml}
        <nav aria-label="Related Links" class="my-6">
          <h2>Related Pages &amp; Services</h2>
          <ul>${linksHtml}</ul>
        </nav>
        <footer>
          <p>Canonical URL: <a href="${escapeHtml(canonicalUrl)}">${escapeHtml(canonicalUrl)}</a> | Address: House No. 158-159, Pocket-10, Sector-24, Rohini, New Delhi, Delhi – 110085, India</p>
        </footer>
      </article>
    </main>`;
}

function renderRouteHtml(baseHtml, spec, isNotFound = false) {
  const canonicalUrl = spec.routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${spec.routePath}`;
  const resolvedOgImage = resolveImageUrl(spec.ogImage || DEFAULT_OG_IMAGE);
  const resolvedOgAlt = spec.ogImageAlt || spec.ogTitle || spec.title;
  const robotsValue = isNotFound
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(spec.title)}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(spec.description)}" />`
  );

  // Replace robots & googlebot
  html = html.replace(
    /<meta name="robots" content="[^"]*"\s*\/>/,
    `<meta name="robots" content="${robotsValue}" />`
  );
  html = html.replace(
    /<meta name="googlebot" content="[^"]*"\s*\/>/,
    `<meta name="googlebot" content="${robotsValue}" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
  );

  // Replace OpenGraph tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(spec.ogTitle || spec.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(spec.ogDescription || spec.description)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${escapeHtml(spec.ogType || 'website')}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${escapeHtml(resolvedOgImage)}" />`
  );
  html = html.replace(
    /<meta property="og:image:alt" content="[^"]*"\s*\/>/,
    `<meta property="og:image:alt" content="${escapeHtml(resolvedOgAlt)}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(spec.ogTitle || spec.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(spec.ogDescription || spec.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${escapeHtml(resolvedOgImage)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image:alt" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image:alt" content="${escapeHtml(resolvedOgAlt)}" />`
  );

  // Inject page-level JSON-LD before </head>
  if (spec.schema) {
    const safeJsonLd = JSON.stringify(spec.schema).replace(/</g, '\\u003c');
    const jsonLdTag = `    <script id="page-seo-jsonld" type="application/ld+json">${safeJsonLd}</script>\n  </head>`;
    html = html.replace('  </head>', jsonLdTag);
  }

  // Inject route-specific crawlable HTML inside #root (serves both non-JS crawlers and no-JS users before React mounts)
  const semanticMain = buildSemanticHtml(spec);
  html = html.replace('<div id="root"></div>', `<div id="root">${semanticMain}</div>`);
  html = html.replace(/\s*<noscript>[\s\S]*?<\/noscript>/, '');

  return html;
}

function generateSitemapXml(specs) {
  const urlEntries = specs
    .map((spec) => {
      const loc = spec.routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${spec.routePath}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${spec.lastmod}</lastmod>
    <changefreq>${spec.changefreq}</changefreq>
    <priority>${spec.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

// Main Execution
const distDir = path.resolve('dist');
const publicDir = path.resolve('public');

// 1. Always keep public/sitemap.xml synchronized with the canonical route inventory
const sitemapContent = generateSitemapXml(allCanonicalSpecs);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
console.log(`[SEO] Generated public/sitemap.xml with ${allCanonicalSpecs.length} canonical URLs.`);

// 2. If dist/index.html exists, prerender all 164 canonical routes + dist/404.html
const distIndexPath = path.join(distDir, 'index.html');
if (fs.existsSync(distIndexPath)) {
  const baseHtml = fs.readFileSync(distIndexPath, 'utf8');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf8');

  let writtenCount = 0;
  for (const spec of allCanonicalSpecs) {
    const routeHtml = renderRouteHtml(baseHtml, spec, false);
    const outFile =
      spec.routePath === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, spec.routePath.replace(/^\/+/, ''), 'index.html');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, routeHtml, 'utf8');
    writtenCount++;
  }

  // Generate dist/404.html with noindex, nofollow
  const notFoundSpec = {
    routePath: '/404',
    title: '404 Page Not Found | AI Software Technology',
    description:
      'The page you are looking for could not be found. Explore custom software development, ERP, CRM, HRMS, and SaaS solutions from AI Software Technology.',
    ogType: 'website',
    h1: '404 — Page Not Found',
    intro:
      'The page you are looking for might have been moved, renamed, or does not exist. Use the links below to explore AI Software Technology.',
    sections: [],
    links: [
      { label: 'Home — AI Software Technology', href: '/' },
      { label: 'All Software Services', href: '/services' },
      { label: 'Software Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blogs & Insights', href: '/blogs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  };
  const notFoundHtml = renderRouteHtml(baseHtml, notFoundSpec, true);
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

  console.log(`[SEO] Static prerendering complete: ${writtenCount} canonical route HTML files + dist/404.html generated.`);
}
