import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  customLabel?: string;
  customPath?: string;
}

const routeNames: Record<string, string> = {
  services: 'Services',
  portfolio: 'Portfolio',
  'case-studies': 'Case Studies',
  blogs: 'Blogs',
  about: 'About Us',
  contact: 'Contact',
  careers: 'Careers',
  calculators: 'Cost Calculators',
  industries: 'Industries',
  'ai-features': 'AI Capabilities',
  'knowledge-center': 'Knowledge Center',
  comparisons: 'Comparisons',
  'our-journey': 'Our Journey',
  sitemap: 'Sitemap',
  healthcare: 'Healthcare',
  education: 'Education',
  realestate: 'Real Estate',
  retail: 'Retail & E-Commerce',
  finance: 'Finance & Banking',
  hospitality: 'Hospitality',
  manufacturing: 'Manufacturing',
  construction: 'Construction',
  'website-development': 'Website & Web App Development',
  'mobile-app-development': 'Mobile App Development',
  'custom-software': 'Custom Software Development',
  'ai-automation': 'AI Automation Solutions',
  'erp-solutions': 'ERP Software Development',
  'crm-solutions': 'CRM Software Development',
  'hrms-software': 'HRMS Software Development',
  'saas-development': 'SaaS Application Development',
  'digital-marketing': 'Digital Marketing & SEO',
  'cloud-solutions': 'Cloud Deployment & Server Setup',
  'ui-ux-design': 'UI/UX Design',
  'react-vs-angular': 'React vs Angular',
  'flutter-vs-react-native': 'Flutter vs React Native',
  'custom-software-vs-saas': 'Custom Software vs SaaS',
};

export default function Breadcrumb({ items, customLabel }: BreadcrumbProps) {
  const location = useLocation();

  const breadcrumbs: BreadcrumbItem[] = items || (() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const result: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];
    let currentPath = '';
    segments.forEach((seg, idx) => {
      currentPath += `/${seg}`;
      const isLast = idx === segments.length - 1;
      const label = (isLast && customLabel) || routeNames[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      result.push(isLast ? { label } : { label, path: currentPath });
    });
    return result;
  })();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-24 lg:pt-32 pb-2">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/30" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbs.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {idx > 0 && <i className="ri-arrow-right-s-line text-white/15 text-xs"></i>}
            {item.path ? (
              <Link
                to={item.path}
                itemProp="item"
                className="hover:text-accent-400 transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" className="text-white/50 font-medium truncate max-w-[200px] sm:max-w-xs">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(idx + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}