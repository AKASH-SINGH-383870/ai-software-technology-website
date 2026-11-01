import { useEffect } from 'react';

export interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_OG_IMAGE = 'https://i.ibb.co/GvYrMC4M/Chat-GPT-Image-Oct-30-2026-07-57-59-PM.png';
const SITE_URL = 'https://aisoftwaretechnology.in';

export function usePageSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  ogType = 'website',
  canonical,
  noindex = false,
  schema,
  jsonLd,
}: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Remove obsolete meta keywords tag if present
    const obsoleteKeywords = document.querySelector('meta[name="keywords"]');
    if (obsoleteKeywords) {
      obsoleteKeywords.remove();
    }

    const robotsDirective = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

    setMeta('description', description);
    setMeta('robots', robotsDirective);
    setMeta('googlebot', robotsDirective);

    const resolvedCanonical =
      canonical ||
      (typeof window !== 'undefined'
        ? `${SITE_URL}${window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/+$/, '')}`
        : SITE_URL);

    const resolvedImage = ogImage.startsWith('/') ? `${SITE_URL}${ogImage}` : ogImage;
    const resolvedAlt = ogImageAlt || ogTitle || title;

    // OpenGraph tags
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:image', resolvedImage, true);
    setMeta('og:image:alt', resolvedAlt, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', 'AI Software Technology', true);
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:url', resolvedCanonical, true);

    // Twitter / X Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', resolvedImage);
    setMeta('twitter:image:alt', resolvedAlt);

    // Canonical Link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', resolvedCanonical);

    // Optional Page-Level JSON-LD Schema
    const resolvedSchema = schema || jsonLd;
    let schemaScript = document.getElementById('page-seo-jsonld') as HTMLScriptElement | null;
    if (resolvedSchema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'page-seo-jsonld';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(resolvedSchema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogImageAlt, ogType, canonical, noindex, schema, jsonLd]);
}