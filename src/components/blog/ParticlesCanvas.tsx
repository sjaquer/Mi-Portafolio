import { useEffect, useRef } from 'react';

interface ParticlesCanvasProps {
  activeColor: string;
}

const parseRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
}

const ParticlesCanvas = ({ activeColor }: ParticlesCanvasProps) => {
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
      canvas.width = w;
      canvas.height = h;
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

    const accentRgb = parseRgb(activeColor);

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
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

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + nearMouse * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${baseAlpha})`;
        ctx.fill();
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
};

export default ParticlesCanvas;
