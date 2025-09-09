import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar bibliotecas grandes en chunks específicos
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', 'react-intersection-observer'],
        },
      },
    },
    // Aumentar el límite de advertencia de chunk a 1000kb
    chunkSizeWarningLimit: 1000,
  },
});
