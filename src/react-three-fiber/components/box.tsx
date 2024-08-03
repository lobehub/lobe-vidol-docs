/* eslint-disable react/no-unknown-property */
import { ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default (props: ThreeElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      onClick={() => setClicked(!clicked)}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
      ref={ref}
      scale={clicked ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
