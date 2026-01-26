// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for fixed header
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
      { id: 'home', label: 'Inicio' },
      { id: 'skills', label: 'Stack' },
      { id: 'experience', label: 'Trayectoria' },
      { id: 'portfolio', label: 'Proyectos' },
  ];

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300
        ${scrolled 
            ? 'bg-[#1e1e1e]/95 backdrop-blur-md shadow-sm border-b border-slate-700/50 py-3' 
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-3 group relative z-50"
          >
             <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-white/5 group-hover:shadow-primary/20 transition-shadow">
                <img 
                  src="/images/iconoweb.webp" 
                  alt="Sebastián Jaque - Consultor Transformación Digital Lima"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
             </div>
             <span className={`font-display font-bold text-lg tracking-tight text-white`}>
                {siteContent.brand.name}
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
             <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${scrolled ? 'bg-slate-800/50 border-slate-700/50' : 'bg-black/20 border-transparent has-backdrop-filter'}`}>
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                            `}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-slate-700/50 rounded-full shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    )
                })}
             </div>

             <div className="w-px h-8 bg-slate-700 mx-4" />

             <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-full bg-[#f5fcff] text-[#1e1e1e] font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/10 flex items-center gap-2"
             >
                Contactar <ArrowUpRight size={16} />
             </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>
    </motion.header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-40 bg-[#1e1e1e] pt-24 px-6 md:hidden flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-2xl font-display font-bold text-[#f5fcff] py-4 border-b border-slate-700 text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400 py-4 text-left"
                    >
                        Contactar
                    </button>
                </div>
                
                <div className="mt-auto pb-12">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Sebastian Jaque</p>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};

export default Header;