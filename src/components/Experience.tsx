import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { experiences, education } from '../data/portfolio';

function LogoIcon({ src, alt, initials }: { src?: string; alt: string; initials: string }) {
  return (
    <div className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center bg-zinc-950 border border-zinc-800 overflow-hidden select-none">
      {src ? (
        <img src={src} alt={alt} className="w-6 h-6 object-contain" loading="lazy" />
      ) : (
        <span className="text-xs font-bold font-mono text-zinc-500">{initials}</span>
      )}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function DateBadge({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap text-xs font-mono text-emerald-400 shrink-0">{children}</span>
  );
}

function TechTag({ children }: { children: string }) {
  return (
    <span className="text-xs font-mono px-3 py-1.5 rounded-lg border bg-zinc-950 border-zinc-800 text-zinc-300 leading-none">
      {children}
    </span>
  );
}

function EduTag({ children, ai }: { children: string; ai?: boolean }) {
  return (
    <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border leading-none ${
      ai ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-300' : 'bg-zinc-950 border-zinc-800 text-zinc-300'
    }`}>
      {children}
    </span>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-24 sm:py-32 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal className="mb-16 text-center sm:text-left" y={20} stagger={100} selector="[data-reveal]">
          <span
            data-reveal
            className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-4"
          >
            Trayectoria
          </span>
          <h2
            data-reveal
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.05] max-w-3xl"
          >
            Experiencia{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              & Formación
            </span>.
          </h2>
          <p
            data-reveal
            className="text-zinc-300 text-sm md:text-base mt-4 max-w-xl font-light leading-relaxed text-left"
          >
            He trabajado en retail, logística, food service, marketing y datos. Así se traduce eso en experiencia real.
          </p>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-zinc-700 to-transparent" />

          {/* Work Experience */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>

                {/* Content card */}
                <div className="group rounded-2xl forest-glass-soft p-6 hover:border-emerald-500/30 transition-all duration-500">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <DateBadge>{exp.duration}</DateBadge>
                    <span className="text-xs font-mono text-zinc-500">•</span>
                    <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-zinc-50 group-hover:text-emerald-400 transition-colors mb-1">
                    {exp.role || exp.title}
                  </h3>
                  <div className="text-sm font-semibold text-emerald-400/80 font-mono mb-4">
                    {exp.company}
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4 text-left">{exp.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack?.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h3 className="text-xl font-extrabold text-zinc-50 mb-8 pl-16">
              Formación Académica
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  </div>

                  {/* Content card */}
                  <div className={`group rounded-2xl forest-glass-soft p-5 transition-all duration-500 ${
                    edu.tier === 'ai-certification' ? 'hover:border-emerald-500/30' : 'hover:border-zinc-600'
                  }`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <DateBadge>{edu.duration}</DateBadge>
                      <span className="text-xs font-mono text-zinc-600">•</span>
                      <span className={`text-xs font-mono ${edu.tier === 'ai-certification' ? 'text-emerald-400/80' : 'text-zinc-500'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <LogoIcon
                        src={edu.logoUrl}
                        alt={edu.institution}
                        initials={getInitials(edu.institution)}
                      />
                      <div className="flex-grow min-w-0">
                        <h4 className="text-sm font-extrabold text-zinc-50 leading-snug mb-1">
                          {edu.degree}
                        </h4>
                        <div className={`text-xs font-mono mb-3 ${edu.tier === 'ai-certification' ? 'text-emerald-400/80' : 'text-zinc-500'}`}>
                          {edu.institution}
                        </div>
                        {edu.relevant && (
                          <div className="flex flex-wrap gap-1.5">
                            {edu.relevant.map((tag) => (
                              <EduTag key={tag} ai={edu.tier === 'ai-certification'}>{tag}</EduTag>
                            ))}
                          </div>
                        )}
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
