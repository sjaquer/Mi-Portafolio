import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills as skillsData } from '../data/portfolio';
import { Skill } from '../types';

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
  'Google Analytics': '#F2A900',
  'Search Console': '#F2A900',
  'SEO/ASO': '#F2A900',
  YouTube: '#FF0000',
  MongoDB: '#47A248',
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  SQL: "#e38c00",
  Figma: "#FF7262",
  Canva: "#00C4CC",
  Lightroom: "#0E76A8",
  "3ds Max": "#003A59",
  'Excel Avanzado': '#217346',
  'Gestión Documental': '#6C757D',
  Planificación: '#3F51B5'
};

const categoryOrder = ['Administración', 'Desarrollo', 'Diseño', 'Habilidades Blandas'];

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.Code;
};

const groupedSkills = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

Object.keys(groupedSkills).forEach((key) => {
  groupedSkills[key].sort((a, b) => b.proficiency - a.proficiency);
});

const getGridConfig = (proficiency: number) => {
  if (proficiency >= 95) return { classes: 'col-span-2 row-span-2 p-4', iconSize: 40, textSize: 'text-sm', marginClass: 'mb-3' };
  if (proficiency >= 85) return { classes: 'col-span-2 row-span-1 p-3', iconSize: 32, textSize: 'text-sm', marginClass: 'mb-2' };
  if (proficiency >= 70) return { classes: 'col-span-1 row-span-2 p-3', iconSize: 32, textSize: 'text-sm', marginClass: 'mb-2' };
  return { classes: 'col-span-1 row-span-1 p-2', iconSize: 28, textSize: 'text-xs', marginClass: 'mb-1' };
};


const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryOrder.map((categoria) => {
          const grupo = groupedSkills[categoria] || [];
          return (
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col gap-4"
            >
              <h3 className="text-center text-xl font-bold">
                <span className="bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
                  {categoria}
                </span>
              </h3>
              <div className="grid grid-cols-4 grid-auto-rows-[6rem] gap-2 w-full">
                {grupo.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  const color = colorMap[skill.name] || '#F2A900';
                  const { classes, iconSize, textSize, marginClass } = getGridConfig(skill.proficiency);
                  return (
                    <div
                      key={skill.name}
                      className={`
                        flex flex-col items-center justify-center text-center rounded-xl
                        bg-gradient-to-br from-[#262626]/60 to-[#0072C6]/30
                        shadow-lg backdrop-blur-md
                        transition-all duration-300
                        group relative
                        hover:bg-gradient-to-br hover:from-[#F2A900]/10 hover:to-[#0072C6]/20
                        ${classes}
                      `}
                    >
                      {/* Hover effect similar a Experience */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#F2A900]/10 to-[#0072C6]/10 pointer-events-none"></div>
                      <Icon size={iconSize} style={{ color }} className={`${marginClass} z-10 transition-transform duration-300 group-hover:scale-110`} />
                      <span className={`font-semibold text-white ${textSize} px-1 z-10 leading-tight`}>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Skills;
