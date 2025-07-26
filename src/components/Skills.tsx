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

const borderColorMap: Record<string, string> = {
  Administración: 'border-primary-500',
  Desarrollo: 'border-secondary-500',
  Diseño: 'border-accent-500',
  'Habilidades Blandas': 'border-dark-400'
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

const getSizeClass = (proficiency: number) => {
  if (proficiency >= 85) return 'w-24 h-24 text-md';
  if (proficiency >= 60) return 'w-20 h-20 text-sm';
  return 'w-16 h-16 text-sm';
};

const getGroupScale = (count: number) => {
  if (count > 10) return 'scale-[0.8]';
  if (count > 6) return 'scale-95';
  return '';
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
          const borderColor = borderColorMap[categoria] || 'border-primary-500';
          const scale = getGroupScale(grupo.length);
          return (
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={`relative rounded-2xl border ${borderColor} p-6 bg-dark-900/40 backdrop-blur-md shadow-md flex flex-col gap-4`}
            >
              <h3 className="text-center text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                {categoria}
              </h3>
              <div className="grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-4 place-items-center">
                {grupo.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  const sizeClass = getSizeClass(skill.proficiency);
                  const color = colorMap[skill.name] || '#F2A900';
                  return (
                    <div
                      key={skill.name}
                      className={`${sizeClass} ${scale} rounded-2xl flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#F2A900]/10 via-[#0072C6]/10 to-dark-800/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md border ${borderColor} skill-card`}
                    >
                      <Icon size={24} style={{ color }} className="mb-1 text-white/90" />
                      <span className="font-semibold text-white text-xs md:text-sm">{skill.name}</span>
                      <div className="shine-effect rounded-2xl" />
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
