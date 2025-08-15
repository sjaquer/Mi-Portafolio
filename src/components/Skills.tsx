
import React, { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills as skillsData } from '../data/portfolio';
import { Skill } from '../types';

const colorMap: Record<string, string> = {
  // Development
  'TypeScript': '#3178c6',
  'Python': '#3776AB',
  'React': '#61dafb',
  'Next.js': '#000000',
  'Tailwind CSS': '#38B2AC',
  'Node.js': '#43853d',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'SQL Server': '#e38c00',

  // Design
  'Unreal Engine': '#0E1128',
  'Photoshop': '#31A8FF',
  'Danvinci Resolve': '#FF2A00',
  'Lightroom': '#0E76A8',
  'Figma': '#FF7262',
  'Canva': '#00C4CC',

  // Administration
  'Excel': '#217346',
  'AWS': '#FF9900',
  'Firebase': '#FFCA28',
  'Git': '#f1502f',
  'Google Analytics': '#F2A900',
  'SEO/ASO': '#F2A900',
  'Power BI': '#F2C811',

  // Soft Skills
  'Trabajo en Equipo': '#4CAF50',
  'Resolución de Problemas': '#FF5722',
  'Creatividad': '#9C27B0',
  'Pensamiento Crítico': '#2196F3',
  'Liderazgo': '#FFC107',
};

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.Code;
};

// Sort skills by category, then alphabetically
const processedSkills: Skill[] = [...skillsData].sort((a, b) => {
  if (a.category !== b.category) {
    return a.category.localeCompare(b.category);
  }
  return a.name.localeCompare(b.name);
});

const categories = ['Todo', ...Array.from(new Set(skillsData.map(s => s.category)))];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todo');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'Todo') {
      return processedSkills;
    }
    return processedSkills.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Habilidades & Herramientas
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Un vistazo a las tecnologías, herramientas de diseño y habilidades con las que trabajo.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = getIconComponent(skill.icon);
              const color = colorMap[skill.name] || '#FFFFFF';

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="
                    aspect-square p-4 flex flex-col items-center justify-center text-center rounded-2xl
                    bg-gray-800/40 backdrop-blur-sm
                    border border-gray-700/60
                    transition-all duration-300
                    group relative
                    hover:border-amber-500/80 hover:bg-gray-800/80
                  "
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${color}33 0%, transparent 70%)`
                    }}
                  />
                  <Icon size={40} style={{ color }} className="mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold text-sm leading-tight">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
