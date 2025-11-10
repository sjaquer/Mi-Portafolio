export interface Experience {
  id: string;
  title: string;
  company: string;
  duration?: string;
  location?: string;
  techStack?: string[];
  responsibilities?: string[];
  current?: boolean;
  role?: string;
  summary?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration?: string;
  status?: string;
  relevant?: string[];
  certificateUrl?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
  featured?: boolean;
  techStack?: string[];
  details?: string[];
  subtitle?: string;
  year?: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  date?: string;
  location?: string;
  projectId?: string;
  source?: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
  aspectRatio?: number;
  colSpan?: number;
  rowSpan?: number;
}

export type ThemeOptions = {
  dark: string;
  light: string;
};

export interface iSVG {
  id?: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
  url: string;
}

// Tipos para Bento UI dinámico
export type BentoSpan = 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'full';

export type BentoItemType = 
  | 'hero' 
  | 'profile' 
  | 'stat' 
  | 'service' 
  | 'gallery-image' 
  | 'gallery-video'
  | 'testimonial' 
  | 'cta' 
  | 'benefit'
  | 'availability';

export interface BentoItemContent {
  // Hero/Profile
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  location?: string;
  
  // Stat
  value?: string | number;
  label?: string;
  icon?: string;
  
  // Service
  name?: string;
  features?: string[];
  
  // Gallery
  src?: string;
  alt?: string;
  poster?: string;
  
  // Testimonial
  author?: string;
  role?: string;
  rating?: number;
  text?: string;
  avatar?: string;
  
  // CTA/Benefit
  buttonText?: string;
  buttonHref?: string;
  onClick?: () => void;
  benefits?: Array<{ icon: string; text: string }>;
  
  // General
  gradient?: string;
  className?: string;
  // Render options
  fullBleed?: boolean; // si true, el contenido ocupa todo el interior del card (sin padding)
  imagePosition?: string; // CSS object-position para imágenes (ej. 'center top')
}

export interface BentoItem {
  id: string;
  type: BentoItemType;
  span: BentoSpan;
  priority?: number; // Para ordenar automáticamente
  content: BentoItemContent;
  delay?: number; // Para animaciones escalonadas
}