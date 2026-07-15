import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const mouse = { x: 0, y: 0 };

function TorusKnotMesh() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!outerRef.current || !innerRef.current) return;

    outerRef.current.rotation.x += 0.003;
    outerRef.current.rotation.y += 0.008;

    innerRef.current.rotation.x -= 0.004;
    innerRef.current.rotation.y += 0.01;

    const targetRotX = mouse.y * 0.6;
    const targetRotY = mouse.x * 0.6;

    outerRef.current.rotation.x += (targetRotX - outerRef.current.rotation.x) * 0.04;
    outerRef.current.rotation.y += (targetRotY - outerRef.current.rotation.y) * 0.04;

    innerRef.current.rotation.x += (targetRotX - innerRef.current.rotation.x) * 0.05;
    innerRef.current.rotation.y += (targetRotY - innerRef.current.rotation.y) * 0.05;
  });

  return (
    <>
      <TorusKnot ref={outerRef} args={[1.5, 0.4, 160, 20]}>
        <meshPhysicalMaterial
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.5}
          wireframe
          metalness={0.95}
          roughness={0.06}
          transparent
          opacity={0.85}
        />
      </TorusKnot>
      <TorusKnot ref={innerRef} args={[0.7, 0.18, 96, 12]}>
        <meshPhysicalMaterial
          color="#0d9488"
          emissive="#14b8a6"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.15}
          transparent
          opacity={0.5}
        />
      </TorusKnot>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#34d399" />
      <pointLight position={[-3, -3, 5]} intensity={0.4} color="#0d9488" />
      <pointLight position={[0, -5, 3]} intensity={0.3} color="#14b8a6" />
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
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
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
        camera={{ position: [0, 0, 3.8], fov: 55 }}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        dpr={[1, 1.5]}
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
