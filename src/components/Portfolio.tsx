import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BrainCircuit, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import { MOTION } from '../utils/animations';

const filterOptions = [
  { id: 'ia', label: 'IA' },
  { id: 'negocio', label: 'Negocio' },
  { id: 'operaciones', label: 'Operaciones' }
] as const;

/* ── Minimal text-only project card ──────────────────────────── */
const ProjectCard = ({ project }: { project: Project }) => {
  const hasAI = project.aiFeatures && project.aiFeatures.length > 0;

  return (
    <motion.div
      variants={MOTION.staggerChild}
      layout
      className={`group relative h-full bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:bg-zinc-900/50 ${hasAI ? 'hover:border-violet-500/30' : 'hover:border-cyan-500/30'}`}
    >
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {hasAI && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-violet-500/10 text-[10px] font-bold uppercase tracking-widest text-violet-400 border border-violet-500/20 shrink-0">
                  <BrainCircuit size={10} /> IA
                </span>
              )}
              {project.year && (
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
                  {project.year}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-zinc-100 tracking-tight leading-tight">{project.title}</h3>
          </div>

          {/* Links */}
          <div className="flex items-center gap-1.5 shrink-0">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-500 hover:text-cyan-400 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/30 transition-all"
                aria-label={`Ver ${project.title} en vivo`}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 transition-all"
                aria-label={`Ver ${project.title} en GitHub`}
              >
                <Github size={14} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Subtitle */}
        {project.subtitle && (
          <p className="text-zinc-400 text-xs uppercase tracking-[0.15em] mb-4 font-semibold leading-relaxed">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-zinc-300/80 text-sm mb-6 font-light leading-relaxed">
          {project.description || project.subtitle}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack?.map((tech: string, i: number) => {
            const isAITech = ['Gemini API', 'Gemini REST API', 'Google Genkit', 'Gemini 3.1 Flash', 'Gemini 2.5 Flash', 'OpenAI API', 'Modelos Locales', 'Narrative UI'].includes(tech);
            return (
              <span key={i} className={`px-2 py-0.5 rounded-md text-[10px] font-mono border ${isAITech ? 'bg-violet-500/10 text-violet-300 border-violet-500/20' : 'bg-zinc-900/30 text-zinc-500 border-zinc-800/50'}`}>
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex-grow" />

        {/* AI Features footer */}
        {hasAI && (
          <div className="pt-4 border-t border-zinc-800/30">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {project.aiFeatures?.slice(0, 3).map((feat: string, i: number) => (
                <div key={i} className="flex items-center gap-1.5">
                  <BrainCircuit className="text-violet-500/40 shrink-0" size={10} />
                  <span className="text-[11px] text-zinc-500 font-light">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hover arrow indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <ArrowUpRight size={16} className={hasAI ? 'text-violet-500/40' : 'text-cyan-500/40'} />
        </div>
      </div>
    </motion.div>
  );
};

type PortfolioFilter = (typeof filterOptions)[number]['id'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter | null>(null);

  const getProjectGroup = (project: Project): PortfolioFilter => {
    const category = (project.category ?? '').toLowerCase().trim();

    if (project.aiFeatures?.length || ['ia', 'gaming', 'experiencia'].includes(category)) {
      return 'ia';
    }

    if (['logistica', 'operaciones'].includes(category)) {
      return 'operaciones';
    }

    return 'negocio';
  };

  const filteredProjects = activeFilter ? projects.filter((project) => getProjectGroup(project) === activeFilter) : projects;

  return (
    <section id="portfolio" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={MOTION.fadeUp} initial="initial" whileInView="whileInView" viewport={MOTION.viewport} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-4">
              Soluciones & Proyectos.
            </h2>
            <p className="text-lg text-zinc-400 font-light">
              Casos reales en e-commerce, BI, logística y automatización con impacto medible.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === filter.id ? 'bg-zinc-100 text-zinc-950 shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-zinc-800/50 hover:bg-zinc-800/80 backdrop-blur-sm'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;