import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from "r3f-perf";
import "./App.css";
import Camera from "./components/Camera/Camera";
import Controls from "./components/Controls/Controls";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
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
  console.log("showDebug", showDebug);

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
        <Camera />

        <ambientLight intensity={0.5} />

        <WebCamVideoPlane />

        {/* <WebCamVideoPlane shader="trail" /> */}

        <Controls />
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
