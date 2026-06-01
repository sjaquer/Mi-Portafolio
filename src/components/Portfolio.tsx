import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Brain, ArrowUpRight, Compass } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import { MOTION } from '../utils/animations';
import { cn } from '../utils/cn';
import { SimulatorSelector } from './simulators/WhatsappBotSim';

const ProjectCard: React.FC<{ 
  project: Project; 
  isActive: boolean;
}> = ({ project, isActive }) => {
  const hasAI = project.aiFeatures && project.aiFeatures.length > 0;
  
  return (
    <div 
      data-project-id={project.id}
      data-project-card
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}
      className={cn(
        'group glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 border scroll-mt-28',
        isActive 
          ? 'bg-zinc-900/40 border-emerald-500/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_20px_40px_-15px_rgba(0,0,0,0.4)] backdrop-blur-2xl' 
          : 'bg-zinc-950/10 border-zinc-900/60 opacity-55 hover:opacity-80 hover:border-zinc-800/85'
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/[0.005] via-transparent to-transparent pointer-events-none" />
      
      {/* Header Info */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            {hasAI && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-[9px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 shrink-0">
                <Brain size={10} /> IA
              </span>
            )}
            {project.year && (
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                {project.year}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-extrabold text-zinc-100 tracking-tight leading-none font-display">
            {project.title}
          </h3>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-1.5 shrink-0">
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900/80 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/30 transition-all"
              aria-label={`Ver ${project.title} en vivo`}
            >
              <ExternalLink size={13} />
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900/80 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 transition-all"
              aria-label={`Ver ${project.title} en GitHub`}
            >
              <Github size={13} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Subtitle */}
      {project.subtitle && (
        <p className="text-zinc-500 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] mb-3 font-semibold">
          {project.subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-zinc-400 text-sm mb-5 leading-relaxed font-light font-sans">
        {project.description}
      </p>

      {/* Case Study Metrics (Unboxed system) */}
      {project.caseStudy && (
        <div className="border-t border-zinc-900/60 pt-4 mb-5">
          <div className="grid grid-cols-3 gap-4">
            {project.caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="relative flex flex-col text-left">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1.5 leading-none">
                  {metric.label}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 tracking-tight font-mono leading-none">
                  {metric.prefix}{metric.value}{metric.suffix || ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack Tipográfico */}
      <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-[9px] sm:text-[10px] font-mono text-zinc-500">
        {project.techStack?.map((tech: string, idx: number) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-zinc-800/80 font-bold select-none">•</span>}
            <span className="transition-colors hover:text-emerald-400/85">
              {tech}
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Simulator Embed */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 380, opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="block lg:hidden overflow-hidden w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 mt-5 border-t border-slate-900/60 bg-slate-950/30"
          >
            <div className="h-[380px] w-full overflow-hidden">
              <SimulatorSelector simulatorId={project.simulatorId || ''} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden lg:block">
        <ArrowUpRight size={14} className="text-emerald-500/40" />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>('1');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -35% 0px', // Center focus zone of viewport
      threshold: 0.2,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-project-id');
          if (id) {
            setActiveProjectId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('[data-project-card]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-slate-950/10">
      {/* Dynamic ambient grid backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-1/4 h-96 w-96 rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-1/4 h-96 w-96 rounded-full bg-teal-500/[0.02] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <motion.div 
          variants={MOTION.fadeUp} 
          initial="initial" 
          whileInView="whileInView" 
          viewport={MOTION.viewport} 
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            <Compass size={11} className="text-emerald-400" /> CASOS DE ESTUDIO
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-4 leading-none">
            Precision Engineering.
          </h2>
          <p className="text-md text-zinc-400 font-light max-w-2xl leading-relaxed font-sans">
            5 proyectos destacados con simuladores interactivos integrados en tiempo real. 
            Experimente la lógica y la arquitectura funcional mientras navega el portafolio.
          </p>
        </motion.div>

        {/* 50/50 Cinematic Layout Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
          
          {/* Scrollable Column (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-32 lg:pb-[35vh]">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isActive={project.id === activeProjectId}
              />
            ))}
          </div>

          {/* Sticky Column (Right - Desktop Only) */}
          <div className="hidden lg:block w-1/2 sticky top-[15vh] h-[520px] rounded-[2.5rem] overflow-hidden glass-panel bg-slate-950/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProjectId}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="w-full h-full p-2"
              >
                {activeProject?.simulatorId && (
                  <SimulatorSelector simulatorId={activeProject.simulatorId} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;