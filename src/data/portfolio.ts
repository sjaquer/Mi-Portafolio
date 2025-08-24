import { Experience, Education, Project, Skill, GalleryItem } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Estratega de Contenido & SEO',
    company: 'NHL Publicidad',
    role: 'Estratega de Contenido',
    duration: 'Mayo 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    summary:
      'Lidero la estrategia de contenidos y optimización orgánica enfocada en crecimiento de audiencias y conversión en plataformas de video y web.',
    techStack: [
      'YouTube',
      'SEO',
      'Analytics',
      'Segmentación de Audiencias',
      'Gestión de Proyectos'
    ],
    responsibilities: [
      'Diseño y ejecución de la estrategia de contenidos para YouTube, alineada a objetivos de marca y conversión.',
      'Optimización SEO on-page y técnica del sitio web para mejorar visibilidad orgánica y tráfico cualificado.',
      'Análisis de audiencias y métricas (CTR, retención, conversiones) para iterar formatos y pautas de contenido.',
      'Coordinación con equipos creativos y comerciales para calendarización y ejecución de campañas multiplataforma.'
    ]
  },
  {
    id: '2',
    title: 'Especialista en Soporte Técnico y Mantenimiento de Sistemas',
    company: 'Freelance / Independiente',
    role: 'Especialista Técnico',
    duration: 'Junio 2022 - Actualidad',
    location: 'Lima, Perú',
    summary:
      'Presto soporte técnico integral a clientes residenciales y PYMEs, con foco en diagnósticos rápidos y soluciones escalables.',
    techStack: [
      'Diagnóstico HW/SW',
      'Windows / Linux',
      'Optimización de Sistemas',
      'Mantenimiento Preventivo'
    ],
    responsibilities: [
      'Atención integral a incidencias de hardware y software para clientes residenciales y PYMEs.',
      'Optimización de rendimiento mediante limpieza, reconfiguración y actualización de sistemas operativos.',
      'Implementación de rutinas de mantenimiento preventivo y documentación de procesos técnicos.',
      'Asesoría y montaje de equipos orientados a productividad y gaming según requisitos del cliente.'
    ]
  },
  {
    id: '3',
    title: 'Asistente de Logística y Abastecimiento (Prácticas)',
    company: 'Zeus Maritime',
    role: 'Asistente de Logística',
    duration: 'Abril 2025 - Mayo 2025',
    location: 'Callao, Perú',
    summary:
      'Soporte operativo en gestión de órdenes y documentación comercial, contribuyendo a la reducción de tiempos administrativos.',
    techStack: [
      'Gestión de Órdenes',
      'Facturación',
      'Procesos de Compra',
      'Documentación Comercial'
    ],
    responsibilities: [
      'Administración del ciclo de órdenes de compra y coordinación con proveedores.',
      'Emisión y control de facturación y guías de remisión para operaciones nacionales e internacionales.',
      'Generación de documentación comercial y soporte en la gestión logística de embarques.',
      'Colaboración en mejoras de proceso para reducir tiempos administrativos.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador 3D / Artista de Entornos en Tiempo Real',
    company: 'Freelance / Independiente',
    role: 'Artista 3D / Desarrollador',
    duration: 'Febrero 2018 - Abril 2025',
    location: 'Lima, Perú',
    summary:
      'Diseño y producción de entornos 3D optimizados para tiempo real, abarcando modelado, texturizado e integración en motores.',
    techStack: [
      'Unreal Engine',
      'Autodesk Maya',
      'Blender',
      'Renderizado en Tiempo Real'
    ],
    responsibilities: [
      'Diseño y creación de escenarios 3D optimizados para tiempo real (videojuegos y visualización).',
      'Modelado, texturizado y optimización de assets para lograr rendimiento y calidad visual.',
      'Integración de escenas en motores 3D, pruebas de iluminación y ajustes de performance.',
      'Entrega de paquetes técnicos y artísticos para equipos de desarrollo y producción.'
    ]
  },
  {
    id: '5',
    title: 'Técnico de Soporte — Entorno Gaming',
    company: 'Gomaju Internet Gaming',
    role: 'Técnico de Soporte',
    duration: 'Enero 2023 - Julio 2023',
    location: 'Lima, Perú',
    summary:
      'Responsable del mantenimiento y disponibilidad de equipos en sala gaming, garantizando experiencia óptima para usuarios.',
    techStack: [
      'Soporte Técnico',
      'Mantenimiento Hardware',
      'Gestión de Inventario',
      'Atención al Cliente'
    ],
    responsibilities: [
      'Soporte y mantenimiento de equipos en sala de gaming, asegurando uptime y experiencia de usuario.',
      'Gestión de inventarios y control de piezas de recambio.',
      'Resolución de incidencias y asesoría técnica a usuarios en tiempo real.',
      'Colaboración en mejoras de infraestructura para optimizar rendimiento.'
    ]
  },
  {
    id: '6',
    title: 'Analista de Procesos & Asistente Administrativo',
    company: 'Romaseda',
    role: 'Analista de Procesos',
    duration: 'Setiembre 2018 - Febrero 2020',
    location: 'Lima, Perú',
    summary:
      'Optimicé flujos administrativos y reportes financieros mediante automatizaciones que mejoraron la eficiencia operativa.',
    techStack: [
      'Excel Avanzado',
      'Automatización de Procesos',
      'Análisis Financiero',
      'Gestión Documental'
    ],
    responsibilities: [
      'Automatización de flujos administrativos mediante plantillas y macros en Excel.',
      'Diseño y presentación de reportes financieros que mejoraron la toma de decisiones.',
      'Optimización de procesos administrativos reduciendo tiempos operativos en ~30%.',
      'Soporte en gestión documental y control de proveedores.'
    ]
  }
];

/**
 * education: ahora incluye campo `description` con texto contextual y mejor redacción.
 */
export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: 'Mar 2022 - Dic 2026',
    status: 'Estudiante (7.º ciclo)',
    relevant: [
      'Transformación Digital',
      'Estrategia Empresarial',
      'Comercio Internacional',
      'Metodologías de Investigación'
    ],
    certificateUrl: '/pdf/constancia-unw.pdf',
    description:
      'Formación universitaria orientada a comprender la gestión empresarial en entornos globales. Enfasis en transformación digital, estrategias de negocio y comercio internacional aplicados a proyectos reales y casos de estudio.'
  },
  {
    id: '2',
    degree: 'Inglés Avanzado (C1)',
    institution: 'Instituto SISE',
    duration: 'Ago 2022 - Oct 2022',
    status: 'Completado',
    relevant: ['Comunicación Oral y Escrita', 'Comprensión Auditiva'],
    certificateUrl: '/pdf/ingles-sise.pdf',
    description:
      'Programa intensivo orientado a comunicación avanzada en contextos profesionales, centrado en expresión oral, redacción técnica y comprensión auditiva para entornos laborales y académicos.'
  },
  {
    id: '3',
    degree: 'Diplomado: Inteligencia Artificial para los Negocios',
    institution: 'IDAT',
    duration: 'Mar 2025 - Jul 2025',
    status: 'Completado',
    relevant: ['Machine Learning aplicado', 'Automatización con IA', 'Análisis Predictivo'],
    certificateUrl: '/pdf/diplomadoia.pdf',
    description:
      'Especialización aplicada a la integración de IA en procesos empresariales: identificación de casos de uso, pipelines de datos y modelos para automatización y toma de decisiones.'
  },
  {
    id: '4',
    degree: 'SQL & Bases de Datos Relacionales (Microsoft)',
    institution: 'IDAT + Microsoft',
    duration: 'Dic 2024 - Feb 2025',
    status: 'Completado',
    relevant: ['SQL Server', 'Optimización de Queries'],
    certificateUrl: '/pdf/sql.pdf',
    description:
      'Curso práctico sobre modelado relacional, consultas avanzadas y optimización de rendimiento en SQL Server, con foco en reporting y análisis de datos empresariales.'
  },
  {
    id: '5',
    degree: 'Generative AI for Executives',
    institution: 'AWS Training',
    duration: 'Jun 2025',
    status: 'Completado',
    relevant: ['Estrategia de IA', 'Casos de Uso Empresariales'],
    certificateUrl: '/pdf/awsiabs.pdf',
    description:
      'Visión ejecutiva sobre modelos generativos: oportunidades de negocio, riesgos y criterios para la adopción estratégica de soluciones de IA en la organización.'
  },
  {
    id: '6',
    degree: 'Essentials of Prompt Engineering',
    institution: 'AWS Training',
    duration: 'Jun 2025',
    status: 'Completado',
    relevant: ['Diseño y evaluación de prompts'],
    certificateUrl: '/pdf/awsiaprompt.pdf',
    description:
      'Fundamentos prácticos para diseñar y evaluar prompts efectivos para modelos de lenguaje, incluyendo técnicas de iteración y control de outputs.'
  },
  {
    id: '7',
    degree: 'Prompt Engineering',
    institution: 'LinkedIn Learning',
    duration: 'Mar 2025',
    status: 'Completado',
    relevant: ['Técnicas de prompt y optimización de LLMs'],
    certificateUrl: '/pdf/promptlinkedin.pdf',
    description:
      'Curso orientado a optimización de prompts, cadenas de pensamiento y mejores prácticas para integrar LLMs en flujos de trabajo.'
  },
  {
    id: '8',
    degree: 'Visualización de Datos con Power BI',
    institution: 'IDAT',
    duration: 'Feb 2025',
    status: 'Completado',
    relevant: ['Dashboards interactivos', 'Modelado de datos'],
    certificateUrl: '/pdf/powerbiidat.pdf',
    description:
      'Diseño e implementación de dashboards interactivos, modelado y transformación de datos para análisis accionable con Power BI.'
  },
  {
    id: '9',
    degree: 'Curso Power BI',
    institution: 'Zegel Virtual',
    duration: 'Feb - Mar 2025',
    status: 'Completado',
    relevant: ['Informes y visualización'],
    certificateUrl: '/pdf/powerbizegel.pdf',
    description:
      'Curso práctico de creación de informes y visualizaciones enfocadas en claridad de información y storytelling de datos.'
  },
  {
    id: '10',
    degree: 'Excel (Básico → Avanzado)',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    relevant: ['Tablas dinámicas', 'Macros y automatización'],
    certificateUrl: '/pdf/excel.pdf',
    description:
      'Recorrido desde funciones básicas hasta automatización con macros, orientado a optimizar tareas administrativas y análisis de datos.'
  },
  {
    id: '11',
    degree: 'Python: De cero a Dev',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    relevant: ['Fundamentos de Python', 'Resolución de problemas'],
    certificateUrl: '/pdf/python.pdf',
    description:
      'Formación práctica en Python con foco en scripting, automatización y lógica aplicada a proyectos de software.'
  },
  {
    id: '12',
    degree: 'Adobe Photoshop — Photo Editing',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    relevant: ['Retoque fotográfico', 'Composición digital'],
    certificateUrl: '/pdf/photoshop.pdf',
    description:
      'Técnicas de edición profesional, retoque y composición para producción de imágenes de alto impacto visual.'
  },
  {
    id: '13',
    degree: 'Fotografía Arquitectónica & HDR',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    relevant: ['Técnicas HDR', 'Procesado y composición'],
    certificateUrl: '/pdf/fotografiahdr.pdf',
    description:
      'Metodologías para captura y postprocesado HDR, orientadas a fotografía de interiores y arquitectura.'
  },
  {
    id: '14',
    degree: 'Asistencia: International Talks - Transporte Internacional 5.0',
    institution: 'Universidad Norbert Wiener',
    duration: '2024',
    status: 'Asistencia Registrada',
    relevant: ['Logística global', 'Innovación en transporte'],
    certificateUrl: '/pdf/internationaltalks.pdf',
    description:
      'Conferencias especializadas sobre innovación en transporte internacional y tendencias en logística 5.0.'
  },
  {
    id: '15',
    degree: 'Creación de Imágenes 3D: Arquitectura e Interior',
    institution: 'Udemy',
    duration: 'Sep 2022',
    status: 'Completado',
    relevant: ['Modelado 3D', 'Renderizado fotorrealista'],
    certificateUrl: '/pdf/3dimagenes.pdf',
    description:
      'Técnicas para crear imágenes 3D fotorrealistas aplicadas a arquitectura e interiorismo, desde modelado hasta composición final.'
  },
  {
    id: '16',
    degree: 'Desarrollo de Juegos con Unreal Engine 4',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    relevant: ['Blueprints', 'Diseño de niveles'],
    certificateUrl: '/pdf/unrealengine.pdf',
    description:
      'Introducción al desarrollo de niveles y lógica en tiempo real con Unreal Engine 4, con énfasis en Blueprints.'
  },
  {
    id: '17',
    degree: 'Modelado de Personaje — 3ds Max',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    relevant: ['Escultura digital', 'Topología de personajes'],
    certificateUrl: '/pdf/3dsmax.pdf',
    description:
      'Pipeline de modelado y escultura de personajes en 3ds Max, centrado en topología y preparación para animación.'
  }
];

/**
 * projects: actualizados para el nuevo formato usado por Portfolio.tsx
 * - se agregó: year, subtitle y details (lista breve) donde aplica
 * - categorías en minúscula y consistentes
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'ORDEV — Optimizador de Rutas de Vuelo',
    subtitle: 'Optimización logística y reducción de costos operativos',
    description:
      'Plataforma que calcula rutas de vuelo óptimas considerando clima, tráfico aéreo y consumo. Reduce tiempos y costos operativos mediante modelos de optimización.',
    details: [
      'Integración de datos meteorológicos y restricciones de espacio aéreo.',
      'Motor de optimización con heurísticas y evaluación de costos.',
      'Panel web para visualización de rutas y exportación de planes de vuelo.',
      'Despliegue en Vercel con backend Django + APIs externas.'
    ],
    techStack: ['Python', 'Django', 'React', 'MongoDB', 'APIs de Clima'],
    image:
      'https://www.portalambiental.com.mx/sites/default/files/styles/full_content/public/media/image/2021/11/helicoptero.jpeg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/ORDEV-Optimizador-De-Vuelos',
    category: 'web',
    year: '2025'
  },
  {
    id: '2',
    title: 'Digital Bakery — eCommerce',
    subtitle: 'Tienda online para panaderías con panel administrativo',
    description:
      'Solución eCommerce diseñada para panaderías: catálogo, carrito, pagos y panel para gestión de inventario y pedidos en tiempo real.',
    details: [
      'Catálogo dinámico y personalización de productos.',
      'Integración con Stripe para pagos y webhooks.',
      'Panel administrativo para gestión de pedidos e inventario.',
      'Despliegue en AWS y Vercel, optimizado para carga rápida.'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'https://i.ibb.co/PskYQh65/web.jpg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: 'https://digitalbakery.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/eCommerce-Panaderia',
    category: 'web',
    featured: true,
    year: '2024'
  },
  {
    id: '3',
    title: 'IA MenuCreator',
    subtitle: 'Generador de menús personalizados con IA',
    description:
      'Herramienta que sugiere menús según preferencias dietéticas, alergias y objetivos nutricionales utilizando modelos ML y APIs de lenguaje.',
    details: [
      'Pipeline de inferencia con FastAPI y modelos TensorFlow.',
      'Interfaz React para entrada de preferencias y visualización de menús.',
      'Exportación de recetas y listas de compras automatizadas.'
    ],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'OpenAI API'],
    image: 'https://i.ibb.co/tMq5v9T3/web-1.jpg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com/sjaquer/IA-MenuCreator',
    category: 'web',
    year: '2025'
  },
  {
    id: '4',
    title: 'Simple Flyer Digital',
    subtitle: 'Editor web de flyers con plantillas',
    description:
      'Editor para crear volantes digitales con plantillas personalizables y exportación a formatos listos para redes sociales o impresión.',
    details: [
      'Editor basado en Canvas API con plantillas personalizables.',
      'Exportación a PNG/SVG y presets para redes sociales.',
      'Sistema de plantillas y gestión simple de assets.'
    ],
    techStack: ['Vue.js', 'Canvas API', 'Node.js'],
    image: 'https://i.ibb.co/q30yYKRr/web-4.jpg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: 'https://sjaquer.github.io/Simple-Flyer-Digital/',
    githubUrl: 'https://github.com/sjaquer/Simple-Flyer-Digital',
    category: 'web',
    year: '2023'
  },
  {
    id: '5',
    title: 'Basic Landing Page',
    subtitle: 'Plantilla responsive optimizada',
    description:
      'Plantilla responsive optimizada para rendimiento, con animaciones suaves y formulario de contacto integrado.',
    details: [
      'Estructura HTML semántica y CSS optimizado.',
      'Animaciones con GSAP para interacciones suaves.',
      'Formularios con validación y envío a API sencilla.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: 'https://i.ibb.co/rR7B1vWx/web-5.jpg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com/sjaquer/Basic-Landing-Page',
    category: 'web',
    year: '2024'
  },
  {
    id: '6',
    title: 'Visualización Arquitectónica 3D',
    subtitle: 'Renderizados e interiores inmersivos',
    description:
      'Renderizados e interiores inmersivos con Unreal Engine y Blender, orientados a fidelidad visual y optimización para presentaciones a clientes.',
    details: [
      'Escenas optimizadas para realtime (UE5).',
      'Pipeline: modelado, texturizado y composición final.',
      'Entrega de pases para postproducción.'
    ],
    techStack: ['Unreal Engine 5', 'Autodesk Maya', 'Blender', 'Photoshop'],
    image: 'https://i.ibb.co/TMWvzvFs/web-3.jpg?auto=compress&cs=tinysrgb&w=1200',
    category: '3d',
    year: '2019'
  },
  {
    id: '7',
    title: 'Diseño de Entornos 3D para Videojuegos',
    subtitle: 'Mapas y assets optimizados',
    description:
      'Desarrollo de mapas y entornos con pipeline completo: modelado, texturizado y optimización para motores de juego.',
    details: [
      'Optimización de assets y LODs.',
      'Texturizado y baking para performance.',
      'Integración y pruebas en UE4/UE5.'
    ],
    techStack: ['Unreal Engine 4', 'Autodesk Maya', 'Blender', 'Substance Painter'],
    image: 'https://i.ibb.co/RTDp3T8Y/renders-5.png?auto=compress&cs=tinysrgb&w=1200',
    category: '3d',
    year: '2019'
  },
  {
    id: '8',
    title: 'Video de Identidad de Marca',
    subtitle: 'Producción audiovisual: motion & color grading',
    description:
      'Producción audiovisual para lanzamiento de marca con motion graphics, edición y color grading enfocado en impacto y consistencia visual.',
    details: [
      'Edición en DaVinci Resolve y color grading profesional.',
      'Motion graphics para introducciones de marca.',
      'Entrega en formatos adaptados para redes y web.'
    ],
    techStack: ['DaVinci Resolve', 'Photoshop', 'Unreal Engine'],
    image: 'https://i.ibb.co/C5xJ4D8h/video.png?auto=compress&cs=tinysrgb&w=1200',
    category: 'video',
    year: '2025'
  },
  {
    id: '9',
    title: 'Manual de Marca Digital',
    subtitle: 'Guía interactiva de identidad visual',
    description:
      'Manual interactivo con lineamientos de marca, paletas y estilos aplicables a plataformas digitales y assets impresos.',
    details: [
      'Guía con componentes UI y paletas aplicables.',
      'Assets listos para web y print.',
      'Documento interactivo exportable en PDF.'
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    image: 'https://i.ibb.co/mCbMn7Bv/portadamanual.jpg?auto=compress&cs=tinysrgb&w=1200',
    liveUrl: 'public/pdf/Manual de Identidad NLP.pdf',
    category: 'diseño',
    featured: true,
    year: '2025'
  },
  {
    id: '10',
    title: 'Task Zenith — Gestor de Tareas',
    subtitle: 'App colaborativa con IA y sincronización',
    description:
      'Aplicación colaborativa para gestión de tareas con integración de IA para sugerencias y sincronización en tiempo real.',
    details: [
      'Autenticación y roles de usuario.',
      'Integración con Firebase para sincronización en tiempo real.',
      'Módulo de sugerencias con IA para priorización.'
    ],
    techStack: ['TypeScript', 'AWS', 'Firebase', 'Tailwind CSS'],
    image: 'https://i.ibb.co/cXX3NqCs/portadaweb.jpg?auto=compress&cs=tinysrgb&w=1200',
    githubUrl: 'https://github.com/sjaquer/TaskZenith',
    category: 'web',
    featured: true,
    year: '2025'
  }
];

/**
 * skills: estructura uniforme (name, category, icon).
 * icon: nombre de componente de lucide-react que se usará en la UI.
 */
export const skills: Skill[] = [
  // Administración
  { name: 'Excel', category: 'Administración', icon: 'FileText' },
  { name: 'Amazon Web Services', category: 'Administración', icon: 'Cloud' },
  { name: 'Firebase', category: 'Administración', icon: 'Database' },
  { name: 'Git', category: 'Administración', icon: 'GitBranch' },
  { name: 'Google Analytics', category: 'Administración', icon: 'BarChart2' },
  { name: 'SEO / ASO', category: 'Administración', icon: 'TrendingUp' },
  { name: 'Power BI', category: 'Administración', icon: 'BarChart' },

  // Desarrollo
  { name: 'TypeScript', category: 'Desarrollo', icon: 'Code' },
  { name: 'Python', category: 'Desarrollo', icon: 'Code' },
  { name: 'Microsoft SQL Server', category: 'Desarrollo', icon: 'Database' },
  { name: 'React', category: 'Desarrollo', icon: 'Globe' },
  { name: 'Next.js', category: 'Desarrollo', icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Desarrollo', icon: 'Palette' },
  { name: 'Node.js', category: 'Desarrollo', icon: 'Server' },
  { name: 'HTML5', category: 'Desarrollo', icon: 'FileCode' },
  { name: 'CSS', category: 'Desarrollo', icon: 'FileCode2' },

  // Diseño y multimedia
  { name: 'Photoshop', category: 'Diseño', icon: 'Image' },
  { name: 'Unreal Engine', category: 'Diseño', icon: 'Gamepad2' },
  { name: 'DaVinci Resolve', category: 'Diseño', icon: 'Film' },
  { name: 'Lightroom', category: 'Diseño', icon: 'Camera' },
  { name: 'Figma', category: 'Diseño', icon: 'PenTool' },
  { name: 'Canva', category: 'Diseño', icon: 'Brush' },

  // Habilidades blandas
  { name: 'Trabajo en Equipo', category: 'Habilidades Blandas', icon: 'Users' },
  { name: 'Resolución de Problemas', category: 'Habilidades Blandas', icon: 'Tool' },
  { name: 'Creatividad', category: 'Habilidades Blandas', icon: 'Feather' },
  { name: 'Pensamiento Crítico', category: 'Habilidades Blandas', icon: 'Eye' },
  { name: 'Liderazgo', category: 'Habilidades Blandas', icon: 'Star' }
];

/**
 * gallery: elementos multimedia con relación a portfolio.
 * colSpan / rowSpan conservados para diseño de galería.
 */
export const gallery: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://i.ibb.co/3YjSNfr8/Highres-Screenshot00023.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Mapa 3D — entorno para videojuego',
    aspectRatio: 27.5 / 18.5,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '2',
    type: 'image',
    src: 'https://i.ibb.co/KpSsh3kj/renders-6.png?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Render arquitectónico de interior',
    aspectRatio: 25.5 / 19,
    colSpan: 1,
    rowSpan: 3
  },
  {
    id: '3',
    type: 'video',
    src: 'https://files.catbox.moe/rc3u56.mp4',
    alt: 'Video profesional — edición y color grading',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=1200',
    aspectRatio: 16 / 9,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '4',
    type: 'image',
    src: 'https://i.ibb.co/5W4sPDPj/renders-4.png?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Render arquitectónico — ambiente moderno',
    aspectRatio: 23 / 17,
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: '5',
    type: 'image',
    src: 'https://i.ibb.co/Q7xrRPqY/03-08-25-2.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Diseño gráfico — campaña de moda urbana',
    aspectRatio: 1 / 1,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '6',
    type: 'image',
    src: 'https://i.ibb.co/GGf1qGH/post-2-11.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Publicación de marketing — empresa de luminaria',
    aspectRatio: 1 / 1,
    colSpan: 1,
    rowSpan: 3
  },
  {
    id: '7',
    type: 'image',
    src: 'https://i.ibb.co/9mxQ80xh/minuatura-yt.jpg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Miniatura de video — campaña publicitaria',
    aspectRatio: 16 / 9,
    colSpan: 1,
    rowSpan: 3
  }
];