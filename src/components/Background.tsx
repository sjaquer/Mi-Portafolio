import React, { useEffect } from 'react';

const Background: React.FC = () => {
  // Opcional: ligera interacción parallax con el mouse (desactivada si prefiere reduced motion)
  useEffect(() => {
    const root = document.documentElement;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      root.style.setProperty('--bg-shift-x', `${x}px`);
      root.style.setProperty('--bg-shift-y', `${y}px`);
    };
    window.addEventListener('pointermove', handle);
    return () => window.removeEventListener('pointermove', handle);
  }, []);

  return (
    <div aria-hidden className="site-bg">
      {/* Capas estructuradas */}
      <span className="bg-layer base" />
      <span className="bg-layer glow-blue" />
      <span className="bg-layer glow-gold" />
      <span className="bg-layer texture" />
      <span className="bg-layer mesh" />
      <span className="bg-layer orbs" />
      <span className="bg-layer noise" />
      <span className="bg-layer particles">
        {Array.from({ length: 42 }).map((_, i) => (
          <i key={i} style={{
            '--x': `${Math.random()*100}%`,
            '--y': `${Math.random()*100}%`,
            '--d': `${12 + Math.random()*28}s`,
            '--s': `${0.4 + Math.random()*0.9}`,
            '--del': `${-Math.random()*20}s`
          } as React.CSSProperties} />
        ))}
      </span>
    </div>
  );
};

export default Background;