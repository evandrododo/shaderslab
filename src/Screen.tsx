import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { ShaderMaterial } from "three"
import { BrisaMaterial } from './materials/BrisaMaterial';

extend({ BrisaMaterial });
export const Screen = () => {
  const ref = useRef<ShaderMaterial>();
  const refGeometry = useRef<THREE.BufferGeometry>();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.uniforms.iTime.value = clock.getElapsedTime()/2;
    ref.current.uniforms.iResolution.value = [10, 5];
    // refGeometry.current?.rotateY(0.005);
    // refGeometry.current?.rotateX(0.007);
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI/2, -Math.PI/2, 0]}>
      {/* <boxBufferGeometry args={[5,5,5]} ref={refGeometry}/> */}
      <sphereBufferGeometry args={[5, 256, 256]} ref={refGeometry}  />
      <brisaMaterial ref={ref}/>
    </mesh>
  );
}
