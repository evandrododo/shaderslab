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
    ref.current.uniforms.iTime.value = clock.getElapsedTime();
    ref.current.uniforms.iResolution.value = [2, 2];
    // refGeometry.current?.rotateY(0.005);
    // refGeometry.current?.rotateX(0.007);
  });

  return (
    <mesh>
      <boxBufferGeometry args={[5,5,5]} ref={refGeometry}/>
      <brisaMaterial ref={ref}/>
    </mesh>
  );
}
