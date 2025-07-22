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
    degree: 'Curso: SQL y Bases de Datos Relacionales',
    institution: 'Microsoft',
    duration: '2025',
    status: 'Completado',
    certificateUrl: 'pdf/sql-microsoft.pdf',
    relevant: [
      'SQL Server',
      'Bases de Datos Relacionales',
      'Optimización de Queries'
    ]
  },
  {
    id: '2',
    degree: 'Diplomado en Inteligencia Artificial para los Negocios',
    institution: 'IDAT',
    duration: '2025',
    status: 'En curso',
    certificateUrl: 'pdf/cert1.pdf',
    relevant: [
      'Machine Learning',
      'Chatbots',
      'Automatización con IA',
      'Análisis Predictivo'
    ]
  },
  {
    id: '3',
    degree: 'Master Class: Técnicas de Visualización de Datos en Power BI',
    institution: 'IDAT',
    duration: '2025',
    status: 'Asistencia Registrada',
    certificateUrl: 'pdf/powerbi-zegel.pdf',
    relevant: [
      'Visualización de Datos',
      'Power BI',
      'Análisis de Datos'
    ]
  },
  {
    id: '4',
    degree: 'Curso: Fundamentos de Prompt Engineering (Chino Simplificado)',
    institution: 'AWS Training & Certification',
    duration: '2025',
    status: 'Completado',
    certificateUrl: 'pdf/prompt-linkedin.pdf',
    relevant: [
      'Prompt Engineering',
      'Modelos Generativos',
      'Lengua China'
    ]
  },
  {
    id: '5',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: '2022 - 2026',
    status: 'Estudiante Actual (7º ciclo)',
    relevant: [
      'Transformación Digital',
      'Estrategia Empresarial',
      'Comercio Internacional',
      'Investigación Académica'
    ]
  },
  {
    id: '6',
    degree: 'Curso: Python Practicando - Desde 0 hasta Desarrollador',
    institution: 'Udemy',
    duration: '2024',
    status: 'Completado',
    certificateUrl: 'pdf/python-practicando.pdf',
    relevant: [
      'Desarrollo en Python',
      'Automatización',
      'Programación desde cero'
    ]
  },
  {
    id: '7',
    degree: 'Asistencia: International Talks - Transporte Internacional 5.0',
    institution: 'Universidad Norbert Wiener',
    duration: '2024',
    status: 'Asistencia Registrada',
    certificateUrl: 'pdf/international-talks.pdf',
    relevant: [
      'Transporte Internacional',
      'Innovación 5.0',
      'Gestión Global'
    ]
  },
  {
    id: '8',
    degree: 'Curso: Excel Completo - Desde Principiante hasta Avanzado',
    institution: 'Udemy',
    duration: '2024',
    status: 'Completado',
    certificateUrl: 'pdf/excel.pdf',
    relevant: [
      'Microsoft Excel',
      'Automatización con Hojas de Cálculo',
      'Análisis de Datos'
    ]
  },
  {
    id: '9',
    degree: 'Curso: Experto en Creación de Imágenes 3D: Arquitectura e Interior',
    institution: 'Udemy',
    duration: '2022',
    status: 'Completado',
    certificateUrl: 'pdf/3d-imagenes.pdf',
    relevant: [
      'Diseño 3D',
      'Visualización Arquitectónica',
      'Renderizado Interior'
    ]
  },
  {
    id: '10',
    degree: 'Curso: Desarrollo de Juegos con Unreal Engine 4',
    institution: 'Udemy',
    duration: '2020',
    status: 'Completado',
    certificateUrl: 'pdf/unreal-engine.pdf',
    relevant: [
      'Desarrollo de Videojuegos',
      'Unreal Engine 4',
      'Diseño Interactivo'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'ORDEV - Optimizador de Rutas de Vuelo',
    description: 'Sistema inteligente que optimiza rutas de vuelo considerando múltiples variables como clima, tráfico aéreo y consumo de combustible. Implementa algoritmos de optimización para encontrar las rutas más eficientes.',
    techStack: ['Python', 'Django', 'React', 'MongoDB', 'APIs de Clima', 'Algoritmos de Optimización'],
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    image: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    githubUrl: 'https://github.com/sjaquer/IA-MenuCreator',
    category: 'web',
    featured: true
  },
  {
    id: '4',
    title: 'Simple Flyer Digital',
    description: 'Herramienta web para crear y diseñar volantes digitales de manera intuitiva. Incluye plantillas personalizables y exportación en múltiples formatos.',
    techStack: ['Vue.js', 'Canvas API', 'Node.js', 'Express'],
    image: 'https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://sjaquer.github.io/Simple-Flyer-Digital/',
    githubUrl: 'https://github.com/sjaquer/Simple-Flyer-Digital',
    category: 'web'
  },
  {
    id: '5',
    title: 'Basic Landing Page',
    description: 'Plantilla moderna y responsive para landing pages, optimizada para SEO y rendimiento. Incluye animaciones suaves y formulario de contacto.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://sjaquer.github.io/Basic-Landing-Page/',
    githubUrl: 'https://github.com/sjaquer/Basic-Landing-Page',
    category: 'web'
  },
  {
    id: '6',
    title: 'Visualización Arquitectónica 3D',
    description: 'Renderizados realistas e inmersivos de proyectos residenciales usando Unreal Engine y Blender.',
    techStack: ['Unreal Engine 5', 'AutoDesk Maya', 'Photoshop'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '7',
    title: 'Video de Identidad de Marca',
    description: 'Producción audiovisual para campaña de lanzamiento de una startup: motion graphics y edición profesional.',
    techStack: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  }
];

export const skills: Skill[] = [
  // Desarrollo
  { name: 'JavaScript', category: 'Desarrollo', proficiency: 85, icon: 'Code' },
  { name: 'TypeScript', category: 'Desarrollo', proficiency: 80, icon: 'Code' },
  { name: 'Python', category: 'Desarrollo', proficiency: 85, icon: 'Code' },
  { name: 'Java', category: 'Desarrollo', proficiency: 30, icon: 'Code' },
  { name: 'React', category: 'Desarrollo', proficiency: 75, icon: 'Globe' },
  { name: 'Vue.js', category: 'Desarrollo', proficiency: 85, icon: 'Globe' },
  { name: 'Next.js', category: 'Desarrollo', proficiency: 80, icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Desarrollo', proficiency: 95, icon: 'Palette' },
  { name: 'Node.js', category: 'Desarrollo', proficiency: 80, icon: 'Server' },
  { name: 'Express.js', category: 'Desarrollo', proficiency: 75, icon: 'Server' },
  { name: 'Django', category: 'Desarrollo', proficiency: 60, icon: 'Server' },
  { name: 'GraphQL', category: 'Desarrollo', proficiency: 45, icon: 'Database' },
  { name: 'AWS', category: 'Desarrollo', proficiency: 85, icon: 'Cloud' },
  { name: 'Docker', category: 'Desarrollo', proficiency: 80, icon: 'Package' },
  { name: 'Git', category: 'Desarrollo', proficiency: 95, icon: 'GitBranch' },
  { name: 'MongoDB', category: 'Desarrollo', proficiency: 85, icon: 'Database' },

  // Diseño
  { name: 'Unreal Engine', category: 'Diseño', proficiency: 90, icon: 'Gamepad2' },
  { name: 'AutoDesk Maya', category: 'Diseño', proficiency: 60, icon: 'Box' },
  { name: 'Photoshop', category: 'Diseño', proficiency: 90, icon: 'Image' },

  // Grabación y Edición
  { name: 'Danvinci Resolve', category: 'Grabación y Edición', proficiency: 55, icon: 'Film' },

  // Administración
  { name: 'Excel Avanzado', category: 'Administración', proficiency: 90, icon: 'FileText' },
  { name: 'Gestión Documental', category: 'Administración', proficiency: 80, icon: 'ClipboardList' },
  { name: 'Planificación', category: 'Administración', proficiency: 75, icon: 'CalendarCheck' }
];

export const gallery: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Proyecto de diseño 3D'
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.pexels.com/photos/977241/pexels-photo-977241.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fotografía de producto'
  },
  {
    id: '3',
    type: 'video',
    src: 'https://videos.pexels.com/video-files/856205/856205-hd_1280_720_25fps.mp4',
    alt: 'Video promocional',
    poster: 'https://images.pexels.com/photos/856205/pexels-photo-856205.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    type: 'video',
    src: 'https://videos.pexels.com/video-files/854109/854109-hd_1280_720_30fps.mp4',
    alt: 'Animación 3D',
    poster: 'https://images.pexels.com/photos/854109/pexels-photo-854109.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];
