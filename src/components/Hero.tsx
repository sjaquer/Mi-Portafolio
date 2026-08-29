import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconChevronDown } from '@tabler/icons-react';
import { animate } from 'animejs';
import { throttle } from '../utils/throttle';
import HeroCube from './HeroCube';
import ErrorBoundary from './ErrorBoundary';

const HeroLineArt: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const shapes = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));
    shapes.forEach((shape, i) => {
      const len = shape.getTotalLength();
      shape.style.strokeDasharray = `${len}`;
      shape.style.strokeDashoffset = `${len}`;
      animate(shape, {
        strokeDashoffset: [len, 0],
        duration: 1500,
        delay: 400 + i * 220,
        ease: 'inOutSine',
      });
    });

    const onScroll = throttle(() => {
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.18]"
      aria-hidden
    >
      {/* Pieza gráfica de reemplazo: aquí puedes montar tu SVG/PNG en capas */}
      <svg ref={svgRef} width="520" height="520" viewBox="0 0 520 520" fill="none">
        <circle data-draw cx="260" cy="260" r="200" stroke="#34d399" strokeWidth="1" />
        <circle data-draw cx="260" cy="260" r="150" stroke="#0d9488" strokeWidth="1" />
        <path data-draw d="M260 60 L320 200 L260 340 L200 200 Z" stroke="#10b981" strokeWidth="1" />
        <path data-draw d="M60 260 L200 320 L340 260 L200 200 Z" stroke="#34d399" strokeWidth="1" />
      </svg>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen 3D background - main protagonist */}
      <ErrorBoundary fallback={null}>
        <div className="absolute inset-0 pointer-events-none z-0">
          <HeroCube />
        </div>
      </ErrorBoundary>

      <HeroLineArt />

      {/* Glass vitrine framing the 3D cube */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78vw] max-w-[680px] aspect-square rounded-full forest-glass opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52vw] max-w-[440px] aspect-square rounded-full border border-emerald-400/10" />

      <div className="container px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center mx-auto min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="forest-glass-soft rounded-[2.2rem] px-6 py-10 sm:px-12 sm:py-14 max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-zinc-50 mb-6 leading-[0.98]"
            >
              Construyo sistemas<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-[length:200%_auto] animate-gradient-x">
                que automatizan
              </span><br />
              operaciones reales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-xl text-emerald-100/70 text-base md:text-lg mb-8 leading-relaxed font-light mx-auto"
            >
              Soy Sebastián Jaque — estudiante de Administración y builder desde 2022.
              Trabajo en la intersección entre negocio y tecnología: entiendo el problema,
              luego construyo algo que lo resuelva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-bold text-emerald-100 transition-all forest-glass border border-emerald-400/30 hover:border-emerald-300/50 hover:text-white active:scale-95"
              >
                Ver proyectos
                <IconArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-bold text-emerald-100/80 transition-all forest-glass-soft border border-emerald-400/15 hover:text-white active:scale-95"
              >
                Hablemos
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a href="#freelance-services" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="block p-2 text-emerald-700 hover:text-emerald-400 transition-colors">
            <IconChevronDown size={22} stroke={1.5} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
