import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO avanzado para optimización en motores de búsqueda
 * 
 * Características:
 * - Títulos dinámicos optimizados para CTR
 * - Schema.org específico por tipo de página
 * - Meta tags para compartir en redes sociales
 * - Soporte para breadcrumbs dinámicos
 */

interface SEOProps {
  title?: string;
  description?: string;
  pageType?: 'home' | 'portfolio' | 'contact' | 'about' | 'skills' | 'experience';
  image?: string;
  article?: boolean;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ 
  title,
  description,
  pageType = 'home',
  image,
  article = false,
  noindex = false
}) => {
  const siteUrl = 'https://sjaquer.is-a.dev';
  const defaultImage = `${siteUrl}/images/og-image.webp`;
  const defaultDescription = 'Consultor en Transformación Digital en Lima, Perú. Desarrollo software, dashboards Power BI y automatización de procesos. BizOps & Tech Strategist certificado.';
  
  // Títulos optimizados por tipo de página para mejor CTR
  const pageTitles: Record<string, string> = {
    home: 'Sebastián Jaque | Consultor Transformación Digital Lima Perú',
    portfolio: 'Proyectos y Casos de Éxito | Sebastián Jaque',
    contact: 'Contacto - Solicita una Consultoría | Sebastián Jaque',
    about: 'Sobre Mí - Trayectoria Profesional | Sebastián Jaque',
    skills: 'Stack Tecnológico y Habilidades | Sebastián Jaque',
    experience: 'Experiencia Profesional | Sebastián Jaque'
  };

  const pageDescriptions: Record<string, string> = {
    home: defaultDescription,
    portfolio: 'Descubre proyectos de transformación digital: ERPs personalizados, dashboards Power BI y automatización de procesos en Lima, Perú.',
    contact: 'Contacta a Sebastián Jaque para consultoría en transformación digital, desarrollo de software o automatización de procesos en Lima.',
    about: 'Conoce la trayectoria de Sebastián Jaque como consultor en transformación digital y desarrollo de software en Lima, Perú.',
    skills: 'Stack tecnológico: React, TypeScript, Node.js, Python, Power BI, SQL Server y más. Herramientas para transformación digital.',
    experience: 'Experiencia liderando proyectos de transformación digital en Big Jack, Dearel y consultoría independiente.'
  };

  const pageTitle = title || pageTitles[pageType] || pageTitles.home;
  const pageDescription = description || pageDescriptions[pageType] || defaultDescription;
  const pageImage = image || defaultImage;

  // Schema.org específico por tipo de página
  const getPageSchema = () => {
    switch (pageType) {
      case 'portfolio':
        return {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Proyectos de Transformación Digital - Sebastián Jaque",
          "description": "Software, dashboards y automatizaciones desarrollados para resolver problemas reales de negocio",
          "url": `${siteUrl}/#portfolio`,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Big Jack O.S.",
                "description": "Sistema Operativo Centralizado para restaurantes"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Suite de Logística Aérea",
                "description": "Optimización matemática de costos operativos"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Dearel Intelligence Hub",
                "description": "Dashboards de rentabilidad con Power BI"
              }
            ]
          }
        };
      
      case 'skills':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Stack Tecnológico - Sebastián Jaque",
          "description": "Herramientas y tecnologías para transformación digital",
          "url": `${siteUrl}/#skills`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "React & TypeScript" },
            { "@type": "ListItem", "position": 2, "name": "Node.js & Python" },
            { "@type": "ListItem", "position": 3, "name": "Power BI & SQL Server" },
            { "@type": "ListItem", "position": 4, "name": "Firebase & Cloud" }
          ]
        };
      
      case 'experience':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Experiencia Profesional - Sebastián Jaque",
          "description": "Trayectoria en transformación digital y consultoría",
          "url": `${siteUrl}/#experience`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Organization",
                "name": "Big Jack",
                "description": "Head of Operations & Digital Transformation"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Organization",
                "name": "Dearel",
                "description": "Lead de Business Intelligence"
              }
            }
          ]
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto - Sebastián Jaque",
          "description": "Solicita una consultoría en transformación digital",
          "url": `${siteUrl}/#contact`,
          "mainEntity": {
            "@type": "Person",
            "name": "Sebastián Jaque",
            "email": "sjaquer@outlook.es",
            "telephone": "+51-946-978-919"
          }
        };

      default:
        return null;
    }
  };

  const pageSchema = getPageSchema();

  return (
    <Helmet>
      {/* Título dinámico optimizado */}
      <title>{pageTitle}</title>
      
      {/* Meta description si es diferente al default del index.html */}
      {description && <meta name="description" content={pageDescription} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph dinámico para páginas específicas */}
      {pageType !== 'home' && (
        <>
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={pageImage} />
          <meta property="og:type" content={article ? 'article' : 'website'} />
        </>
      )}
      
      {/* Twitter Cards dinámico */}
      {pageType !== 'home' && (
        <>
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image" content={pageImage} />
        </>
      )}
      
      {/* Schema.org adicional solo si es necesario para la página */}
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
