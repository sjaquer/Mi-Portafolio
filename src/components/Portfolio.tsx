import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BrainCircuit } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import { MOTION } from '../utils/animations';

const filterOptions = [
  { id: 'ia', label: 'IA' },
  { id: 'negocio', label: 'Negocio' },
  { id: 'operaciones', label: 'Operaciones' }
] as const;

const ProjectCard = ({ project }: { project: Project }) => {
  const hasAI = project.aiFeatures && project.aiFeatures.length > 0;

  return (
    <motion.div
      variants={MOTION.staggerChild}
      whileHover={{ y: -8 }}
      className={`group relative h-full bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-500 ${hasAI ? 'hover:border-violet-500/30' : 'hover:border-cyan-500/30'}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 p-2">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img src={project.image?.replace('w=1600', 'w=800') || ''} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
          
          <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
            {project.liveUrl && (
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-100 text-zinc-950 rounded-full shadow-xl"><ExternalLink size={20} /></motion.a>
            )}
            {project.githubUrl && (
              <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 text-zinc-100 rounded-full border border-zinc-700 backdrop-blur-md"><Github size={20} /></motion.a>
            )}
          </div>

          {hasAI && (
            <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-zinc-950/80 text-[10px] font-bold uppercase tracking-widest text-violet-400 border border-violet-500/30 shadow-lg flex items-center gap-1.5 backdrop-blur-md">
              <BrainCircuit size={10} /> AI Agentic
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <h3 className="text-xl font-bold text-zinc-100 mb-2 tracking-tight">{project.title}</h3>
        {project.subtitle && (
          <p className="text-zinc-400 text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold line-clamp-2 leading-relaxed">
            {project.subtitle}
          </p>
        )}
        <p className="text-zinc-300 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
          {project.description || project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.map((tech: string, i: number) => {
            const isAITech = ['IA/ML', 'AI/ML', 'OpenAI API', 'Google Gemini API', 'Modelos Locales', 'Embeddings', 'NLP Básico'].includes(tech);
            return (
              <span key={i} className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${isAITech ? 'bg-violet-500/10 text-violet-300 border-violet-500/20' : 'bg-zinc-900/30 text-zinc-500 border-zinc-800/50'}`}>
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex-grow" />

        {hasAI && (
          <div className="pt-4 border-t border-zinc-800/50">
            {project.aiFeatures?.slice(0, 2).map((feat: string, i: number) => (
              <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                <BrainCircuit className="text-violet-500 shrink-0 mt-0.5 opacity-50" size={12} />
                <span className="text-xs text-zinc-500 font-light leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        )}
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
              Proyectos.
            </h2>
            <p className="text-lg text-zinc-400 font-light">
              Casos reales en e-commerce, ERP, logística, productividad e integraciones de IA.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveFilter(activeFilter === 'ia' ? null : 'ia')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === 'ia' ? 'bg-zinc-100 text-zinc-950 shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-zinc-800/50 hover:bg-zinc-800/80 backdrop-blur-sm'}`}>
              IA
            </button>
            <button onClick={() => setActiveFilter(activeFilter === 'negocio' ? null : 'negocio')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === 'negocio' ? 'bg-zinc-100 text-zinc-950 shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-zinc-800/50 hover:bg-zinc-800/80 backdrop-blur-sm'}`}>
              Negocio
            </button>
            <button onClick={() => setActiveFilter(activeFilter === 'operaciones' ? null : 'operaciones')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeFilter === 'operaciones' ? 'bg-zinc-100 text-zinc-950 shadow-lg' : 'bg-zinc-900/50 text-zinc-400 hover:text-zinc-100 border border-zinc-800/50 hover:bg-zinc-800/80 backdrop-blur-sm'}`}>
              Operaciones
            </button>
          </div>
        </motion.div>

        <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;