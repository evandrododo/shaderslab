import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import './App.css'
import { Screen } from './Screen';
import { OrbitControls } from '@react-three/drei';


function App() {
  return (
    <>
    <Canvas>

      <OrbitControls />
      <Screen />
      <Perf />
    </Canvas>
    </>
  )
}

export default App
