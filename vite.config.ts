import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Evitar generación de source maps para CSS en entorno de desarrollo
  css: {
    devSourcemap: false,
  },
  build: {
    sourcemap: false,
    target: 'es2015', // Mejor compatibilidad móvil
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar bibliotecas grandes en chunks específicos
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', 'react-intersection-observer'],
        },
        // Optimizar nombres de archivos para caché
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Aumentar el límite de advertencia de chunk a 1000kb
    chunkSizeWarningLimit: 1000,
  },
  // Optimizaciones para móviles
  server: {
    fs: {
      strict: false,
    },
  },
});
