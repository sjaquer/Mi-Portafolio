import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { WhatsApp } from './WhatsApp';
import { BentoItem } from '../types';
import { BentoCard } from './BentoGrid';

interface DynamicBentoCardProps {
  item: BentoItem;
  index?: number;
}

const getIcon = (name: string) => {
  const Icon = (Icons as any)[name] || Icons.Box;
  return Icon;
};

/**
 * Componente que renderiza dinámicamente diferentes tipos de contenido Bento
 * Soporta: hero, profile, stat, service, gallery, testimonial, cta, benefit, availability
 */
export const DynamicBentoCard: React.FC<DynamicBentoCardProps> = ({ item, index = 0 }) => {
  const { type, span, content } = item;
  const noPadding = content.fullBleed ?? true;

  // Hero principal
  if (type === 'hero') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient || 'from-primary/10 to-transparent'} opacity-90`} />
          <div className="relative z-10 h-full flex flex-col justify-center p-4 md:p-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent"
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-secondary font-semibold mb-4"
            >
              {content.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              {content.description}
            </motion.p>
          </div>
        </div>
      </BentoCard>
    );
  }

  // Profile card
  if (type === 'profile') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="relative h-full w-full overflow-hidden group">
          <img
            src={content.image}
            alt={content.title}
            style={{ objectPosition: content.imagePosition || 'center' }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${content.gradient || 'from-black via-black/40 to-transparent'}`} />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h3 className="text-2xl font-bold text-white mb-1">{content.title}</h3>
            <p className="text-secondary font-medium mb-1">{content.subtitle}</p>
            {content.location && (
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <Icons.MapPin size={14} />
                <span>{content.location}</span>
              </div>
            )}
          </div>
        </div>
      </BentoCard>
    );
  }

  // Stat card
  if (type === 'stat') {
    const Icon = getIcon(content.icon || 'TrendingUp');
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="h-full w-full flex flex-col items-center justify-center text-center p-3 md:p-4">
          <div className="w-16 h-16 flex items-center justify-center p-2 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-3">
            {content.icon === 'WhatsApp' ? (
              <WhatsApp width={36} height={36} aria-hidden="true" />
            ) : (
              <Icon size={36} className="text-primary" />
            )}
          </div>
          {content.value ? (
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{content.value}</div>
          ) : (
            <div className="text-2xl md:text-3xl font-semibold text-white mb-1">&nbsp;</div>
          )}
          <div className="text-sm text-gray-400 mb-3">{content.label}</div>

          {/* Si se provee un botón (ej. WhatsApp), renderizarlo aquí */}
          {content.buttonHref && (
            <div className="mt-3 flex items-center justify-center w-full">
              <a
                href={content.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold hover:brightness-95 transition-colors"
                aria-label={content.buttonText || 'Contactar por WhatsApp'}
              >
                {/* Render WhatsApp brand icon inline to avoid depending on icon name mapping */}
                {content.icon === 'WhatsApp' ? (
                  <WhatsApp width={16} height={16} aria-hidden="true" />
                ) : (
                  <Icons.MessageCircle size={16} />
                )}
                <span>{content.buttonText || 'WhatsApp'}</span>
              </a>
            </div>
          )}
        </div>
      </BentoCard>
    );
  }

  // Service card
  if (type === 'service') {
    const Icon = getIcon(content.icon || 'Box');
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="h-full w-full flex flex-col p-3 md:p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white">{content.name}</h3>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {content.features?.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.03)] text-xs text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </BentoCard>
    );
  }

  // Gallery image
  if (type === 'gallery-image') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="relative h-full overflow-hidden group">
          <img
            src={content.src}
            alt={content.alt}
            style={{ objectPosition: content.imagePosition || 'center' }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity" />
        </div>
      </BentoCard>
    );
  }

  // Gallery video
  if (type === 'gallery-video') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="relative h-full overflow-hidden">
          <video
            src={content.src}
            poster={content.poster}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover"
          />
        </div>
      </BentoCard>
    );
  }

  // Testimonial
  if (type === 'testimonial') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="flex flex-col h-full p-4 md:p-6">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icons.Star
                key={i}
                size={16}
                className={i < (content.rating || 0) ? 'fill-secondary text-secondary' : 'text-gray-600'}
              />
            ))}
          </div>
          <blockquote className="text-base md:text-lg text-gray-300 mb-4 flex-1 italic">
            "{content.text}"
          </blockquote>
          <div className="flex items-center gap-3">
            <img
              src={content.avatar}
              alt={content.author}
              className="w-12 h-12 rounded-full border-2 border-primary/20"
            />
            <div>
              <div className="font-semibold text-white">{content.author}</div>
              <div className="text-sm text-gray-400">{content.role}</div>
            </div>
          </div>
        </div>
      </BentoCard>
    );
  }

  // Benefits
  if (type === 'benefit') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="h-full p-4 md:p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{content.title}</h3>
          <div className="grid grid-cols-2 gap-3">
            {content.benefits?.map((benefit, i) => {
              const Icon = getIcon(benefit.icon);
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-success/10 border border-success/20 mt-1">
                    <Icon size={16} className="text-success" />
                  </div>
                  <div className="text-sm text-gray-300">{benefit.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </BentoCard>
    );
  }

  // CTA
  if (type === 'cta') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient || 'from-primary/20 to-secondary/10'} opacity-90`} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{content.title}</h3>
            <p className="text-gray-300 mb-4">{content.description}</p>
            <a
              href={content.buttonHref}
              className="px-6 md:px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-semibold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
            >
              {content.buttonText}
            </a>
          </div>
        </div>
      </BentoCard>
    );
  }

  // Availability
  if (type === 'availability') {
    return (
      <BentoCard span={span} delay={index * 0.05} noPadding={noPadding}>
        <div className="h-full w-full flex flex-col items-center justify-center text-center p-3 md:p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
            <h3 className="text-lg font-bold text-white">{content.title}</h3>
          </div>
          <p className="text-gray-300 text-sm">{content.description}</p>
        </div>
      </BentoCard>
    );
  }

  // Fallback
  return (
    <BentoCard span={span} delay={index * 0.05}>
      <div className="flex items-center justify-center h-full p-4">
        <p className="text-gray-400">Tipo de contenido no reconocido: {type}</p>
      </div>
    </BentoCard>
  );
};
