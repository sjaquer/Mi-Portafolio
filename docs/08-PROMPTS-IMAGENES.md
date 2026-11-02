# 08 · Prompts de imágenes para las Notas (v4.2)

> **Para quién:** otro agente/generador de imágenes (Midjourney, DALL·E, Flux, Firefly, etc.).
> **Objetivo:** una **portada por nota** (y conceptos inline opcionales) que acompañen al diagrama SVG, sin romper la estética de marca.
> **Regla de marca:** las imágenes son **apoyo**, no decoración genérica. El manual (03-DESIGN §6.8) prioriza los planos SVG; estas imágenes se suman, con la misma sobriedad. **Nada de neón, 3D isométrico, glassmorphism, "hologramas", circuitos brillantes, robots ni rostros.**

---

## 0. Cómo se usan una vez generadas

1. Exportar a **WebP**, **1600 × 900 px** (16:9), < 200 KB.
2. Guardar en `public/img/notas/<slug>.webp`.
3. En `content/notas/index.ts`, añadir al objeto de la nota:
   ```ts
   cover: "/img/notas/<slug>.webp",
   coverAlt: "<descripción concreta de lo que se ve, en español>",
   ```
   Si no hay `cover`, la nota usa el motivo gráfico del pilar (fallback automático).
4. Inline (dentro del `.mdx`): markdown normal `![texto alternativo](/img/notas/<slug>-02.webp)`.

---

## 1. Estilo base (pega esto en TODOS los prompts)

> **BASE_STYLE:**
> *Editorial technical illustration, clean and minimal, flat vector with subtle paper grain. Deep navy (#13233A) and off-white paper (#FAFAF8) as the dominant palette, one single accent color per image, generous negative space, calm and precise, "engineering blueprint meets modern product design". Thin 1.5px linework, rounded rectangles as nodes, orthogonal connectors, small tick-mark rulers as a recurring motif. Muted, desaturated, high contrast, soft even lighting, no gradients beyond one tonal step. 16:9, centered composition with breathing room. No text, no logos, no watermark, no UI chrome, no human faces, no hands.*

> **NEGATIVE (lo que NO queremos):**
> *neon, glow, cyberpunk, 3D render, isometric, glassmorphism, holograms, glowing circuits, wires, brains, robots, lens flare, rainbow/purple gradients, oversaturation, stock-photo businesspeople, cluttered UI screenshots, cartoonish mascots, drop shadows, bevels, text, letters, numbers as focal subject.*

**Acento por pilar** (una sola por imagen):
- **Construyendo** → azul acción `#2350D9`
- **Automatización para PYMES** → ámbar `#D0611F`
- **Herramientas e IA** → verde azulado `#00897B`
- **Aprendiendo medición** → verde medido `#0B7350`

---

## 2. Prompts por nota (portada)

Cada prompt = `BASE_STYLE` + la escena siguiente + el acento del pilar.

### Construyendo
- **`loginv-punto-de-reorden`** — *A single warehouse shelf abstracted into stacked rounded bars whose levels drop toward a marked threshold line; a small clock/lead-time dial and a reorder marker where the line is crossed. Accent blue on the threshold and reorder marker only.*
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

- **`loginv-punto-de-reorden-02`** — *Close abstract of the reorder-point formula visualized: average daily demand × lead time + safety stock, as three stacked bars summing into a threshold marker. Accent blue.*
- **`optimizar-vuelos-cp-sat-02`** — *Constraint model view: hard constraints (weight, fuel, capacity) as locked bars, the solver picking a feasible combination. Accent blue.*
- **`leer-vouchers-yape-con-ocr-02`** — *The preprocessing pipeline: full capture → cropped region → grayscale+threshold → read fields, four calm panels left to right. Accent teal.*
- **`bot-whatsapp-a-pedido-estructurado-02`** — *The JSON schema of an order shown as a clean labeled card (items, modifiers, total) with a check mark on "validated against menu". Accent teal.*

---

## 4. Control de calidad antes de publicar

- [ ] 16:9, 1600 × 900, WebP < 200 KB, mirada al 100 % buscando neón/3D/stock (si aparece, se descarta).
- [ ] Un solo acento, el del pilar; el resto marino + papel.
- [ ] Sin texto legible dentro de la imagen (evita faltas y se ve genérico).
- [ ] `coverAlt` escrito: describe lo que se ve, no "imagen de portada".
- [ ] Se ve bien en claro y oscuro (la imagen es la misma; por eso fondo neutro, no blanco puro ni negro puro).
