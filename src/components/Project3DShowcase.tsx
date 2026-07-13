import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// --- 1. BIG JACK (Burger Stack) ---
function BurgerStack3D() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow continuous rotation
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
  });

  // Calculate layer heights based on hover state (exploded view on hover)
  const spread = hovered ? 0.45 : 0.0;

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      position={[0, -0.2, 0]}
    >
      {/* Top Bun */}
      <mesh position={[0, 0.7 + spread * 2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.35, 32]} />
        <meshPhysicalMaterial 
          color="#d97706" 
          roughness={0.4} 
          metalness={0.1}
          emissive="#78350f"
          emissiveIntensity={0.25}
        />
      </mesh>
      
      {/* Lettuce */}
      <mesh position={[0, 0.45 + spread * 1.2, 0]} rotation={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.75, 0.72, 0.08, 16]} />
        <meshStandardMaterial 
          color="#10b981" 
          roughness={0.6}
          emissive="#064e3b"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Cheese 1 */}
      <mesh position={[0, 0.3 + spread * 0.5, 0]} rotation={[0, 0.5, 0]}>
        <boxGeometry args={[0.95, 0.04, 0.95]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          roughness={0.3}
          emissive="#b45309"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Meat Patty */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.72, 0.72, 0.24, 32]} />
        <meshStandardMaterial 
          color="#451a03" 
          roughness={0.8}
          emissive="#1c1917"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Cheese 2 */}
      <mesh position={[0, -0.15 - spread * 0.5, 0]} rotation={[0, -0.2, 0]}>
        <boxGeometry args={[0.95, 0.04, 0.95]} />
        <meshStandardMaterial 
          color="#f59e0b" 
          roughness={0.3}
          emissive="#b45309"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Bottom Bun */}
      <mesh position={[0, -0.4 - spread * 1.5, 0]}>
        <cylinderGeometry args={[0.68, 0.7, 0.24, 32]} />
        <meshPhysicalMaterial 
          color="#d97706" 
          roughness={0.5} 
          metalness={0.1}
          emissive="#78350f"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// --- 2. TASKME (AI Focus Cube) ---
function AIProductivityCube3D() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const particleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.25;
    groupRef.current.rotation.x = Math.sin(time * 0.15) * 0.15;

    // Animate outer nodes
    particleRefs.current.forEach((particle, idx) => {
      if (!particle) return;
      const angle = (idx / 8) * Math.PI * 2 + time * (hovered ? 0.8 : 0.35);
      const radius = hovered ? 0.95 : 1.45 + Math.sin(time * 2 + idx) * 0.12;
      
      // On hover, particles align in a neat horizontal circle
      const targetY = hovered ? 0 : Math.sin(time + idx) * 0.6;
      
      particle.position.x += (Math.cos(angle) * radius - particle.position.x) * 0.1;
      particle.position.y += (targetY - particle.position.y) * 0.1;
      particle.position.z += (Math.sin(angle) * radius - particle.position.z) * 0.1;
      
      // Slight rotation of the particles
      particle.rotation.y += 0.02;
    });
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central Core representing Brain/AI */}
      <mesh>
        <octahedronGeometry args={[0.65, 0]} />
        <meshPhysicalMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.8}
          wireframe={!hovered}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
      
      <mesh>
        <octahedronGeometry args={[0.35, 0]} />
        <meshPhysicalMaterial
          color="#34d399"
          emissive="#34d399"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting particles representing scattered task segments */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={i} 
          ref={(el) => {
            if (el) particleRefs.current[i] = el;
          }}
        >
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial 
            color={hovered ? "#34d399" : "#a7f3d0"} 
            emissive={hovered ? "#10b981" : "#047857"}
            emissiveIntensity={0.6}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
}

// --- 3. ORDEV (CP-SAT Flight Planner) ---
function FlightPlanner3D() {
  const groupRef = useRef<THREE.Group>(null);
  const planeRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  // Define 3 key coordinates for Callao, Chorrillos, La Molina
  const p0 = new THREE.Vector3(-1.2, -0.4, 0.6);
  const p1 = new THREE.Vector3(0.0, 0.8, -0.8);
  const p2 = new THREE.Vector3(1.2, -0.2, 0.4);

  // Generate curve path
  const curve = new THREE.CatmullRomCurve3([p0, p1, p2]);
  const points = curve.getPoints(50);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
    
    // Animate plane traveling along the curve
    if (planeRef.current) {
      timeRef.current = (state.clock.getElapsedTime() * 0.18) % 1.0;
      const pos = curve.getPointAt(timeRef.current);
      const tangent = curve.getTangentAt(timeRef.current).normalize();
      
      planeRef.current.position.copy(pos);
      
      // Orient airplane towards path tangent
      const target = pos.clone().add(tangent);
      planeRef.current.lookAt(target);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Semi-transparent Grid Floor */}
      <gridHelper args={[3.5, 12, "#334155", "#1e293b"]} position={[0, -0.6, 0]} />

      {/* Nodes */}
      <mesh position={p0}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={p1}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={p2}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#f97316" emissive="#ea580c" emissiveIntensity={0.8} />
      </mesh>

      {/* Flight Path Arc */}
      <line geometry={lineGeometry}>
        <lineBasicMaterial color="#f97316" linewidth={1.5} transparent opacity={0.65} />
      </line>

      {/* Traveling airplane/drone model */}
      <mesh ref={planeRef}>
        <coneGeometry args={[0.075, 0.25, 4]} rotation={[Math.PI / 2, 0, 0]} />
        <meshPhysicalMaterial 
          color="#fdba74" 
          emissive="#f97316" 
          emissiveIntensity={1.0}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// --- 4. TASKZENITH (Modular Grid Grid) ---
function DashboardGrid3D() {
  const groupRef = useRef<THREE.Group>(null);
  const panel1 = useRef<THREE.Mesh>(null);
  const panel2 = useRef<THREE.Mesh>(null);
  const panel3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(time * 0.15) * 0.25;
    groupRef.current.rotation.x = Math.PI / 6; // Isometric tilt

    // Make individual dashboard modules float slightly
    if (panel1.current) panel1.current.position.y = 0.2 + Math.sin(time * 1.5) * 0.05;
    if (panel2.current) panel2.current.position.y = -0.1 + Math.cos(time * 1.2) * 0.04;
    if (panel3.current) panel3.current.position.y = 0.05 + Math.sin(time * 1.8 + 1) * 0.06;
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Base Grid Plate */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshBasicMaterial color="#1e1b4b" transparent opacity={0.12} wireframe />
      </mesh>

      {/* Panel Module 1 (Tall Left) */}
      <mesh ref={panel1} position={[-0.55, 0.2, 0.15]}>
        <boxGeometry args={[0.45, 0.8, 0.08]} />
        <meshPhysicalMaterial 
          color="#3b82f6" 
          emissive="#1d4ed8" 
          emissiveIntensity={0.5} 
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Panel Module 2 (Wide Center-Right) */}
      <mesh ref={panel2} position={[0.4, -0.1, -0.2]}>
        <boxGeometry args={[0.9, 0.4, 0.08]} />
        <meshPhysicalMaterial 
          color="#60a5fa" 
          emissive="#2563eb" 
          emissiveIntensity={0.4} 
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Panel Module 3 (Small Bottom Right) */}
      <mesh ref={panel3} position={[0.4, 0.05, 0.45]}>
        <boxGeometry args={[0.9, 0.25, 0.08]} />
        <meshPhysicalMaterial 
          color="#2563eb" 
          emissive="#1e40af" 
          emissiveIntensity={0.6} 
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

// --- 5. BIG JACK BOT (WhatsApp Dual-IA) ---
function DualAIBot3D() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const bubbleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.15;

    // Spin double ring paths representing Ollama & Gemini interaction
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.5;
      ring1Ref.current.rotation.y = time * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.45;
      ring2Ref.current.rotation.z = time * 0.6;
    }

    // Floating text-bubbles
    bubbleRefs.current.forEach((bubble, idx) => {
      if (!bubble) return;
      const offset = idx * 2.0;
      bubble.position.y = Math.sin(time * 1.5 + offset) * 0.18;
      bubble.rotation.y = Math.cos(time * 0.5 + offset) * 0.15;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central Core AI Node */}
      <mesh>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshPhysicalMaterial
          color="#22c55e"
          emissive="#16a34a"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      {/* Ring Path 1: Ollama Local */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.9, 0.02, 8, 48]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.6} />
      </mesh>

      {/* Ring Path 2: Gemini Cloud */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.05, 0.015, 8, 48]} />
        <meshBasicMaterial color="#22c55e" transparent opacity={0.4} />
      </mesh>

      {/* Floating Messenger Bubbles */}
      <mesh 
        position={[-1.1, 0, 0.4]} 
        ref={(el) => {
          if (el) bubbleRefs.current[0] = el;
        }}
      >
        <boxGeometry args={[0.3, 0.16, 0.04]} />
        <meshStandardMaterial color="#86efac" emissive="#16a34a" emissiveIntensity={0.4} />
      </mesh>
      
      <mesh 
        position={[1.1, 0.1, -0.4]} 
        ref={(el) => {
          if (el) bubbleRefs.current[1] = el;
        }}
      >
        <boxGeometry args={[0.34, 0.16, 0.04]} />
        <meshStandardMaterial color="#22c55e" emissive="#15803d" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// --- MAIN WRAPPER COMPONENT ---
interface Project3DShowcaseProps {
  simulatorId: string;
}

export const Project3DShowcase: React.FC<Project3DShowcaseProps> = ({ simulatorId }) => {
  const render3DModel = () => {
    switch (simulatorId) {
      case 'bigjack':
        return <BurgerStack3D />;
      case 'taskme':
        return <AIProductivityCube3D />;
      case 'ordev':
        return <FlightPlanner3D />;
      case 'taskzenith':
        return <DashboardGrid3D />;
      case 'whatsappbot':
        return <DualAIBot3D />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none" style={{ minHeight: '280px' }}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-slate-800 border-t-emerald-500 rounded-full animate-spin" />
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 3.2], fov: 45 }}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[6, 8, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-4, -5, 3]} intensity={0.6} color="#38bdf8" />
          
          {render3DModel()}
          
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 1.7} 
            minPolarAngle={Math.PI / 3}
            enableDamping
            dampingFactor={0.05}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
