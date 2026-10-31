export type TestimonialStatus =
  | 'published'
  | 'pending_verification'
  | 'sample_preview'
  | 'draft';

export interface ServiceTestimonialItem {
  id: string;
  serviceSlug: string;
  serviceCategory: string;
  clientName: string;
  companyName?: string;
  designation?: string;
  rating: number | null;
  feedback: string;
  initials: string;
  reviewDate?: string;
  status: TestimonialStatus;
  verificationNote: string;
}

export interface LegacyTestimonialAuditEntry {
  legacyId: string;
  sourceFile: string;
  clientName: string;
  companyName: string;
  mappedServiceSlug: string;
  auditStatus: 'pending_verification' | 'sample_demo' | 'duplicate' | 'incomplete';
  auditNotes: string;
}

/**
 * Audit of legacy testimonial records found in src/mocks/testimonials.ts
 * and src/pages/home/components/TestimonialsCarousel.tsx.
 * None of the legacy template entries had independent client verification sign-off,
 * so they are flagged as 'pending_verification' / 'sample_demo' rather than auto-published as verified.
 */
export const existingTestimonialsAudit: LegacyTestimonialAuditEntry[] = [
  {
    legacyId: 'mocks-1',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Rajesh Mehta',
    companyName: 'MediCare Health',
    mappedServiceSlug: 'website-development',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy template entry referencing generic telemedicine metrics; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-2',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Priya Sharma',
    companyName: 'ShopNow Retail',
    mappedServiceSlug: 'website-development',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy template entry with generic e-commerce claims; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-3',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Vikram Joshi',
    companyName: 'FitTrack Wellness',
    mappedServiceSlug: 'mobile-app-development',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy template entry for consumer fitness app; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-4',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Anita Desai',
    companyName: 'TransGlobal Logistics',
    mappedServiceSlug: 'erp-solutions',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy template entry for logistics ERP; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-5',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Karan Malhotra',
    companyName: 'GrowthStack Inc.',
    mappedServiceSlug: 'crm-solutions',
    auditStatus: 'sample_demo',
    auditNotes: 'Single legacy CRM entry that caused the 1-card half-empty layout in screenshot; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-6',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Sneha Reddy',
    companyName: 'NexaTech Corp',
    mappedServiceSlug: 'cloud-solutions',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy cloud migration template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-7',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Arun Nair',
    companyName: 'BrandVista Agency',
    mappedServiceSlug: 'ai-automation',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy AI marketing template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-8',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Deepa Krishnan',
    companyName: 'EduLearn Academy',
    mappedServiceSlug: 'mobile-app-development',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy EdTech app template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-9',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Manish Gupta',
    companyName: 'RestaPro Hospitality',
    mappedServiceSlug: 'custom-software',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy hospitality software template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-10',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Rohit Bansal',
    companyName: 'FinSecure Technologies',
    mappedServiceSlug: 'custom-software',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy fintech template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-11',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Lakshmi Iyer',
    companyName: 'DesignCraft Studio',
    mappedServiceSlug: 'ui-ux-design',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy UI/UX design system template entry; flagged as sample/demo.',
  },
  {
    legacyId: 'mocks-12',
    sourceFile: 'src/mocks/testimonials.ts',
    clientName: 'Sanjay Patel',
    companyName: 'PrecisionMold Engineering',
    mappedServiceSlug: 'erp-solutions',
    auditStatus: 'sample_demo',
    auditNotes: 'Legacy manufacturing ERP template entry; flagged as sample/demo.',
  },
];

interface ServiceSeedConfig {
  slug: string;
  name: string;
  slots: {
    idSuffix: string;
    roleLabel: string;
    companyContext: string;
    initials: string;
    feedback: string;
    status?: TestimonialStatus;
    verificationNote?: string;
  }[];
}

const SERVICE_SEEDS: ServiceSeedConfig[] = [
  // 01. Custom Software Development
  {
    slug: 'custom-software',
    name: 'Custom Software Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Operations Head',
        companyContext: 'Multi-Branch Trading Enterprise',
        initials: 'OH',
        feedback:
          'Replacing scattered department spreadsheets with a unified custom web portal helped standardize branch approvals, user permissions, and daily MIS reporting.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Managing Partner',
        companyContext: 'Industrial Service Organization',
        initials: 'MP',
        feedback:
          'The custom workflow software was engineered around our exact operational steps rather than forcing our staff to adapt to a rigid off-the-shelf tool.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Director of Operations',
        companyContext: 'B2B Distribution Network',
        initials: 'DO',
        feedback:
          'Role-based dashboards for admin, accounts, and branch coordinators eliminated duplicate data entry and improved cross-team accountability.',
      },
      {
        idSuffix: '004',
        roleLabel: 'General Manager',
        companyContext: 'Equipment Rental & Service Firm',
        initials: 'GM',
        feedback:
          'Custom job-card tracking, technician scheduling, and automated client status updates gave management real-time operational visibility.',
      },
      {
        idSuffix: '005',
        roleLabel: 'IT & Process Lead',
        companyContext: 'Corporate Services Group',
        initials: 'IP',
        feedback:
          'Legacy desktop records were smoothly migrated into a secure browser-based system with automated daily backups and audit trails.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Business Owner',
        companyContext: 'Regional Supply Chain Business',
        initials: 'BO',
        feedback:
          'Having full ownership of our custom software without recurring per-user license fees allowed us to onboard our entire staff seamlessly.',
      },
    ],
  },

  // 02. ERP Software Development
  {
    slug: 'erp-solutions',
    name: 'ERP Software Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Plant Director',
        companyContext: 'Industrial Manufacturing Unit',
        initials: 'PD',
        feedback:
          'Connecting raw-material purchase orders, multi-godown inventory, and GST billing in one ERP system eliminated stock reconciliation delays.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Supply Chain Head',
        companyContext: 'Multi-Warehouse Distributor',
        initials: 'SC',
        feedback:
          'Real-time stock balances across all warehouses and automated low-stock reorder alerts prevented stockouts on fast-moving SKUs.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Finance Controller',
        companyContext: 'Trading & Wholesale Enterprise',
        initials: 'FC',
        feedback:
          'Purchase approvals, Goods Receipt Notes (GRN), vendor ledgers, and GST invoicing now flow in a single auditable workflow.',
      },
      {
        idSuffix: '004',
        roleLabel: 'VP Operations',
        companyContext: 'Multi-Branch Enterprise',
        initials: 'VP',
        feedback:
          'Head-office management can monitor branch-wise sales, dispatch challans, and expense vouchers live without waiting for end-of-month spreadsheets.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Procurement Manager',
        companyContext: 'Engineering Components Firm',
        initials: 'PM',
        feedback:
          'Supplier rate comparisons, PO approval hierarchies, and batch-level inward tracking brought discipline to our procurement cycle.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Managing Director',
        companyContext: 'Consumer Goods Distribution',
        initials: 'MD',
        feedback:
          'Department-specific role permissions ensure storekeepers, billing clerks, and accountants only access the modules relevant to their work.',
      },
    ],
  },

  // 03. CRM Software Development
  {
    slug: 'crm-solutions',
    name: 'CRM Software Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Sales Director',
        companyContext: 'B2B Solutions Provider',
        initials: 'SD',
        feedback:
          'Automated lead capture from website forms, Meta Lead Ads, and Google campaigns into one CRM pipeline stopped lead leakage across our sales team.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Business Development Head',
        companyContext: 'Real Estate Advisory Firm',
        initials: 'BD',
        feedback:
          'Round-robin lead assignment and scheduled follow-up reminders ensure every incoming prospect receives a timely call and WhatsApp greeting.',
      },
      {
        idSuffix: '003',
        roleLabel: 'National Sales Manager',
        companyContext: 'Industrial Equipment Supplier',
        initials: 'NS',
        feedback:
          'Our executives generate branded PDF quotations directly from the CRM deal screen and track revision history without switching tools.',
      },
      {
        idSuffix: '004',
        roleLabel: 'CRM Administrator',
        companyContext: 'Education & Admissions Center',
        initials: 'CA',
        feedback:
          'Role-based access controls allow counselors to manage only their assigned inquiries while branch managers view full funnel conversion reports.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Commercial Head',
        companyContext: 'Corporate Service Enterprise',
        initials: 'CH',
        feedback:
          'Having call notes, meeting logs, WhatsApp templates, and payment milestones linked to each client profile made handovers effortless.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Founder & CEO',
        companyContext: 'Growing B2B Sales Organization',
        initials: 'FC',
        feedback:
          'Executive analytics on lead source ROI and stage-by-stage sales conversion helped us focus our marketing budget on the highest-converting channels.',
      },
    ],
  },

  // 04. HRMS & Payroll Software
  {
    slug: 'hrms-software',
    name: 'HRMS & Payroll Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'HR Manager',
        companyContext: 'Multi-Location Service Company',
        initials: 'HR',
        feedback:
          'Syncing biometric attendance directly with shift rules, leave balances, and monthly payroll calculations reduced our payroll processing time from days to hours.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Head of People Operations',
        companyContext: 'Manufacturing & Assembly Workforce',
        initials: 'PO',
        feedback:
          'Automated PF, ESI, TDS, and loan/advance deductions with one-click PDF salary slip generation eliminated manual calculation disputes.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Admin & HR Lead',
        companyContext: 'Healthcare & Diagnostics Network',
        initials: 'AH',
        feedback:
          'The Employee Self-Service Portal empowers staff to download payslips, apply for leaves, and submit reimbursement claims without routine HR follow-ups.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Operations Controller',
        companyContext: 'Retail & Showroom Chain',
        initials: 'OC',
        feedback:
          'Multi-branch attendance visibility, late-mark policies, and overtime approval workflows gave store managers clear daily workforce control.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Talent Acquisition Lead',
        companyContext: 'IT & Professional Services Firm',
        initials: 'TA',
        feedback:
          'Digital employee onboarding, document verification checklists, and offer letter generation standardized our entire hiring-to-payroll lifecycle.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Finance & Payroll Head',
        companyContext: 'Logistics & Warehousing Group',
        initials: 'FP',
        feedback:
          'Bank disbursement sheet exports and department-wise salary registers integrate cleanly with our monthly accounting closure.',
      },
    ],
  },

  // 05. SaaS Application Development
  {
    slug: 'saas-development',
    name: 'SaaS Application Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Product Founder',
        companyContext: 'B2B Cloud SaaS Startup',
        initials: 'PF',
        feedback:
          'Multi-tenant database isolation, role-based organization workspaces, and subscription billing allowed us to onboard business tenants smoothly.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Co-Founder & CTO',
        companyContext: 'Hospitality SaaS Platform',
        initials: 'CT',
        feedback:
          'The super-admin control panel makes managing tenant subscriptions, trial periods, feature flags, and usage analytics straightforward.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Head of Product',
        companyContext: 'Vertical Workflow SaaS',
        initials: 'HP',
        feedback:
          'Automated recurring billing with Razorpay/Stripe webhooks and downloadable GST invoices gave our subscribers a frictionless upgrade flow.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Engineering Lead',
        companyContext: 'EdTech & Assessment SaaS',
        initials: 'EL',
        feedback:
          'Clean REST APIs, webhook events, and companion mobile app synchronization helped us launch our MVP on schedule and scale reliably.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Operations Director',
        companyContext: 'Property Operations Cloud',
        initials: 'OD',
        feedback:
          'Self-service tenant onboarding and guided workspace setup reduced our customer support workload during new account activation.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Managing Founder',
        companyContext: 'Enterprise Compliance SaaS',
        initials: 'MF',
        feedback:
          'Full source-code ownership, audit logging, and modular cloud architecture gave our enterprise clients confidence in data security.',
      },
    ],
  },

  // 06. Android & iOS App Development
  {
    slug: 'mobile-app-development',
    name: 'Android & iOS App Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Digital Operations Lead',
        companyContext: 'Service Booking Platform',
        initials: 'DL',
        feedback:
          'Launching Android and iOS apps from a unified Flutter codebase gave our customers a fast booking experience synced live with our web admin panel.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Field Operations Manager',
        companyContext: 'Distribution & Delivery Network',
        initials: 'FM',
        feedback:
          'Offline data capture and instant background sync allow our field executives to log visits and orders even in low-connectivity zones.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Head of E-Commerce',
        companyContext: 'D2C Retail Brand',
        initials: 'HE',
        feedback:
          'Push notifications, UPI checkout integration, and live order tracking inside our mobile app improved repeat customer orders.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Hospitality Manager',
        companyContext: 'Multi-Role Staff App Suite',
        initials: 'HM',
        feedback:
          'Staff update task and room statuses in one tap on their mobile phones, immediately reflecting on the reception and manager dashboards.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Product Manager',
        companyContext: 'Healthcare Patient App',
        initials: 'PM',
        feedback:
          'Appointment scheduling, prescription downloads, and automated reminder alerts were designed with a clean, accessible mobile interface.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Business Director',
        companyContext: 'Enterprise Companion App',
        initials: 'BD',
        feedback:
          'End-to-end support from interactive Figma mobile prototypes to Google Play Store and Apple App Store publishing made launch effortless.',
      },
    ],
  },

  // 07. Website & Web Application Development
  {
    slug: 'website-development',
    name: 'Website & Web Application Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Platform Administrator',
        companyContext: 'Multi-Portal Consultation Web Application',
        initials: 'PA',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Mavera Matching multi-portal web platform; awaiting formal client quote sign-off.',
        feedback:
          'Our multi-portal web platform brings user profiles, consultant dashboards, and central admin moderation together in a responsive interface.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Clinic Coordinator',
        companyContext: 'Healthcare & Appointment Website',
        initials: 'CC',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Mansha Clinic web platform; awaiting formal client quote sign-off.',
        feedback:
          'The responsive clinic website and 3-step appointment workflow made it simple for patients to view specialties and book visits online.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Marketing Head',
        companyContext: 'B2B Industrial Enterprise',
        initials: 'MH',
        feedback:
          'Fast page load speeds, structured service pages, and direct WhatsApp enquiry integration noticeably increased our website inquiry rate.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Operations Lead',
        companyContext: 'Dealer & Client Web Portal',
        initials: 'OL',
        feedback:
          'Our custom browser-based client portal lets partners log in securely, download invoices, and track service requests 24/7.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Managing Trustee',
        companyContext: 'Educational & Training Institute',
        initials: 'MT',
        feedback:
          'Mobile-first layouts, clean navigation, and an easy admin panel allow our team to publish updates and capture student inquiries smoothly.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Corporate Communications Lead',
        companyContext: 'Professional Services Group',
        initials: 'CL',
        feedback:
          'Semantic HTML structure, Schema.org metadata, and conversion-focused CTAs gave our brand a credible, modern digital presence.',
      },
    ],
  },

  // 08. AI & Business Automation
  {
    slug: 'ai-automation',
    name: 'AI & Business Automation',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Operations Head',
        companyContext: 'B2B Services Enterprise',
        initials: 'OH',
        feedback:
          'Automating repetitive data transfer between our inquiry forms, CRM, and billing sheets saved hours of manual back-office work every week.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Customer Success Manager',
        companyContext: 'Healthcare & Diagnostics Center',
        initials: 'CS',
        feedback:
          'Our 24/7 AI assistant answers routine patient FAQs, collects appointment preferences, and hands off complex queries to our front desk.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Finance & Accounts Lead',
        companyContext: 'Distribution & Logistics Firm',
        initials: 'FA',
        feedback:
          'Automated document data extraction from supplier invoices and purchase orders reduced manual typing errors in our accounting workflow.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Sales Operations Lead',
        companyContext: 'Real Estate & Property Advisory',
        initials: 'SO',
        feedback:
          'AI-assisted lead qualification scores incoming inquiries and triggers instant follow-up tasks so our sales reps focus on high-intent buyers.',
      },
      {
        idSuffix: '005',
        roleLabel: 'General Manager',
        companyContext: 'Multi-Branch Service Network',
        initials: 'GM',
        feedback:
          'Automated daily MIS summary reports are compiled and delivered to management every evening without manual spreadsheet consolidation.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Knowledge Manager',
        companyContext: 'Engineering & Support Organization',
        initials: 'KM',
        feedback:
          'An internal SOP assistant trained on our product manuals helps support executives find accurate technical answers in seconds.',
      },
    ],
  },

  // 09. WhatsApp Business API & Chatbot Integration
  {
    slug: 'whatsapp-automation',
    name: 'WhatsApp Business API & Chatbot Integration',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Sales Head',
        companyContext: 'B2B Dealer Network',
        initials: 'SH',
        feedback:
          'Interactive WhatsApp chatbot menus qualify incoming inquiries 24/7 and log lead details directly into our central sales dashboard.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Accounts Coordinator',
        companyContext: 'Wholesale & Trading Business',
        initials: 'AC',
        feedback:
          'Automated WhatsApp dispatch notifications, PDF GST invoice delivery, and polite payment reminders sped up our receivable collections.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Clinic Manager',
        companyContext: 'Outpatient Healthcare Center',
        initials: 'CM',
        feedback:
          'Patients receive instant WhatsApp appointment confirmations and day-before reminders, reducing no-shows at our reception desk.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Digital Marketing Lead',
        companyContext: 'Service & Consultation Brand',
        initials: 'DM',
        feedback:
          'Zero-cost WhatsApp Click-to-Chat enquiry forms across our service pages pre-fill customer requirements so conversations start with full context.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Customer Support Lead',
        companyContext: 'E-Commerce & Retail Store',
        initials: 'CS',
        feedback:
          'A shared multi-agent WhatsApp inbox allows our support team to assign customer chats, share product catalogs, and resolve order queries fast.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Dispatch Supervisor',
        companyContext: 'Industrial Order Fulfillment',
        initials: 'DS',
        feedback:
          'Dealers automatically receive LR/bilty details and dispatch status updates on WhatsApp the moment their order leaves our warehouse.',
      },
    ],
  },

  // 10. Inventory Management Software
  {
    slug: 'inventory-management-software',
    name: 'Inventory Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Warehouse Manager',
        companyContext: 'Multi-Godown Distribution Firm',
        initials: 'WM',
        feedback:
          'Real-time visibility into available, reserved, and in-transit stock across all godowns stopped our sales team from over-booking out-of-stock items.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Store Head',
        companyContext: 'Lubricants & Chemical Packaging Unit',
        initials: 'SH',
        feedback:
          'Tracking inventory across multiple pack sizes, batch numbers, and drum/carton units made physical stock audits fast and accurate.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Inventory Controller',
        companyContext: 'Auto Parts & Hardware Distributor',
        initials: 'IC',
        feedback:
          'Barcode label printing and handheld scanning during inward GRN and outward dispatch eliminated manual item-picking mistakes.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Procurement Lead',
        companyContext: 'FMCG & Consumer Goods Trader',
        initials: 'PL',
        feedback:
          'Automated minimum-stock threshold alerts and FIFO/FEFO batch expiry tracking helped us prevent both stockouts and expired inventory.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Operations Manager',
        companyContext: 'Retail & Wholesale Supply Chain',
        initials: 'OM',
        feedback:
          'Inter-branch stock transfer challans with receiver confirmation gave us a complete audit trail for every item movement.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Finance & Audit Lead',
        companyContext: 'Industrial Trading Company',
        initials: 'FA',
        feedback:
          'Live stock valuation, slow-moving SKU reports, and item-wise ledger histories simplified our monthly financial stock audits.',
      },
    ],
  },

  // 11. Billing & GST Software
  {
    slug: 'billing-gst-software',
    name: 'Billing & GST Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Senior Accountant',
        companyContext: 'B2B Wholesale Distributor',
        initials: 'SA',
        feedback:
          'Generating branded GST tax invoices, proforma bills, and delivery challans with automated CGST/SGST/IGST calculations cut billing time in half.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Commercial Manager',
        companyContext: 'Multi-Tier Dealer Network',
        initials: 'CM',
        feedback:
          'Dealer-specific price lists, scheme discounts, and credit-limit checks ensure every invoice follows our approved pricing rules automatically.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Finance Head',
        companyContext: 'Industrial Supplies Enterprise',
        initials: 'FH',
        feedback:
          'Party-wise ledger statements, bill-by-bill payment adjustments, and outstanding aging reports gave us tight control over receivables.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Tax & Compliance Lead',
        companyContext: 'Trading & Manufacturing Firm',
        initials: 'TC',
        feedback:
          'Exportable HSN/SAC summaries, GSTR-1/GSTR-3B sales registers, and Tally-compatible sheets made monthly CA tax filing smooth.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Branch Billing Supervisor',
        companyContext: 'Multi-Location Sales Counters',
        initials: 'BB',
        feedback:
          'One-click PDF invoice sharing on WhatsApp and daily cash/UPI/bank collection summaries streamlined our branch closing routine.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Business Proprietor',
        companyContext: 'Regional Distribution House',
        initials: 'BP',
        feedback:
          'Customizing the PDF invoice layout to match our exact company format, bank details, and terms made transition effortless for our buyers.',
      },
    ],
  },

  // 12. Order Management Software
  {
    slug: 'order-management-software',
    name: 'Order Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Order Desk Coordinator',
        companyContext: 'Lubricant Order Management Platform (order.maxmol.in)',
        initials: 'OD',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Lubricant Order Management Software (order.maxmol.in); awaiting formal client testimonial sign-off.',
        feedback:
          'Centralizing dealer and sales-team order booking with structured SKU grades and pack sizes replaced scattered phone and WhatsApp orders.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Dispatch & Warehouse Lead',
        companyContext: 'Industrial Lubricant Distribution',
        initials: 'DW',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Lubricant Order Management workflow; awaiting formal client testimonial sign-off.',
        feedback:
          'Real-time order status tracking from Pending and Approved to Packed and Dispatched keeps sales reps, accounts, and godown teams aligned.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Regional Sales Manager',
        companyContext: 'B2B Dealer Portal Network',
        initials: 'RS',
        feedback:
          'Dealers can log in from their mobile phones 24/7, view their applicable price tier, and place repeat orders in seconds.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Credit & Accounts Approver',
        companyContext: 'Wholesale Distribution Enterprise',
        initials: 'CA',
        feedback:
          'Built-in party credit checks and multi-level order approval queues ensure orders are verified by accounts before warehouse picking begins.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Fulfillment Head',
        companyContext: 'FMCG & Packaged Goods Supplier',
        initials: 'FH',
        feedback:
          'Generating warehouse pick-lists, packing slips, and transport LR details directly from approved orders eliminated dispatch errors.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Director of Sales',
        companyContext: 'Multi-State Channel Partner Network',
        initials: 'DS',
        feedback:
          'Executive analytics on top-selling SKUs, pack-size demand, and dealer ordering frequency helped us plan inventory and production accurately.',
      },
    ],
  },

  // 13. Manufacturing Management Software
  {
    slug: 'manufacturing-software',
    name: 'Manufacturing Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Production Manager',
        companyContext: 'Batch & Process Manufacturing Plant',
        initials: 'PM',
        feedback:
          'Multi-level Bill of Materials (BOM) and recipe management helped us standardize raw material ratios and track batch-wise production costs.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Shop-Floor Supervisor',
        companyContext: 'Industrial Component Manufacturer',
        initials: 'SF',
        feedback:
          'Converting approved sales demand into scheduled work orders and stage-wise job cards gave us live visibility across every production line.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Quality Assurance Head',
        companyContext: 'Chemical & Lubricant Blending Unit',
        initials: 'QA',
        feedback:
          'Inward raw-material QC logs, in-process lab test parameters, and batch traceability let us trace any finished lot back to its source materials.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Material Store In-Charge',
        companyContext: 'Packaging & Plastics Factory',
        initials: 'MS',
        feedback:
          'Tracking material requisitions from store to shop floor and comparing standard vs. actual consumption helped us reduce unaccounted scrap.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Vendor & Job-Work Coordinator',
        companyContext: 'Engineering & Fabrication Unit',
        initials: 'VJ',
        feedback:
          'Sub-contracting challans, material reconciliation with external job-workers, and processing charge ledgers are now tracked in one place.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Plant Head',
        companyContext: 'Multi-Shift Manufacturing Enterprise',
        initials: 'PH',
        feedback:
          'Daily shift output reports, machine downtime logs, and finished-goods handover to dispatch improved our on-time order fulfillment.',
      },
    ],
  },

  // 14. Hospital & Clinic Management Software
  {
    slug: 'hospital-management-software',
    name: 'Hospital & Clinic Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Clinic Administrator',
        companyContext: 'Mansha Clinic Healthcare Platform',
        initials: 'CA',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Mansha Clinic appointment & healthcare platform; awaiting formal client quote sign-off.',
        feedback:
          'Streamlining patient appointment booking into a simple 3-step digital flow reduced reception phone congestion and waiting-room crowding.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Medical Superintendent',
        companyContext: 'Multi-Specialty Outpatient Center',
        initials: 'MS',
        feedback:
          'Doctors generate e-prescriptions in seconds using customizable templates while accessing complete patient visit history and vitals in one click.',
      },
      {
        idSuffix: '003',
        roleLabel: 'IPD & Nursing Coordinator',
        companyContext: '50-Bed Nursing Home & Hospital',
        initials: 'IN',
        feedback:
          'Real-time ward and bed occupancy dashboards, admission notes, and structured discharge summaries brought clarity to our IPD operations.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Pathology Lab Head',
        companyContext: 'Diagnostic & Clinical Lab',
        initials: 'PL',
        feedback:
          'Sample barcode tracking and instant PDF lab report delivery to patients on WhatsApp eliminated manual report collection queues.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Chief Pharmacist',
        companyContext: 'In-House Hospital Pharmacy',
        initials: 'CP',
        feedback:
          'Doctor prescriptions flow directly to the pharmacy billing counter with medicine batch/expiry alerts and automated stock deduction.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Hospital Billing Manager',
        companyContext: 'Surgical & Maternity Center',
        initials: 'HB',
        feedback:
          'Consolidated OPD/IPD billing, package tariff management, and daily doctor payout reports simplified our hospital accounting.',
      },
    ],
  },

  // 15. Hotel Management Software
  {
    slug: 'hotel-management-software',
    name: 'Hotel Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'General Manager',
        companyContext: 'All-in-One Cloud Hotel Management Platform',
        initials: 'GM',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Hotel Management Software portfolio project; awaiting formal client quote sign-off.',
        feedback:
          'Synchronizing front-desk check-ins, live room rack status, housekeeping updates, and guest folios on one cloud platform modernized our property operations.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Front Office Manager',
        companyContext: 'Business & Boutique Hotel',
        initials: 'FO',
        feedback:
          'The visual reservation tape-chart, fast digital ID upload at check-in, and split-folio GST billing eliminated checkout delays for corporate guests.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Executive Housekeeper',
        companyContext: 'Resort & Hospitality Property',
        initials: 'EH',
        feedback:
          'Housekeeping staff update room status from Dirty to Clean on mobile, immediately alerting reception that the room is ready for check-in.',
      },
      {
        idSuffix: '004',
        roleLabel: 'F&B Manager',
        companyContext: 'Hotel Restaurant & Room Service',
        initials: 'FB',
        feedback:
          'Restaurant KOT orders and minibar charges post directly to the guest room folio so no room-service bill is ever missed during checkout.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Banquet & Events Head',
        companyContext: 'Hotel & Convention Center',
        initials: 'BE',
        feedback:
          'Managing hall availability, catering meal plans, advance deposits, and event billing in one calendar prevented double bookings.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Property Owner',
        companyContext: 'Multi-Property Hotel Group',
        initials: 'PO',
        feedback:
          'Night-audit revenue summaries, occupancy percentages, and ARR/RevPAR analytics are accessible live from my phone anywhere.',
      },
    ],
  },

  // 16. Logistics & Shipment Tracking Software
  {
    slug: 'logistics-software',
    name: 'Logistics & Shipment Tracking Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Transport Operations Head',
        companyContext: 'Multi-Branch Fleet & Cargo Operator',
        initials: 'TO',
        feedback:
          'Digitizing consignment booking (LR/Bilty), branch manifests, and transit hub arrival logs gave us live visibility of every shipment.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Fleet Manager',
        companyContext: 'Full-Truckload (FTL) Transport Company',
        initials: 'FM',
        feedback:
          'Tracking vehicle trip sheets, driver advances, diesel mileage, toll expenses, and document expiry dates improved our trip-wise profitability.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Billing & Accounts Lead',
        companyContext: '3PL & Contract Logistics Provider',
        initials: 'BA',
        feedback:
          'Instant digital Proof of Delivery (e-POD) uploads from the driver mobile app allowed us to bill corporate TBB clients weeks faster.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Hub Supervisor',
        companyContext: 'Parcel & Express Cargo Network',
        initials: 'HS',
        feedback:
          'Barcode package scanning during loading and unloading at transit hubs eliminated missing-carton disputes between branches.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Customer Service Manager',
        companyContext: 'B2B Freight Forwarding Firm',
        initials: 'CS',
        feedback:
          'Our public LR/AWB tracking page and automated WhatsApp dispatch alerts reduced routine "where is my shipment" phone calls by over half.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Managing Partner',
        companyContext: 'Regional Transport Corporation',
        initials: 'MP',
        feedback:
          'Managing Paid, To-Pay, and contractual corporate rate cards alongside market-vehicle broker settlements in one ERP streamlined our accounts.',
      },
    ],
  },

  // 17. Field Sales & GPS Tracking Software
  {
    slug: 'field-sales-tracking-software',
    name: 'Field Sales & GPS Tracking Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Regional Sales Head',
        companyContext: 'FMCG & Consumer Goods Network',
        initials: 'RS',
        feedback:
          'Geo-tagged selfie attendance and live beat-route tracking gave regional managers 100% transparency into daily field executive visits.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Sales Operations Manager',
        companyContext: 'Industrial & Lubricant Field Team',
        initials: 'SO',
        feedback:
          'Field reps punch dealer orders directly on the mobile app during shop visits, transmitting orders to the warehouse the same minute.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Finance & HR Controller',
        companyContext: 'Multi-State Field Service Force',
        initials: 'FH',
        feedback:
          'Automated kilometer calculation from GPS route logs eliminated inflated travel allowance (TA/DA) expense claims.',
      },
      {
        idSuffix: '004',
        roleLabel: 'National Sales Director',
        companyContext: 'Agri-Inputs & Dealer Distribution',
        initials: 'NS',
        feedback:
          'Offline visit check-ins and order caching allow our rural field executives to work smoothly even in low-network areas.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Zonal Manager',
        companyContext: 'Pharmaceutical Field Reporting',
        initials: 'ZM',
        feedback:
          'Planned vs. actual beat compliance reports and productive-call analytics helped us coach underperforming territories effectively.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Collections Lead',
        companyContext: 'Wholesale Channel Sales Team',
        initials: 'CL',
        feedback:
          'Field executives log cheque, UPI, and cash collections on-site and share instant digital receipts with dealers on WhatsApp.',
      },
    ],
  },

  // 18. Attendance & Workforce Management Software
  {
    slug: 'attendance-workforce-software',
    name: 'Attendance & Workforce Management Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Factory Admin Head',
        companyContext: 'Factory Attendance & Gate-Pass System (gatepass-orcin.vercel.app)',
        initials: 'FA',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Factory Attendance & Workforce Management Software (gatepass-orcin.vercel.app); awaiting formal client quote sign-off.',
        feedback:
          'Our live factory attendance dashboard tracks daily employee check-in/out logs, shift presence, and gate-pass movements in one centralized admin portal.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Plant HR Officer',
        companyContext: 'Industrial Workforce & Gate Control',
        initials: 'PH',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Gatepass Attendance admin workflow; awaiting formal client quote sign-off.',
        feedback:
          'Replacing paper gate registers with digital attendance and department filters eliminated end-of-month muster roll compilation delays.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Shift Operations Manager',
        companyContext: '24x7 Manufacturing Facility',
        initials: 'SO',
        feedback:
          'Managing rotational morning, evening, and night shifts with automated grace periods and overtime rules stopped shift-handover confusion.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Security & Gate Supervisor',
        companyContext: 'Industrial Plant & Warehouse Hub',
        initials: 'SG',
        feedback:
          'Digital employee out-passes and visitor gate passes with manager approval logs tightened our factory gate security.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Contract Labor Coordinator',
        companyContext: 'Engineering & Production Unit',
        initials: 'CL',
        feedback:
          'Separate attendance tracking for on-roll staff and contractor manpower made verifying monthly contractor billing effortless.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Payroll & Compliance Lead',
        companyContext: 'Multi-Unit Industrial Enterprise',
        initials: 'PC',
        feedback:
          'One-click exports of verified payable days, late marks, and approved OT hours integrate directly with our monthly salary processing.',
      },
    ],
  },

  // 19. Retail & POS Software
  {
    slug: 'retail-pos-software',
    name: 'Retail & POS Software',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Store Operations Manager',
        companyContext: 'Supermarket & Departmental Store',
        initials: 'SO',
        feedback:
          'High-speed barcode scanning, keyboard shortcuts, and integrated UPI QR checkout cut customer billing queues during peak evening hours.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Retail Chain Owner',
        companyContext: 'Multi-Outlet Specialty Retail',
        initials: 'RC',
        feedback:
          'Centralized control over pricing, festival combo offers, and live multi-store stock balances keeps all our outlets synchronized.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Showroom Manager',
        companyContext: 'Apparel & Footwear Showroom',
        initials: 'SM',
        feedback:
          'Custom barcode sticker printing and size/color variant matrices made stock lookup and counter billing effortless for our cashiers.',
      },
      {
        idSuffix: '004',
        roleLabel: 'CRM & Loyalty Lead',
        companyContext: 'Gourmet & Dry Fruit Retail Brand',
        initials: 'CL',
        feedback:
          'Rewarding repeat shoppers with loyalty points and sending digital invoices on WhatsApp noticeably improved repeat store visits.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Head Cashier & Accounts',
        companyContext: 'High-Volume Retail Counter',
        initials: 'HC',
        feedback:
          'Hold/recall bill options, split cash/card/UPI tenders, and shift-closing cash drawer reconciliation eliminated daily tally mismatches.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Purchase & Merchandising Head',
        companyContext: 'Multi-Brand Retail Store',
        initials: 'PM',
        feedback:
          'Item-wise profit margin reports, fast vs. slow-moving stock analytics, and automated store replenishment alerts optimized our shelf stock.',
      },
    ],
  },

  // 20. E-commerce Development
  {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'E-Commerce Manager',
        companyContext: 'D2C & Wholesale Dry Fruit Storefront',
        initials: 'EM',
        status: 'pending_verification',
        verificationNote: 'Maps to delivered Dryfruit Store e-commerce portfolio project; awaiting formal client quote sign-off.',
        feedback:
          'Our custom e-commerce storefront supports both retail gift box checkout and bulk corporate/wholesale inquiries with fast mobile browsing.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Founder & Brand Head',
        companyContext: 'D2C Consumer Brand',
        initials: 'FB',
        feedback:
          'A custom mobile-first shopping experience with smart category filters, coupon logic, and 1-page UPI/card checkout boosted our conversion rate.',
      },
      {
        idSuffix: '003',
        roleLabel: 'B2B Commerce Director',
        companyContext: 'Wholesale & Bulk Ordering Portal',
        initials: 'BC',
        feedback:
          'Tiered wholesale pricing, Minimum Order Quantity (MOQ) rules, and automated GST invoice downloads allowed us to digitize bulk buyer orders.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Marketplace Operations Lead',
        companyContext: 'Multi-Vendor E-Commerce Platform',
        initials: 'MO',
        feedback:
          'Vendor onboarding dashboards, product approval workflows, and automated commission calculation made managing multiple sellers simple.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Fulfillment & Logistics Lead',
        companyContext: 'Online Retail Brand',
        initials: 'FL',
        feedback:
          'Direct Shiprocket and courier API integration generates AWB labels automatically and sends live tracking links to shoppers.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Digital Growth Manager',
        companyContext: 'Omnichannel Retail Store',
        initials: 'DG',
        feedback:
          'Sharing a single inventory backend across our website and mobile shopping apps prevented overselling during festive sales.',
      },
    ],
  },

  // 21. API Development & Integration
  {
    slug: 'api-development-integration',
    name: 'API Development & Integration',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Head of Engineering',
        companyContext: 'Multi-Platform SaaS Business',
        initials: 'HE',
        feedback:
          'Well-documented REST APIs with JWT authentication and rate limiting connected our web dashboard, mobile apps, and partner portals reliably.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Finance Systems Lead',
        companyContext: 'Enterprise Billing & Accounting',
        initials: 'FS',
        feedback:
          'Two-way synchronization between our custom order portal, Razorpay payment webhooks, and Tally accounting eliminated manual CSV imports.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Operations Architect',
        companyContext: 'E-Commerce & Logistics Aggregator',
        initials: 'OA',
        feedback:
          'Automated courier AWB generation, webhook status listeners, and retry queues ensure zero lost shipment updates even during peak traffic.',
      },
      {
        idSuffix: '004',
        roleLabel: 'CRM Technical Lead',
        companyContext: 'Inside Sales & Telecalling Center',
        initials: 'CT',
        feedback:
          'Integrating cloud telephony click-to-call, WhatsApp Business Cloud API, and Meta Lead Ads webhooks unified our entire lead communication stack.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Plant IT Manager',
        companyContext: 'Manufacturing & Biometric Sync',
        initials: 'PI',
        feedback:
          'Custom hardware bridge APIs sync biometric attendance terminals, barcode scanners, and weighing scales directly with our cloud ERP.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Product CTO',
        companyContext: 'FinTech & Verification Platform',
        initials: 'PC',
        feedback:
          'Idempotent transaction handling, HMAC webhook verification, and OpenAPI documentation made third-party KYC and GSTN integrations rock-solid.',
      },
    ],
  },

  // 22. Software Maintenance & Support
  {
    slug: 'software-maintenance-support',
    name: 'Software Maintenance & Support',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'IT Operations Manager',
        companyContext: 'Enterprise ERP & Portal User',
        initials: 'IO',
        feedback:
          'Taking over our legacy web application with a structured code audit, SQL query indexing, and daily backups eliminated peak-hour slowdowns.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Operations Director',
        companyContext: 'Multi-Branch Billing Platform',
        initials: 'OD',
        feedback:
          'Priority SLA support via WhatsApp and phone gives our billing team peace of mind during high-volume month-end closing.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Compliance & Security Lead',
        companyContext: 'Healthcare & Patient Portal',
        initials: 'CS',
        feedback:
          'Scheduled security patching, SSL renewals, dependency upgrades, and off-site backup restoration drills keep our data protected.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Business Process Owner',
        companyContext: 'Custom CRM & Order System',
        initials: 'BP',
        feedback:
          'Under our Annual Maintenance Contract (AMC), we continuously roll out new MIS reports and workflow enhancements without rebuilding from scratch.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Digital Product Manager',
        companyContext: 'Android & iOS App Suite',
        initials: 'DP',
        feedback:
          'Regular OS compatibility updates for Android and iOS along with backend API monitoring keep our mobile apps running smoothly.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Managing Director',
        companyContext: 'Industrial Distribution Group',
        initials: 'MD',
        feedback:
          'Proactive uptime alerts and server resource monitoring resolve potential database bottlenecks before our staff even notice.',
      },
    ],
  },

  // 23. Cloud Deployment & Server Setup
  {
    slug: 'cloud-solutions',
    name: 'Cloud Deployment & Server Setup',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Infrastructure Lead',
        companyContext: 'SaaS & Web Application Company',
        initials: 'IL',
        feedback:
          'Migrating from slow shared hosting to containerized cloud servers with Nginx, Cloudflare WAF, and automated CI/CD eliminated deployment downtime.',
      },
      {
        idSuffix: '002',
        roleLabel: 'CTO',
        companyContext: 'Multi-Tenant Enterprise Platform',
        initials: 'CT',
        feedback:
          'Right-sized AWS and Linux VPS architecture with Redis caching delivered sub-second dashboard response times while controlling monthly cloud spend.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Database Administrator',
        companyContext: 'Financial & Billing System',
        initials: 'DA',
        feedback:
          'Automated daily encrypted PostgreSQL backups stored off-server with verified point-in-time recovery gave us complete disaster protection.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Engineering Manager',
        companyContext: 'Growing Product Team',
        initials: 'EM',
        feedback:
          'GitHub Actions CI/CD pipelines and staging-to-production release workflows allowed our developers to ship updates safely.',
      },
      {
        idSuffix: '005',
        roleLabel: 'IT Security Officer',
        companyContext: 'Corporate Portal Network',
        initials: 'IS',
        feedback:
          'Hardened SSH access, firewall policies, SSL auto-renewal, and DDoS protection secured our public-facing business applications.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Operations Head',
        companyContext: 'High-Traffic Booking Platform',
        initials: 'OH',
        feedback:
          '24/7 server health monitoring for CPU, memory, and disk usage ensures our platform stays fast during seasonal traffic spikes.',
      },
    ],
  },

  // 24. UI/UX Design
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Product Owner',
        companyContext: 'Enterprise ERP & Analytics Suite',
        initials: 'PO',
        feedback:
          'Interactive Figma prototypes allowed our department heads to test and approve every dashboard workflow before backend coding began.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Operations Manager',
        companyContext: 'Hospitality & Front-Desk System',
        initials: 'OM',
        feedback:
          'Role-specific screen designs with color-coded room status tiles reduced front-desk check-in to 3 intuitive steps for non-technical staff.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Mobile Product Lead',
        companyContext: 'Field Sales & Customer App',
        initials: 'MP',
        feedback:
          'Thumb-friendly mobile layouts and simplified order forms enabled our field executives to adopt the new app without lengthy training.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Frontend Engineering Lead',
        companyContext: 'Multi-Product SaaS Team',
        initials: 'FE',
        feedback:
          'A structured Figma design system with reusable component tokens, typography scales, and spacing rules sped up our React implementation.',
      },
      {
        idSuffix: '005',
        roleLabel: 'Clinic Director',
        companyContext: 'Healthcare Appointment Portal',
        initials: 'CD',
        feedback:
          'Redesigning our patient booking and doctor prescription screens improved readability, contrast, and daily consultation speed.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Founder',
        companyContext: 'B2B Order Management Portal',
        initials: 'FD',
        feedback:
          'Transforming complex SKU and pack-size tables into a clean, scannable order matrix made B2B ordering effortless for our dealers.',
      },
    ],
  },

  // 25. SEO & Digital Marketing Support
  {
    slug: 'digital-marketing',
    name: 'SEO & Digital Marketing Support',
    slots: [
      {
        idSuffix: '001',
        roleLabel: 'Growth & Marketing Lead',
        companyContext: 'B2B Manufacturing & Distribution',
        initials: 'GM',
        feedback:
          'Technical on-page SEO, Schema.org structured data, and dedicated industry landing pages improved our organic visibility for high-intent B2B searches.',
      },
      {
        idSuffix: '002',
        roleLabel: 'Clinic Administrator',
        companyContext: 'Local Healthcare & Specialty Clinic',
        initials: 'CA',
        feedback:
          'Local SEO and Google Business Profile optimization combined with click-to-WhatsApp landing pages increased direct patient appointment inquiries.',
      },
      {
        idSuffix: '003',
        roleLabel: 'Sales Director',
        companyContext: 'Industrial Equipment & Services',
        initials: 'SD',
        feedback:
          'Connecting Google Search campaigns and Meta lead forms directly to our CRM and WhatsApp ensured instant sales follow-up on every ad lead.',
      },
      {
        idSuffix: '004',
        roleLabel: 'Admission Head',
        companyContext: 'Education & Training Institute',
        initials: 'AH',
        feedback:
          'Conversion-focused landing pages and clear lead source attribution reports helped us track inquiry quality across every campaign.',
      },
      {
        idSuffix: '005',
        roleLabel: 'E-Commerce Brand Manager',
        companyContext: 'Specialty Retail Storefront',
        initials: 'EB',
        feedback:
          'Product schema markup, clean canonical URLs, and Core Web Vitals speed improvements strengthened our organic product discovery.',
      },
      {
        idSuffix: '006',
        roleLabel: 'Managing Partner',
        companyContext: 'Professional B2B Consultancy',
        initials: 'MP',
        feedback:
          'Educational blog content clusters and service comparison pages helped establish our authority and generate steady inbound consultations.',
      },
    ],
  },
];

const SERVICE_SLUG_ALIASES: Record<string, string> = {
  'custom-software-development': 'custom-software',
  'inventory-billing-software': 'inventory-management-software',
  'web-application-development': 'website-development',
  'payroll-management-system': 'hrms-software',
  'hospital-clinic-management-software': 'hospital-management-software',
  'lead-management-system': 'crm-solutions',
  'school-management-software': 'erp-solutions',
  'whatsapp-business-api': 'whatsapp-automation',
  'billing-invoicing-software': 'billing-gst-software',
  'order-management-system': 'order-management-software',
  'manufacturing-erp': 'manufacturing-software',
  'logistics-management-software': 'logistics-software',
  'field-force-tracking': 'field-sales-tracking-software',
  'gatepass-labour-attendance': 'attendance-workforce-software',
  'data-analytics-bi': 'custom-software',
  'devops-deployment': 'cloud-solutions',
  'maintenance-support': 'software-maintenance-support',
  'seo-digital-visibility': 'digital-marketing',
};

export function resolveServiceTestimonialSlug(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  return SERVICE_SLUG_ALIASES[slug] || slug;
}

function stripDevMarkers(text: string): string {
  return text
    .replace(/\s*\(Sample Preview\)/gi, '')
    .replace(/\s*\(Pending Verification\)/gi, '')
    .replace(/^Sample Preview Slot:\s*/i, '')
    .replace(/^Pending Verification Slot:\s*/i, '')
    .trim();
}

/**
 * Verified & Approved Client Reviews (`status: 'published'`).
 *
 * Add genuine, client-approved testimonials here with `status: 'published'`.
 * Only entries with `status: 'published'` are rendered on the live website.
 * If a service has fewer than 6 published reviews, only the available published reviews are shown.
 * If a service has 0 published reviews, the testimonial section is automatically hidden on the live page.
 */
export const publishedServiceTestimonials: Record<string, ServiceTestimonialItem[]> = Object.fromEntries(
  SERVICE_SEEDS.map((service) => [service.slug, []])
);

/**
 * Unpublished Service Testimonial Entries (`status: 'pending_verification' | 'draft'`).
 *
 * Preserved separately for future editing across all 25 services (6 slots per service = 150 slots).
 * These entries are never rendered on the live website until verified with a real client name,
 * approved feedback, and moved/updated to `status: 'published'`.
 */
export const unpublishedServiceTestimonials: Record<string, ServiceTestimonialItem[]> =
  Object.fromEntries(
    SERVICE_SEEDS.map((service) => [
      service.slug,
      service.slots.map((slot) => {
        const cleanDesignation = stripDevMarkers(slot.roleLabel);
        const cleanFeedback = stripDevMarkers(slot.feedback);
        const normalizedStatus: TestimonialStatus =
          slot.status === 'published'
            ? 'published'
            : slot.status === 'pending_verification'
            ? 'pending_verification'
            : 'draft';

        return {
          id: `${service.slug}-${slot.idSuffix}`,
          serviceSlug: service.slug,
          serviceCategory: service.name,
          clientName: '',
          designation: cleanDesignation,
          companyName: slot.companyContext,
          rating: null,
          feedback: cleanFeedback,
          initials: slot.initials,
          status: normalizedStatus,
          verificationNote:
            slot.verificationNote ||
            `Unpublished draft slot (${slot.idSuffix} of 006) for ${service.name}. Populate verified clientName, feedback, and set status to 'published' after formal client approval.`,
        };
      }),
    ])
  );

/**
 * Combined 25 Services × 6 Review Slots repository.
 * Merges any verified `publishedServiceTestimonials` with the remaining slots in `unpublishedServiceTestimonials`
 * so each of the 25 services always maintains at least 6 structured review entries.
 */
export const serviceTestimonials: Record<string, ServiceTestimonialItem[]> = Object.fromEntries(
  SERVICE_SEEDS.map((service) => {
    const published = (publishedServiceTestimonials[service.slug] || []).filter(
      (item) => item.status === 'published'
    );
    const unpublished = (unpublishedServiceTestimonials[service.slug] || []).filter(
      (item) => item.status !== 'published'
    );
    return [service.slug, [...published, ...unpublished]];
  })
);

/**
 * Returns ONLY verified, approved client testimonials (`status === 'published'`) for the live website.
 * Guarantees no development placeholders, draft slots, or unverified reviews ever appear in production.
 */
export function getPublishedServiceTestimonials(
  slug: string | undefined
): ServiceTestimonialItem[] {
  const resolved = resolveServiceTestimonialSlug(slug);
  if (!resolved) return [];
  const all = serviceTestimonials[resolved] || [];
  return all.filter(
    (item) =>
      item.status === 'published' &&
      Boolean(item.clientName && item.clientName.trim().length > 0) &&
      Boolean(item.feedback && item.feedback.trim().length > 0)
  );
}

/**
 * Legacy helper maintained for compatibility. Defaults to `'published_only'` so live callers
 * only receive verified `status === 'published'` entries.
 */
export function getServiceTestimonials(
  slug: string | undefined,
  mode: 'published_only' | 'all_slots' = 'published_only'
): ServiceTestimonialItem[] {
  const resolved = resolveServiceTestimonialSlug(slug);
  if (!resolved) return [];
  if (mode === 'published_only') {
    return getPublishedServiceTestimonials(resolved);
  }
  return serviceTestimonials[resolved] || [];
}

export function getServiceTestimonialStats(slug: string | undefined) {
  const resolved = resolveServiceTestimonialSlug(slug);
  const all = resolved ? serviceTestimonials[resolved] || [] : [];
  return {
    totalSlots: all.length,
    publishedCount: all.filter((i) => i.status === 'published').length,
    pendingCount: all.filter((i) => i.status === 'pending_verification').length,
    draftCount: all.filter((i) => i.status === 'draft').length,
  };
}

