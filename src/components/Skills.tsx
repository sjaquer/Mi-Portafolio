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

        {/* Grid de categorías - Simple y limpio */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-[#252525] border border-slate-700/50 rounded-2xl p-5 sm:p-6 hover:border-slate-600 transition-colors"
              >
                {/* Header de categoría */}
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon size={20} style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{category.title}</h3>
                    <p className="text-slate-500 text-xs mt-0.5">{category.subtitle}</p>
                  </div>
                </div>

                {/* Tags de skills - Simple */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-800/60 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tecnologías destacadas - Grid compacto */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-xs uppercase tracking-wider mb-5">
            Tecnologías principales
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Power BI', 'SQL', 'Firebase', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800/40 text-slate-300 text-sm font-medium rounded-full border border-slate-700/30 hover:border-primary/30 hover:text-primary transition-colors"
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
