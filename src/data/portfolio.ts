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
    company: 'Proyectos Freelance & Startups',
    role: 'Full-Stack Developer',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Lidero la arquitectura técnica para startups en etapas tempranas, transformando visiones de negocio en MVPs de alto impacto. He participado en ferias de emprendimiento donde mis soluciones fueron clave para validar modelos de negocio y asegurar tracción inicial mediante la integración estratégica de IA.',
    techStack: [
      'React / TypeScript',
      'Node.js',
      'Python / AI',
      'Google Gemini API',
      'Modelos Locales'
    ],
    responsibilities: [
      'Desarrollé MVPs para startups locales, logrando presentaciones exitosas en ferias de emprendimiento con sistemas funcionales de alta fidelidad.',
      'Implementé soluciones de IA híbridas combinando APIs de nube (Gemini, OpenAI) con modelos locales optimizados para reducir latencia y costos.',
      'Diseñé flujos de automatización para negocios en crecimiento, centralizando operaciones críticas en dashboards intuitivos.'
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
    subtitle: 'App de notas inteligentes con búsqueda semántica (RAG).',
    description:
      'Sistema avanzado de gestión de conocimiento que utiliza Vector Embeddings para permitir búsquedas por significado, no solo por palabras clave. Implementé un pipeline de preprocesamiento que redujo el tiempo de organización manual en un 70% mediante etiquetado automático con LLMs.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Vector DB', 'Firebase'],
    aiFeatures: ['Búsqueda semántica (Vector Search)', 'Categorización autonoma con LLMs', 'Extracción de entidades'],
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
    subtitle: 'E-commerce escalable con motor de recomendaciones IA.',
    description:
      'Arquitectura robusta para comercio electrónico que procesa miles de sesiones mensuales. Desarrollé un motor de recomendación personalizado que incrementó el ticket promedio en un 15% mediante análisis de afinidad de productos y patrones de comportamiento.',
    techStack: ['React', 'Node.js', 'Firebase Cloud Functions', 'IA/ML'],
    aiFeatures: ['Motor de recomendaciones personalizado', 'Análisis predictivo de demanda'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://www.coraliadulcedetalle.com/'
  },
  {
    id: '4',
    title: 'TaskZenith',
    subtitle: 'SaaS de gestión ágil con priorización inteligente NLP.',
    description:
      'Plataforma de gestión de proyectos que utiliza Procesamiento de Lenguaje Natural para asignar prioridades automáticamente según la descripción de la tarea. Logró una mejora del 25% en la eficiencia de triaje de tickets para equipos de desarrollo pequeños.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Firestore', 'NLP'],
    aiFeatures: ['Clasificación automática de prioridad', 'Estimación de esfuerzo asistida por IA'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025',
    liveUrl: 'https://task-zenith-nu.vercel.app/',
    githubUrl: 'https://github.com/sjaquer'
  },
  {
    id: '3',
    title: 'Big Jack Manager',
    subtitle: 'ERP & POS Cloud con sincronización en tiempo real < 50ms.',
    description:
      'Sistema integral de gestión empresarial optimizado para baja latencia. Arquitecturé la base de datos para soportar operaciones críticas de inventario y ventas con integridad ACID, eliminando el 100% de las discrepancias de stock registradas anteriormente.',
    techStack: ['React', 'Firebase', 'Node.js', 'Real-time Architectures'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://bigjack-rp.vercel.app/'
  },
  {
    id: '5',
    title: 'Optimizador VRP',
    subtitle: 'Algoritmo de optimización logística con Google OR-Tools.',
    description:
      'Solución avanzada para el problema de ruteo vehicular (VRP). Implementé modelos matemáticos que redujeron los costos operativos de transporte en un 12% mediante la optimización de rutas considerando múltiples restricciones de tiempo y capacidad.',
    techStack: ['Python', 'Google OR-Tools', 'CP-SAT Solver', 'API REST'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    category: 'desarrollo',
    year: '2024'
  },
  {
    id: '2',
    title: 'Data Intelligence Hub',
    subtitle: 'Pipelines ETL automáticos para unificación de datos.',
    description:
      'Infraestructura de datos que centraliza información de múltiples canales de venta (Shopify, Meta). Automaticé la recolección de métricas clave reduciendo el tiempo de reporte semanal de 4 horas a solo 5 minutos para el equipo directivo.',
    techStack: ['Python', 'SQL Server', 'Power BI', 'Data Pipelines'],
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
  { name: 'Google Gemini API', category: 'AI & Data', icon: 'sparkles' },
  { name: 'Modelos Locales', category: 'AI & Data', icon: 'cpu' },
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
