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
| **Nivel B · Galería** | ✅ Documentados | 8 herramientas con micro-flujos de 3 pasos (`MiniFlow`). |
| **Nivel C · Laboratorio** | ✅ Catalogados | 5 proyectos de práctica y experimentación técnica. |

---

## 1. Clasificación estratégica de proyectos

### 1.1 NIVEL A · Casos de Estudio Principales (Formato Artículo con Ficha de Producto)

| # | Slug / Proyecto | Título orientado al resultado / problema | Ámbito | Métrica o impacto comprobable | Stack principal |
|---|---|---|---|---|---|
| 1 | `bolsa-de-trabajo-wiener` | **Una plataforma de empleabilidad propia para reemplazar tres de terceros** | Universidad Norbert Wiener | 3 plataformas reemplazadas por 1 · 5 roles · Entra ID · CV con IA y regla del 70 % · asesorías 1 a 1 · métricas del área · +650 pruebas unitarias, +200 de BD, +100 HTTP, E2E Playwright | Next.js 16, PostgreSQL propio, Supabase Auth (reemplazable), Docker, Resend, Vercel AI Gateway, Playwright |
| 2 | `difusion-correo-wiener` | **Campañas de 8 000 correos de horas a tan solo 5–10 minutos, con baja automática** | Universidad Norbert Wiener | De 1–2 h a 5–10 min por campaña (estimado; el FAQ de profile.ts dice "más de 4 h": unificar) · 1 200+ correos depurados · campaña real de nov. 2026: 3 250 envíos, 8 lotes, 0 errores · Ley 29733 | React 18, Vite, Express, PostgreSQL 16 + Drizzle, Microsoft 365 SMTP (Nodemailer), Azure Synapse DWH |
| 3 | `pedidos-big-jack` | **Pedidos 35 % más rápidos en una hamburguesería** | Big Jack Burgers | −35 % tiempo de ciclo por pedido (4 sem. antes vs. después) · Margen +15 % (sin publicar: falta base) | Carta: Next.js 16, React 19, Tailwind 4, Turnstile, Vitest · ERP: Next.js 15, Firebase, Genkit · Bot: Ollama + Gemini |
| 4 | `inventario-loginv` | **El inventario de una iglesia, contado desde el celular y con rastro de cada cambio** | Proyecto Freelance / Iglesia Alianza CNC | Conteos por ubicación sin papel · préstamos y mantenimiento con pendientes · auditoría inmutable (sin cifra de ahorro medida) | Next.js 16, React 19, Firebase Auth + Firestore, PWA, ExcelJS, html5-qrcode, JsBarcode |
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
| **TaskMe** (con captura en la tarjeta) | App personal de productividad: Kanban con subtareas y recurrencia, horario semanal con aviso de choques, tickets desde formulario público, notas con dictado, planificador IA con vista previa, acceso por PIN y puente para APK Android. **No** sincroniza con Google Calendar. | `Idea` → `TaskMe` → `Tablero` | Next.js 15, Firebase, Gemini (Genkit), dnd-kit | GitHub · captura `public/img/proyectos/taskme/tarjeta.webp` (emuladores con datos de prueba) |

---

### 1.3 NIVEL C · Laboratorio y Open Source (Visualmente secundario en `/proyectos`)

| Proyecto | Categoría | Stack | Qué explora técnicamente |
|---|---|---|---|
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
  - Onboarding obligatorio (datos + DNI/CE guardado como HMAC + CV ≥ 70 %) y regla del 70 % validada en el servidor para postular.
  - Portal de empresas con revisión de reglas en vivo, carreras sugeridas por palabras clave, comparación de hasta 3 candidatos, notas privadas, entrevistas y cierre automático al cubrir vacantes.
  - Asesorías 1 a 1 con disponibilidad desde Outlook `.ics`, apartado de 5 min, Teams y recordatorio a 24 h.
  - Métricas del área (7 secciones, umbral de 5 por desglose), acciones en grupo, ficha única de oferta, correos automáticos editables con tope diario, boletines con consentimiento separado y baja en un clic, Google for Jobs (`JobPosting`).
  - Puntaje de compatibilidad con IA (Jev) construido y **apagado** por Ley 31814 (riesgo alto).
  - Pruebas: +650 unitarias, +200 contra BD, +100 HTTP sobre el build y E2E con Playwright.
  - **Capturas:** solo páginas públicas en `public/img/proyectos/bolsa-de-trabajo-wiener/` (logos y nombres de empresas difuminados). Panel de administración pendiente: la extensión de Chrome no tenía permiso para el dominio.
- **Stack:** Next.js 16 (App Router), Supabase / PostgreSQL, Docker, Playwright, Tailwind CSS.
- **Resultado:** En producción desde octubre de 2026 en `https://empleabilidad.uwiener.edu.pe/` (con acceso directo a feria en `https://ferialaboralonline.uwiener.edu.pe/`), independiente de la landing informativa del área en el Portal del Estudiante (`https://portaldelestudiante.uwiener.edu.pe/servicio/empleabilidad/`).

### 2.2 LogINV · inventario de la Iglesia Alianza CNC (`inventario-loginv`)
> **Corrección (24 nov 2026):** versiones anteriores de este documento describían LogINV como una plataforma agroindustrial con motor de punto de reorden (ROP), caducidad, modo offline y multilenguaje. Nada de eso está en el código (`~/Proyects/LogINV`). La nota `loginv-punto-de-reorden` se reescribió como `loginv-conteo-fisico` (con redirección 308).
- **Problema de negocio:** el inventario de la iglesia (instrumentos, sonido, mobiliario, herramientas, decoración) vivía en un Excel; no se sabía dónde estaba cada cosa, los préstamos eran de palabra, el mantenimiento se recordaba tarde y los cambios no tenían autor.
- **Solución de producto:** PWA pensada para el voluntario con el celular en el almacén:
  - Panel con pendientes accionables (préstamos vencidos, mantenimientos atrasados, conteos sin terminar, bajo mínimo) y selector de ubicación global.
  - Catálogo con foto (subida a Google Drive), ubicación y sububicación, stock mínimo, etiquetas con código de barras impresas en lote.
  - Escaneo con cámara (códigos de barras y QR) o lector USB; un código desconocido se crea o se asigna.
  - Conteo físico por ubicación: un toque por unidad, verde/ámbar contra el sistema, guardar avance, respaldo local si se cierra la pestaña, finalizar con confirmación ajustando solo diferencias.
  - Ingresos/salidas rápidas con motivo; cada cambio de stock crea su movimiento en la misma transacción.
  - Préstamos (activos, vencidos, historial), ubicaciones (piso, capacidad, no se borran con productos), mantenimiento (preventivo/correctivo/emergencia, costo), reportes a Excel con fotos.
  - Tres roles (admin, encargado, voluntario); auditoría inmutable exportable a CSV; guía `/ayuda` con capturas regeneradas desde el modo demo.
- **Stack:** Next.js 16, React 19, Firebase 13 (Auth + Firestore + reglas), Tailwind CSS, ExcelJS, html5-qrcode, JsBarcode, PWA.
- **Resultado:** en uso (v2.0, 21 nov 2026). Sin métrica medida: falta línea base de tiempo de conteo.
- **Capturas:** `public/img/proyectos/inventario-loginv/` (modo demo, `NEXT_PUBLIC_USE_MOCK=true`).

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
- **Problema de negocio:** pedidos por salón, WhatsApp y web transcritos a mano a cocina; inventario que se reconciliaba al cierre; precios distintos entre carta y sistema; pedidos por WhatsApp incompletos.
- **Solución de producto (tres piezas):**
  - **Carta digital** (`~/Proyects/big-jack-menu`, https://bigjack.vercel.app): checkout en dos pasos (recojo/delivery, pago), reglas compartidas cliente/servidor (10 por producto, 30 por pedido, bebidas solo con hamburguesa, delivery sin efectivo, pre-orden solo recojo), horario en `America/Lima` con pre-órdenes, sugerencia de bebida, carrito persistente entre pestañas, proxy con Turnstile, rate-limit y lista blanca, SEO local (JSON-LD, OG por producto, `llms.txt`), PWA, GA4, minijuego "Arma tu burger", 94 pruebas Vitest y CI.
  - **ERP propio** (`~/Proyects/big-jack-rp`): POS, cola unificada de pedidos, inventario por receta, clientes, caja e insights con Genkit; recibe pedidos por `POST /api/webhooks/orders` con idempotencia por `eventId` y precio por SKU.
  - **Bot de WhatsApp** con Ollama (intención) + Gemini (extracción a JSON) que usa el mismo webhook.
- **Estado (nov 2026):** carta en producción; envío al ERP **apagado** con `FEATURES.erpOrders = false` desde el 1 nov 2026 hasta la API definitiva del ERP (los pedidos se confirman por WhatsApp). Libro de reclamaciones desactivado hasta ene. 2027.
- **Resultado:** **−35 % de tiempo de procesamiento por pedido** (estimado, 4 semanas antes vs. después). El +15 % de margen no se publica sin base.

### 2.5 Sistema Administrativo Interno, Buscador Rápido y Difusión Masiva (`difusion-correo-wiener`)
- **Problema de negocio:** La comunicación a egresados y alumnos se hacía manualmente desde Outlook en tandas pequeñas de 50 correos (una campaña de 8 000 destinatarios tomaba horas, sin control automatizado de bajas según la Ley 29733). Además, para consultar la ficha de un alumno el personal administrativo dependía de un sistema legado que exigía **entre 7 y 9 pasos** hasta encontrar al estudiante y sus datos.
- **Solución de producto (uso netamente administrativo interno, privado / solo capturas):**
  - **Buscador ultrarrápido de alumnos y egresados:** reduce de **7–9 pasos a 1 sola búsqueda directa** por **DNI, código de alumno, nombre o apellido**, entregando al instante su ficha académica y de contacto.
  - **Filtros inteligentes integrados con el motor de difusión:** construido en el mismo sistema que la herramienta de envío masivo, permitiendo segmentar dinámicamente por carrera, facultad, sede, ciclo y condición académica.
  - Motor de personalización de plantilla y despacho controlado por lotes vía API, con rotación de cuentas institucionales.
  - Mecanismo automatizado de baja en un clic con lista de exclusión sincronizada a la base de datos.
  - Script previo de validación sintáctica y de dominio (registros MX) sobre más de 1 200 correos corporativos para reducir la tasa de rebote.
  - **Base desde el DWH** (Azure Synapse, login Microsoft con MFA) en tres pasos: zona de revisión → ver cambios → aplicar con respaldo. Solo carreras de la UNW (542 ajenas retiradas del catálogo), datos corregidos a mano protegidos de la siguiente carga, una fila por alumno.
  - **Plan de envío verificable:** lotes de 500 en BCC, cuentas verificadas antes de enviar, cupo por 24 h móviles por cuenta, correos inválidos (formato, dominio mal escrito, sin MX) descartados con motivo; si el plan cambia entre revisión y clic, no se envía nada. Programación hasta 90 días; nunca se envía con atraso.
  - **Monitoreo** cada 4 s con errores agrupados por causa y acción; pausa, reanudación, reintento de fallidos y reporte Excel.
  - **Wiener Empleo:** piezas 1080×1350 en el navegador (3 composiciones, 6 paletas, QR) y "Crear campaña de correo con esta imagen".
  - **Dashboards** con 9 pestañas (académico, demografía, empleo, campañas, NPS egresados/eventos/empleadores, fichas de contacto, cartas de presentación).
  - WhatsApp (WPPConnect) **retirado**; la razón no está documentada en el repo.
  - **Capturas:** `public/img/proyectos/difusion-correo-wiener/` (nombres, DNI, códigos y correos reemplazados en el DOM antes de capturar; cifras del tablero difuminadas).
- **Stack:** React 18 + Vite, Node.js/Express, PostgreSQL 16 + Drizzle (54 tablas), Microsoft 365 SMTP con Nodemailer (no Resend), Azure Synapse DWH, Neon (micrositio de formularios), Docker Compose.
- **Resultado:** Tiempo de envío por campaña reducido de **horas a 5–10 minutos**, consulta de fichas de alumnos en un paso y cumplimiento estricto de la normativa de privacidad.

---

## 3. Guía de uso de proyectos para entrevistas y CV

1. **Para vacantes de Analista de Producto / Product Analyst:**
   - Presentar **Empleabilidad Wiener** (definición de requerimientos, 5 roles, priorización de MVP, eliminación de costos de proveedores externos) y **PrestaFacilito** (diseño de flujo de cobro, automatización de fricciones con OCR).
2. **Para vacantes de Product Engineer / Full Stack:**
   - Presentar **LogINV** (Next.js, PWA, conteo físico por ubicación, transacciones stock + movimiento, auditoría) y **Big Jack Burgers** (arquitectura reactiva en tiempo real, sincronización entre múltiples terminales).
3. **Para vacantes de Automatización y Procesos de Negocio:**
   - Presentar **Difusión Masiva UWiener** (eliminación de horas hombre, cumplimiento legal), **Reqlut Bot** (operación 24/7 con IA local y control de calidad) y las **Integraciones Retail** (Shopify + Kommo CRM + Sheets).
