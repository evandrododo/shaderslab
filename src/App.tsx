import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
import { useControls } from "leva";
import { WebCamVideoPlane } from "./components/WebCamVideoPlane/WebCamVideoPlane";

function App() {
  const { showDebug } = useControls(
    {
      showDebug: false,
      inputNormal: { value: 0.5, min: 0, max: 1, step: 0.01 },
    },
    { collapsed: true }
  );

  return (
    <>
      <Canvas
        camera={{
          position: [0, 0, -10],
          near: 0.001,
          far: 100000,
        }}
      >
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
        <ambientLight intensity={0.5} />
        <group position={[0, 0, 2]}>
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
