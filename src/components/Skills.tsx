// src/components/Skills.tsx - Versión corporativa
import { Server, BarChart3, Code2, Sparkles, Cpu, Globe } from 'lucide-react';

// Definición de categorías corporativas
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces modernas y responsivas',
    icon: Globe,
    color: '#d9e512',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Servicios y lógica de negocio',
    icon: Server,
    color: '#10B981',
    skills: ['Node.js', 'Firebase', 'Firestore', 'REST APIs', 'SQL Server']
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    subtitle: 'Análisis y visualización de datos',
    icon: BarChart3,
    color: '#3861d7',
    skills: ['Power BI', 'Excel Avanzado', 'DAX', 'Modelado de Datos', 'KPIs']
  },
  {
    id: 'automation',
    title: 'Automatización',
    subtitle: 'Procesos y flujos automatizados',
    icon: Cpu,
    color: '#8B5CF6',
    skills: ['Python', 'Webhooks', 'ETL', 'Scripts', 'Cron Jobs']
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    subtitle: 'Conexión entre plataformas',
    icon: Code2,
    color: '#F59E0B',
    skills: ['Shopify API', 'WhatsApp API', 'Zadarma', 'Google OR-Tools', 'APIs externas']
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
            Arquitectura y Herramientas
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Herramientas utilizadas para el desarrollo de soluciones orientadas a negocio y análisis de datos.
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
            {['Excel Avanzado', 'Power BI', 'Python', 'APIs', 'Firebase', 'SQL Server', 'React', 'TypeScript'].map((tech) => (
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
