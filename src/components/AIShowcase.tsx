import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron } from '@react-three/drei';
import { ArrowRight, MessageSquare, BarChart3, Languages } from 'lucide-react';
import Reveal from './Reveal';
import * as THREE from 'three';

function FloatingShape1() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.3;
    ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
  });
  return (
    <Icosahedron ref={ref} args={[1.4, 0]}>
      <meshPhysicalMaterial
        color="#34d399"
        emissive="#10b981"
        emissiveIntensity={0.3}
        wireframe
        metalness={0.9}
        roughness={0.1}
        transparent
        opacity={0.4}
      />
    </Icosahedron>
  );
}

function FloatingShape2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.getElapsedTime() * 0.4;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.3;
    ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.4 + 1) * 0.2;
  });
  return (
    <Octahedron ref={ref} args={[1.0, 0]}>
      <meshPhysicalMaterial
        color="#0d9488"
        emissive="#14b8a6"
        emissiveIntensity={0.4}
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.3}
      />
    </Octahedron>
  );
}

function Scene3D({ variant }: { variant: 'top' | 'bottom' }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={0.6} color="#34d399" />
      <pointLight position={[-2, -2, 4]} intensity={0.3} color="#0d9488" />
      {variant === 'top' ? <FloatingShape1 /> : <FloatingShape2 />}
    </>
  );
}

const canvasClass = "w-full h-full pointer-events-none";

const cards = [
  {
    icon: MessageSquare,
    title: 'Automatización con IA',
    desc: 'Modelos de lenguaje que clasifican, resumen y responden información operativa sin intervención humana.',
    color: 'from-emerald-400 to-teal-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.03]',
  },
  {
    icon: BarChart3,
    title: 'Procesamiento de datos',
    desc: 'Pipelines que limpian y estructuran datos en bruto para alimentar dashboards y sistemas de decisión.',
    color: 'from-teal-400 to-cyan-400',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/[0.03]',
  },
  {
    icon: Languages,
    title: 'Integración de modelos',
    desc: 'Conecto APIs de IA (OpenAI, Claude) con sistemas existentes para darles inteligencia en producción.',
    color: 'from-emerald-400 to-teal-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.03]',
  },
];

const AIShowcase = () => {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: '-120px' });
  const clickTimestamps = useRef<number[]>([]);

  const handleSecretClick = () => {
    const now = Date.now();
    clickTimestamps.current.push(now);
    if (clickTimestamps.current.length > 5) {
      clickTimestamps.current.shift();
    }
    if (clickTimestamps.current.length === 5) {
      const firstClick = clickTimestamps.current[0];
      if (now - firstClick <= 3000) {
        window.history.pushState({}, '', '/blog-personal');
        window.dispatchEvent(new Event('popstate'));
      }
    }
  };

  return (
    <section id="ai-showcase" className="relative z-10 py-32 border-t border-zinc-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* VERTICAL BLOCK 1: Intro */}
        <div ref={topRef} className="relative mb-40">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* 3D Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={topInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-48 h-48 lg:w-60 lg:h-60 shrink-0 relative"
            >
              <Suspense fallback={null}>
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]} className={canvasClass}>
                  <Scene3D variant="top" />
                </Canvas>
              </Suspense>
            </motion.div>

            {/* Text */}
            <Reveal className="text-center lg:text-left" y={30} stagger={120} selector="[data-reveal]">
              <span
                data-reveal
                className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-6"
              >
                IA Aplicada
              </span>
              <h2
                data-reveal
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.05] max-w-3xl"
              >
                IA aplicada a operaciones,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                  no a experimentos
                </span>.
              </h2>
              <p
                data-reveal
                className="max-w-xl text-zinc-400 text-sm md:text-base mt-6 leading-relaxed font-light mx-auto lg:mx-0"
              >
                No vendo promesas de inteligencia artificial. Construyo aplicaciones concretas donde la IA resuelve un problema real de negocio.
              </p>
            </Reveal>
          </div>
        </div>

        {/* HORIZONTAL BLOCK 2: Floating Cards */}
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40" y={40} stagger={150} selector="[data-reveal]">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                data-reveal
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative rounded-3xl border ${card.border} ${card.bg} backdrop-blur-xl bg-zinc-900/30 p-8 sm:p-10 hover:bg-zinc-900/50 transition-all duration-500`}
                style={{
                  marginTop: i === 1 ? '2.5rem' : i === 2 ? '-1rem' : '0',
                }}
              >
                <div className={`absolute -inset-px bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-[0.04] blur-xl rounded-3xl transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-500">
                    <Icon size={26} className="text-emerald-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-base text-zinc-500 leading-relaxed">{card.desc}</p>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute -top-8 -right-8 w-14 h-14 rotate-45 bg-gradient-to-br ${card.color} opacity-10 rounded-lg`} />
                </div>
              </motion.div>
            );
          })}
        </Reveal>

        {/* VERTICAL BLOCK 3: Outro CTA */}
        <Reveal className="relative flex flex-col items-center text-center" y={30} stagger={120} selector="[data-reveal]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-32 mb-10 relative cursor-pointer select-none"
            onClick={handleSecretClick}
          >
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.5]} className={canvasClass}>
                <Scene3D variant="bottom" />
              </Canvas>
            </Suspense>
          </motion.div>

          <h3
            data-reveal
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-50 tracking-tight mb-6 max-w-2xl leading-tight"
          >
            ¿Tienes un proceso
            que se puede mejorar?
          </h3>

          <p
            data-reveal
            className="max-w-xl text-zinc-400 text-sm md:text-base mb-10 leading-relaxed font-light mx-auto"
          >
            No hace falta un equipo de tecnología ni un presupuesto enorme: solo identificar el problema correcto.
          </p>

          <motion.a
            data-reveal
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-50 text-zinc-950 font-bold text-base hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-emerald-500/5"
          >
            Cuéntame tu caso
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </Reveal>

      </div>
    </section>
  );
};

export default AIShowcase;
