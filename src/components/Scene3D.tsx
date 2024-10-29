import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Building from './Building';

export default function Scene3D() {
  return (
    <div className="h-[600px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Building />
      </Canvas>
    </div>
  );
}