import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Code, Palette, Film, Box } from 'lucide-react';
import { projects } from '../data/portfolio';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos', icon: Code },
    { id: 'web', label: 'Desarrollo Web', icon: Code },
    { id: '3d', label: 'Unreal Engine', icon: Box },
    { id: 'creative', label: 'Diseño y Multimedia', icon: Palette }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'creative'
      ? projects.filter(project =>
          ['video', 'diseño', 'fotografia'].includes(project.category)
        )
      : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Code;
      case '3d': return Box;
      case 'creative': return Palette;
      default: return Code;
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              Portafolio Destacado
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Una muestra de proyectos innovadores que abarcan desarrollo web, visualización 3D y medios creativos
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <category.icon size={16} />
              <span className="text-sm">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br from-[#262626]/50 to-[#1a1a1a]/50 border border-[#F2A900]/20 rounded-2xl overflow-hidden hover:border-[#0072C6]/30 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                    <CategoryIcon size={14} className="text-[#F2A900]" />
                    <span className="text-xs text-white font-medium capitalize">{project.category}</span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white text-xs font-medium rounded-full">
                      Destacado
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-[#F2A900] text-gray-900 rounded-lg text-sm font-medium hover:bg-[#d99900] transition-colors"
                      >
                        <ExternalLink size={14} />
                        Ver Proyecto
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                      >
                        <Github size={14} />
                        Código
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F2A900] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-[#0072C6]/10 text-[#0072C6] border border-[#0072C6]/20 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2A900]/5 to-[#0072C6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            ¿Interesado en ver más de mi trabajo?
          </p>
          <a
            href="https://github.com/sjaquer"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F2A900] to-[#0072C6] text-white rounded-lg font-medium hover:from-[#d99900] hover:to-[#0060a3] transition-all duration-300 transform hover:scale-105"
          >
            <Github size={18} />
            Ver todos los proyectos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;