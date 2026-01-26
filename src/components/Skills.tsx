// src/components/Skills.tsx
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills as skillsData } from '../data/portfolio';
import { Terminal, Cpu, BarChart, TrendingUp } from 'lucide-react';

const Skills = () => {
  // Agrupar habilidades por categoría
  const groupedSkills = useMemo(() => {
    const grouped: Record<string, typeof skillsData> = {};
    skillsData.forEach(skill => {
      if (!grouped[skill.category]) grouped[skill.category] = [];
      grouped[skill.category].push(skill);
    });
    return grouped;
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'estrategia & crecimiento': return TrendingUp; // Icono para growth/marketing
      case 'data & analytics': return BarChart;       // Icono para datos
      case 'ingeniería de producto': return Cpu;      // Icono para tech
      default: return Terminal;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#1e1e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f5fcff] font-display">
                Stack Tecnológico
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Herramientas y plataformas que utilizo para construir soluciones escalables y basadas en datos.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, skills], idx) => {
                const Icon = getCategoryIcon(category);
                return (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-[#2d2d2d] border border-slate-700 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] shadow-sm flex items-center justify-center text-primary border border-slate-700">
                                <Icon size={24} />
                            </div>
                            <div className="text-xl font-bold text-[#f5fcff] capitalize" role="heading" aria-level={3}>
                                {category}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {skills.map((skill) => (
                                <div key={skill.name} className="group">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-200 font-medium flex items-center gap-2">
                                            {/* Icon placeholder if needed, or simple bullet */}
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
                                            {skill.name}
                                        </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }} // Simple full width for "mastery" look or random
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-primary-500 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                                        />
                                        <div className="h-full bg-slate-700 w-3/4 opacity-100 group-hover:opacity-0 transition-opacity absolute top-0 left-0" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
