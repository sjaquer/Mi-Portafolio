// src/components/Portfolio.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projects } from '../data/portfolio';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark-surface relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white font-display">
                Proyectos Destacados
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Soluciones tecnológicas aplicadas a problemas de negocio reales. Enfoque en resultados y escalabilidad.
            </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
                ${
                  filter === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {cat === 'all' ? 'Todos' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
                <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-50 dark:bg-dark border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col h-full"
                >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                             {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                                    title="Ver Demo en Vivo"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
                                    title="Ver Código"
                                >
                                    <Github size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                             <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                                {project.category}
                            </span>
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary-500">
                                     <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 h-12 overflow-hidden">
                        {project.subtitle}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mt-auto">
                         <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                key={tech}
                                className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded text-xs text-slate-500 dark:text-slate-400 font-medium"
                                >
                                {tech}
                                </span>
                            ))}
                            {project.techStack.length > 4 && (
                                <span className="px-2 py-1 bg-slate-50 dark:bg-slate-800 text-xs text-slate-400 rounded">
                                    +{project.techStack.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        
        <div className="mt-16 text-center">
             <a 
                href="https://github.com/sjaquer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
             >
                <FolderGit2 size={20} />
                Ver más proyectos en GitHub
             </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;