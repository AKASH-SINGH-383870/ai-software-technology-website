export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  duration: string;
  team: string;
  image: string;
  fallbackImage?: string;
  imageAlt?: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string[];
  workflow: string[];
  results: { value: string; label: string }[];
  businessBenefits: string[];
  liveUrl?: string;
  relatedServices: { name: string; slug: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  techStack: string[];
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 101,
    slug: 'lubricant-order-management-software',
    title: 'Lubricant Order Management Software — Dealer Order Booking & Dispatch Coordination System',
    client: 'Lubricant Manufacturing & Distribution Operations',
    industry: 'Manufacturing / Order Management',
    service: 'custom-software',
    duration: 'Custom Deployment',
    team: 'Order Management & ERP Engineering Team',
    image: '/images/portfolio/lubricant-order-management-software.png',
    fallbackImage: 'https://i.ibb.co/d0x0r17z/Lubricant-ERP-Dashboard-1.png',
    imageAlt: 'Lubricant Order Management Software — AI Software Technology',
    overview:
      'A web-based B2B order management system engineered for lubricant manufacturing and distribution businesses to streamline dealer order placement, SKU and pack-size selection, centralized order tracking, and warehouse dispatch coordination.',
    challenge:
      'Lubricant manufacturers and distribution networks manage an extensive range of engine oils, gear oils, hydraulic oils, coolants, and industrial greases across varied pack sizes (pouches, cans, buckets, and barrels). When dealers and sales representatives submit orders through phone calls, handwritten slips, or unstructured messages, operations teams face SKU mismatches, pack-size confusion, delayed order verification, and lack of visibility into dispatch status.',
    approach:
      'AI Software Technology designed a dedicated web-based Dealer Order & Dispatch Management platform that structures the entire lubricant product catalog and connects dealers, sales coordinators, and dispatch teams through a unified digital workflow.',
    solution: [
      'Centralized digital lubricant product catalog organized by category, viscosity grade, and packaging unit',
      'Streamlined dealer and distributor order placement interface with structured SKU and quantity selection',
      'Back-office order review dashboard enabling operations teams to verify, approve, and process incoming orders',
      'End-to-end order lifecycle tracking across Pending, Confirmed, Processing, and Dispatched stages',
      'Itemized order summaries formatted for billing, warehouse picking, and dispatch planning',
      'Responsive web application accessible directly from mobile browsers and desktop workstations without complex setup',
    ],
    workflow: [
      'Step 1 — Catalog Browse & SKU Selection: Dealers or field executives browse lubricant products filtered by category, grade, and pack size.',
      'Step 2 — Digital Order Submission: Selected items and carton/drum quantities are added to a structured order requisition and submitted online.',
      'Step 3 — Central Order Verification: The back-office operations team receives the structured order on the admin dashboard for review and confirmation.',
      'Step 4 — Warehouse Picking & Dispatch Coordination: Approved orders move to warehouse preparation and dispatch scheduling with real-time status updates.',
      'Step 5 — Order Completion & Record Archiving: Dispatched orders are logged centrally for dealer history and operational tracking.',
    ],
    results: [
      { value: 'Structured', label: 'SKU & Pack-Size Selection' },
      { value: 'Centralized', label: 'Dealer Order Dashboard' },
      { value: 'Real-Time', label: 'Order & Dispatch Status' },
      { value: 'Web-Based', label: 'Mobile & Desktop Access' },
    ],
    businessBenefits: [
      'Eliminates manual order entry mistakes caused by unstructured phone calls or chat messages',
      'Gives dealers a clear, self-service digital catalog with accurate product grades and packaging options',
      'Accelerates coordination between order booking, warehouse packing, and dispatch teams',
      'Maintains a complete, searchable history of dealer orders for operational transparency',
      'Reduces administrative follow-up calls regarding order status and dispatch readiness',
    ],
    liveUrl: 'http://order.maxmol.in/',
    relatedServices: [
      { name: 'Order Management Software', slug: 'order-management-software' },
      { name: 'ERP Software Development', slug: 'erp-solutions' },
      { name: 'Inventory Management Software', slug: 'inventory-management-software' },
      { name: 'Custom Software Development', slug: 'custom-software' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Cloud Web Hosting'],
    tags: ['Order Management', 'Manufacturing Software', 'Dealer Portal', 'Dispatch Coordination'],
  },
  {
    id: 102,
    slug: 'astrology-matrimonial-platform',
    title: 'Astrology & Matrimonial Platform — Multi-Portal Web Application with User, Astrologer & Admin Dashboards',
    client: 'AstroMilaan — Multi-Portal Web Platform',
    industry: 'Custom Web Application / Multi-Portal Platform',
    service: 'website-development',
    duration: 'Custom Deployment',
    team: 'Multi-Portal Web Application Team',
    image: '/images/portfolio/astrology-and-matrimonial-platform.png',
    fallbackImage: 'https://i.ibb.co/WWt9vRyM/Astrology-and-matrimonial-platform-3.png',
    imageAlt: 'Astrology and Matrimonial Platform — AI Software Technology',
    overview:
      'A multi-portal astrology consultation and matrimonial matchmaking web platform built with dedicated, role-secured interfaces for end users, professional astrologers, and platform administrators.',
    challenge:
      'Platforms offering both matrimonial matchmaking and astrology consultations often suffer from fragmented user experiences — forcing members to use separate websites for partner search and horoscope compatibility, while astrologers and administrators lack dedicated tools to manage consultations, profile verifications, and service requests.',
    approach:
      'We architected a cohesive multi-portal web application that unifies matrimonial profile discovery, astrological Kundali matching, and astrologer consultations under one platform, supported by separate role-based dashboards for Users, Astrologers, and Admins.',
    solution: [
      'User Portal featuring matrimonial profile management, partner preference filtering, compatibility matching, and astrologer booking',
      'Astrologer Portal enabling practitioners to manage profile details, consultation schedules, horoscope queries, and user sessions',
      'Admin Portal providing centralized oversight of user registrations, astrologer onboarding, content moderation, and platform settings',
      'Integrated Kundali / horoscope compatibility workflow bridging matrimonial discovery with expert astrological guidance',
      'Role-based access control ensuring each participant group interacts only with its authorized dashboard and tools',
      'Responsive UI engineered for smooth navigation across smartphones, tablets, and desktop browsers',
    ],
    workflow: [
      'Step 1 — User Onboarding & Profile Creation: Members register on the User Portal, complete matrimonial and birth-chart details, and set partner preferences.',
      'Step 2 — Match Discovery & Compatibility Check: Users explore compatible profiles and evaluate astrological harmony through integrated matching tools.',
      'Step 3 — Astrologer Consultation Booking: Users select verified astrologers for personalized horoscope analysis and marriage compatibility guidance.',
      'Step 4 — Astrologer Session Management: Astrologers log into their dedicated portal to review bookings, manage availability, and deliver consultations.',
      'Step 5 — Admin Governance & Moderation: Platform administrators verify profiles, onboard astrologers, and monitor platform operations from the Admin Portal.',
    ],
    results: [
      { value: '3 Portals', label: 'User, Astrologer & Admin Views' },
      { value: 'Integrated', label: 'Matrimonial & Astrology Workflow' },
      { value: 'Role-Based', label: 'Secure Access & Dashboards' },
      { value: 'Responsive', label: 'Mobile & Desktop Web UI' },
    ],
    businessBenefits: [
      'Combines two complementary services — matrimonial matchmaking and astrology consultation — into a single digital ecosystem',
      'Provides astrologers with a structured workspace to manage client consultations and availability',
      'Gives platform administrators full control over profile quality, astrologer approvals, and service configuration',
      'Delivers a modern, mobile-friendly user experience that simplifies both partner search and horoscope consultation',
    ],
    liveUrl: 'https://astromilaan.ai.studio/',
    relatedServices: [
      { name: 'Website & Portal Development', slug: 'website-development' },
      { name: 'Custom Software Development', slug: 'custom-software' },
      { name: 'SaaS Application Development', slug: 'saas-development' },
      { name: 'UI/UX Design', slug: 'ui-ux-design' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Multi-Portal Architecture', 'Role-Based Routing', 'Cloud Web Deployment'],
    tags: ['Multi-Portal Platform', 'Custom Web App', 'Astrology & Matrimonial', 'Role-Based Dashboards'],
  },
  {
    id: 103,
    slug: 'factory-attendance-management-software',
    title: 'Factory Attendance & Workforce Management Software — Shift Monitoring & Gate-Pass System',
    client: 'Industrial Workforce & Gate-Pass Operations',
    industry: 'Attendance / HRMS / Workforce Management',
    service: 'hrms-software',
    duration: 'Custom Deployment',
    team: 'HRMS & Industrial Software Team',
    image: '/images/portfolio/factory-attendance-workforce-management.png',
    fallbackImage: 'https://i.ibb.co/21RX1GBN/Factory-workforce-management-dashboard-2.png',
    imageAlt: 'Factory Attendance and Workforce Management Software — AI Software Technology',
    overview:
      'A web-based factory attendance, digital gate-pass, and workforce monitoring system built for industrial plants and multi-shift organizations to track daily employee presence, shift movements, and attendance logs in real time.',
    challenge:
      'Industrial facilities and factories managing workers across multiple shifts face daily operational challenges when relying on manual gate registers, paper gate passes, and disconnected spreadsheets. Plant supervisors lack immediate visibility into shift-wise headcount and late arrivals, security gates struggle to track authorized worker movements, and HR teams spend days reconciling monthly attendance and overtime.',
    approach:
      'AI Software Technology developed a centralized web-based Factory Attendance & Gate-Pass Management portal that gives HR managers, plant administrators, and security supervisors real-time visibility into daily attendance, shift rosters, and gate-pass movements.',
    solution: [
      'Centralized admin attendance dashboard displaying real-time Present, Absent, Late, and On-Leave workforce counts',
      'Multi-shift attendance monitoring with check-in/check-out timestamp logs and overtime tracking',
      'Digital gate-pass management for recording authorized employee entry/exit movements during shift hours',
      'Department-wise and worker-category filtering for fast operational review by plant supervisors',
      'Attendance exception tracking for late arrivals, early departures, and missed punches',
      'Structured attendance reports and exportable summaries ready for monthly HR and payroll processing',
    ],
    workflow: [
      'Step 1 — Daily Shift Check-In Capture: Worker attendance and shift check-in timestamps are recorded and synced to the central attendance portal.',
      'Step 2 — Live Headcount & Shift Monitoring: HR and plant supervisors view real-time department and shift-wise presence on the admin dashboard.',
      'Step 3 — Digital Gate-Pass Issuance & Verification: Temporary worker movements or early exits are logged via digital gate passes with approval status.',
      'Step 4 — Exception & Overtime Review: Supervisors review late arrivals, overtime hours, and shift deviations directly from filtered attendance tables.',
      'Step 5 — Monthly Attendance Summary & Payroll Readiness: Consolidated attendance records are generated for accurate salary and compliance processing.',
    ],
    results: [
      { value: 'Real-Time', label: 'Shift & Headcount Visibility' },
      { value: 'Digital', label: 'Gate-Pass & Movement Logs' },
      { value: 'Multi-Shift', label: 'Department & Roster Tracking' },
      { value: 'Payroll-Ready', label: 'Structured Attendance Reports' },
    ],
    businessBenefits: [
      'Replaces manual security gate registers and paper gate passes with a verifiable digital record',
      'Gives factory management instant visibility into shift-wise workforce availability across departments',
      'Reduces time spent by HR teams compiling daily attendance logs, late marks, and overtime hours',
      'Improves plant security and accountability by tracking employee in/out movements during shifts',
      'Provides clean, structured attendance data that simplifies monthly payroll preparation',
    ],
    liveUrl: 'https://gatepass-orcin.vercel.app/admin/attendance',
    relatedServices: [
      { name: 'Attendance & Workforce Software', slug: 'attendance-workforce-software' },
      { name: 'HRMS Software Development', slug: 'hrms-software' },
      { name: 'ERP Software Development', slug: 'erp-solutions' },
      { name: 'Custom Software Development', slug: 'custom-software' },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Workforce Analytics UI', 'Vercel Cloud'],
    tags: ['Factory Attendance', 'Gate-Pass System', 'HRMS Software', 'Workforce Management'],
  },
  {
    id: 1,
    slug: 'medicare-patient-platform',
    title: 'Multi-Clinic Hospital Management System (HMS) & Patient CRM Architecture',
    client: 'Multi-Clinic Healthcare Network',
    industry: 'Healthcare & Diagnostics',
    service: 'hospital-management-software',
    duration: '16 Weeks',
    team: 'Architecture & Full-Stack Team',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20telemedicine%20platform%20on%20multiple%20devices%20showing%20video%20consultation%20interface%2C%20medical%20dashboard%20with%20patient%20data%2C%20clean%20healthcare%20UI%20design%20with%20teal%20and%20white%20colors%2C%20professional%20medical%20tech%20environment%2C%20warm%20ambient%20lighting%2C%20high%20detail%20mockup&width=1200&height=700&seq=cs-medicare&orientation=landscape',
    imageAlt: 'Multi-Clinic Hospital Management System (HMS) & Patient CRM Architecture — AI Software Technology',
    overview:
      'A centralized web-based Hospital & Clinic Management System (HMS) engineered for multi-location clinics to unify patient registration, OPD/IPD billing, pathology lab reporting, pharmacy stock, and automated follow-up reminders.',
    challenge:
      'Multi-location clinics struggled with fragmented patient registration, manual OPD queue management, disconnected lab reporting, and missed follow-up appointments across branches. Staff relied on separate registers and spreadsheets, causing billing delays and incomplete patient medical histories.',
    approach:
      'We conducted workflow mapping across reception, doctor consultation cabins, pharmacy, and pathology units. We architected a centralized web-based Hospital & Clinic Management System with role-based access control, automated WhatsApp appointment reminders, and integrated OPD/IPD billing.',
    solution: [
      'Centralized patient registration with UHID generation and digital case history',
      'Doctor appointment scheduling, token queue display, and e-prescription module',
      'Integrated pathology lab test workflow and digital PDF report delivery via WhatsApp',
      'Pharmacy stock management with batch expiry alerts and GST billing',
      'Patient follow-up CRM with automated recall reminders for chronic care',
      'Branch-wise revenue, doctor consultation, and daily collection reports',
    ],
    workflow: [
      'Step 1 — Patient Registration & Token Generation: Reception registers the patient with a unique UHID and assigns a consultation slot.',
      'Step 2 — Doctor Consultation & Digital Prescription: Doctors review patient history and record clinical notes, prescriptions, and lab requisitions.',
      'Step 3 — Integrated Lab & Pharmacy Billing: Lab tests and prescribed medicines flow directly to pathology and pharmacy billing counters.',
      'Step 4 — Automated Follow-Up & MIS Reporting: Patients receive digital receipts and follow-up reminders while management tracks daily branch collections.',
    ],
    results: [
      { value: 'Unified', label: 'OPD, Lab & Pharmacy Workflow' },
      { value: 'Automated', label: 'WhatsApp Appointment Reminders' },
      { value: 'Role-Based', label: 'Doctor, Reception & Admin Portals' },
      { value: 'Real-Time', label: 'Branch Collection & Billing Reports' },
      { value: 'Paperless', label: 'Digital E-Prescription & Case History' },
    ],
    businessBenefits: [
      'Replaces disconnected paper registers across reception, doctor cabins, lab, and pharmacy',
      'Reduces patient waiting times with structured token queues and appointment scheduling',
      'Prevents medicine stockouts and expiry losses with batch-level pharmacy inventory tracking',
      'Gives clinic owners real-time visibility into daily OPD collections across branches',
    ],
    relatedServices: [
      { name: 'Hospital & Clinic Management Software', slug: 'hospital-management-software' },
      { name: 'Custom Software Development', slug: 'custom-software' },
      { name: 'CRM Software Development', slug: 'crm-solutions' },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'WhatsApp Integration', 'AWS'],
    tags: ['Hospital Management', 'Healthcare CRM', 'Custom Software', 'Billing & OPD'],
  },
  {
    id: 2,
    slug: 'shopnow-ecommerce-scale',
    title: 'Sales CRM, Lead Pipeline & WhatsApp Automation Platform for High-Volume Teams',
    client: 'B2B & Service Sales Organization',
    industry: 'Sales & Lead Management',
    service: 'crm-solutions',
    duration: '12 Weeks',
    team: 'CRM & Automation Team',
    image:
      'https://readdy.ai/api/search-image?query=Ecommerce%20platform%20dashboard%20on%20large%20screen%20showing%20product%20management%20and%20sales%20analytics%2C%20modern%20retail%20UI%20with%20warm%20orange%20accents%2C%20fashion%20and%20electronics%20products%20displayed%2C%20bright%20contemporary%20office%2C%20high%20detail%20business%20photography&width=1200&height=700&seq=cs-shopnow&orientation=landscape',
    imageAlt: 'Sales CRM, Lead Pipeline & WhatsApp Automation Platform — AI Software Technology',
    overview:
      'A centralized Custom CRM & Lead Management System designed for sales-driven teams to capture multi-channel enquiries, automate telecaller allocation, track follow-up pipelines, and generate quotations.',
    challenge:
      'Sales teams capturing inquiries from website forms, Meta ads, Google ads, and phone calls were tracking leads in scattered Excel sheets. Follow-ups were frequently missed, duplicate leads caused confusion among telecallers, and management lacked real-time visibility into counselor conversion rates.',
    approach:
      'We engineered a centralized Custom CRM Software featuring automatic multi-channel lead capture, round-robin telecaller assignment, quotation generation, and WhatsApp follow-up workflows.',
    solution: [
      'Automatic lead capture from website forms, landing pages, Meta & Google campaigns',
      'Rule-based lead distribution and telecaller/counselor assignment engine',
      'Interactive Kanban sales pipeline with custom deal stages and status logs',
      'Automated follow-up task scheduling with WhatsApp, SMS, and email alerts',
      'Integrated quotation, proforma invoice, and payment collection tracking',
      'Team performance dashboards tracking call logs, conversion ratios, and revenue targets',
    ],
    workflow: [
      'Step 1 — Multi-Channel Lead Capture: Inquiries from web forms, ads, and calls enter the central CRM database automatically.',
      'Step 2 — Automated Executive Assignment: Leads are routed to sales executives based on territory, service line, or round-robin rules.',
      'Step 3 — Structured Follow-Up & Quotation: Sales reps log call notes, schedule follow-up reminders, and send branded quotations.',
      'Step 4 — Pipeline Conversion & Analytics: Management monitors deal stages, executive productivity, and conversion funnels in real time.',
    ],
    results: [
      { value: 'Zero', label: 'Lead Leakage Across Channels' },
      { value: '24 Modules', label: 'Complete Sales & Post-Sales CRM' },
      { value: 'Instant', label: 'Lead Routing & Follow-Up Alerts' },
      { value: '360° View', label: 'Client Interaction & Call Timeline' },
      { value: 'Live MIS', label: 'Executive & Branch Conversion Reports' },
    ],
    businessBenefits: [
      'Eliminates lead leakage between marketing campaigns and sales telecallers',
      'Enforces disciplined follow-up schedules with automated task reminders',
      'Standardizes quotation and proposal generation across the sales team',
      'Provides leadership with transparent daily, weekly, and monthly conversion analytics',
    ],
    relatedServices: [
      { name: 'CRM Software Development', slug: 'crm-solutions' },
      { name: 'WhatsApp Automation Systems', slug: 'whatsapp-automation' },
      { name: 'AI Automation Solutions', slug: 'ai-automation' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WhatsApp Integration', 'Webhook Integrations'],
    tags: ['CRM Software', 'Lead Management', 'WhatsApp Automation', 'Sales Pipeline'],
  },
  {
    id: 3,
    slug: 'logichain-erp-transformation',
    title: 'Multi-Warehouse ERP, Inventory, Purchase & GST Billing System',
    client: 'Manufacturing & Distribution Enterprise',
    industry: 'Manufacturing & Supply Chain',
    service: 'erp-solutions',
    duration: '20 Weeks',
    team: 'ERP Systems Team',
    image:
      'https://readdy.ai/api/search-image?query=Logistics%20ERP%20dashboard%20on%20ultrawide%20monitor%20showing%20fleet%20tracking%20map%20and%20supply%20chain%20analytics%2C%20dark%20blue%20and%20orange%20theme%2C%20shipping%20containers%20visible%20through%20office%20window%2C%20industrial%20corporate%20setting%2C%20high%20detail%20professional%20photography&width=1200&height=700&seq=cs-logichain&orientation=landscape',
    imageAlt: 'Multi-Warehouse ERP, Inventory, Purchase & GST Billing System — AI Software Technology',
    overview:
      'A modular Custom ERP Platform connecting procurement, multi-location warehouse inventory, production planning (BOM), GST invoicing, and executive MIS reporting in one unified database.',
    challenge:
      'Managing purchase orders, vendor rate comparisons, raw material inventory, multi-warehouse stock transfers, and dispatch billing across separate tools resulted in stock discrepancies, delayed procurement approvals, and slow monthly financial reconciliation.',
    approach:
      'We designed and deployed a modular Custom ERP System connecting procurement, multi-location inventory, production planning, GST invoicing, and management reporting in a single unified database.',
    solution: [
      'Multi-warehouse inventory control with barcode/QR batch tracking and reorder alerts',
      'Purchase requisition, vendor quotation comparison, and multi-level PO approval workflows',
      'Production planning, bill of materials (BOM), and raw-material consumption tracking',
      'GST-compliant invoicing, e-way bill data preparation, and customer ledger tracking',
      'Branch and godown stock transfer workflows with dispatch challan generation',
      'Executive MIS dashboards for stock valuation, receivables, and vendor payables',
    ],
    workflow: [
      'Step 1 — Procurement & PO Approval: Material requisitions trigger vendor comparisons and multi-level purchase order approvals.',
      'Step 2 — GRN & Warehouse Stock Inward: Incoming goods are verified against POs and logged into warehouse racks with batch tracking.',
      'Step 3 — Production & Order Allocation: Raw materials are allocated via BOMs or finished goods are reserved against dealer orders.',
      'Step 4 — GST Billing & Dispatch: Dispatch challans and GST invoices are generated with automatic ledger and inventory updates.',
    ],
    results: [
      { value: '12 Core', label: 'Integrated Enterprise ERP Modules' },
      { value: 'Real-Time', label: 'Multi-Warehouse Stock Accuracy' },
      { value: 'Automated', label: 'PO Approvals & Reorder Alerts' },
      { value: 'Centralized', label: 'Vendor, Billing & Ledger Control' },
      { value: 'Audit-Ready', label: 'Role Permissions & Activity Logs' },
    ],
    businessBenefits: [
      'Unifies purchase, inventory, production, and billing teams on a single source of truth',
      'Prevents stockouts and excess inventory through automated minimum-stock alerts',
      'Speeds up GST billing, dispatch documentation, and customer receivable tracking',
      'Delivers instant branch-wise and warehouse-wise operational visibility',
    ],
    relatedServices: [
      { name: 'ERP Software Development', slug: 'erp-solutions' },
      { name: 'Inventory Management Software', slug: 'inventory-management-software' },
      { name: 'Billing & GST Software', slug: 'billing-gst-software' },
      { name: 'Custom Software Development', slug: 'custom-software' },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
    tags: ['ERP Software', 'Inventory Control', 'Procurement', 'Manufacturing'],
  },
  {
    id: 4,
    slug: 'brandvista-ai-marketing',
    title: 'AI Workflow Automation, Intelligent Chatbots & Business Process Integration',
    client: 'Multi-Department Service Enterprise',
    industry: 'Business Operations & AI Automation',
    service: 'ai-automation',
    duration: '10 Weeks',
    team: 'AI & Workflow Engineering Team',
    image:
      'https://readdy.ai/api/search-image?query=AI%20marketing%20dashboard%20on%20modern%20screen%20showing%20colorful%20campaign%20analytics%20charts%20and%20content%20generation%20interface%2C%20creative%20agency%20workspace%20with%20mood%20boards%2C%20warm%20vibrant%20lighting%2C%20high%20energy%20atmosphere%2C%20high%20detail%20modern%20photography&width=1200&height=700&seq=cs-brandvista&orientation=landscape',
    imageAlt: 'AI Workflow Automation, Intelligent Chatbots & Business Process Integration — AI Software Technology',
    overview:
      'An AI-enabled workflow automation layer combining conversational AI assistants, automated document/data extraction, and scheduled MIS reporting integrated with core business software.',
    challenge:
      'Operations and support teams spent hours every day answering repetitive customer queries, manually copying inquiry data between emails and CRM sheets, and compiling daily summary reports for management.',
    approach:
      'We implemented an AI-enabled workflow automation layer combining conversational AI assistants on Web and WhatsApp, automated document/data extraction, and scheduled MIS report generation connected directly to the core CRM/ERP database.',
    solution: [
      '24/7 AI business assistant on website and WhatsApp for instant inquiry qualification',
      'Automated lead data extraction and direct synchronization with CRM pipelines',
      'Rule-based escalation engine routing complex customer requests to human agents',
      'Automated daily and weekly MIS report compilation delivered via email and WhatsApp',
      'Document parsing workflow for faster vendor invoice and form data entry',
      'Real-time operational monitoring dashboard with webhook execution logs',
    ],
    workflow: [
      'Step 1 — Automated Inquiry Capture: Customer questions and form inputs are received 24/7 across web and messaging channels.',
      'Step 2 — Intelligent Qualification & Routing: The AI workflow captures key requirement fields and syncs structured data into the CRM.',
      'Step 3 — Human Escalation When Needed: Complex or high-priority requests are routed immediately to the appropriate department specialist.',
      'Step 4 — Scheduled Management Reporting: Daily operational summaries are compiled and delivered automatically to leadership.',
    ],
    results: [
      { value: '24/7', label: 'Automated Inquiry Qualification' },
      { value: 'Eliminated', label: 'Repetitive Manual Data Entry' },
      { value: 'Instant', label: 'CRM Sync & Agent Escalation' },
      { value: 'Scheduled', label: 'Automated Daily MIS Reporting' },
      { value: 'Seamless', label: 'WhatsApp, Email & API Integration' },
    ],
    businessBenefits: [
      'Reduces manual data entry across sales, support, and back-office operations',
      'Ensures prospects receive immediate responses even outside standard office hours',
      'Keeps CRM and ERP databases synchronized automatically via API webhooks',
      'Frees staff to focus on high-value client conversations and operational execution',
    ],
    relatedServices: [
      { name: 'AI Automation Solutions', slug: 'ai-automation' },
      { name: 'API Development & Integration', slug: 'api-development-integration' },
      { name: 'CRM Software Development', slug: 'crm-solutions' },
    ],
    techStack: ['Python', 'Node.js', 'LLM APIs', 'React', 'PostgreSQL', 'WhatsApp Integration', 'REST Webhooks'],
    tags: ['AI Automation', 'WhatsApp Bot', 'Workflow Integration', 'MIS Reporting'],
  },
  {
    id: 5,
    slug: 'finsecure-payment-platform',
    title: 'End-to-End HRMS, Biometric Attendance, Shift Roster & Payroll Software',
    client: 'Multi-Branch Corporate Organization',
    industry: 'Human Resource Management',
    service: 'hrms-software',
    duration: '14 Weeks',
    team: 'HRMS Product Engineering Team',
    image:
      'https://readdy.ai/api/search-image?query=Financial%20technology%20dashboard%20on%20screens%20showing%20real-time%20payment%20transaction%20data%20and%20security%20metrics%2C%20dark%20theme%20with%20gold%20and%20teal%20accents%2C%20server%20room%20with%20blinking%20lights%2C%20secure%20banking%20environment%2C%20high%20detail%20fintech%20photography&width=1200&height=700&seq=cs-finsecure&orientation=landscape',
    imageAlt: 'End-to-End HRMS, Biometric Attendance, Shift Roster & Payroll Software — AI Software Technology',
    overview:
      'A comprehensive HRMS & Payroll Management System featuring employee lifecycle records, biometric and geo-fenced attendance synchronization, shift rosters, statutory compliance, and Employee Self-Service (ESS) portals.',
    challenge:
      'HR teams managing employees across multiple offices and field roles faced monthly bottlenecks reconciling biometric attendance logs, shift rosters, leave balances, expense claims, and salary deductions before generating payslips.',
    approach:
      'We built a comprehensive HRMS & Payroll Platform with Employee Self-Service (ESS) web and mobile portals, direct biometric/geo-fenced attendance sync, configurable salary structures, and one-click monthly payroll processing.',
    solution: [
      'Centralized employee onboarding, digital document vault, and lifecycle records',
      'Biometric device integration and mobile geo-fenced attendance with shift scheduling',
      'Automated leave accrual, multi-level leave approval workflows, and holiday calendars',
      'Configurable payroll engine calculating earnings, deductions, overtime, and compliance',
      'Automated digital payslip generation, tax declarations, and reimbursement claims',
      'Employee Self-Service (ESS) portal and goal/KPI performance appraisal module',
    ],
    workflow: [
      'Step 1 — Employee Onboarding & Role Setup: HR creates digital employee profiles, assigns departments, shifts, and salary structures.',
      'Step 2 — Daily Attendance & Leave Sync: Biometric punches, mobile check-ins, and approved leave requests sync automatically.',
      'Step 3 — Monthly Payroll Computation: The payroll engine calculates payable days, overtime, PF/ESI/TDS deductions, and reimbursements.',
      'Step 4 — Payslip Distribution & Compliance: Digital payslips and bank transfer sheets are generated in one click.',
    ],
    results: [
      { value: '12 Core', label: 'HRMS & Payroll Modules' },
      { value: 'One-Click', label: 'Monthly Payroll & Payslip Run' },
      { value: 'Live Sync', label: 'Biometric & Geo-Fenced Attendance' },
      { value: 'Self-Service', label: 'Employee Web & Mobile Portal' },
      { value: 'Structured', label: 'Onboarding to Exit Management' },
    ],
    businessBenefits: [
      'Eliminates manual spreadsheet calculations during monthly salary processing',
      'Empowers employees to view payslips, apply for leaves, and submit claims via self-service',
      'Centralizes attendance tracking across office biometric devices and field staff',
      'Maintains accurate statutory compliance and audit-ready HR records',
    ],
    relatedServices: [
      { name: 'HRMS Software Development', slug: 'hrms-software' },
      { name: 'Attendance & Workforce Software', slug: 'attendance-workforce-software' },
      { name: 'Mobile App Development', slug: 'mobile-app-development' },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Flutter', 'AWS', 'REST APIs'],
    tags: ['HRMS Software', 'Payroll Automation', 'Attendance System', 'Employee Portal'],
  },
  {
    id: 6,
    slug: 'edulearn-gamified-platform',
    title: 'School, Coaching & Institute ERP with Parent-Student Mobile App',
    client: 'Educational Institution & Coaching Network',
    industry: 'Education & EdTech',
    service: 'erp-solutions',
    duration: '16 Weeks',
    team: 'EdTech & Mobile Engineering Team',
    image:
      'https://readdy.ai/api/search-image?query=Educational%20mobile%20app%20on%20tablet%20showing%20colorful%20gamified%20learning%20interface%20with%20progress%20badges%2C%20children%20learning%20in%20bright%20classroom%2C%20interactive%20quiz%20screens%2C%20warm%20natural%20light%2C%20modern%20EdTech%20environment%2C%20high%20detail%20photography&width=1200&height=700&seq=cs-edulearn&orientation=landscape',
    imageAlt: 'School, Coaching & Institute ERP with Parent-Student Mobile App — AI Software Technology',
    overview:
      'An integrated School & Coaching Institute Management ERP paired with Android and iOS apps for parents, students, and teachers — unifying admissions, fee billing, attendance alerts, homework, and exam report cards.',
    challenge:
      'Educational institutions and coaching centers managing admissions, batch schedules, fee installments, student attendance, and parent communication across separate tools faced administrative overload and delayed fee collection.',
    approach:
      'We developed an integrated School & Coaching Management ERP paired with Android and iOS mobile apps for parents, students, and faculty — unifying admissions, fee billing, attendance alerts, digital homework, and exam report cards.',
    solution: [
      'Online admission inquiry CRM, student enrollment, and batch allocation',
      'Automated fee installment scheduling, online payment gateway, and digital receipts',
      'Daily student attendance marking with instant push & WhatsApp notifications to parents',
      'Timetable management, homework assignments, and study material sharing',
      'Exam scheduling, marks entry, and automated digital report card generation',
      'Dedicated Android & iOS mobile apps for parents, students, and teachers',
    ],
    workflow: [
      'Step 1 — Admission & Batch Allocation: Student inquiries are converted into enrollments with automated roll-number and fee-plan assignment.',
      'Step 2 — Daily Academics & Attendance: Teachers mark attendance and upload homework via the faculty app, triggering instant parent alerts.',
      'Step 3 — Fee Collection & Receipts: Parents receive installment reminders and pay online with instant digital receipt generation.',
      'Step 4 — Exams & Report Cards: Marks entered by faculty automatically compile into downloadable term report cards.',
    ],
    results: [
      { value: 'End-to-End', label: 'Admissions, Fees & Academics' },
      { value: 'Android & iOS', label: 'Parent, Student & Teacher Apps' },
      { value: 'Automated', label: 'Fee Reminders & Digital Receipts' },
      { value: 'Instant', label: 'Attendance & Notice Push Alerts' },
      { value: 'Centralized', label: 'Multi-Branch Admin Dashboard' },
    ],
    businessBenefits: [
      'Streamlines fee collection with automated due-date reminders and online payments',
      'Strengthens parent engagement through real-time attendance, homework, and exam updates',
      'Reduces administrative workload for front-desk staff and academic coordinators',
      'Provides management with consolidated insights across admissions, fee dues, and batch performance',
    ],
    relatedServices: [
      { name: 'Custom Software Development', slug: 'custom-software' },
      { name: 'Mobile App Development', slug: 'mobile-app-development' },
      { name: 'ERP Software Development', slug: 'erp-solutions' },
    ],
    techStack: ['Flutter', 'React', 'Node.js', 'PostgreSQL', 'Firebase Push', 'Payment Gateway API'],
    tags: ['School ERP', 'Coaching Software', 'Mobile App', 'Education'],
  },
];