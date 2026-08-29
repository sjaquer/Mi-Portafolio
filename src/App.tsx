import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { ScrollProgressIndicator } from './components/ScrollProgress';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import FreelanceServices from './components/FreelanceServices';
import AIShowcase from './components/AIShowcase';
import MobileNavigation from './components/MobileNavigation';
import { GradientBackground } from './components/GradientBackground';
import { SocialProof } from './components/SocialProof';
import ScrollDivider from './components/ScrollDivider';
import { throttle } from './utils/throttle';

const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Footer = React.lazy(() => import('./components/Footer'));
const BlogPersonal = React.lazy(() => import('./components/BlogPersonal'));

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (currentPath !== '/' && currentPath !== '') return;

    const handleScroll = () => {
      const sections = ['home', 'freelance-services', 'portfolio', 'ai-showcase', 'skills', 'experience'];
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
  }, [currentPath]);

  if (currentPath === '/blog-personal') {
    return (
      <ErrorBoundary>
        <Suspense fallback={null}>
          <BlogPersonal />
        </Suspense>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <SEO pageType="home" />
      <ScrollProgressIndicator />
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="min-h-screen text-zinc-50 selection:bg-cyan-500/30 selection:text-cyan-200 relative snap-y snap-proximity">
          <GradientBackground />
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          <main className="relative z-10">
            <Hero />
            <SocialProof />
            <FreelanceServices />
            <ScrollDivider />
            <Suspense fallback={null}>
              <Portfolio />
            </Suspense>
            <ScrollDivider />
            <AIShowcase />
            <Suspense fallback={null}>
              <Skills />
              <Experience />
            </Suspense>
            <ScrollDivider />
          </main>
          <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <Suspense fallback={null}><div className="relative z-10"><Footer /></div></Suspense>
        </motion.div>
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;