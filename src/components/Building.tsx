import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Building() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.2} />
    </mesh>
  );
}