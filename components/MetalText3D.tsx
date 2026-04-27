"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text3D, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

const LINES = ["WHY", "CHOOSE", "US"];
const DELAYS = [0.0, 0.5, 1.0];

function MetalWords({ triggered }: { triggered: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const lineRefs = useRef<(THREE.Group | null)[]>([]);
  const { viewport } = useThree();

  const fontSize = Math.min(viewport.width / 4.5, 2.6);
  const lineHeight = fontSize * 1.4;
  const totalHeight = lineHeight * (LINES.length - 1);

  const clock = useRef(0);
  const wasTriggered = useRef(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.05;
      groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.07;
    }

    if (!triggered) return;

    // 처음 트리거될 때 clock 리셋
    if (!wasTriggered.current) {
      wasTriggered.current = true;
      clock.current = 0;
    }

    clock.current += delta;

    LINES.forEach((_, i) => {
      const elapsed = clock.current - DELAYS[i];
      if (elapsed <= 0) return;

      const duration = 1.25;
      const p = Math.min(elapsed / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);

      const line = lineRefs.current[i];
      if (!line) return;

      const startX = viewport.width * 0.75;
      line.position.x = startX * (1 - eased);
      line.visible = true;
    });
  });

  return (
    <group ref={groupRef}>
      {LINES.map((word, i) => (
        <group
          key={word}
          ref={(el) => { lineRefs.current[i] = el; }}
          position={[viewport.width * 0.75, totalHeight / 2 - i * lineHeight, 0]}
          visible={false}
        >
          <Center>
            <Text3D
              font="/helvetiker_bold.typeface.json"
              size={fontSize}
              height={fontSize * 0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={fontSize * 0.035}
              bevelSize={fontSize * 0.015}
              bevelSegments={8}
            >
              {word}
              <meshStandardMaterial
                color="#d8d8f0"
                metalness={1.0}
                roughness={0.06}
                envMapIntensity={3.0}
              />
            </Text3D>
          </Center>
        </group>
      ))}
      <Environment preset="city" />
    </group>
  );
}

export default function MetalText3D({ triggered }: { triggered: boolean }) {
  return (
    <div className="w-full max-w-[min(100%,56rem)] mx-auto" style={{ height: "clamp(300px, 48vw, 620px)" }}>
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 48 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[8, 10, 5]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-6, -4, 6]} intensity={0.5} color="#8888cc" />
        <pointLight position={[0, 4, 8]} intensity={1.0} color="#ffffff" />
        <Suspense fallback={null}>
          <MetalWords triggered={triggered} />
        </Suspense>
      </Canvas>
    </div>
  );
}
