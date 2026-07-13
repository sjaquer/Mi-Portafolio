import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Brain, RotateCcw, ShieldAlert, UtensilsCrossed, Globe, LayoutGrid, Bot } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import ErrorBoundary from './ErrorBoundary';

const BigJackSim = React.lazy(() => import('./simulators/BigJackSim').then(m => ({ default: m.BigJackSim })));
const TaskMeSim = React.lazy(() => import('./simulators/TaskMeSim').then(m => ({ default: m.TaskMeSim })));
const OrdevSim = React.lazy(() => import('./simulators/OrdevSim').then(m => ({ default: m.OrdevSim })));
const TaskZenithSim = React.lazy(() => import('./simulators/TaskZenithSim').then(m => ({ default: m.TaskZenithSim })));
const WhatsappBotSim = React.lazy(() => import('./simulators/WhatsappBotSim').then(m => ({ default: m.WhatsappBotSim })));

const SimulatorLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="w-7 h-7 border-2 border-slate-800 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

const SimulatorFallbackError = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <ShieldAlert size={20} className="text-red-500/40 mb-3" />
    <button onClick={() => window.location.reload()}
      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-300 transition-all cursor-pointer">
      <RotateCcw size={14} />
    </button>
  </div>
);

const SimulatorSelector: React.FC<{ simulatorId: string }> = ({ simulatorId }) => (
  <ErrorBoundary fallback={<SimulatorFallbackError />}>
    <Suspense fallback={<SimulatorLoader />}>
      {(() => {
        switch (simulatorId) {
          case 'bigjack': return <BigJackSim />;
          case 'taskme': return <TaskMeSim />;
          case 'ordev': return <OrdevSim />;
          case 'taskzenith': return <TaskZenithSim />;
          case 'whatsappbot': return <WhatsappBotSim />;
          default: return null;
        }
      })()}
    </Suspense>
  </ErrorBoundary>
);

const projectThemes: Record<string, {
  accent: string;
  rgb: string;
  glow: string;
}> = {
  '1': { accent: '#FCC900', rgb: '252, 201, 0', glow: 'rgba(252, 201, 0, 0.4)' },
  '2': { accent: '#3BCE89', rgb: '59, 206, 137', glow: 'rgba(59, 206, 137, 0.4)' },
  '3': { accent: '#FF6600', rgb: '255, 102, 0', glow: 'rgba(255, 102, 0, 0.4)' },
  '4': { accent: '#004FCD', rgb: '0, 79, 205', glow: 'rgba(0, 79, 205, 0.4)' },
  '5': { accent: '#22C55E', rgb: '34, 197, 94', glow: 'rgba(34, 197, 94, 0.4)' }
};

const projectIcons: Record<string, React.ReactNode> = {
  '1': <UtensilsCrossed size={20} />,
  '2': <Brain size={20} />,
  '3': <Globe size={20} />,
  '4': <LayoutGrid size={20} />,
  '5': <Bot size={20} />
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];
  const hasAI = project.aiFeatures && project.aiFeatures.length > 0;

  return (
    <div
      data-project-card
      style={{
        borderColor: `${currentTheme.accent}50`,
        boxShadow: `0 0 80px -20px rgba(${currentTheme.rgb}, 0.25)`
      }}
      className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-zinc-900/40 border transition-all duration-700"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span
            style={{ color: currentTheme.accent, borderColor: `${currentTheme.accent}30`, backgroundColor: `${currentTheme.accent}12` }}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/80 border shrink-0"
          >
            {projectIcons[project.id]}
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-50 tracking-tight leading-tight">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">{project.subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {hasAI && (
            <span
              style={{ color: currentTheme.accent, borderColor: `${currentTheme.accent}25`, backgroundColor: `${currentTheme.accent}10` }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border"
            >
              <Brain size={11} /> IA
            </span>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-all"
              aria-label={`Ver ${project.title} en vivo`}>
              <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900/80 text-zinc-400 hover:text-zinc-100 border border-zinc-800 transition-all"
              aria-label={`Ver ${project.title} en GitHub`}>
              <Github size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xl">
        {project.description}
      </p>

      {/* Metrics */}
      {project.caseStudy && (
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-black/40 border border-zinc-800/50">
          {project.caseStudy.metrics.map((metric, idx) => (
            <div key={idx}>
              <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5 leading-none">{metric.label}</span>
              <span style={{ color: currentTheme.accent }} className="text-xl sm:text-2xl font-extrabold font-mono tracking-tight">
                {metric.prefix}{metric.value}{metric.suffix || ''}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack?.map((tech, idx) => (
          <span key={idx}
            style={{ color: currentTheme.accent, borderColor: `${currentTheme.accent}20`, backgroundColor: `${currentTheme.accent}06` }}
            className="px-2.5 py-1 rounded-md text-[9px] font-mono border leading-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>('1');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project-section');
            if (id) setActiveProjectId(id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.05 }
    );

    const elements = document.querySelectorAll('[data-project-section]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative z-10">
      {/* Title Screen */}
      <div className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="text-center px-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-zinc-50 tracking-tight leading-none">
                Precision Engineering.
              </h2>
            </motion.div>
        </div>
      </div>

      {/* Project Sections */}
      {projects.map((project, index) => {
        const theme = projectThemes[project.id] || projectThemes['1'];
        return (
          <section
            key={project.id}
            data-project-section={project.id}
            className="relative min-h-screen snap-center flex items-center justify-center py-20 overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, ${theme.accent}55 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, ${theme.accent}30 0%, transparent 45%),
                #09090b
              `
            }}
          >
            {/* Ambient edges */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}60, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}40, transparent)` }} />
            </div>
            {/* Color wash overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, ${theme.accent}08 0%, transparent 30%, transparent 70%, ${theme.accent}08 100%)` }} />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <ProjectCard project={project} />
                  <div className="hidden lg:block h-[480px] rounded-2xl overflow-hidden glass-panel bg-slate-950/50 border border-white/[0.03] shadow-xl">
                    {project.simulatorId ? (
                      <SimulatorSelector simulatorId={project.simulatorId} />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                </div>
                {/* Mobile Simulator */}
                <div className="block lg:hidden mt-8 h-[350px] rounded-2xl overflow-hidden glass-panel bg-slate-950/50 border border-white/[0.03]">
                  {project.simulatorId && <SimulatorSelector simulatorId={project.simulatorId} />}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Portfolio;
