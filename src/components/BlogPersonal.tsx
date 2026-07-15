import React, { useState, useEffect } from 'react';
import { poemas } from '../data/poemas';
import SEO from './SEO';

// ==========================================
// CONFIGURACIÓN DE SEGURIDAD (Edita esto)
// ==========================================
const PREGUNTA_SECRETA = "¿Cuál es mi color favorito?"; // Tu pregunta personalizada
const RESPUESTA_CORRECTA = "azul"; // Tu respuesta secreta (en minúsculas)
const AUTH_KEY = "sjaquer_blog_auth_state"; // Clave para guardar en localStorage

const BlogPersonal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  // Comprobar si ya está autenticado en localStorage
  useEffect(() => {
    const isAuth = localStorage.getItem(AUTH_KEY);
    if (isAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normalizar la respuesta (minúsculas y sin espacios al inicio/final)
    const normalizedAnswer = answer.trim().toLowerCase();
    const normalizedCorrect = RESPUESTA_CORRECTA.trim().toLowerCase();

    if (normalizedAnswer === normalizedCorrect) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      // Animación sutil de sacudida
      const inputEl = document.getElementById('security-input');
      if (inputEl) {
        inputEl.classList.add('shake');
        setTimeout(() => inputEl.classList.remove('shake'), 500);
      }
    }
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  if (!isAuthenticated) {
    return (
      <div className="security-wrapper">
        <SEO noindex={true} title="Archivo - Verificación" />
        <style>{`
          .security-wrapper {
            background: #000000;
            color: #7b8291;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .security-card {
            max-width: 400px;
            width: 100%;
            text-align: center;
          }
          .security-title {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.25em;
            margin-bottom: 2rem;
            font-weight: 500;
            color: #5a7d9a;
          }
          .security-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
          .security-input {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1px solid #333;
            color: #9299a8;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 1rem;
            padding: 0.5rem 0;
            text-align: center;
            outline: none;
            transition: border-color 0.3s ease;
          }
          .security-input:focus {
            border-bottom-color: #5a7d9a;
          }
          .security-btn {
            background: transparent;
            border: 1px solid #333;
            color: #7b8291;
            font-family: 'Inter', sans-serif;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 0.75rem 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .security-btn:hover {
            border-color: #5a7d9a;
            color: #9299a8;
          }
          .error-text {
            color: #8b1e1e;
            font-size: 0.8rem;
            letter-spacing: 0.05em;
            margin-top: 0.5rem;
          }
          .back-link {
            display: inline-block;
            margin-top: 3rem;
            font-size: 0.7rem;
            color: #333;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            transition: color 0.3s ease;
          }
          .back-link:hover {
            color: #5a7d9a;
          }
          
          /* Animación de error */
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          .shake {
            animation: shake 0.4s ease-in-out;
            border-bottom-color: #8b1e1e !important;
          }
        `}</style>
        <div className="security-card">
          <h2 className="security-title">{PREGUNTA_SECRETA}</h2>
          <form onSubmit={handleSubmit} className="security-form">
            <input
              id="security-input"
              type="text"
              className="security-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Escribe tu respuesta..."
              autoFocus
              autoComplete="off"
            />
            {error && <span className="error-text">Respuesta incorrecta. Acceso denegado.</span>}
            <button type="submit" className="security-btn">Verificar</button>
          </form>
          <a href="/" onClick={handleGoBack} className="back-link">
            ← Volver al sitio principal
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-wrapper">
      <SEO noindex={true} title="Archivo" />
      <style>{`
        .blog-wrapper {
          /* Degradado radial: de un gris asfalto muy oscuro en la cima hacia el negro puro */
          background: radial-gradient(circle at 50% 0%, #1a1a24 0%, #000000 80%);
          background-attachment: fixed; /* Evita que el degradado se rompa al hacer scroll */
          color: #7b8291; /* Gris plomo para evitar la fatiga visual del blanco */
          font-family: 'Inter', sans-serif;
          font-weight: 300; /* Peso ligero para mayor elegancia */
          line-height: 1.8;
          padding: 15vh 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }

        .blog-main {
          max-width: 550px;
          width: 100%;
          position: relative;
        }

        .blog-article {
          margin-bottom: 35vh; /* Distancia abismal entre cada texto */
          opacity: 0.7; /* Ligeramente apagado por defecto */
          transition: opacity 0.8s ease;
        }

        .blog-article:hover {
          opacity: 1; /* El texto recobra vida solo cuando el lector se detiene en él */
        }

        .blog-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 2.5rem;
          font-weight: 500;
          border-left: 2px solid #8b1e1e; /* La única marca de sangre */
          padding-left: 1.5rem;
          
          /* Degradado en el texto: de un celeste acero a un gris plomo */
          background: linear-gradient(90deg, #5a7d9a 0%, #405160 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-text {
          font-size: 1rem;
          color: #9299a8;
          white-space: pre-wrap; /* Mantiene la estructura de tus versos intacta */
        }

        .eof {
          text-align: center;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #333;
          margin-top: 10vh;
          margin-bottom: 10vh;
          text-transform: uppercase;
        }

        .nav-back-container {
          width: 100%;
          max-width: 550px;
          margin-bottom: 5vh;
          display: flex;
          justify-content: flex-start;
        }

        .nav-back-btn {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: #444;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }

        .nav-back-btn:hover {
          color: #5a7d9a;
        }
      `}</style>

      <div className="nav-back-container">
        <a href="/" onClick={handleGoBack} className="nav-back-btn">
          ← Volver al sitio
        </a>
      </div>

      <main className="blog-main">
        {poemas.map((poema) => (
          <article key={poema.id} className="blog-article">
            <h1 className="blog-title">{poema.titulo}</h1>
            <p className="blog-text">{poema.contenido}</p>
          </article>
        ))}

        <div className="eof">Fin del expediente</div>
      </main>
    </div>
  );
};

export default BlogPersonal;
