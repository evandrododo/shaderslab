import { shaderMaterial } from "@react-three/drei";
import vertexShader from "../shaders/brisa/vertex.glsl";
import fragmentShader from "../shaders/brisa/fragment.glsl";

export const BrisaMaterial = shaderMaterial(
  {
    iResolution: [7, 5],
    iTime: 0,
  },
  vertexShader,
  fragmentShader
)

