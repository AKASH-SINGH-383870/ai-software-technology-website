import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FloatingCTA from '@/components/feature/FloatingCTA';
import ScrollToTop from '@/components/feature/ScrollToTop';
import HeroSection from './components/HeroSection';
import TechLogos from './components/TechLogos';
import ServicesSection from './components/ServicesSection';
import LiveStats from './components/LiveStats';
import ProcessSection from './components/ProcessSection';
import PortfolioPreview from './components/PortfolioPreview';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import GlobalMap from './components/GlobalMap';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import { usePageSEO } from '@/hooks/usePageSEO';

export default function Home() {
  usePageSEO({
    title: 'AI Software Technology | Custom Software Development Company in Delhi, India',
    description:
      'AI Software Technology, a brand of Digi India Solutions in New Delhi, builds custom ERP, CRM, HRMS, SaaS platforms, mobile apps, and AI automation software. Call +91 9990390519.',
    canonical: 'https://aisoftwaretechnology.in/',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://aisoftwaretechnology.in/#webpage',
        name: 'AI Software Technology | Custom Software Development Company in Delhi, India',
        description:
          'Custom software development brand of Digi India Solutions delivering ERP, CRM, HRMS, SaaS, mobile applications, order management, factory attendance, and AI workflow automation.',
        url: 'https://aisoftwaretechnology.in/',
        isPartOf: { '@id': 'https://aisoftwaretechnology.in/#website' },
        about: { '@id': 'https://aisoftwaretechnology.in/#organization' },
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
              text: 'AI Software Technology operates as the dedicated custom software development and business technology solutions brand of Digi India Solutions, headquartered in Rohini Sector-24, New Delhi, India.',
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
  });

  return (
    <div className="min-h-screen bg-dark-500 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <TechLogos />
        <ServicesSection />
        <LiveStats />
        <ProcessSection />
        <PortfolioPreview />
        <WhyChooseUs />
        <IndustriesSection />
        <TestimonialsCarousel />
        <GlobalMap />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
}