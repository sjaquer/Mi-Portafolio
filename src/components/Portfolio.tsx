import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, RotateCcw, ShieldAlert } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import ErrorBoundary from './ErrorBoundary';
import { Project3DShowcase } from './Project3DShowcase';

const BigJackSim = React.lazy(() => import('./simulators/BigJackSim').then(m => ({ default: m.BigJackSim })));
const TaskMeSim = React.lazy(() => import('./simulators/TaskMeSim').then(m => ({ default: m.TaskMeSim })));
const OrdevSim = React.lazy(() => import('./simulators/OrdevSim').then(m => ({ default: m.OrdevSim })));
const TaskZenithSim = React.lazy(() => import('./simulators/TaskZenithSim').then(m => ({ default: m.TaskZenithSim })));
const WhatsappBotSim = React.lazy(() => import('./simulators/WhatsappBotSim').then(m => ({ default: m.WhatsappBotSim })));

const SimulatorLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="w-7 h-7 border-2 border-zinc-800 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

const SimulatorFallbackError = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <ShieldAlert size={20} className="text-red-500/40 mb-3" />
    <button onClick={() => window.location.reload()}
      className="p-2 rounded-lg bg-zinc-950 border border-zinc-850 text-zinc-500 hover:text-zinc-300 transition-all cursor-pointer">
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
  '4': { accent: '#3B82F6', rgb: '59, 130, 246', glow: 'rgba(59, 130, 246, 0.4)' },
  '5': { accent: '#22C55E', rgb: '34, 197, 94', glow: 'rgba(34, 197, 94, 0.4)' }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];
  const [viewMode, setViewMode] = useState<'impact' | 'tech'>('impact');

  return (
    <div
      data-project-card
      style={{
        borderColor: `${currentTheme.accent}22`,
        boxShadow: `0 0 60px -30px rgba(${currentTheme.rgb}, 0.15)`
      }}
      className="rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-zinc-950/20 border transition-all duration-700 hover:border-zinc-800/40"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-50 tracking-tight leading-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">{project.subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-950/80 text-zinc-400 hover:text-zinc-100 border border-zinc-900 hover:border-zinc-800 transition-all"
              aria-label={`Ver ${project.title} en vivo`}>
              <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-950/80 text-zinc-400 hover:text-zinc-100 border border-zinc-900 hover:border-zinc-800 transition-all"
              aria-label={`Ver ${project.title} en GitHub`}>
              <Github size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-200 text-sm leading-relaxed mb-6 max-w-xl">
        {project.description}
      </p>

      {/* Technical / Non-Technical Toggle */}
      <div className="flex gap-1.5 mb-5 p-0.5 bg-zinc-950/60 rounded-xl border border-zinc-900 w-fit">
        <button 
          onClick={() => setViewMode('impact')} 
          className={`px-3 py-1 text-[9px] font-mono font-bold rounded-lg transition-all cursor-pointer ${
            viewMode === 'impact' 
              ? 'bg-zinc-900 text-zinc-100 border border-zinc-800/40 shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
        >
          Impacto
        </button>
        <button 
          onClick={() => setViewMode('tech')} 
          className={`px-3 py-1 text-[9px] font-mono font-bold rounded-lg transition-all cursor-pointer ${
            viewMode === 'tech' 
              ? 'bg-zinc-900 text-zinc-100 border border-zinc-800/40 shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-300 border border-transparent'
          }`}
        >
          Ingeniería
        </button>
      </div>

      {/* Toggleable Details */}
      {viewMode === 'impact' ? (
        <div className="space-y-4">
          <div>
            <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Problema</span>
            <p className="text-zinc-300 text-xs leading-relaxed">{project.caseStudy?.problem}</p>
          </div>
          <div>
            <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Solución</span>
            <p className="text-zinc-300 text-xs leading-relaxed">{project.caseStudy?.solution}</p>
          </div>
          {/* Metrics */}
          {project.caseStudy && (
            <div className="grid grid-cols-3 gap-2.5 mt-5 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-900/60">
              {project.caseStudy.metrics.map((metric, idx) => (
                <div key={idx}>
                  <span className="block text-[7px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 leading-none">{metric.label}</span>
                  <span style={{ color: currentTheme.accent }} className="text-lg sm:text-xl font-extrabold font-mono tracking-tight">
                    {metric.prefix}{metric.value}{metric.suffix || ''}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Stack Tecnológico</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack?.map((tech, idx) => (
                <span key={idx}
                  style={{ color: currentTheme.accent, borderColor: `${currentTheme.accent}30`, backgroundColor: `${currentTheme.accent}08` }}
                  className="px-2.5 py-1 rounded-md text-[9px] font-mono border leading-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.aiFeatures && (
            <div>
              <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Características de IA</span>
              <div className="space-y-1.5">
                {project.aiFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-300 text-xs font-mono">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: currentTheme.accent }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="pt-2 text-[10px] text-zinc-500 leading-relaxed font-mono">
            * Ejecución optimizada en tiempo real mediante arquitectura nativa y persistencia distribuida.
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'sim'>('3d');

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-950/20 border border-zinc-900/40 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-500 hover:border-zinc-800/40">
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-zinc-900/10 to-transparent pointer-events-none" />

      {/* Header Selector */}
      <div className="flex items-center justify-between border-b border-zinc-900/80 pb-3 mb-2 z-10 shrink-0">
        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
          {activeTab === '3d' ? 'VISTA TRIDIMENSIONAL' : 'SIMULADOR INTERACTIVO'}
        </span>
        
        {project.simulatorId && (
          <div className="flex gap-1 bg-zinc-950/80 p-0.5 rounded-lg border border-zinc-900">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-2.5 py-1 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                activeTab === '3d' 
                  ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Visual 3D
            </button>
            <button
              onClick={() => setActiveTab('sim')}
              className={`px-2.5 py-1 text-[9px] font-bold rounded-md transition-all cursor-pointer ${
                activeTab === 'sim' 
                  ? 'bg-zinc-900 text-zinc-100 border border-zinc-800' 
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Simulador
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center relative overflow-hidden h-[340px]">
        {activeTab === '3d' ? (
          project.simulatorId ? (
            <Project3DShowcase simulatorId={project.simulatorId} />
          ) : (
            <div className="w-full h-full bg-transparent" />
          )
        ) : (
          project.simulatorId && <SimulatorSelector simulatorId={project.simulatorId} />
        )}
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
      {projects.map((project) => {
        const theme = projectThemes[project.id] || projectThemes['1'];
        return (
          <section
            key={project.id}
            data-project-section={project.id}
            className="relative min-h-screen snap-center flex items-center justify-center py-20 overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, ${theme.accent}15 0%, transparent 60%),
                radial-gradient(ellipse at 80% 70%, ${theme.accent}08 0%, transparent 55%),
                #09090b
              `
            }}
          >
            {/* Ambient edges */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}20, transparent)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}15, transparent)` }} />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <ProjectCard project={project} />
                  <div className="hidden lg:block h-[480px]">
                    <ProjectPreview project={project} />
                  </div>
                </div>
                {/* Mobile Preview & Simulator */}
                <div className="block lg:hidden mt-8 h-[440px]">
                  <ProjectPreview project={project} />
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
