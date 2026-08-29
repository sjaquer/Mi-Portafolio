import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { Github, ExternalLink, RotateCcw, ShieldAlert } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import ErrorBoundary from './ErrorBoundary';
import { useInViewOnce } from './Reveal';
import CountUp from './CountUp';
import { useDraggable } from '../hooks/useDraggable';
import { useTilt } from '../hooks/useTilt';
import { useMagnetic } from '../hooks/useMagnetic';
import CardGlow from './CardGlow';

const BigJackSim = React.lazy(() => import('./simulators/BigJackSim').then(m => ({ default: m.BigJackSim })));
const TaskMeSim = React.lazy(() => import('./simulators/TaskMeSim').then(m => ({ default: m.TaskMeSim })));
const OrdevSim = React.lazy(() => import('./simulators/OrdevSim').then(m => ({ default: m.OrdevSim })));
const TaskZenithSim = React.lazy(() => import('./simulators/TaskZenithSim').then(m => ({ default: m.TaskZenithSim })));
const WhatsappBotSim = React.lazy(() => import('./simulators/WhatsappBotSim').then(m => ({ default: m.WhatsappBotSim })));
const DearelSim = React.lazy(() => import('./simulators/DearelSim').then(m => ({ default: m.DearelSim })));
const WienerEtlSim = React.lazy(() => import('./simulators/WienerEtlSim').then(m => ({ default: m.WienerEtlSim })));

const SimulatorLoader = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="w-7 h-7 border-2 border-zinc-800 border-t-emerald-500 rounded-full animate-spin" />
  </div>
);

const SimulatorFallbackError = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <ShieldAlert size={20} className="text-red-500/40 mb-3" />
    <button onClick={() => window.location.reload()}
      className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-zinc-300 transition-all cursor-pointer">
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
          case 'dearel': return <DearelSim />;
          case 'wiener_etl': return <WienerEtlSim />;
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
  '5': { accent: '#22C55E', rgb: '34, 197, 94', glow: 'rgba(34, 197, 94, 0.4)' },
  '6': { accent: '#A855F7', rgb: '168, 85, 247', glow: 'rgba(168, 85, 247, 0.4)' },
  '7': { accent: '#06B6D4', rgb: '6, 182, 212', glow: 'rgba(6, 182, 212, 0.4)' }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];
  const [viewMode, setViewMode] = useState<'impact' | 'tech'>('impact');
  const dragRef = useDraggable<HTMLDivElement>();
  const tiltRef = useTilt<HTMLDivElement>();
  const liveRef = useMagnetic<HTMLAnchorElement>();
  const ghRef = useMagnetic<HTMLAnchorElement>();

  return (
    <div
      ref={dragRef}
      data-project-card
      style={{
        borderColor: `${currentTheme.accent}22`,
        boxShadow: `0 0 60px -30px rgba(${currentTheme.rgb}, 0.15)`
      }}
      className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-zinc-950/20 border transition-colors duration-700 hover:border-zinc-800/40 cursor-grab active:cursor-grabbing"
    >
      <CardGlow color={currentTheme.glow} />
      <div ref={tiltRef} className="relative z-10">
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
            <a ref={liveRef} href={project.liveUrl} target="_blank" rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-950/80 text-zinc-400 hover:text-zinc-100 border border-zinc-900 hover:border-zinc-800 transition-all"
              aria-label={`Ver ${project.title} en vivo`}>
              <ExternalLink size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a ref={ghRef} href={project.githubUrl} target="_blank" rel="noreferrer"
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
                    {metric.prefix}
                    {/^\d+$/.test(String(metric.value)) ? (
                      <CountUp value={Number(metric.value)} />
                    ) : (
                      metric.value
                    )}
                    {metric.suffix || ''}
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
        </div>
      )}
      </div>
    </div>
  );
};

const ProjectGlyph: React.FC<{ accent: string }> = ({ accent }) => (
  <div className="relative w-7 h-7 shrink-0" aria-hidden>
    <motion.span
      className="absolute inset-0 rounded-full border"
      style={{ borderColor: `${accent}40` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
    />
    <motion.span
      className="absolute inset-1.5 rounded-full"
      style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}55` }}
      animate={{ scale: [1, 1.18, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <span
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
    />
  </div>
);

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-950/20 border border-zinc-900/40 rounded-3xl backdrop-blur-md relative overflow-hidden transition-all duration-500 hover:border-zinc-800/40">
      {/* Ambient glow */}
      <div
        className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: currentTheme.accent }}
      />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-900/80 pb-3 mb-2 z-10 shrink-0">
        <span className="flex items-center gap-2">
          <ProjectGlyph accent={currentTheme.accent} />
          <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
            Simulador interactivo
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-[8px] font-mono" style={{ color: currentTheme.accent }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: currentTheme.accent }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: currentTheme.accent }} />
          </span>
          En vivo
        </span>
      </div>

      {/* Main Content: interactive test buttons */}
      <div className="flex-grow flex items-center justify-center relative overflow-hidden">
        {project.simulatorId ? (
          <SimulatorSelector simulatorId={project.simulatorId} />
        ) : (
          <span className="text-xs font-mono text-zinc-600">Vista no disponible</span>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const quienSoyRef = useInViewOnce<HTMLDivElement>((el) => {
    animate(el.querySelectorAll('[data-line]'), {
      opacity: [0, 1],
      translateY: [22, 0],
      delay: stagger(130),
      duration: 700,
      ease: 'outExpo',
    });
    const bar = el.querySelector<HTMLElement>('.accent-bar');
    if (bar) animate(bar, { scaleX: [0, 1], duration: 900, ease: 'outExpo' });
  });

  return (
    <section id="portfolio" className="relative z-10">
      {/* Quién soy */}
      <div className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="text-center px-4 max-w-4xl mx-auto">
            <div ref={quienSoyRef}>
              <span data-line className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-6" style={{ opacity: 0 }}>
                Quién soy
              </span>
               <h2 data-line className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-6" style={{ opacity: 0 }}>
                 Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">Administrador y builder</span> a la vez.
               </h2>
               <div className="accent-bar h-px w-24 mx-auto bg-gradient-to-r from-transparent via-emerald-400 to-transparent mb-6 origin-center" style={{ transform: 'scaleX(0)' }} />
               <p data-line className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-4" style={{ opacity: 0 }}>
                 Desde 2022 construyo sistemas para PYMEs en retail, logística, marketing y alimentos — reemplazando procesos manuales por automatización. Hoy diseño la infraestructura de datos del área de sistemas en la Universidad Norbert Wiener.
               </p>
               <p data-line className="max-w-2xl mx-auto text-emerald-400 text-base md:text-lg leading-relaxed font-semibold" style={{ opacity: 0 }}>
                 Entiendo el negocio y construyo la tecnología que lo resuelve.
               </p>
            </div>
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
