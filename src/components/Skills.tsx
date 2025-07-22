import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
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
              Lenguajes y Programas
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un conjunto completo de herramientas que abarca desarrollo full-stack, diseño creativo y tecnologías emergentes
          </p>
        </motion.div>

        {/* Bento Grid Skills */}
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

        {/* Skills Summary */}
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

export default Skills;