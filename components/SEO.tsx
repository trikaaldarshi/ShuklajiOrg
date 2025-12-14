import React, { useEffect } from 'react';
import { SEOMeta } from '../types';

interface SEOProps extends SEOMeta {}

export const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', schema }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph tags (simulated for SPA)
    const setMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', type);
    setMeta('og:url', window.location.href);

  }, [title, description, type]);

  // Schema.org JSON-LD
  const jsonLd = schema || {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shuklaji",
    "url": "https://shuklaji.org",
    "sameAs": [
      "https://twitter.com/shuklaji", 
      "https://instagram.com/shuklaji"
    ],
    "jobTitle": "Analyst & Educator",
    "description": "Expert in UPSC preparation strategy, technology trends, and digital sovereignty."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};