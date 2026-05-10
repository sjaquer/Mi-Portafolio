import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolio';
import { MOTION } from '../utils/animations';

const Experience = () => {
  const aiCerts = education.filter(e => e.tier === 'ai-certification');
  const techEdu = education.filter(e => e.tier === 'tech');

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Experience Column */}
          <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport}>
            <div className="text-xl font-light text-zinc-400 mb-10 tracking-wide uppercase text-sm">Experiencia</div>

            <div className="relative border-l border-zinc-800/50 ml-2 space-y-12">
              {experiences.map((exp) => (
                <motion.div key={exp.id} variants={MOTION.staggerChild} className="relative pl-8">
                  <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-zinc-950" />
                  <div className="group bg-zinc-900/20 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/40 hover:border-cyan-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-between mb-4">
                      <div className="text-lg font-medium text-zinc-100 group-hover:text-cyan-300 transition-colors">{exp.role || exp.title}</div>
                      <span className="text-xs font-mono text-zinc-500">{exp.duration}</span>
                    </div>
                    <div className="text-zinc-400 text-sm mb-4 font-medium">{exp.company}</div>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light mb-6">{exp.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack?.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-1 rounded-md bg-zinc-900/50 text-zinc-400 border border-zinc-800">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div variants={MOTION.stagger} initial="hidden" whileInView="visible" viewport={MOTION.viewport}>
            <div className="text-xl font-light text-zinc-400 mb-10 tracking-wide uppercase text-sm">Educación & Certificaciones</div>

            <div className="relative border-l border-zinc-800/50 ml-2 space-y-10">
              {/* AI Certifications */}
              {aiCerts.map((edu) => (
                <motion.div key={edu.id} variants={MOTION.staggerChild} className="relative pl-8">
                  <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-violet-400 ring-4 ring-zinc-950" />
                  <div className="group bg-violet-500/5 backdrop-blur-md p-6 rounded-3xl border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-between mb-2">
                      <div className="text-base font-medium text-zinc-100">{edu.degree}</div>
                      <span className="text-xs font-mono text-violet-400/60">{edu.duration}</span>
                    </div>
                    <div className="text-violet-300/80 text-sm mb-4">{edu.institution}</div>
                    {edu.relevant && (
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-1 rounded-md bg-violet-500/10 text-violet-300/70 border border-violet-500/20">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Tech Certifications */}
              {techEdu.map((edu) => (
                <motion.div key={edu.id} variants={MOTION.staggerChild} className="relative pl-8">
                  <div className="absolute -left-[5px] top-2.5 w-2 h-2 rounded-full bg-zinc-600 ring-4 ring-zinc-950" />
                  <div className="bg-zinc-900/20 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800/30">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 justify-between mb-1">
                      <div className="font-medium text-zinc-200 text-sm">{edu.degree}</div>
                      <span className="text-[10px] font-mono text-zinc-600">{edu.duration}</span>
                    </div>
                    <div className="text-zinc-500 text-sm font-light">
                      {edu.institution}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;