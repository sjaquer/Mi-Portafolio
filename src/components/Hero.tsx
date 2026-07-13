import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroCube from './HeroCube';
import ErrorBoundary from './ErrorBoundary';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen 3D background - main protagonist */}
      <ErrorBoundary fallback={null}>
        <div className="absolute inset-0 pointer-events-none z-0">
          <HeroCube />
        </div>
      </ErrorBoundary>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-emerald-500/[0.03] blur-3xl" />
        <div className="absolute right-[-6%] top-24 h-80 w-80 rounded-full bg-slate-500/[0.03] blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[70vh]">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-zinc-50 mb-6 leading-[0.98]"
          >
            Code.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-[length:200%_auto] animate-gradient-x">
              Integrate AI.
            </span><br />
            Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-xl text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light mx-auto"
          >
            Diseño e ingenio productos digitales de alta fidelidad. Combino arquitectura limpia e inteligencia artificial para dar vida a software que piensa, escala y resuelve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-bold transition-all bg-zinc-50 text-zinc-950 shadow-xl shadow-cyan-500/10 hover:bg-zinc-200 active:scale-95"
            >
              Empezar Proyecto
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a href="#freelance-services" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="block p-2 text-zinc-600 hover:text-zinc-400 transition-colors">
            <ChevronDown size={24} strokeWidth={1} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
