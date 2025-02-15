import { PerspectiveCamera } from "@react-three/drei";

const Camera = () => {

  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 1]}
      zoom={1}
      near={0.000001}
      far={1000}
    ></PerspectiveCamera>
  );
};
export default Camera;
