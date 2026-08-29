import React from 'react';
import { motion } from 'framer-motion';
import { Poema, PoemColor } from '../../data/poemas';

export const lineVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.025 },
  }),
};

interface PoemArticleProps {
  poema: Poema;
  index: number;
  isActive: boolean;
  weight: number;
  registerRef: (i: number) => (el: HTMLDivElement | null) => void;
}

const PoemArticle: React.FC<PoemArticleProps> = ({
  poema,
  index,
  isActive,
  weight,
  registerRef,
}) => {
  const lines = poema.contenido.split('\n');

  return (
    <div
      ref={registerRef(index)}
      data-index={index}
      className={`blog-article${isActive ? ' active' : ''}`}
      style={{ '--spotlight-glow': poema.color.glow } as React.CSSProperties}
    >
      <div className="poem-bar" style={{ background: poema.color.accent, opacity: 0.4 }} />

      <motion.h1
        className="blog-title"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        style={{
          borderLeftColor: poema.color.accent,
          background: poema.color.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: weight,
        }}
      >
        {poema.titulo}
      </motion.h1>

      <div className="blog-text">
        {lines.map((line, li) => (
          <motion.span
            key={li}
            custom={li}
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className={`poem-line${line.trim() === '' ? ' empty' : ''}`}
          >
            {line || ' '}
            {li < lines.length - 1 && <br />}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

interface PoemSeparatorProps {
  color: PoemColor;
}

const PoemSeparator: React.FC<PoemSeparatorProps> = ({ color }) => (
  <motion.div
    className="poem-separator"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.3 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    <span className="poem-sep-line" style={{ background: color.border }} />
    <span className="poem-sep-symbol" style={{ color: color.accent }}>◇</span>
    <span className="poem-sep-line" style={{ background: color.border }} />
  </motion.div>
);

export default PoemArticle;
export { PoemSeparator };
