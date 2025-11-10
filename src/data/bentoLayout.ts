// file intentionally ends here; the content above is the single canonical definition
import { BentoItem } from '../types';

/**
 * Configuración central del layout Bento UI para Hero
 * Todos los items se ordenan automáticamente por priority (menor = primero)
 * El sistema es completamente dinámico y configurable
 */
export const heroBentoLayout: BentoItem[] = [
  // Hero principal - priority 1
  {
    id: 'hero-main',
    type: 'hero',
    span: 'large',
    priority: 1,
    content: {
      title: 'Soluciones digitales que convierten',
      subtitle: 'Estrategia, desarrollo y creatividad',
      description: 'Transformo ideas en productos digitales escalables. Desde estrategia de contenido hasta desarrollo web, pasando por automatización y análisis de datos.',
      gradient: 'from-primary/20 via-primary/5 to-transparent',
      fullBleed: true
    }
  },

  // Profile card - priority 2
  {
    id: 'profile',
    type: 'profile',
    span: 'tall',
    priority: 2,
    content: {
      title: 'Sebastián Jaque',
      subtitle: 'Digital Solutions Developer',
      location: 'Lima, Perú',
      image: '/images/iconperso.webp',
      gradient: 'from-secondary/20 via-purple-500/10 to-transparent'
      , fullBleed: true, imagePosition: 'center top'
    }
  },

  // Stats - priority 3-5
  {
    id: 'stat-projects',
    type: 'stat',
    span: 'small',
    priority: 3,
    content: {
      value: '18+',
      label: 'Proyectos completados',
      icon: 'Briefcase',
      gradient: 'from-blue-500/10 to-cyan-500/5',
      fullBleed: true
    }
  },
  {
    id: 'stat-campaigns',
    type: 'stat',
    span: 'small',
    priority: 4,
    content: {
      value: '30+',
      label: 'Campañas gestionadas',
      icon: 'TrendingUp',
      gradient: 'from-green-500/10 to-emerald-500/5'
    }
  },
  {
    id: 'stat-tech',
    type: 'stat',
    span: 'small',
    priority: 5,
    content: {
      value: '25+',
      label: 'Tecnologías dominadas',
      icon: 'Layers',
      gradient: 'from-purple-500/10 to-pink-500/5'
    }
  },

  // WhatsApp quick contact - colocado para ocupar el espacio vacío al lado de 'Tecnologías dominadas'
  {
    id: 'stat-whatsapp',
    type: 'stat',
    span: 'small',
    priority: 6,
    content: {
      value: '',
      label: 'Contáctame',
      icon: 'WhatsApp',
      gradient: 'from-green-500/12 to-emerald-500/8',
      buttonHref: 'https://wa.me/51946978919?text=Hola,%20quiero%20conocer%20tus%20servicios',
      buttonText: 'WhatsApp'
    }
  },

  // Servicios - priority 6-9
  {
    id: 'service-marketing',
    type: 'service',
    span: 'medium',
    priority: 6,
    content: {
      name: 'Marketing Digital',
      icon: 'Megaphone',
      features: ['SEO & SEM', 'Content Strategy', 'Social Media', 'Analytics']
      , fullBleed: true
    }
  },
  {
    id: 'service-web',
    type: 'service',
    span: 'medium',
    priority: 7,
    content: {
      name: 'Desarrollo Web',
      icon: 'Code',
      features: ['React & TypeScript', 'Responsive Design', 'API Integration', 'Performance'],
      fullBleed: false
    }
  },
  
  // Casos de estudio / proyectos destacados (usar tipo 'service' para mostrar resultados)
  {
    id: 'case-ecommerce',
    type: 'service',
    span: 'wide',
    priority: 10,
    content: {
      name: 'E-commerce B2C - +42% Conversión',
      icon: 'ShoppingCart',
      features: ['Rediseño UX/UI', 'Optimización funnel', 'Integración de pago', 'A/B testing → +42% CVR'],
      description: 'Proyecto para retailer online: mejoramos la tasa de conversión y el ticket promedio mediante optimizaciones UX y automatización de checkout.',
      fullBleed: true
    }
  },
  {
    id: 'case-automation',
    type: 'service',
    span: 'wide',
    priority: 11,
    content: {
      name: 'Automatización de Marketing - Ahorro 120h/mes',
      icon: 'Zap',
      features: ['Workflows multicanal', 'Segmentación avanzada', 'Reporting automático', 'Reducción tiempo operativo'],
      description: 'Automatizamos campañas y reports para un cliente SaaS, reduciendo 120 horas mensuales y acelerando el time-to-market.',
      fullBleed: true
    }
  },
  {
    id: 'case-analytics',
    type: 'service',
    span: 'wide',
    priority: 12,
    content: {
      name: 'Analytics & BI - Visibilidad ejecutiva',
      icon: 'Table',
      features: ['Dashboards ejecutivos', 'KPI tracking', 'ETL pipelines', 'Training al equipo'],
      description: 'Implementación de pipelines y dashboards que entregan insights diarios para decisiones comerciales en tiempo real.',
      fullBleed: true
    }
  },
  {
    id: 'service-data',
    type: 'service',
    span: 'medium',
    priority: 9,
    content: {
      name: 'Análisis de Datos',
      icon: 'BarChart3',
      features: ['Power BI', 'Excel Advanced', 'Data Visualization', 'Business Intelligence']
    }
  },

  // Gallery items embebidas - priority 10-17 (8 items de galería seleccionados)
  {
    id: 'gallery-1',
    type: 'gallery-image',
    span: 'small',
    priority: 10,
    content: {
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
      alt: 'Código en pantalla'
      , fullBleed: true
    }
  },
  {
    id: 'gallery-2',
    type: 'gallery-image',
    span: 'medium',
    priority: 11,
    content: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      alt: 'Dashboard de analytics'
      , fullBleed: true
    }
  },
  {
    id: 'gallery-3',
    type: 'gallery-image',
    span: 'small',
    priority: 12,
    content: {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
      alt: 'Equipo trabajando'
      , fullBleed: true
    }
  },
  {
    id: 'gallery-4',
    type: 'gallery-video',
    span: 'medium',
    priority: 13,
    content: {
      src: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165',
      poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      alt: 'Demo de proyecto'
      , fullBleed: true
    }
  },

  // Testimonial destacado - priority 18
  {
    id: 'testimonial-1',
    type: 'testimonial',
    span: 'wide',
    priority: 18,
    content: {
      text: 'Sebastián transformó completamente nuestra estrategia digital. Los resultados superaron nuestras expectativas.',
      author: 'María López',
      role: 'CEO, Neon LED',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      fullBleed: false
    }
  },

  // Testimonios adicionales
  {
    id: 'testimonial-2',
    type: 'testimonial',
    span: 'medium',
    priority: 19,
    content: {
      text: 'Rápido, profesional y con foco en resultados. Nuestra lead gen subió un 68% en 3 meses.',
      author: 'Carlos Méndez',
      role: 'Marketing Lead, Soluciones360',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
      fullBleed: false
    }
  },
  {
    id: 'testimonial-3',
    type: 'testimonial',
    span: 'medium',
    priority: 20,
    content: {
      text: 'Excelente colaboración y documentación clara. Recomendado para proyectos complejos.',
      author: 'Ana Ruiz',
      role: 'Product Manager, FinTech XYZ',
      rating: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      fullBleed: false
    }
  },

  // Benefits card - priority 19
  {
    id: 'benefits',
    type: 'benefit',
    span: 'wide',
    priority: 19,
    content: {
      title: '¿Por qué trabajar conmigo?',
      benefits: [
        { icon: 'Clock', text: 'Respuesta en menos de 24 horas' },
        { icon: 'Shield', text: 'Entrega garantizada en tiempo' },
        { icon: 'Headphones', text: 'Soporte post-entrega incluido' },
        { icon: 'Code', text: 'Código limpio y documentado' }
      ]
      , fullBleed: false
    }
  },

  // CTA principal - priority 20
  {
    id: 'cta-main',
    type: 'cta',
    span: 'medium',
    priority: 20,
    content: {
      title: '¿Listo para empezar?',
      description: 'Agenda una consulta gratuita de 30 minutos',
      buttonText: 'Iniciar Proyecto',
      buttonHref: '#contact',
      gradient: 'from-primary/30 via-secondary/20 to-primary/10'
      , fullBleed: true
    }
  },

  // Availability - priority 21
  {
    id: 'availability',
    type: 'availability',
    span: 'medium',
    priority: 21,
    content: {
      title: 'Disponibilidad',
      description: 'Actualmente aceptando nuevos proyectos',
      label: 'Disponible',
      gradient: 'from-green-500/20 to-emerald-500/10'
      , fullBleed: true
    }
  }
];

/**
 * Función helper para obtener items por tipo
 */
export const getBentoItemsByType = (type: string) => {
  return heroBentoLayout.filter(item => item.type === type);
};

/**
 * Función helper para ordenar items por priority
 */
export const getSortedBentoItems = () => {
  return [...heroBentoLayout].sort((a, b) => (a.priority || 999) - (b.priority || 999));
};
