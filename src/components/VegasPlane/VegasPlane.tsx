import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { DoubleSide, ShaderMaterial } from "three"
import { VegasMaterial } from "../../materials/VegasMaterial";
import { useAspect } from "@react-three/drei";

extend({ VegasMaterial });
export const VegasPlane = () => {
  const ref = useRef<ShaderMaterial>();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.uniforms.iTime.value = clock.getElapsedTime();
    ref.current.uniforms.iResolution.value = [4, 3];
  });

  const size = useAspect(4, 3);
  return (
    <mesh position={[0, 0, 0]} scale={size}>
      <planeGeometry />
      <vegasMaterial ref={ref}
        side={DoubleSide}
      />
    </mesh>
  );
}
