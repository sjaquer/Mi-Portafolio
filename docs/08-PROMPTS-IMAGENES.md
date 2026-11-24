# 08 · Prompts e imágenes para Blogs (Notas) y Casos (v7.0)

> **Para quién:** persona o generador de imágenes (Flux, DALL·E, Midjourney, Firefly) al producir material visual para el blog (`content/notas/`).
> **Objetivo:** habilitar **portadas e imágenes dentro de los blogs (notas)** y capturas simuladas en casos, alineadas con la paleta **v7.0 (Índigo Eléctrico + Cian Luminoso)**.
> **Regla de marca:** las imágenes en el blog son bienvenidas siempre que aporten claridad visual (diagramas conceptuales, esquemas técnicos o capturas con datos de referencia). **Nada de neón, 3D isométrico, "hologramas", robots ni rostros humanos.**

---

## 0. Cómo usar imágenes dentro de los blogs (`notas`) y casos

1. Exportar a **WebP** optimizado (recomendado **1600 × 900 px** para portadas 16:9, < 200 KB) y guardar en `public/img/notas/<archivo>.webp`.
2. **Portada de la nota** en `content/notas/index.ts`:
   ```ts
   cover: "/img/notas/<slug>.webp",
   coverAlt: "<descripción concreta de lo que se ve, en español>",
   ```
   Si no se define `cover`, la cabecera muestra automáticamente el motivo SVG del pilar (`PillarMotif`).
3. **Imágenes dentro del cuerpo del blog (`.mdx`)** — dos formas válidas:
   - **Markdown estándar** (enmarcado automático por `mdx-components.tsx`; texto entre comillas opcional pasa a leyenda):
     ```md
     ![Diagrama de flujo del sistema](/img/notas/mi-nota-02.webp "Pie de foto opcional")
     ```
   - **Componente `<Figure>`** (con pie de foto e indicador opcional `simulated` para capturas de apps privadas):
     ```mdx
     <Figure
       src="/img/notas/mi-nota-captura.webp"
       alt="Vista del tablero con métricas simuladas"
       caption="Vista simplificada de la cola de envío"
       simulated
     />
     ```

---

## 1. Estilo base v7.0 (para generar ilustraciones editoriales)

> **BASE_STYLE:**
> *Editorial technical illustration, clean and minimal, flat vector with subtle matte grain. Deep midnight indigo (#0C1124) and crisp cool paper (#F8F9FC) as the dominant palette, one single accent color per image, generous negative space, calm and precise, "engineering blueprint meets modern product design". Thin 1.5px linework, rounded rectangles as nodes, orthogonal connectors, small tick-mark rulers as a recurring motif. Crisp contrast, soft studio lighting, no chaotic gradients. 16:9, centered composition with breathing room. No text, no logos, no watermark, no UI chrome, no human faces, no hands.*

> **NEGATIVE (lo que NO queremos):**
> *neon glow, cyberpunk, 3D render, isometric, holograms, glowing circuits, wires, brains, robots, lens flare, rainbow gradients, oversaturation, stock-photo businesspeople, readable gibberish text, cartoonish mascots, watermarks.*

**Acento por pilar (v7.0)** (uno solo por imagen):
- **Construyendo** → Índigo Eléctrico `#4F46E5` / `#818CF8`
- **Automatización para PYMES** → Cian `#0891B2`
- **Herramientas e IA** → Cian Luminoso `#22D3EE`
- **Aprendiendo medición** → Esmeralda `#047857` / `#34D399`

---

## 2. Prompts por nota (portada)

Cada prompt = `BASE_STYLE` + la escena siguiente + el acento del pilar.

### Construyendo
- **`loginv-conteo-fisico`** (antes `loginv-punto-de-reorden`; se reutilizó la portada: la línea se lee como stock mínimo) — *A single warehouse shelf abstracted into stacked rounded bars whose levels drop toward a marked threshold line; a small clock/lead-time dial and a reorder marker where the line is crossed. Accent blue on the threshold and reorder marker only.*
- **`optimizar-vuelos-cp-sat`** — *An abstract route graph of nodes connected by clean orthogonal paths over a calm map grid; one optimal path highlighted, small weight/fuel gauges beside two nodes. Accent blue on the chosen route only.*
- **`validacion-juicio-expertos-v-de-aiken`** — *Several identical document cards with checkmark rows feeding into one summary card with a small bar gauge; a signature rule-line motif at the base. Accent blue on the summary card only.*
- **`empleo-pertinente-reglas-ocde`** — *A sorting diagram: scattered dots on the left resolved into two labeled lanes (horizontal/vertical fit) on the right, clean dividers. Accent blue on the resolved lanes only.*
- **`postgresql-vs-firestore`** — *A balanced two-column diagram: left a relational grid of linked tables, right a cluster of floating document cards, a thin divider between. Accent blue on the divider and one key node only.*
- **`validar-correos-antes-de-una-campana`** — *A funnel of small envelope nodes passing a verification gate; a few bounce away as faint outlines, the valid ones continue as solid nodes. Accent blue on the gate only.*
- **`por-que-redisene-mi-portafolio`** — *A before/after split: left a noisy dense block, right the same content as a calm ordered grid with a ruler cota underneath. Accent blue on the "after" ruler only.*

### Automatización para PYMES (acento ámbar)
- **`excel-que-no-se-rompe`** — *A spreadsheet grid where columns are read by name (small tags on headers) rather than position; one column is moved and the connection re-routes cleanly. Accent amber on the name tags only.*
- **`robot-sunat-playwright`** — *A stepped automation flow over a muted government-portal abstraction, with one step marked as a human checkpoint (a small pause/hand-off marker, no literal hand). Accent amber on the human checkpoint only.*
- **`tres-tareas-para-automatizar`** — *Three small repeating-task loops (order, inventory, data) each collapsing into a single clean arrow. Accent amber on the three arrows only.*

### Herramientas e IA (acento verde azulado)
- **`leer-vouchers-yape-con-ocr`** — *A payment-receipt card abstracted to three highlighted fields (amount, date, operation id) being read into a structured row, a crop/scan frame over it. Accent teal on the three read fields only.*
- **`bot-whatsapp-a-pedido-estructurado`** — *A free-text chat bubble transforming into a structured order card with line items and a total, a validation check against a small menu list. Accent teal on the structured card only.*

### Aprendiendo medición (acento verde medido)
- **`eventos-ga4-portafolio`** — *A tidy event schema: named event chips connecting to a small bar chart, a consent toggle set to "denied by default". Accent measured-green on the bars only.*

---

## 3. Conceptos inline opcionales (1 por nota de proyecto)

Para usar **dentro** del `.mdx`, después del diagrama, como refuerzo visual. Mismo `BASE_STYLE`.

- **`loginv-punto-de-reorden-02`** (obsoleto: LogINV no calcula ROP; no generar) — *Close abstract of the reorder-point formula visualized: average daily demand × lead time + safety stock, as three stacked bars summing into a threshold marker. Accent blue.*
- **`optimizar-vuelos-cp-sat-02`** — *Constraint model view: hard constraints (weight, fuel, capacity) as locked bars, the solver picking a feasible combination. Accent blue.*
- **`leer-vouchers-yape-con-ocr-02`** — *The preprocessing pipeline: full capture → cropped region → grayscale+threshold → read fields, four calm panels left to right. Accent teal.*
- **`bot-whatsapp-a-pedido-estructurado-02`** — *The JSON schema of an order shown as a clean labeled card (items, modifiers, total) with a check mark on "validated against menu". Accent teal.*

---

## 3.bis · Apps privadas: artículo con capturas reales (v4.2)

> **Plan completo y operativo para el agente de captura:** `docs/09-CAPTURAS-APPS-PRIVADAS.md` (incluye el script de anonimización, rutas de guardado, GIFs y la hoja de entrega). Esta sección es el resumen.

Algunos proyectos son **apps de un solo usuario** y se les **ocultó el enlace y el repo** (bolsa/galería, `isPrivate: true`): PrestaFacilito, LogINV, LogiFlow, DataWeave BI, Coralia, Sistema Obra. En vez de enlace, se documentan como **artículo/caso con capturas reales estilizadas**, sin link ni repositorio.

**Flujo de captura (acordado con Sebastián):**
1. Sebastián **inicia sesión** en la app dentro del navegador de Claude (Claude nunca escribe credenciales).
2. Claude navega las pantallas pertinentes y **toma capturas** (inicio, flujo principal, estados con datos).
3. **Manejo de datos:** las capturas se marcan visualmente como **"datos de referencia, no reales"**. Si una pantalla muestra **datos identificables de terceros** (nombre completo + monto + teléfono/DNI de un prestatario real), Claude **ofusca o recomienda reemplazar por datos simulados** antes de publicar (privacidad de terceros y `CLAUDE.md` regla 7). No se publica un link ni el repo.
4. Claude **estiliza** (recorte, marco de marca, etiqueta) y arma el artículo explicando qué resuelve la app, el flujo y las decisiones — como los casos (06-CONTENIDO §4), sin métricas inventadas.

**Prioridad de captura:** PrestaFacilito (cronograma, OCR de voucher, cobranzas) → LogINV (stock, ROP, caducidad) → DataWeave/LogiFlow (tableros) → Coralia/Sistema Obra.

**Dónde van las imágenes:** `public/img/proyectos/<slug>/<n>.webp`, referenciadas desde el `.mdx` del caso. Alt descriptivo y, en el pie, "Captura con datos de referencia, no reales".

---

## 4. Control de calidad antes de publicar

- [ ] 16:9, 1600 × 900, WebP < 200 KB (o captura recortada con `<Figure simulated />`), mirada al 100 % buscando neón/3D/stock.
- [ ] Un solo acento, el del pilar; el resto en Índigo Nocturno + Papel frío.
- [ ] Sin texto legible dentro de la imagen (evita faltas y se ve genérico).
- [ ] `coverAlt` escrito: describe lo que se ve, no "imagen de portada".
- [ ] Se ve bien en claro y oscuro (la imagen es la misma; por eso fondo neutro, no blanco puro ni negro puro).
