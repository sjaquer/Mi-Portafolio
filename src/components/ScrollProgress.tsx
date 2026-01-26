import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      // position the progress bar right below the header (header uses h-16)
      className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary origin-left z-40 pointer-events-none shadow-lg shadow-primary/30"
      style={{ scaleX }}
    />
  );
};

interface ReadingProgressProps {
  target: React.RefObject<HTMLElement>;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const element = target.current;
    if (!element) return;

    const updateProgress = () => {
      const { top, height } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = -top;
      const end = height - windowHeight;
      const progress = Math.max(0, Math.min(1, start / end));
      
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, [target]);

  return (
    <motion.div
      className="fixed top-16 right-6 w-1 h-20 bg-surface rounded-full overflow-hidden z-40"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        className="w-full bg-gradient-to-b from-primary to-secondary rounded-full origin-top"
        style={{ 
          scaleY: readingProgress,
          height: '100%'
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      />
    </motion.div>
  );
};
