import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './utils/theme';

// Optimización para móviles: deshabilitar StrictMode en producción
const AppWrapper = import.meta.env.DEV 
  ? StrictMode 
  : ({ children }: { children: React.ReactNode }) => <>{children}</>;

createRoot(document.getElementById('root')!).render(
  <AppWrapper>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppWrapper>
);
