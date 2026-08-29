import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { experiences, education } from '../data/portfolio';

function LogoIcon({ src, alt, initials }: { src?: string; alt: string; initials: string }) {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shrink-0 flex items-center justify-center bg-zinc-950 border border-zinc-800 overflow-hidden select-none">
      {src ? (
        <img src={src} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" loading="lazy" />
      ) : (
        <span className="text-[10px] sm:text-xs font-bold font-mono text-zinc-500">{initials}</span>
      )}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function DateBadge({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap text-[10px] sm:text-xs font-mono text-zinc-600 shrink-0">{children}</span>
  );
}

function TechTag({ children }: { children: string }) {
  return (
    <span className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-lg border bg-zinc-950 border-zinc-800 text-zinc-500 leading-none">
      {children}
    </span>
  );
}

function EduTag({ children, ai }: { children: string; ai?: boolean }) {
  return (
    <span className={`text-[10px] font-mono px-2 py-1 rounded-lg border leading-none ${
      ai ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-400/70' : 'bg-zinc-950 border-zinc-800 text-zinc-500'
    }`}>
      {children}
    </span>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-24 sm:py-32 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
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
            className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl font-light leading-relaxed"
          >
            He trabajado en retail, logística, food service, marketing y datos. Así se traduce eso en experiencia real.
          </p>
        </Reveal>

        <div className="space-y-6">
          {/* ── Work Experience Row ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border border-zinc-800/40 bg-zinc-900/20 backdrop-blur-xl p-5 hover:border-emerald-500/20 hover:bg-zinc-900/40 transition-all duration-500 ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors leading-snug truncate">
                    {exp.role || exp.title}
                  </h3>
                  <DateBadge>{exp.duration}</DateBadge>
                </div>
                <div className="text-[11px] font-semibold text-zinc-500 font-mono tracking-wider uppercase mb-2">
                  {exp.company}
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">{exp.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack?.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Education Row ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* University card — spans 2 cols */}
            {education.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="md:col-span-2 group rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] backdrop-blur-xl p-5 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="flex gap-3 items-start">
                  <LogoIcon
                    src={education[0].logoUrl}
                    alt={education[0].institution}
                    initials={getInitials(education[0].institution)}
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-zinc-100 leading-snug truncate">{education[0].degree}</h3>
                      <DateBadge>{education[0].duration}</DateBadge>
                    </div>
                    <div className="text-xs font-semibold font-mono text-zinc-500 mb-3">{education[0].institution}</div>
                    {education[0].relevant && (
                      <div className="flex flex-wrap gap-1.5">
                        {education[0].relevant.map((tag) => (
                          <EduTag key={tag} ai>{tag}</EduTag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Certification cards */}
            {education.slice(1, 3).map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className={`group rounded-2xl border backdrop-blur-xl p-5 transition-all duration-500 ${
                  edu.tier === 'ai-certification'
                    ? 'border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/30'
                    : 'border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-700/60'
                }`}
              >
                <div className="flex gap-3 items-start">
                  <LogoIcon
                    src={edu.logoUrl}
                    alt={edu.institution}
                    initials={getInitials(edu.institution)}
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-zinc-100 leading-snug truncate">{edu.degree}</h3>
                      <DateBadge>{edu.duration}</DateBadge>
                    </div>
                    <div className={`text-[10px] sm:text-xs font-semibold font-mono mb-2 ${edu.tier === 'ai-certification' ? 'text-emerald-400/80' : 'text-zinc-500'}`}>
                      {edu.institution}
                    </div>
                    {edu.relevant && (
                      <div className="flex flex-wrap gap-1">
                        {edu.relevant.map((tag) => (
                          <EduTag key={tag} ai={edu.tier === 'ai-certification'}>{tag}</EduTag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Remaining certs row ── */}
          {education.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {education.slice(3).map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`group rounded-2xl border backdrop-blur-xl p-4 transition-all duration-500 ${
                    edu.tier === 'ai-certification'
                      ? 'border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/30'
                      : 'border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-700/60'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center bg-zinc-950 border border-zinc-800 overflow-hidden select-none">
                      {edu.logoUrl ? (
                        <img src={edu.logoUrl} alt={edu.institution} className="w-4 h-4 object-contain" loading="lazy" />
                      ) : (
                        <span className="text-[8px] font-bold font-mono text-zinc-500">{getInitials(edu.institution)}</span>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-zinc-100 leading-snug truncate">{edu.degree}</span>
                        <DateBadge>{edu.duration}</DateBadge>
                      </div>
                      <div className={`text-[10px] font-mono mt-0.5 ${edu.tier === 'ai-certification' ? 'text-emerald-400/80' : 'text-zinc-500'}`}>
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
