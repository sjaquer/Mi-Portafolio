import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  const variants = {
    primary: 'border-primary border-t-transparent',
    secondary: 'border-secondary border-t-transparent',
    ghost: 'border-gray-400 border-t-transparent'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={`
        ${sizeClasses[size]}
        ${variants[variant]}
        border-2 rounded-full
        ${className}
      `}
    />
  );
};

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '',
  variant = 'text'
}) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-[#2d2d2d] via-slate-700 to-[#2d2d2d] bg-[length:200%_100%]';
  
  const variantClasses = {
    text: 'h-4 rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, #2d2d2d 0%, #475569 50%, #2d2d2d 100%)',
        animation: 'shimmer 2s infinite linear'
      }}
    />
  );
};

interface LoadingStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  title = 'Cargando...',
  description = 'Por favor espera un momento',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col items-center justify-center py-12 ${className}`}
    >
      <LoadingSpinner size="lg" variant="primary" className="mb-4" />
      <h3 className="text-lg font-semibold text-[#f5fcff] mb-2">{title}</h3>
      <p className="text-sm text-slate-300 text-center max-w-sm">{description}</p>
    </motion.div>
  );
};

// Keyframes para el shimmer effect
const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

// Agregar los keyframes al documento
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerKeyframes;
  document.head.appendChild(style);
}
