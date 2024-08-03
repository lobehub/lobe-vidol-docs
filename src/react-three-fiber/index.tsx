/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} position={[0, 0, 5]} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};
