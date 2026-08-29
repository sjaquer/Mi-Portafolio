import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import { poemas } from '../data/poemas';
import ParticlesCanvas from './blog/ParticlesCanvas';
import SecurityGate from './blog/SecurityGate';
import PoemIndex from './blog/PoemIndex';
import PoemArticle, { PoemSeparator } from './blog/PoemArticle';
import { usePoemVisibility } from './blog/usePoemVisibility';
import { BLOG_STYLE } from './blog/blogStyles';
import { AUTH_KEY, goToHome } from './blog/constants';

const BlogPersonal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { visibility, activeIndex, registerRef, scrollToPoem } = usePoemVisibility(isAuthenticated);

  const activeColor = poemas[activeIndex]?.color.accent ?? '#5a7d9a';

  useEffect(() => {
    if (localStorage.getItem(AUTH_KEY) === 'true') setIsAuthenticated(true);
  }, []);

  const handleGoBack = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    goToHome();
  }, []);

  if (!isAuthenticated) {
    return <SecurityGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="blog-wrapper">
      <SEO noindex={true} title="Archivo" />
      <ParticlesCanvas activeColor={activeColor} />
      <style>{BLOG_STYLE}</style>

      <div className="nav-back-container">
        <a href="/" onClick={handleGoBack} className="nav-back-btn">← Volver al sitio</a>
      </div>

      {/* Barra de progreso de lectura horizontal fija arriba */}
      <div
        className="poem-progress-bar"
        style={{
          width: `${((activeIndex + 1) / poemas.length) * 100}%`,
          backgroundColor: activeColor,
        }}
      />

      <PoemIndex activeIndex={activeIndex} onSelect={scrollToPoem} />

      {/* Progress counter */}
      <motion.div
        className="progress-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span style={{ color: activeColor }}>{activeIndex + 1}</span>
        {' / '}{poemas.length}
      </motion.div>

      <main className="blog-main">
        {poemas.map((poema, i) => {
          const isActive = activeIndex === i;
          const weight = Math.round(300 + visibility[i] * 200);

          return (
            <React.Fragment key={poema.id}>
              <PoemArticle
                poema={poema}
                index={i}
                isActive={isActive}
                weight={weight}
                registerRef={registerRef}
              />

              {i < poemas.length - 1 && <PoemSeparator color={poema.color} />}
            </React.Fragment>
          );
        })}

        <motion.div
          className="eof"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fin del expediente
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPersonal;
