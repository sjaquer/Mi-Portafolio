import React, { useMemo, useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Code } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { skills as skillsData } from '../data/portfolio';
import { siteContent } from '../data/siteContent';
import { Skill } from '../types';

// Rediseño completo: presentación "Glass Minimal" sin carrusel.
// Añadir/quitar tecnologías en portfolio.ts se refleja automáticamente.

interface SkillIconProps { skill: Skill; }
const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
  const base = (skill.icon || skill.name).replace(/\.(svg|png|webp)$/i,'').replace(/\s+/g,'-').toLowerCase();
  const sources = [`/svg/${base}.svg`, `/images/${base}.webp`, `/images/${base}.png`];
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);
  const onError = () => {
    if (idx < sources.length - 1) setIdx(i => i + 1); else setFailed(true);
  };
  if (failed) return <Code className="w-6 h-6 text-white" />;
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  return <img src={sources[idx]} alt={skill.name} onError={onError} className="object-contain w-8 h-8" />;
};

const Skills: React.FC = () => {
  const reduce = useReducedMotion();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<string | null>(null);

  // Agrupar dinámicamente
  const grouped = useMemo(() => {
    const g: Record<string, Skill[]> = {};
    skillsData.forEach(s => { (g[s.category] = g[s.category] || []).push(s); });
    Object.keys(g).forEach(cat => g[cat].sort((a,b)=>a.name.localeCompare(b.name,'es')));
    return g;
  }, []);

  useEffect(() => {
    // Expandir todas por defecto
    const init: Record<string, boolean> = {};
    Object.keys(grouped).forEach(cat => init[cat] = true);
    setExpanded(init);
  }, [grouped]);

  const filteredGrouped = useMemo(() => {
    if (!query.trim()) return grouped;
    const q = query.toLowerCase();
    const out: Record<string, Skill[]> = {};
    Object.entries(grouped).forEach(([cat, arr]) => {
      const f = arr.filter(s => s.name.toLowerCase().includes(q));
      if (f.length) out[cat] = f;
    });
    return out;
  }, [query, grouped]);

  const toggle = (cat: string) => {
    setExpanded(prev => {
      const wasOpen = !!prev[cat];
      return { ...prev, [cat]: !wasOpen };
    });
    // Si cerramos la categoría y la habilidad activa pertenece a ella, limpiamos `active`
    if (active) {
      const s = skillsData.find(sk => sk.name === active);
      if (s && s.category === cat) setActive(null);
    }
  };

  // Normalizar expanded y active cuando cambian los datos filtrados o la query
  useEffect(() => {
    // Eliminar categorías que ya no existen en filteredGrouped
    setExpanded(prev => {
      const next: Record<string, boolean> = {};
      Object.keys(filteredGrouped).forEach(cat => {
        // Si hay query, expandir categorías que tengan matches; si no, mantener el estado previo (o true por defecto)
        next[cat] = typeof prev[cat] === 'boolean' ? prev[cat] : true;
      });
      // Si hay una query, preferimos expandir sólo las categorías con coincidencias
      if (query.trim()) {
        Object.keys(next).forEach(cat => { next[cat] = true; });
      }
      return next;
    });

    // Si la habilidad activa ya no aparece en el filtrado, limpiarla
    if (active) {
      const exists = Object.values(filteredGrouped).some(arr => arr.some(s => s.name === active));
      if (!exists) setActive(null);
    }
  }, [filteredGrouped, query]);

  const catVariants = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };
  const skillVariants = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } };

  return (
    <section id="skills" className="relative py-20 px-6 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800" aria-label="Tecnologías">
      <div className="relative max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mb-10">
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-3 ${reduce ? '' : 'animated-gradient-text'}`}>{siteContent.skills.title}</h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">{siteContent.skills.subtitle}</p>
        </motion.header>
        <div className="mb-8 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar tecnología..."
            aria-label="Buscar tecnología"
            className="w-full bg-[rgba(255,255,255,0.05)]/60 border border-[rgba(255,255,255,0.09)] rounded-xl pl-10 pr-4 py-3 text-white placeholder:text-gray-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all backdrop-blur-md"
          />
        </div>
        <div className="space-y-8">
          {Object.entries(filteredGrouped).map(([cat, arr]) => {
            return (
              <motion.div key={cat} initial="hidden" whileInView="show" viewport={{ once: true }} variants={catVariants} className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.35)] overflow-hidden transition-all">
                <div className="w-full flex items-center justify-between px-5 py-4 md:py-5 text-left">
                  <span className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span className="px-2 py-1 rounded-lg bg-primary/15 text-primary text-sm font-semibold">{cat}</span>
                    <span className="text-gray-300 text-xs md:text-sm font-medium">{arr.length} habilidades</span>
                  </span>
                </div>
                {/* Mostrar siempre el contenido: eliminada la opción de colapsar */}
                <div className="px-5 pb-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {arr.map(skill => {
                      const match = query && skill.name.toLowerCase().includes(query.toLowerCase());
                      return (
                        <motion.button
                          key={skill.name}
                          variants={skillVariants}
                          whileHover={reduce ? undefined : { scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setActive(active === skill.name ? null : skill.name)}
                          aria-pressed={active === skill.name}
                          className={`group relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-3 flex flex-col items-center gap-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40 ${active === skill.name ? 'border-primary/50 bg-primary/10' : ''}`}
                        >
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/10">
                            <SkillIcon skill={skill} />
                          </div>
                          <div className={`text-xs font-semibold text-white truncate w-full text-center ${match ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' : ''}`}>{skill.name}</div>
                          <div className="text-[10px] text-gray-400 truncate w-full text-center">{skill.category}</div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
          {Object.keys(filteredGrouped).length === 0 && (
            <p className="text-gray-400 text-sm">No se encontraron habilidades para "{query}".</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
