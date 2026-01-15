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
            ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3' 
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
             <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                <img 
                  src="/images/iconoweb.webp" 
                  alt="Sebastián Jaque - Consultor Transformación Digital Lima"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
             </div>
             <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
                {siteContent.brand.name}
             </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
             <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-300 ${scrolled ? 'bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50' : 'bg-white/50 dark:bg-black/20 border-transparent has-backdrop-filter'}`}>
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                                ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white'}
                            `}
                        >
                            {isActive && (
                                <motion.div 
                                    layoutId="nav-bg"
                                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    )
                })}
             </div>

             <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 mx-4" />

             <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:scale-105 transition-transform shadow-lg shadow-slate-900/10 dark:shadow-white/10 flex items-center gap-2"
             >
                Contactar <ArrowUpRight size={16} />
             </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-slate-900 dark:text-white"
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
                className="fixed inset-0 z-40 bg-white dark:bg-dark pt-24 px-6 md:hidden flex flex-col gap-6"
            >
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-2xl font-display font-bold text-slate-900 dark:text-white py-4 border-b border-slate-100 dark:border-slate-800 text-left"
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