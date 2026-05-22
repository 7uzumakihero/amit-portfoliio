"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Simple pure, seedable pseudo-random number generator (LCG)
// to satisfy React 19's pure render function requirements.
function createPRNG(seed: number) {
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// Interactive Group that follows the mouse cursor
function HologramGroup({ mousePos, hovered }: { mousePos: { x: number; y: number }; hovered: boolean }) {
  const groupRef = useRef<THREE.Group | null>(null);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const ringRef1 = useRef<THREE.Mesh | null>(null);
  const ringRef2 = useRef<THREE.Mesh | null>(null);
  const speedRef = useRef(1.0);

  // Create particles for the "digital twin" face contour procedurally with vertex colors
  const points = useMemo(() => {
    const random = createPRNG(42);
    const count = 450; // Increased count for a denser, richer representation
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Generate points mapping to a stylized cyber head/mask silhouette
      const theta = random() * Math.PI * 2;
      const phi = Math.acos((random() * 2) - 1);
      const r = 2.0 + Math.sin(phi * 3) * 0.15; // Subtle noise perturbation

      let x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi);

      // Distort slightly to shape it like a face mask (flatten back, pull front)
      if (z < 0) {
        z *= 0.5; // flatten back
      } else {
        z += Math.sin(y * 0.8) * 0.3; // pull nose/mouth front
        x *= 0.85; // narrow cheeks
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y * 1.1; // elongate head
      positions[i * 3 + 2] = z;

      // Color coding: Map coordinates to a vibrant multi-colored gradient!
      // Transitions from Electric Blue at the neck, to Neon Purple at the center, to Emerald Green at the top.
      const tColor = (y + 2.2) / 4.4; // height-based normalization
      let rVal, gVal, bVal;

      if (tColor < 0.5) {
        // Interpolate between Electric Blue (0, 0.9, 1) and Neon Purple (0.74, 0, 1)
        const factor = tColor * 2;
        rVal = 0.0 + 0.74 * factor;
        gVal = 0.9 - 0.9 * factor;
        bVal = 1.0;
      } else {
        // Interpolate between Neon Purple (0.74, 0, 1) and Emerald Green (0.06, 0.73, 0.5)
        const factor = (tColor - 0.5) * 2;
        rVal = 0.74 - 0.68 * factor;
        gVal = 0.0 + 0.73 * factor;
        bVal = 1.0 - 0.5 * factor;
      }

      colors[i * 3] = rVal;
      colors[i * 3 + 1] = gVal;
      colors[i * 3 + 2] = bVal;
    }
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smoothly transition rotation speed multiplier when hovered (touched)
    const targetSpeed = hovered ? 4.5 : 1.0;
    speedRef.current = THREE.MathUtils.lerp(speedRef.current, targetSpeed, 0.05);

    if (groupRef.current) {
      // Continuous roll/spin around Y axis
      groupRef.current.rotation.y += delta * 0.35 * speedRef.current;
      
      // Subtle Z-axis rolling wave oscillation
      groupRef.current.rotation.z = Math.sin(t * 0.7) * 0.18 * speedRef.current;

      // Mouse position adds dynamic orientation bias
      const targetRotationX = (mousePos.y / window.innerHeight) * 2 - 1;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX * 0.45,
        0.05
      );
    }

    // Pulse core size and rotate
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.25 * speedRef.current;
      coreRef.current.rotation.x = t * 0.12 * speedRef.current;
      const scale = 1.05 + Math.sin(t * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Rotate orbiting rings on different axes, scaled by speed
    if (ringRef1.current) {
      ringRef1.current.rotation.y = t * 0.6 * speedRef.current;
      ringRef1.current.rotation.x = t * 0.25 * speedRef.current;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.4 * speedRef.current;
      ringRef2.current.rotation.z = t * 0.5 * speedRef.current;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Hologram Particle Mask with Custom Colors */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[points.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[points.colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          transparent
          opacity={0.9}
          depthWrite={true}
        />
      </points>

      {/* Inner glowing wireframe core representing AI intelligence */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshBasicMaterial
          color="#bd00ff" // Neon Magenta/Purple wireframe
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Outer Orbiting Data Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.02, 8, 64]} />
        <meshBasicMaterial
          color="#00e5ff" // Electric Blue
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={ringRef2} rotation={[Math.PI / 2, Math.PI / 6, 0]}>
        <torusGeometry args={[2.7, 0.015, 8, 48]} />
        <meshBasicMaterial
          color="#10B981" // Emerald Green
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Core Node lighting */}
      <pointLight color="#00e5ff" intensity={1.5} distance={10} />
      <pointLight color="#bd00ff" intensity={0.8} distance={8} />
    </group>
  );
}

// Particle field helper for ambient star nodes
function AmbientNodes() {
  const pointsRef = useRef<THREE.Points | null>(null);

  const particles = useMemo(() => {
    const random = createPRNG(99);
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (random() - 0.5) * 12;
      positions[i * 3 + 1] = (random() - 0.5) * 12;
      positions[i * 3 + 2] = (random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#10B981"
        size={0.03}
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </points>
  );
}

interface HologramFaceProps {
  mousePos: { x: number; y: number };
}

export default function HologramFace({ mousePos }: HologramFaceProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <HologramGroup mousePos={mousePos} hovered={hovered} />
        <AmbientNodes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
