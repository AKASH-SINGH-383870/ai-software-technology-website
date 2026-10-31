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
    title: 'AI Software Technology | Custom Software Development Company in India',
    description: 'AI Software Technology, a brand of Digi India Solutions, builds custom ERP, CRM, HRMS, SaaS platforms, mobile apps, AI automation and business management software. Call +91 9990390519.',
    keywords: 'custom software development company India, ERP software development, CRM software development, HRMS software development, SaaS application development, mobile app development company India, AI automation solutions, business management software, AI Software Technology, Digi India Solutions',
    canonical: 'https://aisoftwaretechnology.in/',
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