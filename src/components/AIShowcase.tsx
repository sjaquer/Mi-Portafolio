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
    desc: 'Atención al cliente que entiende el contexto y recuerda conversaciones pasadas, no solo respuestas programadas.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/5'
  },
  { 
    icon: Search, 
    title: 'Búsqueda Inteligente', 
    desc: 'Encuentra información en tus documentos legales o técnicos preguntando con lenguaje natural, como si hablaras con un experto.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/5'
  },
  { 
    icon: BarChart3, 
    title: 'Análisis Predictivo', 
    desc: 'Transforma tus datos de ventas en predicciones útiles para saber qué stock necesitarás el próximo mes.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/5'
  },
  { 
    icon: Languages, 
    title: 'Traducción y Resumen', 
    desc: 'Procesa miles de correos o reportes en segundos, extrayendo los puntos clave y traduciéndolos con precisión humana.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/5'
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
    { label: 'Contrato PDF', detail: 'Clasificar cláusulas', icon: FileText, color: 'text-cyan-400', glow: 'shadow-cyan-500/10 border-cyan-500/30' },
    { label: 'Consulta Chat', detail: '"¿Tienen stock...?"', icon: MessageSquare, color: 'text-violet-400', glow: 'shadow-violet-500/10 border-violet-500/30' },
    { label: 'Mensaje de Voz', detail: 'Audio transcrito', icon: Mic, color: 'text-pink-400', glow: 'shadow-pink-500/10 border-pink-500/30' },
  ];

  const outputs = [
    { label: 'Responder Email', action: 'Borrador generado', icon: Mail, color: 'text-cyan-400' },
    { label: 'Actualizar CRM', action: 'Datos registrados', icon: Database, color: 'text-violet-400' },
    { label: 'Notificar Slack', action: 'Alerta de negocio', icon: Slack, color: 'text-pink-400' },
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
              className="relative bg-zinc-950/80 backdrop-blur-2xl rounded-3xl border border-zinc-800/60 shadow-2xl p-6 overflow-hidden group min-h-[460px] flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">PIPELINE DE AGENTE COGNITIVO</span>
                </div>
                <div className="text-[9px] text-zinc-500 font-mono tracking-wider">
                  PASO {activeStep + 1} DE 3
                </div>
              </div>

              {/* Pipeline Diagram Grid */}
              <div className="relative grid grid-cols-12 gap-3 items-center flex-grow py-4 z-10">
                {/* SVG Connections in Background */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-900" viewBox="0 0 320 240" fill="none">
                  <path d="M 90,45 L 160,110 L 230,45" strokeWidth="1" />
                  <path d="M 90,110 L 160,110 L 230,110" strokeWidth="1" />
                  <path d="M 90,175 L 160,110 L 230,175" strokeWidth="1" />
                  
                  {/* Glowing active path (Input -> Robot) */}
                  {activeStep === 0 && <motion.path d="M 90,45 L 160,110" stroke="url(#activeBeam)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, repeat: Infinity }} />}
                  {activeStep === 1 && <motion.path d="M 90,110 L 160,110" stroke="url(#activeBeam)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, repeat: Infinity }} />}
                  {activeStep === 2 && <motion.path d="M 90,175 L 160,110" stroke="url(#activeBeam)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, repeat: Infinity }} />}
                  
                  {/* Glowing active path (Robot -> Output) */}
                  {activeStep === 0 && <motion.path d="M 160,110 L 230,45" stroke="url(#activeBeamOut)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6, repeat: Infinity }} />}
                  {activeStep === 1 && <motion.path d="M 160,110 L 230,110" stroke="url(#activeBeamOut)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6, repeat: Infinity }} />}
                  {activeStep === 2 && <motion.path d="M 160,110 L 230,175" stroke="url(#activeBeamOut)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6, repeat: Infinity }} />}
                  
                  <defs>
                    <linearGradient id="activeBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="activeBeamOut" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Left Column: Inputs */}
                <div className="col-span-4 space-y-4 z-20">
                  {inputs.map((inp, idx) => {
                    const isActive = activeStep === idx;
                    const Icon = inp.icon;
                    return (
                      <motion.div
                        key={idx}
                        className={cn(
                          "relative rounded-xl p-3 border text-left bg-zinc-950/40 backdrop-blur-xl transition-all duration-500",
                          isActive 
                            ? `border-cyan-500/40 bg-cyan-950/5 shadow-[0_0_15px_rgba(6,182,212,0.06)]` 
                            : "border-zinc-900 text-zinc-500"
                        )}
                        animate={{ x: isActive ? 4 : 0 }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon size={14} className={isActive ? inp.color : "text-zinc-600"} />
                          <span className={cn("text-xs font-bold", isActive ? "text-zinc-100" : "text-zinc-500")}>
                            {inp.label}
                          </span>
                        </div>
                        <span className="block text-[10px] text-zinc-500 font-mono mt-0.5 ml-5 leading-none">
                          {inp.detail}
                        </span>

                        {/* Scanner Laser effect */}
                        {isActive && (
                          <motion.div
                            initial={{ y: "0%" }}
                            animate={{ y: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Center Column: Animated Cognitive Vector Brain */}
                <div className="col-span-4 flex justify-center z-20 relative">
                  <div className="relative h-28 w-28 flex items-center justify-center">
                    
                    {/* Rotating orbit circles */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-violet-500/30"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border border-zinc-800/80 stroke-dash-array-[5,10]"
                    />

                    {/* Central Brain core */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 10px rgba(139,92,246,0.1)", "0 0 25px rgba(139,92,246,0.25)", "0 0 10px rgba(139,92,246,0.1)"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative h-16 w-16 rounded-full bg-gradient-to-tr from-cyan-950/60 to-violet-950/60 border border-violet-500/40 flex items-center justify-center z-10 shadow-2xl backdrop-blur-3xl"
                    >
                      {/* Integrated Vector AI Robot Head */}
                      <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {/* Antenna */}
                        <line x1="12" y1="5" x2="12" y2="2" />
                        <circle cx="12" cy="2" r="1" fill="currentColor" />
                        {/* Robot Head outline */}
                        <rect x="5" y="5" width="14" height="12" rx="3" />
                        {/* Cyber eyes */}
                        <circle cx="9" cy="11" r="1.5" fill="#22d3ee" className="animate-pulse" />
                        <circle cx="15" cy="11" r="1.5" fill="#22d3ee" className="animate-pulse" />
                        {/* Circuit lines */}
                        <path d="M 9,14 L 15,14" strokeWidth="1" strokeLinecap="round" />
                        {/* Ears */}
                        <path d="M 5,9 L 3,9" />
                        <path d="M 19,9 L 21,9" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Right Column: Actions */}
                <div className="col-span-4 space-y-4 z-20">
                  {outputs.map((out, idx) => {
                    const isActive = activeStep === idx;
                    const Icon = out.icon;
                    return (
                      <motion.div
                        key={idx}
                        className={cn(
                          "relative rounded-xl p-3 border text-left bg-zinc-950/40 backdrop-blur-xl transition-all duration-500",
                          isActive 
                            ? "border-emerald-500/40 bg-emerald-950/5 shadow-[0_0_15px_rgba(16,185,129,0.06)]" 
                            : "border-zinc-900 text-zinc-500"
                        )}
                        animate={{ x: isActive ? -4 : 0 }}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <div className="flex items-center gap-2">
                            <Icon size={14} className={isActive ? out.color : "text-zinc-600"} />
                            <span className={cn("text-xs font-bold", isActive ? "text-zinc-100" : "text-zinc-500")}>
                              {out.label}
                            </span>
                          </div>
                          {isActive && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                              <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                            </motion.div>
                          )}
                        </div>
                        <span className="block text-[10px] text-zinc-500 font-mono mt-0.5 ml-5 leading-none">
                          {out.action}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Legend */}
              <div className="mt-4 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-zinc-500 text-[10px] font-mono leading-none">
                <span className="uppercase text-cyan-400">LECTURA SEMÁNTICA</span>
                <ArrowRight size={10} className="text-zinc-700" />
                <span className="uppercase text-violet-400">RAZONAMIENTO IA</span>
                <ArrowRight size={10} className="text-zinc-700" />
                <span className="uppercase text-emerald-400">AUTO-ACCIONES</span>
              </div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-mono border border-violet-500/20 mb-6 uppercase tracking-widest">
                <BrainCircuit size={14} /> Soluciones Reales
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight leading-tight mb-6">
                No es magia, es <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500">Ingeniería Cognitiva</span>
              </h2>
              <p className="text-zinc-400 font-light text-lg leading-relaxed mb-4">
                Llevo la Inteligencia Artificial fuera del laboratorio y la pongo a trabajar en tu negocio. 
              </p>
              <p className="text-zinc-500 font-light leading-relaxed">
                Desde automatizar conversaciones complejas hasta analizar miles de documentos en segundos. Desarrollo sistemas que no solo procesan datos, sino que los entienden para tomar mejores decisiones.
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
              glareColor="rgba(167, 139, 250, 0.15)"
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
                className="group h-full p-8 rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 hover:border-violet-500/20 transition-all duration-500"
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
            <a href="#contact" className="text-violet-400 hover:text-violet-300 font-bold ml-2 transition-colors">Hablar ahora →</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIShowcase;
