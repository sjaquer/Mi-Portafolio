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
  'Administración': 'border-[#F2A900]',
  'Desarrollo': 'border-[#0072C6]',
  'Diseño': 'border-accent-500',
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

const Skills: React.FC = () => (
  <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 w-full max-w-6xl">
      {categoryOrder.map((categoria) => {
        const grupo = groupedSkills[categoria] || [];
        const borderColor = borderColorMap[categoria] || 'border-[#F2A900]';
        const maxProficiency = Math.max(...grupo.map((s) => s.proficiency));
        return (
          <div
            key={categoria}
            className="rounded-2xl bg-dark-900/40 backdrop-blur-md p-4 shadow-md flex flex-col"
          >
            <h3 className="text-center text-xl font-bold mb-4 bg-gradient-to-r from-[#F2A900] to-[#0072C6] bg-clip-text text-transparent">
              {categoria}
            </h3>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(60px,1fr))] gap-4 place-items-center overflow-auto max-h-[300px]">
              {grupo.map((skill) => {
                const Icon = getIconComponent(skill.icon);
                const size = 70 + (skill.proficiency / maxProficiency) * 30;
                const color = colorMap[skill.name] || '#fff';
                return (
                  <div
                    key={skill.name}
                    style={{ width: size, height: size }}
                    className={`skill-card rounded-xl bg-dark-800/50 backdrop-blur-md flex flex-col items-center justify-center border ${borderColor} shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="shine-effect" />
                    <Icon size={28} style={{ color }} className="mb-1 text-white/90" />
                    <span className="text-sm text-white font-semibold text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;