import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import * as Icons from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { skills as skillsData } from '../data/portfolio';
import { siteContent } from '../data/siteContent';
import { Skill } from '../types';
import { BentoGrid, BentoCard } from './BentoGrid';
import { throttle } from '../utils/throttle';

const getIcon = (name: string) => {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name] || Icons.Code;
  return Icon;
};

// Agrupar por categoría y ordenar las tecnologías alfabéticamente
const grouped = skillsData.reduce((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {} as Record<string, Skill[]>);

// Orden consistente de categorías (alfabético) y tecnologías dentro de cada categoría
Object.keys(grouped).forEach((k) => {
  grouped[k].sort((a, b) => a.name.localeCompare(b.name, 'es'));
});

const Skills: React.FC = () => {
  const categories = useMemo(() => Object.entries(grouped), []);
  // Flatten skills list for a single dynamic grid
  const flatSkills = useMemo(() => {
    return skillsData.slice().sort((a, b) => a.name.localeCompare(b.name, 'es'));
  }, []);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLElement | null>(null);
  const [t, setT] = useState(0); // 0..1 progression for gradient/color mixing
  const reduce = useReducedMotion();

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight || document.documentElement.clientHeight;
    // progression: 0 when bottom of section is above viewport, 1 when top is at top
    const progress = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)));
    setT(Number(progress.toFixed(3)));
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

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.36 } }
  };

  const filtered = useMemo(() => {
    return flatSkills.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));
  }, [flatSkills, query]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-6 lg:px-16 overflow-hidden"
      aria-label="Tecnologías"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-5xl md:text-6xl font-extrabold mb-2 ${reduce ? '' : 'animated-gradient-text'}`}
          >
            {siteContent.skills.title}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.04 }} className="text-lg text-gray-300 max-w-3xl">
            {siteContent.skills.subtitle}
          </motion.p>
        </motion.header>

        <BentoGrid columns={3}>
          <BentoCard span="large" delay={0}>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="flex flex-col h-full p-6 md:p-8 gap-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-300">Explora mis habilidades: usa el buscador para filtrar por nombre o categoría.</p>
                </div>
                <div className="w-72">
                  <motion.input variants={item} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar tecnología..." aria-label="Buscar tecnología" className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-lg px-4 py-3 text-white placeholder:text-gray-400" />
                </div>
              </div>

              <motion.div variants={item} className="grid gap-4 mt-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {filtered.map((s) => {
                  const Icon = getIcon(s.icon || 'Code');
                  return (
                    <motion.button key={s.name} whileHover={reduce ? undefined : { scale: 1.04 }} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[rgba(11,95,255,0.12)] transition-all text-left" aria-label={s.name}>
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary/8 to-secondary/6">
                        <Icon size={22} className="text-white" />
                      </div>
                      <div className="text-sm font-medium text-white/95 text-center leading-tight">{s.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{s.category}</div>
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.div variants={item} className="pt-2 border-t border-[rgba(255,255,255,0.03)] mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Stack profesional</span>
                  <span className="text-white font-medium">Actualizado 2025</span>
                </div>
              </motion.div>
            </motion.div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
};

export default Skills;
