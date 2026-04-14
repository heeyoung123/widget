"use client";

import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const EARTH_DAY = "/textures/earth_atmos_2048.jpg";
const EARTH_LIGHTS = "/textures/earth_lights_2048.png";

function Earth() {
  const groupRef = useRef<THREE.Group>(null);
  const [colorMap, lightsMap] = useTexture([EARTH_DAY, EARTH_LIGHTS]);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useLayoutEffect(() => {
    for (const t of [colorMap, lightsMap]) {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      t.needsUpdate = true;
    }
  }, [colorMap, lightsMap]);

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;

    if (!reducedRef.current) {
      g.rotation.y += delta * 0.018;
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, state.pointer.y * 0.06, 0.05);
      g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -state.pointer.x * 0.07, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.92, 0]} rotation={[0.1, 2.15, 0]} scale={1.18}>
      <mesh>
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial
          map={colorMap}
          roughness={0.88}
          metalness={0.04}
          emissiveMap={lightsMap}
          emissive="#f5ecd8"
          emissiveIntensity={0.45}
        />
      </mesh>
    </group>
  );
}

export default function HeroGlobe() {
  return (
    <Canvas
      className="h-full w-full touch-none"
      style={{ width: "100%", height: "100%", display: "block" }}
      gl={{
        alpha: false,
        antialias: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 0.38, 1.78], fov: 17 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.07} />
      <hemisphereLight args={["#203050", "#080810", 0.35]} />
      <directionalLight position={[14, 6, 12]} intensity={1.08} color="#ffffff" />
      <directionalLight position={[-10, -4, -8]} intensity={0.22} color="#4a6ab0" />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
}
