import { motion } from 'framer-motion';
import { ArrowRight, Server, GitBranch, BarChart3 } from 'lucide-react';
import CardGlow from './CardGlow';

const services = [
  {
    id: 'systems',
    num: '01',
    title: 'Sistemas & Herramientas Internas',
    desc: 'Plataformas web, backends y bases de datos a medida para que tu equipo deje de depender de Excel y procesos manuales.',
    icon: Server,
    tags: ['Python', 'SQL', 'PostgreSQL', 'Web'],
  },
  {
    id: 'automation',
    num: '02',
    title: 'Automatización & Integraciones',
    desc: 'Conecto CRM, Shopify, Sheets, WhatsApp y email mediante APIs para que los datos fluyan solos, sin intervención manual.',
    icon: GitBranch,
    tags: ['APIs', 'ETL', 'Automatización', 'Integraciones'],
  },
  {
    id: 'bi',
    num: '03',
    title: 'Business Intelligence & Datos',
    desc: 'Dashboards y reportería que convierten datos operativos en decisiones — desde la base de datos hasta el dashboard en tiempo real.',
    icon: BarChart3,
    tags: ['Power BI', 'PostgreSQL', 'Dashboards', 'KPIs'],
  },
];

const ServiceCard: React.FC<{ svc: typeof services[number]; i: number }> = ({ svc, i }) => {
  const Icon = svc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-xl p-8 sm:p-10 hover:bg-zinc-900/40 hover:border-emerald-500/20 transition-all duration-500"
      style={{ marginTop: i === 1 ? '2.5rem' : i === 2 ? '-.5rem' : undefined }}
    >
      <CardGlow color="rgba(16,185,129,0.35)" />

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
};

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
            Lo que hago,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              en concreto
            </span>.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceServices;
