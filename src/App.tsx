import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingState } from './components/LoadingComponents';
import { ScrollProgressIndicator } from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
// Lazy loading para todos los componentes no críticos
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Footer = React.lazy(() => import('./components/Footer'));
import { throttle } from './utils/throttle';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'portfolio', 'reviews'];
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
      <ScrollProgressIndicator />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
        >
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main>
            <Hero />
            <Suspense fallback={<LoadingState title="Cargando contenido..." description="Preparando experiencia" />}>
              <Skills />
              <Portfolio />
              <Reviews />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;