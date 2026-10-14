
# 07 · Inventario maestro y fuente principal de proyectos

> **Fuentes consolidadas:** `PROYECTOS_UWIENER.md` (16 proyectos institucionales numerados 1–16) + 4 proyectos externos iniciales (A–D) + **Inventario completo de GitHub (`@sjaquer`, 22+ repositorios)** + Experiencia laboral en **Big Jack Burgers** y **Dearel**.
> **Propósito de este documento:** Servir como **fuente única de verdad (Single Source of Truth)** para redactar los casos de estudio (`.mdx`), las tarjetas de la galería (`/proyectos`) y los artículos técnicos (`/notas`) de `sjaquer.is-a.dev`.
> **Criterio rector:** ¿Este proyecto prueba que sabes **construir herramientas web, automatizar procesos manuales, analizar datos y conectar sistemas**? (Desarrollo web · Automatización · Integraciones · MarTech & CRO).

---

## 0. Estado (Actualizado: oct 2026)

| Pieza                                  | Estado                                                                                                                                                                                                |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permiso escrito de la jefatura (§3.1) | ✅ Confirmado por Sebastián · interruptor `institutionalPermission = true` en `content/casos/index.ts`                                                                                          |
| Nivel A · Casos 1–5 (UWiener)        | ✅ Publicados (Empleabilidad Wiener, Difusión, Formularios y NPS, Feria Virtual, Reqlut Bot)                                                                                                         |
| Nivel A · Caso 6 (Big Jack Burgers)   | ✅ Publicado (adelantado desde Fase 4; integra `Big Jack RP` + `Big Jack Menu`)                                                                                                                   |
| Nivel A · Caso 7 (Dearel)             | 🟡 Borrador en `content/casos/integracion-shopify-crm-dearel.mdx` (visible en `pnpm dev`); se publica al validar la línea base del −30 %                                                        |
| Nivel A · Caso 8 (Este portafolio)    | ✅ Publicado (`/proyectos/este-portafolio`)                                                                                                                                                         |
| Nivel B · Galería actual             | ✅ Publicados: Landings de graduación, WCCA Posgrado, Página de Empleabilidad, Portal de Bolsa Laboral, LogINV, Sistema Obra                                                                        |
| Nivel B · Ampliación GitHub          | ✅ Publicados (13 oct): `LogiFlow`, `DataWeave BI`, `Optimizador de vuelos (ORDEV)`, `Coralia Delights y Digital Bakery`, `PrestaFacilito`; cada tarjeta con su flujo mínimo (`flow`). ⬜ `Alerta Multienda` y `Cabine Grid`: sin repositorio público verificable, no se publican hasta confirmarlos |
| Nivel C · Notas (`/notas`)          | ✅ Notas 1–5 publicadas (2–5 el 13 oct: Excel + Power Automate, empleo pertinente, robot SUNAT, PostgreSQL vs. Firestore) |
| Nivel D · Laboratorio GitHub          | ✅ Publicado (13 oct) como tabla "Laboratorio y repositorios adicionales": TaskMe, Ecos Literarios, HoneyNotes, juego de la Gamedev.js Jam 2026, TaskZenith, Secret Love. ORDEV pasó a la galería (es el optimizador de vuelos); `Mi-Portafolio` v1 es este mismo repo |
| Imágenes de portada                   | ✅ Planos SVG del flujo de cada caso (`cover` en `content/casos/index.ts`, `03-DESIGN.md` §6.8)                                                                                                |
| Datos de §4                           | ⬜ Pendientes en casos institucionales (marcados con `TODO(Sebastián)` en los MDX)                                                                                                                 |

---

### Verificación contra GitHub (13 oct 2026)

Antes de publicar se contrastó §7 con los README y el código de `github.com/sjaquer`. Correcciones aplicadas en la web:

- **ORDEV = Optimizador de vuelos** (`Optimizador-Vuelos-CP-SAT`): planificador de helicópteros con CP-SAT de OR-Tools, no una utilidad de dev tooling. Una sola tarjeta.
- **DataWeave BI** no usa GCP ni Python: es Next.js + Firebase con webhooks de Shopify por tienda, envíos, devoluciones, inventario y normalización con Genkit.
- **LogiFlow** integra Shopify y Kommo por webhook (cola de llamadas, pedidos, inventario). Igual que DataWeave, coincide en fechas y stack con Dearel: confirmar si fue la herramienta de ese trabajo.
- **Coralia Delights** (repo `Carolia-Delights`) y **Digital Bakery** (`eCommerce-Panaderia`).
- **Juego de la jam:** el repo es `gamejamdevjs-2026` (Phaser + TypeScript); `jack_game_1` es solo un `index.html`.
- **Big Jack Bot** estuvo en uso (confirmado por Sebastián): pasa del Laboratorio al caso de Big Jack como tercera pieza (canal WhatsApp → mismo webhook).
- **"Sistema de préstamos y alquileres"** = `prestafacilito`: préstamos y cobranzas (sin módulo de alquileres en el código).
- **Robot SUNAT:** es semiautomático (captcha y un modal quedan a una persona); la nota lo dice así.

## 1. Lectura general y narrativa del portafolio

Tu historia real es más fuerte que la que contaba la web inicial: en cuatro meses construiste la **infraestructura de desarrollo web, automatización y comunicación** de un área completa de la universidad, y aplicaste exactamente la misma ingeniería de procesos en negocios reales (gastronomía y retail):

1. **Ecosistema UWiener (Proyectos 1 al 16):** Formularios que capturan datos validando identidad contra padrón → base central PostgreSQL → segmentación por facultad y ciclo → validación previa de correos (DNS/MX/SMTP) → campañas de correo masivo con lista de exclusión legal → encuestas NPS dinámicas → tableros de análisis.
2. **Operaciones y MarTech en empresas (Big Jack Burgers y Dearel):** En Big Jack digitalizaste el flujo desde la carta digital (`Big Jack Menu`) hasta el control interno de cocina y despacho (`Big Jack RP`), logrando **−35 % en tiempo de procesamiento por pedido**. En Dearel conectaste e-commerce (Shopify), CRM (Kommo) y reportes (Google Sheets) mediante APIs REST y webhooks, logrando **−30 % en tareas administrativas manuales**.
3. **Consistencia en GitHub (`@sjaquer`):** Tus repositorios personales demuestran que construyes soluciones verticales para problemas operativos: desde Business Intelligence en GCP (`DataWeave BI`) y logística de call centers (`LogiFlow`), hasta PWAs de inventario (`LogINV`) y optimizadores algorítmicos (`Optimizador de Vuelos`).

Dos reglas editoriales innegociables:

- **El envío masivo por WhatsApp se retiró.** Ya no se presenta como función activa del sistema de difusión para mantener cumplimiento estricto de políticas.
- **Empleabilidad Wiener ya está en producción (`empleabilidad.uwiener.edu.pe`, oct. 2026):** La usan alumnos, egresados y empresas, y el 22 de octubre soporta la Feria Virtual de Empleabilidad.

---

## 2. Mapa maestro e índice cruzado de proyectos

### 2.1 Índice original UWiener (1–16) y Externos (A–D)

*Para no perder trazabilidad con `PROYECTOS_UWIENER.md`:*

- **`01`** · Sistema de difusión masiva por correo (`Empleakit` difusión) → **Nivel A (Caso 2)**
- **`02`** · Portal de formularios e inscripciones (`formulario-uwiener`) → **Nivel A (Caso 3)**
- **`03`** · Landing de Graduación Pregrado → **Nivel B (Galería)**
- **`04`** · Landing de Graduación Posgrado → **Nivel B (Galería)**
- **`05`** · Página institucional de Desarrollo Profesional y Alumni → **Nivel B (Galería)**
- **`06`** · Portal de Bolsa Laboral (v1 / `Wiener Empleo - Base`) → **Nivel B (Galería)**
- **`07`** · WCCA Posgrado (Integración WordPress + Píxeles Ads) → **Nivel B (Galería)**
- **`08`** · BotTeams (Automatización de asistencia en Teams) → **No publicar (§2.5)**
- **`09`** · Plataforma Empleabilidad Wiener (`Empleakit-Wiener` 2.0) → **Nivel A (Caso 1)**
- **`10`** · Plataforma de Feria Virtual de Empleabilidad → **Nivel A (Caso 4)**
- **`11`** · Reqlut Bot (Publicación 24/7 con IA local + OCR) → **Nivel A (Caso 5)**
- **`12`** · Buscador de egresados destacados (Scraping LinkedIn/Noticias + IA) → **No publicar (§2.5)**
- **`13`** · Dashboard de análisis de encuestas y NPS → **Nivel A (Integrado en Caso 3)**
- **`14`** · Clasificador de Empleo Pertinente (Python + reglas OCDE) → **Nivel C (Nota 3)**
- **`15`** · Automatización de Convenios (Office Scripts + Power Automate) → **Nivel C (Nota 2)**
- **`16`** · Validador de correos electrónicos (DNS/MX/SMTP) → **Nivel A (Caso 2) + Nivel C (Nota 1)**
- **`Ext A`** · Sistema Obra (Inventario en tiempo real en Firestore) → **Nivel B (Galería)**
- **`Ext B`** · LogINV (PWA de inventario con escáner y 4 idiomas) → **Nivel B (Galería)**
- **`Ext C`** · Sistemas Big Jack Burgers (`Big Jack RP` + `Big Jack Menu`) y Dearel → **Nivel A (Casos 6 y 7)**
- **`Ext D`** · Bot de declaraciones SUNAT con Playwright → **Nivel C (Nota 4)**

---

### 2.2 Tabla resumen por Niveles de Publicación

#### Nivel A — Casos de estudio completos (8 artículos MDX en `/proyectos/[slug]`)

| # | Slug sugerido                      | Título orientado a resultado                                                      | Proyectos / Repos que lo integran                              | Métrica defendible                                                                                           |
| - | ---------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1 | `empleabilidad-wiener`           | **Una plataforma de empleabilidad propia para reemplazar tres de terceros**  | UWiener #9 (`Empleakit-Wiener` 2.0)                          | En producción (oct. 2026) · 5 roles · diseñada para 500–2 000 usuarios recurrentes · MVP 11/14          |
| 2 | `sistema-difusion-correos`       | **Campañas de 8 000 correos de horas a minutos, con baja automática**      | UWiener #1 (Difusión) + #16 (Validación de correos)          | De +4 h a **~2 min** por campaña de 8 000 · 1 200+ correos verificados (530+ válidos en 1.ª pasada) |
| 3 | `formularios-nps-automatizados`  | **Encuestas con identidad validada y datos que se analizan solos**           | UWiener #2 (`formulario-uwiener`) + #13 (Dashboard encuesta) | **~3 000 respuestas** analizadas · encuestas dinámicas por empresa sin crear formularios a mano       |
| 4 | `feria-virtual-empleabilidad`    | **Una feria virtual que limpia sus propias inscripciones**                   | UWiener #10 (Feria Virtual)                                    | Fin de la limpieza manual de inscripciones · En producción para el evento del 22 oct 2026                   |
| 5 | `reqlut-bot-ia-local`            | **Un bot que publica ofertas laborales 24/7 con IA local**                   | UWiener #11 (`Reqlut Bot`)                                   | Operación continua 24/7 · LLM local + respaldo cloud, doble revisión, OCR y auditoría SQLite              |
| 6 | `sistema-pedidos-big-jack`       | **De comandas manuales a un sistema integrado: −35 % en tiempo por pedido** | Empresa + GitHub: `Big Jack RP` + `Big Jack Menu`          | **−35 % tiempo de procesamiento por pedido** (medido 4 semanas antes vs. después)                     |
| 7 | `integracion-shopify-crm-dearel` | **Sincronización entre Shopify, CRM y Sheets para eliminar el doble tipeo** | Empresa: Dearel (Retail)                                       | **−30 % en tareas administrativas manuales** (ago – nov 2025)                                         |
| 8 | `este-portafolio`                | **Un portafolio diseñado como embudo y medido de punta a punta**            | GitHub: `sjaquer.is-a.dev`                                   | Instrumentación 100 % en GA4, GTM y Microsoft Clarity con modo de consentimiento propio                      |

---

## 3. Reglas antes de publicar cualquier caso institucional

1. **Permiso por escrito** de tu jefatura en Desarrollo Profesional y Alumni para mencionar los sistemas y mostrar maquetas (✅ *Confirmado*).
2. **Datos simulados** en todas las capturas: nombres, DNI, correos, RUC, empresas aliadas y respuestas de encuestas inventados.
3. **Sin detalles de seguridad**: nada de nombres de servidores, rutas internas, cuentas de envío, estructura interna de Synapse ni cómo se cifran contraseñas. Se describe el *qué*, no el *dónde*.
4. **Sin código institucional**: los repos de la universidad siguen privados. Los diagramas de arquitectura se dibujan desde cero en SVG.
5. **Métricas propias vs. del área**: solo cifras que tu trabajo produjo (`−35 %`, `−30 %`, `~2 min`, `~3 000 respuestas`), con su contexto. Las cifras institucionales (85 % empleabilidad, 15 000 egresados, 500 convenios) pertenecen al área.
6. **Empleabilidad Wiener** ya está en producción: se enlaza al sitio público oficial (`empleabilidad.uwiener.edu.pe`).

---

## 4. Datos pendientes de recolectar (`TODO(Sebastián)` en los MDX)

| Caso                                | Dato exacto a completar                                                                               | Dónde conseguirlo                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **1 · Empleabilidad Wiener** | Usuarios registrados y empresas aprobadas al primer mes + métricas tras la Feria del 22 oct          | Panel de administración en producción                        |
| **2 · Difusión**            | Cuántas campañas y destinatarios acumulados desde que entró en uso + tasa de rebote antes/después | Registro de auditoría del sistema + Informes de Microsoft 365 |
| **3 · Formularios**          | Desglose de las ~3 000 respuestas recogidas por tipo de encuesta                                      | Base de datos (Neon / PostgreSQL)                              |
| **4 · Feria Virtual**        | Total de inscritos, conferencias agendadas y visitas únicas                                          | Google Sheets + analítica GA4 del sitio                       |
| **5 · Reqlut Bot**           | Ofertas publicadas por semana y tiempo manual por oferta evitado                                      | Base SQLite del bot + estimación del equipo                   |
| **7 · Dearel**               | Horas semanales exactas antes vs. después para documentar la fórmula del −30 %                     | Registro operativo ago – nov 2025                             |

---

## 5. Plan de despliegue por fases

- **Fase 2 (MVP, completada y ampliada el 12 oct 2026):** Publicados los 5 casos del Nivel A institucional + Big Jack Burgers + Este portafolio + 6 tarjetas iniciales de Galería + Nota 1.
- **Fase 3 (Oct – Nov 2026):** Agregar las 6 tarjetas nuevas de GitHub al Nivel B (`DataWeave BI`, `LogiFlow`, `Alerta Multienda`, `Optimizador de Vuelos`, `Cabine Grid`, `Coralia Delights / Digital Bakery`) y la tabla de Laboratorio (Nivel D) al pie de `/proyectos`.
- **Fase 4 (23 nov – 20 dic 2026):** Publicar el caso Dearel validado + completar los `TODO(Sebastián)` de la §4 + publicar las Notas 2, 3 y 4 del Nivel C.

---

## 6. Notas técnicas del repositorio del portafolio (`sjaquer.is-a.dev`)

- **Despliegue:** Vercel (`04-TECH-SEO-MEDICION.md`).
- **Renderizado:** Asegurar que todas las rutas de `/proyectos` y `/notas` se generen mediante SSG (Static Site Generation) en Next.js para que el HTML llegue pre-renderizado a buscadores y rastreadores sin depender de hidratación en cliente.
- **Analítica:** GA4 + Google Tag Manager + Microsoft Clarity gobernados por el banner de *"Preferencias de medición"*.

---

## 7. DOSSIER MAESTRO DE PROYECTOS (Fuente completa para redactar los MDX)

> **Instrucciones de uso:** Usa los bloques de abajo como insumo directo para redactar cada archivo `.mdx` en `content/casos/` o poblar el arreglo de proyectos en `content/proyectos/`.

---

### 7.1 NIVEL A · Casos de Estudio Completos (8 Casos)

#### CASO 1 · Empleabilidad Wiener (`empleabilidad.uwiener.edu.pe`)

- **Proyectos origen:** UWiener #9 (`Empleabilidad Wiener` / `Empleakit-Wiener` 2.0) + evolución de UWiener #6 (`Wiener Empleo - Base`).
- **Rol:** Desarrollador Full-Stack único (diseño de arquitectura, base de datos, frontend, backend, seguridad, pruebas y despliegue).
- **Fecha:** jun 2026 – oct 2026 (Lanzamiento en producción: oct 2026).
- **Stack técnico:** Next.js (App Router, TypeScript), Supabase / PostgreSQL (Row Level Security, migraciones SQL, Edge Functions), Microsoft Entra ID (OAuth / SSO institucional), IA Generativa (Gemini API / Genkit para parseo de CV), Playwright (Testing End-to-End), Tailwind CSS, Docker.
- **El Problema (Antes):**
  El área de Empleabilidad dependía de tres plataformas externas desconectadas entre sí para gestionar la bolsa de trabajo, la revisión de CVs y el seguimiento de empresas. Esto generaba costos de licencias, fricción en el inicio de sesión para los alumnos, datos fragmentados y revisiones manuales lentas de currículums.
- **La Solución y Arquitectura (Qué construí):**
  Diseñé y construí en solitario una plataforma institucional todo-en-uno contenerizada en Docker:
  1. **Control de acceso multi-rol (5 roles):** Estudiante/Egresado, Empresa Reclutadora, Asesor de Empleabilidad, Administrador del Área y Superadmin, protegidos a nivel de base de datos en PostgreSQL.
  2. **Autenticación institucional sin fricción:** Integración con **Microsoft Entra ID** para que alumnos y egresados ingresen con su correo institucional en un clic, mientras las empresas externas cuentan con flujo de registro y aprobación verificada (RUC/convenio).
  3. **Lectura y análisis de CV en PDF con IA bajo criterio legal:** Módulo que extrae el texto del CV en PDF, evalúa su compatibilidad tipo ATS contra las ofertas y sugiere mejoras, diseñado estrictamente para no discriminar por variables protegidas (edad, género, foto o estado civil) según la normativa laboral peruana.
  4. **Calidad asegurada con Playwright:** Suite de pruebas E2E automatizadas que validan los flujos críticos de postulación, creación de oferta y login antes de cada pase a producción.
- **Resultados y Métricas:**
  - En producción oficial en `empleabilidad.uwiener.edu.pe` (oct. 2026), soportando la Feria Virtual del 22 de octubre.
  - Arquitectura dimensionada para **500 a 2 000 usuarios recurrentes**.
  - **11 de 14 módulos del MVP** completados y desplegados en el primer corte productivo.

---

#### CASO 2 · Sistema de Difusión Masiva y Validación de Correos (`Empleakit`)

- **Proyectos origen:** UWiener #1 (`Sistema de Difusión`) + UWiener #16 (`Validación de correos`).
- **Rol:** Creador y Desarrollador Full-Stack / Automatización.
- **Fecha:** jun 2026 – sep 2026.
- **Stack técnico:** Next.js / React, Node.js, Python (scripts de verificación DNS/MX/SMTP), PostgreSQL, APIs de correo transaccional / Microsoft 365, Tailwind CSS.
- **El Problema (Antes):**
  Enviar una campaña informativa o convocatoria laboral a una base de 8 000 estudiantes y egresados tomaba **más de 4 horas de trabajo manual** (copiar lotes en CCO, lidiar con bloqueos por límite de envío, plantillas rotas y correos rebotados porque las casillas ya no existían). Además, no existía un mecanismo automatizado de baja (opt-out), exponiendo el dominio institucional a caer en listas negras.
- **La Solución y Arquitectura (Qué construí):**
  1. **Motor de segmentación y plantillas:** Interfaz donde el equipo filtra destinatarios por facultad, carrera, ciclo o condición de egreso y previsualiza el correo personalizado con variables dinámicas.
  2. **Higiene previa de base de datos (#16 Validación de correos):** Antes de disparar campañas a bases históricas, corrí un pipeline propio de verificación en capas (sintaxis → registros DNS/MX → apretón de manos SMTP sin enviar correo) para descartar casillas inexistentes y proteger la reputación del remitente.
  3. **Despacho por lotes asíncronos y cumplimiento legal (Ley 29733):** Procesamiento en colas con control de tasa de envío (rate-limiting), registro de auditoría por destinatario y enlace único de **baja automática (lista de exclusión)** que bloquea futuros envíos al instante si el usuario se desuscribe.
- **Resultados y Métricas:**
  - Reducción del tiempo operativo de envío de **más de 4 horas a ~2 minutos** para campañas de **8 000 correos**.
  - **1 200+ correos históricos auditados** en la primera limpieza técnica, confirmando **530+ casillas 100 % válidas** en la primera pasada y aislando rebotes duros antes de tocar el servidor de correo.

---

#### CASO 3 · Portal de Formularios con Identidad Validada y Dashboard NPS (`formulario-uwiener`)

- **Proyectos origen:** UWiener #2 (`formulario-uwiener`) + UWiener #13 (`Dashboard encuesta`).
- **Rol:** Desarrollador Full-Stack e Ingeniero de Datos.
- **Fecha:** jul 2026 – oct 2026.
- **Stack técnico:** Next.js, TypeScript, Neon / PostgreSQL, Python (procesamiento analítico), Tailwind CSS.
- **El Problema (Antes):**
  Las inscripciones a talleres y las encuestas de satisfacción (NPS) de alumnos y empresas se hacían en Microsoft Forms o Google Forms sueltos. Los usuarios escribían mal su DNI o código, llenaban múltiples veces el mismo formulario, y por cada empresa aliada había que duplicar un formulario a mano. Luego, consolidar las respuestas en Excel para sacar el NPS tomaba días.
- **La Solución y Arquitectura (Qué construí):**
  1. **Validación contra padrón en tiempo real:** Al ingresar el DNI o código universitario, el formulario consulta el padrón institucional, autocompleta o verifica la identidad del alumno y aplica reglas anti-abuso (rate limiting y bloqueo de envíos duplicados por evento).
  2. **Generador dinámico por empresa:** En lugar de clonar formularios, una sola ruta parametrizada genera encuestas personalizadas por empresa reclutadora o evento, guardando todo en un esquema relacional limpio en PostgreSQL.
  3. **Tablero de análisis automatizado (#13):** Dashboard conectado directamente a la base de datos que calcula el **NPS (Net Promoter Score)**, segmenta respuestas por facultad/evento y actualiza los indicadores sin tocar una hoja de cálculo.
- **Resultados y Métricas:**
  - **~3 000 respuestas reales** capturadas, validadas y analizadas automáticamente.
  - **0 formularios creados manualmente** por empresa aliada.

---

#### CASO 4 · Plataforma de Feria Virtual de Empleabilidad

- **Proyectos origen:** UWiener #10 (`Feria Virtual`).
- **Rol:** Desarrollador Web Full-Stack y Arquitecto de Conversión (CRO).
- **Fecha:** ago 2026 – oct 2026 (Evento central: 22 oct 2026).
- **Stack técnico:** Next.js, TypeScript, Google Sheets API / Base de datos relacional, GA4 + GTM, Tailwind CSS.
- **El Problema (Antes):**
  En ediciones anteriores, las ferias laborales requerían armar páginas estáticas a mano y limpiar manualmente miles de registros de asistencia con nombres mal escritos, carreras inventadas y alumnos que se inscribían pero olvidaban conectarse a las charlas.
- **La Solución y Arquitectura (Qué construí):**
  1. **Páginas por empresa generadas desde datos:** Arquitectura basada en datos donde cada stand virtual de empresa (logo, descripción, vacantes y cronograma de charlas) se renderiza dinámicamente.
  2. **Máquina de estados del evento (Antes / Durante / Después):** La interfaz cambia automáticamente sus CTAs según la hora de cada conferencia (Inscripción previa → "En vivo: Unirse a la sala" → Grabación/Postulación).
  3. **Reducción de inasistencia y limpieza en origen:** Integración de botón directo para agendar en Google/Outlook Calendar tras registrarse y normalización estricta de campos de inscripción en el frontend.
- **Resultados y Métricas:**
  - **Eliminación total (100 %)** del proceso de limpieza manual de bases de inscritos post-evento.
  - Plataforma oficial de soporte para la Feria Virtual de Empleabilidad (octubre 2026).

---

#### CASO 5 · Reqlut Bot — Publicación de Ofertas Laborales 24/7 con IA Local

- **Proyectos origen:** UWiener #11 (`Reqlut Bot`).
- **Rol:** Desarrollador de Automatización e IA.
- **Fecha:** jul 2026 – oct 2026.
- **Stack técnico:** Python, Playwright / Automatización de navegador, LLM Local (Ollama / inferencia local) + Fallback a API en nube, OCR (Tesseract / visión), SQLite (persistencia y trazabilidad).
- **El Problema (Antes):**
  Las empresas aliadas enviaban convocatorias laborales en formatos dispares (correos libres, flyers en imagen, PDFs o documentos de Word) y un practicante debía leerlas, extraer requisitos, redactarlas en formato estándar y cargarlas manualmente al portal de empleabilidad (Reqlut), tomando entre 15 y 25 minutos por oferta.
- **La Solución y Arquitectura (Qué construí):**
  Diseñé un bot autónomo que opera 24/7 con arquitectura tolerante a fallos:
  1. **Ingesta multimodal con OCR:** Si la oferta llega como afiche o imagen, aplica OCR para extraer el texto crudo.
  2. **Estructuración con IA Local + Respaldo:** Un modelo de lenguaje local extrae cargo, carrera, funciones, requisitos, modalidad y salario en un JSON estricto (ahorrando costos de tokens). Si el modelo local falla o duda, activa un fallback en la nube.
  3. **Doble pase de validación (Self-Critique):** Un segundo prompt validador audita que la oferta cumpla las reglas institucionales y legales antes de autorizar su publicación.
  4. **Ejecución y auditoría en SQLite:** El bot automatiza la carga en la plataforma destino y registra cada paso, hash de oferta y estado en una base SQLite local para evitar duplicados y permitir auditoría completa.
- **Resultados y Métricas:**
  - Publicación desatendida **24/7** sin intervención humana en ofertas estándar.
  - Costo marginal de IA cercano a cero gracias a la inferencia local.

---

#### CASO 6 · Ecosistema Big Jack Burgers (`Big Jack RP` + `Big Jack Menu` + `bigjacbot`)
- **Proyectos / Repositorios origen:** Experiencia en **Big Jack Burgers** + Repositorios `Big Jack RP` (ERP), `Big Jack Menu` (Carta Digital) y **`bigjacbot`** (Bot de WhatsApp con IA, repo privado) + Gestión en Google Business Profile.
- **Rol:** Operaciones, Marketing y Desarrollador de Producto / Automatización.
- **Fecha:** nov 2025 – sep 2026.
- **Stack técnico:** Next.js, React, TypeScript, Node.js (`whatsapp-web.js`), IA Generativa (Gemini API / LLM local para extracción de entidades), Webhooks, Firebase / Base de datos en tiempo real, Tailwind CSS.
- **El Problema (Antes):**
  En horas punta, la recepción de pedidos por WhatsApp y salón colapsaba la operación: los clientes enviaban mensajes largos o ambiguos ("dame dos clásicas pero una sin crema y con extra tocino..."), caja perdía minutos valiosos respondiendo, calculando totales y transcribiendo a mano la comanda para cocina, lo que generaba errores de preparación y demoras en el despacho de motorizados.
- **La Solución y Arquitectura (Qué construí):**
  Diseñé un ecosistema integrado de tres piezas conectadas en tiempo real:
  1. **`Big Jack Menu` (Frontend de conversión):** Carta digital interactiva y rápida en móviles (enlazada desde Google Business Profile y redes) para que el cliente configure adicionales y arme pedidos estructurados.
  2. **`bigjacbot` (Automatización conversacional con IA):** Bot en Node.js conectado a WhatsApp que utiliza un modelo de IA (Gemini / inferencia local) para procesar lenguaje natural, extraer la intención de compra (productos, modificaciones, dirección y método de pago), confirmar el resumen con el cliente y disparar la orden estructurada vía **webhook** directo al sistema central.
  3. **`Big Jack RP` (ERP / Sistema interno de operaciones):** Panel central en tiempo real para caja, cocina y reparto que recibe automáticamente los pedidos tanto de la carta web como de `bigjacbot`, controla estados de preparación y mide tiempos de entrega.
- **Resultados y Métricas:**
  - **−35 % en el tiempo total de procesamiento por pedido** (medido durante 4 semanas antes vs. 4 semanas después de la implementación).
  - Eliminación del doble tipeo entre el chat de WhatsApp y la comanda de cocina.

---

#### CASO 7 · Integración E-commerce, CRM y Reportes en Dearel (Retail)

- **Proyectos origen:** Experiencia como Desarrollador de Soluciones de Negocio en **Dearel** (Retail).
- **Rol:** Desarrollador de Integraciones y Automatización Comercial.
- **Fecha:** ago 2025 – nov 2025.
- **Stack técnico:** APIs REST, Webhooks, Shopify, CRM (Kommo), Google Sheets API, JavaScript / Python, Meta Business Suite.
- **El Problema (Antes):**
  El equipo comercial y de operaciones perdía horas todos los días pasando datos a mano entre tres islas: las ventas que entraban por **Shopify**, las conversaciones de cierre y post-venta en el **CRM**, y las matrices maestras de control de stock y despacho en **Google Sheets**. Esto provocaba retrasos en despachos, clientes atendidos sin contexto de compra y errores de inventario.
- **La Solución y Arquitectura (Qué construí):**
  Diseñé una capa intermedia de sincronización vía APIs REST y webhooks:
  1. **De Shopify al CRM y Sheets en tiempo real:** Cada orden pagada o carrito abandonado dispara un webhook que actualiza o crea el lead en el CRM con su historial exacto y añade la fila normalizada en Google Sheets para logística.
  2. **Reconciliación y alertas:** Validación de estados de pago y envío sin que los operadores tengan que copiar y pegar números de pedido ni teléfonos.
- **Resultados y Métricas:**
  - **−30 % de reducción en tareas administrativas manuales** del equipo entre agosto y noviembre de 2025.

---

#### CASO 8 · Este Portafolio (`sjaquer.is-a.dev`) — MarTech y CRO en Casa

- **Proyectos origen:** GitHub `sjaquer.is-a.dev` (evolución del repo `Mi-Portafolio`).
- **Rol:** Diseño UI/UX, Desarrollo Frontend e Instrumentación MarTech.
- **Fecha:** sep 2026 – oct 2026.
- **Stack técnico:** Next.js (Static Generation), TypeScript, Tailwind CSS, MDX, Google Analytics 4 (GA4), Google Tag Manager (GTM), Microsoft Clarity, Planos arquitectónicos en SVG.
- **El Problema (Antes):**
  La primera versión de mi portafolio (`Mi-Portafolio` en React) era un listado tradicional de tecnologías que no reflejaba mi perfil híbrido (Negocios + Código + Medición) ni medía el comportamiento de los reclutadores que lo visitaban.
- **La Solución y Arquitectura (Qué construí):**
  1. **Diseño editorial orientado a conversión:** Estructura de embudo (Propuesta de valor → Prueba social con métricas duras → Casos de estudio con planos SVG → CTA de contacto/CV).
  2. **Instrumentación MarTech de punta a punta:** Configuración de GTM + GA4 + Microsoft Clarity con un administrador propio de *"Preferencias de medición"* (Consent Mode), rastreando eventos personalizados: `cv_download`, `case_study_open`, `scroll_depth` y clics a canales de contacto.
- **Resultados y Métricas:**
  - Puntaje óptimo en Core Web Vitals (generación 100 % estática) y trazabilidad completa del embudo de reclutamiento.

---

### 7.2 NIVEL B · Fichas para la Galería (`/proyectos` · 12 Tarjetas)

#### Bloque B.1 · Institucionales y MarTech (UWiener)

1. **Landings de Graduación Pregrado y Posgrado (UWiener #3 y #4)**

   - **Stack:** HTML5 semántico, CSS/Tailwind, JavaScript, SEO Técnico.
   - **Qué resuelve:** Unificó en una arquitectura de componentes reutilizable la información crítica de ceremonias de graduación para dos audiencias distintas (Pregrado y Posgrado), incorporando un bloque de preguntas frecuentes (FAQ) interactivo que redujo las consultas repetitivas por correo y WhatsApp al área.
   - **Enlace:** Sitios públicos en vivo.
2. **WCCA Posgrado — Embudo con preservación de atribución (UWiener #7)**

   - **Stack:** WordPress, JavaScript custom, Google Tag Manager, Píxeles de Google Ads, Meta Ads, LinkedIn Insight Tag y TikTok Pixel.
   - **Qué resuelve:** Despliegue de nueva interfaz y flujo de captación para el Wiener Career Center & Alumni (Posgrado) sobre la infraestructura WordPress existente, garantizando cero pérdida de atribución publicitaria al auditar y conservar intactos los disparos de conversión hacia las 4 plataformas de pauta pagada.
3. **Página de Desarrollo Profesional y Alumni (UWiener #5)**

   - **Stack:** Desarrollo Web Frontend, Arquitectura de Información, Integración de formularios de captura y atención por WhatsApp.
   - **Qué resuelve:** Rediseño del punto de entrada digital del área para comunicar sus servicios a estudiantes, egresados y empresas aliadas, estructurando el embudo de contacto según el perfil del visitante. *(Nota: las métricas históricas exhibidas en la página —85 % empleabilidad, +15 000 egresados, +500 convenios— son indicadores institucionales del área).*
4. **Portal de Bolsa Laboral v1 / `Wiener Empleo - Base` (UWiener #6)**

   - **Stack:** React / Next.js, Tailwind CSS, Firebase (`wienerhub`).
   - **Qué resuelve:** Prototipo funcional de alta fidelidad que estructuró la propuesta de valor de doble cara (captación de candidatos vs. publicación de empresas) y validó los flujos de usuario que luego evolucionaron hacia *Empleabilidad Wiener 2.0*.

#### Bloque B.2 · Sistemas de Gestión, BI y Operaciones (GitHub `@sjaquer`)

5. **`DataWeave BI` — Plataforma de Inteligencia de Negocios y Visualización**

   - **Stack:** Next.js, TypeScript, Google Cloud Platform (GCP), SQL / Python, Librerías de visualización de datos.
   - **Qué resuelve:** Aplicación web de Business Intelligence diseñada para transformar fuentes de datos dispersas en tableros ejecutivos interactivos, facilitando el seguimiento de KPIs comerciales y operativos sin depender de hojas de cálculo manuales.
6. **`LogiFlow` — Gestión Operativa y Flujos para Call Center**

   - **Stack:** Next.js, TypeScript, Firebase / PostgreSQL, Tailwind CSS.
   - **Qué resuelve:** Sistema diseñado para operaciones de atención telefónica y despacho que organiza la cola de asignación de agentes, el estado de cada gestión en tiempo real y la trazabilidad de tiempos de respuesta operativos.
7. **`Alerta Multienda` — Monitoreo Centralizado para Retail Multi-sucursal**

   - **Stack:** Next.js, TypeScript, Webhooks / Notificaciones en tiempo real, Tailwind CSS.
   - **Qué resuelve:** Central de alertas tempranas para negocios con múltiples locales o tiendas online que detecta incidencias operativas, quiebres de stock o caídas de flujo y notifica al equipo responsable antes de afectar la venta.
8. **`LogINV` (Proyecto Externo B) — PWA de Inventario con Escáner e Internacionalización**

   - **Stack:** Next.js (Progressive Web App), TypeScript, Firebase, API de cámara/escáner de códigos de barras y QR, i18n (4 idiomas: ES, EN, PT, FR).
   - **Qué resuelve:** Convierte cualquier smartphone en un terminal logístico de almacén capaz de escanear productos, registrar entradas/salidas en tiempo real e instalar la app en el dispositivo sin pasar por tiendas de aplicaciones.
9. **`Sistema Obra` (Proyecto Externo A) — Control de Materiales en Terreno**

   - **Stack:** React / Next.js, Firebase Firestore (sincronización en tiempo real), Tailwind CSS.
   - **Qué resuelve:** Digitalización del control de almacén y préstamo de herramientas/materiales en proyectos de construcción y obra social, eliminando el desfase entre el cuaderno de obra físico y el reporte de administración.
10. **`Optimizador de Vuelos` — Motor Algorítmico de Rutas y Escalas**

    - **Stack:** TypeScript / JavaScript, Algoritmos de grafos y búsqueda de rutas óptimas, Next.js.
    - **Qué resuelve:** Herramienta analítica que evalúa combinaciones de vuelos, escalas, tiempos de conexión y costos para determinar el itinerario más eficiente entre múltiples destinos.
11. **`Cabine Grid` — Sistema de Control en Tiempo Real para LAN Centers**

    - **Stack:** Next.js, TypeScript, Estado en tiempo real, UI Dark/Geométrica (ecosistema *Tacacho Fury*).
    - **Qué resuelve:** Software vertical de administración de estaciones de juego (PCs/consolas) que controla cronómetros de sesión, tarifas por hora, venta cruzada de snacks y estado de ocupación del local en una cuadrícula visual.

#### Bloque B.3 · E-commerce y Catálogos de Conversión (GitHub `@sjaquer`)

12. **`Coralia Delights` & `Digital Bakery` — Vitrinas Digitales para Gastronomía**
    - **Stack:** Next.js, React, TypeScript, Tailwind CSS, Optimización de conversión móvil.
    - **Qué resuelve:** Dos implementaciones de comercio electrónico ligero y catálogo interactivo para marcas de pastelería y repostería fina, enfocadas en fotografía de producto de carga rápida, selección de variantes y cierre de pedido sin fricción.
13. **Sistema de Gestión de Préstamos y Alquileres (Repositorio Privado)**
    - **Stack:** Next.js, TypeScript, Base de datos relacional, Tailwind CSS.
    - **Qué resuelve:** Aplicación web privada para la administración de cartera familiar de préstamos e inmuebles en alquiler. Automatiza el control de clientes, estados de contrato, cálculo de cuotas/amortizaciones, alertas de vencimiento e historial de pagos, reemplazando el seguimiento manual en hojas de cálculo.
---

### 7.3 NIVEL C · Fichas para Notas Técnicas (`/notas` · 5 Artículos)

1. **Nota 1 (✅ Publicada): *"Validé 1 200 correos antes de una campaña: así se evita quemar una cuenta de envío"***

   - **Origen:** UWiener #16 (`Validación de correos`).
   - **Contenido clave:** Por qué enviar a bases antiguas destruye la reputación del dominio; cómo funciona la validación por capas (Regex → consulta DNS de registros MX → verificación SMTP rcpt to) y cómo integrarla antes de un envío masivo.
2. **Nota 2: *"Un Excel que no se rompe cuando alguien mueve una columna: Office Scripts + Power Automate"***

   - **Origen:** UWiener #15 (`Automatización de Convenios`).
   - **Contenido clave:** Cómo automatizar el seguimiento de convenios interinstitucionales cuando el equipo operativo necesita seguir usando Excel en SharePoint/OneDrive, leyendo tablas por nombre semántico y disparando alertas de vencimiento con Power Automate.
3. **Nota 3: *"Medir si un egresado trabaja en lo que estudió: clasificador con reglas OCDE en Python"***

   - **Origen:** UWiener #14 (`Empleo pertinente`).
   - **Contenido clave:** Cómo cruzar datos de encuestas de seguimiento al graduado contra taxonomías internacionales (OCDE / CIIU) usando Python (`pandas`) para clasificar objetivamente la pertinencia laboral sin sesgos manuales (presentado únicamente con reglas lógicas y datos agregados sintéticos).
4. **Nota 4: *"Automaticé mis declaraciones mensuales en el portal de SUNAT con Playwright"***

   - **Origen:** Proyecto Externo D (`SUNAT Bot`).
   - **Contenido clave:** Cómo lidiar con portales gubernamentales legacy llenos de iframes dinámicos, tiempos de carga variables y modales bloqueantes utilizando selectores resilientes y esperas explícitas en Playwright (código saneado sin credenciales ni montos reales).
5. **Nota 5: *"PostgreSQL (Supabase) vs. Firestore: qué aprendí construyendo sistemas de pedidos e inventario"***

   - **Origen:** Comparativa de arquitectura entre `Empleabilidad Wiener` / `formulario-uwiener` (PostgreSQL) y `Sistema Obra` / `LogINV` / `Big Jack RP` (Firebase).
   - **Contenido clave:** Cuándo conviene un modelo documental en tiempo real (comandas en cocina, inventario ligero) y cuándo es obligatorio ir por integridad relacional, SQL y Row Level Security (padrón universitario, encuestas NPS y permisos multi-rol).

---

### 7.4 NIVEL D · Laboratorio y Open Source (Tabla al pie de `/proyectos`)

> Formato en la web: Tabla minimalista de 4 columnas (`Proyecto`, `Categoría`, `Stack`, `Qué explora / Enlace a GitHub`) para mostrar amplitud técnica sin distraer de los casos B2B.

| Proyecto (`github.com/sjaquer/...`)          | Categoría           | Stack principal                   | Descripción técnica (1 línea para la tabla)                                                                                                  |
| ---------------------------------------------- | -------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **`TaskZenith`**                       | Productividad / SaaS | Next.js, TypeScript, Tailwind     | Gestor de proyectos y tareas con vistas de prioridad, filtros dinámicos y arquitectura modular.                                                |
| **`TaskME`**                           | Productividad + APIs | Next.js, Google OAuth / APIs      | Aplicación de organización diaria con integración de permisos de cuenta de Google y sincronización rápida.                                 |
| **`Ecos Literarios`**                  | IA Aplicada / EdTech | Next.js, TypeScript, Gemini API   | Plataforma de lectura y análisis literario asistida por IA generativa para desglosar temas y contexto.                                         |
| **`HoneyNotes`**                       | Consumer App         | Next.js, TypeScript, Tailwind     | Aplicación web interactiva diseñada como espacio compartido de notas y comunicación asertiva en pareja.                                      |
| **`ORDEV`**                            | Dev Tooling          | TypeScript / Node.js              | Utilidad experimental para estandarizar y organizar flujos de trabajo y estructuras de proyectos.                                               |
| **`Secret Love`**                      | Web Interactiva      | HTML/CSS/JS, Animaciones UI       | Micro-experiencia web enfocada en micro-interacciones, transiciones fluidas y diseño visual personalizado.                                     |
| **`jack_game_1` (`Project Mirror`)** | Game Dev / Jam       | JavaScript, HTML5 Canvas / Phaser | Juego de navegador desarrollado para la *Gamedev.js Jam 2026* (categoría Open Source by GitHub) e iteración rumbo a *Game Jam Lima 2026*. |
| **`Mi-Portafolio` (v1)**               | Archivo Web          | React, CSS                        | Primera versión de mi portafolio personal en React, conservada como referencia de evolución hacia `sjaquer.is-a.dev`.                       |

---

### 7.5 Registro de Proyectos Privados / Solo para Entrevista (No publicar en web)

- **UWiener #12 · Búsqueda de egresados destacados:** Sistema de rastreo de perfiles públicos en LinkedIn y notas de prensa cruzado con IA local para identificar graduados con cargos directivos o premios. *Motivo de exclusión:* Políticas anti-scraping de LinkedIn y tratamiento de datos personales (Ley 29733). Excelente caso para explicar verbalmente en entrevista técnica sobre agentes e IA local.
- **UWiener #8 · BotTeams:** Script de automatización para ingreso programado a salas de Microsoft Teams con audio/video desactivado. *Motivo de exclusión:* Fuera de su contexto de pruebas operativas, puede malinterpretarse como herramienta para inflar asistencia en eventos.
