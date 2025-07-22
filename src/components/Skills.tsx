import React from 'react';
import * as Icons from 'lucide-react';
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
  MongoDB: '#47A248',
  'Excel Avanzado': '#217346',
  'Gestión Documental': '#6C757D',
  Planificación: '#3F51B5'
};

const borderColorMap: Record<string, string> = {
  'Administración': 'border-primary-500',
  'Desarrollo': 'border-secondary-500',
  'Diseño': 'border-accent-500',
  'Grabación y Edición': 'border-dark-400'
};

const categoryOrder = ['Administración', 'Desarrollo', 'Diseño', 'Grabación y Edición'];

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName];
  return Icon || Icons.Code;
};

const groupedSkills = skillsData.reduce<Record<string, Skill[]>>((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

const Skills: React.FC = () => (
  <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-16">
    {categoryOrder.map((categoria) => {
      const grupo = groupedSkills[categoria] || [];
      const borderColor = borderColorMap[categoria] || 'border-primary-500';
      return (
        <div key={categoria} className="space-y-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent mb-4">
            {categoria}
          </h3>
          <div className="grid grid-cols-3 auto-rows-[90px] gap-4">
            {grupo.map((skill) => {
              const Icon = getIconComponent(skill.icon);
              const highlight = skill.proficiency >= 85 ? 'col-span-2' : '';
              const faded = skill.proficiency < 70 ? 'opacity-80 scale-95' : '';
              const color = colorMap[skill.name] || '#fff';
              return (
                <div
                  key={skill.name}
                  className={`w-[80px] h-[80px] ${highlight} rounded-xl p-3 backdrop-blur-md bg-dark-800/50 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03] shadow-md border ${borderColor} ${faded}`}
                >
                  <Icon size={28} style={{ color }} className="mb-1 text-white/90" />
                  <span className="text-sm text-white font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </section>
);

export default Skills;
