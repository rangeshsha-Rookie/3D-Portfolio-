import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float, Wireframe } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.getElapsedTime() * -0.2;
      innerRef.current.rotation.y = state.clock.getElapsedTime() * -0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      {/* Outer wireframe */}
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Inner glowing core */}
      <mesh ref={innerRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Particles */}
      <points>
        <sphereGeometry args={[3.5, 32, 32]} />
        <pointsMaterial color="#00f0ff" size={0.02} sizeAttenuation transparent opacity={0.5} />
      </points>
    </Float>
  );
}
