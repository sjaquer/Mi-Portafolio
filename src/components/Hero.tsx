import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, BrainCircuit, TrendingUp, Cpu, Clock, RefreshCw } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { ResumeButton } from './ResumeButton';
import { cn } from '../utils/cn';

const Hero: React.FC = () => {
  const [conversion, setConversion] = useState(0);
  const [costReduction, setCostReduction] = useState(0);
  const [latency, setLatency] = useState(150);
  const [isSimulating, setIsSimulating] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setConversion(0);
    setCostReduction(0);
    setLatency(150);

    let currentConversion = 0;
    let currentCost = 0;
    let currentLatency = 150;

    const interval = setInterval(() => {
      let done = true;
      if (currentConversion < 340) {
        currentConversion += Math.min(10, 340 - currentConversion);
        setConversion(currentConversion);
        done = false;
      }
      if (currentCost < 65) {
        currentCost += Math.min(2, 65 - currentCost);
        setCostReduction(currentCost);
        done = false;
      }
      if (currentLatency > 12) {
        currentLatency -= Math.min(6, currentLatency - 12);
        setLatency(currentLatency);
        done = false;
      }

      if (done) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 25);
  };

  useEffect(() => {
    // Auto-trigger simulation on mount
    const timer = setTimeout(() => {
      startSimulation();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-6%] top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[42rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 z-10 pt-20">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto perspective-1000">
          {/* Left Column: Typography */}
          <div className="text-left order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/55 border border-zinc-700/70 backdrop-blur-xl text-sm shadow-lg shadow-cyan-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-[0.25em]">Neural Network: <span className="text-emerald-400">Online</span></span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[12ch] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-zinc-50 mb-6 leading-[0.98]"
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
              className="max-w-xl text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light"
            >
              Full-Stack Developer especializado en transformar ideas en productos digitales escalables, potenciados por inteligencia artificial aplicada, arquitecturas robustas y dashboards de negocio inteligentes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <a
                href="#contact"
                className={cn(
                  'group relative inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-bold transition-all',
                  'bg-zinc-50 text-zinc-950 shadow-xl shadow-cyan-500/10 hover:bg-zinc-200 active:scale-95'
                )}
              >
                Empezar Proyecto
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <ResumeButton />
            </motion.div>
          </div>

          {/* Right Column: Visual Scaling Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2 w-full"
          >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 blur-3xl rounded-[3rem] pointer-events-none" />

              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                tiltEnable={!prefersReducedMotion}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="rgba(34, 211, 238, 0.1)"
                perspective={1200}
                scale={1.01}
                className="relative"
              >
                <div className="relative bg-[#0c0c0e]/82 backdrop-blur-2xl rounded-[1.75rem] border border-zinc-800/80 shadow-2xl overflow-hidden min-h-[380px] flex flex-col ring-1 ring-white/5">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/50 bg-black/40">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-800" />
                      <div className="w-3 h-3 rounded-full bg-zinc-800" />
                      <div className="w-3 h-3 rounded-full bg-zinc-800" />
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-2 uppercase tracking-[0.25em]">
                      <BrainCircuit size={12} className="text-cyan-400 animate-pulse" /> Optimización de Negocio (IA)
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] text-emerald-400 font-mono uppercase tracking-[0.2em]">ACTIVO</span>
                    </div>
                  </div>

                  {/* Dashboard Body / Graph */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div className="relative mb-6 bg-zinc-950/40 rounded-xl p-4 border border-zinc-800/50">
                      <div className="absolute top-2 left-3 flex items-center gap-1 text-[9px] text-zinc-600 font-mono tracking-widest uppercase">
                        <span>Escalamiento y Tráfico</span>
                      </div>
                      
                      {/* Interactive SVG Chart */}
                      <svg className="w-full h-40 overflow-visible mt-2" viewBox="0 0 300 120">
                        <defs>
                          <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid Lines */}
                        <line x1="0" y1="20" x2="300" y2="20" stroke="#1c1c24" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="55" x2="300" y2="55" stroke="#1c1c24" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="90" x2="300" y2="90" stroke="#1c1c24" strokeWidth="1" strokeDasharray="3 3" />
                        <line x1="0" y1="110" x2="300" y2="110" stroke="#27273a" strokeWidth="1.5" />
                        
                        {/* Area Fill */}
                        <motion.path
                          d="M 0 110 Q 50 105 100 85 T 200 45 T 300 15 L 300 110 Z"
                          fill="url(#areaGrad)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Curve stroke */}
                        <motion.path
                          d="M 0 110 Q 50 105 100 85 T 200 45 T 300 15"
                          fill="none"
                          stroke="url(#chartGrad)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.6, ease: "easeInOut" }}
                          key={isSimulating ? "sim-line" : "idle-line"}
                        />
                        
                        {/* Interactive pulsing node */}
                        {(!isSimulating || conversion > 330) && (
                          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <circle cx="300" cy="15" r="9" fill="#ec4899" fillOpacity="0.2" className="animate-ping" />
                            <circle cx="300" cy="15" r="4.5" fill="#ec4899" />
                          </motion.g>
                        )}
                        {(!isSimulating || conversion > 180) && (
                          <circle cx="180" cy="50" r="3.5" fill="#8b5cf6" />
                        )}
                        {(!isSimulating || conversion > 90) && (
                          <circle cx="90" cy="88" r="3.5" fill="#22d3ee" />
                        )}
                      </svg>
                    </div>

                    {/* Dynamic Metrics Cards */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {/* Metric 1 */}
                      <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-3 flex flex-col justify-between hover:border-cyan-500/20 transition-colors">
                        <div className="flex items-center justify-between text-zinc-500 mb-1">
                          <span className="text-[9px] uppercase font-bold tracking-wider">Conversión</span>
                          <TrendingUp size={10} className="text-cyan-400" />
                        </div>
                        <div>
                          <span className="text-xl sm:text-2xl font-display font-extrabold text-zinc-100 tracking-tight">
                            +{conversion}%
                          </span>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-3 flex flex-col justify-between hover:border-violet-500/20 transition-colors">
                        <div className="flex items-center justify-between text-zinc-500 mb-1">
                          <span className="text-[9px] uppercase font-bold tracking-wider">Ahorro Costos</span>
                          <Cpu size={10} className="text-violet-400" />
                        </div>
                        <div>
                          <span className="text-xl sm:text-2xl font-display font-extrabold text-zinc-100 tracking-tight">
                            -{costReduction}%
                          </span>
                        </div>
                      </div>

                      {/* Metric 3 */}
                      <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-3 flex flex-col justify-between hover:border-emerald-500/20 transition-colors">
                        <div className="flex items-center justify-between text-zinc-500 mb-1">
                          <span className="text-[9px] uppercase font-bold tracking-wider">Latencia</span>
                          <Clock size={10} className="text-emerald-400 animate-pulse" />
                        </div>
                        <div>
                          <span className="text-xl sm:text-2xl font-display font-extrabold text-zinc-100 tracking-tight">
                            {latency}ms
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Simulation trigger */}
                    <button 
                      onClick={startSimulation}
                      disabled={isSimulating}
                      className={cn(
                        'w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold tracking-[0.22em] uppercase transition-all',
                        isSimulating
                          ? 'text-zinc-500 border-zinc-900 bg-zinc-950/30'
                          : 'text-zinc-300 border-zinc-700/80 bg-zinc-900/40 hover:text-zinc-50 hover:border-cyan-500/30 hover:bg-zinc-800/70 active:scale-[0.98]'
                      )}
                    >
                      <RefreshCw size={12} className={cn('text-cyan-400', isSimulating && 'animate-spin')} />
                      {isSimulating ? 'Optimizando Negocio...' : 'Simular Optimización IA'}
                    </button>
                  </div>
                </div>
              </Tilt>
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
