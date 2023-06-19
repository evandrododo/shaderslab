import { shaderMaterial } from "@react-three/drei";
import vertexShader from "../shaders/brisa/vertex.glsl";
import fragmentShader from "../shaders/brisa/fragment.glsl";

export const BrisaMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
  },
  vertexShader,
  fragmentShader
)

