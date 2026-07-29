import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron, Tetrahedron } from '@react-three/drei';
import * as THREE from 'three';

const mouse3d = { x: 0, y: 0 };

function SkillGeometry() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!outerRef.current || !innerRef.current) return;

    const t = clock.getElapsedTime();

    // Continuous rotation
    outerRef.current.rotation.x += 0.004;
    outerRef.current.rotation.y += 0.006;
    innerRef.current.rotation.x -= 0.002;
    innerRef.current.rotation.y += 0.008;

    // Scale breathing on inner
    const breathe = 1 + Math.sin(t * 0.6) * 0.06;
    innerRef.current.scale.setScalar(breathe);

    // Mouse-reactive lean
    const tx = mouse3d.y * 0.5;
    const ty = mouse3d.x * 0.5;
    outerRef.current.rotation.x += (tx - outerRef.current.rotation.x) * 0.04;
    outerRef.current.rotation.y += (ty - outerRef.current.rotation.y) * 0.04;
    innerRef.current.rotation.x += (tx - innerRef.current.rotation.x) * 0.05;
    innerRef.current.rotation.y += (ty - innerRef.current.rotation.y) * 0.05;

    // Emissive pulse
    const pulse = 0.3 + Math.sin(t * 0.8) * 0.15;
    (outerRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = pulse;
  });

  return (
    <>
      <Dodecahedron ref={outerRef} args={[2.0, 1]}>
        <meshPhysicalMaterial
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.3}
          wireframe
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.35}
        />
      </Dodecahedron>
      <Tetrahedron ref={innerRef} args={[1.1]}>
        <meshPhysicalMaterial
          color="#0d9488"
          emissive="#14b8a6"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.15}
          transparent
          opacity={0.25}
        />
      </Tetrahedron>
    </>
  );
}

function SkillMouseTracker() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse3d.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse3d.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse3d.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse3d.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);
  return null;
}

function SkillScene() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#34d399" />
      <pointLight position={[-4, -3, 5]} intensity={0.3} color="#0d9488" />
      <pointLight position={[3, -5, 4]} intensity={0.2} color="#14b8a6" />
      <SkillMouseTracker />
      <SkillGeometry />
    </>
  );
}

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Backend & Datos',
    skills: ['Node.js', 'Python', 'SQL Server', 'Firebase', 'REST APIs'],
    color: 'from-teal-400 to-cyan-400',
  },
  {
    title: 'IA & Analytics',
    skills: ['Prompt Engineering', 'Gemini & OpenAI API', 'Análisis Predictivo', 'Power BI', 'Google Analytics'],
    color: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Automatización',
    skills: ['ETL', 'Excel Avanzado', 'Google Sheets API', 'SEO Técnico', 'Integración de APIs'],
    color: 'from-teal-400 to-emerald-400',
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen 3D background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 5.5], fov: 50 }}
            gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
            dpr={[1, 1.5]}
            style={{ width: '100%', height: '100%' }}
          >
            <SkillScene />
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay gradients */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-50 tracking-tight leading-[1.05] max-w-3xl mx-auto">
            Lo que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              construyo
            </span>.
          </h2>
          <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl mx-auto font-light leading-relaxed">
            No servicios genéricos. Soluciones para problemas concretos.
          </p>
        </motion.div>

        {/* Vertical skill groups */}
        <div className="space-y-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-zinc-900/30 backdrop-blur-2xl border border-zinc-800/40 hover:border-emerald-500/20 transition-all duration-500">
                <span className={`text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${group.color} shrink-0 sm:min-w-[9rem]`}>
                  {group.title}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-zinc-950/70 border border-zinc-800 text-zinc-400 hover:border-emerald-500/30 hover:text-zinc-100 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
            Full-Stack · AI · Data
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
