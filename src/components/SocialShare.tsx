// src/components/SocialShare.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Linkedin, MessageCircle } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'floating' | 'inline';
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = 'https://sjaquer.is-a.dev/',
  title = 'Sebastián Jaque | BizOps & Tech Strategist',
  description = 'Transformo operaciones complejas en software de alto rendimiento. Consultoría en automatización, datos y desarrollo web.',
  className = '',
  variant = 'floating'
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-[#0A66C2] hover:text-white',
      label: 'Compartir en LinkedIn'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'hover:bg-[#25D366] hover:text-white',
      label: 'Compartir por WhatsApp'
    },
    {
      name: 'X',
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black',
      label: 'Compartir en X'
    }
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url
        });
      } catch (err) {
        console.log('Error compartiendo:', err);
      }
    }
  };

  if (variant === 'floating') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 ${className}`}
      >
        <div className="bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 p-2 flex flex-col gap-2">
          {/* Native share button (if supported) */}
          {'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="p-2.5 rounded-full text-slate-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Compartir"
              title="Compartir"
            >
              <Share2 size={18} />
            </button>
          )}
          
          {shareLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full text-slate-500 transition-all duration-300 ${link.color}`}
                aria-label={link.label}
                title={link.label}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        
        <span className="text-xs text-slate-400 dark:text-slate-500 text-center mt-1 writing-vertical">
          Compartir
        </span>
      </motion.div>
    );
  }

  // Inline variant for mobile or footer
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Compartir:</span>
      <div className="flex gap-2">
        {shareLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 transition-all duration-300 ${link.color}`}
              aria-label={link.label}
              title={link.label}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialShare;
