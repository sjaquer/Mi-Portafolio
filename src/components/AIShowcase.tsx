import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BrainCircuit, MessageSquare, BarChart3, Search, Zap, Languages, FileText, Mic, Mail, Database, Slack, CheckCircle2, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { MOTION } from '../utils/animations';
import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

const solutions = [
  { 
    icon: MessageSquare, 
    title: 'Chatbots con Memoria', 
    desc: 'Agentes conversacionales que retienen el contexto y recuerdan interacciones pasadas para un trato verdaderamente humano.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5'
  },
  { 
    icon: Search, 
    title: 'Búsqueda Inteligente', 
    desc: 'Exploración semántica de datos complejos en lenguaje natural para extraer respuestas instantáneas de tus repositorios.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/5'
  },
  { 
    icon: BarChart3, 
    title: 'Análisis Predictivo', 
    desc: 'Modelado estadístico avanzado sobre tus datos de negocio para proyectar demandas futuras y evitar quiebres de inventario.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5'
  },
  { 
    icon: Languages, 
    title: 'Traducción y Resumen', 
    desc: 'Síntesis automatizada de grandes volúmenes de documentos, extrayendo insights clave y traduciéndolos con máxima fidelidad.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/5'
  },
];

const AIShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const inputs = [
    { label: 'Contrato PDF', detail: 'Clasificar cláusulas', icon: FileText, color: 'text-emerald-400', glow: 'shadow-emerald-500/10 border-emerald-500/30' },
    { label: 'Consulta Chat', detail: '"¿Tienen stock...?"', icon: MessageSquare, color: 'text-teal-400', glow: 'shadow-teal-500/10 border-teal-500/30' },
    { label: 'Mensaje de Voz', detail: 'Audio transcrito', icon: Mic, color: 'text-emerald-400', glow: 'shadow-emerald-500/10 border-emerald-500/30' },
  ];

  const outputs = [
    { label: 'Responder Email', action: 'Borrador generado', icon: Mail, color: 'text-emerald-400' },
    { label: 'Actualizar CRM', action: 'Datos registrados', icon: Database, color: 'text-teal-400' },
    { label: 'Notificar Slack', action: 'Alerta de negocio', icon: Slack, color: 'text-emerald-400' },
  ];

  return (
    <section id="ai-showcase" className="py-16 relative z-10 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Showcase Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-20">
          {/* Left: Interactive AI Agent Pipeline Diagram */}
          <motion.div 
            variants={MOTION.fadeUp} 
            initial="initial" 
            whileInView="whileInView" 
            viewport={MOTION.viewport}
            className="w-full lg:w-7/12 relative perspective-1000"
            onMouseMove={handleMouse} 
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            <motion.div 
              style={{ rotateX, rotateY }} 
              className="relative bg-zinc-950/80 backdrop-blur-2xl rounded-3xl border border-zinc-800/60 shadow-2xl p-4 sm:p-6 overflow-hidden group min-h-[380px] xs:min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
            >
              {/* Card Header (Mac-like Minimalist Controls) */}
              <div className="flex items-center justify-between border-b border-zinc-900/60 pb-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-zinc-500 font-mono tracking-widest">STEP_0{activeStep + 1}_ACTIVE</span>
                </div>
              </div>

              {/* Pipeline Diagram Grid */}
              <div className="flex-grow py-4 sm:py-6 flex flex-col justify-center gap-5 sm:gap-6 z-10">
                {inputs.map((inp, idx) => {
                  const isActive = activeStep === idx;
                  const InpIcon = inp.icon;
                  const out = outputs[idx];
                  const OutIcon = out.icon;

                  return (
                    <motion.div
                      key={idx}
                      className={cn(
                        "grid grid-cols-12 items-center gap-1.5 sm:gap-3 transition-all duration-500 cursor-pointer select-none",
                        isActive ? "opacity-100 scale-[1.01]" : "opacity-35 hover:opacity-50"
                      )}
                      onClick={() => setActiveStep(idx)}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Left: Input Card (col-span-5) */}
                      <motion.div
                        className={cn(
                          "col-span-5 relative rounded-xl p-2 sm:p-3 border text-left bg-zinc-950/40 backdrop-blur-xl transition-all duration-500",
                          isActive 
                            ? "border-emerald-500/40 bg-emerald-950/5 shadow-[0_0_15px_rgba(16,185,129,0.04)]" 
                            : "border-zinc-900 text-zinc-500"
                        )}
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <InpIcon size={13} className={isActive ? inp.color : "text-zinc-600"} />
                          <span className={cn("text-[10px] sm:text-xs font-bold tracking-tight leading-none", isActive ? "text-zinc-100" : "text-zinc-500")}>
                            {inp.label}
                          </span>
                        </div>
                        <span className="block text-[8px] sm:text-[10px] text-zinc-500 font-mono mt-1 ml-4 sm:ml-5 leading-none">
                          {inp.detail}
                        </span>

                        {/* Scanner Laser effect */}
                        {isActive && (
                          <motion.div
                            initial={{ y: "0%" }}
                            animate={{ y: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none"
                          />
                        )}
                      </motion.div>

                      {/* Center: Bridge & Node (col-span-2) */}
                      <div className="col-span-2 relative h-12 flex items-center justify-center">
                        {/* Horizontal Connection SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-900/50" preserveAspectRatio="none" fill="none">
                          <defs>
                            <linearGradient id={`activeBeamHorizontal-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                              <stop offset="30%" stopColor="#10b981" stopOpacity="0.1" />
                              <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                              <stop offset="70%" stopColor="#0d9488" stopOpacity="0.1" />
                              <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" />
                          
                          {/* Glowing active path */}
                          {isActive && (
                            <motion.line
                              x1="0%"
                              y1="50%"
                              x2="100%"
                              y2="50%"
                              stroke={`url(#activeBeamHorizontal-${idx})`}
                              strokeWidth="1.5"
                              initial={{ strokeDasharray: "40 60", strokeDashoffset: 100 }}
                              animate={{ strokeDashoffset: -100 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          )}
                        </svg>

                        {/* Minimal Processing Node */}
                        <div className="relative z-10 flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full">
                          {/* Outer orbit circle */}
                          <motion.div
                            animate={isActive ? { rotate: 360 } : {}}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className={cn(
                              "absolute inset-0 rounded-full border border-dashed transition-colors duration-500",
                              isActive ? "border-emerald-500/20" : "border-zinc-900"
                            )}
                          />

                          {/* Inner Processor dot */}
                          <motion.div
                            animate={isActive ? { scale: [1, 1.15, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className={cn(
                              "h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border transition-all duration-500 flex items-center justify-center",
                              isActive 
                                ? "bg-gradient-to-tr from-slate-900 to-slate-950 border-emerald-500/40 shadow-[0_0_10px_rgba(52,211,153,0.15)]" 
                                : "bg-zinc-950 border-zinc-800"
                            )}
                          >
                            <span className={cn("h-1 w-1 rounded-full", isActive ? "bg-emerald-400 animate-pulse" : "bg-zinc-700")} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Right: Output Card (col-span-5) */}
                      <motion.div
                        className={cn(
                          "col-span-5 relative rounded-xl p-2 sm:p-3 border text-left bg-zinc-950/40 backdrop-blur-xl transition-all duration-500",
                          isActive 
                            ? "border-emerald-500/40 bg-emerald-950/5 shadow-[0_0_15px_rgba(16,185,129,0.06)]" 
                            : "border-zinc-900 text-zinc-500"
                        )}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
                            <OutIcon size={13} className={isActive ? out.color : "text-zinc-600"} />
                            <span className={cn("text-[10px] sm:text-xs font-bold tracking-tight leading-none truncate", isActive ? "text-zinc-100" : "text-zinc-500")}>
                              {out.label}
                            </span>
                          </div>
                          {isActive && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                              <CheckCircle2 size={11} className="text-emerald-400" />
                            </motion.div>
                          )}
                        </div>
                        <span className="block text-[8px] sm:text-[10px] text-zinc-500 font-mono mt-1 ml-4 sm:ml-5 leading-none">
                          {out.action}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Clean minimal spacer for card symmetry */}
              <div className="h-2" />
            </motion.div>
          </motion.div>

          {/* Right: Text Content (Business Value) */}
          <motion.div 
            variants={MOTION.stagger} 
            initial="hidden" 
            whileInView="visible" 
            viewport={MOTION.viewport}
            className="w-full lg:w-5/12 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight leading-tight mb-6">
                No es magia, es <span className="text-emerald-400">Ingeniería Cognitiva</span>
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-4">
                Sistemas cognitivos que transforman datos masivos en decisiones automáticas.
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                Integro modelos avanzados que interpretan, sintetizan y actúan de forma autónoma, traduciendo la potencia de la IA en valor estratégico real para tus operaciones diarias.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Practical Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="rgba(16, 185, 129, 0.1)"
              glarePosition="all"
              glareBorderRadius="24px"
              perspective={800}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group h-full p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-zinc-100 mb-3">{item.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Bottom CTA for AI Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 px-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/30 text-sm text-zinc-400">
            <Zap size={16} className="text-yellow-500" />
            ¿Tienes una idea? <span className="text-zinc-100 font-bold">Integremos IA en tu flujo de trabajo.</span>
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-bold ml-2 transition-colors">Hablar ahora →</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIShowcase;
