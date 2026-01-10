import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteContent } from '../data/siteContent';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/images/iconoweb.webp', 
  url = 'https://sjaquer.is-a.dev' 
}) => {
  const siteTitle = title ? `${title} | ${siteContent.brand.name}` : `${siteContent.brand.name} | ${siteContent.brand.subtitle}`;
  const metaDescription = description || siteContent.hero.subtitle;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
