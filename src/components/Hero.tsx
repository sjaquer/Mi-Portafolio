// src/components/Hero.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, Activity, TrendingUp, Server } from 'lucide-react';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub', color: 'hover:text-slate-300' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/sjaquer', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram', color: 'hover:text-[#E4405F]' }
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
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
                className={`p-3 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110 shadow-sm`}
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
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20"
            >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Disponible para Consultorías
            </motion.div>

            <div className="space-y-4">
              {/* Nombre visible para SEO */}
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg font-medium text-primary"
              >
                Sebastián Jaque
              </motion.p>
              
              <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
              >
                BizOps & Tech<br />
                <span className="text-slate-400">Strategist en</span>{' '}
                <span className="text-white relative inline-block">
                    <span className="text-primary decoration-primary/30 underline decoration-4 underline-offset-4">Lima</span>
                </span>
              </motion.h1>

              <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                   className="text-xl lg:text-2xl text-slate-400 font-light max-w-lg leading-relaxed"
              >
                 <span className="font-semibold text-white">Consultor en Transformación Digital en Perú.</span> Desarrollo software, dashboards Power BI y automatización de procesos para empresas en Lima y Latinoamérica.
              </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <a href="#contact" className="group px-8 py-4 rounded-xl bg-[#f5fcff] text-[#1e1e1e] font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                    Solicitar Consultoría
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a href="#portfolio" className="px-8 py-4 rounded-xl bg-transparent border border-slate-700 text-white font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center">
                    Ver Proyectos de Transformación
                </a>
            </motion.div>
            
            {/* Trust Badges - Enlaces internos a secciones relevantes */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="pt-8 border-t border-slate-800 flex flex-wrap gap-6"
            >
               <a href="#skills" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
                    <Server size={18} /> Desarrollo de Software
               </a>
               <a href="#experience" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
                    <Activity size={18} /> Automatización de Operaciones
               </a>
               <a href="#portfolio" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-primary transition-colors">
                    <TrendingUp size={18} /> Dashboards y Power BI
               </a>
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
             <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
             <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10" />
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
                        <span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-xs font-bold">OPTIMO</span>
                    </div>
                    
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-slate-400">Usuarios Activos</span>
                            <span className="text-white font-bold">{metrics.requests.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                                animate={{ width: "75%" }}
                                className="h-full bg-primary rounded-full"
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
                            <div className="text-primary font-bold">{metrics.latency.toFixed(0)}ms</div>
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
                                className="w-full bg-gradient-to-t from-primary to-primary/20 rounded-t-sm" 
                            />
                            ))}
                    </div>
                </div>
            </div>

            {/* Glowing Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>
    );
};

export default Hero;