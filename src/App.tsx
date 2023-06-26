import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import './App.css'
import { Screen } from './Screen';
import { OrbitControls } from '@react-three/drei';
import { ProjectInfo } from './components/ProjectInfo/ProjectInfo';


function App() {
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
        <OrbitControls />
        <Screen />
        <Perf />
      </Canvas>
      <ProjectInfo
        title="shaderslab"
        gitHubUrl="https://github.com/evandrododo/shaderslab"
      />
    </>
  );
}

export default App
