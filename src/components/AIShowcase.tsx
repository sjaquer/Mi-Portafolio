import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Terminal, BrainCircuit, MessageSquare, BarChart3, Search, Zap, Languages } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { MOTION } from '../utils/animations';
import React from 'react';

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section id="ai-showcase" className="py-16 relative z-10 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Showcase Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-20">
          {/* Left: Interactive code snippet (Technical Depth) */}
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
              className="relative bg-zinc-950/80 backdrop-blur-2xl rounded-2xl border border-zinc-800/60 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center px-4 py-3 border-b border-zinc-800/40 bg-zinc-900/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <div className="mx-auto text-[11px] text-zinc-500 font-mono flex items-center gap-2">
                  <Terminal size={12} /> semantic-engine.ts
                </div>
              </div>
              
              <div className="p-8 font-mono text-[13px] md:text-[14px] leading-relaxed text-zinc-300">
                <div className="text-zinc-500 italic mb-4">{'// Integración de Inteligencia de Negocios'}</div>
                <div><span className="text-violet-400">const</span> solution = <span className="text-violet-400">await</span> Gemini.<span className="text-emerald-400">generate</span>({'{'}</div>
                <div className="pl-4">context: <span className="text-cyan-300">'Documentos de Venta 2024'</span>,</div>
                <div className="pl-4">task: <span className="text-cyan-300">'Identificar patrones de fuga de clientes'</span>,</div>
                <div className="pl-4">output: <span className="text-cyan-300">'Dashboard de Alertas'</span></div>
                <div>{'}'});</div>
                
                <div className="mt-8 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-emerald-400/90 text-xs">
                  <span className="text-zinc-500">Output:</span> "Se detectó tendencia de abandono en sector retail. Sugerencia: Aplicar descuento proactivo en suscripciones tipo A."
                </div>
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
