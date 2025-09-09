import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedFilterProps {
  categories: Array<{ id: string; label: string; icon: React.ComponentType<{ size?: number }> }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
}

export const AnimatedFilter: React.FC<AnimatedFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeFilter === category.id;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onFilterChange(category.id)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
              flex items-center gap-2 overflow-hidden group
              ${isActive 
                ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20' 
                : 'bg-surface text-gray-300 border border-white/10 hover:bg-surface-hover hover:text-white'
              }
            `}
            style={{
              boxShadow: isActive 
                ? '0 8px 25px rgba(11, 95, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Fondo animado para estado activo */}
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
            
            {/* Contenido */}
            <div className="relative z-10 flex items-center gap-2">
              <Icon size={16} />
              <span>{category.label}</span>
            </div>
            
            {/* Indicator dot para categoría activa */}
            {isActive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
