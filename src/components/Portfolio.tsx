import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import { IconBrandGithub, IconArrowUpRight, IconReload, IconAlertTriangle } from '@tabler/icons-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';
import ErrorBoundary from './ErrorBoundary';
import { useInViewOnce } from './Reveal';
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
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-6 h-6 border border-zinc-700 border-t-emerald-400 rounded-full animate-spin" />
  </div>
);

const SimulatorFallbackError = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500">
    <IconAlertTriangle size={18} className="text-red-400/50 mb-2" />
    <button
      onClick={() => window.location.reload()}
      className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
      aria-label="Recargar"
    >
      <IconReload size={13} />
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
  '1': { accent: '#FCC900', rgb: '252, 201, 0', glow: 'rgba(252, 201, 0, 0.25)' },
  '2': { accent: '#3BCE89', rgb: '59, 206, 137', glow: 'rgba(59, 206, 137, 0.25)' },
  '3': { accent: '#FF6600', rgb: '255, 102, 0', glow: 'rgba(255, 102, 0, 0.25)' },
  '4': { accent: '#3B82F6', rgb: '59, 130, 246', glow: 'rgba(59, 130, 246, 0.25)' },
  '5': { accent: '#22C55E', rgb: '34, 197, 94', glow: 'rgba(34, 197, 94, 0.25)' },
  '6': { accent: '#A855F7', rgb: '168, 85, 247', glow: 'rgba(168, 85, 247, 0.25)' },
  '7': { accent: '#06B6D4', rgb: '6, 182, 212', glow: 'rgba(6, 182, 212, 0.25)' }
};

const ProjectInfo: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];
  const liveRef = useMagnetic<HTMLAnchorElement>();
  const ghRef = useMagnetic<HTMLAnchorElement>();

  return (
    <div className="flex flex-col justify-center space-y-5">
      {/* Project Index */}
      <span
        style={{ color: currentTheme.accent }}
        className="font-mono text-xs font-bold tracking-widest uppercase opacity-80"
      >
        0{index + 1} // {project.category.toUpperCase()}
      </span>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-50 tracking-tight leading-tight">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-lg">
        {project.description}
      </p>

      {/* Minimal Tech Line */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-zinc-400">
        {project.techStack?.map((tech, idx) => (
          <span key={idx} className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full opacity-60" style={{ backgroundColor: currentTheme.accent }} />
            <span>{tech}</span>
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 pt-2">
        {project.liveUrl && (
          <a
            ref={liveRef}
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900/90 text-zinc-100 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition-all shadow-sm group"
          >
            <span>Ver demo</span>
            <IconArrowUpRight size={13} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {project.githubUrl && (
          <a
            ref={ghRef}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900/90 text-zinc-300 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-700 text-xs font-mono transition-all shadow-sm"
          >
            <IconBrandGithub size={14} />
            <span>Código</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectInteractiveStage: React.FC<{ project: Project }> = ({ project }) => {
  const currentTheme = projectThemes[project.id] || projectThemes['1'];
  const dragRef = useDraggable<HTMLDivElement>();
  const tiltRef = useTilt<HTMLDivElement>({ max: 8, scale: 1.01 });

  return (
    <div
      ref={dragRef}
      style={{
        borderColor: `rgba(${currentTheme.rgb}, 0.22)`,
        boxShadow: `0 30px 70px -20px rgba(0, 0, 0, 0.7), 0 0 60px -25px rgba(${currentTheme.rgb}, 0.3)`
      }}
      className="liquid-glass relative w-full h-[400px] sm:h-[440px] rounded-3xl p-3.5 sm:p-5 transition-all duration-700 hover:border-zinc-700/80 cursor-grab active:cursor-grabbing overflow-hidden flex flex-col justify-between"
    >
      <CardGlow color={currentTheme.glow} />
      
      {/* Ambient 3D gradient flare behind the glass */}
      <div
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none transition-transform duration-700"
        style={{ background: currentTheme.accent }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: currentTheme.accent }}
      />

      <div ref={tiltRef} className="relative z-10 w-full h-full flex flex-col justify-between">
        {project.simulatorId ? (
          <SimulatorSelector simulatorId={project.simulatorId} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs font-mono text-zinc-600">
            Vista en desarrollo
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const quienSoyRef = useInViewOnce<HTMLDivElement>((el) => {
    animate(el.querySelectorAll('[data-line]'), {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: stagger(120),
      duration: 600,
      ease: 'outExpo',
    });
    const bar = el.querySelector<HTMLElement>('.accent-bar');
    if (bar) animate(bar, { scaleX: [0, 1], duration: 800, ease: 'outExpo' });
  });

  return (
    <section id="portfolio" className="relative z-10">
      {/* Quién soy */}
      <div className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.015] via-transparent to-transparent pointer-events-none" />
        <div className="text-center px-4 max-w-3xl mx-auto">
          <div ref={quienSoyRef}>
            <span data-line className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-5" style={{ opacity: 0 }}>
              Quién soy
            </span>
            <h2 data-line className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-50 tracking-tight leading-tight mb-6" style={{ opacity: 0 }}>
              Administrador y builder.
            </h2>
            <div className="accent-bar h-px w-20 mx-auto bg-gradient-to-r from-transparent via-emerald-400 to-transparent mb-6 origin-center" style={{ transform: 'scaleX(0)' }} />
            <p data-line className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-4" style={{ opacity: 0 }}>
              Construyo sistemas y arquitecturas de datos para optimizar operaciones reales: pipelines ETL, sincronización omnicanal y agentes de IA.
            </p>
            <p data-line className="text-emerald-400 text-base md:text-lg leading-relaxed font-medium" style={{ opacity: 0 }}>
              Entiendo el negocio y programo la solución.
            </p>
          </div>
        </div>
      </div>

      {/* Clean Project Sections with 3D Depth & Smooth Gradients */}
      {projects.map((project, index) => {
        const theme = projectThemes[project.id] || projectThemes['1'];
        return (
          <section
            key={project.id}
            data-project-section={project.id}
            className="relative min-h-screen snap-center flex items-center justify-center py-16 sm:py-24 overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse at 15% 40%, ${theme.accent}0d 0%, transparent 65%),
                radial-gradient(ellipse at 85% 60%, ${theme.accent}06 0%, transparent 60%),
                #09090b
              `
            }}
          >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5">
                    <ProjectInfo project={project} index={index} />
                  </div>
                  <div className="lg:col-span-7">
                    <ProjectInteractiveStage project={project} />
                  </div>
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
