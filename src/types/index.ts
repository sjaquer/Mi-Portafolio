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