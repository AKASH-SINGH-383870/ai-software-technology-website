import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";

const About = lazy(() => import("../pages/about/page"));
const Contact = lazy(() => import("../pages/contact/page"));
const Services = lazy(() => import("../pages/services/page"));
const ServiceDetail = lazy(() => import("../pages/services/ServiceDetail"));
const Portfolio = lazy(() => import("../pages/portfolio/page"));
const PortfolioDetail = lazy(() => import("../pages/portfolio/PortfolioDetail"));
const Industries = lazy(() => import("../pages/industries/page"));
const CaseStudies = lazy(() => import("../pages/case-studies/page"));
const CaseStudyDetail = lazy(() => import("../pages/case-studies/CaseStudyDetail"));
const BlogDetail = lazy(() => import("../pages/blogs/detail/page"));
const Blogs = lazy(() => import("../pages/blogs/page"));
const Careers = lazy(() => import("../pages/careers/page"));
const Calculators = lazy(() => import("../pages/calculators/page"));
const Healthcare = lazy(() => import("../pages/industries/healthcare/page"));
const FinanceIndustry = lazy(() => import("../pages/industries/finance/page"));
const Manufacturing = lazy(() => import("../pages/industries/manufacturing/page"));
const Education = lazy(() => import("../pages/industries/education/page"));
const Retail = lazy(() => import("../pages/industries/retail/page"));
const Hospitality = lazy(() => import("../pages/industries/hospitality/page"));
const Construction = lazy(() => import("../pages/industries/construction/page"));
const RealEstate = lazy(() => import("../pages/industries/realestate/page"));
const AIFeatures = lazy(() => import("../pages/ai-features/page"));
const ReactVsAngular = lazy(() => import("../pages/comparisons/react-vs-angular/page"));
const FlutterVsReactNative = lazy(() => import("../pages/comparisons/flutter-vs-react-native/page"));
const CustomSoftwareVsSaaS = lazy(() => import("../pages/comparisons/custom-software-vs-saas/page"));
const KnowledgeCenter = lazy(() => import("../pages/knowledge-center/page"));
const SitemapPage = lazy(() => import("../pages/sitemap/page"));
const OurJourney = lazy(() => import("../pages/our-journey/page"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sitemap",
    element: <SitemapPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:slug",
    element: <ServiceDetail />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/:slug",
    element: <PortfolioDetail />,
  },
  {
    path: "/industries",
    element: <Industries />,
  },
  {
    path: "/case-studies",
    element: <CaseStudies />,
  },
  {
    path: "/case-studies/:slug",
    element: <CaseStudyDetail />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/calculators",
    element: <Calculators />,
  },
  {
    path: "/industries/healthcare",
    element: <Healthcare />,
  },
  {
    path: "/industries/finance",
    element: <FinanceIndustry />,
  },
  {
    path: "/industries/manufacturing",
    element: <Manufacturing />,
  },
  {
    path: "/industries/education",
    element: <Education />,
  },
  {
    path: "/industries/retail",
    element: <Retail />,
  },
  {
    path: "/industries/hospitality",
    element: <Hospitality />,
  },
  {
    path: "/industries/construction",
    element: <Construction />,
  },
  {
    path: "/industries/real-estate",
    element: <RealEstate />,
  },
  {
    path: "/industries/realestate",
    element: <Navigate to="/industries/real-estate" replace />,
  },
  {
    path: "/ai-features",
    element: <AIFeatures />,
  },
  {
    path: "/comparisons/react-vs-angular",
    element: <ReactVsAngular />,
  },
  {
    path: "/comparisons/flutter-vs-react-native",
    element: <FlutterVsReactNative />,
  },
  {
    path: "/comparisons/custom-software-vs-saas",
    element: <CustomSoftwareVsSaaS />,
  },
  {
    path: "/knowledge-center",
    element: <KnowledgeCenter />,
  },
  {
    path: "/our-journey",
    element: <OurJourney />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;