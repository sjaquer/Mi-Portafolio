import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { throttle } from './utils/throttle';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'education', 'portfolio', 'gallery', 'contact'];
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
          <Experience />
          <Skills />
          <Education />
          <Portfolio />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;