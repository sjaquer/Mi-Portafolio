# 07 · Inventario maestro y fuente principal de proyectos

> **Fuentes consolidadas:** Proyectos institucionales UWiener (1–16) + Proyectos externos y freelance (LogINV, PrestaFacilito, Dearel retail, Sistema Obra, Big Jack Burgers) + Repositorios de GitHub (`@sjaquer`) + Proyectos de investigación psicométrica.
> **Propósito:** Fuente única de verdad técnica y de producto para la redacción de casos (`.mdx`), galería (`/proyectos`), CV y notas técnicas (`/notas`).
> **Criterio rector de Producto:** ¿Este proyecto prueba que sabes **descubrir el problema de negocio, entender al usuario, diseñar el flujo, construir la solución técnica y medir el impacto operativo**? (Analista de Producto · Desarrollo Web · Automatización de Procesos).

---

## 0. Estado del inventario (Consolidado al 1 nov 2026)

| Dimensión | Estado | Detalle |
|---|---|---|
| **Posicionamiento** | ✅ Consolidado | Analista de Producto / Product Engineer (Junior). Vía de marketing/MarTech totalmente descartada. |
| **Experiencia Freelance** | ✅ Sincronizada | Dearel integrado dentro de Freelance (Jun 2025 – Actualidad), junto con LogINV y PrestaFacilito. |
| **Permiso institucional** | ✅ Confirmado | Autorización de Desarrollo Profesional y Alumni UWiener (`institutionalPermission = true`). |
| **CV y fuente única** | ✅ Alineados | Word (`.docx`), PDF (`.pdf`), `content/profile.ts` y `/cv` idénticos. |
| **Nivel A · Casos de Estudio** | ✅ Estructurados | 10 casos principales con problemas, arquitectura, descartes y métricas. |
| **Nivel B · Galería** | ✅ Documentados | 7 herramientas con micro-flujos de 3 pasos (`MiniFlow`). |
| **Nivel C · Laboratorio** | ✅ Catalogados | 6 proyectos de práctica y experimentación técnica. |

---

## 1. Clasificación estratégica de proyectos

### 1.1 NIVEL A · Casos de Estudio Principales (Formato Artículo con Ficha de Producto)

| # | Slug / Proyecto | Título orientado al resultado / problema | Ámbito | Métrica o impacto comprobable | Stack principal |
|---|---|---|---|---|---|
| 1 | `bolsa-de-trabajo-wiener` | **Una plataforma de empleabilidad propia para reemplazar tres de terceros** | Universidad Norbert Wiener | 3 plataformas reemplazadas por 1 · 5 roles · Entra ID · Creador de CV con IA · E2E Playwright | Next.js, Supabase, PostgreSQL, Docker, Playwright |
| 2 | `difusion-correo-wiener` | **Campañas de 8 000 correos de horas a tan solo 5–10 minutos, con baja automática** | Universidad Norbert Wiener | De +4 h a 5–10 min por campaña · 1 200+ correos depurados · Cumplimiento Ley 29733 | React, Node.js, PostgreSQL, Microsoft 365, Resend |
| 3 | `pedidos-big-jack` | **Pedidos 35 % más rápidos en una hamburguesería** | Big Jack Burgers | −35 % tiempo de ciclo por pedido (4 sem. antes vs. después) · Margen +15 % | Next.js, React, Firebase, WhatsApp Bot, Webhooks |
| 4 | `loginv-agroindustrial` | **Control de stock multialmacén y motor ROP para planta agroindustrial** | Proyecto Freelance / Agroindustria | Reducción de mermas · Cálculo automático de punto de reorden (ROP) · Alertas de vencimiento | Next.js, TypeScript, Tailwind CSS, PWA, SQLite/PostgreSQL |
| 5 | `prestafacilito` | **Administración de créditos y cobranzas con lectura OCR de comprobantes** | Proyecto Privado / Fintech | Cero digitación manual de montos · Cronograma automatizado con mora · Trazabilidad completa | React, Express, Supabase, PostgreSQL, Tesseract.js |
| 6 | `formularios-nps-wiener` | **Encuestas con identidad validada y datos que se analizan solos** | Universidad Norbert Wiener | ~3 000 respuestas analizadas en tiempo real · Validación DNI contra padrón | React, TypeScript, PostgreSQL (Neon), Chart.js |
| 7 | `reqlut-bot` | **Un bot que publica ofertas laborales 24/7 con IA local** | Universidad Norbert Wiener | Publicación autónoma 24/7 sin copiar campos a mano · Doble filtro de calidad con IA | Python, Playwright, Ollama, Gemini, SQLite |
| 8 | `feria-virtual-wiener` | **Una feria virtual que limpia sus propias inscripciones** | Universidad Norbert Wiener | Normalización automática de datos de alumnos · Directorio dinámico de empresas | React, TypeScript, Tailwind CSS, Google Apps Script |
| 9 | `validacion-juicio-expertos` | **Evaluación psicométrica sin servidor con cálculo automatizado de V de Aiken** | Investigación Científica | Certificados PDF oficiales con firma digital · Automatización estadística en Python | JavaScript, jsPDF, Python, SciPy, GitHub Pages |
| 10 | `este-portafolio` | **Un portafolio diseñado como producto y medido de punta a punta** | `sjaquer.is-a.dev` | 100 % estático · LCP < 1,8 s · Consent Mode v2 · Instrumentación completa GA4/GTM | Next.js 16, TypeScript, Tailwind 4, GTM, GA4 |

---

### 1.2 NIVEL B · Galería de Herramientas y Soluciones (Tarjeta corta con Micro-Flujo)

| Proyecto | Problema que resuelve | Flujo mínimo (`MiniFlow`) | Stack | Enlace |
|---|---|---|---|---|
| **Sistema Obra** (`Inventario_Ruth`) | Control de stock de materiales, donaciones y asignación de turnos de trabajadores para obras de construcción comunitaria. | `Donación` → `Sistema Obra` → `Control Stock` | React, TypeScript, Firestore, Vite | Local / Privado |
| **LogiFlow** | Cola de llamadas, pedidos e inventario para televentas: sincronización bidireccional automática entre Shopify y Kommo CRM. | `Shopify` → `LogiFlow` → `Kommo CRM` | Next.js, Firebase, Kommo API, Shopify API | GitHub |
| **DataWeave BI** | Tablero de control de ventas, inventario y logística regional de e-commerce, con normalización de productos mediante IA. | `Shopify` → `DataWeave` → `Tablero BI` | Next.js, Firebase, Shopify API, Genkit | GitHub |
| **Landings de Graduación 2026** | Portal doble para pregrado y posgrado: cuenta regresiva, resolución de dudas frecuentes (FAQ), registro y SEO técnico. | `Egresado` → `Landing` → `Registro` | HTML, CSS, JavaScript, SEO | Producción UWiener |
| **WCCA Posgrado Wiener** | Sección de desarrollo profesional y alumni integrada sobre WordPress manteniendo píxeles de medición publicitaria. | `WordPress` → `Sección` → `Píxeles` | WordPress, JavaScript, Google/Meta Pixels | Producción UWiener |
| **Optimizador de Vuelos (ORDEV)** | Planificación de rutas y despacho de carga/pasajeros para helicópteros mediante solver matemático CP-SAT (peso, combustible, prioridad). | `Escenario` → `CP-SAT` → `Ruta óptima` | Next.js, TypeScript, OR-Tools, Python | GitHub |
| **Coralia Delights / Digital Bakery** | Tiendas web para repostería artesanal con catálogo, horarios de reparto, cálculo de zonas y panel de pedidos. | `Catálogo` → `Checkout` → `Despacho` | Next.js, Tailwind CSS, Firebase | GitHub |

---

### 1.3 NIVEL C · Laboratorio y Open Source (Visualmente secundario en `/proyectos`)

| Proyecto | Categoría | Stack | Qué explora técnicamente |
|---|---|---|---|
| **TaskMe** | Productividad | Next.js, Firebase, Genkit, dnd-kit | Tablero Kanban que transforma notas desestructuradas en tareas con IA y sincroniza con Google Calendar. |
| **Ecos Literarios** | EdTech / IA | Next.js, Genkit, Gemini, Firestore | Biblioteca de literatura hispana con análisis temático y contextual generado con LLMs. |
| **HoneyNotes** | Consumer App | Next.js, Firebase, Gemini | Mensajería asertiva y retos para parejas con sugerencias de redacción asistida. |
| **Juego Gamedev.js Jam 2026** | Game Dev | TypeScript, Phaser, Vite, Gemini API | Juego web en dos capas (escritorio retro interactivo y niveles de plataformas mecánicas). |
| **TaskZenith** | Productividad | React, TypeScript, Firestore, dnd-kit | Espacio de trabajo modular con widgets configurables y temporizador Pomodoro integrado. |
| **Secret Love** | Micro-web | Next.js, Tailwind CSS, Genkit | Experiencia interactiva personalizada con animaciones de fluidos y desbloqueo de acertijos. |

---

### 1.4 Proyectos Privados / Solo para Entrevistas Técnicas (No publicar en web)

| Proyecto | Qué resuelve | Motivo de exclusión en web |
|---|---|---|
| **UWiener #12 · Búsqueda de egresados destacados** | Motor de búsqueda con IA local y cruce de fuentes públicas de prensa y LinkedIn para detectar egresados en cargos directivos o con reconocimientos. | Políticas anti-scraping de plataformas externas y tratamiento estricto de datos personales (Ley 29733). Ideal para explicar verbalmente en entrevistas sobre scraping ético, parsing con LLMs y agentes. |
| **UWiener #8 · BotTeams** | Script de automatización con Playwright para pruebas operativas de concurrencia y validación de acceso a reuniones de Teams. | Fuera de su contexto de testing interno de TI, puede malinterpretarse como inflado de asistencia. |
| **SUNAT Auto** | Automatización con Playwright para agilizar la navegación y descarga de declaraciones tributarias. | Información financiera confidencial. Se utiliza como caso de estudio metodológico sobre RPA con Playwright. |

---

## 2. Fichas detalladas de los proyectos clave

### 2.1 Portal y CMS de Empleabilidad Wiener (`bolsa-de-trabajo-wiener`)
- **Problema de negocio:** La universidad dependía de tres plataformas desconectadas (bolsa de empleo externa, creador de CV de terceros y formularios independientes para ferias laborales). Los estudiantes tenían que duplicar cuentas y la institución no tenía control central de los datos de colocación laboral.
- **Solución de producto:** Plataforma web y **CMS propio unificado** de punta a punta que controla tanto la bolsa de trabajo como la feria virtual y el creador de CV:
  - 5 roles de acceso granular (Estudiante, Egresado, Empresa, Administrador, Jefatura) e interruptores de módulos desde el CMS.
  - Autenticación institucional vía Microsoft Entra ID (Single Sign-On).
  - Creador de CV con importación inteligente de PDF mediante IA (extracción estructurada de experiencia, educación y habilidades sin almacenar el archivo temporal).
  - Módulo de feria laboral con postulación directa y métricas de empleabilidad en tiempo real, accesible también mediante su subdominio directo `https://ferialaboralonline.uwiener.edu.pe/` para una difusión más concreta en campañas (siendo el mismo sistema y CMS que `https://empleabilidad.uwiener.edu.pe/`).
  - Pruebas E2E completas con Playwright para garantizar cero caídas en picos de tráfico.
- **Stack:** Next.js 16 (App Router), Supabase / PostgreSQL, Docker, Playwright, Tailwind CSS.
- **Resultado:** En producción desde octubre de 2026 en `https://empleabilidad.uwiener.edu.pe/` (con acceso directo a feria en `https://ferialaboralonline.uwiener.edu.pe/`), independiente de la landing informativa del área en el Portal del Estudiante (`https://portaldelestudiante.uwiener.edu.pe/servicio/empleabilidad/`).

### 2.2 LogINV Agroindustrial (`loginv-agroindustrial`)
- **Problema de negocio:** En plantas procesadoras de alimentos y operaciones agroindustriales, los inventarios de insumos críticos sufrían descuadres por conteos manuales en papel, mermas por vencimientos no alertados a tiempo y compras de pánico por falta de puntos de reorden calculados.
- **Solución de producto:** Aplicación web progresiva (PWA) enfocada en operarios de almacén y supervisores:
  - Control de stock en tiempo real con soporte multialmacén (materia prima, empaque, producto terminado).
  - Escáner de código de barras compatible con cámaras móviles para conteos rápidos de inventario.
  - Motor de cálculo de Punto de Reorden (ROP - Reorder Point) basado en demanda histórica y tiempos de entrega de proveedores.
  - Sistema proactivo de alertas tempranas por fecha de caducidad (semáforo de criticidad).
  - Modo offline y soporte multilenguaje para operarios en campo.
- **Stack:** Next.js, TypeScript, Tailwind CSS, PWA, SQLite / PostgreSQL.
- **Resultado:** Reducción drástica de mermas por caducidad y eliminación del desabastecimiento imprevisto de insumos clave.

### 2.3 PrestaFacilito (`prestafacilito`)
- **Problema de negocio:** La gestión privada de préstamos, alquileres y cobranzas se llevaba en hojas de cálculo propensas a errores de digitación de montos, cuotas vencidas no identificadas a tiempo y descontrol en la verificación de comprobantes de pago bancarios.
- **Solución de producto:** Sistema web y móvil privado para administración integral de cartera:
  - Generador automático de cronogramas de pago con cálculo configurable de amortización, interés y mora diaria.
  - Módulo de lectura OCR (Optical Character Recognition) con Tesseract.js para extraer montos, fechas y números de operación directamente de las capturas de comprobantes (Yape, Plin, transferencias bancarias), eliminando la digitación manual.
  - Calendario visual de vencimientos y cobranzas con filtros por estado (al día, por vencer, en mora).
  - Trazabilidad y registro de auditoría de cada pago registrado y conciliado contra cuentas bancarias.
- **Stack:** React, Vite, Express, TypeScript, Supabase / PostgreSQL, Tesseract.js OCR.
- **Resultado:** Eliminación del 100 % de la digitación manual de comprobantes y trazabilidad exacta de cobranzas en mora.

### 2.4 Big Jack Burgers (`pedidos-big-jack`)
- **Problema de negocio:** La hamburguesería gestionaba pedidos por salón, WhatsApp y plataformas de delivery de forma aislada. Los pedidos se transcribían a mano a la cocina, generando cuellos de botella de hasta 25–30 minutos por orden y descuadres entre comandas y stock de ingredientes.
- **Solución de producto:** Ecosistema digital sincronizado en tiempo real:
  - Carta digital interactiva para autoservicio de clientes con cálculo dinámico de adicionales y promociones.
  - Bot de WhatsApp con IA para tomar pedidos en lenguaje natural y convertirlos en órdenes estructuradas.
  - ERP y KDS (Kitchen Display System) en tiempo real para caja, estación de cocina y despacho.
  - Reestructuración de la carta y política de precios basada en costeo unitario y datos reales de rotación.
- **Stack:** Next.js, React, Firebase Realtime Database / Firestore, Webhooks.
- **Resultado:** **−35 % de tiempo de procesamiento por pedido** (medido durante 4 semanas antes vs. después de la implementación) y elevación del margen mensual en 15 %.

### 2.5 Sistema Administrativo Interno, Buscador Rápido y Difusión Masiva (`difusion-correo-wiener`)
- **Problema de negocio:** La comunicación a egresados y alumnos se hacía manualmente desde Outlook en tandas pequeñas de 50 correos (una campaña de 8 000 destinatarios tomaba horas, sin control automatizado de bajas según la Ley 29733). Además, para consultar la ficha de un alumno el personal administrativo dependía de un sistema legado que exigía **entre 7 y 9 pasos** hasta encontrar al estudiante y sus datos.
- **Solución de producto (uso netamente administrativo interno, privado / solo capturas):**
  - **Buscador ultrarrápido de alumnos y egresados:** reduce de **7–9 pasos a 1 sola búsqueda directa** por **DNI, código de alumno, nombre o apellido**, entregando al instante su ficha académica y de contacto.
  - **Filtros inteligentes integrados con el motor de difusión:** construido en el mismo sistema que la herramienta de envío masivo, permitiendo segmentar dinámicamente por carrera, facultad, sede, ciclo y condición académica.
  - Motor de personalización de plantilla y despacho controlado por lotes vía API, con rotación de cuentas institucionales.
  - Mecanismo automatizado de baja en un clic con lista de exclusión sincronizada a la base de datos.
  - Script previo de validación sintáctica y de dominio (registros MX) sobre más de 1 200 correos corporativos para reducir la tasa de rebote.
- **Stack:** React, Node.js, PostgreSQL, Microsoft 365, Resend.
- **Resultado:** Tiempo de envío por campaña reducido de **horas a 5–10 minutos**, consulta de fichas de alumnos en un paso y cumplimiento estricto de la normativa de privacidad.

---

## 3. Guía de uso de proyectos para entrevistas y CV

1. **Para vacantes de Analista de Producto / Product Analyst:**
   - Presentar **Empleabilidad Wiener** (definición de requerimientos, 5 roles, priorización de MVP, eliminación de costos de proveedores externos) y **PrestaFacilito** (diseño de flujo de cobro, automatización de fricciones con OCR).
2. **Para vacantes de Product Engineer / Full Stack:**
   - Presentar **LogINV** (Next.js, PWA, motor de algoritmos de reabastecimiento ROP) y **Big Jack Burgers** (arquitectura reactiva en tiempo real, sincronización entre múltiples terminales).
3. **Para vacantes de Automatización y Procesos de Negocio:**
   - Presentar **Difusión Masiva UWiener** (eliminación de horas hombre, cumplimiento legal), **Reqlut Bot** (operación 24/7 con IA local y control de calidad) y las **Integraciones Retail** (Shopify + Kommo CRM + Sheets).
