import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <div className="mb-6">
              <AlertTriangle size={64} className="mx-auto text-primary mb-4" />
              <h2 className="text-2xl font-semibold text-[#f5fcff] mb-2">
                Algo salió mal
              </h2>
              <p className="text-slate-300 mb-6">
                Ha ocurrido un error inesperado. Puedes intentar recargar la página o contactar al administrador.
              </p>
              
              {import.meta.env.DEV && this.state.error && (
                <details className="text-left bg-[#2d2d2d] p-4 rounded-lg mb-6 text-sm">
                  <summary className="cursor-pointer text-slate-300 mb-2">
                    Detalles técnicos
                  </summary>
                  <pre className="text-primary whitespace-pre-wrap">
                    {this.state.error.message}
                    {'\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <RefreshCw size={16} />
                Reintentar
              </button>
              <button
                onClick={this.handleReload}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Recargar página
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
