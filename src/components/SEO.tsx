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
  const defaultImage = `${siteUrl}/web-app-manifest-512x512.png`;
  const defaultDescription = 'Sebastián Jaque — Administrador con enfoque en Datos, Automatización y Sistemas Digitales. Soluciones tecnológicas para optimizar operaciones y mejorar la toma de decisiones.';
  
  // Títulos optimizados por tipo de página para mejor CTR
  const pageTitles: Record<string, string> = {
    home: 'Sebastián Jaque | Administrador — Datos, Automatización y Sistemas Digitales',
    portfolio: 'Proyectos en Producción | Sebastián Jaque',
    contact: 'Contacto | Sebastián Jaque',
    about: 'Trayectoria Profesional | Sebastián Jaque',
    skills: 'Arquitectura y Herramientas | Sebastián Jaque',
    experience: 'Experiencia Profesional | Sebastián Jaque'
  };

  const pageDescriptions: Record<string, string> = {
    home: defaultDescription,
    portfolio: 'Proyectos reales en producción: plataformas e-commerce, dashboards de BI, ERPs operativos y sistemas de automatización.',
    contact: 'Contacta a Sebastián Jaque. Abierto a oportunidades en finanzas, BI, operaciones e innovación corporativa.',
    about: 'Trayectoria profesional de Sebastián Jaque en datos, automatización y sistemas digitales.',
    skills: 'Stack técnico: React, TypeScript, Node.js, Python, Power BI, SQL Server, Firebase y más.',
    experience: 'Experiencia en operaciones, business intelligence y automatización en Big Jack, Dearel y proyectos independientes.'
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
          "name": "Proyectos en Producción - Sebastián Jaque",
          "description": "Plataformas, dashboards y sistemas de automatización operando en entornos reales",
          "url": `${siteUrl}/#portfolio`,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Coralia Web",
                "description": "Plataforma e-commerce con CRM e integración de IA"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Dearel Intelligence Hub",
                "description": "Business Intelligence y análisis multifuente"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Big Jack Manager",
                "description": "Sistema de gestión operativa integral"
              }
            ]
          }
        };
      
      case 'skills':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Arquitectura y Herramientas - Sebastián Jaque",
          "description": "Stack técnico para datos, automatización y sistemas digitales",
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
          "description": "Trayectoria en operaciones, datos y automatización",
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
          "description": "Abierto a oportunidades en finanzas, BI, operaciones e innovación",
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
