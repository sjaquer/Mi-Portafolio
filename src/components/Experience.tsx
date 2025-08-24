import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const sorted = useMemo(() => {
    const parseYear = (d?: string) => {
      if (!d) return 0;
      const m = d.match(/20\d{2}/g);
      return m ? Math.max(...m.map(Number)) : 0;
    };
    return [...experiences].sort((a, b) => parseYear(b.duration) - parseYear(a.duration));
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-6 lg:px-16 bg-gradient-to-br from-primary/6 to-dark/86 overflow-hidden"
    >
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -top-40 -left-36 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" aria-hidden />
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute bottom-[-18%] right-[-10%] w-[34rem] h-[34rem] rounded-full bg-secondary/6 blur-[160px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/700">Experiencia</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">Proyectos y roles que combinan marketing visual y soporte tecnológico.</p>
        </motion.header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence initial={false}>
            {sorted.map((exp, idx) => {
              const isOpen = expanded === exp.id;
              const preview = (exp.responsibilities || []).slice(0, 3);
              const hiddenCount = (exp.responsibilities || []).length - preview.length;

              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  whileHover={{ translateY: -6 }}
                  className="relative rounded-2xl p-px"
                >
                  <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(4,118,217,0.14),rgba(242,183,5,0.04))] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative rounded-xl bg-[rgba(6,12,25,0.78)] border border-dark-200/50 backdrop-blur-xs p-6 flex flex-col h-full shadow-lg">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-1">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                      </div>

                      {exp.current && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs">
                          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                          Actual
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      {exp.duration && <span className="inline-flex items-center gap-2"><Calendar size={14} className="text-primary/70" />{exp.duration}</span>}
                      {exp.location && <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-primary/70" />{exp.location}</span>}
                    </div>

                    {exp.summary && <p className="text-sm text-gray-300 mb-4">{isOpen ? exp.summary : exp.summary.split('.').slice(0, 2).join('.').trim() + (exp.summary.length > 120 ? '…' : '')}</p>}

                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.techStack.slice(0, 6).map((t: string, i: number) => (
                          <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[rgba(4,118,217,0.06)] text-primary border border-primary/10">
                            {t}
                          </span>
                        ))}
                        {exp.techStack.length > 6 && <span className="text-[11px] px-2.5 py-1 rounded-md bg-dark-100/40 text-gray-400">+{exp.techStack.length - 6}</span>}
                      </div>
                    )}

                    <div className="flex-1">
                      <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        {(isOpen ? exp.responsibilities || [] : preview).map((r: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/80" />
                            <span className="leading-snug">{r}</span>
                          </li>
                        ))}
                      </ul>

                      {hiddenCount > 0 && (
                        <button
                          onClick={() => setExpanded(isOpen ? null : exp.id)}
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                          aria-expanded={isOpen}
                        >
                          {isOpen ? (
                            <>
                              <ChevronUp size={14} /> Ver menos
                            </>
                          ) : (
                            <>
                              <ChevronDown size={14} /> Ver {hiddenCount} más
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                        <Layers size={14} className="text-primary/70" />
                        <span>{exp.role || 'Responsable'}</span>
                      </div>

                      <div className="text-xs text-gray-400">
                        {exp.techStack && exp.techStack.length > 0 ? `${exp.techStack.length} tecnologías` : '—'}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '5+', label: 'Áreas transformadas' },
            { value: '18+', label: 'Proyectos' },
            { value: '30+', label: 'Campañas & assets' },
            { value: '25+', label: 'Tecnologías' }
          ].map((s, i) => (
            <div key={i} className="rounded-lg bg-[rgba(255,255,255,0.02)] border border-dark-200/30 px-4 py-4">
              <div className="text-lg font-semibold text-primary">{s.value}</div>
              <div className="text-xs text-gray-400 uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;