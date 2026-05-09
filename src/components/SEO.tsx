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
  const defaultImage = `${siteUrl}/web-app-manifest-512x512.png`;
  const defaultDescription = 'Full-Stack Developer & AI Integration Specialist. React, Node.js, Python. Soluciones web escalables con IA Generativa. Lima, Perú.';

  const pageTitles: Record<string, string> = {
    home: 'Sebastián Jaque | Full-Stack Developer & AI Integration Specialist',
    portfolio: 'Proyectos en Producción | Full-Stack Developer & AI',
    contact: 'Contacto | Sebastián Jaque',
    about: 'Sobre Mí | Full-Stack Developer & AI',
    skills: 'Stack Técnico | React, Node.js, Python, OpenAI, AWS',
    experience: 'Trayectoria Profesional | Full-Stack Developer & AI'
  };

  const pageDescriptions: Record<string, string> = {
    home: defaultDescription,
    portfolio: 'Proyectos en producción: plataformas e-commerce con IA, sistemas de gestión con Firebase, y aplicaciones web escalables con React y TypeScript.',
    contact: 'Contáctame para proyectos freelance, consultoría técnica o conversaciones sobre desarrollo web y AI Integration.',
    about: 'Full-Stack Developer con certificaciones en IA (CertiProf CAIPC®, AWS GenAI). Especializado en React, Node.js, Python y arquitecturas cloud.',
    skills: 'Stack técnico: React, TypeScript, Node.js, Python, Firebase, OpenAI API, AWS Bedrock, SQL Server, Docker, Vercel.',
    experience: 'Trayectoria como Full-Stack Developer: Systems Architect en Big Jack, Data Engineer en Dearel, y 6+ proyectos independientes con IA.'
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
          "jobTitle": "Full-Stack Developer & AI Integration Specialist",
          "email": "sjaquer@outlook.es",
          "telephone": "+51-946-978-919",
          "image": defaultImage,
          "sameAs": ["https://github.com/sjaquer", "https://linkedin.com/in/sjaquer"],
          "knowsAbout": ["React", "TypeScript", "Node.js", "Python", "Firebase", "OpenAI API", "AWS Bedrock", "AI Integration", "Full-Stack Development", "Prompt Engineering", "LLM Integration"],
          "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "Artificial Intelligence Professional (CAIPC®)", "credentialCategory": "Professional Certification", "recognizedBy": { "@type": "Organization", "name": "CertiProf" } },
            { "@type": "EducationalOccupationalCredential", "name": "Generative AI Specialization", "credentialCategory": "Technical Certification", "recognizedBy": { "@type": "Organization", "name": "Amazon Web Services" } }
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
