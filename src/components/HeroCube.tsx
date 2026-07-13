import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const mouse = { x: 0, y: 0 };

function TorusKnotMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.006;
    const dx = mouse.y * 0.3 - meshRef.current.rotation.x;
    const dy = mouse.x * 0.3 - meshRef.current.rotation.y;
    meshRef.current.rotation.x += dx * 0.012;
    meshRef.current.rotation.y += dy * 0.012;
  });

  return (
    <TorusKnot ref={meshRef} args={[0.9, 0.28, 128, 16]}>
      <meshPhysicalMaterial
        color="#34d399"
        emissive="#10b981"
        emissiveIntensity={0.08}
        wireframe
        metalness={0.9}
        roughness={0.15}
        transparent
        opacity={0.55}
      />
    </TorusKnot>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#34d399" />
      <pointLight position={[-3, -3, 5]} intensity={0.3} color="#0d9488" />
      <TorusKnotMesh />
    </>
  );
}

function MouseTracker() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);
  return null;
}

const HeroCube = () => {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const test = document.createElement('canvas');
      const gl: WebGLRenderingContext | null =
        (test.getContext('webgl') as WebGLRenderingContext | null) ||
        (test.getContext('experimental-webgl') as WebGLRenderingContext | null);
      if (!gl) setSupported(false);
    } catch {
      setSupported(false);
    }
  }, []);

  if (!supported) return null;

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <MouseTracker />
        <Scene />
      </Canvas>
    </Suspense>
  );
};

export default HeroCube;
