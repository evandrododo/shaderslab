import { Canvas, extend } from '@react-three/fiber'
import { Perf } from 'r3f-perf';
import './App.css'
import { useRef } from 'react';
import { BrisaMaterial } from './materials/BrisaMaterial';

extend({ BrisaMaterial })

function App() {
  const ref = useRef()

  return (
    <>
    <Canvas>
      <mesh>
        <boxBufferGeometry args={[5,5,3]}/>
        <brisaMaterial ref={ref}/>
      </mesh>

      <Perf />
    </Canvas>
    </>
  )
}

export default App
