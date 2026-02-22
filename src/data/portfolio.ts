import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Coordinador de Operaciones y Sistemas',
    company: 'Big Jack',
    role: 'Coordinador Operativo',
    duration: 'Nov 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    summary:
      'Construí e implementé un sistema interno para digitalizar la operación del negocio, reduciendo ~90% del trabajo manual en registros y control de insumos.',
    techStack: [
      'ERP In-House',
      'Control de Costos',
      'Automatización',
      'React / Firebase'
    ],
    responsibilities: [
      'Desarrollé un sistema ERP a medida que centraliza inventarios, recetas y ventas, eliminando hojas de cálculo y reduciendo errores de registro en ~90%.',
      'Reduje costos operativos en 8–12% mediante reingeniería de recetas y control digital de insumos.',
      'Estandaricé procesos con manuales y protocolos operativos para facilitar la replicabilidad del negocio.'
    ]
  },
  {
    id: '2',
    title: 'Analista de Inteligencia Comercial',
    company: 'Dearel',
    role: 'Analista BI',
    duration: 'May 2025 - Nov 2025',
    location: 'Lima, Perú',
    summary:
      'Construí un modelo de datos unificado que conecta ventas, costos y publicidad en un solo dashboard para la toma de decisiones.',
    techStack: [
      'Power BI',
      'SQL',
      'ETL',
      'Shopify API'
    ],
    responsibilities: [
      'Implementé un pipeline de datos que unifica Shopify, plataformas de Ads y almacén en una base consolidada de reportes.',
      'Desarrollé dashboards automatizados de flujo de caja, P&L por canal y rentabilidad por producto.',
      'Construí modelos de proyección de demanda que apoyaron decisiones de compra y redujeron sobrestock.'
    ]
  },
  {
    id: '3',
    title: 'Analista de Optimización Logística',
    company: 'Proyectos Independientes',
    role: 'Analista Operativo',
    duration: 'Jun 2022 - Actualidad',
    location: 'Remoto',
    summary:
      'Desarrollé soluciones algorítmicas para optimizar rutas de transporte y asignación de recursos usando investigación operativa.',
    techStack: [
      'Python',
      'Google OR-Tools',
      'Optimización de Rutas',
      'Investigación Operativa'
    ],
    responsibilities: [
      'Desarrollé solvers de ruteo vehicular (VRP) con restricciones reales de capacidad, distancia y ventanas horarias.',
      'Construí módulos reutilizables para distintos escenarios de distribución y asignación de recursos.',
      'Analicé viabilidad técnica y económica de proyectos de automatización logística para operadores pequeños.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: '2022 – 2026',
    status: 'Noveno ciclo (en curso)',
    relevant: [
      'Gestión de Operaciones',
      'Finanzas',
      'Planeamiento Estratégico'
    ],
    certificateUrl: '',
    description:
      'Formación en administración con énfasis en operaciones, análisis financiero y negocios internacionales.'
  },
  {
    id: '2',
    degree: 'Artificial Intelligence Professional (CAIPC®)',
    institution: 'CertiProf',
    duration: '2025',
    status: 'Certificación',
    relevant: ['Fundamentos de ML', 'Estrategia de IA', 'NLP Básico'],
    certificateUrl: '',
    description: 'Certificación en fundamentos de inteligencia artificial aplicada a proyectos y estrategia de datos.'
  },
  {
    id: '3',
    degree: 'Curso especializado en IA Generativa',
    institution: 'Amazon Web Services (AWS)',
    duration: '2025',
    status: 'Curso especializado',
    relevant: ['IA Generativa', 'Prompt Engineering', 'Casos de uso empresarial'],
    certificateUrl: '',
    description: 'Curso sobre aplicaciones prácticas de IA generativa en entornos de negocio y automatización.'
  },
  {
    id: '4',
    degree: 'Microsoft Official Course: SQL Server',
    institution: 'Microsoft / IDAT',
    duration: '2025',
    status: 'Curso oficial',
    relevant: ['Administración de BD', 'Consultas SQL', 'Optimización'],
    certificateUrl: '',
    description: 'Curso oficial de Microsoft en gestión y optimización de bases de datos SQL Server.'
  },
  {
    id: '5',
    degree: 'Especialización en Power BI',
    institution: 'Zegel / Intercorp',
    duration: '2025',
    status: 'Especialización técnica',
    relevant: ['DAX', 'Modelado de Datos', 'Visualización'],
    certificateUrl: '',
    description: 'Especialización práctica en Power BI: modelado de datos, DAX y construcción de dashboards operativos.'
  },
  {
    id: '6',
    degree: 'Sustainability & Global Trade',
    institution: 'Arizona State University',
    duration: '2024',
    status: 'Curso internacional',
    relevant: ['Sostenibilidad', 'Comercio Internacional'],
    certificateUrl: '',
    description: 'Curso en sostenibilidad organizacional y comercio internacional impartido por Arizona State University.'
  }
];


export const projects: Project[] = [
  {
    id: '1',
    title: 'Coralia Web',
    subtitle: 'E-commerce con CRM y panel administrativo integrado.',
    description:
      'Problema: Desorden en la gestión de pedidos, stock y seguimiento de clientes. ' +
      'Solución desarrollada: Sistema web que centraliza e-commerce, CRM y panel administrativo para controlar pedidos, clientes y stock en un solo lugar. ' +
      'Enfoque técnico: Automatización de pedidos, control de inventario y visualización de indicadores de venta.',
    details: [
      'Plataforma funcional: Catálogo, carrito, checkout y gestión de pedidos en producción.',
      'CRM integrado: Seguimiento de clientes, historial de compras y segmentación.',
      'IA básica: Recomendaciones de producto y asistente de consultas.'
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
    title: 'Dearel – Dashboard Comercial',
    subtitle: 'Modelo de datos y dashboards para control de rentabilidad.',
    description:
      'Problema: Falta de visibilidad unificada de ventas, costos y rentabilidad por canal. ' +
      'Solución desarrollada: Modelo de datos que integra Shopify, plataformas de Ads y almacén en un reporte financiero consolidado. ' +
      'Enfoque técnico: Pipeline ETL, modelado de datos y dashboards de KPIs de margen y flujo de caja.',
    details: [
      'Pipeline ETL: Webhooks y scripts para centralizar datos de Shopify, Ads y almacén.',
      'Dashboard operativo: Métricas de P&L, flujo de caja y rentabilidad por producto.',
      'Resultado: Identifiqué productos con margen negativo y apoyé decisiones de inventario.'
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
    subtitle: 'Sistema interno de gestión operativa para restaurante.',
    description:
      'Problema: Operación fragmentada entre hojas de cálculo, cajas manuales y control débil de inventario. ' +
      'Solución desarrollada: Sistema que integra punto de venta, inventario, recetas y caja diaria en un solo flujo. ' +
      'Enfoque técnico: Automatización de registros de venta, control de costos por receta y seguimiento de indicadores diarios.',
    details: [
      'POS integrado: Registro de ventas en tiempo real con control de turnos y cierre de caja.',
      'Control de insumos: Recetas vinculadas a inventario con alertas de reposición.',
      'Dashboard operativo: Flujo de caja diario, costos y margen por producto.'
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
    subtitle: 'Proyecto personal – Gestión de tareas con roles.',
    description:
      'Problema: Necesitaba una herramienta para organizar tareas por rol y prioridad en equipos pequeños. ' +
      'Solución desarrollada: App de tareas con asignación por rol, estados y vista consolidada de pendientes. ' +
      'Enfoque técnico: Registro estructurado, métricas de cumplimiento y recordatorios automáticos.',
    details: [
      'Roles y permisos: Acceso por niveles para equipos pequeños.',
      'Sincronización: Datos en tiempo real entre múltiples dispositivos.',
      'IA experimental: Clasificación automática y estimación de tiempos.'
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
    subtitle: 'Proyecto de investigación – Optimización de rutas con OR-Tools.',
    description:
      'Problema: Ruteo manual de vehículos con altos costos y baja utilización de capacidad. ' +
      'Solución desarrollada: Solver basado en Google OR-Tools para definir rutas con restricciones reales de operación. ' +
      'Enfoque técnico: Modelado VRP, uso de CP-SAT y análisis de escenarios para reducir kilómetros y tiempos.',
    details: [
      'Investigación Operativa: Algoritmos de ruteo vehicular (VRP) con restricciones reales.',
      'Reducción de costos: Optimización matemática de rutas y asignación de recursos.',
      'Modular: Componentes reutilizables para distintos escenarios de distribución.'
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
    subtitle: 'Laboratorio de aprendizaje – Notas con IA.',
    description:
      'Problema: Notas dispersas sin estructura para seguimiento de ideas. ' +
      'Solución desarrollada: App de notas que organiza información por proyectos y etiquetas, con IA para clasificación automática. ' +
      'Enfoque técnico: Proyecto experimental para aprender integración de IA/NLP en interfaces de usuario.',
    details: [
      'UX enfocada: Diseño centrado en reducir la carga cognitiva del usuario.',
      'IA experimental: Categorización automática y generación de resúmenes.',
      'Laboratorio: Proyecto personal para explorar interacciones de IA con el usuario.'
    ],
    techStack: ['React', 'AI/NLP', 'TypeScript', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1600',
    category: 'desarrollo',
    year: '2025',
    liveUrl: 'https://honeynotes.vercel.app/'
  }
];

export const skills: Skill[] = [
  // Operaciones y Gestión
  { name: 'Control de Costos', category: 'Operaciones y Gestión', icon: 'trending-up' },
  { name: 'Gestión de Inventarios', category: 'Operaciones y Gestión', icon: 'database' },
  { name: 'Reingeniería de Procesos', category: 'Operaciones y Gestión', icon: 'settings' },
  { name: 'Investigación Operativa', category: 'Operaciones y Gestión', icon: 'cpu' },
  { name: 'Excel Avanzado', category: 'Operaciones y Gestión', icon: 'bar-chart' },

  // Business Intelligence
  { name: 'Power BI', category: 'Business Intelligence', icon: 'bar-chart' },
  { name: 'DAX', category: 'Business Intelligence', icon: 'bar-chart' },
  { name: 'Modelado de Datos', category: 'Business Intelligence', icon: 'database' },
  { name: 'SQL Server', category: 'Business Intelligence', icon: 'database' },
  { name: 'ETL / Pipelines', category: 'Business Intelligence', icon: 'cpu' },

  // Desarrollo y Automatización
  { name: 'React', category: 'Desarrollo y Automatización', icon: 'code' },
  { name: 'TypeScript', category: 'Desarrollo y Automatización', icon: 'code' },
  { name: 'Node.js', category: 'Desarrollo y Automatización', icon: 'server' },
  { name: 'Python', category: 'Desarrollo y Automatización', icon: 'terminal' },
  { name: 'Firebase', category: 'Desarrollo y Automatización', icon: 'database' },
  { name: 'APIs e Integraciones', category: 'Desarrollo y Automatización', icon: 'settings' }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Dueño – Big Jack',
    role: 'Cliente directo',
    rating: 5,
    text: 'Sebastian construyó el sistema que usamos a diario. Pasamos de registrar todo en papel a tener control digital de cada insumo y venta. Noté la diferencia desde la primera semana.',
    date: '2025-12-01',
    location: 'Lima, Perú',
    projectId: '3',
    source: 'Interno'
  },
  {
    id: 't2',
    name: 'Responsable Comercial – Dearel',
    role: 'Cliente directo',
    rating: 5,
    text: 'Antes no teníamos claro qué productos eran rentables. Los dashboards que implementó nos ayudaron a tomar mejores decisiones de compra e inventario.',
    date: '2025-10-15',
    location: 'Lima, Perú',
    projectId: '2',
    source: 'Cliente'
  }
];
