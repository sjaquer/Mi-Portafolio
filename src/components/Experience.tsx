import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolio';
import { MOTION } from '../utils/animations';

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative z-10 border-t border-zinc-900/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={MOTION.fadeUp} initial="initial" whileInView="whileInView" viewport={MOTION.viewport} className="mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-50 font-display tracking-tight mb-4">
            Trayectoria Profesional.
          </h2>
          <p className="text-zinc-400 font-light max-w-xl leading-relaxed">
            Ingeniería de software con especialización en arquitecturas de datos y sistemas inteligentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport}>
            <div className="text-xs font-bold text-slate-500 font-mono tracking-widest uppercase mb-10">
              ⚡ Experiencia Laboral
            </div>

            <div className="relative border-l border-emerald-500/20 ml-3 space-y-10">
              {experiences.map((exp) => {
                return (
                  <motion.div key={exp.id} variants={MOTION.staggerChild} className="relative pl-8">
                    <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-950" />
                    
                    <div className="group bg-slate-900/30 backdrop-blur-xl p-6 rounded-3xl border border-slate-800/40 hover:border-emerald-500/30 transition-all duration-500 shadow-bento-dark">
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-between mb-2">
                          <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors leading-snug">
                            {exp.role || exp.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-500">{exp.duration}</span>
                        </div>
                        
                        <div className="text-slate-400 text-xs font-semibold mb-3 font-mono tracking-wider uppercase">
                          {exp.company}
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                          {exp.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack?.map((tech, i) => (
                            <span 
                              key={i} 
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Education & Certifications Column */}
          <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport}>
            <div className="text-xs font-bold text-slate-500 font-mono tracking-widest uppercase mb-10">
              🎓 Educación & Certificaciones
            </div>

            <div className="relative border-l border-emerald-500/20 ml-3 space-y-8">
              {education.map((edu) => {
                const isAi = edu.tier === 'ai-certification';
                const initials = edu.institution
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <motion.div key={edu.id} variants={MOTION.staggerChild} className="relative pl-8">
                    <div className={`absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full ${isAi ? 'bg-emerald-400' : 'bg-slate-600'} ring-4 ring-slate-950`} />
                    
                    <div className={`group backdrop-blur-xl p-5 rounded-3xl border transition-all duration-500 shadow-bento-dark ${
                      isAi 
                        ? 'bg-emerald-500/[0.02] border-emerald-500/10 hover:border-emerald-500/30' 
                        : 'bg-slate-900/20 border-slate-800/40 hover:border-slate-700/50'
                    }`}>
                      <div className="flex gap-4 items-start">
                        {/* Institution Logo */}
                        <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-slate-950 border border-slate-800 shadow-inner overflow-hidden select-none">
                          {edu.logoUrl ? (
                            <img 
                              src={edu.logoUrl} 
                              alt={edu.institution} 
                              className={`w-6 h-6 object-contain ${
                                edu.logoUrl.startsWith('/images/')
                                  ? '' // Keep local assets exactly as saved, avoiding double filtering
                                  : (edu.institution.includes('Norbert Wiener') || edu.institution.includes('IDAT') || edu.institution.includes('CertiProf')
                                    ? 'filter brightness-0 invert'  // Convert external colored logos to white/monochrome
                                    : '')
                              }`} 
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-[10px] font-bold text-slate-500 font-mono">{initials}</span>
                          )}
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-between mb-2">
                            <h3 className="text-sm font-bold text-slate-100 leading-snug">
                              {edu.degree}
                            </h3>
                            <span className="text-[10px] font-mono text-slate-500">{edu.duration}</span>
                          </div>
                          
                          <div className={`text-xs font-semibold mb-3 ${isAi ? 'text-emerald-400/80' : 'text-slate-400'} font-mono`}>
                            {edu.institution}
                          </div>

                          {edu.relevant && (
                            <div className="flex flex-wrap gap-1.5">
                              {edu.relevant.map((tag, i) => (
                                <span 
                                  key={i} 
                                  className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                                    isAi 
                                      ? 'bg-emerald-950/40 border border-emerald-900/50 text-emerald-300/70' 
                                      : 'bg-slate-950 border border-slate-800 text-slate-400'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;