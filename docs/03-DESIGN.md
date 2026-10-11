# 03 · DESIGN — Sistema de diseño

> Fuente de verdad visual. Si una decisión no está aquí, se agrega aquí antes de implementarla.
> Todos los valores existen como **tokens** (variables CSS) y nunca se escriben a mano en los componentes.

---

## 1. Principios

1. **El contenido es el diseño.** Nada decorativo compite con el texto, las métricas o los CTA.
2. **Una acción principal por pantalla.** El ojo debe saber dónde hacer clic.
3. **Evidencia antes que adjetivos.** Las métricas y las capturas tienen más peso visual que los títulos de marketing.
4. **Rápido es una característica de diseño.** Si un efecto empeora el LCP o el INP, no entra.
5. **Accesible por defecto.** AA en todo; foco siempre visible.

**Referencias de tono:** producto digital limpio (documentación de Linear, Vercel, Stripe), no portafolio de agencia.

---

## 2. Color

Claro por defecto. Un solo color de acción. Contrastes verificados con la fórmula WCAG 2.x.

### 2.1 Tema claro

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--color-bg` | `#FAFAF8` | Fondo de página (blanco cálido) | — |
| `--color-surface` | `#FFFFFF` | Tarjetas, inputs, header | — |
| `--color-surface-muted` | `#F3F2EF` | Bloques secundarios, código en línea | — |
| `--color-border` | `#E4E2DD` | Bordes decorativos, separadores | Decorativo |
| `--color-border-strong` | `#8A9099` | Bordes de inputs (componentes UI) | 3,2:1 ✅ (≥ 3:1) |
| `--color-ink-900` | `#14161A` | Títulos y texto principal | 17,3:1 ✅ |
| `--color-ink-700` | `#3D424B` | Texto de párrafo largo | 9,7:1 ✅ |
| `--color-ink-500` | `#666C76` | Metadatos, fechas, leyendas | 5,1:1 ✅ |
| `--color-accent-600` | `#2350D9` | CTA primario, enlaces | 6,2:1 ✅ · texto blanco encima 6,5:1 ✅ |
| `--color-accent-700` | `#1B40B3` | Hover / activo del CTA | Texto blanco 8,6:1 ✅ |
| `--color-accent-50` | `#EEF2FF` | Fondo de etiquetas activas, resaltados | Texto accent-700 7,7:1 ✅ |
| `--color-success-700` | `#0B7350` | Métricas de resultado ("−35 %") | 5,6:1 ✅ |
| `--color-focus` | `#2350D9` | Anillo de foco (2 px + 2 px de separación) | — |

### 2.2 Tema oscuro

| Token | Hex | Contraste |
|---|---|---|
| `--color-bg` | `#0E1013` | — |
| `--color-surface` | `#171A1F` | — |
| `--color-border` | `#272B32` | Decorativo |
| `--color-ink-900` | `#ECEDEF` | 16,3:1 ✅ |
| `--color-ink-500` | `#A7ADB7` | 8,4:1 ✅ |
| `--color-accent-600` | `#7A9BFF` | 7,2:1 ✅ · texto `#0E1013` encima 7,2:1 ✅ |
| `--color-success-700` | `#3FC08A` | 8,3:1 ✅ |

### 2.3 Reglas de uso
- El azul de acción (`accent-600`) es **solo** para elementos clicables. Nunca para decorar.
- El verde (`success-700`) es **solo** para resultados medidos. Si aparece verde, es un número con contexto.
- Proporción aproximada por pantalla: 90 % neutros, 8 % acento, 2 % verde.
- Nada de degradados, neón ni glassmorphism.
- El azul conecta con el azul del CV (`#1F3A5F`), así la web y el CV se sienten de la misma marca.

---

## 3. Tipografía

**Familias:** [Geist](https://vercel.com/font) para todo el texto y Geist Mono para métricas, etiquetas de stack y código. Gratuitas, cargadas con `next/font` (sin peticiones externas, sin saltos de diseño).

**Escala (base 16 px, ratio ~1,25, fluida con `clamp`):**

| Token | Móvil → Escritorio | Peso | Interlineado | Uso |
|---|---|---|---|---|
| `--text-display` | 40 → 60 px | 600 | 1,05 | Solo el `h1` del hero |
| `--text-h1` | 32 → 44 px | 600 | 1,1 | `h1` de páginas internas |
| `--text-h2` | 26 → 32 px | 600 | 1,2 | Títulos de sección |
| `--text-h3` | 20 → 22 px | 600 | 1,3 | Títulos de tarjeta |
| `--text-lead` | 18 → 20 px | 400 | 1,55 | Párrafo introductorio |
| `--text-body` | 16 → 17 px | 400 | 1,65 | Texto general |
| `--text-small` | 14 px | 400 | 1,5 | Metadatos |
| `--text-label` | 12 px · mono · mayúsculas · tracking 0,06 em | 500 | 1,4 | Etiquetas de sección y stack |
| `--text-metric` | 32 → 40 px · mono | 600 | 1 | Cifras de resultado |

**Reglas**
- Ancho máximo de texto: **68 caracteres** (`max-width: 68ch`).
- Nunca texto de párrafo por debajo de 16 px.
- Máximo 2 pesos por pantalla (400 y 600).
- Títulos en "Tipo oración", no Tipo Título.
- `letter-spacing: -0.02em` en `display` y `h1`.

---

## 4. Espaciado y layout

### 4.1 Escala (base 4 px)

| Token | px | Uso típico |
|---|---|---|
| `--space-1` | 4 | Ícono ↔ texto |
| `--space-2` | 8 | Entre etiquetas |
| `--space-3` | 12 | Padding interno de etiquetas |
| `--space-4` | 16 | Padding de botón, gutter móvil |
| `--space-5` | 24 | Padding de tarjeta, entre párrafos |
| `--space-6` | 32 | Entre elementos de un bloque |
| `--space-7` | 48 | Título de sección ↔ contenido |
| `--space-8` | 64 | Entre secciones (móvil) |
| `--space-9` | 96 | Entre secciones (escritorio) |
| `--space-10` | 128 | Solo hero en escritorio |

**Regla de proximidad:** el espacio *dentro* de un grupo siempre es menor que el espacio *entre* grupos. Si dudas, sube un paso de la escala; nunca uses valores fuera de ella.

### 4.2 Grid
- Contenedor: `max-width: 1120px`, gutter lateral 16 px (móvil) / 24 px (tablet) / 32 px (escritorio).
- 4 columnas en móvil, 8 en tablet, 12 en escritorio; separación de 24 px.
- Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280`.
- Diseño **mobile-first**: el layout de 360 px es el principal; los demás son adaptaciones.

### 4.3 Radios, bordes y sombras

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 6 px | Etiquetas, inputs |
| `--radius-md` | 10 px | Botones |
| `--radius-lg` | 16 px | Tarjetas, imágenes de casos |
| `--radius-full` | 999 px | Avatar, chips de estado |
| `--shadow-sm` | `0 1px 2px rgb(20 22 26 / .06)` | Tarjeta en reposo |
| `--shadow-md` | `0 4px 16px rgb(20 22 26 / .08)` | Tarjeta en hover, menú abierto |

Preferir **borde de 1 px** sobre sombras. Una sombra solo cuando algo flota o responde al cursor.

---

## 5. Jerarquía visual

Cada pantalla se lee en este orden; si el orden real no coincide, el diseño está mal:

1. **Qué es** — título (`h1` / `h2`).
2. **Por qué importa** — resultado o lead (métrica verde o párrafo `lead`).
3. **Qué hacer** — CTA primario.
4. **Detalle** — texto, stack, metadatos.

Herramientas, en este orden de preferencia: **tamaño → peso → color → espacio → posición**. No usar más de dos a la vez para el mismo elemento.

**Prueba de entrecerrar los ojos:** con la vista borrosa, en cada pantalla deben destacar solo el título y un botón.

---

## 6. Componentes

### 6.1 Botón

| Variante | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| `primary` | accent-600 | blanco | — | La acción principal. **Máximo uno visible por pantalla.** |
| `secondary` | surface | ink-900 | border-strong | Acción alternativa junto al primario |
| `ghost` | transparente | accent-600 | — | Acciones terciarias, "Ver todo →" |
| `link` | — | accent-600 subrayado | — | Dentro de párrafos |

**Tamaños:** `sm` 36 px de alto (solo en escritorio, en barras) · `md` 44 px (por defecto) · `lg` 52 px (hero). Padding horizontal: 16 / 20 / 24 px. **Área táctil mínima 44 × 44 px** en todos los casos.

**Estados**

| Estado | Comportamiento |
|---|---|
| Hover | primary → accent-700; secondary → fondo surface-muted. Transición 150 ms. |
| Focus visible | Anillo `--color-focus` 2 px con 2 px de separación. Nunca `outline: none` sin reemplazo. |
| Activo | `transform: translateY(1px)` |
| Deshabilitado | Opacidad 0,5, `cursor: not-allowed`, `aria-disabled` |
| Cargando | Spinner de 16 px + texto ("Enviando…"), ancho fijo para no mover el layout |

**Texto del botón:** verbo + objeto ("Descargar CV", "Ver el caso", "Enviar mensaje"). Nunca "Clic aquí", "Más info" ni "Empezar".

Cada botón lleva `data-cta="<id>"` para la medición (ver `04-TECH-SEO-MEDICION.md`).

### 6.2 Inventario completo

| Componente | Descripción breve | Notas |
|---|---|---|
| `Header` | Logo/nombre, 4 enlaces, botón "CV" | Sticky, 64 px, borde inferior al hacer scroll. Menú hamburguesa en móvil con trampa de foco. |
| `Footer` | Enlaces, redes, "Actualizado: <fecha>" | Fecha generada en el build |
| `Container`, `Section` | Ancho y ritmo vertical | `Section` aplica `--space-8/9` |
| `SectionHeader` | Etiqueta mono + `h2` + lead opcional | |
| `Hero` | Nombre, rol, frase, foto, disponibilidad, 2 CTA | Foto con `priority`, sin animación de entrada |
| `ProofStrip` | 3 métricas con contexto | Métrica en `text-metric` verde + una línea de contexto |
| `CaseCard` | Imagen, título, problema, resultado, stack | Toda la tarjeta clicable (un solo enlace) |
| `CaseFacts` | Ficha del caso (rol, duración, stack, estado) | Lista de definiciones `<dl>` |
| `Metric` | Cifra + etiqueta + base/periodo | Obliga a pasar `context` |
| `Tag` | Etiqueta de stack | Mono, borde, sin color de acento |
| `StatusBadge` | "En producción", "Prototipo", "Entregado" | |
| `Timeline` | Experiencia | Cargo real, empresa, fechas |
| `PostCard` | Nota del blog | Pilar, fecha, tiempo de lectura |
| `Prose` | Estilos de texto largo para MDX | 68ch, enlaces subrayados |
| `Callout` | Aprendizaje / advertencia en casos | |
| `Figure` | Imagen + leyenda | `next/image`, AVIF/WebP, dimensiones obligatorias |
| `ContactForm` | Formulario de 4 campos | Errores en línea, `aria-live` |
| `ThemeToggle` | Claro / oscuro / sistema | Respeta `prefers-color-scheme` |
| `ConsentBanner` | Consentimiento de medición | Discreto, inferior, dos botones del mismo peso |

### 6.3 Inputs
- Alto 44 px, borde `border-strong`, radio `sm`, label siempre visible encima (nunca solo placeholder).
- Error: borde y texto en rojo accesible (`#B42318`, 6,5:1 sobre blanco), mensaje bajo el campo, `aria-describedby`.

---

## 7. Imágenes

- **Capturas de casos:** dentro de un marco neutro (fondo surface-muted, radio lg, padding 24 px). Siempre con datos simulados.
- **Diagramas de arquitectura:** SVG, trazo de 1,5 px, solo neutros + un acento.
- **Foto personal:** natural, fondo neutro, buena luz; la misma que LinkedIn para reconocimiento.
- **Prohibido:** renders 3D, ilustraciones genéricas de "IA", fotos de stock.
- Formatos AVIF/WebP vía `next/image`; ninguna imagen sobre 200 KB.

## 8. Movimiento

- Duraciones: 150 ms (hover), 200 ms (aparición de menús), 300 ms máximo.
- Curva: `cubic-bezier(.2, 0, 0, 1)`.
- Solo `opacity` y `transform` (no causan recálculo de layout).
- Sin animaciones de entrada al hacer scroll en el contenido principal.
- Respetar `prefers-reduced-motion: reduce` → sin transiciones.

## 9. Accesibilidad (checklist por componente)

- [ ] Contraste verificado (texto 4,5:1; componentes UI 3:1).
- [ ] Usable solo con teclado, orden lógico.
- [ ] Foco visible.
- [ ] Área táctil ≥ 44 × 44 px.
- [ ] Imágenes con `alt` descriptivo (decorativas con `alt=""`).
- [ ] Encabezados en orden, un `h1` por página.
- [ ] Enlaces con texto que tenga sentido fuera de contexto.
- [ ] `lang="es-PE"` en `<html>`.

## 10. Tokens en código

```css
/* app/tokens.css */
:root {
  --color-bg: #FAFAF8;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F3F2EF;
  --color-border: #E4E2DD;
  --color-border-strong: #8A9099;
  --color-ink-900: #14161A;
  --color-ink-700: #3D424B;
  --color-ink-500: #666C76;
  --color-accent-600: #2350D9;
  --color-accent-700: #1B40B3;
  --color-accent-50: #EEF2FF;
  --color-success-700: #0B7350;
  --color-danger-700: #B42318;
  --color-focus: var(--color-accent-600);

  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-full: 999px;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 24px;
  --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px; --space-10: 128px;
}

:root[data-theme="dark"] {
  --color-bg: #0E1013;
  --color-surface: #171A1F;
  --color-surface-muted: #1D2026;
  --color-border: #272B32;
  --color-border-strong: #6B717B;
  --color-ink-900: #ECEDEF;
  --color-ink-700: #C9CDD4;
  --color-ink-500: #A7ADB7;
  --color-accent-600: #7A9BFF;
  --color-accent-700: #A3BAFF;
  --color-accent-50: #1A2340;
  --color-success-700: #3FC08A;
  --color-danger-700: #FF8A80;
}
```

En Tailwind v4 se exponen con `@theme` para usar clases como `bg-surface`, `text-ink-900` o `p-5`.
