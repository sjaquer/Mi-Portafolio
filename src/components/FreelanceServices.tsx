import { motion } from 'framer-motion';
import { ArrowRight, Code2, Server, Brain } from 'lucide-react';

const services = [
  {
    id: 'web-dev',
    num: '01',
    title: 'Desarrollo Web Full-Stack',
    desc: 'Interfaces fluidas que convierten tu marca en una experiencia interactiva inolvidable.',
    icon: Code2,
    tags: ['React & TypeScript', 'Framer Motion', 'Arquitectura moderna'],
  },
  {
    id: 'backend',
    num: '02',
    title: 'Backend & APIs',
    desc: 'Estructuras robustas diseñadas para sostener el crecimiento y rendimiento de tus ideas.',
    icon: Server,
    tags: ['Node.js & Python', 'SQL/NoSQL', 'Cloud & Serverless'],
  },
  {
    id: 'ai-integration',
    num: '03',
    title: 'IA Generativa',
    desc: 'Modelos integrados en tu flujo para automatizar decisiones y potenciar tu producto.',
    icon: Brain,
    tags: ['LLMs & RAG', 'Embeddings', 'Modelos Locales'],
  },
];

const FreelanceServices = () => {
  return (
    <section id="freelance-services" className="relative z-10 py-32 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center sm:text-left"
        >
          <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-6">
            Especialidades
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.05] max-w-3xl">
            Tres pilares,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              un solo enfoque
            </span>.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-xl p-8 sm:p-10 hover:bg-zinc-900/40 hover:border-emerald-500/20 transition-all duration-500"
                style={{ marginTop: i === 1 ? '2.5rem' : i === 2 ? '-.5rem' : undefined }}
              >
                <div className="absolute -inset-px bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/[0.02] group-hover:via-emerald-400/[0.01] group-hover:to-teal-400/[0.02] blur-xl rounded-3xl transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800/40 border border-zinc-700/40 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500">
                      <Icon size={26} className="text-emerald-400" />
                    </div>
                    <span className="text-4xl font-light text-zinc-800 font-mono select-none">{svc.num}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">{svc.title}</h3>
                  <p className="text-base text-zinc-500 leading-relaxed mb-10">{svc.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:border-zinc-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/50">
                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-emerald-400 transition-colors group/link">
                      Saber más
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreelanceServices;
