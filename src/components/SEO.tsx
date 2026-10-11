import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  pageType?: 'home' | 'portfolio' | 'contact' | 'about' | 'skills' | 'experience';
  image?: string;
  article?: boolean;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, pageType = 'home', image, article = false, noindex = false }) => {
  const siteUrl = 'https://sjaquer.is-a.dev';
  const defaultImage = `${siteUrl}/og-image.png`;
  const defaultDescription = 'Estudiante de último ciclo que construye sitios con Next.js, automatizaciones e integraciones, y mide su impacto con GA4. Lima, Perú.';

  const pageTitles: Record<string, string> = {
    home: 'Sebastián Jaque — Desarrollo web, MarTech y CRO | Lima',
    portfolio: 'Proyectos con resultado | Sebastián Jaque',
    contact: 'Contacto | Sebastián Jaque',
    about: 'Sobre Mí | Sebastián Jaque',
    skills: 'Stack Técnico y Herramientas | Sebastián Jaque',
    experience: 'Trayectoria Profesional | Sebastián Jaque'
  };

  const pageDescriptions: Record<string, string> = {
    home: defaultDescription,
    portfolio: 'Proyectos con métricas reales: terminal de pedidos en Big Jack Burgers, integraciones en Dearel y herramientas para ferias laborales.',
    contact: 'Contacto directo para oportunidades de empleo en MarTech/desarrollo web o automatizaciones para PYMES.',
    about: 'Estudiante de último ciclo de Administración y Negocios Internacionales enfocado en desarrollo web moderno y analítica con GA4.',
    skills: 'Next.js, React, TypeScript, TailwindCSS, Node.js, Python, PostgreSQL, GA4, GTM y automatizaciones.',
    experience: 'Trayectoria: Practicante Pre Profesional en Universidad Norbert Wiener, Operaciones y Marketing en Big Jack Burgers, y Dearel.'
  };

  const pageTitle = title || pageTitles[pageType] || pageTitles.home;
  const pageDescription = description || pageDescriptions[pageType] || defaultDescription;
  const pageImage = image || defaultImage;

  const getPageSchema = () => {
    switch (pageType) {
      case 'home':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Sebastián Jaque",
          "url": siteUrl,
          "jobTitle": "Desarrollo web · Automatización · MarTech & CRO",
          "email": "sjaquer@outlook.es",
          "telephone": "+51-946-978-919",
          "image": defaultImage,
          "sameAs": ["https://github.com/sjaquer", "https://linkedin.com/in/sjaquer"],
          "knowsAbout": ["Desarrollo Web", "Next.js", "React", "TypeScript", "Automatización de Procesos", "APIs", "WhatsApp API", "GA4", "GTM", "CRO"],
          "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "Artificial Intelligence Professional (CAIPC®)", "credentialCategory": "Professional Certification", "recognizedBy": { "@type": "Organization", "name": "CertiProf" } },
            { "@type": "EducationalOccupationalCredential", "name": "AWS Generative AI for Executives", "credentialCategory": "Technical Certification", "recognizedBy": { "@type": "Organization", "name": "Amazon Web Services" } },
            { "@type": "EducationalOccupationalCredential", "name": "Diplomado en IA para Negocios", "credentialCategory": "Diploma", "recognizedBy": { "@type": "Organization", "name": "IDAT" } },
            { "@type": "EducationalOccupationalCredential", "name": "Especialización en Microsoft SQL Server", "credentialCategory": "Course", "recognizedBy": { "@type": "Organization", "name": "IDAT" } },
            { "@type": "EducationalOccupationalCredential", "name": "Especialización en Power BI", "credentialCategory": "Course", "recognizedBy": { "@type": "Organization", "name": "IDAT / Intercorp" } }
          ]
        };
      default:
        return null;
    }
  };

  const pageSchema = getPageSchema();

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={pageDescription} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {pageType !== 'home' && (
        <>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:type" content={article ? 'article' : 'website'} />
        </>
      )}
      {pageType !== 'home' && (
        <>
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={pageImage} />
        </>
      )}
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
