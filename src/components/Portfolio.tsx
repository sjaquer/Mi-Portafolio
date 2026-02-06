// src/components/Portfolio.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, FolderGit2, Monitor } from 'lucide-react';
import { projects } from '../data/portfolio';

// 3D Card Component
const ProjectCard = ({ project }: { project: any }) => {
  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-[#171717] border border-slate-800 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(217,229,18,0.1)] flex flex-col ring-1 ring-white/5">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image / Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black group">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={project.image?.replace('w=1600', 'w=800') || ''}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white text-black rounded-full hover:bg-primary hover:scale-110 transition-all shadow-lg shadow-primary/20"
                title="Ver Demo"
              >
                <ArrowUpRight size={24} />
              </a>
            )}
            {project.githubUrl && (
               <a
                href="#"
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all border border-slate-700"
                title="Ver Código"
              >
                <Github size={24} />
              </a>
            )}
          </div>

          {/* Type Badge */}
          <div className="absolute top-4 left-4 z-20">
             <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5">
                {project.category === 'desarrollo' ? <Monitor size={12} /> : <FolderGit2 size={12} />}
                {project.category.toUpperCase()}
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6 sm:p-8 relative">
           {/* Glow Effect inside card */}
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -z-10" />

           <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-primary-400 font-medium text-sm">
                {project.subtitle}
              </p>
           </div>

           <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
              {project.description}
           </p>

           <div className="mt-auto flex flex-wrap gap-2">
              {project.techStack.map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-800/50 text-slate-300 text-xs border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-display tracking-tight">
                Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-200 to-white">Destacados</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Ingeniería aplicada a la resolución de problemas reales.
            </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 capitalize relative
                ${
                  filter === cat
                    ? 'bg-primary text-[#0a0a0a] shadow-[0_0_25px_rgba(217,229,18,0.4)] scale-105 z-10'
                    : 'bg-[#171717] text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-600'
                }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Dynamic 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </AnimatePresence>
        </div>
        
        {/* View More Link */}
        <div className="mt-20 text-center">
            <a 
                href="https://github.com/sjaquer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-0.5"
            >
                <Github size={18} />
                <span>Explorar más repositorios en GitHub</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;