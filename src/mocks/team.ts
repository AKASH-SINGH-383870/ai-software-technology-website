export const teamMembers: Array<{
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { linkedin?: string; twitter?: string; github?: string; dribbble?: string };
  expertise: string[];
}> = [];

export const companyStats = [
  { value: '30+', label: 'Software Solutions', icon: 'ri-code-s-slash-line' },
  { value: '9+', label: 'Industry Verticals', icon: 'ri-building-2-line' },
  { value: '100%', label: 'Custom Architecture', icon: 'ri-stack-line' },
  { value: '24/7', label: 'System Reliability', icon: 'ri-shield-check-line' },
  { value: '5-Step', label: 'Delivery Framework', icon: 'ri-route-line' },
  { value: 'End-to-End', label: 'Deployment & Support', icon: 'ri-customer-service-2-line' },
];

export const milestones = [
  {
    year: 'Step 01',
    title: 'Understand the Business Problem',
    desc: 'We audit your current workflows, operational bottlenecks, department handoffs, and reporting requirements before writing a single line of code.',
  },
  {
    year: 'Step 02',
    title: 'Design the Right Workflow',
    desc: 'We map out user roles, approval hierarchies, database schemas, and intuitive interfaces tailored to how your team actually works.',
  },
  {
    year: 'Step 03',
    title: 'Build Clean & Scalable Software',
    desc: 'Our engineers develop modular ERP, CRM, HRMS, SaaS, and mobile applications using modern, maintainable, and secure technology stacks.',
  },
  {
    year: 'Step 04',
    title: 'Test Thoroughly Before Launch',
    desc: 'Every module undergoes functional validation, role-permission checks, performance benchmarks, and user acceptance testing.',
  },
  {
    year: 'Step 05',
    title: 'Support Long-Term System Growth',
    desc: 'We provide smooth cloud deployment, staff onboarding, documentation, and continuous enhancements as your business scales.',
  },
];

export const values = [
  {
    icon: 'ri-focus-2-line',
    title: 'Our Mission',
    desc: 'To simplify business operations through practical, reliable and customized technology.',
  },
  {
    icon: 'ri-eye-line',
    title: 'Our Vision',
    desc: 'To help businesses of different sizes adopt smarter digital systems that support long-term growth.',
  },
  {
    icon: 'ri-FlowChart',
    title: 'Workflow-First Engineering',
    desc: 'We build software around your real operational processes rather than forcing your team into rigid templates.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Scalable & Transparent',
    desc: 'Clean code architecture, role-based security, and clear milestone communication from discovery to deployment.',
  },
];