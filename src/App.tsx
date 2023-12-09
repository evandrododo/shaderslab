import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import "./App.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
import { useControls } from "leva";
import { WebCamVideoPlane } from "./components/WebCamVideoPlane/WebCamVideoPlane";

function App() {
  const { showDebug } = useControls(
    {
      showDebug: false,
    },
    { collapsed: true }
  );

  return (
    <>
      <Canvas>
        {/* <Environment 
          background={true}
          files={'./hdr/orbital_sunset.hdr'}
        /> */}
        {/* <group position={[0, 0, 100]}>
          <VegasSphere />
        </group> */}
        {/* <group position={[0, 0, 0]}>
          <VegasPlane />
        </group> */}
        {/* Camera */}

        <PerspectiveCamera
          makeDefault
          position={[0, 0, -1]}
          fov={75}
          zoom={8}
          near={0.000001}
          far={1000}
        />

        <ambientLight intensity={0.5} />
        <group position={[0, 0, 0]}>
          <WebCamVideoPlane />
        </group>

        <OrbitControls />
        {showDebug && <Perf position="bottom-left" />}
      </Canvas>
      <ProjectInfo
        title="shaderslab"
        gitHubUrl="https://github.com/evandrododo/shaderslab"
      />
    </>
  );
}

export default App;
