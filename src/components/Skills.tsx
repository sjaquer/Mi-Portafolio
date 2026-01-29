// src/components/Skills.tsx - Versión optimizada y simplificada
import { TrendingUp, BarChart3, Code2, Sparkles } from 'lucide-react';

// Definición de categorías con sus tecnologías
const skillCategories = [
  {
    id: 'operations',
    title: 'Eficiencia Operativa',
    subtitle: 'Optimizo procesos y reduzco costos',
    icon: TrendingUp,
    color: '#10B981',
    skills: ['BizOps', 'Reingeniería', 'Supply Chain', 'Costos', 'Liderazgo']
  },
  {
    id: 'intelligence',
    title: 'Inteligencia de Negocios',
    subtitle: 'Transformo datos en decisiones',
    icon: BarChart3,
    color: '#3B82F6',
    skills: ['Power BI', 'SQL Server', 'Análisis Financiero', 'KPIs', 'ETL']
  },
  {
    id: 'development',
    title: 'Desarrollo de Producto',
    subtitle: 'Construyo soluciones escalables',
    icon: Code2,
    color: '#D9E512',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'APIs']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header simple */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 mb-4">
            <Sparkles size={14} />
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
            Stack Tecnológico
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Herramientas que domino para resolver problemas de negocio.
          </p>
        </div>

        {/* Grid de categorías - Mejorado visualmente */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-[#252525] border border-slate-700/50 rounded-2xl p-6 sm:p-8 hover:border-slate-600 hover:bg-[#2a2a2a] transition-all duration-300"
              >
                {/* Header de categoría */}
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                    style={{ backgroundColor: `${category.color}20`, boxShadow: `0 4px 20px ${category.color}15` }}
                  >
                    <Icon size={28} style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{category.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{category.subtitle}</p>
                  </div>
                </div>

                {/* Tags de skills - Más grandes y legibles */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-800/70 text-slate-200 text-sm font-medium rounded-xl border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tecnologías destacadas - Más prominente */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6 font-medium">
            Tecnologías principales
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Power BI', 'SQL Server', 'Firebase', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-slate-800/50 text-slate-200 text-base font-medium rounded-full border border-slate-700/40 hover:border-primary/40 hover:text-primary hover:bg-slate-800 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
