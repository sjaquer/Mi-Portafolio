import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { MOTION } from '../utils/animations';

const services = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Desarrollo Web Full-Stack',
    description: 'Interfaces fluidas de alta fidelidad que convierten la historia de tu marca en una experiencia interactiva inolvidable.',
    imageUrl: '/images/service_web_dev.png',
    features: ['React & TypeScript', 'Framer Motion', 'Arquitectura moderna'],
    glowColor: 'rgba(16,185,129,0.05)',
    borderHover: 'hover:border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'backend',
    num: '02',
    title: 'Backend & APIs',
    description: 'Estructuras invisibles, seguras y robustas diseñadas para sostener el crecimiento y el rendimiento óptimo de tus ideas.',
    imageUrl: '/images/service_backend.png',
    features: ['Node.js & Python', 'Bases de Datos (SQL/NoSQL)', 'Cloud & Serverless'],
    glowColor: 'rgba(16,185,129,0.05)',
    borderHover: 'hover:border-emerald-500/20',
    iconColor: 'text-emerald-500',
  },
  {
    id: 'ai-integration',
    num: '03',
    title: 'IA Generativa',
    description: 'Modelos inteligentes integrados de forma nativa en tu flujo de trabajo para automatizar decisiones y potenciar tu producto.',
    imageUrl: '/images/service_ai.png',
    features: ['Google Gemini API', 'RAG & Embeddings', 'Modelos Locales'],
    glowColor: 'rgba(16,185,129,0.08)',
    borderHover: 'hover:border-emerald-500/30',
    iconColor: 'text-emerald-400',
    featured: true,
  }
];

const FreelanceServices = () => {
  return (
    <section id="freelance-services" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={MOTION.fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={MOTION.viewport}
          transition={MOTION.fadeUpTransition}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-6">
            Especialidades.
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Me enfoco en tres pilares fundamentales para entregar productos digitales completos: desde la interfaz hasta la lógica profunda del servidor.
          </p>
        </motion.div>

        <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport} className="grid lg:grid-cols-3 gap-6">
          {services.map(service => {
            const glareColor = 'rgba(16, 185, 129, 0.1)';

            return (
              <Tilt
                key={service.id}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor={glareColor}
                glarePosition="all"
                glareBorderRadius="24px"
                perspective={1000}
                className="h-full"
              >
                <motion.div
                  variants={MOTION.staggerChild}
                  className={`group relative h-full bg-slate-950/40 backdrop-blur-xl border border-slate-900 ${service.borderHover} rounded-3xl p-8 flex flex-col transition-all duration-500 ${service.featured ? 'bg-slate-900/10 ring-1 ring-emerald-500/10 border-emerald-500/20' : ''}`}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${service.glowColor}, 0 20px 40px rgba(0,0,0,0.6)` }} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      {/* Premium 3D glass icon */}
                      <div className="w-16 h-16 rounded-2xl bg-slate-950/80 border border-slate-900 flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-emerald-500/20 transition-all duration-500 overflow-hidden shadow-inner">
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-3xl font-light text-slate-800 font-mono select-none">{service.num}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-light">{service.description}</p>

                    <ul className="space-y-3 mb-10 border-t border-slate-900 pt-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-light">
                          <div className={`w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-60`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="mt-auto inline-flex items-center text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors group/link w-fit">
                      Saber más <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceServices;

