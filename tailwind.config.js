/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Google Sans', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['Google Sans Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        // FONDO: Oscuro profundo inmersivo basado en CSS Variables de Slate-950
        dark: {
          DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
          surface: 'hsl(var(--surface-raised) / <alpha-value>)',
          card: 'hsl(var(--surface-raised) / <alpha-value>)',
          border: 'hsl(var(--border) / <alpha-value>)',
        },
        // ACENTO CÓDIGO/BACKEND: Emerald desaturado basado en CSS Variables
        accent: {
          DEFAULT: 'hsl(var(--accent-light) / <alpha-value>)',
          hover: 'hsl(var(--accent) / <alpha-value>)',
          subtle: 'hsl(var(--accent-light) / 0.1)',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        // ACENTO IA EXCLUSIVO: Remapeado a Emerald para LILA BAN compliance
        ai: {
          DEFAULT: 'hsl(var(--accent-light) / <alpha-value>)',
          light: '#6ee7b7',      // emerald-300
          dark: 'hsl(var(--accent) / <alpha-value>)',
          glow: 'rgba(52, 211, 153, 0.15)',
          gradient: {
            from: 'hsl(var(--accent-light) / <alpha-value>)',
            to: '#0d9488',       // teal-600
          }
        },
        // Colores legacy remapeados a Emerald/Slate para mantener compatibilidad y erradicar violeta/fucsia
        primary: {
          DEFAULT: 'hsl(var(--accent-light) / <alpha-value>)',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: 'hsl(var(--accent-light) / <alpha-value>)',
          600: 'hsl(var(--accent) / <alpha-value>)',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          foreground: 'hsl(var(--surface) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: '#34d399',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#34d399',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      boxShadow: {
        'bento': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'bento-dark': '0 20px 40px -15px rgba(0,0,0,0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideInLeft: { '0%': { transform: 'translateX(-100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInUp: { '0%': { transform: 'translateY(100%)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: []
};