import { Experience, Education, Project } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Operations Coordinator',
    titleEn: 'Operations Coordinator',
    company: 'Big Jack-Burgers',
    role: 'Operations Coordinator',
    roleEn: 'Operations Coordinator',
    duration: 'Nov 2025 - Actualidad',
    location: 'Lima, Perú',
    locationEn: 'Lima, Peru',
    summary:
      'Lidero la optimización operativa y el desarrollo de sistemas internos, logrando mejoras críticas en el procesamiento de pedidos y la rentabilidad del negocio.',
    summaryEn:
      'Leading operational optimization and internal systems development, achieving critical improvements in order processing and business profitability.',
    techStack: [
      'React',
      'Firebase',
      'Python',
      'Análisis Predictivo',
      'Costeo de Recetas'
    ],
    responsibilities: [
      'Desarrollé, como único programador a cargo, un sistema interno que redujo el tiempo de procesamiento de pedidos en un 35%.',
      'Aumenté el margen de rentabilidad mensual en un 15% aplicando modelos de análisis predictivo sobre los costos de insumos y recetas.',
      'Implementé dashboards de control de inventario en tiempo real vinculados a la cola de producción.'
    ],
    responsibilitiesEn: [
      'Built an internal system (sole developer) that reduced order processing time by 35%.',
      'Increased monthly profit margin by 15% by applying predictive analysis models on ingredient costs and recipes.',
      'Implemented real-time inventory control dashboards linked to the production queue.'
    ]
  },
  {
    id: '2',
    title: 'Desarrollador de Soluciones de Negocios',
    titleEn: 'Business Solutions Developer',
    company: 'Dearel',
    role: 'Solutions Developer',
    roleEn: 'Solutions Developer',
    duration: 'Ago 2025 - Nov 2025',
    location: 'Lima, Perú',
    locationEn: 'Lima, Peru',
    summary:
      'Diseñé e implementé infraestructuras de datos para unificar operaciones de e-commerce y CRM, eliminando cuellos de botella manuales.',
    summaryEn:
      'Designed and implemented data infrastructures to unify e-commerce and CRM operations, eliminating manual bottlenecks.',
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
    ],
    responsibilitiesEn: [
      'Designed interactive dashboards for real-time sales monitoring, enabling immediate reaction to market trends.',
      'Integrated platforms (Shopify, Google Sheets, CRM) via APIs, removing 30% of manual data entry tasks.',
      'Automated lead and order flows into the central logistics system.'
    ]
  },
  {
    id: '3',
    title: 'Prácticas Marketing Digital',
    titleEn: 'Digital Marketing Intern',
    company: 'Neon LED Publicidad',
    role: 'Marketing Intern',
    roleEn: 'Marketing Intern',
    duration: 'Jun 2025 - Ago 2025',
    location: 'Lima, Perú',
    locationEn: 'Lima, Peru',
    summary:
      'Lideré estrategias de contenido y optimización técnica para canales digitales, incrementando significativamente la captación de clientes.',
    summaryEn:
      'Led content strategies and technical optimization for digital channels, significantly increasing customer acquisition.',
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
    ],
    responsibilitiesEn: [
      'Increased organic leads by 40% by leading the growth and content strategy of the YouTube channel.',
      'Applied technical SEO optimizations on the corporate website, improving ranking for competitive keywords.',
      'Analyzed traffic and behavior with Google Analytics to adjust advertising campaigns.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador Independiente',
    titleEn: 'Independent Developer',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    roleEn: 'Full-Stack Developer',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    locationEn: 'Remote',
    summary:
      'Arquitecto soluciones web personalizadas y automatizaciones para diversos sectores, enfocándome en la eficiencia operativa y escalabilidad.',
    summaryEn:
      'Architect customized web solutions and automations for various industries, focusing on operational efficiency and scalability.',
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
    ],
    responsibilitiesEn: [
      'Led the creation of over 6 corporate web systems and e-commerce platforms.',
      'Implemented automations with Python and SQL, reducing data-entry errors by 25%.',
      'Designed scalable architectures integrating AI services and payment gateways.'
    ]
  },
  {
    id: '5',
    title: 'Practicante de Logística',
    titleEn: 'Logistics Intern',
    company: 'Zeus Maritime-Shipchandler',
    role: 'Logistic Intern',
    roleEn: 'Logistics Intern',
    duration: 'Abr 2025 - May 2025',
    location: 'Callao, Perú',
    locationEn: 'Callao, Peru',
    summary:
      'Soporte administrativo y operativo en la gestión de suministros marítimos bajo estándares de alta precisión.',
    summaryEn:
      'Administrative and operational support in maritime supply management under high-precision standards.',
    techStack: [
      'ERP Management',
      'Excel Avanzado',
      'Logística Internacional'
    ],
    responsibilities: [
      'Gestionó órdenes de compra en el ERP con un 95% de precisión, asegurando el flujo de suministros sin retrasos.',
      'Coordinó con proveedores y almacén para la recepción y despacho de mercancía crítica.',
      'Mantuvo la integridad de los datos de inventario mediante auditorías periódicas en el sistema.'
    ],
    responsibilitiesEn: [
      'Managed purchase orders in the ERP with 95% accuracy, ensuring uninterrupted supply flow.',
      'Coordinated with suppliers and warehouse for receiving and dispatching critical cargo.',
      'Maintained inventory data integrity through periodic system audits.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    degreeEn: "Bachelor's in Business Administration and International Business",
    institution: 'Universidad Norbert Wiener',
    institutionEn: 'Norbert Wiener University',
    duration: 'Mar 2022 - Dic 2026',
    status: '10.º Ciclo (en curso)',
    statusEn: '10th Semester (in progress)',
    relevant: ['Arquitectura de Negocio', 'Gestión de Proyectos', 'Estrategia Digital'],
    tier: 'academic',
    description: 'Formación académica enfocada en la optimización de procesos de negocio internacionales y gestión estratégica.',
    descriptionEn: 'Academic training focused on international business process optimization and strategic management.',
    logoUrl: '/images/wiener_logo.webp'
  },
  {
    id: '2',
    degree: 'Artificial Intelligence Professional (CAIPC®)',
    degreeEn: 'Artificial Intelligence Professional (CAIPC®)',
    institution: 'CertiProf',
    institutionEn: 'CertiProf',
    duration: '2025',
    status: 'Certificación',
    statusEn: 'Certification',
    relevant: ['Fundamentos de ML', 'Estrategia de IA'],
    tier: 'ai-certification',
    description: 'Certificación oficial que avala conocimientos en inteligencia artificial y modelos de lenguaje.',
    descriptionEn: 'Official certification validating knowledge in artificial intelligence and language models.',
    logoUrl: '/images/certiprof_logo.webp'
  },
  {
    id: '3',
    degree: 'Diplomado en IA para Negocios',
    degreeEn: 'Diploma in AI for Business',
    institution: 'IDAT',
    institutionEn: 'IDAT',
    duration: '2025',
    status: 'Diplomado',
    statusEn: 'Diploma',
    relevant: ['IA Aplicada', 'Optimización de Procesos'],
    tier: 'ai-certification',
    description: 'Especialización en la implementación de soluciones de inteligencia artificial para la mejora de la rentabilidad y eficiencia empresarial.',
    descriptionEn: 'Specialization in implementing artificial intelligence solutions to improve corporate profitability and efficiency.',
    logoUrl: '/images/idat_logo.webp'
  },
  {
    id: '4',
    degree: 'AWS Generative AI for Executives',
    degreeEn: 'AWS Generative AI for Executives',
    institution: 'Amazon Web Services (AWS)',
    institutionEn: 'Amazon Web Services (AWS)',
    duration: '2025',
    status: 'Certificación',
    statusEn: 'Certification',
    relevant: ['IA Generativa', 'Estrategia Corporativa'],
    tier: 'ai-certification',
    description: 'Enfoque ejecutivo sobre el despliegue de modelos fundacionales para la creación de valor en organizaciones.',
    descriptionEn: 'Executive focus on deploying foundational models for organizational value creation.',
    logoUrl: '/images/aws_logo.webp'
  },
  {
    id: '5',
    degree: 'Microsoft SQL Server',
    degreeEn: 'Microsoft SQL Server',
    institution: 'Microsoft / IDAT',
    institutionEn: 'Microsoft / IDAT',
    duration: '2024',
    status: 'Curso oficial',
    statusEn: 'Official course',
    relevant: ['Diseño Relacional', 'T-SQL', 'BI'],
    tier: 'tech',
    description: 'Diseño y gestión de bases de datos relacionales para entornos corporativos y analítica.',
    descriptionEn: 'Design and management of relational databases for corporate environments and analytics.',
    logoUrl: '/images/microsoft_logo.webp'
  },
  {
    id: '6',
    degree: 'Especialización en Power BI',
    degreeEn: 'Power BI Specialization',
    institution: 'IDAT / Intercorp',
    institutionEn: 'IDAT / Intercorp',
    duration: '2025',
    status: 'Especialización',
    statusEn: 'Specialization',
    relevant: ['DAX', 'Data Visualization', 'ETL'],
    tier: 'tech',
    description: 'Dominio de herramientas de visualización de datos y modelado para la toma de decisiones.',
    descriptionEn: 'Mastery of data visualization tools and modeling for decision making.',
    logoUrl: '/images/idat_logo.webp'
  },
  {
    id: '7',
    degree: 'Python para Análisis de Datos',
    degreeEn: 'Python for Data Analysis',
    institution: 'Udemy',
    institutionEn: 'Udemy',
    duration: '2024',
    status: 'Curso especializado',
    statusEn: 'Specialized course',
    relevant: ['Automatización', 'Pandas', 'NumPy'],
    tier: 'tech',
    description: 'Desarrollo de scripts para automatización de tareas y procesamiento de grandes volúmenes de información.',
    descriptionEn: 'Development of scripts for task automation and processing of massive data volumes.',
    logoUrl: 'https://cdn.simpleicons.org/udemy/white'
  },
  {
    id: '8',
    degree: 'Excel Avanzado & Dashboards',
    degreeEn: 'Advanced Excel & Dashboards',
    institution: 'Udemy',
    institutionEn: 'Udemy',
    duration: '2024',
    status: 'Certificación',
    statusEn: 'Certification',
    relevant: ['Macros', 'VBA', 'Análisis Financiero'],
    tier: 'tech',
    description: 'Creación de herramientas de control financiero y operativo mediante hojas de cálculo avanzadas.',
    descriptionEn: 'Creation of operational and financial control tools using advanced spreadsheets.',
    logoUrl: 'https://cdn.simpleicons.org/udemy/white'
  },
  {
    id: '9',
    degree: 'Competencias Digitales',
    degreeEn: 'Digital Skills',
    institution: 'Google',
    institutionEn: 'Google',
    duration: '2024',
    status: 'Certificación',
    statusEn: 'Certification',
    relevant: ['Marketing Digital', 'Analítica Web'],
    tier: 'tech',
    description: 'Fundamentos de presencia digital, estrategia de contenidos y análisis de métricas.',
    descriptionEn: 'Fundamentals of digital presence, content strategy and metrics analysis.',
    logoUrl: 'https://cdn.simpleicons.org/google/white'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Big Jack RP & Menu',
    subtitle: 'Ecosistema operativo de producción gastronómica.',
    description:
      'Ecosistema en tiempo real que automatiza el control de inventario insumo a insumo desde el autopedido del cliente hasta la producción en cocina.',
    techStack: ['React', 'Firebase', 'Node.js', 'Next.js', 'Webhooks', 'Real-time Sync'],
    category: 'restaurante',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/big-jack-menu',
    simulatorId: 'bigjack',
    caseStudy: {
      problem: 'Desfase del 20% en inventario e ineficiencias por desconexión entre salón y cocina.',
      solution: 'Sincronización automatizada de stock y comandas en tiempo real por webhooks por cada receta vendida.',
      metrics: [
        { label: 'Tiempo de proceso', value: '35', prefix: '-', suffix: '%' },
        { label: 'Margen mensual', value: '15', prefix: '+', suffix: '%' },
        { label: 'Precisión stock', value: '98', prefix: '', suffix: '%' }
      ]
    }
  },
  {
    id: '2',
    title: 'TaskMe',
    subtitle: 'Productividad personal y académica Cyber-Focus.',
    description:
      'Tablero Kanban interactivo con Google Calendar e IA semántica de Genkit para estructurar tareas a partir de lenguaje natural.',
    techStack: ['React 19', 'Next.js 15', 'Firebase', 'Google Genkit', 'dnd-kit', 'Framer Motion'],
    aiFeatures: ['Autoorganización de tareas', 'Mapeo semántico de lenguaje natural', 'Preferencia horaria inteligente'],
    category: 'productividad',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/taskME',
    simulatorId: 'taskme',
    caseStudy: {
      problem: 'Sobrecarga cognitiva e ineficiencia debido a tareas dispersas en múltiples aplicaciones.',
      solution: 'Flujo centralizado con sincronización bidireccional y estructuración predictiva con modelos de lenguaje.',
      metrics: [
        { label: 'Sincronización en vivo', value: '100', prefix: '', suffix: '%' },
        { label: 'Eficiencia diaria', value: '40', prefix: '+', suffix: '%' },
        { label: 'Sugerencias IA', value: '5000', prefix: '+', suffix: '' }
      ]
    }
  },
  {
    id: '3',
    title: 'ORDEV',
    subtitle: 'Planificación logística aérea con CP-SAT solver.',
    description:
      'Planificador de rutas aéreas con el solver CP-SAT de Google OR-Tools para resolver peso, combustible y pasaje en mapas interactivos.',
    techStack: ['Python', 'Google OR-Tools CP-SAT', 'React', 'SVG Maps', 'TypeScript'],
    category: 'logistica',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/Optimizador-Vuelos-CP-SAT',
    simulatorId: 'ordev',
    caseStudy: {
      problem: 'Horas de cálculo manual y sobrecosto de combustible del 18% por rutas subóptimas.',
      solution: 'Motor combinatorio avanzado que procesa miles de restricciones por segundo y dibuja la trayectoria óptima.',
      metrics: [
        { label: 'Tiempo de cálculo', value: '99', prefix: '-', suffix: '%' },
        { label: 'Ahorro combustible', value: '12', prefix: '-', suffix: '%' },
        { label: 'Rutas calculadas', value: '250', prefix: '+', suffix: '' }
      ]
    }
  },
  {
    id: '4',
    title: 'TaskZenith',
    subtitle: 'Gestión y personalización adaptativa en tiempo real.',
    description:
      'Espacio de trabajo modular con grid persistente de 48 columnas, temporizadores Pomodoro integrados y control de acceso.',
    techStack: ['React', 'TypeScript', 'Firebase Firestore', 'CSS Grid', 'dnd-kit', 'Pomodoro API'],
    category: 'productividad',
    featured: true,
    year: '2025',
    liveUrl: 'https://task-zenith-nu.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/TaskZenith',
    simulatorId: 'taskzenith',
    caseStudy: {
      problem: 'Estructuras de gestión rígidas que limitan la flexibilidad visual y la fluidez del equipo.',
      solution: 'Dashboard modular interactivo con detección de colisiones y persistencia de widgets en base de datos.',
      metrics: [
        { label: 'Columnas del Grid', value: '48', prefix: '', suffix: '' },
        { label: 'Widgets modulares', value: '12', prefix: '+', suffix: '' },
        { label: 'Productividad', value: '25', prefix: '+', suffix: '%' }
      ]
    }
  },
  {
    id: '5',
    title: 'Big Jack Bot',
    subtitle: 'Procesamiento de pedidos con IA híbrida.',
    description:
      'Agente conversacional que procesa chats de WhatsApp mediante Llama-3 local para privacidad y Gemini en la nube para estructuración.',
    techStack: ['Electron', 'React', 'Ollama (Llama-3)', 'Gemini API', 'WhatsApp Web API', 'Node.js'],
    aiFeatures: ['Detección de intenciones local', 'Extracción de entidades a JSON', 'Webhook automático a ERP'],
    category: 'ia',
    featured: true,
    year: '2025',
    githubUrl: 'https://github.com/sjaquer/bigjack-bot',
    simulatorId: 'whatsappbot',
    caseStudy: {
      problem: 'Demoras de 8 minutos por cliente en toma manual de pedidos, reduciendo la conversión.',
      solution: 'Procesamiento lingüístico híbrido local/nube que extrae órdenes en segundos a partir de mensajes informales.',
      metrics: [
        { label: 'Tiempo por orden', value: '90', prefix: '-', suffix: '%' },
        { label: 'Conversión de chat', value: '22', prefix: '+', suffix: '%' },
        { label: 'Reducción costo API', value: '65', prefix: '-', suffix: '%' }
      ]
    }
  }
];

