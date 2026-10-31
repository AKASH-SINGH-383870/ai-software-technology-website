export const serviceCategories = [
  {
    id: 'core-software',
    title: 'Core Enterprise & Business Software',
    subtitle: 'Foundational custom software platforms engineered around your operations',
    icon: 'ri-code-s-slash-line',
    services: [
      {
        name: 'Custom Software Development',
        slug: 'custom-software',
        icon: 'ri-code-s-slash-line',
        desc: 'Tailor-made business applications, internal workflow systems, admin dashboards, and process management software designed specifically around your operations.',
        tags: ['Business Software', 'Workflows', 'Admin Panels', 'APIs'],
      },
      {
        name: 'ERP Software Development',
        slug: 'erp-solutions',
        icon: 'ri-building-2-line',
        desc: 'Comprehensive Enterprise Resource Planning covering inventory, purchase, sales, GST invoicing, accounting, multi-branch operations, and management analytics.',
        tags: ['Inventory & Stock', 'GST Billing', 'Multi-Branch', 'Procurement'],
      },
      {
        name: 'CRM Software Development',
        slug: 'crm-solutions',
        icon: 'ri-customer-service-2-line',
        desc: 'Complete sales and lead management CRM with Facebook/Google lead capture, WhatsApp & email integration, sales pipeline, follow-ups, and quotation builder.',
        tags: ['Lead Management', 'Sales Pipeline', 'WhatsApp CRM', 'Quotations'],
      },
      {
        name: 'HRMS & Payroll Software',
        slug: 'hrms-software',
        icon: 'ri-team-line',
        desc: 'Complete HR and payroll system with employee records, attendance & biometric integration, leave approvals, salary slip generation, PF/ESI, and self-service portals.',
        tags: ['Payroll & PF/ESI', 'Biometric Attendance', 'Leave Portal', 'HRMS'],
      },
      {
        name: 'SaaS Application Development',
        slug: 'saas-development',
        icon: 'ri-cloud-windy-line',
        desc: 'Multi-tenant cloud SaaS architectures with subscription plans, payment gateway integration, role-based dashboards, analytics, and API ecosystems.',
        tags: ['Multi-Tenant', 'Subscription Billing', 'RBAC', 'Cloud Native'],
      },
      {
        name: 'Android & iOS App Development',
        slug: 'mobile-app-development',
        icon: 'ri-smartphone-line',
        desc: 'Native Android, iOS, and cross-platform Flutter & React Native mobile applications for customers, field sales teams, delivery staff, and executives.',
        tags: ['Android', 'iOS', 'Flutter', 'React Native'],
      },
      {
        name: 'Website & Web Application Development',
        slug: 'website-development',
        icon: 'ri-global-line',
        desc: 'Browser-based enterprise web applications, corporate portals, customer portals, and real-time operational dashboards built with React, Next.js, and Node.js.',
        tags: ['React / Next.js', 'Client Portals', 'Web Apps', 'TypeScript'],
      },
      {
        name: 'Attendance & Workforce Management Software',
        slug: 'attendance-workforce-software',
        icon: 'ri-fingerprint-line',
        desc: 'Factory gate-pass, shift scheduling, contractor attendance, biometric/QR check-ins, overtime calculation, and live workforce monitoring dashboards.',
        tags: ['Gate Pass', 'Shift Roster', 'Biometric Sync', 'Workforce'],
      },
    ],
  },
  {
    id: 'industry-software',
    title: 'Operations & Industry Management Software',
    subtitle: 'Specialized management systems tailored for manufacturing, distribution, healthcare, hospitality, and retail',
    icon: 'ri-building-4-line',
    services: [
      {
        name: 'Inventory Management Software',
        slug: 'inventory-management-software',
        icon: 'ri-archive-drawer-line',
        desc: 'Multi-warehouse stock tracking, batch & lot traceability, barcode/QR scanning, inward-outward registers, and automated low-stock reorder alerts.',
        tags: ['Multi-Warehouse', 'Batch & Lot', 'Barcode', 'Reorder Alerts'],
      },
      {
        name: 'Billing & GST Software',
        slug: 'billing-gst-software',
        icon: 'ri-bill-line',
        desc: 'Fast GST-compliant invoicing, e-invoicing & e-way bill readiness, HSN/SAC tax summaries, customer/supplier ledgers, and payment collection tracking.',
        tags: ['GST Invoicing', 'E-Way Bill', 'Ledgers', 'Tax Reports'],
      },
      {
        name: 'Order Management Software',
        slug: 'order-management-software',
        icon: 'ri-file-list-3-line',
        desc: 'Centralized B2B dealer, distributor, and sales-team order booking, pack-size & grade matrices, approval workflows, and live dispatch status tracking.',
        tags: ['Dealer Portal', 'Order Booking', 'Approval Flow', 'Dispatch'],
      },
      {
        name: 'Manufacturing Management Software',
        slug: 'manufacturing-software',
        industryPath: '/industries/manufacturing',
        icon: 'ri-settings-5-line',
        desc: 'Bill of Materials (BOM), production planning, work orders, raw-material consumption, batch quality checks, machine utilization, and wastage tracking.',
        tags: ['BOM', 'Production Planning', 'Shop Floor', 'Quality Control'],
      },
      {
        name: 'Hospital & Clinic Management Software',
        slug: 'hospital-management-software',
        industryPath: '/industries/healthcare',
        icon: 'ri-hospital-line',
        desc: 'OPD/IPD patient registration, doctor scheduling, electronic medical records (EMR), lab/pharmacy integration, billing, and discharge summaries.',
        tags: ['OPD / IPD', 'EMR', 'Appointments', 'Hospital Billing'],
      },
      {
        name: 'Hotel Management Software',
        slug: 'hotel-management-software',
        industryPath: '/industries/hospitality',
        icon: 'ri-hotel-line',
        desc: 'Room reservation engine, front desk check-in/out, housekeeping status, KOT & restaurant POS billing, banquet management, and guest CRM.',
        tags: ['PMS', 'Front Desk', 'KOT & POS', 'Room Booking'],
      },
      {
        name: 'Logistics & Shipment Tracking Software',
        slug: 'logistics-software',
        industryPath: '/industries/manufacturing',
        icon: 'ri-truck-line',
        desc: 'Consignment booking (LR/Bilty), vehicle trip sheets, fleet fuel & maintenance logs, hub-to-hub manifest tracking, and proof-of-delivery (POD).',
        tags: ['LR / Bilty', 'Fleet Tracking', 'Dispatch', 'POD'],
      },
      {
        name: 'Field Sales & GPS Tracking Software',
        slug: 'field-sales-tracking-software',
        icon: 'ri-map-pin-user-line',
        desc: 'Geo-verified attendance, live field-executive route tracking, beat planning, on-site client visit check-ins, expense claims, and mobile order capture.',
        tags: ['GPS Route', 'Beat Plan', 'Visit Check-In', 'Field Orders'],
      },
      {
        name: 'Retail & POS Software',
        slug: 'retail-pos-software',
        industryPath: '/industries/retail',
        icon: 'ri-store-2-line',
        desc: 'High-speed barcode POS counter billing, multi-store inventory synchronization, customer loyalty points, promotions, and daily cashier reconciliation.',
        tags: ['Barcode POS', 'Multi-Store', 'Loyalty Points', 'Fast Checkout'],
      },
    ],
  },
  {
    id: 'automation-digital',
    title: 'AI Automation, E-Commerce, APIs & Support',
    subtitle: 'Intelligent automation, WhatsApp API bots, e-commerce platforms, third-party integrations, and SLA maintenance',
    icon: 'ri-brain-line',
    services: [
      {
        name: 'AI & Business Automation',
        slug: 'ai-automation',
        icon: 'ri-brain-line',
        desc: 'AI chatbots, intelligent document data extraction, automated lead qualification, and custom AI workflow assistants connected to your business data.',
        tags: ['AI Chatbots', 'Document OCR', 'Lead Scoring', 'LLM Workflows'],
      },
      {
        name: 'WhatsApp Business API & Chatbot Integration',
        slug: 'whatsapp-automation',
        icon: 'ri-whatsapp-line',
        desc: 'Automated WhatsApp lead capture, interactive conversational chatbots, instant quotation/invoice sharing, payment reminders, and CRM synchronization.',
        tags: ['WhatsApp API', 'Chatbots', 'Auto Follow-Up', 'CRM Sync'],
      },
      {
        name: 'E-commerce Development',
        slug: 'ecommerce-development',
        icon: 'ri-shopping-bag-3-line',
        desc: 'Custom B2C and B2B e-commerce stores & multi-vendor marketplaces with product catalogs, cart & checkout, UPI/card payment gateways, and shipping sync.',
        tags: ['B2B / B2C Store', 'Multi-Vendor', 'Payment Gateway', 'Order Sync'],
      },
      {
        name: 'API Development & Integration',
        slug: 'api-development-integration',
        icon: 'ri-plug-line',
        desc: 'Secure REST & GraphQL API development and seamless integration with payment gateways, Tally, ERP/CRM, shipping partners, SMS, and biometric hardware.',
        tags: ['REST APIs', 'Payment Gateways', 'Tally Sync', 'Webhooks'],
      },
      {
        name: 'Software Maintenance & Support',
        slug: 'software-maintenance-support',
        icon: 'ri-shield-check-line',
        desc: 'Dedicated post-launch SLA support, bug fixing, database optimization, security patching, server monitoring, and feature upgrades for existing software.',
        tags: ['AMC & SLA', 'Bug Fixes', 'Server Care', 'Upgrades'],
      },
      {
        name: 'Cloud Deployment & Server Setup',
        slug: 'cloud-solutions',
        icon: 'ri-cloud-line',
        desc: 'AWS, Azure, GCP, and VPS server provisioning, SSL security, automated database backups, Docker containerization, and CI/CD deployment pipelines.',
        tags: ['AWS / Azure', 'VPS Setup', 'Auto Backups', 'SSL & Security'],
      },
      {
        name: 'UI/UX Design',
        slug: 'ui-ux-design',
        icon: 'ri-palette-line',
        desc: 'User workflow research, wireframing, interactive Figma prototypes, and clean design systems for complex enterprise dashboards and mobile apps.',
        tags: ['Figma Prototypes', 'Dashboard UI', 'Design Systems', 'Mobile UX'],
      },
      {
        name: 'SEO & Digital Marketing Support',
        slug: 'digital-marketing',
        icon: 'ri-megaphone-line',
        desc: 'Technical SEO, local business optimization, search marketing, and digital lead generation campaigns to help your software or business grow online.',
        tags: ['Technical SEO', 'Local SEO', 'Google Ads', 'Lead Generation'],
      },
    ],
  },
];

export interface ServiceDetailItem {
  slug: string;
  name: string;
  tagline: string;
  heroDesc: string;
  bannerImage: string;
  icon: string;
  color: string;
  features: { title: string; desc: string; icon: string }[];
  benefits: { metric: string; label: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export const servicesData: ServiceDetailItem[] = [
  // 1. Custom Software Development
  {
    slug: 'custom-software',
    name: 'Custom Software Development',
    tagline: 'Tailor-Made Software Built Around Your Exact Business Workflows',
    heroDesc:
      'AI Software Technology — A Brand of Digi India Solutions — designs and develops custom business software that replaces scattered spreadsheets and rigid off-the-shelf tools with a unified, secure, and scalable digital system.',
    bannerImage:
      '/images/services/custom-software.svg',
    icon: 'ri-code-s-slash-line',
    color: 'from-amber-500 to-orange-400',
    features: [
      { title: 'Custom Business Workflow Applications', desc: 'Software engineered around your organization’s unique operational steps, approval hierarchies, and business rules.', icon: 'ri-flow-chart' },
      { title: 'Internal Operations & MIS Dashboards', desc: 'Centralized executive dashboards providing real-time visibility across departments, branches, and KPIs.', icon: 'ri-dashboard-3-line' },
      { title: 'Client Portals & Vendor Management', desc: 'Dedicated self-service portals for customers, dealers, franchises, and suppliers with role-based permissions.', icon: 'ri-user-settings-line' },
      { title: 'API & Hardware Integrations', desc: 'Seamless integration with payment gateways, WhatsApp Business API, Tally, barcode scanners, and biometric devices.', icon: 'ri-plug-line' },
      { title: 'Legacy System Modernization', desc: 'Migrate outdated desktop software or complex Excel sheets into modern, cloud-accessible web and mobile systems.', icon: 'ri-refresh-line' },
      { title: 'Role-Based Security & Audit Logs', desc: 'Granular user permissions, encrypted data storage, automated daily backups, and complete user activity logs.', icon: 'ri-shield-check-line' },
    ],
    benefits: [
      { metric: '100%', label: 'Workflow Alignment', desc: 'Built specifically for how your team actually operates' },
      { metric: 'Zero', label: 'Per-User License Tax', desc: 'Scale your team without recurring per-seat SaaS fees' },
      { metric: 'Centralized', label: 'Business Data', desc: 'Eliminate duplicate data entry across departments' },
      { metric: 'Scalable', label: 'Cloud Architecture', desc: 'Ready to grow as you add branches, users, and modules' },
    ],
    process: [
      { step: '01', title: 'Business Process Discovery', desc: 'We map your current operations, bottlenecks, user roles, and reporting requirements in detail.' },
      { step: '02', title: 'System Architecture & Database Plan', desc: 'Designing a clean, scalable database schema, API structure, and security permission model.' },
      { step: '03', title: 'UI/UX Wireframes & Prototyping', desc: 'Creating intuitive, easy-to-use interfaces for admins, staff, and management before coding.' },
      { step: '04', title: 'Agile Module Development', desc: 'Iterative sprint development with regular working demonstrations and milestone reviews.' },
      { step: '05', title: 'Testing, Deployment, Training & Support', desc: 'Rigorous QA testing, cloud/server deployment, staff training, and ongoing technical support.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Laravel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    industries: ['Manufacturing', 'Healthcare', 'Education', 'Logistics', 'Real Estate', 'Retail', 'Hospitality', 'Service Businesses'],
    faqs: [
      { q: 'Why should we build custom software instead of buying off-the-shelf software?', a: 'Off-the-shelf software is built for generic use cases, often forcing your team to change how they work or pay for dozens of unused features per user. Custom software is tailored 100% to your business workflows, integrates with your existing tools, and gives you full control without recurring per-user license fees.' },
      { q: 'Can we start with core modules and add more features later?', a: 'Yes. We design modular software architectures so you can launch with your highest-priority modules first and seamlessly add new departments, mobile apps, or integrations as your business grows.' },
      { q: 'Will our staff find the software easy to use?', a: 'Yes. A core pillar of our approach at AI Software Technology is designing clean, clutter-free interfaces tailored to each staff member’s role, backed by hands-on user training and documentation.' },
      { q: 'Do you provide hosting setup and post-launch support?', a: 'Yes. We assist with complete cloud or dedicated server deployment, automated backup setup, SSL security, and ongoing maintenance and technical support.' },
    ],
    caseStudy: {
      client: 'Multi-Branch Enterprise Operations',
      challenge: 'Disconnected spreadsheets and manual WhatsApp reporting across branches caused delayed billing, stock mismatches, and zero real-time visibility for management.',
      solution: 'Developed a centralized web-based custom operations platform with role-based branch logins, automated GST billing, approval workflows, and live executive dashboards.',
      results: ['Centralized multi-branch operations in one dashboard', 'Eliminated manual spreadsheet reconciliation errors', 'Automated daily management & financial reporting', 'Smooth adoption across non-technical operational staff'],
    },
  },

  // 2. ERP Software Development
  {
    slug: 'erp-solutions',
    name: 'ERP Software Development',
    tagline: 'Unify Inventory, Billing, Purchases, Accounts & Multi-Branch Operations',
    heroDesc:
      'AI Software Technology develops customized ERP software that connects your inventory, procurement, sales orders, GST billing, vendor accounts, warehouse dispatch, and management reporting in one reliable system.',
    bannerImage:
      '/images/services/erp-solutions.svg',
    icon: 'ri-building-2-line',
    color: 'from-indigo-500 to-blue-400',
    features: [
      { title: 'Inventory & Stock Management', desc: 'Real-time Inventory & Stock Management across multiple godowns and branches, batch/lot tracking, barcode integration, and automated Low Stock Alerts & Reorder Management.', icon: 'ri-archive-drawer-line' },
      { title: 'Purchase & Vendor Management', desc: 'Complete Purchase & Vendor Management including purchase requisitions, PO generation, Goods Receipt Notes (GRN), supplier rate comparisons, and vendor ledger tracking.', icon: 'ri-shopping-cart-2-line' },
      { title: 'Sales Order, Billing & GST Invoicing', desc: 'End-to-end Sales Order Management and Billing & GST Invoicing with customizable invoice templates, e-way bill readiness, tax summaries, and credit note handling.', icon: 'ri-bill-line' },
      { title: 'Accounts & Expense Tracking', desc: 'Integrated Accounts & Expense Tracking covering receivables, payables, payment receipts, daily expense vouchers, bank reconciliation, and profit/loss visibility.', icon: 'ri-bank-card-line' },
      { title: 'Warehouse, Dispatch & Production Workflow', desc: 'Structured Warehouse & Dispatch Management with packing slips and delivery challans, plus Production / Operations Workflow Tracking (BOM, work orders, wastage control).', icon: 'ri-truck-line' },
      { title: 'Multi-Branch Control, Approvals & Analytics', desc: 'Multi-Branch Operations Management, Role-Based Permissions, Approval Workflows for POs and discounts, and comprehensive Reports & Business Analytics Dashboards.', icon: 'ri-bar-chart-box-line' },
    ],
    benefits: [
      { metric: '12', label: 'Core ERP Modules', desc: 'Inventory, Purchase, Sales, GST Billing, Accounts, Warehouse & Production' },
      { metric: 'Real-Time', label: 'Stock Accuracy', desc: 'Live stock balances across all warehouses, stores, and branches' },
      { metric: 'GST Ready', label: 'Compliant Billing', desc: 'Automated tax calculations, HSN/SAC codes, and accounting reports' },
      { metric: 'Multi-Branch', label: 'Centralized Control', desc: 'Manage all locations and user permissions from one head-office dashboard' },
    ],
    process: [
      { step: '01', title: 'Operational & Department Audit', desc: 'Mapping your inventory flow, purchase approvals, billing rules, and accounting touchpoints.' },
      { step: '02', title: 'Modular ERP Blueprint', desc: 'Designing custom ERP modules, user roles, approval chains, and item master structures.' },
      { step: '03', title: 'Iterative Module Development', desc: 'Building and testing Inventory, Purchase, Sales, Billing, Production, and Accounts modules.' },
      { step: '04', title: 'Master Data Migration', desc: 'Cleanly importing your existing SKUs, opening stock, customer ledgers, and vendor records.' },
      { step: '05', title: 'Go-Live, Staff Training & Support', desc: 'Department-wise staff training, parallel run validation, and dedicated ongoing support.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Barcode / POS APIs', 'Tally / GST APIs'],
    industries: ['Manufacturing', 'Wholesale & Distribution', 'Retail Chains', 'Construction', 'Healthcare & Hospitals', 'Education', 'Hospitality', 'Logistics'],
    faqs: [
      { q: 'What core capabilities are included in your ERP software?', a: 'Our ERP software includes all 12 core enterprise capabilities: (1) Inventory & Stock Management, (2) Purchase & Vendor Management, (3) Sales Order Management, (4) Billing & GST Invoicing, (5) Accounts & Expense Tracking, (6) Multi-Branch Operations Management, (7) Warehouse & Dispatch Management, (8) Production / Operations Workflow Tracking, (9) Role-Based Permissions, (10) Reports & Business Analytics, (11) Low Stock Alerts & Reorder Management, and (12) Approval Workflows.' },
      { q: 'Can the ERP be customized for our specific industry?', a: 'Yes. Whether you run a manufacturing unit needing Bill of Materials (BOM) and job-work tracking, a trading/distribution business needing multi-godown stock and credit limits, or a service enterprise needing project billing, we tailor every module to your workflow.' },
      { q: 'Does it support multiple branches and role-based user access?', a: 'Yes. You can manage multiple branches, warehouses, and cost centers from a single system while restricting each user to their specific branch, department, and approval limit.' },
    ],
    caseStudy: {
      client: 'Multi-Warehouse Distribution & Manufacturing Enterprise',
      challenge: 'Stock discrepancies across warehouses, manual PO approvals, and delayed GST billing reconciliation were slowing down order dispatch.',
      solution: 'Built a custom cloud ERP unifying inventory, barcode dispatch, purchase approvals, GST invoicing, vendor payables, and live branch analytics.',
      results: ['Real-time stock visibility across all warehouses', 'Automated low-stock alerts and purchase approval workflows', 'Instant GST invoice and delivery challan generation', 'Centralized management analytics for faster decision-making'],
    },
  },

  // 3. CRM Software Development
  {
    slug: 'crm-solutions',
    name: 'CRM Software Development',
    tagline: 'Capture Every Lead, Automate Follow-Ups, and Close More Sales',
    heroDesc:
      'AI Software Technology builds custom CRM software designed around your sales process — featuring automated lead capture from Facebook, Instagram, Google & websites, WhatsApp & email integration, quotation builders, and complete sales pipeline visibility.',
    bannerImage:
      '/images/services/crm-solutions.svg',
    icon: 'ri-customer-service-2-line',
    color: 'from-violet-500 to-purple-400',
    features: [
      { title: 'Lead Capture & Multi-Channel Integration', desc: 'Lead Capture & Management, Website Lead Form Integration, Facebook / Instagram / Google Lead Integration, and Customer Database Management in one centralized system.', icon: 'ri-user-add-line' },
      { title: 'Lead Assignment & Follow-Up Automation', desc: 'Lead Source Tracking, Automated Lead Assignment, Lead Status & Stage Tracking, Follow-Up Reminder System, and Call / Meeting Notes Logging so no inquiry ever slips through.', icon: 'ri-notification-badge-line' },
      { title: 'Sales Pipeline & Deal Tracking', desc: 'Visual Sales Pipeline Management, Task & Activity Management, Sales Team Performance Tracking, and Lead Conversion Reports across every stage of your funnel.', icon: 'ri-funnel-line' },
      { title: 'WhatsApp, Email & SMS Integration', desc: 'Built-in WhatsApp Integration, Email & SMS Notification Integration, and automated follow-up templates to engage prospects immediately on their preferred channel.', icon: 'ri-whatsapp-line' },
      { title: 'Quotations, Invoices & Payment Tracking', desc: 'Quotation & Proposal Management, Invoice & Payment Tracking, Customer Support Ticket System, and Client Communication History linked directly to each customer profile.', icon: 'ri-file-list-3-line' },
      { title: 'Role-Based Access, Analytics & Mobile CRM', desc: 'Role-Based User Access Control, Sales Forecasting & Analytics Dashboard, Data Export & Reporting, Multi-Branch / Multi-Team Support, and Mobile-Friendly CRM Access.', icon: 'ri-bar-chart-grouped-line' },
    ],
    benefits: [
      { metric: '24', label: 'Core CRM Capabilities', desc: 'Complete end-to-end lead, pipeline, quotation, and support modules' },
      { metric: 'Instant', label: 'Lead Distribution', desc: 'Auto-assign incoming website, Meta, and Google leads to sales reps' },
      { metric: '100%', label: 'Follow-Up Visibility', desc: 'Automated reminders, call logs, and WhatsApp communication history' },
      { metric: 'Multi-Team', label: 'Role-Based Control', desc: 'Granular permissions for sales executives, managers, and branch heads' },
    ],
    process: [
      { step: '01', title: 'Sales Process & Funnel Mapping', desc: 'Understanding your lead sources, qualification stages, follow-up cadence, and quotation format.' },
      { step: '02', title: 'CRM Architecture & Role Design', desc: 'Structuring territories, team hierarchies, role-based access rules, and custom data fields.' },
      { step: '03', title: 'Channel & Ad Lead Integrations', desc: 'Connecting website forms, Facebook/Instagram Lead Ads, Google Ads, WhatsApp API, and email.' },
      { step: '04', title: 'Quotation, Billing & Dashboard Setup', desc: 'Building dynamic PDF quotation generators, payment trackers, and sales conversion reports.' },
      { step: '05', title: 'Data Migration & Sales Team Training', desc: 'Importing existing customer databases cleanly and training your sales reps and managers.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WhatsApp Business API', 'Meta Graph API', 'Google Ads API', 'AWS'],
    industries: ['Real Estate', 'B2B Services', 'Education & Coaching', 'Healthcare', 'Manufacturing', 'Financial Services', 'Travel & Hospitality', 'Retail'],
    faqs: [
      { q: 'Can the CRM automatically capture leads from Facebook, Instagram, and Google Ads?', a: 'Yes. We integrate directly with Meta Lead Ads, Google Ads, and your website forms so every new inquiry enters the CRM in real time, gets assigned to the right salesperson, and triggers an instant WhatsApp/email greeting.' },
      { q: 'Can sales managers restrict what individual sales executives can view or export?', a: 'Yes. Role-Based User Access Control ensures sales executives only see their assigned leads, while team leads, branch managers, and directors get aggregate pipeline and performance views.' },
      { q: 'Does the CRM work on mobile phones for field sales teams?', a: 'Yes. We provide mobile-friendly web access as well as dedicated Android/iOS mobile CRM apps so field sales teams can update visit notes, send quotations, and log calls on the go.' },
    ],
    caseStudy: {
      client: 'Multi-Channel B2B & Real Estate Sales Operations',
      challenge: 'Leads from Facebook Ads, website forms, and phone calls were tracked in separate Excel sheets, resulting in delayed follow-ups and lead leakage.',
      solution: 'Implemented a custom CRM with automated ad-lead capture, round-robin lead assignment, WhatsApp follow-up integration, and PDF quotation builder.',
      results: ['Centralized 100% of website, social, and walk-in leads', 'Automated follow-up reminders & WhatsApp templates', 'One-click PDF quotation & payment milestone tracking', 'Complete branch-wise and executive-wise conversion reports'],
    },
  },

  // 4. HRMS & Payroll Software
  {
    slug: 'hrms-software',
    name: 'HRMS & Payroll Software',
    tagline: 'Simplify Employee Management, Attendance, Payroll & HR Operations',
    heroDesc:
      'AI Software Technology builds custom HRMS and Payroll software that automates your entire employee lifecycle — from recruitment and onboarding to biometric/GPS attendance, leave management, automated salary slips, PF/ESI compliance, and employee self-service portals.',
    bannerImage:
      '/images/services/hrms-software.svg',
    icon: 'ri-team-line',
    color: 'from-emerald-500 to-teal-400',
    features: [
      { title: 'Employee Database & Onboarding', desc: 'Centralized Employee Database Management, digital document verification, offer letter generation, and structured Recruitment & Onboarding Management.', icon: 'ri-user-follow-line' },
      { title: 'Attendance, Shift & Biometric Integration', desc: 'Attendance & Shift Management with Biometric / Attendance Device Integration, geo-tagged mobile attendance for field staff, overtime rules, and late-mark policies.', icon: 'ri-fingerprint-line' },
      { title: 'Leave & Holiday Management', desc: 'Configurable Leave & Holiday Management with multi-level manager approval workflows, leave balance tracking, comp-offs, and department holiday calendars.', icon: 'ri-calendar-check-line' },
      { title: 'Payroll & Automated Salary Slip Generation', desc: 'One-click Payroll & Salary Slip Generation with customizable earnings/deductions, arrears, loan/advance recovery, and Statutory & Deduction Management (PF/ESI/TDS/PT).', icon: 'ri-money-rupee-circle-line' },
      { title: 'Employee Self-Service Portal & Expense Claims', desc: 'Dedicated Employee Self-Service Portal (web & mobile) for downloading payslips, applying for leaves, and submitting Expense & Reimbursement claims.', icon: 'ri-smartphone-line' },
      { title: 'Performance Appraisal & HR Analytics', desc: 'KRA/KPI goal tracking, periodic Performance & Appraisal Tracking, Department & Role Management, and comprehensive HR Reports & Analytics.', icon: 'ri-line-chart-line' },
    ],
    benefits: [
      { metric: '12', label: 'Complete HR Modules', desc: 'Onboarding, Attendance, Leave, Payroll, PF/ESI, Self-Service & Appraisals' },
      { metric: 'Automated', label: 'Payroll Processing', desc: 'Auto-calculate salaries directly from attendance, shifts, and leaves' },
      { metric: 'Biometric', label: '& Mobile Sync', desc: 'Connect biometric machines and GPS field-staff check-ins seamlessly' },
      { metric: 'Self-Service', label: 'Employee Portal', desc: 'Empower staff to access payslips, leaves, and claims without HR delays' },
    ],
    process: [
      { step: '01', title: 'HR Policy & Salary Structure Audit', desc: 'Understanding your shift timings, leave rules, salary components, PF/ESI applicability, and approval hierarchy.' },
      { step: '02', title: 'HRMS Configuration & Role Setup', desc: 'Setting up departments, designations, branches, grade structures, and role-based access.' },
      { step: '03', title: 'Biometric & Attendance Integration', desc: 'Integrating attendance hardware or mobile GPS check-in workflows with real-time sync.' },
      { step: '04', title: 'Payroll Engine & Self-Service Portal', desc: 'Configuring automated payroll calculations, PDF payslip templates, tax/statutory reports, and employee portals.' },
      { step: '05', title: 'Employee Data Import & HR Training', desc: 'Migrating employee master records and training your HR and accounts teams.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Flutter / React Native', 'Biometric Device SDKs', 'AWS'],
    industries: ['Corporate Enterprises', 'Manufacturing Plants', 'Hospitals & Healthcare', 'Schools & Universities', 'Retail Chains', 'IT & Service Companies', 'Logistics & Field Teams', 'Hospitality'],
    faqs: [
      { q: 'Can your HRMS integrate with our existing biometric attendance machines?', a: 'Yes. We integrate with major biometric fingerprint and face-recognition attendance devices, and also offer GPS-verified mobile attendance for field sales and remote employees.' },
      { q: 'Does the payroll module handle PF, ESI, TDS, and loan deductions?', a: 'Yes. The payroll engine automatically computes earnings, loss-of-pay (LOP) days from attendance, overtime, advances/EMI deductions, and statutory deductions (PF, ESI, Professional Tax, TDS), and generates downloadable PDF salary slips.' },
      { q: 'Do employees get their own login portal?', a: 'Yes. Every employee gets secure access to the Employee Self-Service Portal where they can mark attendance, apply for leave, submit expense claims, and download monthly salary slips.' },
    ],
    caseStudy: {
      client: 'Multi-Location Service & Manufacturing Workforce',
      challenge: 'Manual attendance registers and spreadsheet payroll across multiple shifts took days every month and caused salary calculation disputes.',
      solution: 'Deployed a custom HRMS with biometric device sync, shift scheduling, automated leave approvals, one-click payroll calculation, and an employee self-service portal.',
      results: ['Automated monthly payroll processing from biometric attendance', 'Instant PDF salary slip generation and bank disbursement files', 'Real-time shift and leave visibility across all departments', 'Eliminated manual HR paperwork via Employee Self-Service Portal'],
    },
  },

  // 5. SaaS Application Development
  {
    slug: 'saas-development',
    name: 'SaaS Application Development',
    tagline: 'Launch & Scale Multi-Tenant Cloud SaaS Products',
    heroDesc:
      'AI Software Technology designs, architects, and builds commercial SaaS platforms and subscription software products — complete with multi-tenant architecture, subscription billing, role-based dashboards, API integrations, and cloud scalability.',
    bannerImage:
      '/images/services/saas-development.svg',
    icon: 'ri-cloud-windy-line',
    color: 'from-cyan-500 to-blue-400',
    features: [
      { title: 'Multi-Tenant SaaS Architecture', desc: 'Secure, isolated tenant data models supporting thousands of business customers on a single unified cloud codebase.', icon: 'ri-stack-line' },
      { title: 'Subscription & Payment Gateway Integration', desc: 'Tiered pricing plans, free trials, usage-based billing, automated recurring invoices, and Razorpay/Stripe integration.', icon: 'ri-vip-crown-line' },
      { title: 'Super-Admin & Tenant Dashboards', desc: 'Comprehensive super-admin control panel for tenant management, revenue analytics, feature flags, and customer onboarding.', icon: 'ri-dashboard-2-line' },
      { title: 'Role-Based Access & Team Workspaces', desc: 'Organization workspaces with customizable user roles, team invitations, SSO authentication, and activity audit logs.', icon: 'ri-shield-user-line' },
      { title: 'REST APIs, Webhooks & Integrations', desc: 'Developer-friendly APIs, webhooks, and third-party app integrations (WhatsApp, email, CRM, accounting) for your SaaS users.', icon: 'ri-code-box-line' },
      { title: 'Companion Android & iOS Mobile Apps', desc: 'Cross-platform Flutter or React Native mobile apps synchronized in real time with your cloud SaaS platform.', icon: 'ri-smartphone-line' },
    ],
    benefits: [
      { metric: 'Multi-Tenant', label: 'Cloud Architecture', desc: 'Engineered for data isolation, high concurrency, and horizontal scaling' },
      { metric: 'Recurring', label: 'Billing Ready', desc: 'Built-in subscription tiers, trial periods, and automated invoicing' },
      { metric: 'Web + App', label: 'Unified Ecosystem', desc: 'Seamless synchronization across web dashboards and mobile apps' },
      { metric: 'Full IP', label: 'Code Ownership', desc: 'You own 100% of your SaaS product intellectual property and source code' },
    ],
    process: [
      { step: '01', title: 'Product Strategy & MVP Scope', desc: 'Defining core tenant workflows, subscription tiers, user personas, and a focused MVP release roadmap.' },
      { step: '02', title: 'Multi-Tenant Cloud Architecture', desc: 'Designing database tenancy, authentication, API rate limiting, and cloud infrastructure.' },
      { step: '03', title: 'Product UI/UX & Design System', desc: 'Crafting modern, intuitive SaaS interfaces and onboarding flows that maximize user activation.' },
      { step: '04', title: 'Full-Stack & Billing Development', desc: 'Building tenant workspaces, super-admin controls, payment gateways, and real-time notifications.' },
      { step: '05', title: 'Cloud Deployment, CI/CD & Scaling', desc: 'Deploying on AWS/GCP/Azure with automated CI/CD pipelines, monitoring, and ongoing product engineering.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Stripe', 'Razorpay', 'Flutter'],
    industries: ['B2B SaaS Startups', 'EdTech & LMS', 'HealthTech', 'Hospitality Tech', 'FinTech', 'PropTech', 'HRTech', 'Retail Tech'],
    faqs: [
      { q: 'Can you help us build a commercial SaaS product from scratch?', a: 'Yes. We partner with founders and enterprises to take SaaS ideas from product discovery and UI/UX prototyping to multi-tenant development, payment gateway integration, and cloud launch.' },
      { q: 'How do you handle data security between different customers (tenants)?', a: 'We implement strict tenant isolation at the database and API middleware layers, combined with encrypted data storage, JWT/OAuth authentication, and role-based access controls.' },
      { q: 'Do we own the source code of our SaaS platform?', a: 'Yes. Upon project completion, you receive full ownership of the source code, database schemas, design files, and deployment configurations.' },
    ],
    caseStudy: {
      client: 'Cloud Hotel & Property Operations SaaS',
      challenge: 'Independent hotels needed an affordable, cloud-based all-in-one SaaS platform for reservations, front desk, housekeeping, and POS billing.',
      solution: 'Engineered a multi-tenant cloud SaaS platform with property onboarding, role-specific dashboards, real-time room status sync, and subscription management.',
      results: ['Multi-property cloud onboarding in minutes', 'Real-time synchronization across front desk, housekeeping & billing', 'Role-based web and mobile interfaces for hotel staff', 'Scalable cloud architecture supporting growing subscribers'],
    },
  },

  // 6. Android & iOS App Development
  {
    slug: 'mobile-app-development',
    name: 'Android & iOS App Development',
    tagline: 'High-Performance Android, iOS & Cross-Platform Business Apps',
    heroDesc:
      'AI Software Technology builds reliable, user-friendly mobile applications for Android and iOS — including customer booking & e-commerce apps, field sales & service apps, employee portals, and companion apps for ERP/CRM/SaaS platforms.',
    bannerImage:
      '/images/services/mobile-app-development.svg',
    icon: 'ri-smartphone-line',
    color: 'from-purple-500 to-pink-400',
    features: [
      { title: 'Android & iOS App Development', desc: 'Native and cross-platform mobile applications engineered for smooth performance, intuitive navigation, and device compatibility.', icon: 'ri-smartphone-line' },
      { title: 'Flutter & React Native Apps', desc: 'Single-codebase cross-platform development delivering native-grade speed on both Google Play Store and Apple App Store.', icon: 'ri-flutter-line' },
      { title: 'Customer Booking & E-Commerce Apps', desc: 'Consumer-facing mobile apps with product catalogs, service booking, UPI/card payments, order tracking, and loyalty rewards.', icon: 'ri-shopping-bag-3-line' },
      { title: 'Field Force, Delivery & Staff Apps', desc: 'Internal business apps with GPS attendance, route tracking, on-site job sheets, order collection, and offline data sync.', icon: 'ri-map-pin-user-line' },
      { title: 'Push Notifications & WhatsApp Alerts', desc: 'Real-time Firebase push notifications, in-app chat, and automated WhatsApp/SMS updates to keep users engaged.', icon: 'ri-notification-3-line' },
      { title: 'Secure API & ERP/CRM Synchronization', desc: 'Instant real-time synchronization between mobile apps and your central web admin panel, ERP, CRM, or HRMS database.', icon: 'ri-refresh-line' },
    ],
    benefits: [
      { metric: 'Android + iOS', label: 'Dual Platform Reach', desc: 'Launch across Google Play Store and Apple App Store efficiently' },
      { metric: 'Real-Time', label: 'Backend Sync', desc: 'Connected directly to your central admin dashboard and database' },
      { metric: 'Offline', label: 'Capable Workflows', desc: 'Field staff can capture data even in low-connectivity zones' },
      { metric: 'End-to-End', label: 'Store Publishing', desc: 'Complete assistance with Play Store and App Store submission' },
    ],
    process: [
      { step: '01', title: 'App Requirements & User Flow', desc: 'Defining target users, screen flows, API touchpoints, and platform requirements.' },
      { step: '02', title: 'Mobile UI/UX Prototyping', desc: 'Designing thumb-friendly mobile screens and interactive Figma prototypes.' },
      { step: '03', title: 'App & Backend API Development', desc: 'Building the mobile app alongside secure REST APIs and admin control panels.' },
      { step: '04', title: 'Device, Performance & Security QA', desc: 'Testing across screen sizes, OS versions, network conditions, and payment flows.' },
      { step: '05', title: 'App Store Launch & Maintenance', desc: 'Publishing to Google Play & Apple App Store with ongoing updates and support.' },
    ],
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'REST APIs', 'Razorpay / Stripe'],
    industries: ['Retail & E-Commerce', 'Healthcare & Telemedicine', 'Education & EdTech', 'Logistics & Delivery', 'Real Estate', 'Hospitality', 'Field Services', 'Fitness & Wellness'],
    faqs: [
      { q: 'Should we build our mobile app using Flutter/React Native or native Android/iOS?', a: 'For most business, e-commerce, and SaaS applications, Flutter or React Native is ideal because it allows you to launch on both Android and iOS from a single codebase while delivering smooth native performance.' },
      { q: 'Do you also build the web admin panel and backend for the mobile app?', a: 'Yes. Every mobile app we develop comes with a secure backend API and a web-based admin dashboard so you can manage users, products, orders, content, and reports easily.' },
      { q: 'Do you help with uploading the app to Google Play Store and Apple App Store?', a: 'Yes. We handle the complete build preparation, store listing assets, privacy compliance checks, and submission to both Google Play Store and Apple App Store.' },
    ],
    caseStudy: {
      client: 'Hospitality & Field Operations Mobile Suite',
      challenge: 'Staff relied on paper checklists and phone calls to update room status and service requests, causing delays in guest turnaround.',
      solution: 'Developed a role-based mobile application for staff and management with instant push notifications, one-tap status updates, and real-time sync.',
      results: ['Real-time task and status updates', 'Eliminated paper checklists and manual phone coordination', 'Intuitive mobile interface adopted by staff within days', 'Seamless sync with central web management portal'],
    },
  },

  // 7. Website & Web Application Development
  {
    slug: 'website-development',
    name: 'Website & Web Application Development',
    tagline: 'Modern Business Websites, Web Portals & Custom Web Applications',
    heroDesc:
      'AI Software Technology designs and develops high-performance corporate websites, custom web applications, multi-portal platforms, and client portals that strengthen your brand credibility and streamline digital operations.',
    bannerImage:
      '/images/services/website-development.svg',
    icon: 'ri-global-line',
    color: 'from-blue-500 to-cyan-400',
    features: [
      { title: 'Custom Business & Corporate Websites', desc: 'Professional, conversion-focused B2B and corporate websites built with clean architecture, modern UI/UX, and clear service positioning.', icon: 'ri-layout-4-line' },
      { title: 'Custom Web Applications & Multi-Portal Platforms', desc: 'Interactive customer portals, dealer/distributor portals, booking systems, and browser-based business applications.', icon: 'ri-window-line' },
      { title: 'Admin Control Panels & Dashboards', desc: 'Secure role-based admin dashboards to manage users, content, workflows, bookings, and reports in real time.', icon: 'ri-dashboard-3-line' },
      { title: 'Mobile-First Responsive Design', desc: 'Pixel-perfect layouts across desktops, tablets, and smartphones with fast loading speeds and Core Web Vitals optimization.', icon: 'ri-device-line' },
      { title: 'SEO-Ready & Structured Data Architecture', desc: 'Built-in technical SEO, semantic HTML headings, schema markup, XML sitemaps, and clean URL structures for search visibility.', icon: 'ri-search-eye-line' },
      { title: 'Lead Forms, WhatsApp & CRM Integration', desc: 'Smart inquiry forms, click-to-call, WhatsApp chat integration, and direct lead routing into your CRM or email.', icon: 'ri-chat-check-line' },
    ],
    benefits: [
      { metric: 'Fast', label: 'Loading Speed', desc: 'Optimized assets and modern React/Next.js frontend architecture' },
      { metric: '100%', label: 'Mobile Responsive', desc: 'Seamless browsing and inquiry experience on every screen size' },
      { metric: 'SEO', label: 'Ready Structure', desc: 'Clean metadata, canonical tags, and Schema.org structured data' },
      { metric: 'Lead', label: 'Focused UX', desc: 'Strategic CTAs, WhatsApp integration, and conversion-ready forms' },
    ],
    process: [
      { step: '01', title: 'Brand & Architecture Planning', desc: 'Structuring your sitemap, portal user roles, target audience journey, and conversion goals.' },
      { step: '02', title: 'UI/UX Design & Wireframing', desc: 'Creating modern, brand-aligned layouts and interactive page designs.' },
      { step: '03', title: 'Frontend & Backend Development', desc: 'Coding responsive pages, dynamic CMS/admin sections, forms, and API integrations.' },
      { step: '04', title: 'SEO, Speed & Cross-Device QA', desc: 'Testing responsiveness, form submissions, page speed, and on-page SEO tags.' },
      { step: '05', title: 'Launch, SSL Setup & Support', desc: 'Deploying your live web platform with SSL security, analytics, and ongoing maintenance.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Stripe / Razorpay', 'AWS / Vercel'],
    industries: ['Technology & B2B', 'Healthcare & Clinics', 'Manufacturing & Industrial', 'Education & Coaching', 'Real Estate & Infrastructure', 'Retail & E-Commerce', 'Matrimonial & Community Portals', 'Hospitality'],
    faqs: [
      { q: 'Do you build custom websites and web applications or use generic templates?', a: 'We design and develop custom, responsive websites and web applications tailored to your brand identity, user roles, and operational goals.' },
      { q: 'Can you build a multi-portal web application with user, partner, and admin dashboards?', a: 'Yes. We specialize in multi-portal web platforms where customers, consultants/vendors, and administrators each have dedicated, secure dashboards.' },
      { q: 'Will our website be mobile-friendly and SEO-optimized?', a: 'Yes. Every website we deliver is 100% mobile-responsive and includes technical SEO fundamentals: meta titles/descriptions, OpenGraph tags, Schema.org structured data, and sitemap configuration.' },
    ],
    caseStudy: {
      client: 'Multi-Portal Web Application & Consultation Platform',
      challenge: 'Needed a unified web platform combining public user profiles, partner/consultant onboarding, compatibility matching, and centralized admin oversight.',
      solution: 'Developed a custom responsive multi-portal web application with role-based dashboards, profile management, and booking workflows.',
      results: ['Seamless multi-portal user and consultant experience', 'Mobile-responsive UI across all devices', 'Centralized admin moderation and booking control', 'Structured SEO and fast page transitions'],
    },
  },

  // 8. AI & Business Automation
  {
    slug: 'ai-automation',
    name: 'AI & Business Automation',
    tagline: 'Automate Repetitive Business Work with Practical AI & Smart Workflows',
    heroDesc:
      'AI Software Technology helps businesses eliminate manual data entry, speed up customer responses, and automate repetitive cross-department workflows using practical AI assistants, document processing, and WhatsApp/CRM automation.',
    bannerImage:
      '/images/services/ai-automation.svg',
    icon: 'ri-brain-line',
    color: 'from-emerald-500 to-teal-400',
    features: [
      { title: 'AI Customer Support & Lead Chatbots', desc: '24/7 intelligent chatbots for your website and WhatsApp that answer FAQs, qualify leads, book appointments, and hand off to human agents.', icon: 'ri-robot-2-line' },
      { title: 'Automated Business Workflow Pipelines', desc: 'Trigger-based automation for approvals, task assignments, daily MIS reports, invoice reminders, and cross-departmental alerts.', icon: 'ri-flow-chart' },
      { title: 'Intelligent Document & Invoice Extraction', desc: 'Automated OCR and AI data extraction from invoices, purchase orders, receipts, and forms directly into your ERP or accounting system.', icon: 'ri-file-search-line' },
      { title: 'Cross-System Data Synchronization', desc: 'Connect your website, CRM, ERP, email, Google Sheets, and accounting software so data flows automatically without manual copy-pasting.', icon: 'ri-links-line' },
      { title: 'AI Lead Scoring & Sales Insights', desc: 'Automatically prioritize high-intent leads based on source, engagement, and inquiry details so your sales team focuses on closing.', icon: 'ri-user-star-line' },
      { title: 'Custom Internal AI Knowledge Assistants', desc: 'Private AI assistants trained on your company SOPs, product catalogs, and policies to help your staff find answers in seconds.', icon: 'ri-sparkling-line' },
    ],
    benefits: [
      { metric: '24/7', label: 'Instant Response', desc: 'Engage and qualify incoming customer inquiries around the clock' },
      { metric: 'Reduced', label: 'Manual Data Entry', desc: 'Eliminate repetitive copy-pasting across spreadsheets and apps' },
      { metric: 'Plug-In', label: 'System Integration', desc: 'Works seamlessly with your CRM, ERP, WhatsApp, and email' },
      { metric: 'Practical', label: 'Business ROI', desc: 'Focused on real time-savings and operational speed' },
    ],
    process: [
      { step: '01', title: 'Workflow & Bottleneck Audit', desc: 'Identifying repetitive manual tasks, response delays, and high-volume data entry in your business.' },
      { step: '02', title: 'Automation & AI Blueprint', desc: 'Selecting the right mix of rule-based workflow automation, APIs, and AI models.' },
      { step: '03', title: 'Integration & Bot Development', desc: 'Building and connecting chatbots, WhatsApp triggers, document parsers, and CRM/ERP webhooks.' },
      { step: '04', title: 'Guardrails & Accuracy Testing', desc: 'Testing edge cases, human-handoff rules, data privacy, and response accuracy.' },
      { step: '05', title: 'Deployment & Team Handover', desc: 'Launching live with monitoring dashboards and training your team to manage exceptions.' },
    ],
    technologies: ['OpenAI / Gemini APIs', 'Python', 'Node.js', 'WhatsApp Business API', 'REST Webhooks', 'n8n / Custom Workflows', 'PostgreSQL', 'Vector Databases', 'AWS'],
    industries: ['Real Estate', 'Healthcare & Clinics', 'E-Commerce & Retail', 'Education & Coaching', 'Financial & Legal Services', 'Manufacturing', 'Hospitality', 'B2B Enterprises'],
    faqs: [
      { q: 'How can AI automation practically help a small or mid-sized business?', a: 'Practical automations like instant WhatsApp lead capture, 24/7 FAQ/appointment chatbots, automated invoice reminders, and document data extraction save hours of manual work every day.' },
      { q: 'Can AI automation connect with our existing CRM or ERP?', a: 'Yes. We build API bridges and webhook workflows that connect AI tools directly with your custom CRM, ERP, HRMS, or third-party platforms.' },
    ],
    caseStudy: {
      client: 'Enterprise Lead & Operations Workflow Automation',
      challenge: 'Manual data entry between inquiry channels, spreadsheets, and billing systems caused delays and missed customer follow-ups.',
      solution: 'Deployed automated lead qualification, instant WhatsApp/email triggers, and cross-system webhook synchronization.',
      results: ['24/7 instant response to preliminary client inquiries', 'Eliminated repetitive manual data entry across systems', 'Automated daily summary reports for management', 'Seamless handoff to human sales and operations teams'],
    },
  },

  // 9. WhatsApp Business API & Chatbot Integration
  {
    slug: 'whatsapp-automation',
    name: 'WhatsApp Business API & Chatbot Integration',
    tagline: 'Automate Customer Communication, Lead Capture & Order Updates on WhatsApp',
    heroDesc:
      'AI Software Technology integrates WhatsApp Click-to-Chat workflows, official WhatsApp Business API messaging, interactive chatbots, and automated ERP/CRM notifications so your business engages customers instantly.',
    bannerImage:
      '/images/services/whatsapp-automation.svg',
    icon: 'ri-whatsapp-line',
    color: 'from-emerald-500 to-green-400',
    features: [
      { title: 'Interactive WhatsApp Lead Capture Bots', desc: 'Automated conversational flows that greet prospects, ask qualifying questions, capture contact details, and route leads to your sales team.', icon: 'ri-chat-smile-3-line' },
      { title: 'ERP & CRM Transactional Alerts', desc: 'Automatically send order confirmations, PDF GST invoices, dispatch tracking links, and payment reminders directly via WhatsApp.', icon: 'ri-file-paper-2-line' },
      { title: 'Click-to-Chat Website Enquiry Integration', desc: 'Zero-cost structured WhatsApp enquiry forms across your website, service pages, and cost calculators for instant customer engagement.', icon: 'ri-whatsapp-line' },
      { title: 'Multi-Agent Shared Team Inbox', desc: 'Allow multiple sales or support executives to respond to customer WhatsApp queries with conversation assignment and notes.', icon: 'ri-customer-service-2-line' },
      { title: 'Appointment & Follow-Up Reminders', desc: 'Scheduled WhatsApp reminders for clinic appointments, site visits, subscription renewals, and pending quotations.', icon: 'ri-calendar-event-line' },
      { title: 'Catalog & Broadcast Campaign Management', desc: 'Share product catalogs, price lists, and approved template broadcasts with opted-in dealers and customers.', icon: 'ri-megaphone-line' },
    ],
    benefits: [
      { metric: 'Instant', label: 'Lead Engagement', desc: 'Respond to website and ad inquiries within seconds on WhatsApp' },
      { metric: 'Automated', label: 'Order & Bill Alerts', desc: 'Send invoices, LR details, and payment receipts automatically' },
      { metric: 'CRM Sync', label: 'Unified History', desc: 'Every WhatsApp lead and conversation logged in your CRM' },
      { metric: '24/7', label: 'Bot Availability', desc: 'Capture and qualify inquiries even outside office hours' },
    ],
    process: [
      { step: '01', title: 'Communication Flow Mapping', desc: 'Identifying key customer touchpoints: inquiry greeting, quotation, order status, and support.' },
      { step: '02', title: 'Chatbot & Template Design', desc: 'Structuring interactive button menus, message templates, and escalation rules.' },
      { step: '03', title: 'Website, CRM & ERP Integration', desc: 'Connecting WhatsApp triggers with your website forms, CRM pipeline, or billing software.' },
      { step: '04', title: 'End-to-End Message Testing', desc: 'Validating message formatting, PDF attachments, and fallback routing.' },
      { step: '05', title: 'Go-Live & Team Training', desc: 'Launching your automated workflows and training your sales/support staff.' },
    ],
    technologies: ['WhatsApp Business API', 'Click-to-Chat URLs', 'Node.js', 'REST Webhooks', 'Meta Cloud API', 'React', 'PostgreSQL'],
    industries: ['B2B Distribution', 'Real Estate', 'Healthcare & Clinics', 'Education & Coaching', 'Retail & E-Commerce', 'Hospitality', 'Service Centers', 'Logistics'],
    faqs: [
      { q: 'Can you set up both free WhatsApp Click-to-Chat enquiry forms and automated API workflows?', a: 'Yes. We implement 100% free WhatsApp Click-to-Chat structured website enquiry integration as well as official WhatsApp Business API chatbot and ERP/CRM notification workflows based on your needs.' },
      { q: 'Can our ERP or billing software automatically send PDF invoices on WhatsApp?', a: 'Yes. We can integrate your ERP, billing, or order management software with WhatsApp API so invoices, order confirmations, and dispatch updates are sent automatically.' },
    ],
    caseStudy: {
      client: 'B2B Dealer & Customer Inquiry Automation',
      challenge: 'Sales teams manually typed repetitive product details and order statuses on WhatsApp, causing slow response times.',
      solution: 'Integrated structured WhatsApp enquiry capture and automated order/dispatch status notifications connected to the central dashboard.',
      results: ['Instant structured enquiry details from website visitors', 'Automated order confirmation and dispatch notifications', 'Eliminated manual copy-pasting for sales coordinators', 'Higher lead-to-conversation conversion rate'],
    },
  },

  // 10. Inventory Management Software
  {
    slug: 'inventory-management-software',
    name: 'Inventory Management Software',
    tagline: 'Real-Time Multi-Warehouse Stock Control, Batch Tracking & Barcode Automation',
    heroDesc:
      'AI Software Technology develops custom Inventory Management Software that gives you 100% real-time visibility into raw materials, finished goods, batch/expiry dates, multi-godown stock transfers, and automated reorder levels.',
    bannerImage:
      '/images/services/inventory-management-software.svg',
    icon: 'ri-archive-drawer-line',
    color: 'from-cyan-500 to-indigo-500',
    features: [
      { title: 'Multi-Warehouse & Godown Stock Tracking', desc: 'Track live stock quantities across multiple warehouses, branches, racks, and bins from a single centralized dashboard.', icon: 'ri-store-3-line' },
      { title: 'Barcode & QR Code Inventory Scanning', desc: 'Generate and scan item barcodes/QR codes for fast inward GRN, stock audits, picking, packing, and outward dispatch.', icon: 'ri-barcode-box-line' },
      { title: 'Batch, Lot & Expiry Date Management', desc: 'FIFO/FEFO stock allocation with batch numbers, manufacturing dates, and expiry alerts for lubricants, chemicals, pharma, and FMCG.', icon: 'ri-calendar-todo-line' },
      { title: 'Inward (GRN), Outward & Stock Transfers', desc: 'Structured Goods Receipt Notes, delivery challans, inter-godown stock transfer approvals, and damage/wastage adjustments.', icon: 'ri-exchange-box-line' },
      { title: 'Low-Stock Alerts & Auto Reorder Levels', desc: 'Configurable minimum stock thresholds that trigger instant alerts and draft purchase requisitions before stockouts occur.', icon: 'ri-alarm-warning-line' },
      { title: 'Stock Valuation & Aging Analytics', desc: 'Real-time inventory valuation, fast vs. slow-moving item reports, dead-stock identification, and item-wise ledger history.', icon: 'ri-Pie-chart-2-line' },
    ],
    benefits: [
      { metric: 'Real-Time', label: 'Stock Visibility', desc: 'Know exact available, reserved, and in-transit stock at any second' },
      { metric: 'Zero', label: 'Stockout Surprises', desc: 'Automated low-stock alerts and reorder point notifications' },
      { metric: 'Barcode', label: '& Batch Ready', desc: 'Eliminate manual counting errors during inward and dispatch' },
      { metric: 'Multi-Godown', label: 'Unified Control', desc: 'Manage all warehouses and branch stores from one login' },
    ],
    process: [
      { step: '01', title: 'SKU & Warehouse Mapping', desc: 'Structuring your item categories, units of measure, pack sizes, and warehouse locations.' },
      { step: '02', title: 'Workflow & Barcode Design', desc: 'Configuring inward GRN, stock transfer, barcode label formats, and approval rules.' },
      { step: '03', title: 'Software & Scanner Integration', desc: 'Building the web/mobile inventory platform and integrating barcode/QR hardware.' },
      { step: '04', title: 'Opening Stock Migration', desc: 'Importing your item master and verified opening stock balances cleanly.' },
      { step: '05', title: 'Storekeeper Training & Go-Live', desc: 'Hands-on training for warehouse and dispatch teams with ongoing support.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Barcode / QR APIs', 'Flutter Mobile Scanner', 'AWS'],
    industries: ['Manufacturing', 'Lubricants & Chemicals', 'Wholesale & Distribution', 'Retail & Supermarkets', 'Pharma & Healthcare', 'Auto Parts & Hardware', 'E-Commerce Fulfillment', 'FMCG'],
    faqs: [
      { q: 'Can this software track products with multiple pack sizes, grades, or batches?', a: 'Yes. We design custom item masters that support multiple pack sizes (e.g., 500ml, 1L, 5L, 20L bucket, 210L drum), product grades, batch numbers, and conversion units.' },
      { q: 'Can it connect with our billing and order management system?', a: 'Yes. Inventory automatically reserves stock when an order is approved and deducts stock when a dispatch challan or GST invoice is generated.' },
    ],
    caseStudy: {
      client: 'Multi-Godown Industrial & Distribution Inventory',
      challenge: 'Sales teams booked orders without knowing actual godown stock, leading to partial dispatches and manual stock verification calls.',
      solution: 'Implemented a centralized inventory management system with pack-size tracking, reserved vs. available stock visibility, and low-stock alerts.',
      results: ['100% real-time stock visibility for sales and warehouse teams', 'Eliminated over-booking of out-of-stock SKUs', 'Complete batch and inward-outward audit trail', 'Faster physical stock reconciliation with barcode support'],
    },
  },

  // 11. Billing & GST Software
  {
    slug: 'billing-gst-software',
    name: 'Billing & GST Software',
    tagline: 'Fast, Accurate GST Invoicing, Ledger Accounting & Payment Tracking',
    heroDesc:
      'AI Software Technology builds custom Billing & GST Software tailored to your pricing tiers, tax rules, credit limits, e-invoicing workflows, and customer/vendor ledger management.',
    bannerImage:
      '/images/services/billing-gst-software.svg',
    icon: 'ri-bill-line',
    color: 'from-blue-500 to-indigo-400',
    features: [
      { title: 'Custom GST Invoice & Proforma Builder', desc: 'Generate branded GST tax invoices, proforma invoices, quotations, delivery challans, and credit/debit notes in one click.', icon: 'ri-file-text-line' },
      { title: 'HSN/SAC Tax Calculation & GST Reports', desc: 'Automated CGST, SGST, and IGST calculations with HSN/SAC summaries and exportable GSTR-1, GSTR-3B, and tax register reports.', icon: 'ri-percent-line' },
      { title: 'Customer & Supplier Party Ledgers', desc: 'Complete party-wise ledger statements, opening balances, bill-by-bill payment adjustment, and outstanding aging analysis.', icon: 'ri-book-read-line' },
      { title: 'Dealer Price Lists & Discount Rules', desc: 'Support multiple price tiers (distributor, dealer, retail), scheme discounts, credit limits, and approval workflows.', icon: 'ri-price-tag-3-line' },
      { title: 'WhatsApp & Email Invoice Sharing', desc: 'Instantly send PDF invoices, payment receipts, and outstanding payment reminders to customers via WhatsApp and email.', icon: 'ri-whatsapp-line' },
      { title: 'Multi-Branch & Multi-User Counter Billing', desc: 'Role-based billing access for multiple branches or billing operators with daily cash, UPI, and bank collection summaries.', icon: 'ri-B2B-line' },
    ],
    benefits: [
      { metric: 'One-Click', label: 'GST Invoicing', desc: 'Convert quotations or sales orders into tax invoices in seconds' },
      { metric: '100%', label: 'Tax Accuracy', desc: 'Automated CGST/SGST/IGST and HSN summary calculations' },
      { metric: 'Live', label: 'Receivables Tracking', desc: 'Track pending payments, credit limits, and aging bills effortlessly' },
      { metric: 'Instant', label: 'WhatsApp Sharing', desc: 'Share branded PDF invoices and ledger statements directly' },
    ],
    process: [
      { step: '01', title: 'Billing & Tax Workflow Audit', desc: 'Reviewing your invoice format, price tiers, discount rules, and GST reporting needs.' },
      { step: '02', title: 'Invoice Template & Ledger Design', desc: 'Customizing PDF invoice layouts, terms, company branding, and party ledger structures.' },
      { step: '03', title: 'Billing Engine & Inventory Sync', desc: 'Connecting invoicing with item stock deduction, credit limits, and payment logging.' },
      { step: '04', title: 'Tax Calculation & Report QA', desc: 'Validating IGST/CGST/SGST edge cases, credit notes, and exportable accounting sheets.' },
      { step: '05', title: 'Accounts Team Training & Go-Live', desc: 'Onboarding your billing and accounts staff with ongoing support.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PDF Generation Engine', 'GST / E-Invoice APIs', 'Tally Export', 'AWS'],
    industries: ['Wholesale & Trading', 'Manufacturing', 'Retail & Distribution', 'Service Agencies', 'Healthcare & Pharmacies', 'Hospitality', 'Construction & Contractors', 'Logistics'],
    faqs: [
      { q: 'Can you customize the PDF invoice design to match our exact company format?', a: 'Yes. Unlike rigid accounting packages, we design the PDF tax invoice, challan, and quotation templates to match your exact branding, columns, bank details, and terms.' },
      { q: 'Can we export billing data for our CA and GST filing?', a: 'Yes. You can export GST sales registers, purchase registers, HSN summaries, and party ledgers to Excel/CSV or Tally-compatible formats.' },
    ],
    caseStudy: {
      client: 'B2B Distribution & Multi-Tier Billing System',
      challenge: 'Different dealer price lists and manual invoice preparation caused billing bottlenecks and delayed payment follow-ups.',
      solution: 'Developed a custom GST billing and ledger system with dealer-specific pricing, instant PDF generation, and automated outstanding tracking.',
      results: ['Invoices generated in under 15 seconds from approved orders', 'Eliminated manual pricing and GST calculation errors', 'Real-time visibility into dealer-wise outstanding receivables', 'One-click PDF invoice sharing on WhatsApp'],
    },
  },

  // 12. Order Management Software
  {
    slug: 'order-management-software',
    name: 'Order Management Software',
    tagline: 'Streamline B2B Dealer Orders, Approvals, Inventory Allocation & Dispatch',
    heroDesc:
      'AI Software Technology builds custom Order Management Software (OMS) that centralizes order booking from dealers, distributors, sales executives, and online channels — providing complete visibility from order placement to warehouse dispatch.',
    bannerImage:
      '/images/services/order-management-software.svg',
    icon: 'ri-file-list-3-line',
    color: 'from-amber-500 to-cyan-400',
    features: [
      { title: 'Centralized B2B Dealer & Sales Order Portal', desc: 'Dedicated web and mobile portal where dealers, distributors, and field sales reps can place structured orders 24/7.', icon: 'ri-shopping-cart-line' },
      { title: 'SKU, Grade & Pack-Size Order Matrix', desc: 'Support complex industrial catalogs with product grades, pack sizes, carton/drum quantities, and dynamic tier pricing.', icon: 'ri-grid-line' },
      { title: 'Credit Check & Multi-Level Order Approval', desc: 'Automatic verification of party credit limits and outstanding dues before routing orders to accounts and dispatch.', icon: 'ri-checkbox-circle-line' },
      { title: 'Real-Time Order Lifecycle & Status Tracking', desc: 'Track every order across Pending, Approved, In-Production/Packing, Dispatched, and Delivered stages in real time.', icon: 'ri-time-line' },
      { title: 'Warehouse Picking, Packing & Dispatch Sync', desc: 'Generate warehouse pick-lists, packing slips, delivery challans, and transport LR details directly from approved orders.', icon: 'ri-truck-line' },
      { title: 'Order Analytics, Repeat Orders & MIS Reports', desc: 'One-click repeat order booking for dealers plus executive analytics on top-selling SKUs, regional demand, and fulfillment speed.', icon: 'ri-bar-chart-2-line' },
    ],
    benefits: [
      { metric: 'Zero', label: 'Lost or Misread Orders', desc: 'Replace scattered phone calls and WhatsApp messages with structured digital orders' },
      { metric: 'Real-Time', label: 'Fulfillment Status', desc: 'Dealers and sales teams see live approval and dispatch progress' },
      { metric: 'Faster', label: 'Order-to-Dispatch', desc: 'Instant routing from order booking to accounts approval and godown packing' },
      { metric: '100%', label: 'Catalog Accuracy', desc: 'Standardized SKU codes, pack sizes, and dealer price lists' },
    ],
    process: [
      { step: '01', title: 'Order & Dealer Workflow Mapping', desc: 'Understanding how orders arrive, how pricing/credit is checked, and how warehouse dispatch operates.' },
      { step: '02', title: 'Catalog & Role Architecture', desc: 'Setting up product categories, pack variants, dealer profiles, sales territories, and admin roles.' },
      { step: '03', title: 'Order Portal & Admin Development', desc: 'Building the fast order placement interface, approval queues, and dispatch tracking modules.' },
      { step: '04', title: 'ERP / Inventory / WhatsApp Sync', desc: 'Connecting order status updates with stock reservation, billing, and WhatsApp notifications.' },
      { step: '05', title: 'Dealer Onboarding & Launch', desc: 'Launching the portal with simple logins for dealers, sales staff, and warehouse operators.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WhatsApp API', 'REST APIs', 'AWS'],
    industries: ['Lubricant & Chemical Manufacturing', 'FMCG & Consumer Goods', 'Auto Components & Spare Parts', 'Wholesale & Distribution', 'Building Materials', 'Pharmaceutical Distribution', 'Textiles & Garments', 'Industrial Supplies'],
    faqs: [
      { q: 'Can dealers and field sales executives place orders from their mobile phones?', a: 'Yes. Our Order Management Software is 100% mobile-responsive and can also be deployed as a dedicated Android/iOS app so dealers and sales reps can book orders in seconds from anywhere.' },
      { q: 'Have you built order management software for manufacturing and lubricant distribution?', a: 'Yes! Check out our live portfolio project — Lubricant Order Management Software (order.maxmol.in) — built specifically to streamline lubricant dealer ordering, pack sizes, and dispatch workflows.' },
    ],
    caseStudy: {
      client: 'Lubricant Order Management Software (order.maxmol.in)',
      challenge: 'Manual order collection via phone calls and WhatsApp messages caused SKU/pack-size confusion, delayed approvals, and lack of dispatch visibility.',
      solution: 'Developed a dedicated web-based B2B Order Management Platform with structured SKU/pack selection, order approval queues, and real-time dispatch tracking.',
      results: ['Centralized digital order booking for dealers and sales staff', 'Eliminated manual SKU and pack-size entry errors', 'Real-time visibility from order placement to dispatch', 'Streamlined coordination between sales, accounts, and warehouse'],
    },
  },

  // 13. Manufacturing Management Software
  {
    slug: 'manufacturing-software',
    name: 'Manufacturing Management Software',
    tagline: 'Digitize Production Planning, Bill of Materials (BOM), Shop Floor & Quality Control',
    heroDesc:
      'AI Software Technology develops custom Manufacturing ERP and Shop-Floor Management Software that connects raw material procurement, multi-level Bill of Materials (BOM), batch production, machine utilization, quality inspection, and finished goods dispatch.',
    bannerImage:
      '/images/services/manufacturing-software.svg',
    icon: 'ri-settings-5-line',
    color: 'from-blue-600 to-cyan-400',
    features: [
      { title: 'Bill of Materials (BOM) & Recipe Management', desc: 'Multi-level BOM and formulation management defining exact raw material ratios, packaging components, and standard costing.', icon: 'ri-list-settings-line' },
      { title: 'Production Planning & Work Orders', desc: 'Convert sales demand into scheduled production batches and job cards with stage-wise shop-floor progress tracking.', icon: 'ri-calendar-check-line' },
      { title: 'Raw Material Issue & Wastage Tracking', desc: 'Track material requisitions from store to production floor, monitor actual vs. standard consumption, and log scrap/wastage.', icon: 'ri-scales-3-line' },
      { title: 'Quality Control (QC) & Batch Traceability', desc: 'Inward raw-material QC, in-process quality checks, lab test parameters, and complete batch traceability from vendor to buyer.', icon: 'ri-shield-check-line' },
      { title: 'Sub-Contracting & Job-Work Management', desc: 'Track material sent to external job-workers, challan reconciliation, processing charges, and finished material receipt.', icon: 'ri-exchange-funds-line' },
      { title: 'Production Costing & Plant MIS Reports', desc: 'Real-time batch costing, machine downtime logs, shift-wise output reports, and finished-goods inventory synchronization.', icon: 'ri-file-chart-line' },
    ],
    benefits: [
      { metric: 'End-to-End', label: 'Plant Visibility', desc: 'Track raw materials, WIP, quality, and finished goods in one system' },
      { metric: 'Accurate', label: 'BOM & Costing', desc: 'Control raw material consumption and prevent unaccounted wastage' },
      { metric: '100%', label: 'Batch Traceability', desc: 'Trace every finished batch back to raw material lots and QC logs' },
      { metric: 'Connected', label: 'Sales & Dispatch', desc: 'Align production schedules directly with pending dealer orders' },
    ],
    process: [
      { step: '01', title: 'Plant & Shop-Floor Study', desc: 'Mapping your raw material stores, BOM formulas, production stages, QC checks, and packing flows.' },
      { step: '02', title: 'Manufacturing Module Design', desc: 'Structuring BOM masters, job cards, shift logs, and role-based supervisor screens.' },
      { step: '03', title: 'Iterative System Development', desc: 'Building production, store issue, QC, and finished-goods inventory modules.' },
      { step: '04', title: 'Pilot Batch Validation', desc: 'Running live production batches in parallel to verify consumption and costing accuracy.' },
      { step: '05', title: 'Supervisor Training & Go-Live', desc: 'Training plant supervisors, storekeepers, and management with dedicated support.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Barcode / Industrial IoT APIs', 'Docker', 'AWS'],
    industries: ['Lubricants & Chemicals', 'Auto Components', 'FMCG & Food Processing', 'Pharmaceuticals', 'Plastics & Packaging', 'Electronics & Electricals', 'Textiles', 'Heavy Engineering'],
    faqs: [
      { q: 'Can this software handle custom formulations or multi-stage manufacturing processes?', a: 'Yes. We customize the BOM and production stages around your exact manufacturing process — whether discrete assembly or batch/process manufacturing (like lubricants, chemicals, or food).' },
      { q: 'Does it integrate with factory attendance and order management?', a: 'Yes. We can unify Manufacturing Management with Order Management and Factory Attendance & Workforce Management in a single connected ecosystem.' },
    ],
    caseStudy: {
      client: 'Industrial Batch Manufacturing & Dispatch Operations',
      challenge: 'Lack of real-time coordination between incoming dealer orders, raw material stock, and batch production schedules caused dispatch delays.',
      solution: 'Deployed a custom manufacturing and order workflow tracking BOM consumption, batch production status, and finished-goods dispatch.',
      results: ['Synchronized production planning with live order demand', 'Accurate tracking of raw material issue vs. batch output', 'Complete batch-wise quality and dispatch records', 'Reduced manual paperwork on the shop floor'],
    },
  },

  // 14. Hospital & Clinic Management Software
  {
    slug: 'hospital-management-software',
    name: 'Hospital & Clinic Management Software',
    tagline: 'Digitize OPD/IPD, Appointments, EMR, Pharmacy, Lab & Hospital Billing',
    heroDesc:
      'AI Software Technology develops custom Hospital Management Information Systems (HMIS) and Clinic Software designed for doctors, multi-specialty hospitals, diagnostic centers, and clinics to deliver seamless patient care.',
    bannerImage:
      '/images/services/hospital-management-software.svg',
    icon: 'ri-hospital-line',
    color: 'from-teal-500 to-cyan-400',
    features: [
      { title: 'OPD Appointment & Token Queue System', desc: 'Online and walk-in patient registration, doctor slot scheduling, token display integration, and automated WhatsApp appointment reminders.', icon: 'ri-calendar-schedule-line' },
      { title: 'Electronic Medical Records (EMR) & E-Prescriptions', desc: 'Fast digital case sheets, patient medical history, vitals logging, customizable prescription templates, and multilingual dosage instructions.', icon: 'ri-stethoscope-line' },
      { title: 'IPD, Bed Management & Discharge Summaries', desc: 'Real-time ward/bed occupancy dashboard, admission notes, nursing charts, OT scheduling, and structured discharge summary generation.', icon: 'ri-hotel-bed-line' },
      { title: 'Pathology Lab & Radiology (LIMS) Integration', desc: 'Sample barcode tracking, automated test result entry, doctor approval, and instant PDF lab report delivery to patients on WhatsApp.', icon: 'ri-microscope-line' },
      { title: 'In-House Pharmacy & Medicine Inventory', desc: 'Prescription-linked pharmacy billing, batch & expiry tracking, substitute medicine lookup, and low-stock reorder alerts.', icon: 'ri-capsule-line' },
      { title: 'OPD/IPD Billing, Packages & TPA Insurance', desc: 'Consolidated hospital billing, health package management, doctor consultation payouts, and daily revenue collection reports.', icon: 'ri-bill-line' },
    ],
    benefits: [
      { metric: '3-Step', label: 'Patient Registration', desc: 'Fast reception check-in and token generation for busy OPD hours' },
      { metric: 'Paperless', label: 'EMR & Prescriptions', desc: 'Access complete patient medical history and lab reports in one click' },
      { metric: 'Connected', label: 'OPD + Lab + Pharmacy', desc: 'Doctor prescriptions flow directly to pharmacy and diagnostic counters' },
      { metric: 'WhatsApp', label: 'Patient Alerts', desc: 'Automated appointment confirmations, lab PDFs, and follow-up reminders' },
    ],
    process: [
      { step: '01', title: 'Clinical Workflow Assessment', desc: 'Studying your reception, doctor chamber, IPD ward, lab, and pharmacy workflows.' },
      { step: '02', title: 'Role-Based HMIS Customization', desc: 'Configuring specialties, doctor schedules, prescription formats, and tariff masters.' },
      { step: '03', title: 'Module Integration & Setup', desc: 'Connecting OPD, IPD, EMR, Pharmacy, Lab, and Billing modules with WhatsApp alerts.' },
      { step: '04', title: 'Data Security & Staff Training', desc: 'Training receptionists, nurses, pharmacists, and doctors on their respective screens.' },
      { step: '05', title: 'Go-Live & Dedicated Support', desc: 'Smooth rollout during clinic/hospital hours with responsive technical support.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'HL7 / FHIR Ready', 'WhatsApp Business API', 'Barcode / Thermal Print', 'AWS'],
    industries: ['Multi-Specialty Hospitals', 'Outpatient Clinics', 'Dental & Eye Clinics', 'Diagnostic & Pathology Labs', 'IVF & Maternity Centers', 'Physiotherapy & Wellness', 'Pharmacy Chains', 'Telemedicine Portals'],
    faqs: [
      { q: 'Is the software easy for reception staff and doctors to use during busy OPD hours?', a: 'Yes. Our clinic and hospital interfaces are designed for speed — doctors can generate e-prescriptions in under 30 seconds using pre-set templates, and receptionists can register patients in 3 clicks.' },
      { q: 'Can patients book appointments online through our website?', a: 'Yes. We integrate an online appointment booking widget with your clinic or hospital website that syncs directly with the reception calendar.' },
    ],
    caseStudy: {
      client: 'Mansha Clinic & Healthcare Appointment Platform',
      challenge: 'Manual appointment diaries and phone coordination led to long patient waiting times and scattered medical records.',
      solution: 'Built a digital clinic and appointment platform with doctor profiles, 3-step appointment booking, digital patient records, and automated reminders.',
      results: ['Streamlined 3-step online and walk-in appointment booking', 'Centralized digital patient records and visit history', 'Reduced reception phone workload and waiting-room crowding', 'Mobile-friendly access for patients and doctors'],
    },
  },

  // 15. Hotel Management Software
  {
    slug: 'hotel-management-software',
    name: 'Hotel Management Software',
    tagline: 'All-in-One Cloud PMS for Room Reservations, Front Desk, Housekeeping & Restaurant POS',
    heroDesc:
      'AI Software Technology develops custom Hotel & Hospitality Management Software (PMS) that unifies direct bookings, front-desk check-in/out, room rack status, housekeeping workflows, restaurant KOT/POS billing, and financial analytics.',
    bannerImage:
      '/images/services/hotel-management-software.svg',
    icon: 'ri-hotel-line',
    color: 'from-amber-500 to-rose-400',
    features: [
      { title: 'Reservation Calendar & Direct Booking Engine', desc: 'Visual tape-chart room reservation calendar, group bookings, corporate rates, and commission-free website booking integration.', icon: 'ri-calendar-2-line' },
      { title: 'Front Desk Check-In, ID Scan & Folio Billing', desc: 'Fast guest check-in/check-out, digital ID upload, room upgrades, split folios, advance deposits, and automated GST invoices.', icon: 'ri-key-2-line' },
      { title: 'Real-Time Housekeeping & Maintenance Tracker', desc: 'Live room status board (Clean, Dirty, Occupied, Under Maintenance) with mobile task updates for housekeeping staff.', icon: 'ri-Sparkling-2-line' },
      { title: 'Restaurant POS, KOT & Room Service Posting', desc: 'Table management, Kitchen Order Tickets (KOT), minibar/laundry charges, and instant bill posting directly to the guest’s room folio.', icon: 'ri-restaurant-2-line' },
      { title: 'Banquet, Conference & Event Booking', desc: 'Manage banquet hall availability, catering packages, event billing, and advance payment schedules.', icon: 'ri-goblet-line' },
      { title: 'Multi-Property Analytics & Night Audit Reports', desc: 'Occupancy %, RevPAR, ADR, daily collection summaries, store inventory, and multi-property owner dashboards.', icon: 'ri-line-chart-line' },
    ],
    benefits: [
      { metric: 'Unified', label: 'Front Desk + POS + Housekeeping', desc: 'Every department synchronized in real time on one cloud platform' },
      { metric: 'Zero', label: 'Unbilled Room Charges', desc: 'Restaurant and room-service bills post directly to guest folios' },
      { metric: 'Role-Based', label: 'Staff Portals', desc: 'Dedicated interfaces for reception, housekeeping, kitchen, and owners' },
      { metric: 'Multi-Property', label: 'Cloud Access', desc: 'Monitor occupancy and revenue from anywhere on web or mobile' },
    ],
    process: [
      { step: '01', title: 'Property & Room Tariff Mapping', desc: 'Configuring room categories, seasonal tariffs, meal plans (EP/CP/MAP/AP), and tax slabs.' },
      { step: '02', title: 'Front Desk & POS Workflow Setup', desc: 'Setting up check-in flows, restaurant menus, KOT printers, and folio billing templates.' },
      { step: '03', title: 'Housekeeping & Staff App Rollout', desc: 'Enabling mobile room-status updates and role-based permissions for hotel staff.' },
      { step: '04', title: 'Parallel Run & Night Audit QA', desc: 'Verifying GST invoices, shift handovers, and daily night-audit revenue reports.' },
      { step: '05', title: 'Staff Training & 24/7 Support', desc: 'On-site/remote training for front-office and F&B teams with ongoing support.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Real-Time WebSockets', 'Thermal POS Print', 'Razorpay', 'AWS'],
    industries: ['Hotels & Resorts', 'Boutique Hotels', 'Service Apartments', 'Banquet & Convention Centers', 'Restaurants & Cafes', 'Clubs & Guest Houses', 'Hostels & Co-Living'],
    faqs: [
      { q: 'Can restaurant and room-service bills be transferred automatically to the room invoice at checkout?', a: 'Yes. Any KOT or POS order marked to a room number is automatically added to that guest’s master room folio so nothing is missed during checkout.' },
      { q: 'Have you developed a complete Hotel Management Software platform?', a: 'Yes! Our portfolio features a full-scale Hotel Management Software platform with role-based interfaces for Admins, Receptionists, Housekeeping, and Guests.' },
    ],
    caseStudy: {
      client: 'All-in-One Cloud Hotel Management Platform',
      challenge: 'Disconnected front-desk registers, housekeeping phone calls, and separate restaurant billing led to check-in delays and unbilled room service charges.',
      solution: 'Built a unified cloud Hotel Management System with real-time room rack status, 3-step guest booking, mobile housekeeping sync, and integrated POS folio billing.',
      results: ['Real-time room status synchronization across front desk and housekeeping', 'Integrated restaurant KOT and room-folio GST billing', 'Role-based dashboards for Admin, Reception, Staff, and Guests', 'Complete occupancy and daily revenue analytics for owners'],
    },
  },

  // 16. Logistics & Shipment Tracking Software
  {
    slug: 'logistics-software',
    name: 'Logistics & Shipment Tracking Software',
    tagline: 'End-to-End Consignment Booking (LR/Bilty), Fleet Dispatch & Live Shipment Tracking',
    heroDesc:
      'AI Software Technology builds custom Logistics, Transport ERP, and Courier/Shipment Tracking Software that digitizes consignment booking, manifest loading, fleet trip management, driver expenses, and live customer tracking.',
    bannerImage:
      '/images/services/logistics-software.svg',
    icon: 'ri-truck-line',
    color: 'from-sky-500 to-indigo-500',
    features: [
      { title: 'Consignment Booking & Digital LR / Bilty', desc: 'Fast booking of FTL/LTL consignments, automated freight calculation, e-way bill integration, and instant multi-copy LR/Bilty printing.', icon: 'ri-file-list-2-line' },
      { title: 'Hub Manifest, Loading & Unloading Tracking', desc: 'Branch-to-branch manifest creation, barcode package scanning, transit hub arrival logs, and shortage/damage remarks.', icon: 'ri-inbox-unarchive-line' },
      { title: 'Live Customer Shipment Tracking Portal', desc: 'Public tracking widget and automated WhatsApp/SMS notifications so consignors and consignees can track shipment status in real time.', icon: 'ri-map-pin-time-line' },
      { title: 'Fleet, Vehicle & Driver Trip Management', desc: 'Track owned and market-hired vehicles, driver advances, diesel/fuel logs, toll expenses, tyre/maintenance schedules, and document expiry.', icon: 'ri-steering-2-line' },
      { title: 'Digital Proof of Delivery (e-POD)', desc: 'Driver/delivery mobile app to capture receiver signature, delivery photo, OTP verification, and instant POD upload to head office.', icon: 'ri-camera-lens-line' },
      { title: 'Transport Billing, To-Pay & Party Ledgers', desc: 'Manage Paid, To-Pay, and TBB (To Be Billed) corporate contracts, monthly consolidated freight invoicing, and broker payables.', icon: 'ri-money-rupee-circle-line' },
    ],
    benefits: [
      { metric: 'Live', label: 'Consignment Visibility', desc: 'Track every LR and vehicle from booking branch to final delivery' },
      { metric: 'Instant', label: 'Digital e-POD', desc: 'Eliminate weeks of waiting for physical signed POD receipts to bill clients' },
      { metric: 'Controlled', label: 'Fleet & Fuel Costs', desc: 'Monitor trip-wise profitability, fuel mileage, and driver advances' },
      { metric: 'Automated', label: 'Freight Billing', desc: 'Support Paid, To-Pay, and contractual TBB corporate rate cards' },
    ],
    process: [
      { step: '01', title: 'Transport & Hub Network Audit', desc: 'Mapping your booking branches, transit hubs, rate contracts, and fleet operations.' },
      { step: '02', title: 'LR, Manifest & Billing Blueprint', desc: 'Designing digital bilty formats, trip sheets, and party billing workflows.' },
      { step: '03', title: 'Web Portal & Driver App Development', desc: 'Building branch booking dashboards, public tracking pages, and mobile e-POD apps.' },
      { step: '04', title: 'GPS, E-Way Bill & WhatsApp Sync', desc: 'Connecting live tracking notifications and statutory transport integrations.' },
      { step: '05', title: 'Branch Rollout & Training', desc: 'Onboarding booking clerks, hub supervisors, and accounts teams.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Flutter Driver App', 'Google Maps / GPS APIs', 'WhatsApp API', 'AWS'],
    industries: ['3PL & Logistics Providers', 'Fleet Owners & Transporters', 'Courier & Parcel Networks', 'Cold Chain Logistics', 'Manufacturing Dispatch', 'E-Commerce Delivery', 'Freight Forwarders'],
    faqs: [
      { q: 'Can customers track their shipment using an LR or AWB number on our website?', a: 'Yes. We provide a real-time shipment tracking page on your website as well as automated WhatsApp alerts at booking, dispatch, out-for-delivery, and delivered stages.' },
      { q: 'Does it support both our own fleet and hired market vehicles?', a: 'Yes. The system tracks trip profitability and maintenance for your owned trucks as well as broker/lorry-hire slips, advance payments, and balance settlements for market vehicles.' },
    ],
    caseStudy: {
      client: 'Multi-Branch Transport & Fleet Operations',
      challenge: 'Paper bilties, delayed physical PODs, and untracked trip expenses slowed down customer billing and fleet profitability analysis.',
      solution: 'Implemented a centralized cloud Logistics & LR Management system with branch manifests, mobile e-POD capture, and automated TBB invoicing.',
      results: ['Real-time LR and manifest tracking across all branches', 'Same-day e-POD upload enabling faster corporate billing', 'Complete trip-wise fuel and driver advance accounting', 'Live shipment tracking portal for B2B clients'],
    },
  },

  // 17. Field Sales & GPS Tracking Software
  {
    slug: 'field-sales-tracking-software',
    name: 'Field Sales & GPS Tracking Software',
    tagline: 'Empower Field Sales & Service Teams with Geo-Verified Visits, Beat Plans & Mobile Ordering',
    heroDesc:
      'AI Software Technology develops custom Field Sales & Workforce GPS Tracking Software (Web Admin + Mobile App) that gives managers real-time visibility into field executive attendance, client visits, route maps, travel expenses, and on-site order collection.',
    bannerImage:
      '/images/services/field-sales-tracking-software.svg',
    icon: 'ri-map-pin-user-line',
    color: 'from-emerald-500 to-cyan-400',
    features: [
      { title: 'Geo-Tagged Selfie Attendance (Punch-In / Out)', desc: 'Field executives mark daily attendance from the mobile app with live GPS coordinates, timestamp, and selfie verification.', icon: 'ri-camera-switch-line' },
      { title: 'Live GPS Route & Timeline Tracking', desc: 'View live field team locations on an interactive map, daily route playback, distance traveled (KM), and stop durations.', icon: 'ri-route-line' },
      { title: 'Beat Planning & Geo-Verified Client Check-Ins', desc: 'Assign daily/weekly beat routes and verify that customer meetings or retail outlet visits happen at the actual client location.', icon: 'ri-map-pin-check-line' },
      { title: 'On-Site Mobile Order & Payment Collection', desc: 'Capture dealer/retailer orders, check live stock, log payment collections (cheque/UPI/cash), and share instant receipts from the field.', icon: 'ri-shopping-bag-line' },
      { title: 'Automated KM Travel & Expense Reimbursement', desc: 'Calculate travel allowances automatically based on GPS-verified kilometers traveled, plus bill photo uploads for lodging/food expenses.', icon: 'ri-Temp-hot-line' },
      { title: 'Executive Productivity & Target vs. Achievement MIS', desc: 'Compare planned vs. actual visits, productive calls, order value generated, and new dealer onboarding across territories.', icon: 'ri-bar-chart-grouped-line' },
    ],
    benefits: [
      { metric: '100%', label: 'Field Transparency', desc: 'Geo-verified attendance and client visit check-ins eliminate fake reporting' },
      { metric: 'Instant', label: 'Order Booking', desc: 'Orders punched in the field reach head office and dispatch immediately' },
      { metric: 'Accurate', label: 'TA/DA Claims', desc: 'GPS distance calculation prevents inflated travel expense claims' },
      { metric: 'Offline', label: 'Sync Support', desc: 'Log visit notes and orders even in low-network rural areas' },
    ],
    process: [
      { step: '01', title: 'Territory & Field Workflow Study', desc: 'Understanding your sales hierarchy, beat schedules, order forms, and expense policies.' },
      { step: '02', title: 'Mobile App & Map Dashboard Setup', desc: 'Configuring the Android/iOS field app and web manager live-tracking dashboard.' },
      { step: '03', title: 'Dealer Master & ERP/CRM Sync', desc: 'Importing dealer geo-locations, product catalogs, and outstanding ledgers.' },
      { step: '04', title: 'Field Pilot & Battery Optimization', desc: 'Testing GPS accuracy and low-battery consumption across field devices.' },
      { step: '05', title: 'Sales Team Rollout & Support', desc: 'Training field reps and regional managers for smooth daily adoption.' },
    ],
    technologies: ['Flutter', 'React Native', 'React', 'Node.js', 'PostgreSQL', 'Google Maps SDK', 'Background Location Services', 'AWS'],
    industries: ['FMCG & Consumer Goods', 'Lubricants & Industrial Sales', 'Pharmaceuticals (MR Reporting)', 'Agri-Inputs & Seeds', 'Building Materials', 'Financial & Insurance Agents', 'Field Maintenance & AMC Teams'],
    faqs: [
      { q: 'Does the mobile app drain the salesperson’s phone battery?', a: 'No. We use intelligent motion-aware location sampling and optimized background sync so GPS route tracking runs smoothly throughout the workday with minimal battery usage.' },
      { q: 'What happens if a field executive loses internet connectivity during a visit?', a: 'The app caches visit check-ins, notes, and orders locally on the device and automatically syncs them with the server as soon as mobile data is restored.' },
    ],
    caseStudy: {
      client: 'Multi-State Field Sales & Distributor Network',
      challenge: 'Regional managers had no visibility into daily salesperson visits, and paper order books delayed dispatch by 2–3 days.',
      solution: 'Deployed a Field Sales GPS Tracking mobile app and web command center with geo-verified check-ins, beat plans, and instant mobile order booking.',
      results: ['100% geo-verified daily attendance and dealer visit logs', 'Same-day order transmission from field to warehouse', 'Automated KM-based travel expense calculation', 'Clear territory-wise sales productivity analytics'],
    },
  },

  // 18. Attendance & Workforce Management Software
  {
    slug: 'attendance-workforce-software',
    name: 'Attendance & Workforce Management Software',
    tagline: 'Centralized Factory Attendance, Shift Roster, Gate Pass & Workforce Control',
    heroDesc:
      'AI Software Technology builds custom Attendance, Gate-Pass, and Workforce Management Software designed for factories, industrial plants, warehouses, and multi-branch organizations to monitor staff, contractors, shifts, and overtime in real time.',
    bannerImage:
      '/images/services/attendance-workforce-software.svg',
    icon: 'ri-fingerprint-line',
    color: 'from-teal-500 to-emerald-400',
    features: [
      { title: 'Real-Time Attendance & Punch-In/Out Monitoring', desc: 'Live admin attendance dashboard showing present, absent, late-arrival, half-day, and on-duty staff across all departments and gates.', icon: 'ri-time-line' },
      { title: 'Multi-Shift Roster & Rotational Shift Scheduling', desc: 'Manage general, morning, evening, and night shifts with automated shift rotation, grace periods, and break-time tracking.', icon: 'ri-calendar-todo-line' },
      { title: 'Digital Gate Pass & Visitor / Movement Control', desc: 'Issue and verify employee out-passes, returnable/non-returnable material gate passes, and visitor check-ins at factory security gates.', icon: 'ri-pass-valid-line' },
      { title: 'Permanent Staff & Contract Labor Management', desc: 'Separate tracking for on-roll employees, daily-wage workers, and contractor manpower with muster rolls and contractor billing verification.', icon: 'ri-group-line' },
      { title: 'Overtime (OT), Late Mark & Leave Rules', desc: 'Automated calculation of approved overtime hours, late-coming deductions, weekly offs, and leave balances ready for payroll.', icon: 'ri-calculator-line' },
      { title: 'Biometric, Face, QR & Mobile Attendance Sync', desc: 'Seamless integration with biometric/face-recognition terminals, security gate tablets, and supervisor attendance apps.', icon: 'ri-qr-scan-2-line' },
    ],
    benefits: [
      { metric: 'Live', label: 'Headcount Visibility', desc: 'See exact shift-wise and department-wise workforce presence at any moment' },
      { metric: 'Digital', label: 'Gate Pass Control', desc: 'Track employee movement and gate passes with full approval logs' },
      { metric: 'Zero', label: 'Muster Roll Errors', desc: 'Eliminate manual register discrepancies and proxy attendance' },
      { metric: 'Payroll', label: 'Ready Exports', desc: 'Export verified attendance, OT hours, and payable days in one click' },
    ],
    process: [
      { step: '01', title: 'Shift, Gate & Labor Policy Audit', desc: 'Mapping your shift timings, OT rules, gate-pass approvals, and staff categories.' },
      { step: '02', title: 'Dashboard & Role Configuration', desc: 'Setting up admin, HR, department head, and security-gate user portals.' },
      { step: '03', title: 'Device / Gate Check-In Integration', desc: 'Connecting biometric terminals, QR passes, or gate operator interfaces.' },
      { step: '04', title: 'Attendance & OT Rule Validation', desc: 'Testing shift cross-overs, night shifts, late marks, and monthly muster reports.' },
      { step: '05', title: 'Plant Rollout & HR Training', desc: 'Deploying across factory gates and HR desks with ongoing technical support.' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Biometric / RFID / QR APIs', 'Tailwind CSS', 'Vercel / AWS'],
    industries: ['Manufacturing Plants & Factories', 'Warehouses & Logistics Hubs', 'Construction & Infrastructure Sites', 'Hospitals & Healthcare', 'Hospitality & Hotels', 'Security & Facility Management', 'Corporate Campuses'],
    faqs: [
      { q: 'Have you built a live Factory Attendance & Gate-Pass Management System?', a: 'Yes! Check out our live portfolio project — Factory Attendance & Workforce Management Software (gatepass-orcin.vercel.app/admin/attendance) — built for real-time workforce attendance, gate-pass tracking, and admin reporting.' },
      { q: 'Can it handle both regular employees and contract workers across multiple shifts?', a: 'Yes. The system supports multiple employee types, contractor groups, rotational shifts, overtime approvals, and department-wise attendance analytics.' },
    ],
    caseStudy: {
      client: 'Factory Attendance & Workforce Management Software (gatepass-orcin.vercel.app)',
      challenge: 'Paper gate registers and manual shift attendance sheets caused delays in daily headcount verification and monthly payroll reconciliation.',
      solution: 'Developed a centralized web-based Factory Attendance & Gate-Pass Admin Platform with live check-in/out status, department filters, and automated attendance reports.',
      results: ['Real-time visibility of daily factory attendance and shift presence', 'Digital gate-pass and employee movement tracking', 'Eliminated manual muster-roll compilation delays', 'Instant exportable attendance and overtime summaries for payroll'],
    },
  },

  // 19. Retail & POS Software
  {
    slug: 'retail-pos-software',
    name: 'Retail & POS Software',
    tagline: 'High-Speed Barcode POS Billing, Multi-Store Inventory & Customer Loyalty',
    heroDesc:
      'AI Software Technology develops custom Retail Point-of-Sale (POS) and Store Management Software designed for supermarkets, retail chains, showrooms, and specialty stores — delivering sub-second counter billing and live inventory control.',
    bannerImage:
      '/images/services/retail-pos-software.svg',
    icon: 'ri-store-2-line',
    color: 'from-fuchsia-500 to-purple-500',
    features: [
      { title: 'High-Speed Barcode & Touch POS Billing', desc: 'Keyboard-shortcut and touch-screen friendly POS billing screen with barcode scanning, hold/recall bills, and split payments (Cash/UPI/Card).', icon: 'ri-barcode-line' },
      { title: 'Multi-Store & Franchise Central Control', desc: 'Manage pricing, promotions, stock transfers, and live sales across multiple retail outlets from one head-office dashboard.', icon: 'ri-store-3-line' },
      { title: 'Barcode Label Printing & Variant Matrix', desc: 'Generate custom barcode stickers and manage item variants by size, color, style, brand, or weight.', icon: 'ri-price-tag-2-line' },
      { title: 'Customer Loyalty Points, Coupons & CRM', desc: 'Reward repeat shoppers with loyalty points, digital wallet credits, festival combo offers, and WhatsApp digital receipts.', icon: 'ri-gift-line' },
      { title: 'Purchase, Supplier & Rack Replenishment', desc: 'Track supplier purchases, margin analysis, expiry/slow-moving stock, and automated store replenishment requests.', icon: 'ri-archive-line' },
      { title: 'Cashier Shift Closing & GST Sales Reports', desc: 'Daily cashier register reconciliation, denomination tally, item-wise profit margins, and GST return reports.', icon: 'ri-file-chart-line' },
    ],
    benefits: [
      { metric: '3-Sec', label: 'Fast Counter Checkout', desc: 'Eliminate checkout queues with barcode scanning and UPI QR integration' },
      { metric: 'Live', label: 'Multi-Store Stock', desc: 'Every sale automatically updates store and central warehouse inventory' },
      { metric: 'Higher', label: 'Repeat Footfall', desc: 'Built-in loyalty points, discount schemes, and WhatsApp e-bills' },
      { metric: '100%', label: 'Cashier Accountability', desc: 'Shift-wise cash drawer and digital payment reconciliation' },
    ],
    process: [
      { step: '01', title: 'Store & Counter Workflow Audit', desc: 'Understanding your SKU volume, barcode setup, billing counters, and discount schemes.' },
      { step: '02', title: 'POS & Receipt Customization', desc: 'Configuring thermal receipt layouts, barcode label sizes, and payment modes.' },
      { step: '03', title: 'Hardware & Payment Integration', desc: 'Connecting barcode scanners, thermal printers, weighing scales, and UPI/POS terminals.' },
      { step: '04', title: 'SKU & Opening Stock Import', desc: 'Importing your product catalog, MRP/selling prices, and store stock balances.' },
      { step: '05', title: 'Cashier Training & Store Launch', desc: 'Fast onboarding for counter staff and store managers with ongoing support.' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'IndexedDB Offline Cache', 'Thermal / Barcode Print APIs', 'UPI / Razorpay POS', 'AWS'],
    industries: ['Supermarkets & Grocery', 'Apparel & Footwear Showrooms', 'Electronics & Mobile Stores', 'Pharmacies & Wellness', 'Dry Fruits & Specialty Foods', 'Hardware & Sanitaryware', 'Bakery & Confectionery'],
    faqs: [
      { q: 'Does the POS work with standard barcode scanners and thermal receipt printers?', a: 'Yes. Our Retail POS software works seamlessly with all standard USB/wireless barcode scanners, 2-inch/3-inch thermal receipt printers, and barcode label printers.' },
      { q: 'Can we send digital bills to customers on WhatsApp?', a: 'Yes. At checkout, entering the customer’s mobile number logs their loyalty points and sends a branded digital invoice on WhatsApp.' },
    ],
    caseStudy: {
      client: 'Multi-Outlet Retail & Specialty Store Operations',
      challenge: 'Manual billing and disconnected store stock registers caused checkout delays during peak festival seasons and stock mismatches.',
      solution: 'Deployed a fast barcode POS and multi-store inventory system with combo-pack pricing, loyalty points, and live head-office reporting.',
      results: ['Rapid barcode counter billing during peak customer hours', 'Real-time stock deduction and low-stock alerts across outlets', 'Automated daily cashier and UPI/cash collection tally', 'Increased repeat purchases via customer loyalty tracking'],
    },
  },

  // 20. E-commerce Development
  {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    tagline: 'Custom B2C Online Stores, B2B Wholesale Portals & Multi-Vendor Marketplaces',
    heroDesc:
      'AI Software Technology designs and develops high-conversion custom E-commerce websites, B2B wholesale ordering platforms, and mobile shopping apps — complete with catalog management, payment gateways, shipping integration, and ERP inventory sync.',
    bannerImage:
      '/images/services/ecommerce-development.svg',
    icon: 'ri-shopping-bag-3-line',
    color: 'from-orange-500 to-pink-500',
    features: [
      { title: 'Custom B2C & D2C Online Storefronts', desc: 'Fast, mobile-first shopping experiences with smart search, category filters, product variants, wishlists, and 1-page checkout.', icon: 'ri-store-line' },
      { title: 'B2B Wholesale & Bulk Ordering Portals', desc: 'Tiered wholesale pricing, MOQ (Minimum Order Quantity) rules, bulk matrix ordering, credit limits, and GST invoice downloads.', icon: 'ri-briefcase-4-line' },
      { title: 'Multi-Vendor Marketplace Architecture', desc: 'Onboard multiple sellers with vendor dashboards, commission calculation, product approval workflows, and automated vendor payouts.', icon: 'ri-community-line' },
      { title: 'Payment Gateway & UPI Integration', desc: 'Seamless integration with Razorpay, Stripe, Cashfree, PayU, UPI, cards, net banking, EMI, and Cash-on-Delivery (COD) verification.', icon: 'ri-secure-payment-line' },
      { title: 'Shipping Aggregator & Order Fulfillment', desc: 'Automated AWB generation, courier label printing, and live shipment tracking with Shiprocket, Delhivery, BlueDart, and custom logistics.', icon: 'ri-truck-line' },
      { title: 'Admin Catalog, Promotions & Analytics Panel', desc: 'Comprehensive admin dashboard to manage products, inventory, discount coupons, abandoned carts, and revenue analytics.', icon: 'ri-dashboard-line' },
    ],
    benefits: [
      { metric: 'High', label: 'Checkout Conversion', desc: 'Fast page loads, mobile-first UX, and frictionless UPI/card checkout' },
      { metric: 'B2C + B2B', label: 'Dual Capability', desc: 'Support retail shoppers and wholesale dealers on one unified platform' },
      { metric: 'Automated', label: 'Shipping & GST', desc: 'Auto-generate GST invoices, packing slips, and courier tracking links' },
      { metric: 'Web + App', label: 'Omnichannel Ready', desc: 'Synchronized storefront across web, Android, and iOS shopping apps' },
    ],
    process: [
      { step: '01', title: 'Catalog & Commerce Strategy', desc: 'Defining your product taxonomy, pricing rules, target buyers, and fulfillment flow.' },
      { step: '02', title: 'Conversion-Focused Storefront UI/UX', desc: 'Designing clean product pages, category filters, and mobile checkout flows.' },
      { step: '03', title: 'Storefront, Admin & API Development', desc: 'Building the frontend store, inventory backend, payment gateways, and courier APIs.' },
      { step: '04', title: 'Payment, Security & Speed QA', desc: 'Testing transactions, coupon logic, mobile responsiveness, and Core Web Vitals.' },
      { step: '05', title: 'Launch, SEO Setup & Growth Support', desc: 'Going live with product schema markup, analytics, and ongoing technical support.' },
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Razorpay / Stripe', 'Shiprocket API', 'Flutter', 'AWS'],
    industries: ['D2C Brands', 'Fashion & Apparel', 'Dry Fruits & Gourmet Foods', 'Electronics & Gadgets', 'Industrial & B2B Supplies', 'Healthcare & Wellness', 'Home & Decor', 'Multi-Vendor Marketplaces'],
    faqs: [
      { q: 'Should we build a custom e-commerce platform or use a template?', a: 'A custom e-commerce platform gives you full control over speed, custom B2B/B2C pricing rules, zero recurring transaction commissions, and seamless integration with your inventory or ERP system.' },
      { q: 'Can you also build Android and iOS shopping apps connected to our website?', a: 'Yes. Both your e-commerce website and mobile apps share the exact same product catalog, inventory, customer accounts, and admin panel.' },
    ],
    caseStudy: {
      client: 'D2C & Wholesale E-Commerce Storefront',
      challenge: 'Needed an online ordering platform supporting both retail gift boxes and bulk corporate/wholesale inquiries with fast mobile checkout.',
      solution: 'Developed a custom responsive e-commerce platform with category filtering, festival gift catalog, WhatsApp bulk inquiry integration, and admin order management.',
      results: ['Fast mobile-first product browsing and checkout experience', 'Unified retail and wholesale inquiry management', 'SEO-optimized product and category pages', 'Easy admin control over products, pricing, and seasonal offers'],
    },
  },

  // 21. API Development & Integration
  {
    slug: 'api-development-integration',
    name: 'API Development & Integration',
    tagline: 'Connect Your Software Ecosystem with Secure REST/GraphQL APIs & Third-Party Integrations',
    heroDesc:
      'AI Software Technology architects secure, high-performance APIs and middleware integrations that connect your ERP, CRM, HRMS, website, mobile apps, payment gateways, accounting tools, and hardware devices.',
    bannerImage:
      '/images/services/api-development-integration.svg',
    icon: 'ri-plug-line',
    color: 'from-cyan-500 to-blue-600',
    features: [
      { title: 'Custom REST & GraphQL API Architecture', desc: 'Clean, well-documented, versioned backend APIs built with Node.js, TypeScript, Python, or Laravel to power web, mobile, and partner apps.', icon: 'ri-code-s-slash-line' },
      { title: 'Payment Gateway & FinTech Integrations', desc: 'Secure integration with Razorpay, Stripe, Cashfree, PayU, UPI Autopay, virtual bank accounts, and automated payout webhooks.', icon: 'ri-bank-card-2-line' },
      { title: 'ERP, Tally & Accounting Synchronization', desc: 'Two-way data sync between your custom web/mobile software and Tally Prime, Zoho Books, SAP, or GST e-invoicing portals.', icon: 'ri-exchange-box-line' },
      { title: 'WhatsApp, SMS, Email & Telecaller APIs', desc: 'Integrate WhatsApp Business Cloud API, DLT SMS gateways, SendGrid/SES email, and cloud telephony (Exotel, Knowlarity, MyOperator) click-to-call.', icon: 'ri-chat-voice-line' },
      { title: 'Logistics, Maps & Government Portal APIs', desc: 'Connect Shiprocket, Delhivery, Google Maps/Places, GSTN verification, PAN/Aadhaar KYC, and DigiLocker APIs.', icon: 'ri-global-line' },
      { title: 'Biometric, Barcode & IoT Hardware Bridges', desc: 'Middleware services that sync biometric attendance machines, RFID/barcode scanners, weighing scales, and thermal printers with cloud software.', icon: 'ri-cpu-line' },
    ],
    benefits: [
      { metric: 'Unified', label: 'Data Ecosystem', desc: 'Eliminate data silos between your sales, billing, and operations tools' },
      { metric: 'Secure', label: 'Token Authentication', desc: 'OAuth2, JWT, HMAC webhook signatures, and rate-limited endpoints' },
      { metric: 'Real-Time', label: 'Webhook Sync', desc: 'Instant event-driven updates across connected platforms' },
      { metric: 'Documented', label: 'Swagger / Postman', desc: 'Clean API documentation for easy maintenance and future expansion' },
    ],
    process: [
      { step: '01', title: 'System & Endpoint Discovery', desc: 'Auditing source and destination systems, data formats, authentication, and sync frequency.' },
      { step: '02', title: 'API Schema & Security Design', desc: 'Defining payload contracts, error handling, retry queues, and encryption standards.' },
      { step: '03', title: 'Middleware & Connector Development', desc: 'Coding API endpoints, webhook listeners, and background job queues.' },
      { step: '04', title: 'Sandbox & Load Testing', desc: 'Testing edge cases, network timeouts, duplicate prevention (idempotency), and throughput.' },
      { step: '05', title: 'Production Cutover & Monitoring', desc: 'Deploying with live API health logs, failure alerts, and technical documentation.' },
    ],
    technologies: ['Node.js', 'TypeScript', 'Python / FastAPI', 'REST / GraphQL', 'Redis / BullMQ', 'Webhooks', 'OAuth 2.0 / JWT', 'Postman / OpenAPI', 'Docker', 'AWS'],
    industries: ['SaaS Platforms', 'Manufacturing & ERP', 'FinTech & E-Commerce', 'Healthcare & LIMS', 'Logistics & Supply Chain', 'Real Estate & CRM', 'EdTech', 'Enterprise IT'],
    faqs: [
      { q: 'Can you integrate our existing website or CRM with WhatsApp, payment gateways, or Tally?', a: 'Yes. We regularly build custom API connectors and webhook bridges that link your existing software with WhatsApp Business API, Razorpay/Stripe, cloud telephony, and accounting systems.' },
      { q: 'How do you handle failed API calls if a third-party server is temporarily down?', a: 'We implement automated retry queues, dead-letter logging, and idempotent transaction keys so no order, payment, or lead data is ever lost during temporary third-party outages.' },
    ],
    caseStudy: {
      client: 'Multi-Channel CRM, Payment & Logistics Integration',
      challenge: 'Orders, payments, and courier tracking existed in three separate systems, requiring manual CSV exports and imports every evening.',
      solution: 'Engineered a real-time API integration layer connecting the order portal, payment gateway webhooks, and courier AWB generation.',
      results: ['100% automated real-time sync between orders, payments, and shipping', 'Zero manual CSV export/import work for operations staff', 'Built-in webhook retry queue preventing data loss', 'Comprehensive API activity logs for easy auditing'],
    },
  },

  // 22. Software Maintenance & Support
  {
    slug: 'software-maintenance-support',
    name: 'Software Maintenance & Support',
    tagline: 'Reliable Annual Maintenance (AMC), Bug Fixing, Security Patching & Feature Upgrades',
    heroDesc:
      'AI Software Technology provides dedicated Software Maintenance, SLA Support, Server Monitoring, Database Optimization, and Feature Enhancement services to keep your business-critical web, mobile, ERP, CRM, and SaaS applications running smoothly.',
    bannerImage:
      '/images/services/software-maintenance-support.svg',
    icon: 'ri-shield-check-line',
    color: 'from-emerald-500 to-blue-500',
    features: [
      { title: 'Proactive Bug Fixing & Issue Resolution', desc: 'Rapid diagnosis and resolution of application bugs, UI glitches, broken integrations, and workflow errors with priority SLA response.', icon: 'ri-bug-line' },
      { title: 'Database Tuning & Performance Optimization', desc: 'Query optimization, indexing, caching setup, and code refactoring to speed up slow dashboards, reports, and APIs.', icon: 'ri-speed-up-line' },
      { title: 'Security Audits, SSL & Dependency Upgrades', desc: 'Regular security patching, framework/library updates, SSL renewals, vulnerability fixes, and role-access reviews.', icon: 'ri-lock-password-line' },
      { title: 'Automated Backups & Disaster Recovery', desc: 'Scheduled daily encrypted database and file backups with periodic restoration testing so your business data is always safe.', icon: 'ri-database-2-line' },
      { title: 'New Module & Feature Enhancements', desc: 'Continuously evolve your software by adding new reports, approval rules, WhatsApp alerts, or third-party integrations as your business grows.', icon: 'ri-add-box-line' },
      { title: 'Server Health & Uptime Monitoring', desc: '24/7 monitoring of cloud/VPS CPU, memory, disk space, and API uptime with proactive alerts before issues impact users.', icon: 'ri-pulse-line' },
    ],
    benefits: [
      { metric: '99.9%', label: 'System Reliability', desc: 'Prevent unexpected downtime during critical business hours' },
      { metric: 'Priority', label: 'SLA Support', desc: 'Direct access to senior engineers via WhatsApp, phone, and ticket portal' },
      { metric: 'Daily', label: 'Verified Backups', desc: 'Complete protection against accidental data loss or server failures' },
      { metric: 'Continuous', label: 'Software Evolution', desc: 'Add new features and modules without rebuilding from scratch' },
    ],
    process: [
      { step: '01', title: 'Codebase & Server Health Audit', desc: 'Reviewing your existing application architecture, database health, backup status, and error logs.' },
      { step: '02', title: 'Stabilization & Backup Setup', desc: 'Fixing immediate critical bottlenecks and configuring automated daily off-site backups.' },
      { step: '03', title: 'SLA Support & Issue Tracking', desc: 'Setting up dedicated support channels for fast bug fixes and operational assistance.' },
      { step: '04', title: 'Scheduled Security & Speed Updates', desc: 'Performing monthly dependency updates, database cleanup, and performance tuning.' },
      { step: '05', title: 'Iterative Feature Enhancements', desc: 'Rolling out new modules and UI improvements based on your team’s evolving feedback.' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PHP / Laravel', 'Flutter / React Native', 'PostgreSQL / MySQL / MongoDB', 'Docker / Linux / AWS'],
    industries: ['Enterprise ERP & CRM Users', 'SaaS Product Companies', 'E-Commerce Platforms', 'Hospitals & Clinics', 'Schools & Institutes', 'Manufacturing Units', 'Corporate Portals'],
    faqs: [
      { q: 'Can you maintain and upgrade software that was originally built by another developer or agency?', a: 'Yes. We begin with a structured codebase and database audit, set up proper version control and backups, resolve existing bugs, and take over ongoing maintenance and feature development smoothly.' },
      { q: 'Do you offer Annual Maintenance Contracts (AMC) for custom software?', a: 'Yes. We provide flexible monthly and annual maintenance plans covering server monitoring, daily backups, bug fixes, and a dedicated quota of hours for new feature enhancements.' },
    ],
    caseStudy: {
      client: 'Legacy Enterprise Web Application Modernization & AMC',
      challenge: 'An existing business portal suffered from slow report loading, frequent crashes during peak billing hours, and zero automated backups.',
      solution: 'Conducted a database and code audit, optimized slow SQL queries, configured automated daily cloud backups, and established ongoing SLA support.',
      results: ['Report generation speed improved by over 70%', 'Eliminated peak-hour server crashes', 'Automated daily encrypted off-site database backups', 'Added new GST and WhatsApp modules seamlessly'],
    },
  },

  // Additional Existing Slugs Preserved for 100% Route Compatibility
  {
    slug: 'cloud-solutions',
    name: 'Cloud Deployment & Server Setup',
    tagline: 'Secure, High-Availability Cloud Infrastructure & Server Management',
    heroDesc:
      'AI Software Technology provides end-to-end cloud deployment, VPS/dedicated server setup, database optimization, SSL security, automated backups, and CI/CD pipelines so your business applications run fast and reliably.',
    bannerImage:
      '/images/services/cloud-solutions.svg',
    icon: 'ri-cloud-line',
    color: 'from-sky-500 to-blue-400',
    features: [
      { title: 'Cloud Server Setup (AWS, Azure, GCP, VPS)', desc: 'Right-sized cloud architecture and server provisioning configured for your ERP, CRM, SaaS, or web application workloads.', icon: 'ri-cloud-line' },
      { title: 'CI/CD Automated Deployment Pipelines', desc: 'Zero-downtime deployment pipelines using GitHub Actions, Docker, and Nginx for smooth, repeatable software releases.', icon: 'ri-git-merge-line' },
      { title: 'Database Setup, Tuning & Auto-Backups', desc: 'PostgreSQL, MySQL, MongoDB, and Redis configuration with scheduled off-site backups and point-in-time recovery.', icon: 'ri-database-2-line' },
      { title: 'SSL, Firewall & Server Security Hardening', desc: 'HTTPS SSL certificates, Web Application Firewall (WAF), DDoS protection, SSH hardening, and role-based server access.', icon: 'ri-shield-keyhole-line' },
      { title: 'Application Migration & Upgrades', desc: 'Smooth migration of existing websites, databases, and legacy business software to modern cloud servers without data loss.', icon: 'ri-upload-cloud-2-line' },
      { title: 'Uptime Monitoring & Performance Scaling', desc: 'Real-time server health monitoring, resource alerts, load balancing, and CDN setup for fast response times.', icon: 'ri-pulse-line' },
    ],
    benefits: [
      { metric: '99.9%', label: 'Uptime Architecture', desc: 'Reliable server configurations with proactive health monitoring' },
      { metric: 'Automated', label: 'Daily Backups', desc: 'Scheduled encrypted database and file backups for peace of mind' },
      { metric: 'Secured', label: 'Cloud Environment', desc: 'Firewall rules, SSL encryption, and hardened server access' },
      { metric: 'Cost', label: 'Optimized Sizing', desc: 'Right-sized server resources so you never overpay for idle capacity' },
    ],
    process: [
      { step: '01', title: 'Workload & Traffic Assessment', desc: 'Evaluating your application stack, concurrent users, storage needs, and backup requirements.' },
      { step: '02', title: 'Server & Network Architecture', desc: 'Selecting the optimal AWS, Azure, GCP, or Linux VPS environment and security topology.' },
      { step: '03', title: 'Provisioning, Docker & CI/CD Setup', desc: 'Configuring web servers, databases, SSL, environment variables, and deployment scripts.' },
      { step: '04', title: 'Migration, Load & Security Testing', desc: 'Migrating data, verifying backup restoration, and testing performance under load.' },
      { step: '05', title: 'Go-Live Monitoring & Handover', desc: 'Setting up uptime alerts, documentation, and ongoing server maintenance support.' },
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Linux / Ubuntu', 'Docker', 'Nginx', 'GitHub Actions', 'Cloudflare', 'PostgreSQL', 'Redis'],
    industries: ['SaaS Products', 'Enterprise ERP & CRM', 'E-Commerce', 'Healthcare Systems', 'Education Portals', 'FinTech', 'Corporate Websites'],
    faqs: [
      { q: 'Do you configure automated daily database backups?', a: 'Yes. Every production server we set up includes automated daily database backups stored securely off-server so your business data is protected.' },
      { q: 'Can you migrate our existing software or website to a faster server?', a: 'Yes. We handle complete server-to-server migrations including files, databases, DNS, and SSL certificates with minimal or zero downtime.' },
    ],
    caseStudy: {
      client: 'Enterprise Web & SaaS Cloud Deployment',
      challenge: 'Slow shared hosting and manual FTP uploads caused frequent downtime during peak business hours.',
      solution: 'Provisioned containerized cloud servers with Nginx reverse proxy, Cloudflare CDN/WAF, automated CI/CD deployment, and daily encrypted backups.',
      results: ['Sub-second API and dashboard response times', 'Zero-downtime deployments via automated CI/CD', 'Automated daily off-site database backups', 'Hardened firewall and SSL security posture'],
    },
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    tagline: 'Clean, Intuitive Interfaces for Business Software, Dashboards & Mobile Apps',
    heroDesc:
      'AI Software Technology designs clear, user-friendly interfaces for complex ERP, CRM, HRMS, SaaS dashboards, websites, and mobile apps — making sure your software is effortless for both staff and customers to use.',
    bannerImage:
      '/images/services/ui-ux-design.svg',
    icon: 'ri-palette-line',
    color: 'from-rose-500 to-pink-400',
    features: [
      { title: 'Software & Dashboard UI/UX Design', desc: 'Clean, information-dense yet clutter-free interfaces for ERP, CRM, HRMS, and analytics dashboards.', icon: 'ri-dashboard-line' },
      { title: 'Interactive Figma Prototyping', desc: 'Clickable high-fidelity prototypes so you can experience and validate every screen flow before development begins.', icon: 'ri-artboard-line' },
      { title: 'Mobile App UI/UX Design', desc: 'Thumb-friendly iOS and Android app designs following Material Design and Apple Human Interface Guidelines.', icon: 'ri-smartphone-line' },
      { title: 'User Workflow & Information Architecture', desc: 'Simplifying multi-step business forms, billing screens, and approval flows to reduce clicks and staff training time.', icon: 'ri-mind-map' },
      { title: 'Scalable Component Design Systems', desc: 'Reusable UI component libraries, typography scales, and color tokens for consistent product expansion.', icon: 'ri-layout-masonry-line' },
      { title: 'UX Audit & Interface Redesign', desc: 'Modernizing outdated or confusing software screens to improve speed, clarity, and user adoption.', icon: 'ri-magic-line' },
    ],
    benefits: [
      { metric: 'Faster', label: 'Staff Adoption', desc: 'Intuitive screens reduce employee training time and data entry mistakes' },
      { metric: 'Interactive', label: 'Figma Prototypes', desc: 'Visualize and approve your entire software flow before coding starts' },
      { metric: 'Consistent', label: 'Design System', desc: 'Unified colors, typography, and components across web and mobile' },
      { metric: 'Dev-Ready', label: 'Specifications', desc: 'Structured layouts that translate cleanly into React, Flutter, or Next.js' },
    ],
    process: [
      { step: '01', title: 'User Role & Workflow Discovery', desc: 'Understanding who will use each screen and their daily tasks.' },
      { step: '02', title: 'Information Architecture & Wireframes', desc: 'Structuring navigation, forms, tables, and dashboard layouts for maximum clarity.' },
      { step: '03', title: 'Visual UI Design & Design System', desc: 'Applying brand colors, readable typography, status badges, and clean card layouts.' },
      { step: '04', title: 'Interactive Prototype Review', desc: 'Sharing clickable Figma prototypes for stakeholder walkthroughs and refinements.' },
      { step: '05', title: 'Developer Handoff & UI QA', desc: 'Delivering responsive specs and reviewing the coded frontend for pixel accuracy.' },
    ],
    technologies: ['Figma', 'Wireframing', 'Interactive Prototyping', 'Design Systems', 'Tailwind CSS', 'Responsive Web UI', 'Mobile App UX', 'WCAG Accessibility'],
    industries: ['SaaS Products', 'Enterprise ERP & CRM', 'Healthcare Portals', 'FinTech & Billing', 'EdTech & LMS', 'E-Commerce', 'Hospitality Systems'],
    faqs: [
      { q: 'Will we see screen designs before software development starts?', a: 'Yes. We create wireframes and high-fidelity Figma designs so you can review and approve the exact look and workflow of your software before backend coding.' },
    ],
    caseStudy: {
      client: 'Role-Based Hospitality & Healthcare Interfaces',
      challenge: 'Complex operational software had to be used by non-technical front-desk staff and doctors without lengthy training.',
      solution: 'Designed role-specific interfaces with clear color-coded status tiles and 3-step booking/check-in workflows.',
      results: ['Staff onboarded within days with minimal training', 'Check-in and appointment booking simplified to 3 steps', 'Consistent design system across desktop and mobile views', 'High readability and WCAG-compliant contrast ratios'],
    },
  },
  {
    slug: 'digital-marketing',
    name: 'SEO & Digital Marketing Support',
    tagline: 'Search Visibility & Lead Generation Support for Growing Businesses',
    heroDesc:
      'Alongside custom software and website development, AI Software Technology — A Brand of Digi India Solutions — provides technical SEO, local search optimization, and digital marketing support to help your business attract qualified leads online.',
    bannerImage:
      '/images/services/digital-marketing.svg',
    icon: 'ri-megaphone-line',
    color: 'from-orange-500 to-amber-400',
    features: [
      { title: 'Technical & On-Page SEO', desc: 'Complete website SEO optimization including keyword mapping, meta tags, Schema.org structured data, site speed, and crawlability.', icon: 'ri-search-eye-line' },
      { title: 'Local SEO & Google Business Profile', desc: 'Optimize your local presence for city and near-me searches to drive direct phone calls, WhatsApp inquiries, and walk-ins.', icon: 'ri-map-pin-2-line' },
      { title: 'Google Ads & Search Campaigns', desc: 'Targeted high-intent search and display campaigns with landing page optimization and conversion tracking.', icon: 'ri-advertisement-line' },
      { title: 'Meta (Facebook & Instagram) Lead Campaigns', desc: 'Lead generation campaigns connected directly to your CRM and WhatsApp for immediate sales follow-up.', icon: 'ri-focus-3-line' },
      { title: 'B2B Content & Landing Page Strategy', desc: 'SEO-friendly service pages, industry landing pages, and educational blog content that build authority and organic traffic.', icon: 'ri-article-line' },
      { title: 'Analytics & Lead Attribution Reporting', desc: 'Clear tracking of form submissions, phone clicks, WhatsApp inquiries, and campaign ROI integrated with your CRM.', icon: 'ri-bar-chart-box-line' },
    ],
    benefits: [
      { metric: 'SEO', label: 'Built-In Foundation', desc: 'Technical SEO and structured data aligned with Google best practices' },
      { metric: 'CRM', label: 'Connected Leads', desc: 'Every ad and website inquiry flows directly into your sales pipeline' },
      { metric: 'Local', label: '& National Reach', desc: 'Target customers in your city or across India and global markets' },
      { metric: 'Transparent', label: 'Lead Tracking', desc: 'Track real inquiries, calls, and conversions' },
    ],
    process: [
      { step: '01', title: 'Website & Search Audit', desc: 'Analyzing your current website technical health, keyword opportunities, and competitor positioning.' },
      { step: '02', title: 'Keyword & Funnel Strategy', desc: 'Mapping high-intent service and industry keywords to dedicated landing pages.' },
      { step: '03', title: 'Technical SEO & Page Optimization', desc: 'Updating headings, metadata, schema markup, internal links, and page speed.' },
      { step: '04', title: 'Lead Capture & CRM Sync', desc: 'Connecting landing pages and ad forms to instant WhatsApp alerts and CRM tracking.' },
      { step: '05', title: 'Monthly Reporting & Iteration', desc: 'Reviewing search rankings, traffic growth, and lead quality to refine performance.' },
    ],
    technologies: ['Google Search Console', 'Google Analytics 4', 'Schema.org JSON-LD', 'Google Ads', 'Meta Ads Manager', 'Technical SEO', 'CRM Lead Webhooks', 'WhatsApp API'],
    industries: ['B2B & Manufacturing', 'Healthcare & Clinics', 'Education & Coaching', 'Real Estate', 'Hospitality & Restaurants', 'Legal & Professional Services', 'Retail & E-Commerce'],
    faqs: [
      { q: 'Do you include technical SEO when building a new website?', a: 'Yes. All our websites are built with clean semantic HTML, customizable meta titles/descriptions, canonical URLs, XML sitemaps, and Schema.org structured data.' },
    ],
    caseStudy: {
      client: 'Healthcare, Education & Industrial Lead Growth',
      challenge: 'Businesses had strong offline reputations but low search visibility and manual lead tracking from digital channels.',
      solution: 'Combined fast SEO-structured websites with local search optimization, targeted landing pages, and instant WhatsApp/CRM lead capture.',
      results: ['Strong top-page visibility for targeted industry & local keywords', 'Direct integration of website inquiries with WhatsApp & CRM', 'Higher visitor-to-inquiry conversion through clear landing pages', 'Consistent organic lead flow for sales teams'],
    },
  },
];