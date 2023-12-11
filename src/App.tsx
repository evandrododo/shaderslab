import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import "./App.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
import { Leva, useControls } from "leva";
import { WebCamVideoPlane } from "./components/WebCamVideoPlane/WebCamVideoPlane";

function App() {
  const { showDebug } = useControls(
    {
      showDebug: false,
    },
    {
      collapsed: true,
      position: "bottom-right",
    }
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
          position={[0, 0, -10]}
          fov={75}
          near={0.000001}
          far={1000}
        />

        <ambientLight intensity={0.5} />
        <group position={[0, 0, 0]}>
          <WebCamVideoPlane />
        </group>

        <OrbitControls makeDefault enableRotate={false} />
        {showDebug && <Perf position="bottom-left" />}
      </Canvas>
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          zIndex: 2,
        }}
      >
        <Leva fill collapsed hideCopyButton />
      </div>
      <ProjectInfo
        title="shaderslab"
        gitHubUrl="https://github.com/evandrododo/shaderslab"
      />
    </>
  );
}

export default App;
