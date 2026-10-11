import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { poemas } from '../data/poemas';
import ParticlesCanvas from './blog/ParticlesCanvas';
import SecurityGate from './blog/SecurityGate';
import PoemIndex from './blog/PoemIndex';
import PoemArticle, { PoemSeparator } from './blog/PoemArticle';
import { usePoemVisibility } from './blog/usePoemVisibility';
import { BLOG_STYLE } from './blog/blogStyles';
import { AUTH_KEY } from './blog/constants';

const BlogPersonal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const { visibility, activeIndex, registerRef, scrollToPoem } = usePoemVisibility(isAuthenticated);

  const activeColor = poemas[activeIndex]?.color.accent ?? '#5a7d9a';

  useEffect(() => {
    // localStorage solo existe en el navegador: se lee al montar.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (localStorage.getItem(AUTH_KEY) === 'true') setIsAuthenticated(true);
  }, []);


  if (!isAuthenticated) {
    return <SecurityGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="blog-wrapper">
      <ParticlesCanvas activeColor={activeColor} />
      <style>{BLOG_STYLE}</style>

      <div className="nav-back-container">
        <Link href="/" className="nav-back-btn">← Volver al sitio</Link>
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
