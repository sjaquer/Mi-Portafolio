import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { poemas } from '../data/poemas';
import SEO from './SEO';

const PREGUNTA_SECRETA = "¿Cuál es mi color favorito?";
const RESPUESTA_CORRECTA = "azul";
const AUTH_KEY = "sjaquer_blog_auth_state";

function ParticlesCanvas({ activeColor }: { activeColor: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w;
      canvas!.height = h;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('touchmove', handleTouch);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; phase: number;
    }

    const count = Math.min(35, Math.floor((w * h) / 40000));
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -0.08 - Math.random() * 0.12,
      size: 0.8 + Math.random() * 1.2,
      alpha: 0.1 + Math.random() * 0.25,
      phase: Math.random() * Math.PI * 2,
    }));

    const parseRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
    const accentRgb = parseRgb(activeColor);

    const loop = () => {
      ctx!.clearRect(0, 0, w, h);
      const time = Date.now() * 0.001;

      for (const p of particles) {
        p.x += p.vx + Math.sin(time * 0.3 + p.phase) * 0.08;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let nearMouse = 0;
        if (dist < 120 && dist > 0) {
          nearMouse = (1 - dist / 120) * 0.4;
          p.x -= (dx / dist) * 0.3;
          p.y -= (dy / dist) * 0.3;
        }

        const baseAlpha = Math.min(p.alpha + nearMouse * 1.5, 0.6);
        const tint = nearMouse > 0 ? nearMouse : 0;
        const r = Math.round(255 + (accentRgb.r - 255) * tint);
        const g = Math.round(255 + (accentRgb.g - 255) * tint);
        const b = Math.round(255 + (accentRgb.b - 255) * tint);

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size + nearMouse * 0.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${baseAlpha})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [activeColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  );
}

const lineVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.025 },
  }),
};

const BlogPersonal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [visibility, setVisibility] = useState<number[]>([]);

  const poemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mainRef = useRef<HTMLElement>(null);

  const activeColor = poemas[activeIndex]?.color.accent ?? '#5a7d9a';

  useEffect(() => {
    const isAuth = localStorage.getItem(AUTH_KEY);
    if (isAuth === 'true') setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      poemRefs.current = poemas.map(() => null);
      setVisibility(poemas.map(() => 0));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const ratios = new Map<number, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number(entry.target.getAttribute('data-index'));
          ratios.set(idx, entry.intersectionRatio);
        }
        let maxRatio = 0;
        let maxIdx = 0;
        const newVis: number[] = [];
        for (let i = 0; i < poemas.length; i++) {
          const r = ratios.get(i) ?? 0;
          newVis[i] = r;
          if (r > maxRatio) {
            maxRatio = r;
            maxIdx = i;
          }
        }
        setVisibility(newVis);
        setActiveIndex(maxIdx);
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // Mayor sensibilidad en la zona central de la pantalla
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    // Esperar a que React renderice los elementos del DOM y observarlos directamente
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.blog-article');
      elements.forEach((el) => obs.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, [isAuthenticated]);

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

  const scrollToPoem = useCallback((i: number) => {
    poemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="security-wrapper">
        <SEO noindex={true} title="Archivo - Verificación" />
        <style>{`
          .security-wrapper {
            background: #000000; color: #7b8291;
            font-family: 'Inter', sans-serif; font-weight: 300;
            min-height: 100vh; display: flex; align-items: center;
            justify-content: center; padding: 2rem;
          }
          .security-card { max-width: 400px; width: 100%; text-align: center; }
          .security-accent { width: 2rem; height: 1px; background: #5a7d9a; margin: 0 auto 2rem; opacity: 0.5; }
          .security-title { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 2.5rem; font-weight: 400; color: #5a7d9a; line-height: 1.6; }
          .security-form { display: flex; flex-direction: column; gap: 1.5rem; align-items: center; }
          .security-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid #333; color: #9299a8; font-family: 'Inter', sans-serif; font-weight: 300; font-size: 1rem; padding: 0.6rem 0; text-align: center; outline: none; transition: border-color 0.4s ease; }
          .security-input:focus { border-bottom-color: #5a7d9a; }
          .security-input::placeholder { color: #333; font-size: 0.85rem; }
          .security-btn { background: transparent; border: 1px solid #333; color: #7b8291; font-family: 'Inter', sans-serif; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; padding: 0.75rem 2.5rem; cursor: pointer; transition: all 0.4s ease; margin-top: 0.5rem; }
          .security-btn:hover { border-color: #5a7d9a; color: #9299a8; }
          .error-text { color: #8b1e1e; font-size: 0.75rem; letter-spacing: 0.08em; margin-top: 0.25rem; }
          .back-link { display: inline-block; margin-top: 3.5rem; font-size: 0.65rem; color: #333; text-decoration: none; text-transform: uppercase; letter-spacing: 0.25em; transition: color 0.4s ease; }
          .back-link:hover { color: #5a7d9a; }
          @keyframes shake { 0%,100% { transform: translateX(0); } 20%,60% { transform: translateX(-6px); } 40%,80% { transform: translateX(6px); } }
          .shake { animation: shake 0.4s ease-in-out; border-bottom-color: #8b1e1e !important; }
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
            <input id="security-input" type="text" className="security-input" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Escribe tu respuesta..." autoFocus autoComplete="off" />
            {error && (
              <motion.span className="error-text" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                Respuesta incorrecta. Acceso denegado.
              </motion.span>
            )}
            <button type="submit" className="security-btn">Verificar</button>
          </form>
          <a href="/" onClick={handleGoBack} className="back-link">← Volver al sitio principal</a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="blog-wrapper">
      <SEO noindex={true} title="Archivo" />
      <ParticlesCanvas activeColor={activeColor} />

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
          position: relative;
        }

        .blog-main {
          max-width: 660px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .blog-article {
          position: relative;
          margin-bottom: 40vh;
          padding: 2rem 0;
          opacity: 0.25; /* Apagado por defecto para destacar el activo */
          transform: translateY(15px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blog-article.active {
          opacity: 1; /* Se ilumina al estar activo */
          transform: translateY(0);
        }

        .blog-article:hover {
          opacity: 1; /* Iluminado al pasar el ratón */
        }

        .blog-article:last-of-type {
          margin-bottom: 15vh;
        }

        .blog-article::before {
          content: '';
          position: absolute;
          top: 0; left: -3rem; right: -3rem; bottom: 0;
          background: radial-gradient(ellipse at 50% 50%, var(--spotlight-glow), transparent 70%);
          opacity: 0;
          transition: opacity 0.8s ease;
          pointer-events: none;
          z-index: -1;
          border-radius: 1px;
        }

        .blog-article.active::before {
          opacity: 1;
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
          letter-spacing: 0.02em;
          margin-bottom: 2.5rem;
          border-left: 1px solid;
          padding-left: 1.5rem;
          line-height: 1.4;
          transition: border-left-width 0.4s ease, font-weight 0.6s ease;
        }

        .blog-article:hover .blog-title {
          border-left-width: 2px;
        }

        .blog-text {
          font-size: 1.15rem;
          color: #9ca3af;
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 400;
          line-height: 2;
          letter-spacing: 0.005em;
        }

        .poem-line {
          display: inline;
        }

        .poem-line.empty {
          display: block;
          height: 1.2rem;
        }

        .poem-separator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 40vh;
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        .poem-separator:hover {
          opacity: 0.6;
        }

        .poem-sep-line {
          flex: 1;
          height: 1px;
          background: #222;
          transition: background 0.5s ease;
        }

        .poem-sep-symbol {
          font-size: 0.45rem;
          color: #333;
          transition: color 0.5s ease;
          flex-shrink: 0;
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

        .eof::before, .eof::after {
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
          z-index: 2;
          position: relative;
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

        .progress-counter {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: #444;
          font-family: 'Inter', sans-serif;
          z-index: 10;
          user-select: none;
        }

        .progress-counter span {
          color: #5a7d9a;
          transition: color 0.5s ease;
        }

        .poem-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          z-index: 100;
          transition: width 0.4s ease, background-color 0.5s ease;
        }

        .poem-index {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          height: 60vh; /* Altura de la ventana de scroll del índice */
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 10;
          overflow: hidden; /* Oculta desbordes de 56 poemas */
          pointer-events: none;
        }

        .poem-index-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.9rem;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }

        .poem-index-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.2rem 0;
          opacity: 0.4;
          transition: opacity 0.4s ease;
        }

        .poem-index-btn:hover,
        .poem-index-btn.active {
          opacity: 1;
        }

        .index-line {
          width: 1px;
          height: 10px;
          background: #222;
          transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.6s ease;
          flex-shrink: 0;
        }

        .poem-index-btn.active .index-line {
          height: 26px;
        }

        .index-label {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: #555;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(10px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.5s ease;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          font-weight: 300;
        }

        .poem-index-btn:hover .index-label,
        .poem-index-btn.active .index-label {
          opacity: 0.8;
          transform: translateX(0);
        }

        .poem-index-btn.active .index-label {
          opacity: 1;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

        @media (max-width: 900px) {
          .index-label {
            display: none;
          }
          .poem-index {
            right: 0.5rem;
            height: 50vh; /* Ajuste para pantallas más bajas */
          }
          .poem-index-inner {
            gap: 0.6rem;
          }
          .poem-index-btn {
            gap: 0;
            padding: 0.4rem 0.3rem; /* Área de tap extra generosa para celulares */
          }
          .index-line {
            width: 2px;
            height: 8px;
          }
          .poem-index-btn.active .index-line {
            height: 18px;
          }
        }

        @media (max-width: 640px) {
          .blog-wrapper { padding: 8vh 6vw; }
          .blog-main { max-width: 100%; }
          .blog-article { margin-bottom: 25vh; }
          .blog-title { font-size: 1.25rem; margin-bottom: 1.5rem; }
          .blog-text { font-size: 1rem; line-height: 1.8; }
          .blog-article::before { left: -1rem; right: -1rem; }
          .progress-counter { right: 1.2rem; bottom: 1.2rem; opacity: 0.4; }
        }
      `}</style>

      <div className="nav-back-container">
        <a href="/" onClick={handleGoBack} className="nav-back-btn">← Volver al sitio</a>
      </div>

      {/* Barra de progreso de lectura horizontal fija arriba */}
      <div
        className="poem-progress-bar"
        style={{
          width: `${((activeIndex + 1) / poemas.length) * 100}%`,
          backgroundColor: activeColor
        }}
      />

      {/* Index sidebar deslizante dinámicamente para centrar el poema activo */}
      <nav className="poem-index">
        <div
          className="poem-index-inner"
          style={{
            // El scroll dinámico centra verticalmente la línea del poema activo
            transform: `translateY(calc(30vh - ${activeIndex * (window.innerWidth <= 900 ? 22 : 28)}px))`
          }}
        >
          {poemas.map((p, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={p.id}
                className={`poem-index-btn${isActive ? ' active' : ''}`}
                onClick={() => scrollToPoem(i)}
              >
                <span
                  className="index-label"
                  style={{ color: isActive ? p.color.accent : undefined }}
                >
                  {p.titulo}
                </span>
                <span
                  className={`index-line${isActive ? ' active' : ''}`}
                  style={{
                    background: isActive ? p.color.accent : undefined,
                  }}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Progress counter */}
      <motion.div
        className="progress-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span style={{ color: activeColor }}>{activeIndex + 1}</span>
        {' / '}{poemas.length}
      </motion.div>

      <main className="blog-main" ref={mainRef}>
        {poemas.map((poema, i) => {
          const lines = poema.contenido.split('\n');
          const isActive = activeIndex === i;
          const weight = Math.round(300 + visibility[i] * 200);

          return (
            <React.Fragment key={poema.id}>
              <div
                ref={(el) => { poemRefs.current[i] = el; }}
                data-index={i}
                className={`blog-article${isActive ? ' active' : ''}`}
                style={{
                  '--spotlight-glow': poema.color.glow,
                } as React.CSSProperties}
              >
                <div className="poem-bar" style={{ background: poema.color.accent, opacity: 0.4 }} />

                <motion.h1
                  className="blog-title"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                  style={{
                    borderLeftColor: poema.color.accent,
                    background: poema.color.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: weight,
                  }}
                >
                  {poema.titulo}
                </motion.h1>

                <div className="blog-text">
                  {lines.map((line, li) => (
                    <motion.span
                      key={li}
                      custom={li}
                      variants={lineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-50px' }}
                      className={`poem-line${line.trim() === '' ? ' empty' : ''}`}
                    >
                      {line || '\u00A0'}
                      {li < lines.length - 1 && <br />}
                    </motion.span>
                  ))}
                </div>
              </div>

              {i < poemas.length - 1 && (
                <motion.div
                  className="poem-separator"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="poem-sep-line" style={{ background: poema.color.border }} />
                  <span className="poem-sep-symbol" style={{ color: poema.color.accent }}>◇</span>
                  <span className="poem-sep-line" style={{ background: poema.color.border }} />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}

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
