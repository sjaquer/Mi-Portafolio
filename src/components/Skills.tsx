import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
// Custom skills prioritized for the bento grid

interface SkillItem {
  name: string;
  icon: string;
  size: 'lg' | 'sm';
}

const skillItems: SkillItem[] = [
  { name: 'React', icon: 'Atom', size: 'lg' },
  { name: 'Figma', icon: 'Figma', size: 'lg' },
  { name: 'Blender', icon: 'Cube', size: 'lg' },
  { name: 'Python', icon: 'FileCode', size: 'sm' },
  { name: 'Photoshop', icon: 'Brush', size: 'sm' },
  { name: 'HTML', icon: 'FileCode', size: 'sm' },
  { name: 'CSS', icon: 'FileCode', size: 'sm' },
  { name: 'Docker', icon: 'Package', size: 'sm' }
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });



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
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillItems.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-[1.03] transition-transform ${
                  skill.size === 'lg'
                    ? 'col-span-2 aspect-[3/2]'
                    : 'aspect-square'
                }`}
              >
                <IconComponent className="text-[#0072C6]" size={32} />
                <h4 className="text-white font-medium text-sm">{skill.name}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;