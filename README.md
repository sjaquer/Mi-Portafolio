<p align="center">
  <img src="https://avatars.githubusercontent.com/u/72231436?v=4" alt="Avatar" width="120" style="border-radius: 50%;" />
</p>

# Portafolio-Virtual

> **“Innovación estratégica al servicio de tus proyectos.”**

---

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.1.6-blue?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5.1.0-lightgrey?logo=vite&logoColor=purple" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.7-teal?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## 🧠 Descripción general

Este repositorio contiene mi portafolio virtual, una aplicación web desarrollada con React, TypeScript, Vite y Tailwind CSS. Está diseñada para mostrar mis proyectos, experiencia, habilidades y formación de manera interactiva y moderna. Incluye secciones de presentación, galería de trabajos, experiencia profesional, educación, habilidades y un formulario de contacto.

---

## 🛠️ Historia del desarrollo

### 🔹 Objetivo inicial

* Crear un portafolio personal que refleje mis competencias como desarrollador y creativo estratégico.
* Implementar un diseño limpio, responsivo y con modo oscuro/ligero.
* Facilitar la navegación y destacar proyectos clave y certificaciones.

### 🔹 Desafíos principales

* Configurar Vite con TypeScript para un arranque rápido y eficiente.
* Diseñar componentes reutilizables y mantener consistencia de estilos con Tailwind.
* Integrar un formulario de contacto funcional sin servidor (usando correo por API o servicio de terceros).

### 🔹 Soluciones adoptadas

* **Vite + React + TypeScript** para rapidez de desarrollo y tipado estricto.
* **Tailwind CSS** con configuración personalizada (`tailwind.config.js`) para variables de color y dark mode.
* **Componentes modulares** (`Header`, `Hero`, `Portfolio`, `Experience`, `Education`, `Skills`, `Contact`, `Footer`) para mantenimiento sencillo.

---

## 📋 Estructura del proyecto

```
Mi-Portafolio/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── favicon.ico
├── images/
│   └── iconperso.webp
├── pdf/
│   ├── cv-sj-2025.pdf
│   ├── excel.pdf
│   ├── international-talks.pdf
│   ├── powerbi-zegel.pdf
│   ├── prompt-linkedin.pdf
│   ├── python-practicando.pdf
│   ├── sql-idat.pdf
│   └── unreal-engine.pdf
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Portfolio.tsx
    │   ├── Experience.tsx
    │   ├── Education.tsx
    │   ├── Skills.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    ├── data/
    │   └── portfolio.ts
    └── types/
        └── index.ts
```

---

## 🚶‍♂️ Flujo de desarrollo

1. **Configuración inicial**

   * Se generó el proyecto con Vite usando plantilla React + TypeScript.
   * Se instaló Tailwind CSS y se creó `tailwind.config.js` para personalizar colores y activar modo oscuro.

2. **Diseño y maquetación**

   * Se definieron componentes base en `src/components`.
   * Se importaron tipografías y estilos globales en `index.css`.
   * Se implementó dark/light toggle usando clases de Tailwind.

3. **Población de datos**

   * Se estructuró `src/data/portfolio.ts` con arrays de proyectos, experiencia y educación.
   * Cada componente consume estos datos de manera dinámica.

4. **Interactividad**

   * Se añadió scroll suave y animaciones discretas con Tailwind y Framer Motion (si aplica).
   * Formulario de contacto validado con uso de React Hook Form y envío vía API (SendGrid, Formspree, etc.).

5. **Despliegue**

   * Se configuró despliegue en Netlify/Vercel con previews automáticos desde GitHub.
   * Se añadió badge de visita en GitHub Actions para CI/CD (tests de lint y build).

---

## 💾 Instalación y uso

### 1. Clona el repositorio

```bash
git clone https://github.com/sjaquer/Mi-Portafolio.git
cd Mi-Portafolio
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Ejecuta en modo desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173`.

### 4. Genera build de producción

```bash
npm run build
```

---

## ✅ Uso y personalización

* Edita `src/data/portfolio.ts` para actualizar proyectos y experiencia.
* Modifica estilos en `tailwind.config.js` o `index.css`.
* Para cambiar imágenes, reemplaza archivos en `public/images/` y ajusta rutas en los componentes.

### Cómo editar el contenido (data-driven)

Este proyecto está pensado para ser "data-driven": la mayor parte del contenido, el orden y el layout se controlan desde archivos de datos en `src/data/`. Cambiar texto, añadir un servicio, o reordenar bloques no requiere tocar los componentes, solo editar estas fuentes de datos.

- `src/data/siteContent.ts` — Texto principal y copia (hero, descripciones, títulos de secciones, textos de botones). Es el lugar ideal para cambiar frases, CTAs y subtítulos.
- `src/data/bentoLayout.ts` — Define la configuración del layout tipo "Bento": lista de items, su tipo (`type`), posición/`spans`, prioridad y propiedades específicas por tipo. Cambiando el orden de este array cambias el orden visual en la página.
- `src/data/portfolio.ts` — Contiene los arrays con los proyectos, casos de estudio, y a veces entradas reutilizables por componentes (ej.: galerías).

### Tipos de items soportados

Los componentes renderizan items según su `type`. Los tipos más usados son:

- `hero` — Cabecera principal (título, subtítulo, CTA).
- `profile` — Tarjeta de presentación breve.
- `stat` — Métrica / llamada a la acción (por ejemplo WhatsApp). Puede ser click-through si incluye `buttonHref`.
- `service` — Servicio ofertado (título, descripción, icono, imagen, botón).
- `portfolio` / `case` — Entrada de proyecto (imagen, título, descripción, tags, enlace).
- `gallery` — Colección de imágenes.
- `testimonial` / `review` — Reseñas o clientes.
- `skills` — Listado de tecnologías (buscable/filtrable).
- `cta` — Bloque de llamada a la acción más grande (banner).

Si necesitas añadir un nuevo tipo, revisa `src/components/DynamicBentoCard.tsx` para ver cómo se mapean `type` a componentes/plantillas. Añadir un nuevo `type` puede necesitar una pequeña modificación tipada en `src/types/index.ts`.

### Ejemplo: añadir un servicio

1. Abrir `src/data/siteContent.ts` (o `src/data/bentoLayout.ts` si quieres controlar posición exacta).
2. Añadir un objeto con `type: 'service'` y las propiedades que usa el renderizador. Ejemplo:

```ts
// ejemplo dentro de `bentoLayout.items` o en `siteContent.services`
{
   id: 'service-uxui',
   type: 'service',
   title: 'Diseño UX/UI',
   subtitle: 'Interfaces limpias y centradas en conversión',
   icon: 'Layout', // nombre de icono o clave que el mapeador entiende
   image: '/images/service-uxui.webp',
   buttonText: 'Solicitar cotización',
   buttonHref: 'mailto:hola@tudominio.com',
   spans: { cols: 2, rows: 1 },
}
```

3. Guardar y ejecutar `npm run dev` para ver los cambios en `http://localhost:5173`.

### Ejemplo: añadir un proyecto al portafolio

Editar `src/data/portfolio.ts` y añadir un objeto al array `projects` (o como esté nombrado):

```ts
{
   id: 'proj-landing-2025',
   title: 'Landing conversión para cliente X',
   description: 'Rediseño y optimización de funnels. +47% conversión en 3 meses.',
   image: '/images/landing-x.webp',
   tags: ['React', 'Tailwind', 'Conversion'],
   href: 'https://cliente-x.example.com',
}
```

El componente `Portfolio` leerá automáticamente este array y renderizará la nueva entrada.

### Reordenar o ajustar layout

Para mover un bloque a otra posición modifica el orden en `src/data/bentoLayout.ts`. Para cambiar su tamaño/ocupación en el grid ajusta las propiedades `spans` o `cols/rows` (la nomenclatura usada por tu `BentoGrid`).

### Tipos y comprobaciones (TypeScript)

Hay tipos en `src/types/index.ts` que describen la forma de cada item. Si TypeScript marca errores después de editar los datos, revisa que los nombres de propiedades y los tipos coincidan con esos archivos.

### Comprobación rápida

En PowerShell, desde la raíz del proyecto:

```powershell
npm install    # si no lo has hecho
npm run dev    # sirve para ver cambios en tiempo real
npm run build  # comprueba que la compilación de producción pasa
```

Si TypeScript muestra errores, corrige las propiedades (por ejemplo `title`, `image`, `spans`) según los tipos definidos en `src/types/index.ts`.

### Rutas y assets

Coloca imágenes en `public/images/` y referencias con rutas absolutas desde la raíz del sitio (`/images/nombre.webp`). PDFs u otros recursos van en `public/pdf/`.

### Accesibilidad y buenas prácticas

- Mantén texto alternativo (alt) para imágenes en `portfolio` y `gallery`.
- Revisa contraste de colores si cambias la paleta en `tailwind.config.js`.
- Si añades animaciones, respeta la preferencia `prefers-reduced-motion`.

---


---

## 📌 Consideraciones técnicas

* Tipado estricto con TypeScript para evitar errores en tiempo de compilación.
* Arquitectura basada en componentes para escalabilidad.
* Responsive design garantizado para móviles, tablets y escritorio.

---

## 📝 Licencia

MIT License. Puedes usar y modificar este proyecto libremente.

---

## 👨‍💻 Autor

[![avatar](https://avatars.githubusercontent.com/u/72231436?v=4)](https://github.com/sjaquer)

Desarrollado por **Sebastián Jaque**
Sitio en vivo: [https://sjaquer.is-a.dev/](https://sjaquer.is-a.dev/)
