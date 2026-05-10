import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, CheckCircle2, Loader2, BrainCircuit } from 'lucide-react';
import { ResumeButton } from './ResumeButton';

const logs = [
  { text: "Initializing Google Gemini API...", status: "pending", color: "text-zinc-500" },
  { text: "Loading Local Model (Llama-3)...", status: "pending", color: "text-zinc-500" },
  { text: "Connecting Vector Database...", status: "pending", color: "text-zinc-500" },
  { text: "AI Agent active and listening.", status: "success", color: "text-emerald-400" },
];

const Hero: React.FC = () => {
  const [terminalStep, setTerminalStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleExecute = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalStep(0);
  };

  useEffect(() => {
    // Auto-start terminal after a small delay
    const startTimer = setTimeout(() => {
      setIsRunning(true);
    }, 1500);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isRunning && terminalStep < logs.length) {
      const timer = setTimeout(() => {
        setTerminalStep(prev => prev + 1);
      }, 800 + Math.random() * 1000);
      return () => clearTimeout(timer);
    } else if (terminalStep === logs.length) {
      const timer = setTimeout(() => setIsRunning(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isRunning, terminalStep]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 z-10 pt-20">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Typography */}
          <div className="text-left order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Neural Network: <span className="text-emerald-400">Online</span></span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-zinc-50 mb-6 leading-[1.05]"
            >
              Code.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-[length:200%_auto] animate-gradient-x">
                Integrate AI.
              </span><br />
              Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-lg text-zinc-400 text-base md:text-lg mb-10 leading-relaxed font-light"
            >
              Full-Stack Developer especializado en transformar ideas en productos digitales escalables, potenciados por modelos de lenguaje de vanguardia y arquitecturas robustas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <a
                href="#contact"
                className="group relative inline-flex h-12 items-center justify-center rounded-xl bg-zinc-50 px-8 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 active:scale-95"
              >
                Empezar Proyecto
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
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-3xl rounded-[3rem] pointer-events-none" />
            
            <div className="relative bg-[#0c0c0e]/80 backdrop-blur-2xl rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden min-h-[340px] flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-zinc-800/50 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                </div>
                <div className="mx-auto text-[10px] text-zinc-500 font-mono flex items-center gap-2 uppercase tracking-[0.2em]">
                  <BrainCircuit size={12} className="text-violet-400" /> AI Engine v4.0
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] text-emerald-500/50 font-mono tracking-tighter">● LIVE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-8 font-mono text-sm leading-relaxed flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-cyan-500">❯</span>
                  <span className="text-zinc-100">run ./startup-ia.sh</span>
                  {!isRunning && terminalStep === 0 && (
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-zinc-500 inline-block align-middle" />
                  )}
                </div>

                <div className="space-y-3">
                  <AnimatePresence>
                    {logs.slice(0, terminalStep).map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                      >
                        {i === terminalStep - 1 && isRunning ? (
                          <Loader2 size={14} className="text-cyan-400 animate-spin" />
                        ) : (
                          <CheckCircle2 size={14} className={i === logs.length - 1 ? 'text-emerald-400' : 'text-zinc-600'} />
                        )}
                        <span className={`${log.color} text-xs md:text-sm`}>{log.text}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {terminalStep === logs.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 pt-6 border-t border-zinc-800/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Latency</span>
                        <span className="text-emerald-400 text-xs">12ms</span>
                      </div>
                      <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Model</span>
                        <span className="text-violet-400 text-xs italic">Gemini Pro Integrated</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Terminal Footer / Interaction */}
              <div className="p-4 bg-black/20 border-t border-zinc-800/30">
                <button 
                  onClick={handleExecute}
                  disabled={isRunning}
                  className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-zinc-800 text-xs font-bold tracking-widest uppercase transition-all
                    ${isRunning ? 'text-zinc-600 border-zinc-900' : 'text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800/50 active:scale-[0.98]'}`}
                >
                  {isRunning ? 'Synthesizing...' : <><Play size={12} fill="currentColor" /> Reboot Environment</>}
                </button>
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
