/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        // Business / Navy Palette (Renamed to 'slate-custom' or just relied on slate, 
        // but keeping structure for safety, now 'neutral-dark')
        'neutral-dark': {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        // Primary: Verde Lima (#d9e512) - Color Principal
        primary: {
          DEFAULT: '#d9e512', 
          50: '#fcfde7',
          100: '#f9fccf',
          200: '#f1f89f',
          300: '#e9f470',
          400: '#e1f040',
          500: '#d9e512', // Base
          600: '#aec70e',
          700: '#82950a',
          800: '#66760f',
          900: '#546110',
          foreground: '#1e1e1e', // Text on primary
        },
        // Secondary: Azul Celeste (#3861d7)
        secondary: {
          DEFAULT: '#3861d7', 
          50: '#eff4ff',
          100: '#dfe8ff',
          200: '#c5d7ff',
          300: '#9dbfff',
          400: '#709dff',
          500: '#3861d7', // Base
          600: '#2a4ab5',
          700: '#233b93',
          800: '#1e3176',
          900: '#121c43',
        },
        // Background: Gris Negro (#1e1e1e) - Fondo principal
        dark: {
          DEFAULT: '#0a0a0a', 
          surface: '#171717', 
          border: '#262626',
        },
        
        // Colores específicos para mejor contraste en tema claro
        'light-text': {
          primary: '#0F172A',    // Negro profundo
          secondary: '#334155',  // Gris muy oscuro
          muted: '#475569',      // Gris mejorado para tema claro
          subtle: '#64748B'      // Gris más legible
        },
        
        // Grises mejorados para ambos temas
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
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideInLeft: { '0%': { transform: 'translateX(-100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInUp: { '0%': { transform: 'translateY(100%)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } }
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