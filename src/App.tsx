import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import './App.css'
import { VegasSphere } from './VegasSphere';
import { OrbitControls } from '@react-three/drei';
import { ProjectInfo } from './components/ProjectInfo/ProjectInfo';
import { useControls } from 'leva';

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
          position: [0, 0, 10],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        {/* <Environment 
          background={true}
          files={'./hdr/orbital_sunset.hdr'}
        /> */}
        <OrbitControls />
        <VegasSphere />
        <mesh position={[7, 0, 7]}>
          <sphereBufferGeometry args={[1, 256, 256]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
        {showDebug && <Perf position="bottom-left" />}
        <ambientLight
          intensity={0.5}
        />
      </Canvas>
      <ProjectInfo
        title="shaderslab"
        gitHubUrl="https://github.com/evandrododo/shaderslab"
      />
    </>
  );
}

export default App
