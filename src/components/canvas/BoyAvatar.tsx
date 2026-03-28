import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Box, Sphere, Cylinder, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function BoyAvatar() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);

  const [isSpinning, setIsSpinning] = useState(false);
  const spinVelocity = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // 1. Interactive Body Rotation & Spin Action
    if (groupRef.current) {
      if (isSpinning) {
        spinVelocity.current = THREE.MathUtils.lerp(spinVelocity.current, 0.8, 0.1);
        groupRef.current.rotation.y += spinVelocity.current;
        
        // Stop spinning after a full rotation burst
        if (spinVelocity.current > 0.75) {
          setTimeout(() => setIsSpinning(false), 500);
        }
      } else {
        spinVelocity.current = THREE.MathUtils.lerp(spinVelocity.current, 0, 0.1);
        const targetX = state.pointer.x * 0.6;
        const targetY = state.pointer.y * 0.3;
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX + spinVelocity.current, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.1);
      }
    }

    // 2. Head Tracking (Looks at mouse more aggressively)
    if (headRef.current) {
      const targetX = state.pointer.x * 1.2;
      const targetY = state.pointer.y * 0.8;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.15);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.15);
      // Head bobbing to the beat
      headRef.current.position.y = 2.8 + Math.sin(t * 6) * 0.05;
    }

    // 3. Breathing Animation (Torso)
    if (torsoRef.current) {
      torsoRef.current.scale.y = 1 + Math.sin(t * 3) * 0.03;
      torsoRef.current.scale.x = 1 + Math.sin(t * 3 + Math.PI) * 0.015;
    }

    // 4. Action-Packed Typing Animation (Arms)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = -0.5 + Math.sin(t * 20) * 0.15; // Extremely fast typing
      leftArmRef.current.rotation.z = 0.2 + Math.cos(t * 10) * 0.05;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = -0.5 + Math.sin(t * 20 + Math.PI) * 0.15;
      rightArmRef.current.rotation.z = -0.2 + Math.cos(t * 10 + Math.PI) * 0.05;
    }

    // 5. Floating, Tilting & Pulsing Laptop
    if (laptopRef.current) {
      laptopRef.current.position.y = 0.5 + Math.sin(t * 4) * 0.15;
      laptopRef.current.rotation.x = -0.2 + Math.sin(t * 2.5) * 0.08;
      laptopRef.current.rotation.y = Math.sin(t * 2) * 0.1;
      laptopRef.current.rotation.z = Math.sin(t * 1.5) * 0.05;
    }

    // 6. Dynamic Leg Movement (Hovering/Kicking)
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 3) * 0.15;
      leftLegRef.current.position.y = Math.sin(t * 3) * 0.05;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * 3 + Math.PI) * 0.15;
      rightLegRef.current.position.y = Math.sin(t * 3 + Math.PI) * 0.05;
    }
  });

  const handlePointerDown = () => {
    setIsSpinning(true);
  };

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={2}>
      <group 
        ref={groupRef} 
        position={[0, -1.5, 0]} 
        scale={0.8} 
        onPointerDown={handlePointerDown}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      >
        
        {/* Head Group */}
        <group ref={headRef} position={[0, 2.8, 0]}>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.3} smoothness={4}>
            <meshStandardMaterial color="#fcd5ce" roughness={0.4} />
          </RoundedBox>

          {/* Hair (Modern fade/top) */}
          <Box args={[1.3, 0.4, 1.3]} position={[0, 0.7, 0]}>
            <meshStandardMaterial color="#212529" roughness={0.8} />
          </Box>
          <Box args={[1.3, 0.6, 0.8]} position={[0, 0.6, -0.25]}>
            <meshStandardMaterial color="#212529" roughness={0.8} />
          </Box>

          {/* Headphones */}
          <Cylinder args={[0.7, 0.7, 0.2, 32]} position={[-0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
          </Cylinder>
          <Cylinder args={[0.7, 0.7, 0.2, 32]} position={[0.65, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
          </Cylinder>
          {/* Headphone band */}
          <Cylinder args={[0.75, 0.75, 0.1, 32, 1, true, 0, Math.PI]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#343a40" side={THREE.DoubleSide} />
          </Cylinder>

          {/* Glasses (Modern touch) */}
          <Box args={[0.4, 0.2, 0.1]} position={[-0.3, 0.1, 0.65]}>
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} transparent opacity={0.7} />
          </Box>
          <Box args={[0.4, 0.2, 0.1]} position={[0.3, 0.1, 0.65]}>
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} transparent opacity={0.7} />
          </Box>
          <Box args={[0.2, 0.05, 0.05]} position={[0, 0.1, 0.65]}>
            <meshStandardMaterial color="#343a40" />
          </Box>
        </group>

        {/* Body (Hoodie) */}
        <mesh ref={torsoRef} position={[0, 1, 0]}>
          <RoundedBox args={[1.6, 2, 1]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#915EFF" roughness={0.6} />
          </RoundedBox>
          
          {/* Hoodie strings */}
          <Cylinder args={[0.02, 0.02, 0.5]} position={[-0.3, 0.5, 0.55]} rotation={[0, 0, 0.1]}>
            <meshStandardMaterial color="#ffffff" />
          </Cylinder>
          <Cylinder args={[0.02, 0.02, 0.5]} position={[0.3, 0.5, 0.55]} rotation={[0, 0, -0.1]}>
            <meshStandardMaterial color="#ffffff" />
          </Cylinder>

          {/* Backpack */}
          <RoundedBox args={[1.4, 1.8, 0.6]} position={[0, 0.1, -0.7]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#343a40" roughness={0.8} />
          </RoundedBox>
        </mesh>

        {/* Arms */}
        {/* Left Arm */}
        <group ref={leftArmRef} position={[-1.1, 1.8, 0]}>
          <RoundedBox args={[0.5, 1.8, 0.5]} position={[0, -0.7, 0]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#915EFF" roughness={0.6} />
          </RoundedBox>
          {/* Hand */}
          <Sphere args={[0.25]} position={[0, -1.7, 0]}>
            <meshStandardMaterial color="#fcd5ce" />
          </Sphere>
        </group>

        {/* Right Arm */}
        <group ref={rightArmRef} position={[1.1, 1.8, 0]}>
          <RoundedBox args={[0.5, 1.8, 0.5]} position={[0, -0.7, 0]} radius={0.2} smoothness={4}>
            <meshStandardMaterial color="#915EFF" roughness={0.6} />
          </RoundedBox>
          {/* Hand */}
          <Sphere args={[0.25]} position={[0, -1.7, 0]}>
            <meshStandardMaterial color="#fcd5ce" />
          </Sphere>
        </group>

        {/* Laptop/Tablet */}
        <group ref={laptopRef} position={[0, 0.5, 0.8]}>
          <Box args={[1.6, 1.0, 0.05]}>
            <meshStandardMaterial color="#212529" />
          </Box>
          {/* Screen glow */}
          <Box args={[1.5, 0.9, 0.01]} position={[0, 0, 0.03]}>
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1} />
          </Box>
        </group>

        {/* Legs Group */}
        <group position={[0, -1, 0]}>
          {/* Left Leg */}
          <mesh ref={leftLegRef} position={[-0.4, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.3, 2]} />
            <meshStandardMaterial color="#495057" roughness={0.7} />
            {/* Left Shoe */}
            <RoundedBox args={[0.4, 0.3, 0.8]} position={[0, -1.1, 0.1]} radius={0.1} smoothness={4}>
              <meshStandardMaterial color="#ffffff" roughness={0.5} />
            </RoundedBox>
            <Box args={[0.42, 0.1, 0.6]} position={[0, -1.15, 0.1]}>
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
            </Box>
          </mesh>

          {/* Right Leg */}
          <mesh ref={rightLegRef} position={[0.4, 0, 0]}>
            <cylinderGeometry args={[0.35, 0.3, 2]} />
            <meshStandardMaterial color="#495057" roughness={0.7} />
            {/* Right Shoe */}
            <RoundedBox args={[0.4, 0.3, 0.8]} position={[0, -1.1, 0.1]} radius={0.1} smoothness={4}>
              <meshStandardMaterial color="#ffffff" roughness={0.5} />
            </RoundedBox>
            <Box args={[0.42, 0.1, 0.6]} position={[0, -1.15, 0.1]}>
              <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
            </Box>
          </mesh>
        </group>

      </group>
    </Float>
  );
}
