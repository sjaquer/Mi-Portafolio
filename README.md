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
│   ├── iconperso.jpg
│   └── icontitle.png
├── pdf/
│   ├── proyecto1.pdf
│   └── certificaciones.pdf
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
* Para cambiar imágenes, remplaza archivos en `images/` y ajusta rutas en los componentes.

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
