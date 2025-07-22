export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  techStack: string[];
  responsibilities: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  status: string;
  gpa?: string;
  relevant?: string[];
  certificateUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | '3d' | 'video';
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
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
}
