"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Grid, ContactShadows, Html } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import { PCFShadowMap, type Group } from "three";
import { GlassCard } from "@/components/ui/GlassCard";

function PropertyModel() {
  const groupRef = useRef<Group>(null);
  const [selected, setSelected] = useState("Main block");

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.18;
  });

  const sections = useMemo(
    () => [
      { name: "Main block", area: "1,450 sq.ft", tax: "₹6,200", status: "Assessed" },
      { name: "Suite wing", area: "420 sq.ft", tax: "₹2,100", status: "Verified" },
      { name: "Terrace", area: "180 sq.ft", tax: "₹1,100", status: "Review" },
    ],
    [],
  );

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <Float speed={1.7} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.4, 1.15, 2.0]} />
          <meshStandardMaterial color="#dbeafe" metalness={0.35} roughness={0.25} />
        </mesh>

        <mesh position={[0, 1.45, 0]} castShadow>
          <boxGeometry args={[2.1, 0.3, 1.6]} />
          <meshStandardMaterial color="#93c5fd" emissive="#1d4ed8" emissiveIntensity={0.16} />
        </mesh>

        {Array.from({ length: 12 }).map((_, index) => (
          <mesh key={index} position={[-0.8 + (index % 4) * 0.55, 0.8 + (index % 3) * 0.18, -0.42 + (index % 3) * 0.6]}>
            <boxGeometry args={[0.26, 0.26, 0.05]} />
            <meshStandardMaterial color="#e0f2fe" emissive="#7dd3fc" emissiveIntensity={0.22} />
          </mesh>
        ))}

        <mesh position={[0, -0.25, 0]} receiveShadow>
          <boxGeometry args={[4.2, 0.2, 3.6]} />
          <meshStandardMaterial color="#0f172a" metalness={0.3} roughness={0.8} />
        </mesh>

        <Float speed={2.3} position={[0, 1.8, 0]}>
          <mesh onClick={() => setSelected(sections[0].name)}>
            <sphereGeometry args={[0.12, 24, 24]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.5} />
          </mesh>
        </Float>

        <Float speed={2.1} position={[1, 0.5, 1.1]}>
          <mesh onClick={() => setSelected(sections[1].name)}>
            <sphereGeometry args={[0.1, 24, 24]} />
            <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} />
          </mesh>
        </Float>

        <Float speed={1.8} position={[-1.2, 0.9, -1.1]}>
          <mesh onClick={() => setSelected(sections[2].name)}>
            <sphereGeometry args={[0.1, 24, 24]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      </Float>

      <Grid args={[12, 12]} cellColor="#0f172a" sectionColor="#1e293b" cellSize={0.4} sectionSize={2} fadeDistance={14} fadeStrength={1} position={[0, -0.5, 0]} />

      {sections.map((item, index) => (
        <Html key={item.name} position={[
          index === 0 ? 1.8 : index === 1 ? 2.1 : -2.3,
          index === 0 ? 1.7 : index === 1 ? 0.9 : 1.2,
          index === 0 ? 0.9 : index === 1 ? 1.5 : -1.3,
        ]} center>
          <div className="rounded-xl border border-white/10 bg-slate-950/80 px-2.5 py-1.5 text-[10px] text-slate-100 shadow-lg backdrop-blur-sm">
            <div className="font-medium">{item.name}</div>
            <div>{item.status}</div>
          </div>
        </Html>
      ))}

      {selected ? (
        <Html position={[0, 2.8, 0]} center>
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950/80 px-4 py-2 text-[10px] text-cyan-100 shadow-xl backdrop-blur-sm">
            <div className="font-semibold">{selected}</div>
            <div>Area: 1,450 sq.ft</div>
            <div>Tax: ₹6,200</div>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

export function PropertyDigitalTwin() {
  return (
    <GlassCard className="overflow-hidden p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">3D Overview</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Property digital twin</h3>
        </div>
      </div>
      <div className="h-[440px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%),linear-gradient(180deg,_rgba(15,23,42,0.85),_rgba(2,6,23,1))]">
        <Canvas camera={{ position: [4.2, 2.8, 5.8], fov: 42 }} shadows={{ type: PCFShadowMap }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.9} />
            <directionalLight position={[3, 5, 4]} intensity={1.6} castShadow />
            <spotLight position={[-4, 4, 2]} intensity={0.5} angle={0.35} penumbra={1} />
            <PropertyModel />
            <ContactShadows position={[0, -0.75, 0]} opacity={0.7} scale={12} blur={2.8} far={5} />
            <OrbitControls enablePan={false} minDistance={4} maxDistance={9} autoRotate autoRotateSpeed={0.7} />
          </Suspense>
        </Canvas>
      </div>
    </GlassCard>
  );
}
