import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Play } from 'lucide-react';
import { ResumeButton } from './ResumeButton';
import { siteContent } from '../data/siteContent';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 z-10 pt-20">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column: Typography */}
          <div className="text-left">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-zinc-400 font-mono text-xs">status: <span className="text-emerald-400">ready</span></span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tighter text-zinc-50 mb-4 leading-[1.1]"
            >
              Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Integrate AI.</span><br />
              Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-md text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-light"
            >
              Soy Sebastián Jaque, Full-Stack Developer. Construyo software de alto rendimiento y lo potencio con Inteligencia Artificial Generativa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex h-11 items-center justify-center rounded-xl bg-zinc-50 px-6 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                Iniciar Proyecto
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <ResumeButton />
            </motion.div>
          </div>

          {/* Right Column: Interactive minimal terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-[#09090b]/80 backdrop-blur-xl rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-zinc-800/50 bg-black/40">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto text-[10px] text-zinc-500 font-mono flex items-center gap-2 uppercase tracking-wider">
                  <Terminal size={12} /> execute
                </div>
                <div className="w-10" />
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-zinc-300">
                <div className="flex gap-2">
                  <span className="text-cyan-500">~</span>
                  <span className="text-zinc-500">/portfolio</span>
                  <span className="text-fuchsia-400">❯</span>
                  <span className="text-zinc-100">npx run-ai-agent</span>
                </div>
                <div className="mt-4 text-zinc-500">
                  Initializing environment...
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <div>
                    <span className="text-zinc-300">React & TypeScript</span> <span className="text-zinc-500">loaded</span>
                  </div>
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✔</span>
                  <div>
                    <span className="text-zinc-300">Node.js Backend</span> <span className="text-zinc-500">connected</span>
                  </div>
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5 animate-pulse">⟳</span>
                  <div>
                    <span className="text-zinc-300">LLM Integration</span> <span className="text-zinc-500">synthesizing...</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800/50 text-zinc-400 text-xs hover:text-zinc-100 hover:bg-zinc-700 transition-colors">
                    <Play size={10} /> Execute
                  </button>
                  <span className="animate-pulse w-2 h-4 bg-zinc-500 inline-block" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
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
