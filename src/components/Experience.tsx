import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';
import { experiences, skills } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [...new Set(skills.map(skill => skill.category))];
  const averageProficiency = Math.round(
    skills.reduce((sum, s) => sum + s.proficiency, 0) / skills.length
  );

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              Experiencia y Habilidades
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un recorrido por experiencias y proyectos donde aplico visión empresarial, pensamiento creativo y desarrollo tecnológico para impulsar soluciones con impacto real.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 ${
                exp.current ? 'pt-10' : ''
              } backdrop-blur-sm hover:border-[#0072C6]/30 transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Current Position Badge */}
              {exp.current && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-medium">Actual</span>
                  </div>
                </div>
              )}

              {/* Company & Position */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F2A900] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-[#0072C6] font-medium mb-3">{exp.company}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#0072C6]/10 text-[#0072C6] border border-[#0072C6]/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#F2A900] to-[#0072C6] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2A900]/5 to-[#0072C6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Proyectos Completados' },
            { number: '5+', label: 'Años de Experiencia Laboral' },
            { number: '100%', label: 'Productivo' },
            { number: '15+', label: 'Tecnologías Dominadas' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Lenguajes y Programas */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Lenguajes y Programas
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => {
              const IconComponent = getIconComponent(skill.icon);

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 h-32 backdrop-blur-md"
                >
                  <div className="p-3 bg-gradient-to-r from-[#F2A900]/30 to-[#0072C6]/30 rounded-lg">
                    <IconComponent className="text-[#0072C6]" size={28} />
                  </div>

                  <h4 className="text-white font-semibold text-sm text-center">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent mb-2">
                {skills.length}
              </div>
              <div className="text-gray-400 text-sm">Tecnologías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#0072C6] to-[#F2A900] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-400 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent mb-2">
                {categories.length}
              </div>
              <div className="text-gray-400 text-sm">Categorías de Habilidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#0072C6] to-[#F2A900] bg-clip-text text-transparent mb-2">
                {averageProficiency}%
              </div>
              <div className="text-gray-400 text-sm">Promedio de Dominio</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;