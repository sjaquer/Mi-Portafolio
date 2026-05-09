import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, BrainCircuit, ArrowRight, Check } from 'lucide-react';
import { MOTION } from '../utils/animations';

const services = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Desarrollo Web Full-Stack',
    description: 'Aplicaciones SPA rápidas y modernas. Interfaces construidas con atención al detalle y animaciones fluidas.',
    icon: Monitor,
    features: ['React & TypeScript', 'Framer Motion', 'Arquitectura moderna'],
    glowColor: 'rgba(34,211,238,0.08)',
    borderHover: 'hover:border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'backend',
    num: '02',
    title: 'Backend & APIs',
    description: 'Bases de datos sólidas y lógica de negocio segura. Desarrollo de microservicios y APIs REST escalables.',
    icon: Server,
    features: ['Node.js & Python', 'Bases de Datos (SQL/NoSQL)', 'Cloud & Serverless'],
    glowColor: 'rgba(52,211,153,0.08)',
    borderHover: 'hover:border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'ai-integration',
    num: '03',
    title: 'IA Generativa',
    description: 'Modelos de lenguaje integrados en tu producto para potenciar búsquedas, recomendaciones y tareas cognitivas.',
    icon: BrainCircuit,
    features: ['OpenAI / AWS Bedrock', 'RAG & Embeddings', 'Prompt Engineering'],
    glowColor: 'rgba(168,85,247,0.08)',
    borderHover: 'hover:border-violet-500/30',
    iconColor: 'text-violet-400',
    featured: true,
  }
];

const FreelanceServices = () => {
  return (
    <section id="freelance-services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={MOTION.fadeUp} initial="initial" whileInView="whileInView" viewport={MOTION.fadeUp.viewport} transition={MOTION.fadeUp.transition} className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-6">
            Especialidades.
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Me enfoco en tres pilares fundamentales para entregar productos digitales completos: desde la interfaz hasta la lógica profunda del servidor.
          </p>
        </motion.div>

        <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.fadeUp.viewport} className="grid lg:grid-cols-3 gap-6">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={MOTION.staggerChild}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 ${service.borderHover} rounded-3xl p-8 flex flex-col transition-all duration-500 ${service.featured ? 'bg-zinc-900/60 ring-1 ring-violet-500/10' : ''}`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${service.glowColor}, 0 20px 40px rgba(0,0,0,0.4)` }} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <Icon size={32} strokeWidth={1} className={`${service.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                    <span className="text-3xl font-light text-zinc-800 font-mono select-none">{service.num}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed font-light">{service.description}</p>

                  <ul className="space-y-3 mb-10 border-t border-zinc-800/50 pt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                        <div className={`w-1 h-1 rounded-full bg-current ${service.iconColor} opacity-50`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="mt-auto inline-flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group/link w-fit">
                    Saber más <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelanceServices;
