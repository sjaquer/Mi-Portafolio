import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Palette, Box } from 'lucide-react';
import { projects } from '../data/portfolio';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [filter, setFilter] = useState<'all' | string>('all');
  const [active, setActive] = useState<string | null>(null);

  // categorías dinámicas según proyectos (usa getIcon para iconos)
  const categories = useMemo(() => {
    const setCats = new Set<string>();
    projects.forEach(p => setCats.add(p.category || 'other'));
    const list = Array.from(setCats).map(c => ({ id: c, label: c.charAt(0).toUpperCase() + c.slice(1) }));
    return [{ id: 'all', label: 'Todos' }, ...list];
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    const creativeCats = ['video', 'diseño', 'fotografia', 'creative'];
    if (filter === 'creative') {
      return projects.filter(p => creativeCats.includes(p.category ?? ''));
    }
    return projects.filter(p => (p.category ?? '') === filter);
  }, [filter]);

  // mostrar destacados primero
  const display = useMemo(() => [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)), [filtered]);

  const getIcon = (category?: string) => {
    if (!category) return Code;
    if (category.includes('web')) return Code;
    if (category.includes('3d')) return Box;
    return Palette;
  };

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-6 lg:px-16 bg-gradient-to-br from-primary/6 to-dark/86 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-36 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/700">Portafolio</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Casos destacados con enfoque en impacto: explora retos, procesos y soluciones implementadas con métricas cuando están disponibles.
          </p>
        </motion.header>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((c: any) => {
            const Icon = getIcon(c.id);
            const activeCls = filter === c.id ? 'bg-gradient-to-r from-primary to-primary/700 text-white shadow' : 'bg-[rgba(255,255,255,0.02)] text-gray-300 border border-dark-200/30 hover:bg-[rgba(255,255,255,0.03)]';
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCls}`}
                aria-pressed={filter === c.id}
                aria-label={c.label}
              >
                <Icon size={14} />
                {c.label}
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {display.map((project, i) => {
            const CategoryIcon = getIcon(project.category || '');
            // evitar error por subtitle en tiempo de compilación -> leer con any
            const subtitle = (project as any).subtitle;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className={`group relative rounded-2xl overflow-hidden ${project.featured ? 'lg:col-span-2' : ''} bg-[rgba(6,12,25,0.78)] border border-dark-200/50 shadow-lg flex flex-col`}
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-dark-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-dark-100/60 border border-dark-200/30 text-xs">
                    <CategoryIcon size={14} className="text-primary" />
                    <span className="text-white/90 capitalize">{project.category}</span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                      Destacado
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-white text-sm font-medium hover:brightness-95 transition-colors" aria-label={`Ver ${project.title}`}>
                        <ExternalLink size={14} /> Ver
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[rgba(255,255,255,0.03)] text-gray-200 text-sm font-medium hover:bg-[rgba(255,255,255,0.05)] transition-colors" aria-label={`Código ${project.title}`}>
                        <Github size={14} /> Código
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug truncate">{project.title}</h3>
                      {subtitle ? <p className="text-xs text-gray-400 mt-1 truncate">{subtitle}</p> : null}
                    </div>
                    {/* año eliminado intencionalmente para mantener layout limpio */}
                  </div>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.slice(0, 6).map((t, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-md bg-[rgba(4,118,217,0.06)] text-primary border border-primary/10">
                          {t}
                        </span>
                      ))}
                      {project.techStack && project.techStack.length > 6 && <span className="px-2 py-1 text-xs rounded-md bg-dark-100/40 text-gray-400">+{project.techStack.length - 6}</span>}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActive(active === project.id ? null : project.id)}
                      className="text-sm text-primary/90 hover:text-primary font-medium"
                      aria-expanded={active === project.id}
                      aria-controls={`project-detail-${project.id}`}
                    >
                      {active === project.id ? 'Cerrar' : 'Detalle'}
                    </button>
                  </div>

                  {active === project.id && (
                    <motion.div id={`project-detail-${project.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="mt-4 text-sm text-gray-300">
                      <ul className="list-disc pl-5 space-y-1">
                        {(project.details || []).slice(0, 8).map((d, k) => <li key={k}>{d}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/6 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </motion.article>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-12">
          <p className="text-sm text-gray-400 mb-4">¿Quieres ver más? Puedo compartir case studies o un paquete de proyectos relevantes.</p>
          <a href="https://github.com/sjaquer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-primary to-primary/700 text-white text-sm font-semibold hover:brightness-95 transition-all">
            <Github size={16} /> Ver más en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;