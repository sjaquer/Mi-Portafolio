import { Variants } from 'framer-motion';

// Variantes base para reutilizar
const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

const fadeScaleVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
  whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' }
};

export const MOTION = {
  // Variantes puras (para el prop 'variants')
  fadeUp: fadeUpVariants,
  fadeScale: fadeScaleVariants,
  
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  } as Variants,

  staggerChild: {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    visible: {
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
    }
  } as Variants,

  // Configuraciones (para props 'viewport', 'transition', etc.)
  viewport: { once: true, margin: '-60px' },
  
  fadeUpTransition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  fadeScaleTransition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },

  // Animaciones directas (para el prop 'animate')
  float: {
    y: [0, -6, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },

  glowPulse: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  },

  // Interacciones
  cardHover: {
    y: -6,
    scale: 1.015,
    transition: { duration: 0.25, ease: 'easeOut' }
  },

  aiCardHover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 0 40px rgba(168,85,247,0.2), 0 20px 40px rgba(0,0,0,0.3)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },

  navSpring: {
    type: 'spring' as const, bounce: 0.15, duration: 0.5
  }
};
