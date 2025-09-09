import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { education } from '../data/portfolio';

const INITIAL_COUNT = 4;
const TRUNCATE = 120;
const truncate = (s?: string, n = TRUNCATE) => (!s ? '' : s.length > n ? s.slice(0, n).trim() + '…' : s);

const Education: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [open, setOpen] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sorted = useMemo(() => {
    const parseYear = (d?: string) => {
      if (!d) return 0;
      const m = d.match(/20\d{2}/g);
      return m ? Math.max(...m.map(Number)) : 0;
    };
    return [...education].sort((a, b) => parseYear(b.duration) - parseYear(a.duration));
  }, []);

  const visibleCount = showAll ? sorted.length : Math.min(INITIAL_COUNT, sorted.length);
  const visible = sorted.slice(0, visibleCount);

  return (
    <section id="education" ref={ref} className="relative py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background global es el responsable del fondo; se eliminaron fondos locales */}

      <div className="relative max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-white">Formación & Certificados</h2>
          <div className="w-12 h-1 rounded-full bg-secondary mt-2 mb-4" />
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Formación y certificaciones relevantes que respaldan mi enfoque práctico: cursos y acreditaciones aplicadas a
            proyectos reales.
          </p>
        </motion.header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence initial={false}>
            {visible.map((item, i) => {
              const expanded = open === item.id;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  style={{ willChange: 'transform' }}
                  className="relative rounded-2xl p-px"
                >
                  <div className="relative rounded-xl bg-[rgba(6,12,25,0.78)] border border-dark-200/50 backdrop-blur-xs p-6 flex flex-col h-full shadow-lg">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white leading-snug mb-1">{item.degree}</h3>
                        <p className="text-primary text-sm font-medium">{item.institution}</p>
                      </div>

                      {/* CORRECCIÓN: usar columna con gap para evitar solapamiento */}
                      <div className="flex flex-col items-end gap-2 text-xs text-gray-400">
                        {item.duration && (
                          <div className="inline-flex items-center gap-2">
                            <Calendar size={14} className="text-primary/70" />
                            <span className="whitespace-nowrap">{item.duration}</span>
                          </div>
                        )}
                        {item.status && (
                          <div
                            className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${
                              /en curso|estudiant/i.test(item.status)
                                ? 'bg-secondary/10 text-secondary border border-secondary/20'
                                : 'bg-success/10 text-success border border-success/20'
                            }`}
                          >
                            {item.status}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* descripción compacta */}
                    {item.description && (
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {expanded ? item.description : truncate(item.description, TRUNCATE)}
                      </p>
                    )}

                    {/* tags visuales */}
                    {item.relevant && item.relevant.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(expanded ? item.relevant : item.relevant.slice(0, 4)).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[rgba(4,118,217,0.06)] text-primary text-[11px] font-medium border border-primary/10"
                          >
                            {t}
                          </span>
                        ))}
                        {!expanded && item.relevant.length > 4 && (
                          <span className="px-2.5 py-1 rounded-md bg-dark-100/40 text-[11px] text-gray-400">
                            +{item.relevant.length - 4}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                      {item.certificateUrl ? (
                        <button
                          onClick={() => window.open(item.certificateUrl, '_blank')}
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                        >
                          Ver certificado <ExternalLink size={14} />
                        </button>
                      ) : (
                        <span className="text-sm text-gray-500">Sin certificado</span>
                      )}

                      {(item.description && item.description.length > TRUNCATE) ||
                      (item.relevant && item.relevant.length > 4) ? (
                        <button
                          onClick={() => setOpen(expanded ? null : item.id)}
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                          aria-expanded={expanded}
                        >
                          {expanded ? (
                            <>Ocultar <ChevronUp size={14} /></>
                          ) : (
                            <>Ver más <ChevronDown size={14} /></>
                          )}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Ver todos / colapsar */}
        {sorted.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(s => !s)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[rgba(255,255,255,0.03)] border border-dark-200/40 text-sm text-primary hover:bg-[rgba(255,255,255,0.045)] hover:text-primary/80 transition-colors"
              aria-expanded={showAll}
            >
              {showAll ? 'Mostrar menos' : `Ver todos (${sorted.length})`}
              <span aria-hidden>{showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;