import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Box } from 'lucide-react';
import { projects } from '../data/portfolio';
import { siteContent } from '../data/siteContent';
import type { Project } from '../types';
import { BentoGrid, BentoCard } from './BentoGrid';
import { throttle } from '../utils/throttle';

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | string>('all');

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

  // scroll-linked gradient progression (0..1)
  const ref = useRef<HTMLElement | null>(null);
  const [t, setT] = useState(0);
  const reduce = useReducedMotion();

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;
    const prog = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
    setT(Number(prog.toFixed(3)));
  }, []);

  useEffect(() => {
    const handler = throttle(onScroll);
    handler();
    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [onScroll]);

  // mostrar destacados primero
  const display = useMemo(() => [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)), [filtered]);

  const getIcon = (category?: string) => {
    if (!category) return Code;
    if (category.includes('web')) return Code;
    if (category.includes('3d')) return Box;
    return Palette;
  };

  return (
    <section id="portfolio" ref={ref} className="relative py-24 px-6 lg:px-16 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(var(--primary-rgb), ${0.95 - 0.35 * (1 - t)}), rgba(var(--secondary-rgb), ${0.95 - 0.35 * t}))`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {siteContent.portfolio.title} <span className="font-extrabold">destacados</span>
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{siteContent.portfolio.subtitle}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((c: { id: string; label: string }) => {
            const Icon = getIcon(c.id);
            const activeCls = filter === c.id ? 'bg-gradient-to-r from-primary to-primary/700 text-white shadow-lg scale-105' : 'bg-[rgba(255,255,255,0.03)] text-gray-300 border border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.04)]';
            return (
              <motion.button
                key={c.id}
                type="button"
                onClick={() => setFilter(c.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${activeCls}`}
                aria-pressed={filter === c.id}
                aria-label={c.label}
              >
                <Icon size={16} />
                {c.label}
              </motion.button>
            );
          })}
        </motion.div>

        <BentoGrid columns={6}>
          {display.map((project, i) => {
            const CategoryIcon = getIcon(project.category || '');
            const subtitle = (project as Project & { subtitle?: string }).subtitle;
            const span = project.featured ? 'large' : (i % 3 === 0 ? 'medium' : 'medium');

            // compute tint overlay by t (use CSS rgb tokens, clamp opacity for contrast)
            const tintPrimary = `rgba(var(--primary-rgb), ${Math.min(0.6, 0.05 + 0.45 * t)})`;
            const tintSecondary = `rgba(var(--secondary-rgb), ${Math.min(0.45, 0.02 + 0.3 * t)})`;

            return (
              <BentoCard
                key={project.id}
                span={span}
                delay={i * 0.06}
                noPadding
                className="group"
              >
                <motion.div initial={reduce ? { opacity: 1 } : { opacity: 0 }} whileInView={reduce ? { opacity: 1 } : { opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col h-full">
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-dark-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      srcSet={`${project.image} 1x`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* tint overlay that changes with scroll */}
                    <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, ${tintPrimary} 0%, ${tintSecondary} 70%, rgba(0,0,0,0.36) 100%)`, mixBlendMode: 'multiply', opacity: 0.92 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[rgba(255,255,255,0.03)] text-xs">
                      <CategoryIcon size={14} className="text-white" />
                      <span className="text-white/90 capitalize">{project.category}</span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary text-dark text-xs font-medium">
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
                        <motion.h3 initial={{ y: 6, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-lg lg:text-xl font-semibold text-white leading-snug truncate">{project.title}</motion.h3>
                        {subtitle ? <motion.p initial={{ y: 6, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, delay: 0.04 }} className="text-xs text-gray-400 mt-1 truncate">{subtitle}</motion.p> : null}
                      </div>
                    </div>

                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.06 }} className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</motion.p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack?.slice(0, 6).map((t, idx) => (
                        <motion.span key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.04 * idx }} className="px-3 py-1 text-xs rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.03)] text-gray-300">
                          {t}
                        </motion.span>
                      ))}
                      {project.techStack && project.techStack.length > 6 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-400">
                          +{project.techStack.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                </motion.div>
              </BentoCard>
            );
          })}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
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