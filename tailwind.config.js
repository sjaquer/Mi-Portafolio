/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Azul principal actualizado (uso predominante en la UI)
        primary: {
          DEFAULT: '#0476D9', // tono base más sobrio
          600: '#2563EB',
          700: '#015DDF',
          800: '#0460D9',
          // token para uso en textos/hover
          light: '#58A9F6'
        },
        // Amarillo/secondary: acento, usar con moderación
        secondary: {
          DEFAULT: '#F2B705',
          600: '#F28705',
          700: '#F25C05',
          // token menos saturado para fondos/accents
          soft: '#F6D98A'
        },
        // Verde para CTAs / confirmaciones (uso puntual)
        success: {
          DEFAULT: '#16A34A',
          600: '#0c9942ff'
        },
        accent: {
          DEFAULT: '#272626ff'
        },

        dark: {
          DEFAULT: '#1b1b1b',
          100: '#262626',
          200: '#222222',
          300: '#1f1f1f',
          500: '#171717',
          700: '#0f0f0f',
          900: '#0a0a0a'
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
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
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