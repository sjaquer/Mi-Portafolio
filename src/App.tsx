import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingState } from './components/LoadingComponents';
import { ScrollProgressIndicator } from './components/ScrollProgress';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessImpact from './components/BusinessImpact';
import MobileNavigation from './components/MobileNavigation';

// Lazy loading para todos los componentes no críticos
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const AutomationData = React.lazy(() => import('./components/AutomationData'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Footer = React.lazy(() => import('./components/Footer'));
import { throttle } from './utils/throttle';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Added 'impact' section to scroll spy if needed, though usually part of home flow
      const sections = ['home', 'portfolio', 'automation', 'skills', 'experience', 'reviews'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  useEffect(() => {
    const updateHue = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const hue = 0 + ratio * 120;
      document.documentElement.style.setProperty('--gradient-hue', `${hue}deg`);
    };

    const throttledUpdateHue = throttle(updateHue);
    updateHue();
    window.addEventListener('scroll', throttledUpdateHue);
    return () => window.removeEventListener('scroll', throttledUpdateHue);
  }, []);


  return (
    <ErrorBoundary>
      <SEO 
        title="Administrador — Datos, Automatización y Sistemas Digitales"
        pageType="home"
      />
      <ScrollProgressIndicator />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#1e1e1e] text-[#f5fcff]"
        >
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <Hero />
            <BusinessImpact />
            <Suspense fallback={<LoadingState title="Cargando contenido..." description="Preparando experiencia" />}>
              <Portfolio />
              <AutomationData />
              <Skills />
              <Experience />
              <Reviews />
            </Suspense>
          </main>
          
          <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;