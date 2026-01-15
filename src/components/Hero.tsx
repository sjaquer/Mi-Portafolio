// src/components/Hero.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Activity, TrendingUp, Server } from 'lucide-react';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub', color: 'hover:text-slate-900 dark:hover:text-white' },
  { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram', color: 'hover:text-[#E4405F]' }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-slate-50 dark:bg-dark"
    >
      <div className="relative w-full max-w-[1600px] mx-auto z-10">
        
        {/* Floating Socials - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex absolute top-0 right-0 gap-3"
        >
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 ${s.color} transition-all duration-300 hover:scale-110 shadow-sm`}
                aria-label={s.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Copy */}
          <div className="space-y-10 order-2 lg:order-1 relative z-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-100 dark:border-blue-800/50"
            >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Disponible para Consultorías
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
              >
                BizOps &<br />
                <span className="text-slate-400 dark:text-slate-500">Tech</span>{' '}
                <span className="text-primary-900 dark:text-white relative inline-block">
                    Strategist
                    <motion.svg 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-2 left-0 w-full mb-1" 
                        viewBox="0 0 100 10" 
                        preserveAspectRatio="none"
                    >
                        <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" className="text-secondary-400 opacity-50" />
                    </motion.svg>
                </span>
              </motion.h1>

              <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                   className="text-xl lg:text-2xl text-slate-500 font-light max-w-lg leading-relaxed"
              >
                 <span className="font-semibold text-slate-800 dark:text-slate-200">Consultor BizOps & Tecnología.</span> Transformo operaciones complejas en software de alto rendimiento para empresas peruanas y globales.
              </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <a href="#contact" className="group px-8 py-4 rounded-xl bg-primary-900 dark:bg-white text-white dark:text-primary-900 font-semibold text-lg hover:shadow-xl hover:shadow-primary-900/20 transition-all flex items-center justify-center gap-2">
                    Hablemos de negocios
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a href="#portfolio" className="px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center">
                    Ver Portafolio
                </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
               <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <Server size={18} /> Arquitectura Cloud
               </div>
               <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <Activity size={18} /> Automatización de Procesos
               </div>
               <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    <TrendingUp size={18} /> Business Intelligence
               </div>
            </motion.div>
          </div>

          {/* Right Column: Visual abstraction of "Live System" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[500px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end"
          >
             <LiveSystemCard />
             
             {/* Background shapes */}
             <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-[80px] -z-10" />
             <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LiveSystemCard = () => {
    const [metrics, setMetrics] = useState({
        requests: 1240,
        latency: 45,
        uptime: 99.98
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                requests: prev.requests + Math.floor(Math.random() * 10),
                latency: Math.max(20, Math.min(80, prev.latency + (Math.random() - 0.5) * 10)),
                uptime: 99.99
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 cursor-default group backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-slate-500 text-[10px] font-mono uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Lima, PE (us-east-1)
                </div>
            </div>
            
            {/* Metrics */}
            <div className="space-y-6 font-mono text-sm relative z-10">
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-slate-400">
                        <span>ESTADO DEL SISTEMA</span>
                        <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded textxs">OPTIMO</span>
                    </div>
                    
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Usuarios Activos</span>
                            <span className="text-white font-bold">{metrics.requests.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                                animate={{ width: "75%" }}
                                className="h-full bg-primary-500 rounded-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                         <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <div className="text-slate-500 text-xs mb-1">VENTAS (Hoy)</div>
                            <div className="text-secondary-400 font-bold">S/. {(metrics.requests * 2.5).toFixed(2)}</div>
                         </div>
                         <div className="p-3 bg-slate-800/30 rounded-lg border border-slate-700/30">
                            <div className="text-slate-500 text-xs mb-1">Latencia</div>
                            <div className="text-green-400 font-bold">{metrics.latency.toFixed(0)}ms</div>
                         </div>
                    </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-800">
                    <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Tráfico en Tiempo Real</div>
                    <div className="h-24 flex items-end justify-between gap-1">
                            {[40, 60, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: "20%" }}
                                animate={{ height: [`${h}%`, `${h - 20}%`, `${h}%`] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-full bg-gradient-to-t from-primary-600/80 to-secondary-400/80 rounded-t-sm" 
                            />
                            ))}
                    </div>
                </div>
            </div>

            {/* Glowing Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>
    );
};

export default Hero;