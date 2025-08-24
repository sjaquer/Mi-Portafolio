import React, { useMemo, useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills as skillsData } from '../data/portfolio';
import { Skill } from '../types';

const getIcon = (name: string) => {
  const Icon = (Icons as any)[name] || Icons.Code;
  return Icon;
};

const grouped = skillsData.reduce((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {} as Record<string, Skill[]>);

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const categories = useMemo(() => Object.entries(grouped), [grouped]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-6 lg:px-16 bg-gradient-to-br from-primary/8 to-dark/86 overflow-hidden"
    >
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -top-28 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
      <motion.div style={{ y: glowY }} className="pointer-events-none absolute -bottom-36 -right-28 w-[30rem] h-[30rem] rounded-full bg-secondary/6 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/700">Habilidades</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Habilidades escogidas por impacto: herramientas y técnicas que utilizo para diseñar, automatizar y entregar resultados reales.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([cat, skills], ci) => {
            const isOpen = !!expanded[cat];
            const preview = skills.slice(0, isOpen ? skills.length : 8);
            return (
              <motion.article
                key={cat}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: ci * 0.06 }}
                className="relative rounded-2xl p-px"
              >
                <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(2,132,199,0.06),rgba(16,185,129,0.02))] opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.div
                  className="relative rounded-xl bg-[rgba(6,12,25,0.78)] border border-dark-200/50 p-5 h-full flex flex-col"
                  whileHover={{ translateY: -6 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cat}</h3>
                      <div className="mt-2 w-14 h-1 rounded-full bg-primary/60" />
                    </div>
                    <div className="text-xs text-gray-400">{skills.length}</div>
                  </div>

                  <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 mb-3">
                    {preview.map((s) => {
                      const Icon = getIcon(s.icon || 'Code');
                      return (
                        <div key={s.name} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-[rgba(255,255,255,0.03)]">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <div className="text-[11px] text-white/80 text-center leading-tight">{s.name.length > 14 ? `${s.name.slice(0,12)}…` : s.name}</div>
                          <span className="sr-only">{s.name}</span>
                        </div>
                      );
                    })}
                    {skills.length > preview.length && (
                      <button
                        onClick={() => setExpanded(prev => ({ ...prev, [cat]: true }))}
                        className="flex items-center justify-center p-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-dark-200/30 text-sm text-gray-300 hover:bg-[rgba(255,255,255,0.04)]"
                        aria-label={`Ver más ${cat}`}
                      >
                        +{skills.length - preview.length}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-gray-400">Visual · Minimal</span>
                    {isOpen ? (
                      <button onClick={() => setExpanded(prev => ({ ...prev, [cat]: false }))} className="text-xs text-primary">Ocultar</button>
                    ) : (
                      <button onClick={() => setExpanded(prev => ({ ...prev, [cat]: true }))} className="text-xs text-primary">Ver todo</button>
                    )}
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
