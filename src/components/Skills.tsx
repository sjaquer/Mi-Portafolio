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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

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
              Habilidades y Experiencia
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un conjunto completo de herramientas que abarca desarrollo full-stack, diseño creativo y tecnologías emergentes
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category Title */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#F2A900] to-[#0072C6] rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 place-items-center">
                  {categorySkills.map((skill, skillIndex) => {
                    const IconComponent = getIconComponent(skill.icon);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                        className="skill-card group relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 h-32 backdrop-blur-sm hover:border-[#0072C6]/30 transition-all duration-300"
                      >
                        <div className="p-3 bg-gradient-to-r from-[#F2A900]/20 to-[#0072C6]/20 rounded-lg">
                          <IconComponent className="text-[#0072C6] group-hover:text-white transition-colors" size={28} />
                        </div>

                        <h4 className="text-white font-semibold text-sm text-center group-hover:text-[#F2A900] transition-colors">
                          {skill.name}
                        </h4>

                        <div className="shine-effect absolute inset-0 rounded-xl pointer-events-none"></div>
                      </motion.div>
                    );
                  })}
                </div>
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
                20+
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
                6
              </div>
              <div className="text-gray-400 text-sm">Categorías de Habilidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#0072C6] to-[#F2A900] bg-clip-text text-transparent mb-2">
                90%
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