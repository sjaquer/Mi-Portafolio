import { Suspense, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron } from '@react-three/drei';
import { ArrowRight, MessageSquare, BarChart3, Languages } from 'lucide-react';
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
    title: 'Chats Cognitivos',
    desc: 'Agentes con memoria contextual que entienden, recuerdan y actúan.',
    color: 'from-emerald-400 to-teal-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.03]',
  },
  {
    icon: BarChart3,
    title: 'Análisis Predictivo',
    desc: 'Modelos que anticipan demandas y optimizan inventarios en tiempo real.',
    color: 'from-teal-400 to-cyan-400',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/[0.03]',
  },
  {
    icon: Languages,
    title: 'Síntesis NLP',
    desc: 'Traducción y resumen automático de documentos con máxima fidelidad.',
    color: 'from-emerald-400 to-teal-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.03]',
  },
];

const AIShowcase = () => {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: '-120px' });

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
                <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ alpha: true, antialias: true }} className={canvasClass}>
                  <Scene3D variant="top" />
                </Canvas>
              </Suspense>
            </motion.div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={topInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-6"
              >
                Cognitive Engineering
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={topInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.05] max-w-3xl"
              >
                IA que{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                  transforma
                </span>{' '}
                datos en decisiones.
              </motion.h2>
            </div>
          </div>
        </div>

        {/* HORIZONTAL BLOCK 2: Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
        </div>

        {/* VERTICAL BLOCK 3: Outro CTA */}
        <div className="relative flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-32 mb-10 relative"
          >
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} gl={{ alpha: true, antialias: true }} className={canvasClass}>
                <Scene3D variant="bottom" />
              </Canvas>
            </Suspense>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm text-zinc-500 font-mono mb-6 tracking-wider uppercase"
          >
            Próximo proyecto
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-50 tracking-tight mb-10 max-w-2xl leading-tight"
          >
            Llevemos tu flujo de trabajo al{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">siguiente nivel</span>.
          </motion.h3>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-50 text-zinc-950 font-bold text-base hover:bg-zinc-200 transition-all active:scale-95 shadow-xl shadow-emerald-500/5"
          >
            Integrar IA ahora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default AIShowcase;
