import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html, Line } from "@react-three/drei";
import * as THREE from "three";

const Node = ({ position, title, content, color, isCenter = false }: any) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={isCenter ? 1 : 2} rotationIntensity={isCenter ? 0.5 : 1.5} floatIntensity={isCenter ? 0.5 : 2} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {isCenter ? (
          <icosahedronGeometry args={[1.2, 1]} />
        ) : (
          <octahedronGeometry args={[0.8, 0]} />
        )}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          wireframe={!isCenter}
          transparent
          opacity={isCenter ? 0.9 : 0.7}
        />
        {hovered && (
          <Html position={[0, isCenter ? 2 : 1.5, 0]} center zIndexRange={[100, 0]}>
            <div className="bg-slate-900/95 border border-cyan-400/50 p-4 rounded-xl backdrop-blur-md w-64 pointer-events-none shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
              <h4 className="text-cyan-400 font-bold text-lg mb-2">{title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  );
};

const Connections = ({ points }: { points: [number, number, number][] }) => {
  return (
    <Line
      points={points}
      color="#22d3ee"
      lineWidth={1.5}
      transparent
      opacity={0.3}
    />
  );
};

const Scene = () => {
  const center: [number, number, number] = [0, 0, 0];
  const eduPos: [number, number, number] = [-3, 1.5, 1];
  const skillsPos: [number, number, number] = [3, 1.5, 1];
  const interestsPos: [number, number, number] = [0, -2, 2];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      
      <Connections points={[center, eduPos]} />
      <Connections points={[center, skillsPos]} />
      <Connections points={[center, interestsPos]} />
      
      <Node 
        position={center} 
        title="Rangesh Gupta" 
        content="Computer Engineering Student. Hover over the surrounding nodes to explore my background."
        color="#3b82f6"
        isCenter={true}
      />
      <Node 
        position={eduPos} 
        title="Education" 
        content="B.E. in Computer Engineering (2025-2029). Diploma in Graphics & Automation. Strong foundation in algorithms and system design."
        color="#22d3ee"
      />
      <Node 
        position={skillsPos} 
        title="Key Skills" 
        content="Python, JavaScript, React, Java, SQL. Experienced in Full-Stack Architecture and Microservices."
        color="#a855f7"
      />
      <Node 
        position={interestsPos} 
        title="Career Interests" 
        content="AI/ML Orchestration, Generative AI, Smart City Infrastructure, and building scalable data-driven applications."
        color="#ec4899"
      />
      
      {/* Background particles */}
      <points>
        <sphereGeometry args={[7, 32, 32]} />
        <pointsMaterial color="#22d3ee" size={0.03} sizeAttenuation transparent opacity={0.3} />
      </points>
    </>
  );
};

const AboutScene = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/30 relative mt-10 shadow-[0_0_40px_rgba(34,211,238,0.05)]">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <p className="text-cyan-400 text-sm font-mono uppercase tracking-widest">Interactive Neural Map</p>
        </div>
        <p className="text-gray-500 text-xs font-mono mt-2">Drag to rotate • Hover nodes for info</p>
      </div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default AboutScene;
