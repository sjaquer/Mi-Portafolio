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
      'Reingeniería total de la operación mediante sistemas propios que eliminan ineficiencias y permiten escalabilidad.',
    techStack: [
      'ERP In-House',
      'Reingeniería de Procesos',
      'Gestión de Costos',
      'Automatización'
    ],
    responsibilities: [
      'Digitalización operativa: ERP a medida que centraliza inventarios, recetas y ventas — eliminación del 90% de papel y hojas de cálculo desconectadas.',
      'Optimización de márgenes: Reestructuración de ingeniería de menú basada en data real de costos, incremento del margen bruto operativo.',
      'Estandarización de procesos: Manuales de procedimientos y protocolos para replicabilidad del modelo de negocio.'
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
      'Implementación de infraestructura de datos para monitorear rentabilidad real de múltiples canales de venta.',
    techStack: [
      'Power BI',
      'Data Warehousing',
      'Proyección Financiera',
      'Automatización ETL'
    ],
    responsibilities: [
      'Centralización de data: Unificación de fuentes dispersas (Shopify, Ads, Almacén) en una fuente única de verdad para gerencia.',
      'Visibilidad financiera: Dashboards automatizados para seguimiento de flujo de caja y P&L en tiempo real.',
      'Predicción de demanda: Algoritmos para optimizar compras y reducir sobre-stock (capital inmovilizado).'
    ]
  },
  {
    id: '3',
    title: 'Analista de Optimización Logística',
    company: 'Independiente',
    role: 'Analista Operativo',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Desarrollo de soluciones algorítmicas para problemas logísticos complejos que las herramientas estándar no resuelven.',
    techStack: [
      'Python',
      'Google OR-Tools',
      'Optimización de Rutas',
      'Investigación Operativa'
    ],
    responsibilities: [
      'Optimización de transporte: Desarrollo de solvers personalizados para ruteo de vehículos (VRP) y asignación de recursos.',
      'Arquitectura de soluciones: Diseño de sistemas modulares integrados con la operación física existente.',
      'Análisis de viabilidad: Evaluación técnica y económica de proyectos de modernización tecnológica.'
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
    title: 'Coralia Web',
    subtitle: 'E-commerce + CRM + Automatización + IA',
    description:
      'Plataforma modular de e-commerce con CRM integrado, automatización operativa e integración de IA. Actualmente operando en producción con flujos reales de pedidos, clientes y métricas.',
    details: [
      'Plataforma completa: Catálogo, carrito, checkout y gestión de pedidos en producción.',
      'CRM integrado: Seguimiento de clientes, historial de compras y segmentación automatizada.',
      'IA aplicada: Recomendaciones de producto y asistente de atención al cliente.'
    ],
    techStack: ['React', 'Node.js', 'Firebase', 'IA Integration', 'Shopify API'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025'
  },
  {
    id: '2',
    title: 'Dearel Intelligence Hub',
    subtitle: 'Business Intelligence & Análisis Multifuente',
    description:
      'Plataforma de inteligencia comercial que unifica canales de venta. Pipeline de datos automatizado desde múltiples fuentes hacia dashboards ejecutivos para toma de decisiones basada en márgenes reales.',
    details: [
      'Pipeline ETL: Webhooks y automatización para centralizar datos de Shopify, Ads y Almacén.',
      'Dashboard ejecutivo: Métricas de P&L, flujo de caja y rentabilidad por producto en tiempo real.',
      'Impacto: Identificación de productos con margen negativo y optimización de inventario.'
    ],
    techStack: ['Power BI', 'Data Engineering', 'Webhooks', 'ETL', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    category: 'business intelligence',
    featured: true,
    year: '2025'
  },
  {
    id: '3',
    title: 'Big Jack Manager',
    subtitle: 'Sistema de Gestión Operativa Integral',
    description:
      'ERP a medida para gestión operativa de restaurante. Integra punto de venta, control de inventario, flujo de caja y dashboard de rendimiento en una sola plataforma.',
    details: [
      'POS integrado: Registro de ventas en tiempo real con control de turnos y cierre de caja.',
      'Inventario inteligente: Control de insumos, recetas y alertas de reposición automáticas.',
      'Dashboard financiero: Flujo de caja diario, costos operativos y margen por producto.'
    ],
    techStack: ['React', 'Firebase', 'Node.js', 'Firestore', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025'
  },
  {
    id: '4',
    title: 'TaskZenith',
    subtitle: 'Productividad con Roles y Arquitectura Modular',
    description:
      'Plataforma de gestión de tareas con sistema de roles, sincronización en tiempo real y arquitectura modular. Diseñada para equipos que necesitan control granular de productividad.',
    details: [
      'Roles y permisos: Sistema de acceso por niveles para equipos multifuncionales.',
      'Sincronización: Datos en tiempo real entre múltiples usuarios y dispositivos.',
      'IA: Clasificación automática y estimación inteligente de tiempos.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025'
  },
  {
    id: '5',
    title: 'Optimizador Logístico (ORDEV)',
    subtitle: 'Optimización Algorítmica & CP-SAT',
    description:
      'Motor de optimización logística que utiliza Google OR-Tools y CP-SAT para minimizar costos operativos de transporte mediante programación por restricciones.',
    details: [
      'Investigación Operativa: Implementación avanzada de algoritmos de ruteo vehicular (VRP).',
      'Minimización de costos: Reducción matemática de costos logísticos mediante restricciones.',
      'Escalable: Arquitectura modular adaptable a diferentes escenarios de distribución.'
    ],
    techStack: ['Python', 'Google OR-Tools', 'CP-SAT', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    category: 'desarrollo',
    year: '2024'
  },
  {
    id: '6',
    title: 'HoneyNotes',
    subtitle: 'Producto Experimental UX + IA',
    description:
      'Aplicación experimental de notas inteligentes que combina diseño UX minimalista con capacidades de IA para organización automática y generación de resúmenes.',
    details: [
      'UX Research: Diseño centrado en reducir la carga cognitiva del usuario.',
      'IA integrada: Categorización automática y generación de resúmenes de notas.',
      'Experimental: Laboratorio para probar nuevas interacciones de IA con el usuario.'
    ],
    techStack: ['React', 'AI/NLP', 'TypeScript', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025'
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'code' },
  { name: 'Next.js', category: 'Frontend', icon: 'layout' },
  { name: 'TypeScript', category: 'Frontend', icon: 'code' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'layout' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs', icon: 'server' },
  { name: 'Firebase', category: 'Backend & APIs', icon: 'database' },
  { name: 'Firestore', category: 'Backend & APIs', icon: 'database' },
  { name: 'SQL Server', category: 'Backend & APIs', icon: 'database' },

  // Business Intelligence
  { name: 'Power BI', category: 'Business Intelligence', icon: 'bar-chart' },
  { name: 'Excel Avanzado', category: 'Business Intelligence', icon: 'trending-up' },
  { name: 'DAX', category: 'Business Intelligence', icon: 'bar-chart' },
  { name: 'Modelado de Datos', category: 'Business Intelligence', icon: 'database' },

  // Automatización
  { name: 'Python', category: 'Automatización', icon: 'terminal' },
  { name: 'Webhooks', category: 'Automatización', icon: 'cpu' },
  { name: 'ETL', category: 'Automatización', icon: 'cpu' },
  { name: 'Scripts de Automatización', category: 'Automatización', icon: 'terminal' },

  // Integraciones
  { name: 'Shopify API', category: 'Integraciones', icon: 'settings' },
  { name: 'WhatsApp API', category: 'Integraciones', icon: 'settings' },
  { name: 'Zadarma', category: 'Integraciones', icon: 'settings' },
  { name: 'Google OR-Tools', category: 'Integraciones', icon: 'cpu' }
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
