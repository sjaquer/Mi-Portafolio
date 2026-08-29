import React, { memo } from 'react';
import { IconHome, IconBriefcase, IconStack2, IconCode, IconRobot } from '@tabler/icons-react';

const navItems = [
  { id: 'home', icon: IconHome, label: 'Inicio' },
  { id: 'freelance-services', icon: IconCode, label: 'Servicios' },
  { id: 'ai-showcase', icon: IconRobot, label: 'IA' },
  { id: 'portfolio', icon: IconStack2, label: 'Proyectos' },
  { id: 'experience', icon: IconBriefcase, label: 'Exp.' },
];

const MobileNavigation: React.FC<{ activeSection: string; setActiveSection: (s: string) => void }> = memo(({ activeSection, setActiveSection }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <nav className="mx-2 mb-2 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-2xl px-1 py-1.5">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`flex flex-col items-center p-2 min-w-[52px] rounded-xl transition-colors ${isActive ? 'bg-emerald-500/10 text-emerald-400' : 'text-zinc-500'}`}>
                <Icon size={20} stroke={isActive ? 2 : 1.5} />
                <span className="text-[10px] font-medium mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
});

export default MobileNavigation;
