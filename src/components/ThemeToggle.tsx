import React, { useEffect } from 'react';
import { Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  // Asegurar que el tema oscuro sea el único y predeterminado
  useEffect(() => {
    // Limpiar cualquier configuración previa de tema
    localStorage.removeItem('theme');
    
    // Establecer el tema oscuro como único
    document.documentElement.className = 'dark';
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <div
      className={`
        relative p-2.5 rounded-lg border transition-all duration-300
  bg-surface border border-[rgba(255,255,255,0.03)] text-gray-300
        ${className}
      `}
      title="Modo Oscuro"
      aria-label="Modo Oscuro"
    >
      <Moon size={16} />
      
      {/* Tooltip */}
      <div className="
        absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        px-2 py-1 text-xs rounded bg-gray-900 text-white
        opacity-0 hover:opacity-100 transition-opacity duration-200
        pointer-events-none whitespace-nowrap z-50
      ">
        Modo Oscuro
      </div>
    </div>
  );
};

export default ThemeToggle;
