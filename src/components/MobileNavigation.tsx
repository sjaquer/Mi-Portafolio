// src/components/MobileNavigation.tsx - Versión optimizada sin lag
import React, { memo, useCallback } from 'react';
import { Home, Briefcase, Layers, Mail, Sparkles } from 'lucide-react';

interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Inicio' },
  { id: 'skills', icon: Sparkles, label: 'Stack' },
  { id: 'experience', icon: Briefcase, label: 'Exp.' },
  { id: 'portfolio', icon: Layers, label: 'Proyectos' },
  { id: 'contact', icon: Mail, label: 'Contacto' },
];

const MobileNavigation: React.FC<MobileNavigationProps> = memo(({ activeSection, setActiveSection }) => {
  
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Actualizar estado inmediatamente para feedback visual instantáneo
      setActiveSection(sectionId);
      
      // Scroll suave nativo (más eficiente que JS)
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [setActiveSection]);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <nav className="mx-2 mb-2 bg-[#1e1e1e]/95 backdrop-blur-sm border border-slate-800 rounded-2xl px-1 py-1.5">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  flex flex-col items-center justify-center py-2 px-3 min-w-[52px] rounded-xl
                  transition-colors duration-150
                  ${isActive ? 'bg-primary/15' : 'active:bg-slate-800'}
                `}
                aria-label={`Ir a ${item.label}`}
              >
                <Icon 
                  size={20} 
                  className={`transition-colors duration-150 ${isActive ? 'text-primary' : 'text-slate-500'}`}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />
                <span className={`text-[10px] font-medium mt-1 transition-colors duration-150 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
});

MobileNavigation.displayName = 'MobileNavigation';

export default MobileNavigation;
