# 01 · Auditoría de sjaquer.is-a.dev

> **Rol de la revisión:** MarTech / Growth Engineer con foco en CRO, la posición a la que apuntas.
> La pregunta que guía todo el documento: *¿esta web convence a un reclutador de MarTech y a un cliente PYME de que sabes construir, medir y optimizar experiencias web?*
>
> **Fecha:** 10 oct 2026

---

## Cómo se hizo

| Fuente | Qué aportó | Estado |
|---|---|---|
| HTML inicial de la home | Metadatos, Open Graph, idioma | ✅ Verificado |
| `/sitemap.xml` | URLs indexables | ✅ Verificado |
| `/robots.txt` | Reglas de rastreo | ✅ Verificado |
| `/llms.txt` | Cómo te describe la web ante IAs | ✅ Verificado |
| `/resume.txt` | CV en texto plano publicado | ✅ Verificado |
| Captura completa de la web (28 jul 2026) | Diseño, secciones, textos | ⚠️ Puede estar desactualizada |
| Rendimiento real (Lighthouse / PageSpeed) | LCP, INP, CLS | ❌ No se pudo medir desde aquí |

**Hallazgo importante:** el HTML que entrega el servidor no tiene contenido visible ni encabezados (`h1`, `h2`…), solo metadatos. Todo el contenido lo pinta JavaScript en el navegador. Junto con las reglas del `robots.txt` que bloquean `/src/`, `/node_modules/` y `*.map`, la evidencia indica una SPA de React con Vite, no Next.js. Confírmalo revisando tu repo.

---

## Veredicto en una línea

La web demuestra que sabes programar, pero **cuenta una historia distinta a la de tu CV y tu LinkedIn**, contiene afirmaciones que no resistirían una entrevista, y **no muestra ninguna evidencia de MarTech, medición ni CRO**, que es justo lo que quieres vender.

---

## Severidad

- 🔴 **Crítico:** daña credibilidad o bloquea objetivos. Corregir antes de postular esta semana.
- 🟠 **Alto:** limita resultados de forma importante.
- 🟡 **Medio:** mejora clara, no urgente.

---

## A. Posicionamiento y mensaje

### A1 🔴 Tres identidades distintas para la misma persona

| Dónde | Cómo te presenta |
|---|---|
| `<title>` y meta description | "Full-Stack Developer & AI Integration Specialist" |
| `llms.txt` | "Full-Stack Developer & AI Integration Specialist", "Experienced software engineer" |
| `resume.txt` | "Business Intelligence & Soluciones Digitales" |
| CV nuevo y LinkedIn | Desarrollo web · Automatización · MarTech & CRO |

Un reclutador que llega desde tu CV ve otra persona. Google y los asistentes de IA también aprenden la versión equivocada.

**Corrección:** una sola identidad (la del CV) en todos los canales, generada desde una única fuente de datos (ver C7).

### A2 🔴 Afirmaciones que no resisten una entrevista

Están publicadas hoy en `llms.txt` y `resume.txt`:

| Publicado | Realidad | Riesgo |
|---|---|---|
| "Microsoft SQL Server Certified Developer" | Curso oficial de SQL Server en Idat (partner de Microsoft) | Parece una certificación de Microsoft que no tienes |
| "Power BI Data Visualization Specialist" | Curso de Power BI de Intercorp / Zegel | Mismo problema |
| "Operations Coordinator" en Big Jack | Tu cargo real es "Operaciones y Marketing" | Título alterado |
| "Bachiller en Administración…" | En curso, egreso dic. 2026 | No eres bachiller aún |
| Inglés C1 | Acreditación B1 en curso | Contradice tu CV |
| "Experienced software engineer" | Estudiante con experiencia práctica real | Choca con tu estrategia de no inflar |

Cualquier verificación de antecedentes o una pregunta directa en entrevista puede exponer esto. **Es lo primero que hay que corregir.**

### A3 🔴 Métricas inconsistentes y sin base

- Big Jack: la web dice **98,7 % de eficiencia en despacho**; el CV dice **−35 % en tiempo de procesamiento**. Son dos números distintos para el mismo sistema.
- El bloque de estadísticas muestra **"99 % éxito"**, que no se puede verificar y suena a agencia.
- Proyectos con cifras muy precisas (4,2x, 31,8 %, +45 %) sin decir cómo ni en qué periodo se midieron.

Para alguien que vende CRO, una métrica sin base es peor que no tener métrica: indica que no sabes medir.

**Corrección:** cada métrica con línea base, periodo y método. Ejemplo: *"Tiempo de procesamiento por pedido: de ~X min a ~Y min (−35 %), medido durante 4 semanas antes y después."* Si no tienes la base, usa resultados cualitativos.

### A4 🟠 El hero no dice quién eres

"Code. Integrate AI. Scale." es un eslogan de agencia SaaS. En los primeros 3 segundos el visitante no sabe tu nombre, qué haces ni para quién.

### A5 🟠 Los proyectos no cuentan la historia MarTech

| Proyecto | Encaje con MarTech / Web / CRO / Automatización |
|---|---|
| Big Jack RP & Menu | ✅ Alto: operación real, cliente real |
| IA-ToolBot WhatsApp | ✅ Alto: automatización de embudo de screening |
| TaskMe (Kanban con IA) | 🟡 Medio: demo técnica |
| TaskZenith (Pomodoro) | ❌ Bajo: proyecto de práctica |
| ORDEV (rutas de vuelo con OR-Tools) | ❌ Bajo: dominio sin relación con tu objetivo |
| **Plataforma de bolsa de trabajo (Norbert Wiener)** | ✅ Muy alto, **y no aparece** |
| **Integración Shopify + CRM (Dearel)** | ✅ Alto, **y no aparece** |

Tus dos trabajos más relevantes para el rol que buscas no están; dos de los cinco mostrados lo diluyen.

### A6 🟠 Cero evidencia de medición

No hay ningún caso que hable de GA4, GTM, embudos, eventos, tasas de conversión ni experimentos. Para un perfil MarTech / CRO, **la propia web debería ser el primer caso de estudio**: medida, con conversiones definidas y decisiones basadas en datos.

---

## B. UX y diseño (basado en la captura de julio)

### B1 🟠 La estética contradice la dirección acordada

Fondo casi negro, verde neón, toroide 3D y efectos de vidrio. Acordaste pasar a un estilo limpio, minimalista y orientado a producto digital. Además, la estética de "laboratorio de IA" refuerza la identidad equivocada (A1).

### B2 🟠 Contraste y tamaño de texto

En la captura, los párrafos de las tarjetas son gris oscuro sobre casi negro, en tamaño muy pequeño. Probablemente no cumple WCAG AA (4,5:1). Es un problema de accesibilidad y también de conversión: lo que no se lee no convence.

### B3 🟠 Scroll largo con espacios vacíos

- "Precision Engineering" ocupa una pantalla entera sin contenido útil.
- Cada proyecto ocupa casi un viewport completo con un render 3D decorativo.
- Hay que hacer scroll durante varias pantallas para llegar a la experiencia y al contacto.

### B4 🟠 No hay persona

No hay foto, ni sección "sobre mí", ni voz en primera persona. Al nivel junior se contrata a una persona, no a una marca.

### B5 🟡 Llamadas a la acción genéricas y compitiendo entre sí

"Empezar proyecto", "Integrar IA ahora" y "Escríbenos" están pensadas para clientes de agencia. **No hay botón para descargar el CV**, que es la acción número uno de un reclutador.

### B6 🟡 Copy de agencia

"Tres pilares, un solo enfoque", "IA que transforma datos en decisiones", "Llevemos tu flujo de trabajo al siguiente nivel": frases que podría firmar cualquier agencia. No hay nada específico tuyo.

---

## C. Técnico, SEO y rendimiento

### C1 🔴 El contenido no existe en el HTML inicial

Sin renderizado en servidor, los buscadores dependen de ejecutar JavaScript y los rastreadores que no lo hacen (varios de IA, algunos de previsualización) solo ven metadatos. No hay `h1` en el HTML entregado.

**Corrección:** generación estática (SSG): cada página sale del servidor ya con su HTML completo.

### C2 🔴 La imagen para compartir en LinkedIn es el ícono de la app

`og:image` apunta a `web-app-manifest-512x512.png` pero declara 1200×630. Cuando compartas tu web en LinkedIn (que vas a hacer mucho), la tarjeta saldrá con un ícono cuadrado recortado o pixelado.

### C3 🟠 Sitemap falso

Las 6 URLs son la home más fragmentos (`/#skills`, `/#portfolio`…). Google los trata como una sola URL. Resultado: **tienes una sola página indexable** y ninguna oportunidad de posicionar por búsquedas específicas ("desarrollador Next.js Lima", "automatización WhatsApp PYMES", etc.).

### C4 🟡 robots.txt con reglas innecesarias

- La directiva `Host:` no es estándar; Google y Bing la ignoran.
- `crawl-delay` no aporta nada en un sitio estático pequeño (Google lo ignora).
- Bloquea `/blog-personal`, una ruta que no está enlazada en ningún lado. O existe y debe resolverse, o la regla sobra.
- Bueno: permite explícitamente a los rastreadores de IA y declara el sitemap.

### C5 🟡 Metadatos obsoletos

`meta keywords` y las etiquetas `geo.*` no tienen efecto en Google desde hace años. No dañan, pero indican configuración copiada de una plantilla.

### C6 🟠 Riesgo de rendimiento en móvil *(probable, no medido)*

Un hero WebGL con malla 3D animada más un render 3D por proyecto es exactamente lo que suele empeorar el LCP (tiempo hasta que se ve el contenido principal) y el INP (rapidez de respuesta al tocar) en teléfonos de gama media, que son la mayoría en Lima.

**Acción:** medir hoy con [PageSpeed Insights](https://pagespeed.web.dev/) en modo móvil y guardar el resultado como línea base para el caso de estudio de la nueva web.

### C7 🟠 Los datos viven en varios sitios sin sincronizar

La página, `llms.txt` y `resume.txt` se mantienen por separado. Es la causa raíz de A1, A2 y A3: cada vez que actualizas uno, los otros quedan desfasados.

**Corrección:** un único archivo de datos (perfil, experiencia, proyectos, certificaciones) del que se generen la web, `llms.txt`, `resume.txt` y el JSON-LD.

### C8 🟡 Sin datos estructurados visibles

No se detectó JSON-LD (`Person`, `ProfilePage`). Es lo que ayuda a Google a entender quién eres y a enlazar tu web con tu LinkedIn y GitHub.

---

## D. Lo que hay que conservar

- ✅ La idea de `llms.txt` y `resume.txt`: es una práctica moderna y poco común. Se queda, pero generada automáticamente.
- ✅ La política de robots hacia rastreadores de IA y de redes sociales.
- ✅ Canonical, idioma `es-PE` y Open Graph ya configurados (solo falta corregir la imagen).
- ✅ La estructura de tarjeta de proyecto con problema → solución → métricas. Es la base correcta para los casos de estudio.
- ✅ El CTA final de contacto y la sección de experiencia.
- ✅ Tu capacidad de construir interfaces cuidadas: el problema no es la ejecución, es la dirección.

---

## Resumen priorizado

| # | Hallazgo | Severidad | Se resuelve en |
|---|---|---|---|
| A2 | Afirmaciones infladas en `llms.txt` y `resume.txt` | 🔴 | **Fase 0 (mañana)** |
| A1 | Tres identidades distintas | 🔴 | Fase 0 |
| A3 | Métricas inconsistentes y sin base | 🔴 | Fase 0 |
| C2 | Imagen OG incorrecta para LinkedIn | 🔴 | Fase 0 |
| C1 | Contenido renderizado solo en el cliente | 🔴 | Fase 1 |
| C7 | Datos sin fuente única | 🟠 | Fase 1 |
| A4, B4, B6 | Hero sin persona, copy de agencia | 🟠 | Fase 2 |
| A5 | Proyectos fuera de foco; faltan Wiener y Dearel | 🟠 | Fase 2 |
| B1, B2, B3 | Estética, contraste, scroll vacío | 🟠 | Fases 1–2 |
| C3 | Sitemap con fragmentos; una sola URL | 🟠 | Fase 2 |
| C6 | Rendimiento móvil | 🟠 | Medir en Fase 0, resolver en Fases 1–2 |
| A6 | Sin evidencia de medición | 🟠 | Fase 3 |
| B5 | Sin CTA de CV | 🟡 | Fase 2 |
| C4, C5, C8 | robots, metadatos, JSON-LD | 🟡 | Fases 1–2 |

Las fases están definidas en `05-PLAN-IMPLEMENTACION.md`.
