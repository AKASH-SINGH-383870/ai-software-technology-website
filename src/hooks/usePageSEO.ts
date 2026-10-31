import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function usePageSEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://i.ibb.co/8g96Y6FF/Chat-GPT-Image-Oct-30-2026-07-57-59-PM-Photoroom.png',
  canonical,
}: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:image', ogImage, true);
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
      setMeta('og:url', canonical, true);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);
}