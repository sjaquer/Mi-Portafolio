// src/components/Experience.tsx
import { motion } from 'framer-motion';
import { GraduationCap, Building2 } from 'lucide-react';
import { experiences, education } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a]">
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
                Resultados concretos en cada rol: automatización, control de datos y mejora operativa.
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
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-primary ring-4 ring-[#0a0a0a] shadow-[0_0_10px_rgba(217,229,18,0.5)] group-hover:scale-125 transition-transform duration-300 z-10">
                                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                            </div>
                            
                            <div className="group bg-[#171717]/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 ring-1 ring-white/5 relative overflow-hidden">
                                {/* Decorational Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                                        <div>
                                            <div className="text-xl font-bold text-[#f5fcff] font-display group-hover:text-primary transition-colors duration-300">{exp.role}</div>
                                            <div className="text-slate-300 font-medium flex items-center gap-2">
                                                {exp.company}
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-[#252525] text-slate-300 whitespace-nowrap border border-slate-700/50 group-hover:border-primary/30 group-hover:text-primary/90 transition-colors">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                                        {exp.summary}
                                    </p>
                                    
                                    {exp.responsibilities && (
                                        <ul className="space-y-3 mb-6">
                                            {exp.responsibilities.slice(0, 3).map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary shrink-0 transition-colors duration-300" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {exp.techStack && exp.techStack.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 group-hover:border-primary/20 transition-colors">
                                            {exp.techStack.map((tech, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#202020] text-slate-400 border border-slate-700/50 group-hover:border-primary/30 group-hover:text-slate-300 transition-all hover:bg-primary/10 hover:text-primary cursor-default">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
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
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border-2 border-secondary ring-4 ring-[#0a0a0a] group-hover:scale-125 transition-transform" />
                            
                            <div className="group bg-[#171717] p-6 rounded-2xl border border-slate-800 shadow-sm hover:shadow-lg hover:shadow-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-2 gap-3">
                                         <div className="text-lg font-bold text-[#f5fcff] font-display leading-snug group-hover:text-secondary transition-colors">{edu.degree}</div>
                                         <span className="text-xs font-semibold text-secondary-400 whitespace-nowrap bg-secondary/10 px-2 py-1 rounded-md border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                                            {edu.duration}
                                        </span>
                                    </div>
                                    
                                    <div className="text-slate-300 font-medium mb-1 flex items-center gap-2">
                                        {edu.institution}
                                    </div>
                                    {edu.status && (
                                      <div className="text-xs text-slate-400 mb-2 italic">{edu.status}</div>
                                    )}
                                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                        {edu.description}
                                    </div>
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