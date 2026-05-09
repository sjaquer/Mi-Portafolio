import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer & Systems Architect',
    company: 'Big Jack',
    role: 'Lead Full-Stack Developer',
    duration: 'Nov 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    summary:
      'Arquitecturé y desarrollé un sistema ERP integral (SPA) desde cero usando React y Firebase, logrando una sincronización de datos en tiempo real de alta fidelidad y un rendimiento excepcional.',
    techStack: [
      'React',
      'TypeScript',
      'Firebase / Firestore',
      'Node.js',
      'Serverless'
    ],
    responsibilities: [
      'Diseñé la arquitectura de una aplicación Single Page Application (SPA) en React, manejando estados globales complejos y renderizado optimizado.',
      'Implementé un backend serverless escalable con Node.js y Cloud Functions, asegurando la integridad de transacciones y lógica de negocio crítica.',
      'Desarrollé listeners en tiempo real con Firestore, reduciendo la latencia de actualización de datos a menos de 50ms entre terminales.'
    ]
  },
  {
    id: '2',
    title: 'Data Engineer & Backend Developer',
    company: 'Dearel',
    role: 'Data Engineer',
    duration: 'May 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Construí una infraestructura de datos robusta, desarrollando pipelines ETL personalizados en Python para unificar información de APIs heterogéneas.',
    techStack: [
      'Python',
      'SQL Server',
      'ETL Pipelines',
      'REST APIs',
      'Power BI'
    ],
    responsibilities: [
      'Desarrollé scripts de extracción y transformación de datos (ETL) en Python, consumiendo APIs REST (Shopify, Meta) con manejo robusto de errores y rate limits.',
      'Diseñé y optimicé el esquema de base de datos relacional (Star Schema) en SQL Server, mejorando la velocidad de consultas analíticas.',
      'Automaticé flujos de integración de datos con webhooks, garantizando data warehouse actualizada en near real-time.'
    ]
  },
  {
    id: '3',
    title: 'Desarrollador Full-Stack Independiente',
    company: 'Proyectos Freelance',
    role: 'Full-Stack Developer',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Desarrollo de aplicaciones web modernas end-to-end, integraciones de APIs complejas y features potenciadas por Inteligencia Artificial Generativa.',
    techStack: [
      'React / TypeScript',
      'Node.js',
      'Python / AI',
      'OpenAI API',
      'AWS Bedrock'
    ],
    responsibilities: [
      'Arquitectura e implementación de 6+ aplicaciones full-stack desplegadas en Vercel, optimizando Core Web Vitals y accesibilidad.',
      'Integración de APIs de Inteligencia Artificial (OpenAI, Anthropic) para añadir capacidades semánticas y de generación de contenido.',
      'Desarrollo de microservicios en Python para resolver problemas algorítmicos complejos, incluyendo optimización combinatoria y NLP.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '2',
    degree: 'Artificial Intelligence Professional (CAIPC®)',
    institution: 'CertiProf',
    duration: '2025',
    status: 'Certificación',
    relevant: ['Fundamentos de ML', 'Estrategia de IA', 'NLP Básico'],
    tier: 'ai-certification',
    description: 'Certificación oficial que avala conocimientos en inteligencia artificial, machine learning y modelos de lenguaje.'
  },
  {
    id: '3',
    degree: 'Generative AI Specialization',
    institution: 'Amazon Web Services (AWS)',
    duration: '2025',
    status: 'Curso especializado',
    relevant: ['IA Generativa', 'Prompt Engineering', 'Bedrock'],
    tier: 'ai-certification',
    description: 'Especialización técnica en el despliegue y consumo de modelos fundacionales mediante AWS Bedrock y optimización de prompts.'
  },
  {
    id: '4',
    degree: 'Microsoft Official Course: SQL Server',
    institution: 'Microsoft / IDAT',
    duration: '2025',
    status: 'Curso oficial',
    relevant: ['Diseño Relacional', 'Optimización SQL', 'T-SQL'],
    tier: 'tech',
    description: 'Formación avanzada en diseño de bases de datos relacionales, escritura de consultas eficientes y tuning de rendimiento.'
  },
  {
    id: '5',
    degree: 'Especialización en Power BI & Modelado',
    institution: 'Zegel / Intercorp',
    duration: '2025',
    status: 'Especialización técnica',
    relevant: ['DAX', 'Modelado Dimensional', 'ETL'],
    tier: 'tech',
    description: 'Profundización en modelado de datos en estrella, transformaciones complejas y expresiones DAX avanzadas.'
  },
  {
    id: '1',
    degree: 'Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: '2022 – 2026',
    status: 'Noveno ciclo (en curso)',
    relevant: ['Arquitectura de Negocio', 'Gestión de Proyectos'],
    tier: 'academic',
    description: 'Formación académica que complementa el perfil técnico con un sólido entendimiento de procesos de negocio.'
  }
];

export const projects: Project[] = [
  {
    id: '6',
    title: 'HoneyNotes',
    subtitle: 'App de notas inteligentes con categorización automática y búsqueda semántica.',
    description:
      'Laboratorio de IA integrado en una SPA moderna. Las notas son procesadas usando modelos de lenguaje (LLMs) para extraer etiquetas automáticamente. Además, se generan embeddings vectoriales para permitir búsquedas semánticas profundas, revolucionando la experiencia de recuperación de información.',
    techStack: ['React', 'TypeScript', 'OpenAI API', 'Embeddings', 'Firebase'],
    aiFeatures: ['Generación automática de tags con LLMs', 'Búsqueda semántica usando Vector Embeddings', 'Resúmenes autogenerados'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    featured: true,
    year: '2025',
    liveUrl: 'https://honeynotes.vercel.app/',
    githubUrl: 'https://github.com/sjaquer'
  },
  {
    id: '1',
    title: 'Coralia Web',
    subtitle: 'Plataforma e-commerce React con backend serverless y motor de recomendaciones.',
    description:
      'Plataforma completa de comercio electrónico. El frontend SPA interactúa con microservicios en Firebase. Se implementó un motor de recomendaciones para incrementar el ticket promedio, analizando patrones de compra y similitud entre productos del catálogo.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Firebase Cloud Functions', 'IA/ML'],
    aiFeatures: ['Motor de recomendaciones personalizadas', 'Análisis predictivo de inventario'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://www.coraliadulcedetalle.com/'
  },
  {
    id: '4',
    title: 'TaskZenith',
    subtitle: 'SaaS de gestión de tareas con sincronización en tiempo real.',
    description:
      'Aplicación tipo SaaS con arquitectura serverless. Destaca por su sistema de control de accesos basado en roles (RBAC) y la sincronización optimística de la UI. El backend procesa las descripciones de tareas con NLP básico para priorización.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Firestore', 'NLP Básico'],
    aiFeatures: ['Clasificación de prioridad mediante NLP', 'Estimación inteligente de esfuerzo'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025',
    liveUrl: 'https://task-zenith-nu.vercel.app/',
    githubUrl: 'https://github.com/sjaquer'
  },
  {
    id: '3',
    title: 'Big Jack Manager',
    subtitle: 'Sistema POS y ERP en la nube con arquitectura en tiempo real.',
    description:
      'Frontend React de alto rendimiento que maneja cientos de estados concurrentes. El backend en Node.js se encarga de transacciones complejas, garantizando consistencia ACID en un entorno NoSQL para operaciones críticas de ventas e inventario.',
    techStack: ['React', 'TypeScript', 'Firebase', 'Node.js', 'Real-time Sync'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://bigjack-rp.vercel.app/'
  },
  {
    id: '5',
    title: 'Optimizador VRP',
    subtitle: 'Solver de ruteo vehicular con restricciones complejas usando Google OR-Tools.',
    description:
      'Implementación algorítmica del Vehicle Routing Problem (VRP). El backend en Python utiliza el solver CP-SAT de Google OR-Tools para encontrar rutas óptimas considerando ventanas de tiempo, capacidad vehicular y prioridades, expuesto mediante una API REST.',
    techStack: ['Python', 'Google OR-Tools', 'CP-SAT', 'API REST', 'React'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    category: 'desarrollo',
    year: '2024'
  },
  {
    id: '2',
    title: 'Data Intelligence Hub',
    subtitle: 'Pipelines de datos escalables con Python y modelado analítico.',
    description:
      'Arquitectura de datos que procesa y unifica múltiples APIs externas. Los scripts ETL en Python manejan la paginación, retries exponenciales y transformaciones complejas antes de cargar los datos en un esquema en estrella en SQL Server.',
    techStack: ['Python', 'Data Engineering', 'SQL Server', 'REST APIs', 'Power BI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    featured: true,
    year: '2025'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'code' },
  { name: 'TypeScript', category: 'Frontend', icon: 'code' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'palette' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'zap' },
  { name: 'Next.js', category: 'Frontend', icon: 'layout' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'server' },
  { name: 'Python', category: 'Backend', icon: 'terminal' },
  { name: 'Firebase / Firestore', category: 'Backend', icon: 'database' },
  { name: 'APIs REST', category: 'Backend', icon: 'settings' },
  { name: 'SQL Server', category: 'Backend', icon: 'database' },

  // AI & Advanced
  { name: 'Prompt Engineering', category: 'AI & Data', icon: 'brain' },
  { name: 'LLM Integration', category: 'AI & Data', icon: 'message-circle' },
  { name: 'OpenAI API', category: 'AI & Data', icon: 'cpu' },
  { name: 'Vector Embeddings', category: 'AI & Data', icon: 'database' },
  { name: 'Data Engineering', category: 'AI & Data', icon: 'database' },

  // DevOps & Tools
  { name: 'Git / GitHub', category: 'DevOps & Tools', icon: 'git-branch' },
  { name: 'Vercel', category: 'DevOps & Tools', icon: 'cloud' },
  { name: 'Docker', category: 'DevOps & Tools', icon: 'box' }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Cliente Corporativo',
    role: 'Product Owner',
    rating: 5,
    text: 'Sebastian construyó una arquitectura robusta para nuestra plataforma. La integración de características inteligentes elevó el nivel del producto, con un código limpio y altamente mantenible.',
    date: '2025-12-01',
    location: 'Lima, Perú',
    projectId: '3',
    source: 'Interno'
  },
  {
    id: 't2',
    name: 'Director de Ingeniería',
    role: 'Startup Tech',
    rating: 5,
    text: 'Impresionante capacidad para integrar APIs complejas y resolver problemas de backend y frontend con la misma eficacia. La optimización del rendimiento en la aplicación SPA fue notable.',
    date: '2025-10-15',
    location: 'Remoto',
    projectId: '1',
    source: 'Cliente'
  }
];
