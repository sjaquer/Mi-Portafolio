import { Experience, Education, Project, Skill, GalleryItem } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Estratega de Contenido y Optimización SEO',
    company: 'NHL Publicidad',
    duration: 'Mayo 2025 - Actualidad',
    location: 'Lima, Perú',
    current: true,
    techStack: ['YouTube', 'SEO', 'Segmentación de Audiencias', 'Marketing de Contenidos', 'Gestión de Proyectos'],
    responsibilities: ['Diseñé pautas de contenido para YouTube y optimicé el SEO del sitio web, analizando audiencias para mejorar el posicionamiento de la marca en plataformas digitales.']
  },
  {
    id: '2',
    title: 'Especialista en Soporte Técnico y Mantenimiento de Sistemas',
    company: 'Freelance / Independiente',
    duration: 'Junio 2022 - Actualidad',
    location: 'Lima, Perú',
    techStack: ['Diagnóstico HW/SW', 'Optimización de Sistemas', 'Mantenimiento Preventivo', 'Windows/Linux'],
    responsibilities: ['Proporcioné soporte técnico integral, diagnosticando y resolviendo incidencias de hardware y software. Optimicé sistemas para mejorar el rendimiento y realicé mantenimiento preventivo y correctivo.']
  },
  {
    id: '3',
    title: 'Asistente de Logística y Abastecimiento (Prácticas)',
    company: 'Zeus Maritime',
    duration: 'Abril 2025 - Mayo 2025',
    location: 'Callao, Perú',
    techStack: ['Gestión de Órdenes', 'Facturación', 'Procesos de Compra', 'Documentación Comercial'],
    responsibilities: ['Gestioné el ciclo de órdenes de compra, emití facturas y guías, y elaboré documentación comercial para operaciones de logística y abastecimiento, incluyendo clientes internacionales.']
  },
  {
    id: '4',
    title: 'Desarrollador 3D y Artista de Entornos en Tiempo Real',
    company: 'Freelance / Independiente',
    duration: 'Febrero 2018 - Abril 2025',
    location: 'Lima, Perú',
    techStack: ['Unreal Engine', 'Autodesk Maya', 'Diseño 3D', 'Renderizado en Tiempo Real'],
    responsibilities: ['Creé y optimicé escenarios 3D interactivos para videojuegos y visualización arquitectónica, entregando soluciones personalizadas que mejoraron el rendimiento y la inmersión en tiempo real.']
  },
  {
    id: '5',
    title: 'Técnico de Soporte en Entornos de Gaming',
    company: 'Gomaju Internet Gaming',
    duration: 'Enero 2023 - Julio 2023',
    location: 'Lima, Perú',
    techStack: ['Soporte Técnico', 'Gestión de Inventario', 'Mantenimiento de Hardware', 'Software de Gaming'],
    responsibilities: ['Ofrecí soporte técnico a usuarios en un entorno de gaming, realizando mantenimiento de equipos y gestionando el inventario para asegurar una experiencia de cliente de alta calidad.']
  },
  {
    id: '6',
    title: 'Analista de Procesos y Asistente Administrativo',
    company: 'Romaseda',
    duration: 'Setiembre 2018 - Febrero 2020',
    location: 'Lima, Perú',
    techStack: ['Excel Avanzado', 'Automatización de Procesos', 'Análisis Financiero', 'Gestión Documental'],
    responsibilities: ['Automaticé flujos de trabajo y gestioné procesos administrativos, diseñando reportes financieros en Excel que optimizaron la toma de decisiones y redujeron los tiempos de gestión en un 30%.']
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: 'Mar 2022 - Dic 2026',
    status: 'Estudiante (7º ciclo)',
    relevant: [
      'Transformación Digital',
      'Estrategia Empresarial',
      'Comercio Internacional',
      'Investigación Académica'
    ],
    certificateUrl: '/pdf/constancia-unw.pdf'
  },
  {
    id: '2',
    degree: 'Inglés Avanzado (C1)',
    institution: 'Instituto SISE',
    duration: 'Ago 2022 - Oct 2022',
    status: 'Completado',
    relevant: [
      'Comunicación Fluida',
      'Comprensión Auditiva y Lectora'
    ],
    certificateUrl: '/pdf/ingles-sise.pdf'
  },
  {
    id: '3',
    degree: 'Diplomado "Inteligencia Artificial para los Negocios"',
    institution: 'IDAT',
    duration: 'Mar 2025 - Jul 2025',
    status: 'En curso',
    certificateUrl: '/pdf/diplomadoia.pdf',
    relevant: ['Machine Learning', 'Automatización con IA', 'Análisis Predictivo']
  },
  {
    id: '4',
    degree: 'SQL & Bases de Datos Relacionales',
    institution: 'IDAT + Microsoft',
    duration: 'Dic 2024 - Feb 2025',
    status: 'Completado',
    certificateUrl: '/pdf/sql.pdf',
    relevant: ['SQL Server', 'Optimización de Queries']
  },
  {
    id: '5',
    degree: 'Generative AI for Executives',
    institution: 'AWS Training',
    duration: 'Jun 2025',
    status: 'Completado',
    certificateUrl: '/pdf/awsiabs.pdf',
    relevant: ['Estrategia de IA', 'Casos de Uso Empresariales']
  },
  {
    id: '6',
    degree: 'Essentials of Prompt Engineering',
    institution: 'AWS Training',
    duration: 'Jun 2025',
    status: 'Completado',
    certificateUrl: '/pdf/awsiaprompt.pdf',
    relevant: ['Diseño de Prompts', 'Optimización de Modelos']
  },
  {
    id: '7',
    degree: 'Prompt Engineering',
    institution: 'LinkedIn Learning',
    duration: 'Mar 2025',
    status: 'Completado',
    certificateUrl: '/pdf/promptlinkedin.pdf',
    relevant: ['Ingeniería de Prompts', 'Interacción con LLMs']
  },
  {
    id: '8',
    degree: 'Visualización de Datos con Power BI',
    institution: 'IDAT',
    duration: 'Feb 2025',
    status: 'Completado',
    certificateUrl: '/pdf/powerbiidat.pdf',
    relevant: ['Creación de Dashboards', 'Análisis de Datos']
  },
  {
    id: '9',
    degree: 'Curso Power BI',
    institution: 'Zegel Virtual',
    duration: 'Feb - Mar 2025',
    status: 'Completado',
    certificateUrl: '/pdf/powerbizegel.pdf',
    relevant: ['Modelado de Datos', 'Informes Interactivos']
  },
  {
    id: '10',
    degree: 'Excel Completo (Básico a Avanzado)',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/excel.pdf',
    relevant: ['Tablas Dinámicas', 'Macros y VBA']
  },
  {
    id: '11',
    degree: 'Python Practicando 0 → Dev',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/python.pdf',
    relevant: ['Sintaxis de Python', 'Resolución de Algoritmos']
  },
  {
    id: '12',
    degree: 'Adobe Photoshop Photo Editing',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/photoshop.pdf',
    relevant: ['Retoque Fotográfico', 'Composición Digital']
  },
  {
    id: '13',
    degree: 'Fotografía Arquitectónica & HDR',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/fotografiahdr.pdf',
    relevant: ['Técnicas de Composición', 'Procesado HDR']
  },
  {
    id: '14',
    degree: 'Asistencia: International Talks - Transporte Internacional 5.0',
    institution: 'Universidad Norbert Wiener',
    duration: '2024',
    status: 'Asistencia Registrada',
    certificateUrl: '/pdf/internationaltalks.pdf',
    relevant: ['Logística Global', 'Innovación en Transporte']
  },
  {
    id: '15',
    degree: 'Creación de Imágenes 3D: Arquitectura e Interior',
    institution: 'Udemy',
    duration: 'Sep 2022',
    status: 'Completado',
    certificateUrl: '/pdf/3dimagenes.pdf',
    relevant: ['Modelado 3D', 'Renderizado Fotorrealista']
  },
  {
    id: '16',
    degree: 'Desarrollo de Juegos Unreal Engine 4 0→Pro',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    certificateUrl: '/pdf/unrealengine.pdf',
    relevant: ['Blueprints', 'Diseño de Niveles']
  },
  {
    id: '17',
    degree: 'Modelado de Personaje 3ds Max',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    certificateUrl: '/pdf/3dsmax.pdf',
    relevant: ['Escultura Digital', 'Topología de Personajes']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'ORDEV - Optimizador de Rutas de Vuelo',
    description: 'Sistema inteligente que optimiza rutas de vuelo considerando múltiples variables como clima, tráfico aéreo y consumo de combustible. Implementa algoritmos de optimización para encontrar las rutas más eficientes.',
    techStack: ['Python', 'Django', 'React', 'MongoDB', 'APIs de Clima', 'Algoritmos de Optimización'],
    image: 'https://www.portalambiental.com.mx/sites/default/files/styles/full_content/public/media/image/2021/11/helicoptero.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://optimizador-vuelos-cp-sat.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/ORDEV-Optimizador-De-Vuelos',
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'Digital Bakery eCommerce',
    description: 'Plataforma completa de comercio electrónico para panaderías, con sistema de pedidos, gestión de inventario y panel de administración. Integra pagos en línea y seguimiento de pedidos en tiempo real.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: 'https://i.ibb.co/PskYQh65/web.jpg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://digitalbakery.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/eCommerce-Panaderia',
    category: 'web',
    featured: true
  },
  {
    id: '3',
    title: 'IA MenuCreator',
    description: 'Aplicación que utiliza inteligencia artificial para generar menús personalizados basados en preferencias dietéticas, alergias y objetivos nutricionales del usuario.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'OpenAI API'],
    image: 'https://i.ibb.co/tMq5v9T3/web-1.jpg?auto=compress&cs=tinysrgb&w=600',
    githubUrl: 'https://github.com/sjaquer/IA-MenuCreator',
    category: 'web',
    featured: true
  },
  {
    id: '4',
    title: 'Simple Flyer Digital',
    description: 'Herramienta web para crear y diseñar volantes digitales de manera intuitiva. Incluye plantillas personalizables y exportación en múltiples formatos.',
    techStack: ['Vue.js', 'Canvas API', 'Node.js', 'Express'],
    image: 'https://i.ibb.co/q30yYKRr/web-4.jpg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://sjaquer.github.io/Simple-Flyer-Digital/',
    githubUrl: 'https://github.com/sjaquer/Simple-Flyer-Digital',
    category: 'web'
  },
  {
    id: '5',
    title: 'Basic Landing Page',
    description: 'Plantilla moderna y responsive para landing pages, optimizada para SEO y rendimiento. Incluye animaciones suaves y formulario de contacto.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: 'https://i.ibb.co/rR7B1vWx/web-5.jpg?auto=compress&cs=tinysrgb&w=600',
    githubUrl: 'https://github.com/sjaquer/Basic-Landing-Page',
    category: 'web'
  },
  {
    id: '6',
    title: 'Visualización Arquitectónica 3D',
    description: 'Renderizados realistas e inmersivos de proyectos residenciales usando Unreal Engine y Blender.',
    techStack: ['Unreal Engine 5', 'AutoDesk Maya', 'Photoshop', 'Sketchup', 'Blender'],
    image: 'https://i.ibb.co/TMWvzvFs/web-3.jpg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '7',
    title: 'Diseño de entornos 3D para Videojuegos',
    description: 'Mapas completos siguiendo linea de diseño del videojuego usando Unreal Engine. Incluye modelado, texturización y optimización de assets.',
    techStack: ['Unreal Engine 4', 'AutoDesk Maya', 'Photoshop', 'Blender', 'Substance Painter', 'Quixel Megascans'],
    image: 'https://i.ibb.co/RTDp3T8Y/renders-5.png?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '8',
    title: 'Video de Identidad de Marca',
    description: 'Producción audiovisual para campaña de lanzamiento de una startup: motion graphics y edición profesional.',
    techStack: ['DaVinci Resolve', 'Photoshop', 'Unreal Engine'],
    image: 'https://i.ibb.co/C5xJ4D8h/video.png?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  },
  {
    id: '9',
    title: 'Manual de Marca Digital',
    description: 'Elaboración de un manual de marca digital interactivo, incluyendo logotipos, paletas de colores y tipografías.',
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva'],
    image: 'https://i.ibb.co/mCbMn7Bv/portadamanual.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'diseño',
    featured: true,
    liveUrl: '/pdf/manualidentidad_nhl.pdf'
  },
  {
    id: '10',
    title: 'Task Zenith - Gestor de Tareas',
    description: 'Aplicación web para la gestión eficiente de tareas y proyectos, con funcionalidades de IA y colaboración en tiempo real.',
    techStack: ['TypeScript', 'AWS', 'IA', 'Tailwind CSS', 'Node.js', 'Firebase'],
    image: 'https://i.ibb.co/cXX3NqCs/portadaweb.jpg?auto=compress&cs=tinysrgb&w=600',
    githubUrl: 'https://github.com/sjaquer/TaskZenith',
    category: 'web'
  }
];

export const skills: Skill[] = [
//≥ 85 → tarjeta grande: col-span-2 row-span-2 aspect-[4/3]
//70–84 → tarjeta mediana: aspect-square
//< 70 → tarjeta pequeña: w-[80px] h-[80px]

//Administración
  { name: 'Excel', category: 'Administración', icon: 'FileText' },
  { name: 'Amazon Web Services', category: 'Administración', icon: 'Cloud' },
  { name: 'Firebase', category: 'Administración', icon: 'Package' },
  { name: 'Git', category: 'Administración', icon: 'GitBranch' },
  { name: 'Google Analytics', category: 'Administración',  icon: 'BarChart2' },
  { name: 'SEO/ASO', category: 'Administración', icon: 'TrendingUp' },
  { name: 'Power BI', category: 'Administración',  icon: 'BarChart' },

// Programming Languages
  { name: 'TypeScript', category: 'Desarrollo', icon: 'Code' },
  { name: 'Python', category: 'Desarrollo', icon: 'Code' },
  { name: 'Microsoft SQL Server', category: 'Desarrollo', icon: 'Database' },
  { name: 'React', category: 'Desarrollo', icon: 'Globe' },
  { name: 'Next.js', category: 'Desarrollo', icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Desarrollo', icon: 'Palette' },
  { name: 'Node.js', category: 'Desarrollo', icon: 'Server' },
  { name: 'HTML5', category: 'Desarrollo', icon: 'FileCode' },
  { name: 'CSS', category: 'Desarrollo', icon: 'FileCode2' },

// Design and Multimedia
  { name: 'Photoshop', category: 'Diseño', icon: 'Image' },
  { name: 'Unreal Engine', category: 'Diseño',  icon: 'Gamepad2' },
  { name: 'DaVinci Resolve', category: 'Diseño', icon: 'Film' },
  { name: 'Lightroom', category: 'Diseño', icon: 'Camera' },
  { name: 'Figma', category: 'Diseño',  icon: 'PenTool' },
  { name: 'Canva', category: 'Diseño', icon: 'Brush' },

// Soft Skills
{ name: 'Trabajo en Equipo', category: 'Habilidades Blandas', icon: 'Users' },
{ name: 'Resolución de Problemas', category: 'Habilidades Blandas', icon: 'Tool' },
{ name: 'Creatividad', category: 'Habilidades Blandas', icon: 'Feather' },
{ name: 'Pensamiento Crítico', category: 'Habilidades Blandas', icon: 'Eye' },
{ name: 'Liderazgo', category: 'Habilidades Blandas',  icon: 'Star' }
];
export const gallery: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://i.ibb.co/3YjSNfr8/Highres-Screenshot00023.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mapa 3D para videojuego de horror',
    aspectRatio: 27.5 / 18.5,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '2',
    type: 'image',
    src: 'https://i.ibb.co/KpSsh3kj/renders-6.png?auto=compress&cs=tinysrgb&w=600',
    alt: 'Render arquitectónico de ambiente interior',
    aspectRatio: 25.5 / 19,
    colSpan: 1,
    rowSpan: 3
  },
  {
    id: '3',
    type: 'video',
    src: 'https://files.catbox.moe/rc3u56.mp4',
    alt: 'Video profesional para panadería: grabación y edición',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=600',
    aspectRatio: 16 / 9,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '4',
    type: 'image',
    src: 'https://i.ibb.co/5W4sPDPj/renders-4.png?auto=compress&cs=tinysrgb&w=600',
    alt: 'Render de ambiente arquitectónico moderno',
    aspectRatio: 23 / 17,
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: '5',
    type: 'image',
    src: 'https://i.ibb.co/Q7xrRPqY/03-08-25-2.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Diseño gráfico para marca de moda urbana',
    aspectRatio: 1 / 1,
    colSpan: 2,
    rowSpan: 2
  },
  {
    id: '6',
    type: 'image',
    src: 'https://i.ibb.co/GGf1qGH/post-2-11.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Publicación para empresa de luminaria: diseño y marketing',
    aspectRatio: 1 / 1,
    colSpan: 1,
    rowSpan: 3
  },
  {
    id: '7',
    type: 'image',
    src: 'https://i.ibb.co/9mxQ80xh/minuatura-yt.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Miniatura de video para empresa de publicidad LED',
    aspectRatio: 16 / 9,
    colSpan: 1,
    rowSpan: 3
  }
];