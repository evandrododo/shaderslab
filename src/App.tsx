import { Canvas, extend } from '@react-three/fiber'
import './App.css'
import { shaderMaterial } from '@react-three/drei';
import { useRef } from 'react';


export const BrisaMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
  },
  ` varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  ` varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      gl_FragColor = vec4(uv.x,uv.y,0,1);
      
    }`
)

extend({ BrisaMaterial })
function App() {
  const ref = useRef()

  return (
    <>
    <Canvas>
      <mesh>
        <boxBufferGeometry args={[2,2,2]}/>
        <brisaMaterial ref={ref}/>
      </mesh>
    </Canvas>
    </>
  )
}

export default App
