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

const grouped = skillsData.reduce((acc, s) => {
  if (!acc[s.category]) acc[s.category] = [];
  acc[s.category].push(s);
  return acc;
}, {} as Record<string, Skill[]>);

const Skills: React.FC = () => {
  const categories = useMemo(() => Object.entries(grouped), []);
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
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

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
          className="mb-14 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(var(--primary-rgb), ${0.95 - 0.3 * (1 - t)}), rgba(var(--secondary-rgb), ${0.95 - 0.3 * t}))`
            }}
          >
            {siteContent.skills.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            {siteContent.skills.subtitle}
          </motion.p>
        </motion.header>

        <BentoGrid columns={4}>
          {categories.map(([cat, skills], ci) => {
            const span = ci === 0 ? 'large' : 'medium';

            // compute per-card gradient using t (scroll progress)
            const primary = `rgba(var(--primary-rgb), ${0.08 + 0.45 * t})`;
            const secondary = `rgba(var(--secondary-rgb), ${0.02 + 0.25 * t})`;
            const cardBg = `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`;

            return (
              <BentoCard
                key={cat}
                span={span}
                delay={ci * 0.06}
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={container}
                  style={{ backgroundImage: cardBg }}
                  className="flex flex-col h-full p-6 md:p-8 gap-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <motion.div variants={item} className="max-w-xs">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{cat}</h3>
                      <div className="w-20 h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${primary}, ${secondary})` }} />
                    </motion.div>

                    <motion.div variants={item} className="px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)]">
                      <span className="text-sm font-semibold text-white">{skills.length}</span>
                    </motion.div>
                  </div>

                  <motion.div variants={item} className={`grid gap-4 mb-2 flex-1 ${
                    span === 'large'
                      ? 'grid-cols-4 sm:grid-cols-5'
                      : 'grid-cols-3 sm:grid-cols-4'
                  }`}
                  >
                    {skills.map((s) => {
                      const Icon = getIcon(s.icon || 'Code');
                      return (
                        <motion.div
                          key={s.name}
                          variants={item}
                          whileHover={reduce ? undefined : { scale: 1.06, y: -6 }}
                          className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[rgba(11,95,255,0.12)] transition-all cursor-pointer"
                        >
                          <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primary}, rgba(255,255,255,0.02))` }}>
                            <Icon size={30} className="text-white" />
                          </div>
                          <div className="text-sm font-medium text-white/95 text-center leading-tight">
                            {s.name}
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  <motion.div variants={item} className="pt-2 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Stack profesional</span>
                      <span className="text-white font-medium">Actualizado 2025</span>
                    </div>
                  </motion.div>
                </motion.div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Skills;
