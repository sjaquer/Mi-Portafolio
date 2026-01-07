// src/components/MobileNavigation.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';

interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'skills', icon: User, label: 'Stack' },
    { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
    { id: 'portfolio', icon: Layers, label: 'Proyectos' },
    { id: 'contact', icon: Mail, label: 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-lg shadow-primary-900/10 dark:shadow-black/40 px-4 py-3">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative flex flex-col items-center gap-1 min-w-[3.5rem]"
              >
                <div 
                  className={`
                    relative p-2 rounded-xl transition-all duration-300
                    ${isActive ? 'bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400' : 'text-slate-500 dark:text-slate-400'}
                  `}
                >
                  <Icon size={20} className={isActive ? 'stroke-2' : 'stroke-[1.5]'} />
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-indicator"
                      className="absolute inset-0 bg-primary-100/50 dark:bg-primary-900/20 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-primary-700 dark:text-primary-300' : 'text-slate-500/80 dark:text-slate-500'}`}>
                    {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
