import React, { useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [expanded, setExpanded] = useState<string | null>(null);

  // Distribución tipo bento
  const layout = useMemo(
    () =>
      experiences.map((_, i) => {
        if (i === 0) return 'md:col-span-3 xl:col-span-4 md:row-span-2';
        if (i === 1) return 'md:col-span-3 xl:col-span-2';
        if (i === 2) return 'md:col-span-2 xl:col-span-2';
        if (i === 3) return 'md:col-span-2 xl:col-span-2';
        return 'md:col-span-3 xl:col-span-2';
      }),
    []
  );

  const stats = [
    { number: '5+', label: 'Proyectos Completados' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '100%', label: 'Productivo' },
    { number: '15+', label: 'Tecnologías Dominadas' },
  ];

  // Parallax glows
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-primary/8 via-primary/5 to-dark/80"
    >
      {/* Continuidad (capa superior semitransparente que “une” con Hero arriba y Skills abajo) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: glowY }}
          className="absolute -top-40 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[140px]"
        />
        <motion.div
          style={{ y: glowY }}
            className="absolute bottom-[-20%] right-[-10%] w-[38rem] h-[38rem] rounded-full bg-secondary/10 blur-[180px]"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[rgba(13,23,45,0.35)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(13,23,45,0.35)] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Experiencia & Impacto
            </span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Experiencias clave combinando estrategia, desarrollo y diseño para resultados tangibles.
          </p>
        </motion.div>

        {/* Grid Bento */}
        <div className="grid gap-6 md:grid-cols-6 auto-rows-[1fr]">
          {experiences.map((exp, index) => {
            const isOpen = expanded === exp.id;
            const responsibilities = exp.responsibilities || [];
            const preview = responsibilities.slice(0, 4);
            const hiddenCount = responsibilities.length - preview.length;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: index * 0.09, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl p-px ${layout[index]}`}
              >
                {/* Borde gradiente animado */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
                  className="absolute inset-0 rounded-2xl bg-[linear-gradient(140deg,rgba(11,95,255,0.55),rgba(242,183,5,0.15)_35%,transparent_70%)] opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-500"
                />
                {/* Card interna */}
                <motion.div
                  whileHover={{ rotateX: 4, rotateY: -4 }}
                  transition={{ type: 'spring', stiffness: 140, damping: 18 }}
                  className="relative h-full flex flex-col rounded-[1rem] bg-[rgba(6,12,25,0.78)] backdrop-blur-md border border-dark-200/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)]"
                >
                  {/* Header */}
                  <div className={`p-6 pb-4 ${exp.current ? 'pt-10' : ''}`}>
                    {exp.current && (
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-500/12 border border-green-500/25 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[11px] text-green-300 font-medium">Actual</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                      <span className="group-hover:text-secondary transition-colors duration-300">
                        {exp.title}
                      </span>
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-secondary/70" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-secondary/70" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech chips (scroll x en mobile) */}
                  <div className="px-6 pb-4 -mt-1">
                    <div className="flex gap-2 flex-wrap overflow-x-auto pr-2 scrollbar-thin scrollbar-thumb-dark-200/60">
                      {exp.techStack.map((t: string, i: number) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary border border-primary/25 tracking-wide shadow-inner"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="px-6 pb-5 space-y-3 text-sm">
                    {(isOpen ? responsibilities : preview).map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-primary shadow-[0_0_0_3px_rgba(255,255,255,0.04)]" />
                        <p className="text-gray-300 leading-relaxed">{r}</p>
                      </motion.div>
                    ))}

                    {hiddenCount > 0 && (
                      <motion.button
                        whileTap={{ scale: 0.94 }}
                        onClick={() => setExpanded(isOpen ? null : exp.id)}
                        className="group/btn mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-secondary transition-colors"
                      >
                        {isOpen ? (
                          <>
                            Ver menos <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            Ver {hiddenCount} más <ChevronDown size={14} />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>

                  {/* Línea inferior glow */}
                  <div className="mt-auto h-0.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="relative rounded-xl p-px group"
            >
              <div className="absolute inset-0 rounded-xl bg-[linear-gradient(130deg,rgba(11,95,255,0.45),rgba(242,183,5,0.15),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[0.9rem] bg-[rgba(6,12,25,0.8)] border border-dark-200/60 px-5 py-7 text-center backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-bold mb-1">
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {s.number}
                  </span>
                </div>
                <p className="text-muted text-[13px] tracking-wide">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Línea decorativa mobile */}
        <div className="md:hidden pointer-events-none absolute left-6 top-48 bottom-32 border-l border-primary/15" />
      </div>
    </section>
  );
};

export default Experience;