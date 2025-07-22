import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { skills as skillsData } from '../data/portfolio';

const colorMap: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776AB',
  Java: '#b07219',
  React: '#61dafb',
  'Vue.js': '#4FC08D',
  'Next.js': '#000000',
  'Tailwind CSS': '#38B2AC',
  'Node.js': '#43853d',
  'Express.js': '#787878',
  Django: '#092E20',
  GraphQL: '#E10098',
  'Unreal Engine': '#0E1128',
  'AutoDesk Maya': '#34A0C4',
  'Danvinci Resolve': '#FF2A00',
  Photoshop: '#31A8FF',
  AWS: '#FF9900',
  Docker: '#0db7ed',
  Git: '#f1502f',
  MongoDB: '#47A248',
  'Excel Avanzado': '#217346',
  'Gestión Documental': '#6C757D',
  Planificación: '#3F51B5'
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const sortedSkills = [...skillsData].sort(
    (a, b) => b.proficiency - a.proficiency
  );

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code;
  };

  const isLarge = (proficiency: number) => proficiency >= 85;

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
              Habilidades
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sortedSkills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon);
            const sizeClass = isLarge(skill.proficiency)
              ? 'col-span-2 aspect-[3/2]'
              : 'aspect-square';
            const color = colorMap[skill.name] || '#0072C6';
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-[1.03] transition-transform ${sizeClass}`}
              >
                <IconComponent style={{ color }} size={32} />
                <h4 className="text-white font-medium text-sm text-center">
                  {skill.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

