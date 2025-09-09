import React from 'react';

const MobileOptimizedLoader: React.FC = () => {
  return (
    <div className="loading-fallback">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
        </div>
        <p className="text-sm text-gray-300">Cargando portafolio...</p>
      </div>
    </div>
  );
};

export default MobileOptimizedLoader;
