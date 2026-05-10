/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // FONDO: Oscuro profundo inmersivo
        dark: {
          DEFAULT: '#09090b',    // zinc-950
          surface: '#18181b',    // zinc-900
          card: '#1c1c1f',
          border: '#27272a',     // zinc-800
        },
        // ACENTO CÓDIGO/BACKEND: Cyan + Emerald
        accent: {
          DEFAULT: '#22d3ee',    // cyan-400
          hover: '#06b6d4',      // cyan-500
          subtle: 'rgba(34,211,238,0.1)',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        // ACENTO IA EXCLUSIVO: Violet -> Fuchsia
        ai: {
          DEFAULT: '#a855f7',    // violet-500
          light: '#c084fc',      // violet-400
          dark: '#7c3aed',       // violet-600
          glow: 'rgba(168,85,247,0.4)',
          gradient: {
            from: '#8b5cf6',     // violet-500
            to: '#d946ef',       // fuchsia-500
          }
        },
        // Colores legacy para evitar fallos (que irán desapareciendo)
        primary: {
          DEFAULT: '#22d3ee', 
          50: '#ecf8fb',
          100: '#cdeefb',
          200: '#9fe8f5',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#164e63',
          900: '#083344',
          foreground: '#09090b',
        },
        secondary: {
          DEFAULT: '#a855f7',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
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
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideInLeft: { '0%': { transform: 'translateX(-100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInUp: { '0%': { transform: 'translateY(100%)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': '0% 50%' },
          '50%': { 'background-size': '200% 200%', 'background-position': '100% 50%' },
        },
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