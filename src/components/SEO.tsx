import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO optimizado
 * NOTA: Las meta tags principales (description, canonical, og:*, twitter:*)
 * están definidas en index.html para evitar duplicados.
 * Este componente solo actualiza el título dinámicamente cuando es necesario.
 */
interface SEOProps {
  title?: string;
  pageType?: 'home' | 'portfolio' | 'contact' | 'about';
}

const SEO: React.FC<SEOProps> = ({ 
  title,
  pageType = 'home'
}) => {
  // Solo actualizamos el título si es diferente al de la página principal
  // Las demás meta tags están en index.html (canonical único, descripción única)
  const baseTitle = 'Sebastián Jaque | BizOps & Tech Strategist';
  const pageTitle = title ? `${title} | Sebastián Jaque` : baseTitle;

  // Schema.org adicional para páginas específicas (si se necesita)
  const getPageSchema = () => {
    if (pageType === 'portfolio') {
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Casos de Éxito - Sebastián Jaque",
        "description": "Proyectos de transformación digital y desarrollo de software",
        "url": "https://sjaquer.is-a.dev/#portfolio"
      };
    }
    return null;
  };

  const pageSchema = getPageSchema();

  return (
    <Helmet>
      {/* Solo el título dinámico - evita duplicar canonical y meta description */}
      <title>{pageTitle}</title>
      
      {/* Schema adicional solo si es necesario para la página */}
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
