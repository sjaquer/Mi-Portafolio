import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { BentoGrid } from './BentoGrid';
import { DynamicBentoCard } from './DynamicBentoCard';
import { getSortedBentoItems } from '../data/bentoLayout';
import { siteContent } from '../data/siteContent';

const socialLinks = [
  { icon: Github, url: 'https://github.com/sjaquer', label: 'GitHub', color: 'hover:text-gray-400' },
  { icon: Linkedin, url: 'https://linkedin.com/in/sjaquer', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, url: 'https://instagram.com/sjaquer.dev', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Youtube, url: 'https://youtube.com/@sjaquer', label: 'YouTube', color: 'hover:text-red-400' }
];

const Hero = () => {
  const bentoItems = getSortedBentoItems();

  // WhatsApp handled via Bento card (stat-whatsapp)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-24 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end gap-3 mb-8"
        >
          {socialLinks.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.03)] text-gray-300 ${s.color} transition-all duration-200`}
                aria-label={s.label}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        <div className="mb-8">
          <div className="max-w-3xl mx-auto text-center mb-10 p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] backdrop-blur-lg border border-[rgba(255,255,255,0.04)]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold animated-gradient-text mb-4">{siteContent.hero.title}</h1>
            <p className="text-lg max-w-3xl mx-auto animated-gradient-text-secondary font-semibold">{siteContent.hero.subtitle}</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="#contact" className="btn-primary">{siteContent.hero.ctaPrimary}</a>
              <a href="#portfolio" className="btn-ghost">{siteContent.hero.ctaSecondary}</a>
            </div>
          </div>
        </div>

        <BentoGrid columns={6}>
          {bentoItems.map((item, index) => (
            <DynamicBentoCard key={item.id} item={item} index={index} />
          ))}
        </BentoGrid>
      </div>

      {/* Floating WhatsApp button removed — now rendered inside the Bento grid as a stat card */}
    </section>
  );
};

export default Hero;