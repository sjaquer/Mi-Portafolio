// src/components/Hero.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Activity, TrendingUp, Server, AlertTriangle, CheckCircle, BarChart3, Zap } from 'lucide-react';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub', color: 'hover:text-slate-300' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/sjaquer', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram', color: 'hover:text-[#E4405F]' }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
    >
      <div className="relative w-full max-w-[1400px] mx-auto z-10 flex-grow flex items-center">
        
        {/* Floating Socials - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden xl:flex flex-col absolute top-1/2 -translate-y-1/2 -right-4 lg:right-0 gap-4 z-30"
        >
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-slate-900/40 backdrop-blur-md border border-slate-700/50 text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-lg group relative`}
                aria-label={s.label}
              >
                <Icon size={20} />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 rounded bg-slate-800 text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
                  {s.label}
                </span>
              </a>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Left Column: Copy */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 relative z-20 text-center lg:text-left">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20 mx-auto lg:mx-0"
            >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponible para Consultorías
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-base sm:text-lg font-medium text-primary"
              >
                Sebastián Jaque
              </motion.p>
              
              <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
              >
                BizOps & Tech<br />
                <span className="text-slate-400">Strategist en</span>{' '}
                <span className="text-white relative inline-block">
                    <span className="text-primary relative z-10">Lima</span>
                    {/* Smile underline SVG */}
                    <svg 
                        className="absolute left-0 -bottom-2 w-full h-4 text-primary" 
                        viewBox="0 0 120 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                            d="M 5 4 Q 60 14, 115 4"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            fill="none"
                        />
                    </svg>
                </span>
              </motion.h1>

              <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                   className="text-base sm:text-lg lg:text-xl text-slate-400 font-light max-w-xl leading-relaxed mx-auto lg:mx-0"
              >
                 <span className="font-semibold text-white">Consultor en Transformación Digital en Perú.</span> Desarrollo software, dashboards Power BI y automatización de procesos para empresas en Lima y <span className="text-slate-300">Latinoamérica</span>.
              </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
                <a href="#contact" className="group px-8 py-4 rounded-xl bg-primary text-black font-bold text-base hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(217,229,18,0.4)] transition-all flex items-center justify-center gap-2 relative overflow-hidden transform hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">Solicitar Consultoría</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10 text-black" size={20} />
                </a>
                <a href="#portfolio" className="px-8 py-4 rounded-xl bg-slate-900/50 border border-slate-600 text-white font-semibold text-base hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center backdrop-blur-sm">
                    Ver Proyectos
                </a>
            </motion.div>
            
            {/* Trust Badges - Enlaces internos a secciones relevantes */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-8 border-t border-slate-800/60 flex flex-col items-center lg:items-start gap-6 mb-6 sm:mb-8"
                >
               <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <a href="#skills" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                        <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                            <Server size={16} className="text-slate-400 group-hover:text-primary" />
                        </div>
                        <span>Software</span>
                  </a>
                  <a href="#experience" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                        <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                            <Activity size={16} className="text-slate-400 group-hover:text-primary" />
                        </div>
                        <span>Automatización</span>
                  </a>
                  <a href="#portfolio" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors group">
                        <div className="p-1.5 rounded-md bg-slate-800/50 group-hover:bg-primary/20 transition-colors">
                            <TrendingUp size={16} className="text-slate-400 group-hover:text-primary" />
                        </div>
                        <span>Power BI</span>
                  </a>
               </div>

               {/* Mobile Socials - Integrated into flow */}
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
            </motion.div>
          </div>

          {/* Right Column: Before/After Transformation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[450px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
             <TransformationAnimation />
             
             {/* Background shapes - Optimizados */}
             <div className="absolute top-1/2 -translate-y-1/2 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
             <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
                        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 pointer-events-none mix-blend-screen"
            >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">Scroll</span>
        <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-slate-500 via-slate-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

const TransformationAnimation = () => {
    const [showAfter, setShowAfter] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-toggle logic
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setShowAfter(prev => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleManualToggle = (value: boolean) => {
        setIsAutoPlaying(false);
        setShowAfter(value);
    };

    return (
        <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto">
             {/* Toggle Controls - Alineado con la tarjeta */}
            <motion.div 
                className="relative -mb-2 z-30 flex justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex p-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full shadow-lg gap-1">
                    <button
                        onClick={() => handleManualToggle(false)}
                        className="relative px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-colors z-10 focus:outline-none"
                    >
                        {/* Active Indicator for Before */}
                        {!showAfter && (
                            <motion.div
                                layoutId="mode-indicator"
                                className="absolute inset-0 bg-red-500/10 border border-red-500/20 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 transition-colors duration-200 ${!showAfter ? 'text-red-400' : 'text-slate-500 hover:text-red-400/70'}`}>
                            <AlertTriangle size={14} className={!showAfter ? "" : "opacity-50"} />
                            ANTES
                        </span>
                    </button>

                    <button
                        onClick={() => handleManualToggle(true)}
                        className="relative px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-colors z-10 focus:outline-none"
                    >
                        {/* Active Indicator for After */}
                        {showAfter && (
                            <motion.div
                                layoutId="mode-indicator"
                                className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full shadow-[0_0_10px_rgba(217,229,18,0.2)]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 transition-colors duration-200 ${showAfter ? 'text-primary' : 'text-slate-500 hover:text-primary/70'}`}>
                            <CheckCircle size={14} className={showAfter ? "" : "opacity-50"} />
                            DESPUÉS
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* Contenedor principal */}
            <div 
                className="relative w-full aspect-[3/4] group cursor-pointer mt-4"
                onClick={() => handleManualToggle(!showAfter)}
            >
                {/* Glow effect background */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl blur-2xl transition-all duration-700 ${showAfter ? 'bg-primary/20 opacity-60' : 'bg-red-600/10 opacity-30'}`} />

                <AnimatePresence mode="wait">
                    {!showAfter ? (
                        // ANTES: Caos
                        <motion.div
                            key="before"
                            initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-red-900/30 p-4 sm:p-6 backdrop-blur-sm"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Header caótico */}
                            <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-red-900/30 pb-3 sm:pb-4">
                                <div className="flex gap-1.5 sm:gap-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50 animate-pulse" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50 animate-pulse" style={{ animationDelay: '0.2s' }} />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50 animate-pulse" style={{ animationDelay: '0.4s' }} />
                                </div>
                                <span className="text-red-400 text-[10px] sm:text-xs font-mono tracking-wider">SIN CONTROL</span>
                            </div>

                            {/* Contenido caótico */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-slate-400 text-xs sm:text-sm">Negocio Sin Rumbo</span>
                                    <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold border border-red-500/20">CRÍTICO</span>
                                </div>

                                {/* Métricas desordenadas */}
                                <div className="space-y-2 sm:space-y-3">
                                    {[
                                        { label: 'Eficiencia', value: '23%', delay: 0 },
                                        { label: 'Ventas', value: '???', delay: 0.1 },
                                        { label: 'Inventario', value: 'ERROR', delay: 0.2 }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ 
                                                x: [0, -1, 1, -1, 0],
                                            }}
                                            transition={{ 
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: item.delay
                                            }}
                                            className="p-2 sm:p-3 bg-red-950/20 border border-red-900/30 rounded-lg"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-[10px] sm:text-xs">{item.label}</span>
                                                <span className="text-red-400 font-bold text-xs sm:text-sm">{item.value}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Iconos dispersos */}
                                <div className="relative h-24 sm:h-32 border border-red-900/20 rounded-lg bg-slate-950/50 overflow-hidden">
                                    <motion.div
                                        animate={{ 
                                            x: [10, 40, 25, 55, 10],
                                            y: [15, 45, 30, 60, 15],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                                    >
                                        <AlertTriangle size={12} className="sm:w-4 sm:h-4 text-red-400" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ 
                                            x: [60, 30, 45, 15, 60],
                                            y: [25, 55, 40, 70, 25],
                                            rotate: [0, -15, 10, 0]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "linear" }}
                                        className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                                    >
                                        <AlertTriangle size={12} className="sm:w-4 sm:h-4 text-red-400" />
                                    </motion.div>
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className="text-red-400/40 text-[10px] sm:text-xs font-mono animate-pulse">Datos perdidos...</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // DESPUÉS: Orden y control
                        <motion.div
                            key="after"
                            initial={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-primary/30 p-4 sm:p-6 backdrop-blur-sm ring-1 ring-primary/20"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Header organizado */}
                            <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-primary/20 pb-3 sm:pb-4">
                                <div className="flex gap-1.5 sm:gap-2">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50" />
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/20" />
                                </div>
                                <span className="text-primary text-[10px] sm:text-xs font-mono tracking-wider font-semibold">OPTIMIZADO</span>
                            </div>

                            {/* Contenido organizado */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-slate-300 text-xs sm:text-sm font-medium">Con Tecnología</span>
                                    <span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold border border-primary/20 shadow-[0_0_10px_rgba(217,229,18,0.2)]">ACTIVO</span>
                                </div>

                                {/* Métricas optimizadas */}
                                <div className="space-y-2 sm:space-y-3">
                                    {[
                                        { label: 'Eficiencia', value: '94%', color: 'primary', icon: Zap },
                                        { label: 'Ventas', value: '+185%', color: 'green', icon: TrendingUp },
                                        { label: 'Control', value: '100%', color: 'primary', icon: BarChart3 }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                            className="p-2 sm:p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg group/item hover:border-primary/30 hover:bg-slate-800 transition-colors"
                                        >
                                            <div className="flex justify-between items-center relative z-10">
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <div className="p-1 rounded bg-primary/10 text-primary">
                                                        <item.icon size={12} className="sm:w-[14px] sm:h-[14px]" />
                                                    </div>
                                                    <span className="text-slate-300 text-[10px] sm:text-xs">{item.label}</span>
                                                </div>
                                                <span className="text-white font-bold text-xs sm:text-sm tracking-tight">{item.value}</span>
                                            </div>
                                            <div className="mt-2 sm:mt-2.5 w-full bg-slate-900/50 h-1 sm:h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '100%' }}
                                                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-primary to-green-400 rounded-full shadow-[0_0_8px_rgba(217,229,18,0.4)]"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Dashboard organizado */}
                                <div className="relative h-24 sm:h-32 border border-primary/20 rounded-lg bg-slate-900/30 p-2 sm:p-3 overflow-hidden group-hover:border-primary/40 transition-colors">
                                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 h-full">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + i * 0.1 }}
                                                className="bg-primary/5 rounded border border-primary/10 flex items-center justify-center hover:bg-primary/10 transition-colors"
                                            >
                                                <CheckCircle size={16} className="sm:w-5 sm:h-5 text-primary/70" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-slate-950/80 px-2 py-1 rounded-full border border-primary/20 backdrop-blur-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-white/80 text-[10px] font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Hero;