
// src/components/Hero.tsx - Versión ultra-optimizada
import { useState, useEffect, memo } from 'react';
import { Github, Linkedin, Instagram, ArrowRight, TrendingUp, BarChart3, Zap, ArrowUpRight, Activity } from 'lucide-react';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/sjaquer', label: 'LinkedIn' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram' }
];

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
    >
      {/* Background Gradients for Brand Atmosphere */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-[1400px] mx-auto z-10 flex-grow flex items-center">
        
        {/* Floating Socials - Desktop Only */}
        <div className="hidden xl:flex flex-col absolute top-1/2 -translate-y-1/2 -right-4 lg:right-0 gap-4 z-30 animate-fade-in">
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/40 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-lg group relative"
                aria-label={s.label}
              >
                <Icon size={20} />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 rounded bg-slate-800 text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
                  {s.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Copy */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 relative z-20 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Abierto a oportunidades corporativas
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg font-bold tracking-wide text-primary/80 uppercase">
                Sebastián Jaque
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                Analista de{' '}
                <span className="text-slate-400">Operaciones</span>{' '}
                y{' '}
                <span className="text-white relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-400 to-white relative z-10">Datos</span>
                  <svg 
                    className="absolute left-0 -bottom-2 w-full h-4 text-primary drop-shadow-[0_0_8px_rgba(217,229,18,0.5)]" 
                    viewBox="0 0 120 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 5 4 Q 60 14, 115 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-draw-line"
                    />
                  </svg>
                </span>
                <br /><span className="text-slate-400">con enfoque en</span>{' '}
                <span className="text-white">Automatización</span>
              </h1>

              <div className="text-base sm:text-lg lg:text-xl text-slate-400 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
                Construyo <span className="font-semibold text-white">herramientas y sistemas</span> orientados a optimizar <span className="text-slate-300">operaciones</span>, centralizar información y generar <span className="text-slate-300">indicadores</span> para la toma de decisiones.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="group px-8 py-4 rounded-xl bg-primary text-black font-bold text-base hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(217,229,18,0.4)] transition-all flex items-center justify-center gap-2 relative overflow-hidden transform hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 text-black">Ver Proyectos</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10 text-black" size={20} />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl bg-slate-900/50 border border-slate-600 text-white font-semibold text-base hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center backdrop-blur-sm">
                Contactar
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-800/60 flex flex-col items-center lg:items-start gap-6 mb-6 sm:mb-8">
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a href="#portfolio" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                    <BarChart3 size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span>Operaciones & BI</span>
                </a>
                <a href="#automation" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                    <Activity size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span>Automatización</span>
                </a>
                <a href="#skills" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                  <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                    <Zap size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span>Desarrollo</span>
                </a>
              </div>

              {/* Mobile Socials */}
              <div className="flex xl:hidden gap-4 mt-4">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300"
                      aria-label={s.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: KPI Card */}
          <div className="order-1 lg:order-2 relative h-[450px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up">
            <KpiCard />
            
            {/* Background shapes */}
            <div className="absolute top-1/2 -translate-y-1/2 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 pointer-events-none mix-blend-screen animate-fade-in-delayed">
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 via-slate-500/50 to-transparent animate-bounce-subtle" />
      </div>
    </section>
  );
});

// KPI Card: muestra badges con contadores animados y CTA
const KpiCard = memo(() => {
  // Valores de ejemplo — cámbialos por métricas reales cuando las tengas
  const ahorroTarget = 90; // % reducción de trabajo manual
  const activacionTarget = 32; // % mejora en margen operativo
  const proyectosTarget = 6; // sistemas en producción

  const useCountUp = (target: number, duration = 1400) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let raf = 0;
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        setValue(Math.round(progress * target));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [target, duration]);
    return value;
  };

  const ahorro = useCountUp(ahorroTarget);
  const activacion = useCountUp(activacionTarget);
  const proyectos = useCountUp(proyectosTarget);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] mx-auto z-10 group">
        {/* Glow behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
        
        <div className="relative w-full rounded-2xl border border-slate-700/50 bg-[#171717] p-6 shadow-2xl backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                   <h3 className="text-lg font-bold text-white">Impacto Operativo</h3>
                   <p className="text-xs text-slate-400">Resultados acumulados 2024-2026</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/50 text-primary">
                    <TrendingUp size={20} />
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                        <Zap size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Reducción manual</span>
                    </div>
                    <div className="text-3xl font-display font-bold text-white tracking-tight">
                        {ahorro}%
                    </div>
                    <div className="mt-1 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${ahorro}%` }} />
                    </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-secondary/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-secondary">
                        <Activity size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Optimización</span>
                    </div>
                    <div className="text-3xl font-display font-bold text-white tracking-tight">
                        +{activacion}%
                    </div>
                    <div className="mt-1 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary" style={{ width: `${activacion}%` }} />
                    </div>
                </div>

                <div className="col-span-2 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div>
                        <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Sistemas en Producción</div>
                        <div className="text-2xl font-display font-bold text-white">{proyectos}+</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300">
                        <BarChart3 size={20} />
                    </div>
                </div>
            </div>

            {/* CTA Footer */}
            <div className="pt-2">
                <a 
                    href="#portfolio" 
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 hover:from-primary hover:to-primary-600 hover:text-black text-white font-medium transition-all duration-300 shadow-lg group/btn border border-slate-700 hover:border-primary"
                >
                    <span>Ver sistemas en producción</span>
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </div>
    </div>
  );
});

Hero.displayName = 'Hero';
KpiCard.displayName = 'KpiCard';

export default Hero;
