import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { poemas } from '../data/poemas';
import SEO from './SEO';

const PREGUNTA_SECRETA = "¿Cuál es mi color favorito?";
const RESPUESTA_CORRECTA = "azul";
const AUTH_KEY = "sjaquer_blog_auth_state";

const BlogPersonal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const isAuth = localStorage.getItem(AUTH_KEY);
    if (isAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedAnswer = answer.trim().toLowerCase();
    const normalizedCorrect = RESPUESTA_CORRECTA.trim().toLowerCase();

    if (normalizedAnswer === normalizedCorrect) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
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
          .security-accent {
            width: 2rem;
            height: 1px;
            background: #5a7d9a;
            margin: 0 auto 2rem;
            opacity: 0.5;
          }
          .security-title {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            margin-bottom: 2.5rem;
            font-weight: 400;
            color: #5a7d9a;
            line-height: 1.6;
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
            padding: 0.6rem 0;
            text-align: center;
            outline: none;
            transition: border-color 0.4s ease;
          }
          .security-input:focus {
            border-bottom-color: #5a7d9a;
          }
          .security-input::placeholder {
            color: #333;
            font-size: 0.85rem;
          }
          .security-btn {
            background: transparent;
            border: 1px solid #333;
            color: #7b8291;
            font-family: 'Inter', sans-serif;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            padding: 0.75rem 2.5rem;
            cursor: pointer;
            transition: all 0.4s ease;
            margin-top: 0.5rem;
          }
          .security-btn:hover {
            border-color: #5a7d9a;
            color: #9299a8;
          }
          .error-text {
            color: #8b1e1e;
            font-size: 0.75rem;
            letter-spacing: 0.08em;
            margin-top: 0.25rem;
          }
          .back-link {
            display: inline-block;
            margin-top: 3.5rem;
            font-size: 0.65rem;
            color: #333;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.25em;
            transition: color 0.4s ease;
          }
          .back-link:hover {
            color: #5a7d9a;
          }

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
        <motion.div
          className="security-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="security-accent" />
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
            {error && (
              <motion.span
                className="error-text"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Respuesta incorrecta. Acceso denegado.
              </motion.span>
            )}
            <button type="submit" className="security-btn">Verificar</button>
          </form>
          <a href="/" onClick={handleGoBack} className="back-link">
            ← Volver al sitio principal
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="blog-wrapper">
      <SEO noindex={true} title="Archivo" />
      <style>{`
        .blog-wrapper {
          background: radial-gradient(circle at 50% 0%, #14141e 0%, #000000 80%);
          background-attachment: fixed;
          color: #7b8291;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          line-height: 1.8;
          padding: 12vh 5vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
        }

        .blog-main {
          max-width: 660px;
          width: 100%;
        }

        .blog-article {
          position: relative;
          margin-bottom: 40vh;
          padding-top: 2rem;
        }

        .blog-article:last-of-type {
          margin-bottom: 15vh;
        }

        .poem-bar {
          width: 1.5rem;
          height: 1px;
          margin-bottom: 1.5rem;
          transition: width 0.6s ease, opacity 0.6s ease;
        }

        .blog-article:hover .poem-bar {
          width: 3.5rem;
        }

        .blog-title {
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin-bottom: 2.5rem;
          border-left: 1px solid;
          padding-left: 1.5rem;
          line-height: 1.4;
          transition: border-left-width 0.4s ease;
        }

        .blog-article:hover .blog-title {
          border-left-width: 2px;
        }

        .blog-text {
          font-size: 1.15rem;
          color: #9ca3af;
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 400;
          white-space: pre-wrap;
          line-height: 1.9;
          letter-spacing: 0.005em;
        }

        .eof {
          text-align: center;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: #333;
          margin-top: 5vh;
          margin-bottom: 10vh;
          text-transform: uppercase;
          position: relative;
        }

        .eof::before,
        .eof::after {
          content: '';
          display: block;
          width: 1px;
          height: 3rem;
          background: #222;
          margin: 1.5rem auto;
        }

        .nav-back-container {
          width: 100%;
          max-width: 660px;
          margin-bottom: 6vh;
          display: flex;
          justify-content: flex-start;
        }

        .nav-back-btn {
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          color: #444;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.4s ease;
        }

        .nav-back-btn:hover {
          color: #5a7d9a;
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 2px;
        }

        @media (max-width: 640px) {
          .blog-wrapper {
            padding: 10vh 6vw;
          }
          .blog-article {
            margin-bottom: 30vh;
          }
          .blog-title {
            font-size: 1.2rem;
          }
          .blog-text {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="nav-back-container">
        <a href="/" onClick={handleGoBack} className="nav-back-btn">
          ← Volver al sitio
        </a>
      </div>

      <main className="blog-main">
        {poemas.map((poema, i) => (
          <motion.article
            key={poema.id}
            className="blog-article"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
          >
            <div
              className="poem-bar"
              style={{ background: poema.color.accent, opacity: 0.4 }}
            />
            <motion.h1
              className="blog-title"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.05 }}
              style={{
                borderLeftColor: poema.color.accent,
                background: poema.color.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {poema.titulo}
            </motion.h1>
            <motion.div
              className="blog-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
            >
              {poema.contenido}
            </motion.div>
          </motion.article>
        ))}

        <motion.div
          className="eof"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fin del expediente
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPersonal;
