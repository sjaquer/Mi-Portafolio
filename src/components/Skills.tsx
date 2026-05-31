import { motion } from 'framer-motion';
import { Database, BrainCircuit, LineChart, Globe } from 'lucide-react';
import { MOTION } from '../utils/animations';
import { siteContent } from '../data/siteContent';
import * as Tooltip from '@radix-ui/react-tooltip';
import { cn } from '../utils/cn';

/* ── Skill icon mapping ──────────────────────────────────────────────
   Uses https://skillicons.dev/ — keys must match their icon IDs exactly.
   For skills without a skillicons entry we fall back to a simple dot.
   ──────────────────────────────────────────────────────────────────── */

const ICON_MAP: Record<string, string> = {
  'React': 'react',
  'TypeScript': 'ts',
  'Next.js': 'nextjs',
  'Tailwind': 'tailwind',
  'Framer Motion': 'framer',           // ← doesn't exist on skillicons, handled by fallback
  'Node.js': 'nodejs',
  'Python': 'python',
  'Firebase': 'firebase',
  'SQL Server': 'postgres',            // closest match
  'SQL': 'postgres',
  'REST APIs': 'postman',
  'Power BI': 'powerbi',               // ← doesn't exist, handled by fallback
  'Google Analytics': 'google',         // ← doesn't exist, handled by fallback
  'Git': 'git',
  'Vercel': 'vercel',
  'Docker': 'docker',
  'GCP': 'gcp',
  'Prompt Engineering': '',
  'Gemini & OpenAI API': '',
  'SEO Técnico': '',
  'Análisis Predictivo': '',
  'Google Sheets API': '',
  'Automatización': '',
  'Integración de APIs': '',
  'Excel Avanzado': '',
  'ETL': '',
};

const getIconUrl = (skill: string): string | null => {
  const id = ICON_MAP[skill];
  if (id === undefined || id === '') return null;
  return `https://skillicons.dev/icons?i=${id}&theme=dark`;
};

const skillNotes: Record<string, string> = {
  'React': 'Base del sistema de componentes y experiencia interactiva.',
  'TypeScript': 'Tipado fuerte para escalar sin perder control.',
  'Next.js': 'Framework ideal para rendimiento y routing moderno.',
  'Tailwind': 'Permite superficies rápidas, consistentes y responsivas.',
  'Framer Motion': 'Movimiento suave para jerarquía y feedback.',
  'Node.js': 'Capa backend y automatización de procesos.',
  'Python': 'Utilizado en scripts, análisis y automatización.',
  'Firebase': 'Servicios rápidos para auth, datos y despliegue.',
  'SQL Server': 'Persistencia robusta para datos transaccionales.',
  'REST APIs': 'Integración con servicios y plataformas externas.',
  'Power BI': 'Visualización ejecutiva y análisis de negocio.',
  'Google Analytics': 'Seguimiento de comportamiento y conversión.',
  'Prompt Engineering': 'Diseño de instrucciones y flujos de IA.',
  'Análisis Predictivo': 'Modelos y señales para decisiones mejores.',
  'Automatización': 'Menos tareas repetitivas, más impacto operativo.',
};

const skillCategories = [
  {
    id: 'data', title: 'Tecnologías & Datos', icon: Database,
    skills: ['SQL Server', 'Python', 'Power BI', 'Firebase', 'Git', 'REST APIs']
  },
  {
    id: 'ai', title: 'IA & Analytics', icon: BrainCircuit,
    skills: ['Análisis Predictivo', 'Prompt Engineering', 'Google Analytics', 'ETL'],
    featured: true
  },
  {
    id: 'strategy', title: 'Estrategia', icon: LineChart,
    skills: ['SEO Técnico', 'Automatización', 'Excel Avanzado', 'Integración de APIs']
  },
  {
    id: 'frontend', title: 'Desarrollo Web', icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind']
  }
];

const Skills = () => (
  <section id="skills" className="py-24 relative z-10 overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-8%] top-12 h-72 w-72 rounded-full bg-emerald-500/[0.02] blur-3xl" />
      <div className="absolute right-[-8%] bottom-0 h-72 w-72 rounded-full bg-slate-500/[0.02] blur-3xl" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <motion.div 
        variants={MOTION.fadeUp} 
        initial="initial" 
        whileInView="whileInView" 
        viewport={MOTION.viewport}
        className="mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-xl text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 mb-4">
          <BrainCircuit size={12} className="text-emerald-400 animate-pulse" /> Stack Tecnológico
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 font-display tracking-tight mb-6 max-w-[12ch]">
          {siteContent.skills.title}.
        </h2>
        <p className="text-lg text-slate-400 font-light max-w-2xl leading-relaxed">
          {siteContent.skills.subtitle}
        </p>
      </motion.div>

      <Tooltip.Provider delayDuration={120}>
        <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={MOTION.staggerChild}
                whileHover={{ y: -4 }}
                className={cn(
                  'group relative flex flex-col rounded-[1.5rem] border bg-slate-950/20 p-8 backdrop-blur-2xl transition-all duration-500 shadow-bento-dark',
                  cat.featured
                    ? 'border-emerald-500/20 hover:border-emerald-500/35'
                    : 'border-slate-900 hover:border-slate-800 hover:bg-slate-950/40'
                )}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/[0.01] via-transparent to-transparent" />
                <div className="relative z-10 flex items-center gap-4 mb-10">
                  <div className={cn(
                    'w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-xl',
                    cat.featured ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-slate-950 border border-slate-900 text-slate-400'
                  )}>
                    <Icon size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-display leading-tight">{cat.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500 mt-1">{cat.featured ? 'Alto Impacto' : 'Core capability'}</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2">
                  {cat.skills.map(skill => {
                    const iconUrl = getIconUrl(skill);
                    const note = skillNotes[skill] || `${skill} forma parte del stack principal.`;
                    return (
                      <Tooltip.Root key={skill}>
                        <Tooltip.Trigger asChild>
                          <div
                            className={cn(
                              'flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-default select-none shadow-sm',
                              cat.featured
                                ? 'bg-slate-950/80 border-slate-800 hover:border-emerald-500/30'
                                : 'bg-slate-950/50 border-slate-900 hover:border-slate-700'
                            )}
                          >
                            {iconUrl ? (
                              <img
                                src={iconUrl}
                                alt={skill}
                                className="w-4 h-4 grayscale opacity-80 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-300"
                                loading="lazy"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                              />
                            ) : (
                              <span className={cn('w-1.5 h-1.5 rounded-full', cat.featured ? 'bg-emerald-400' : 'bg-slate-500')} />
                            )}
                            <span className="text-xs font-mono text-slate-400 transition-colors">
                              {skill}
                            </span>
                          </div>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            side="top"
                            sideOffset={8}
                            className="z-50 max-w-[220px] rounded-2xl border border-slate-800 bg-slate-950 px-3 py-2 text-xs leading-relaxed text-slate-300 shadow-2xl shadow-black/60 backdrop-blur-xl"
                          >
                            {note}
                            <Tooltip.Arrow className="fill-slate-800" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Tooltip.Provider>
    </div>
  </section>
);

export default Skills;
