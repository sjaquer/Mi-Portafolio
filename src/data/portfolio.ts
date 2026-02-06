import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Head of Operations & Digital Transformation',
    company: 'Big Jack',
    role: 'Líder de Transformación',
    duration: 'Nov 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    summary:
      'Lidero la reingeniería total de la operación. Mi objetivo no es solo "mantener" el negocio, sino escalarlo mediante sistemas propios que eliminan ineficiencias humanas.',
    techStack: [
      'BizOps',
      'ERP In-House',
      'Reingeniería de Procesos',
      'Gestión de Costos'
    ],
    responsibilities: [
      'Digitalización Operativa: Diseño y despliegue de un ERP a medida que centraliza inventarios, recetas y ventas, eliminando el 90% del uso de papel y hojas de cálculo desconectadas.',
      'Optimización de Márgenes: Reestructuración de la ingeniería de menú basada en data real de costos, incrementando el margen bruto operativo.',
      'Estandarización: Creación de manuales de procedimientos y protocolos que permiten la replicabilidad del modelo de negocio (Franquiciabilidad).'
    ]
  },
  {
    id: '2',
    title: 'Lead de Business Intelligence',
    company: 'Dearel',
    role: 'BI Specialist',
    duration: 'May 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Transformé una operación "ciega" en una organización basada en datos. Implementé la infraestructura para monitorear la rentabilidad real de múltiples canales de venta.',
    techStack: [
      'Data Warehousing',
      'Power BI',
      'Proyección Financiera',
      'Automatización'
    ],
    responsibilities: [
      'Centralización de Data: Unificación de fuentes de datos dispersas (Shopify, Ads, Almacén) en una "Fuente Única de Verdad" para la gerencia.',
      'Visibilidad Financiera: Desarrollo de dashboards automatizados para seguimiento de flujo de caja y P&L (Pérdidas y Ganancias) en tiempo real.',
      'Eficiencia de Stock: Algoritmos de predicción de demanda para optimizar las compras y evitar sobre-stock (Dinero inmovilizado).'
    ]
  },
  {
    id: '3',
    title: 'Consultor de Logística Algorítmica',
    company: 'Independiente',
    role: 'Tech Consultant',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Desarrollo soluciones matemáticas y de software para problemas logísticos complejos que las herramientas estándar no pueden resolver.',
    techStack: [
      'Investigación Operativa',
      'Algoritmos (Python)',
      'Optimización de Rutas',
      'Simulación'
    ],
    responsibilities: [
      'Optimización de Transporte: Desarrollo de "Solvers" personalizados para problemas de ruteo de vehículos (VRP) y asignación de recursos.',
      'Arquitectura de Soluciones: Diseño de sistemas modulares que se integran con la operación física existente sin interrumpirla.',
      'Análisis de Viabilidad: Evaluación técnica y económica de proyectos de modernización tecnológica.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: '2026',
    status: 'Grado Profesional (En proceso de titulación)',
    relevant: [
      'Gerencia de Operaciones',
      'Finanzas Corporativas',
      'Planeamiento Estratégico'
    ],
    certificateUrl: '',
    description:
      'Formación gerencial enfocada en la creación y escala de modelos de negocio eficientes y rentables.'
  },
  {
    id: '2',
    degree: 'Artificial Intelligence Professional (CAIPC®)',
    institution: 'CertiProf',
    duration: '2025',
    status: 'Certificación Internacional',
    relevant: ['Machine Learning Strategy', 'AI Project Lead', 'NLP Fundamentals'],
    certificateUrl: '',
    description: 'Validación profesional para liderar proyectos de IA, desde la conceptualización hasta la implementación de modelos predictivos.'
  },
  {
    id: '3',
    degree: 'Generative AI for Executives',
    institution: 'Amazon Web Services (AWS)',
    duration: '2025',
    status: 'Certificación Ejecutiva',
    relevant: ['Estrategia de IA', 'Prompt Engineering', 'Innovación Corporativa'],
    certificateUrl: '',
    description: 'Visión estratégica sobre el impacto y ROI de la IA generativa en la gestión empresarial moderna.'
  },
  {
    id: '4',
    degree: 'Microsoft Official Course: SQL Server',
    institution: 'Microsoft / IDAT',
    duration: '2025',
    status: 'Certificación Oficial',
    relevant: ['Admin de Base de Datos', 'Optimización SQL', 'Data Mining'],
    certificateUrl: '',
    description: 'Competencia técnica oficial de Microsoft para la gestión avanzada y optimización de bases de datos relacionales.'
  },
  {
    id: '5',
    degree: 'Power BI Data Visualization Specialist',
    institution: 'Zegel / Intercorp',
    duration: '2025',
    status: 'Especialización Técnica',
    relevant: ['DAX Actions', 'Modelado de Datos', 'Storytelling con Datos'],
    certificateUrl: '',
    description: 'Especialización en transformar datos complejos en tableros de control ejecutivos para la toma de decisiones.'
  },
  {
    id: '6',
    degree: 'Organizational Sustainability & Global Trade',
    institution: 'Arizona State University',
    duration: '2024',
    status: 'Certificación Internacional',
    relevant: ['Sostenibilidad ESG', 'Comercio Global 5.0'],
    certificateUrl: '',
    description: 'Formación en estrategias de sostenibilidad corporativa y logística internacional moderna.'
  }
];


export const projects: Project[] = [
  {
    id: '1',
    title: 'TaskZenith',
    subtitle: 'Gestión de Tareas & Productividad IA',
    description:
      'Herramienta central de gestión de tareas enfocada en la productividad y la "calma". Integra IA para priorización automática, posicionándose como un estándar de administración moderna.',
    details: [
      'Propósito: Centralizar la gestión operativa personal y de equipos.',
      'Valor: Interfaz minimalista que reduce la carga cognitiva.',
      'Tech: IA para clasificación y estimación de tiempos.'
    ],
    techStack: ['React', 'AI Integration', 'Productivity Tools', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025'
  },
  {
    id: '2',
    title: 'DentalFlow-Student',
    subtitle: 'ERP Clínico Integral',
    description:
      'Sistema robusto para la gestión vertical de clínicas dentales. Administra desde historias clínicas y citas hasta inventarios y recursos humanos.',
    details: [
      'Propósito: Digitalización total del flujo de trabajo clínico.',
      'Valor: Solución "All-in-One" para administración médica.',
      'Funcionalidad: Control de pacientes, empleados y stock en tiempo real.'
    ],
    techStack: ['Full Stack', 'Database Design', 'Healthcare Soft', 'Management'],
    image: 'https://images.unsplash.com/photo-1588776813186-600f91643418?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2024'
  },
  {
    id: '3',
    title: 'Optimizador de Vuelos (ORDEV)',
    subtitle: 'Logística Algorítmica & CP-SAT',
    description:
      'Proyecto de alta complejidad lógica que utiliza Google OR-Tools y el motor CP-SAT para resolver problemas de optimización logística y ruteo.',
    details: [
      'Importancia Técnica: Implementación avanzada de algoritmos de Investigación de Operaciones.',
      'Tech: Python, Google OR-Tools, Constraint Programming.',
      'Impacto: Minimización matemática de costos operativos.'
    ],
    techStack: ['Python', 'Google OR-Tools', 'CP-SAT', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    category: 'desarrollo',
    year: '2024'
  },
  {
    id: '4',
    title: 'Digital Bakery Commerce',
    subtitle: 'Vitrina Digital & Suscripciones',
    description:
      'Plataforma de comercio electrónico adaptable para gestión de catálogos y pedidos. Diseñada para modelos de negocio por suscripción o venta directa.',
    details: [
      'Valor: Adaptabilidad a diversos nichos (panaderías, floristerías, etc.).',
      'Funcionalidad: Gestión de catálogo dinámico y tracking de pedidos.'
    ],
    techStack: ['E-commerce', 'React', 'Payment Gateways', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025'
  },
  {
    id: '5',
    title: 'Digital Bakery Frontend',
    subtitle: 'Arquitectura SPA Moderna',
    description:
      'Demostración técnica de dominio del stack frontend moderno. Single Page Application (SPA) que prioriza el rendimiento, la escalabilidad y la experiencia de usuario.',
    details: [
      'Importancia Técnica: Clean Code y mejores prácticas en React.',
      'Stack: React, TypeScript, Vite, Tailwind CSS.',
      'Performance: Optimización de Core Web Vitals.'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025'
  },
  {
    id: '6',
    title: 'Dearel Intelligence Hub',
    subtitle: 'Business Intelligence & P&L',
    description:
      'Plataforma de inteligencia comercial que unifica canales de venta. Permite pasar de "vender por intuición" a "vender por margen de contribución".',
    details: [
      'Problema: Ceguera financiera sobre la rentabilidad real.',
      'Solución: Pipeline de datos automatizado hacia Power BI.',
      'Impacto: Identificación de productos con margen negativo.'
    ],
    techStack: ['Power BI', 'Data Engineering', 'Financial Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    category: 'business intelligence',
    year: '2025'
  }
];

export const skills: Skill[] = [
  // GRUPO 1: EL CEREBRO OPERATIVO
  { name: 'Reingeniería de Procesos', category: 'Eficiencia Operativa', icon: 'settings' },
  { name: 'Gestión de Cadena de Suministro', category: 'Eficiencia Operativa', icon: 'truck' },
  { name: 'Ingeniería de Costos', category: 'Eficiencia Operativa', icon: 'dollar-sign' },
  { name: 'Liderazgo de Equipos', category: 'Eficiencia Operativa', icon: 'users' },

  // GRUPO 2: LA INTELIGENCIA
  { name: 'Business Intelligence', category: 'Inteligencia de Negocios', icon: 'bar-chart' },
  { name: 'Modelado de Datos (SQL)', category: 'Inteligencia de Negocios', icon: 'database' },
  { name: 'Análisis Financiero', category: 'Inteligencia de Negocios', icon: 'trending-up' },
  { name: 'Estrategia de Growth', category: 'Inteligencia de Negocios', icon: 'search' },

  // GRUPO 3: LA HERRAMIENTA (TECH)
  { name: 'Desarrollo Full Stack (React/Node)', category: 'Desarrollo de Producto', icon: 'code' },
  { name: 'Arquitectura de Software', category: 'Desarrollo de Producto', icon: 'layout' },
  { name: 'Automatización (APIs)', category: 'Desarrollo de Producto', icon: 'cpu' },
  { name: 'Algoritmos (Python)', category: 'Desarrollo de Producto', icon: 'terminal' }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Dirección General',
    role: 'Big Jack',
    rating: 5,
    text: 'Sebastian transformó nuestra forma de trabajar. Pasamos del desorden manual a tener un control digital preciso de cada insumo y venta.',
    date: '2025-12-01',
    location: 'Lima, Perú',
    projectId: '1',
    source: 'Interno'
  },
  {
    id: 't2',
    name: 'Gerencia Comercial',
    role: 'Dearel',
    rating: 5,
    text: 'La claridad que tenemos ahora sobre nuestros números es impresionante. Las herramientas que implementó son vitales para nuestras decisiones diarias.',
    date: '2025-10-15',
    location: 'Lima, Perú',
    projectId: '3',
    source: 'Cliente'
  }
];
