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
      'Implementación de sistemas propios para reingeniería operativa, reduciendo trabajo manual y mejorando el control de costos.',
    techStack: [
      'ERP In-House',
      'Reingeniería de Procesos',
      'Gestión de Costos',
      'Automatización'
    ],
    responsibilities: [
      'Implementé un ERP a medida que centraliza inventarios, recetas y ventas, reduciendo el uso de papel y hojas de cálculo desconectadas.',
      'Optimicé márgenes mediante reestructuración de la ingeniería de menú basada en datos reales de costos.',
      'Estandaricé procesos con manuales y protocolos operativos para asegurar replicabilidad del modelo de negocio.'
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
      'Diseño e implementación de infraestructura de datos para monitorear rentabilidad real por canal y producto.',
    techStack: [
      'Power BI',
      'Data Warehousing',
      'Proyección Financiera',
      'Automatización ETL'
    ],
    responsibilities: [
      'Implementé un modelo de datos que unifica fuentes dispersas (Shopify, Ads, almacén) en una única base para gerencia.',
      'Desarrollé dashboards automatizados para seguimiento de flujo de caja y P&L por canal y producto.',
      'Diseñé modelos de demanda para optimizar compras y reducir sobrestock y capital inmovilizado.'
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
      'Desarrollo de soluciones algorítmicas para optimizar rutas y uso de recursos en operaciones logísticas.',
    techStack: [
      'Python',
      'Google OR-Tools',
      'Optimización de Rutas',
      'Investigación Operativa'
    ],
    responsibilities: [
      'Desarrollé solvers personalizados para ruteo de vehículos (VRP) y asignación de recursos en transporte.',
      'Diseñé arquitecturas de solución modulares integradas con la operación física existente.',
      'Analicé viabilidad técnica y económica de proyectos de modernización tecnológica y automatización logística.'
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
    subtitle: 'Plataforma modular de e-commerce con CRM e integración de IA.',
    description:
      'Problema: Desorden en la gestión de pedidos, stock y seguimiento de clientes. ' +
      'Solución desarrollada: Sistema web centralizado con e-commerce, CRM y panel administrativo para controlar pedidos, clientes y stock en un solo lugar. ' +
      'Enfoque técnico/analítico: Automatización de procesos transaccionales, control de inventario y visualización de indicadores operativos y comerciales.',
    details: [
      'Plataforma completa: Catálogo, carrito, checkout y gestión de pedidos en producción.',
      'CRM integrado: Seguimiento de clientes, historial de compras y segmentación automatizada.',
      'IA aplicada: Recomendaciones de producto y asistente de atención al cliente.'
    ],
    techStack: ['React', 'Node.js', 'Firebase', 'IA Integration'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://www.coraliadulcedetalle.com/'
  },
  {
    id: '2',
    title: 'Dearel Intelligence Hub',
    subtitle: 'Hub de datos para rentabilidad y control comercial.',
    description:
      'Problema: Falta de visibilidad unificada de ventas, costos y rentabilidad por canal. ' +
      'Solución desarrollada: Intelligence hub que integra datos de Shopify, plataformas de anuncios y almacén en un modelo único de reporte financiero. ' +
      'Enfoque técnico/analítico: Automatización ETL, modelado de datos y dashboards de KPIs de margen, flujo de caja y rotación de inventario.',
    details: [
      'Pipeline ETL: Webhooks y automatización para centralizar datos de Shopify, Ads y Almacén.',
      'Dashboard ejecutivo: Métricas de P&L, flujo de caja y rentabilidad por producto en tiempo real.',
      'Impacto: Identificación de productos con margen negativo y optimización de inventario.'
    ],
    techStack: ['Data Engineering', 'Webhooks', 'ETL', 'SQL', 'Shopify API'],
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
      'Problema: Operación fragmentada entre hojas de cálculo, cajas manuales y control débil de inventario. ' +
      'Solución desarrollada: Sistema interno que integra punto de venta, inventario, recetas y caja diaria en un solo flujo operativo. ' +
      'Enfoque técnico/analítico: Automatización de registros de venta, control de costos por receta y monitoreo de indicadores diarios de operación.',
    details: [
      'POS integrado: Registro de ventas en tiempo real con control de turnos y cierre de caja.',
      'Inventario inteligente: Control de insumos, recetas y alertas de reposición automáticas.',
      'Dashboard financiero: Flujo de caja diario, costos operativos y margen por producto.'
    ],
    techStack: ['React', 'Firebase', 'Node.js', 'Firestore', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'plataforma',
    featured: true,
    year: '2025',
    liveUrl: 'https://bigjack-rp.vercel.app/'
  },
  {
    id: '4',
    title: 'TaskZenith',
    subtitle: 'Gestión de tareas con control por roles.',
    description:
      'Problema: Falta de trazabilidad y control de carga de trabajo en equipos pequeños. ' +
      'Solución desarrollada: Plataforma de tareas con asignación por rol, estados y vista consolidada de pendientes. ' +
      'Enfoque técnico/analítico: Registro estructurado de actividades, métricas de cumplimiento y automatización básica de recordatorios.',
    details: [
      'Roles y permisos: Sistema de acceso por niveles para equipos multifuncionales.',
      'Sincronización: Datos en tiempo real entre múltiples usuarios y dispositivos.',
      'IA: Clasificación automática y estimación inteligente de tiempos.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025',
    liveUrl: 'https://task-zenith-nu.vercel.app/'
  },
  {
    id: '5',
    title: 'Optimización Logística',
    subtitle: 'Modelo de optimización de rutas y costos de transporte.',
    description:
      'Problema: Ruteo manual de vehículos con altos costos operativos y baja utilización de capacidad. ' +
      'Solución desarrollada: Motor de optimización basado en Google OR-Tools para definir rutas y asignaciones con restricciones reales de operación. ' +
      'Enfoque técnico/analítico: Modelado matemático tipo VRP, uso de CP-SAT y análisis de escenarios para reducción de kilómetros recorridos y tiempos de servicio.',
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
    subtitle: 'Notas estructuradas con clasificación automática.',
    description:
      'Problema: Notas dispersas sin estructura para seguimiento de ideas y tareas. ' +
      'Solución desarrollada: Aplicación de notas que organiza información por proyectos y etiquetas, con apoyo de IA para clasificación. ' +
      'Enfoque técnico/analítico: Definición de modelos de categorización y consolidación de información para facilitar el seguimiento operativo.',
    details: [
      'UX Research: Diseño centrado en reducir la carga cognitiva del usuario.',
      'IA integrada: Categorización automática y generación de resúmenes de notas.',
      'Experimental: Laboratorio para probar nuevas interacciones de IA con el usuario.'
    ],
    techStack: ['React', 'AI/NLP', 'TypeScript', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025',
    liveUrl: 'https://honeynotes.vercel.app/'
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
