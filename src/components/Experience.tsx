// src/components/Experience.tsx
import { motion } from 'framer-motion';
import { GraduationCap, Building2 } from 'lucide-react';
import { experiences, education } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0b1121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f5fcff] font-display">
                Trayectoria Profesional
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Evolución estratégica desde roles operativos hasta liderazgo tecnológico.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience Column */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(217,229,18,0.1)]">
                        <Building2 size={24} />
                    </div>
                    <div>
                         <div className="text-2xl font-bold text-[#f5fcff]" role="heading" aria-level={3}>Experiencia Laboral</div>
                         <p className="text-sm text-slate-400">Roles clave y logros de negocio</p>
                    </div>
                </div>
                
                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-primary ring-4 ring-[#1e1e1e] shadow-[0_0_10px_rgba(217,229,18,0.5)]" />
                            
                            <div className="group bg-[#2d2d2d] p-6 rounded-2xl border border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                    <div>
                                        <div className="text-lg font-bold text-[#f5fcff] font-display group-hover:text-primary transition-colors">{exp.role}</div>
                                        <div className="text-slate-300 font-medium">
                                            {exp.company}
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-[#1e1e1e] text-slate-300 whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>
                                

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                    {exp.summary}
                                </p>
                                
                                {exp.responsibilities && (
                                    <ul className="space-y-2">
                                        {exp.responsibilities.slice(0, 3).map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    {exp.techStack.map((tech, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-[#1e1e1e] text-slate-400 border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education Column */}
            <div className="space-y-8">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(56,97,215,0.1)]">
                        <GraduationCap size={24} />
                    </div>
                     <div>
                         <div className="text-2xl font-bold text-[#f5fcff]" role="heading" aria-level={3}>Formación</div>
                         <p className="text-sm text-slate-400">Base académica y certificaciones</p>
                    </div>
                </div>

                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-6 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div 
                            key={edu.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1e1e1e] border-2 border-secondary ring-4 ring-[#1e1e1e]" />
                            
                            <div className="bg-[#2d2d2d] p-6 rounded-2xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2 gap-3">
                                     <div className="text-lg font-bold text-[#f5fcff] font-display leading-snug">{edu.degree}</div>
                                     <span className="text-xs font-semibold text-secondary-600 dark:text-secondary-400 whitespace-nowrap">
                                        {edu.duration}
                                    </span>
                                </div>
                                
                                <div className="text-slate-700 dark:text-slate-300 font-medium mb-1">
                                    {edu.institution}
                                </div>
                                {edu.status && (
                                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">{edu.status}</div>
                                )}
                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                    {edu.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;