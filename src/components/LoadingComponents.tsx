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
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      <div className="w-5 h-5 border-2 border-zinc-800 border-t-emerald-500 rounded-full animate-spin mb-3" />
      <h3 className="text-sm font-semibold text-zinc-200 mb-1">{title}</h3>
      <p className="text-xs text-zinc-500 text-center max-w-sm">{description}</p>
    </div>
  );
};
