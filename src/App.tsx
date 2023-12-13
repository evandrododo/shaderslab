import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import "./App.css";
import { ProjectInfo } from "./components/ProjectInfo/ProjectInfo";
import { Leva, useControls } from "leva";
import { WebCamVideoPlane } from "./components/WebCamVideoPlane/WebCamVideoPlane";
import Camera from "./components/Camera/Camera";
import Controls from "./components/Controls/Controls";

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

  const radius = 4;

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
        
        <group position={[0, 0, radius]}>
          <WebCamVideoPlane />
        </group> 
        <group 
        position={[radius, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        >
          <WebCamVideoPlane />
        </group>

        {new Array(10).fill(0).map((_, i) => (
          <group position={[
            Math.sin(
              ((i / 10) * Math.PI * 2) + (Math.PI / 2)
            ) * radius,
            0, 
            Math.cos(
              ((i / 10) * Math.PI * 2) + (Math.PI / 2)
            ) * radius
            ]}>
            <mesh>
              <sphereGeometry args={[1/10, 32, 32]} />
              <meshBasicMaterial color="hotpink" />
            </mesh>
          </group>
        ))}
        {new Array(10).fill(0).map((_, i) => (
          <group position={[
            Math.sin(
              ((i / 10) * Math.PI * 2) + (Math.PI / 2)
            ) * radius,
            
            Math.cos(
              ((i / 10) * Math.PI * 2) + (Math.PI / 2)
            ) * radius,
            0
            ]}>
            <mesh>
              <sphereGeometry args={[1/10, 32, 32]} />
              <meshBasicMaterial color="red" />
            </mesh>
          </group>
        ))}

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
