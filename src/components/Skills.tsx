import React, { useState, useMemo } from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
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
  'CSS': '#1572B6',
  'Microsoft SQL Server': '#e38c00',

  // Design
  'Unreal Engine': '#0E1128',
  'Photoshop': '#31A8FF',
  'DaVinci Resolve': '#FF2A00',
  'Lightroom': '#0E76A8',
  'Figma': '#FF7262',
  'Canva': '#00C4CC',

  // Administration
  'Excel': '#217346',
  'Amazon Web Services': '#FF9900',
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

// Agrupar skills por categoría
const groupedSkills = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

// Palette global (usar para los cuadros y overlays para mantener coherencia)
const PALETTE = {
  // kept for inline fallbacks, but UI uses Tailwind tokens (primary / secondary /dark)
  primary: '#0072C6',
  accent: '#F2A900',
  glass: 'rgba(255,255,255,0.05)',
  glassHover: 'rgba(255,255,255,0.08)',
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/8 via-primary/5 to-dark/80 overflow-hidden"
    >
      {/* continuidad superior con Experience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[rgba(13,23,45,0.35)] to-transparent" />
        <div className="absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-secondary/10 blur-[170px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Habilidades & Herramientas
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas clave para construir soluciones de alto impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(groupedSkills).map(([categoria, skills], categoryIndex) => (
            <motion.div
              key={categoria}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-6 bg-[rgba(6,12,25,0.75)] border border-dark-200/60 backdrop-blur-md hover:shadow-[0_6px_28px_-6px_rgba(0,0,0,0.55)] transition-all duration-400
                ${categoria === 'Desarrollo' ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${categoria === 'Diseño' ? 'lg:row-span-2' : ''}
              `}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(140deg,rgba(11,95,255,0.5),rgba(242,183,5,0.15)_40%,transparent_75%)] pointer-events-none" />
              <div className="mb-4 relative">
                <h3 className="text-lg font-bold text-white mb-2">{categoria}</h3>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-secondary to-primary" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {skills.slice(0, categoria === 'Desarrollo' ? 9 : 6).map((skill, index) => {
                  const Icon = (Icons as any)[skill.icon] || Icons.Code;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: (categoryIndex * 0.08) + (index * 0.03)
                      }}
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative aspect-square flex flex-col items-center justify-center p-3 rounded-xl bg-[rgba(255,255,255,0.035)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-300 cursor-pointer"
                      title={skill.name}
                    >
                      <Icon
                        size={categoria === 'Desarrollo' ? 28 : 24}
                        className="mb-1 text-primary group-hover:text-secondary transition-colors duration-300"
                      />
                      <span className="text-[11px] text-white/80 text-center leading-tight font-medium">
                        {skill.name.length > 14 ? skill.name.substring(0, 14) + '…' : skill.name}
                      </span>
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-secondary/15 to-primary/15" />
                    </motion.div>
                  );
                })}
              </div>

              {skills.length > (categoria === 'Desarrollo' ? 9 : 6) && (
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-400">
                    +{skills.length - (categoria === 'Desarrollo' ? 9 : 6)} más
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
