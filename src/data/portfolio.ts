import { Experience, Education, Project, Skill, GalleryItem } from '../types';

export const experiences: Experience[] = [
{
  id: '1',
  title: 'Asistente de Marketing Digital | Estrategia de Contenido y Optimización Web',
  company: 'NHL Publicidad',
  duration: 'Mayo 2025 - Actualidad',
  location: 'Lima, Perú',
  current: true,
  techStack: ['YouTube', 'SEO', 'Segmentación', 'Marketing de Contenidos', 'Gestión de Proyectos'],
  responsibilities: [
  'Diseñé pautas estratégicas de contenido para videos en YouTube, coordinando con el equipo de producción audiovisual.',
  'Analicé audiencias y realicé segmentación de mercado para optimizar campañas y decisiones de marca en plataformas digitales.',
  'Colaboré en la mejora de procesos internos y el posicionamiento SEO del sitio web para aumentar la eficiencia y visibilidad online.'
]

},

 {
    id: '2',
    title: 'Especialista Técnico en Soporte Informático | Diagnóstico y Mantenimiento',
    company: 'Freelance / Independiente',
    duration: 'Junio 2022 - Actualidad',
    location: 'Lima, Perú',
    techStack: ['Diagnóstico HW/SW', 'Optimización', 'Mantenimiento', 'Windows/Linux'],
    responsibilities: [
      'Diagnóstico y resolución de problemas de hardware y software para clientes corporativos y particulares.',
      'Implementación de soluciones de mejora en el rendimiento de sistemas, reduciendo tiempos de inactividad.',
      'Mantenimiento preventivo y correctivo para asegurar la operatividad de infraestructuras tecnológicas.'
    ]
  },
 
  {
    id: '3',
    title: 'Asistente de Logística y Abastecimiento | Prácticas Profesionales',
    company: 'Zeus Maritime',
    duration: 'Abril 2025 - Mayo 2025',
    location: 'Callao, Perú',
    techStack: ['Gestión de Órdenes', 'Facturación', 'Compras', 'Documentación Comercial'],
    responsibilities: [
      'Digitación y seguimiento de órdenes de compra en sistema interno de la compañía.',
      'Emisión de facturas y guías simplificadas para distribución y exportación.',
      'Elaboración de documentos institucionales para bancos y clientes internacionales.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador de Entornos 3D en Tiempo Real | Visualización Interactiva',
    company: 'Freelance / Independiente',
    duration: 'Febrero 2018 - Abril 2025',
    location: 'Lima, Perú',
    techStack: ['Unreal Engine', 'Autodesk Maya', 'Diseño 3D', 'Renderizado'],
    responsibilities: [
      'Diseño y desarrollo de escenarios interactivos 3D para videojuegos, arquitectura y simulaciones empresariales.',
      'Optimización de modelos y texturas 3D para mejorar rendimiento en entornos en tiempo real.',
      'Entrega de soluciones personalizadas para clientes en sectores como entretenimiento y bienes raíces.'
    ]
  },
  {
    id: '5',
    title: 'Técnico en Atención al Cliente y Soporte de Sistemas',
    company: 'Gomaju Internet Gaming',
    duration: 'Enero 2023 - Julio 2023',
    location: 'Lima, Perú',
    techStack: ['Soporte Técnico', 'Gestión de Inventario', 'Actualizaciones de Software'],
    responsibilities: [
      'Atención personalizada a usuarios y resolución de incidencias técnicas en tiempo real.',
      'Mantenimiento y actualización de equipos de juego para garantizar una experiencia óptima.',
      'Control de inventario de suministros y monitoreo del correcto funcionamiento del local.'
    ]
  },
  {
    id: '6',
    title: 'Asistente Administrativo y Analista de Procesos',
    company: 'Romaseda',
    duration: 'Setiembre 2018 - Febrero 2020',
    location: 'Lima, Perú',
    techStack: ['Excel Avanzado', 'Automatización', 'Reportes Financieros'],
    responsibilities: [
      'Gestión documental, control de inventarios y automatización de flujos administrativos.',
      'Diseño de reportes financieros para decisiones estratégicas.',
      'Implementación de soluciones digitales que redujeron los tiempos de gestión en un 30%.'
    ]
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
    certificateUrl: '/pdf/python-udemy.pdf',
    relevant: ['Sintaxis de Python', 'Resolución de Algoritmos']
  },
  {
    id: '12',
    degree: 'Adobe Photoshop Photo Editing',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/photoshop-udemy.pdf',
    relevant: ['Retoque Fotográfico', 'Composición Digital']
  },
  {
    id: '13',
    degree: 'Fotografía Arquitectónica & HDR',
    institution: 'Udemy',
    duration: 'Sep 2024',
    status: 'Completado',
    certificateUrl: '/pdf/fotografia-hdr-udemy.pdf',
    relevant: ['Técnicas de Composición', 'Procesado HDR']
  },
  {
    id: '14',
    degree: 'Asistencia: International Talks - Transporte Internacional 5.0',
    institution: 'Universidad Norbert Wiener',
    duration: '2024',
    status: 'Asistencia Registrada',
    certificateUrl: '/pdf/international-talks.pdf',
    relevant: ['Logística Global', 'Innovación en Transporte']
  },
  {
    id: '15',
    degree: 'Creación de Imágenes 3D: Arquitectura e Interior',
    institution: 'Udemy',
    duration: 'Sep 2022',
    status: 'Completado',
    certificateUrl: '/pdf/3d-imagenes-udemy.pdf',
    relevant: ['Modelado 3D', 'Renderizado Fotorrealista']
  },
  {
    id: '16',
    degree: 'Desarrollo de Juegos Unreal Engine 4 0→Pro',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    certificateUrl: '/pdf/unreal-engine-udemy.pdf',
    relevant: ['Blueprints', 'Diseño de Niveles']
  },
  {
    id: '17',
    degree: 'Modelado de Personaje 3ds Max',
    institution: 'Udemy',
    duration: 'Jul 2020',
    status: 'Completado',
    certificateUrl: '/pdf/3dsmax-udemy.pdf',
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
    techStack: ['Davinci Resolve', 'Photoshop', 'Unreal Engine'],
    image: 'https://i.ibb.co/C5xJ4D8h/video.png?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  }
];

export const skills: Skill[] = [
//≥ 85 → tarjeta grande: col-span-2 row-span-2 aspect-[4/3]
//70–84 → tarjeta mediana: aspect-square
//< 70 → tarjeta pequeña: w-[80px] h-[80px]

//Administración
  { name: 'Excel', category: 'Administración', proficiency: 100, icon: 'FileText' },
  { name: 'AWS', category: 'Administración', proficiency: 90, icon: 'Cloud' },
  { name: 'Docker', category: 'Administración', proficiency: 30, icon: 'Package' },
  { name: 'Git', category: 'Administración', proficiency: 30, icon: 'GitBranch' },
  { name: 'Google Analytics', category: 'Administración', proficiency: 10, icon: 'BarChart2' },
  { name: 'Search Console', category: 'Administración', proficiency: 35, icon: 'Search' },
  { name: 'SEO/ASO', category: 'Administración', proficiency: 50, icon: 'TrendingUp' },
  { name: 'YouTube', category: 'Administración', proficiency: 70, icon: 'Youtube' },
  { name: 'MongoDB', category: 'Administración', proficiency: 10, icon: 'Database' },
  { name: 'MySQL', category: 'Administración', proficiency: 10, icon: 'Database' },
  { name: 'PostgreSQL', category: 'Administración', proficiency: 55, icon: 'Database' },
  { name: 'Power BI', category: 'Administración', proficiency: 100, icon: 'BarChart' },

// Programming Languages
  { name: 'JavaScript', category: 'Desarrollo', proficiency: 10, icon: 'Code' },
  { name: 'TypeScript', category: 'Desarrollo', proficiency: 100, icon: 'Code' },
  { name: 'Python', category: 'Desarrollo', proficiency: 100, icon: 'Code' },
  { name: 'SQL Server', category: 'Desarrollo', proficiency: 80, icon: 'Database' },
  { name: 'React', category: 'Desarrollo', proficiency: 30, icon: 'Globe' },
  { name: 'Vue.js', category: 'Desarrollo', proficiency: 10, icon: 'Globe' },
  { name: 'Next.js', category: 'Desarrollo', proficiency: 30, icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Desarrollo', proficiency: 80, icon: 'Palette' },
  { name: 'Node.js', category: 'Desarrollo', proficiency: 50, icon: 'Server' },
  { name: 'HTML5', category: 'Desarrollo', proficiency: 10, icon: 'FileCode' },
  { name: 'CSS3', category: 'Desarrollo', proficiency: 90, icon: 'FileCode2' },

// Design and Multimedia
  { name: 'Photoshop', category: 'Diseño', proficiency: 90, icon: 'Image' },
  { name: 'AutoDesk Maya', category: 'Diseño', proficiency: 90, icon: 'Box' },
  { name: 'Unreal Engine', category: 'Diseño', proficiency: 100, icon: 'Gamepad2' },
  { name: 'Danvinci Resolve', category: 'Diseño', proficiency: 60, icon: 'Film' },
  { name: 'Lightroom', category: 'Diseño', proficiency: 80, icon: 'Camera' },
  { name: '3ds Max', category: 'Diseño', proficiency: 75, icon: 'Cube' },
  { name: 'Figma', category: 'Diseño', proficiency: 35, icon: 'PenTool' },
  { name: 'Canva', category: 'Diseño', proficiency: 80, icon: 'Brush' },

// Soft Skills
{ name: 'Gestión Documental', category: 'Habilidades Blandas', proficiency: 80, icon: 'ClipboardList' },
{ name: 'Planificación', category: 'Habilidades Blandas', proficiency: 90, icon: 'CalendarCheck' },
{ name: 'Comunicación Efectiva', category: 'Habilidades Blandas', proficiency: 80, icon: 'MessageCircle' },
{ name: 'Trabajo en Equipo', category: 'Habilidades Blandas', proficiency: 30, icon: 'Users' },
{ name: 'Resolución de Problemas', category: 'Habilidades Blandas', proficiency: 100, icon: 'Tool' },
{ name: 'Adaptabilidad', category: 'Habilidades Blandas', proficiency: 30, icon: 'RefreshCcw' },
{ name: 'Creatividad', category: 'Habilidades Blandas', proficiency: 100, icon: 'Feather' },
{ name: 'Pensamiento Crítico', category: 'Habilidades Blandas', proficiency: 100, icon: 'Eye' },
{ name: 'Liderazgo', category: 'Habilidades Blandas', proficiency: 100, icon: 'Star' }
];
export const gallery: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://i.ibb.co/VpLxj1Dh/Highres-Screenshot00049.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Proyecto de diseño 3D'
  },
  {
    id: '2',
    type: 'image',
    src: 'https://i.ibb.co/212Htmd1/DSC-0039.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fotografía de producto'
  },
  {
    id: '3',
    type: 'image',
    src: 'https://i.ibb.co/3YjSNfr8/Highres-Screenshot00023.jpg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Renderizado de videojuego de horror'
  },
  {
    id: '4',
    type: 'image',
    src: 'https://i.ibb.co/KpSsh3kj/renders-6.png?auto=compress&cs=tinysrgb&w=600',
    alt: 'Renderizado videojuego de terror'
  },
  {
    id: '5',
    type: 'video',
    src: 'https://files.catbox.moe/rc3u56.mp4',
    alt: 'Animación 3D',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '6',
    type: 'image',
    src: 'https://i.ibb.co/YFh6XPrQ/Highres-Screenshot00001.png?auto=compress&cs=tinysrgb&w=600',
    alt: 'Animación 3D',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    type: 'image',
    src: 'https://i.ibb.co/5W4sPDPj/renders-4.png?auto=compress&cs=tinysrgb&w=600',
    alt: 'Renderizado de ambiente aquitectónico',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
 ];
