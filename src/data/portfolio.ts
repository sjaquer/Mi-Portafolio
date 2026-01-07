import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Líder de Operaciones y Marketing',
    company: 'Big Jack',
    role: 'Líder de Operaciones',
    duration: 'Nov 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    summary:
      'Liderazgo integral del negocio: desde el rebranding y marketing hasta la reingeniería de procesos y desarrollo de software a medida.',
    techStack: [
      'Desarrollo ERP',
      'Branding',
      'Costos y Pricing',
      'Gestión de Inventarios'
    ],
    responsibilities: [
      'Diseño y programación de ERP propietario (código puro) para centralizar pedidos e inventarios.',
      'Rebranding completo: identidad visual, diseño de menús y manual de marca.',
      'Análisis de costos y reajuste de precios para asegurar rentabilidad.',
      'Supervisión de atención al cliente y logística de delivery.'
    ]
  },
  {
    id: '2',
    title: 'Desarrollador Full Stack y Soluciones BI',
    company: 'Dearel',
    role: 'Desarrollador Full Stack',
    duration: 'May 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Implementación de soluciones tecnológicas para centralizar operaciones de e-commerce y visualización de datos.',
    techStack: [
      'Business Intelligence',
      'Integración APIs',
      'Desarrollo Logístico',
      'Dashboards'
    ],
    responsibilities: [
      'Desarrollo de aplicaciones web BI para visualizar datos de 5 tiendas online.',
      'Diseño de ERP logístico conectado a Kommo CRM para gestión de pedidos.',
      'Integración de APIs (Shopify, Google Sheets, Zadarma) en dashboards unificados.',
      'Análisis de cuellos de botella operativos y creación de plugins a medida.'
    ]
  },
  {
    id: '3',
    title: 'Estrategia Digital y SEO',
    company: 'Neon Led Publicidad',
    role: 'Practicante Marketing',
    duration: 'May 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Gestión de identidad corporativa y crecimiento orgánico digital mediante SEO y estrategia de contenidos.',
    techStack: [
      'SEO Técnico',
      'Content Strategy',
      'Gestión de Marca',
      'YouTube Growth'
    ],
    responsibilities: [
      'Coordinación de equipo de diseño para manual de marca y redes sociales.',
      'Estrategia de crecimiento en YouTube y análisis de métricas.',
      'Optimización SEO técnica del sitio web para posicionamiento.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador y Programador',
    company: 'Independiente',
    role: 'Consultor Tecnológico',
    duration: 'Jun 2022 - Actualidad',
    location: 'Lima, Perú',
    summary:
      'Desarrollo de software especializado para optimización de procesos y plataformas e-commerce.',
    techStack: [
      'Algoritmos de Optimización',
      'E-commerce',
      'Pasarelas de Pago',
      'Automatización'
    ],
    responsibilities: [
      'Algoritmos de optimización de rutas de vuelo (costo/tiempo/accesibilidad).',
      'Plataformas e-commerce completas para rubro de alimentos.',
      'Sitios web corporativos con optimización SEO.'
    ]
  },
  {
    id: '5',
    title: 'Logística y Abastecimiento',
    company: 'Zeus Maritime',
    role: 'Practicante de Logística',
    duration: 'Abr 2025 - May 2025',
    location: 'Callao, Perú',
    summary:
      'Gestión operativa de comercio exterior, facturación y abastecimiento estratégico.',
    techStack: [
      'Comercio Exterior',
      'Facturación',
      'Gestión Documental',
      'Abastecimiento'
    ],
    responsibilities: [
      'Digitación de órdenes, guías de remisión y facturación.',
      'Seguimiento de órdenes de compra para abastecimiento operativo.',
      'Gestión bancaria y atención a clientes corporativos.'
    ]
  },
  {
    id: '6',
    title: 'Desarrollador 3D & Soporte TI',
    company: 'Independiente',
    role: 'Técnico Especialista',
    duration: 'Jun 2022 - Actualidad',
    location: 'Lima, Perú',
    summary:
      'Servicios técnicos especializados en visualización 3D y mantenimiento de infraestructura TI.',
    techStack: [
      'Unreal Engine',
      'Visualización 3D',
      'Soporte Hardware',
      'Mantenimiento Software'
    ],
    responsibilities: [
      'Creación de escenarios interactivos en Unreal Engine (Arquitectura/Juegos).',
      'Diagnóstico y reparación de hardware/software corporativo.'
    ]
  },
    {
    id: '7',
    title: 'Operaciones y Servicio',
    company: 'Gomaju / KFC Perú',
    role: 'Experiencia Complementaria',
    duration: 'Ene 2023 - Jul 2023',
    location: 'Lima, Perú',
    summary:
      'Roles operativos enfocados en atención al cliente, mantenimiento técnico y cumplimiento de estándares de calidad.',
    techStack: [
      'Atención al Cliente',
      'Mantenimiento PC',
      'Procesos Operativos'
    ],
    responsibilities: [
      'Gestión de inventarios y mantenimiento técnico de estaciones de juego (Gomaju).',
      'Optimización de tiempos de servicio y protocolos de seguridad (KFC).'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: 'Mar 2022 - Dic 2026',
    status: 'Estudiante (9.º ciclo)',
    relevant: [
      'Gestión de Proyectos',
      'BizOps',
      'Comercio Exterior'
    ],
    certificateUrl: '',
    description:
      'Formación centrada en gestión estratégica, negocios globales y transformación digital. Aplicación práctica en optimización de procesos y emprendimiento.'
  },
  {
    id: '2',
    degree: 'Diplomado en IA para los Negocios',
    institution: 'IDAT - CertiProf',
    duration: 'Mar 2025 - Jul 2025',
    status: 'Finalizado',
    relevant: ['Automatización IA', 'Estrategia de Datos'],
    certificateUrl: '',
    description: 'Especialización en aplicación de inteligencia artificial para optimizar flujos de trabajo y toma de decisiones empresariales.'
  },
  {
    id: '3',
    degree: 'SQL y Bases de Datos Relacionales',
    institution: 'IDAT - Microsoft',
    duration: 'Dic 2024 - Mar 2025',
    status: 'Finalizado',
    relevant: ['Consultas complejas', 'Diseño de BBDD'],
    certificateUrl: '',
    description: 'Dominio de SQL Server para gestión y análisis de grandes volúmenes de datos.'
  },
  {
    id: '4',
    degree: 'Inglés C1 Avanzado',
    institution: 'Instituto SISE',
    duration: 'Ago 2022 - Oct 2022',
    status: 'Finalizado',
    relevant: ['Business English', 'Comunicación fluida'],
    certificateUrl: '',
    description: 'Competencia profesional completa para entornos internacionales.'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'ERP Logístico Big Jack',
    subtitle: 'Sistema de gestión integral a medida',
    description:
      'Plataforma propietaria para centralizar pedidos, inventarios y entregas. Eliminó errores manuales y optimizó el flujo de caja.',
    details: [
      'Arquitectura monolítica optimizada para velocidad.',
      'Módulo de Inventarios en tiempo real.',
      'Interfaz de punto de venta (POS) para caja.'
    ],
    techStack: ['React', 'Node.js', 'SQL', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600', // Generic ERP/Dashboard image
    category: 'desarrollo',
    year: '2025'
  },
  {
    id: '2',
    title: 'Dashboard BI Dearel',
    subtitle: 'Inteligencia de Negocios Multi-Tienda',
    description:
      'Solución BI que consolida datos de 5 tiendas online. Permite visualización unificada de ventas, stock y márgenes.',
    details: [
      'Integración con Shopify API y Google Sheets.',
      'Visualizaciones interactivas de KPIs críticos.',
      'Alertas automáticas de stock bajo.'
    ],
    techStack: ['Python', 'Power BI', 'ETL', 'APIs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600', // Generic Charts image
    category: 'business intelligence',
    year: '2025'
  },
  {
    id: '3',
    title: 'ORDEV - Optimizador de Vuelos',
    subtitle: 'Algoritmo de rutas aéreas',
    description:
      'Software para calcular rutas de vuelo óptimas considerando variables climáticas, costo y tiempo.',
    details: [
      'Heurísticas de optimización de rutas.',
      'Integración de mapas y datos geoespaciales.',
      'Interfaz de planificación para pilotos.'
    ],
    techStack: ['Python', 'Algoritmos', 'Matemática'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    category: 'desarrollo',
    year: '2024'
  },
   {
    id: '4',
    title: 'Neon AI Landing',
    subtitle: 'Web Corporativa con IA',
    description:
      'Sitio web de alto rendimiento para agencia de publicidad, con integración de IA para atención inicial.',
    techStack: ['React', 'SEO', 'Tailwind', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    liveUrl: 'https://demo-lading-nlp.vercel.app/',
    category: 'web',
    year: '2025'
  }
];

export const skills: Skill[] = [
   // GESTIÓN DE OPERACIONES
  { name: 'Gestión de Startups', category: 'Gestión de Operaciones', icon: 'rocket' },
  { name: 'Diseño de ERPs', category: 'Gestión de Operaciones', icon: 'layout' },
  { name: 'Estrategia de Costos', category: 'Gestión de Operaciones', icon: 'dollar-sign' },
  { name: 'Atención al Cliente', category: 'Gestión de Operaciones', icon: 'users' },

  // BUSINESS INTELLIGENCE
  { name: 'Power BI', category: 'Business Intelligence', icon: 'bar-chart' },
  { name: 'SQL Server', category: 'Business Intelligence', icon: 'database' },
  { name: 'Excel (VBA)', category: 'Business Intelligence', icon: 'table' },
  { name: 'ETL con Python', category: 'Business Intelligence', icon: 'code' },

  // DESARROLLO DE SOFTWARE
  { name: 'React.js', category: 'Desarrollo de Software', icon: 'react' },
  { name: 'Node.js', category: 'Desarrollo de Software', icon: 'server' },
  { name: 'Integración APIs (Shopify/CRM)', category: 'Desarrollo de Software', icon: 'network' },
  { name: 'Linux / DevOps', category: 'Desarrollo de Software', icon: 'terminal' },

  // MARKETING DIGITAL
  { name: 'Branding e Identidad', category: 'Marketing Digital', icon: 'pen-tool' },
  { name: 'SEO / SEM', category: 'Marketing Digital', icon: 'search' },
  { name: 'Google/Meta Ads', category: 'Marketing Digital', icon: 'target' },
  { name: 'Edición (DaVinci/Adobe)', category: 'Marketing Digital', icon: 'video' },

  // TECNOLOGÍAS EMERGENTES
  { name: 'IA & Prompt Eng.', category: 'Tecnologías Emergentes', icon: 'cpu' },
  { name: 'Unreal Engine (3D)', category: 'Tecnologías Emergentes', icon: 'box' },
  { name: 'Automatización AWS', category: 'Tecnologías Emergentes', icon: 'cloud' }
];

export const testimonials = [
  // Placeholder testimonials relevant to the new profile
  {
    id: 't1',
    name: 'Gerencia General',
    role: 'Big Jack',
    rating: 5,
    text: 'La implementación del ERP transformó nuestra operación diaria. El control de inventarios ahora es exacto y hemos reducido mermas significativamente.',
    date: '2025-12-01',
    location: 'Lima, Perú',
    projectId: '1',
    source: 'Interno'
  },
  {
    id: 't2',
    name: 'Dirección Comercial',
    role: 'Dearel',
    rating: 5,
    text: 'Los dashboards de BI nos dieron visibilidad en tiempo real sobre las 5 tiendas. Fundamental para nuestras decisiones de stock.',
    date: '2025-10-15',
    location: 'Lima, Perú',
    projectId: '2',
    source: 'Cliente'
  }
];
