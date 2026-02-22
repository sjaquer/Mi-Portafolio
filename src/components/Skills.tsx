// src/components/Skills.tsx - Versión estratégica
import { Server, BarChart3, Code2, Sparkles } from 'lucide-react';

// Definición de categorías estratégicas
const skillCategories = [
  {
    id: 'operations',
    title: 'Operaciones y Gestión',
    subtitle: 'Control operativo y mejora de procesos',
    icon: BarChart3,
    color: '#10B981',
    skills: ['Control de Costos', 'Gestión de Inventarios', 'Reingeniería de Procesos', 'Investigación Operativa', 'Excel Avanzado']
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    subtitle: 'Análisis y visualización de datos',
    icon: Server,
    color: '#3861d7',
    skills: ['Power BI', 'DAX', 'Modelado de Datos', 'SQL Server', 'ETL / Pipelines']
  },
  {
    id: 'dev',
    title: 'Desarrollo y Automatización',
    subtitle: 'Herramientas y sistemas digitales',
    icon: Code2,
    color: '#d9e512',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Firebase', 'APIs e Integraciones']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header simple */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 mb-4">
            <Sparkles size={14} />
            Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
            Herramientas y Tecnologías
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Herramientas que utilizo para construir soluciones orientadas a operaciones, datos y automatización.
          </p>
        </div>

        {/* Grid de categorías - Mejorado visualmente */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-[#171717] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:bg-[#202020] hover:shadow-[0_0_30px_rgba(217,229,18,0.05)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                
                {/* Header de categoría */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/5"
                    style={{ backgroundColor: `${category.color}15`, boxShadow: `0 4px 20px ${category.color}15`, color: category.color }}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-primary transition-colors">{category.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{category.subtitle}</p>
                  </div>
                </div>

                {/* Tags de skills - Más grandes y legibles */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-slate-900/50 text-slate-300 text-sm font-medium rounded-xl border border-slate-800 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition-colors"
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
            {['Power BI', 'Python', 'Excel Avanzado', 'SQL Server', 'React', 'Firebase', 'Node.js', 'TypeScript'].map((tech) => (
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
