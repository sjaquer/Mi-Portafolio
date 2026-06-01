export interface Experience {
  id: string;
  title: string;
  titleEn?: string;
  company: string;
  duration?: string;
  location?: string;
  locationEn?: string;
  techStack?: string[];
  responsibilities?: string[];
  responsibilitiesEn?: string[];
  current?: boolean;
  role?: string;
  roleEn?: string;
  summary?: string;
  summaryEn?: string;
  logoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  degreeEn?: string;
  institution: string;
  institutionEn?: string;
  duration?: string;
  status?: string;
  statusEn?: string;
  relevant?: string[];
  certificateUrl?: string;
  description?: string;
  descriptionEn?: string;
  tier?: 'ai-certification' | 'tech' | 'academic';
  badgeColor?: string;
  logoUrl?: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  metrics: { label: string; value: string; prefix?: string; suffix?: string }[];
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
  aiFeatures?: string[];
  metrics?: { label: string; value: string }[];
  caseStudy?: CaseStudy;
  simulatorId?: string; // Identificador para renderizar el simulador interactivo correspondiente
}