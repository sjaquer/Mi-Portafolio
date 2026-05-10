import { Experience, Education, Project } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Líder de Operaciones y Marketing',
    company: 'Big Jack-Burgers',
    role: 'Líder de Operaciones y Programador',
    duration: 'Nov 2025 - Ene 2026',
    location: 'Lima, Perú',
    summary:
      'Lideré la optimización operativa y el desarrollo de sistemas internos, logrando mejoras críticas en el procesamiento de pedidos y la rentabilidad del negocio.',
    techStack: [
      'React',
      'Firebase',
      'Python',
      'Análisis Predictivo',
      'Costeo de Recetas'
    ],
    responsibilities: [
      'Desarrolló, como único programador a cargo, un sistema interno que redujo el tiempo de procesamiento de pedidos en un 35%.',
      'Aumentó el margen de rentabilidad mensual en un 15% aplicando modelos de análisis predictivo sobre los costos de insumos y recetas.',
      'Implementó dashboards de control de inventario en tiempo real vinculados a la cola de producción.'
    ]
  },
  {
    id: '2',
    title: 'Desarrollador de Soluciones de Negocios',
    company: 'Dearel',
    role: 'Solutions Developer',
    duration: 'Ago 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Diseñé e implementé infraestructuras de datos para unificar operaciones de e-commerce y CRM, eliminando cuellos de botella manuales.',
    techStack: [
      'Python',
      'SQL Server',
      'Shopify API',
      'Google Sheets API',
      'Power BI'
    ],
    responsibilities: [
      'Diseñó dashboards interactivos para monitorear ventas en tiempo real, permitiendo una reacción inmediata a tendencias de mercado.',
      'Integró plataformas heterogéneas (Shopify, Google Sheets, CRM) usando APIs personalizadas, eliminando un 30% de las tareas manuales de digitación.',
      'Automatizó el flujo de leads y pedidos hacia el sistema logístico central.'
    ]
  },
  {
    id: '3',
    title: 'Prácticas Marketing Digital',
    company: 'Neon LED Publicidad',
    role: 'Marketing Intern',
    duration: 'Jun 2025 - Ago 2025',
    location: 'Lima, Perú',
    summary:
      'Lideré estrategias de contenido y optimización técnica para canales digitales, incrementando significativamente la captación de clientes.',
    techStack: [
      'Google Analytics',
      'SEO Técnico',
      'YouTube Strategy',
      'Content Planning'
    ],
    responsibilities: [
      'Incrementó los leads orgánicos en un 40% liderando la estrategia de crecimiento y contenido del canal de YouTube.',
      'Aplicó optimización SEO técnica en el sitio web corporativo, mejorando el ranking para palabras clave competitivas.',
      'Analizó el tráfico y comportamiento del usuario con Google Analytics para ajustar las campañas de pauta.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador Independiente',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Arquitecto soluciones web personalizadas y automatizaciones para diversos sectores, enfocándome en la eficiencia operativa y escalabilidad.',
    techStack: [
      'React / TypeScript',
      'Python / SQL',
      'Node.js',
      'Integración de APIs',
      'Automatización'
    ],
    responsibilities: [
      'Lideró la creación de más de 6 sistemas web corporativos y e-commerce de alta complejidad.',
      'Implementó automatizaciones con Python y SQL para procesamiento de datos masivos, reduciendo errores de digitación en un 25%.',
      'Diseñó arquitecturas escalables para startups, integrando servicios de IA y pasarelas de pago.'
    ]
  },
  {
    id: '5',
    title: 'Practicante de Logística',
    company: 'Zeus Maritime-Shipchandler',
    role: 'Logistic Intern',
    duration: 'Abr 2025 - May 2025',
    location: 'Callao, Perú',
    summary:
      'Soporte administrativo y operativo en la gestión de suministros marítimos bajo estándares de alta precisión.',
    techStack: [
      'ERP Management',
      'Excel Avanzado',
      'Logística Internacional'
    ],
    responsibilities: [
      'Gestionó órdenes de compra en el ERP con un 95% de precisión, asegurando el flujo de suministros sin retrasos.',
      'Coordinó con proveedores y almacén para la recepción y despacho de mercancía crítica.',
      'Mantuvo la integridad de los datos de inventario mediante auditorías periódicas en el sistema.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: 'Mar 2022 - Dic 2026',
    status: '9.º Ciclo (en curso)',
    relevant: ['Arquitectura de Negocio', 'Gestión de Proyectos', 'Estrategia Digital'],
    tier: 'academic',
    description: 'Formación académica enfocada en la optimización de procesos de negocio internacionales y gestión estratégica.'
  },
  {
    id: '2',
    degree: 'Artificial Intelligence Professional (CAIPC®)',
    institution: 'CertiProf',
    duration: '2025',
    status: 'Certificación',
    relevant: ['Fundamentos de ML', 'Estrategia de IA'],
    tier: 'ai-certification',
    description: 'Certificación oficial que avala conocimientos en inteligencia artificial y modelos de lenguaje.'
  },
  {
    id: '3',
    degree: 'Diplomado en IA para Negocios',
    institution: 'IDAT',
    duration: '2025',
    status: 'Diplomado',
    relevant: ['IA Aplicada', 'Optimización de Procesos'],
    tier: 'ai-certification',
    description: 'Especialización en la implementación de soluciones de inteligencia artificial para la mejora de la rentabilidad y eficiencia empresarial.'
  },
  {
    id: '4',
    degree: 'AWS Generative AI for Executives',
    institution: 'Amazon Web Services (AWS)',
    duration: '2025',
    status: 'Certificación',
    relevant: ['IA Generativa', 'Estrategia Corporativa'],
    tier: 'ai-certification',
    description: 'Enfoque ejecutivo sobre el despliegue de modelos fundacionales para la creación de valor en organizaciones.'
  },
  {
    id: '5',
    degree: 'Microsoft SQL Server',
    institution: 'Microsoft / IDAT',
    duration: '2024',
    status: 'Curso oficial',
    relevant: ['Diseño Relacional', 'T-SQL', 'BI'],
    tier: 'tech',
    description: 'Diseño y gestión de bases de datos relacionales para entornos corporativos y analítica.'
  },
  {
    id: '6',
    degree: 'Especialización en Power BI',
    institution: 'Intercorp',
    duration: '2025',
    status: 'Especialización',
    relevant: ['DAX', 'Data Visualization', 'ETL'],
    tier: 'tech',
    description: 'Dominio de herramientas de visualización de datos y modelado para la toma de decisiones.'
  },
  {
    id: '7',
    degree: 'Python para Análisis de Datos',
    institution: 'Udemy',
    duration: '2024',
    status: 'Curso especializado',
    relevant: ['Automatización', 'Pandas', 'NumPy'],
    tier: 'tech',
    description: 'Desarrollo de scripts para automatización de tareas y procesamiento de grandes volúmenes de información.'
  },
  {
    id: '8',
    degree: 'Excel Avanzado & Dashboards',
    institution: 'Formación Profesional',
    duration: '2024',
    status: 'Certificación',
    relevant: ['Macros', 'VBA', 'Análisis Financiero'],
    tier: 'tech',
    description: 'Creación de herramientas de control financiero y operativo mediante hojas de cálculo avanzadas.'
  },
  {
    id: '9',
    degree: 'Competencias Digitales',
    institution: 'Google',
    duration: '2024',
    status: 'Certificación',
    relevant: ['Marketing Digital', 'Analítica Web'],
    tier: 'tech',
    description: 'Fundamentos de presencia digital, estrategia de contenidos y análisis de métricas.'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ecos Literarios',
    subtitle: 'Analizador literario con IA para obras clásicas y contemporáneas.',
    description:
      'Plataforma web pensada para estudiar obras en profundidad y obtener lecturas asistidas por IA sobre autor, estilo, simbolismo, temas y contexto. Está orientada a análisis literarios más ricos que una búsqueda tradicional por palabras clave.',
    techStack: ['Next.js 15', 'Tailwind CSS', 'Firebase Firestore', 'Google Genkit', 'Gemini 3.1 Flash'],
    aiFeatures: ['Análisis literario profundo', 'Síntesis semántica de obras', 'Lectura asistida con Gemini'],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1600&q=80',
    category: 'ia',
    featured: true,
    year: '2026',
    githubUrl: 'https://github.com/sjaquer/ecos'
  },
  {
    id: '2',
    title: 'TaskME',
    subtitle: 'Ecosistema de productividad personal y académico.',
    description:
      'Sistema de productividad con estética Cyber-Focus que combina tablero Kanban, monitor de rutinas, sincronización bidireccional con Google Calendar y métricas de eficiencia. Incluye soporte de IA para transformar textos desordenados en tareas accionables.',
    techStack: ['React', 'TypeScript', 'Google Calendar API', 'Firestore', 'Terminal UI'],
    aiFeatures: ['Autoorganización de texto en tareas', 'Creación automática de pendientes', 'Soporte de productividad asistida'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    category: 'productividad',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/taskME'
  },
  {
    id: '3',
    title: 'LogINV',
    subtitle: 'Inventario y logística para entornos exigentes.',
    description:
      'Sistema de control de inventario y logística con conteo a pantalla completa, escáner de código de barras, gestión multiubicación y reportes exportables en PDF y CSV. El enfoque está en reducir errores operativos y mejorar el seguimiento de stock.',
    techStack: ['React', 'TypeScript', 'Barcode Scanner', 'PDF/CSV', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80',
    category: 'logistica',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/LogINV'
  },
  {
    id: '4',
    title: 'Alerta Multienda',
    subtitle: 'Monitoreo y alertas en tiempo real para múltiples tiendas Shopify.',
    description:
      'Extensión y sistema de soporte para tiendas Shopify con detección de ubicación, sincronización de estados en tiempo real y prevención de alertas duplicadas entre usuarios. Está pensado para operaciones donde cada notificación debe llegar una sola vez y en el contexto correcto.',
    techStack: ['Chrome Extension', 'Firebase Firestore', 'Shopify API', 'Realtime Sync'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    category: 'retail',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/Alerta-Multienda'
  },
  {
    id: '5',
    title: 'Big Jack Menu',
    subtitle: 'Menú digital y checkout con integración a ERP.',
    description:
      'Menú digital interactivo para restaurante con catálogo de variantes, checkout optimizado, webhooks hacia ERP y Libro de Reclamaciones digital. El foco está en acelerar el pedido y mantener el flujo operativo alineado con procesos legales y administrativos.',
    techStack: ['Next.js', 'Webhooks', 'ERP', 'PWA', 'Legal Forms'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    category: 'restaurante',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/big-jack-menu'
  },
  {
    id: '6',
    title: 'Cabine Grid',
    subtitle: 'Gestión integral para cabinas de internet y cibercafés.',
    description:
      'Sistema operativo para LAN centers con monitoreo de PCs, POS integrado, control de inventario y cierres de caja automatizados. La interfaz tipo grid permite asignar, cobrar y auditar sesiones desde el dashboard con trazabilidad por roles.',
    techStack: ['React', 'TypeScript', 'Firestore', 'POS', 'Roles'],
    aiFeatures: ['Redacción automática de reportes', 'Auditoría asistida'],
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1600&q=80',
    category: 'operaciones',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/Cabine-Grid'
  },
  {
    id: '7',
    title: 'HoneyNotes',
    subtitle: 'Refugio digital gamificado para parejas.',
    description:
      'Experiencia emocional interactiva centrada en recuperar la escritura como medio de conexión. Incluye editor de cartas con texturas reales, buzón animado, tienda de recompensas y una asistente IA que ayuda a mejorar el tono y la claridad del mensaje.',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Firebase', 'Motion UI'],
    aiFeatures: ['Lectura emocional del texto', 'Sugerencias de escritura', 'Predicción de reacción'],
    image: '/honey-note.webp',
    category: 'ia',
    featured: true,
    year: '2025',
    liveUrl: 'https://honeynotes.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/honeynotes'
  },
  {
    id: '8',
    title: 'Coralia Delights',
    subtitle: 'E-commerce artesanal con CRM y automatización hiperpersonalizada.',
    description:
      'Plataforma e-commerce pensada para negocios artesanos con landing, tienda y CRM en un mismo flujo. Incorpora checkout avanzado, rastreo de órdenes, inventario de combos y mensajes personalizados por WhatsApp generados con apoyo de IA.',
    techStack: ['Next.js 15', 'Firebase', 'Genkit', 'Gemini 2.5 Flash', 'WhatsApp'],
    aiFeatures: ['Perfilado de clientes', 'Mensajería hiperpersonalizada', 'Lealtad automatizada'],
    image: '/coralia-web.webp',
    category: 'ecommerce',
    featured: true,
    year: '2025',
    liveUrl: 'https://coraliadulcedetalle.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/Carolia-Delights'
  },
  {
    id: '9',
    title: 'TaskZenith',
    subtitle: 'Gestión de tareas corporativas con colaboración en tiempo real.',
    description:
      'Plataforma de organización con múltiples vistas, Pomodoro integrado y autenticación por roles. El dashboard se construyó sobre una cuadrícula flexible de 48 columnas con drag-and-drop y detección de colisiones para mantener densidad sin perder control.',
    techStack: ['React', 'TypeScript', 'Firestore', 'Drag and Drop', 'Pomodoro'],
    image: '/task-zentih.webp',
    category: 'productividad',
    year: '2025',
    liveUrl: 'https://task-zenith-nu.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/TaskZenith'
  },
  {
    id: '10',
    title: 'Big Jack RP',
    subtitle: 'ERP operativo moderno para restaurantes fast-food.',
    description:
      'Sistema que centraliza POS, cola de pedidos, inventario basado en recetas y pedidos online. También automatiza el descuento de ingredientes por receta y genera reportes ejecutivos con IA para convertir datos operativos en decisiones accionables.',
    techStack: ['React', 'Firebase', 'Node.js', 'Webhooks', 'Inventario por recetas'],
    aiFeatures: ['Reportes ejecutivos automáticos', 'Insights del negocio', 'Síntesis operativa'],
    image: '/saphp.webp',
    category: 'restaurante',
    featured: true,
    year: '2025',
    liveUrl: 'https://bigjack-rp.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/big-jack-rp'
  },
  {
    id: '11',
    title: 'gamejamdevjs-2026',
    subtitle: 'Videojuego Phaser 4 con escritorio retro y robots.',
    description:
      'Proyecto jugable que combina una capa diegética tipo sistema operativo con un juego de plataformas de reparación modular. La narrativa y la interacción se apoyan en Gemini REST API para que el asistente EVA responda de forma dinámica y no como simple texto decorativo.',
    techStack: ['Phaser 4', 'TypeScript', 'Gemini REST API', 'Narrative UI', 'Game Systems'],
    aiFeatures: ['Asistente virtual EVA', 'Narrativa dinámica', 'Respuestas contextuales'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    category: 'gaming',
    year: '2026',
    githubUrl: 'https://github.com/sjaquer/gamejamdevjs-2026'
  },
  {
    id: '12',
    title: 'Optimizador-Vuelos-CP-SAT',
    subtitle: 'Planificación logística para helicópteros con carga y pasajeros.',
    description:
      'Aplicación web para planificar rutas de vuelo con motor de optimización, validación estricta de datos y visualización interactiva sobre mapas SVG. La solución calcula escenarios según prioridad de carga, peso y eficiencia operativa.',
    techStack: ['Python', 'CP-SAT', 'Google OR-Tools', 'Excel Import', 'SVG Maps'],
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1600&q=80',
    category: 'logistica',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/Optimizador-Vuelos-CP-SAT'
  },
  {
    id: '13',
    title: 'DataWeave-BI',
    subtitle: 'Dashboard BI para múltiples tiendas y reportes diarios.',
    description:
      'Dashboard dinámico que consolida datos de distintas tiendas Shopify, organiza la información y genera reportes diarios con filtros, calendario y control de usuarios mediante Zadarma API. Está orientado a dar visibilidad operativa y reducir trabajo manual.',
    techStack: ['Next.js', 'Shopify APIs', 'Calendars', 'Zadarma API', 'BI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    category: 'analitica',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/DataWeave-BI'
  },
  {
    id: '14',
    title: 'Secret Love',
    subtitle: 'Experiencia romántica interactiva con narrativa generada.',
    description:
      'Experiencia web creada como regalo especial, con fondo parallax, cuenta regresiva y puertas lógicas desbloqueables mediante códigos secretos. Al ingresar el código correcto, la historia se genera de forma dinámica con IA para volver cada visita distinta.',
    techStack: ['Next.js', 'Genkit', 'Gemini', 'Parallax', 'Interactive UX'],
    aiFeatures: ['Historia dinámica', 'Narrativa generativa', 'Desbloqueo por código secreto'],
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80',
    category: 'experiencia',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/secretlove'
  },
  {
    id: '15',
    title: 'eCommerce-Panaderia',
    subtitle: 'SPA de catálogo y compra para panaderías y negocios de vitrina.',
    description:
      'Aplicación web rápida y modular diseñada como vitrina digital para catálogos. Incluye flujo de compra completo, notificaciones SSE y optimización de imágenes, con una arquitectura preparada para incorporar IA futura sin rehacer el producto.',
    techStack: ['React', 'SSE', 'Image FX', 'Modular Architecture', 'Catalog Flow'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80',
    category: 'ecommerce',
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/eCommerce-Panaderia'
  },
  {
    id: '16',
    title: 'LogiFlow',
    subtitle: 'ERP para call centers con leads, logística e inventario unificados.',
    description:
      'Sistema empresarial que integra Kommo CRM y Shopify con roles granulares, analíticas de rendimiento y una caché local agresiva para responder en menos de 100 ms. El resultado es una operación más rápida y con menos lecturas a base de datos.',
    techStack: ['React', 'Kommo CRM', 'Shopify API', 'localStorage Cache', 'Webhooks'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    category: 'operaciones',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/logiflow'
  }
];

