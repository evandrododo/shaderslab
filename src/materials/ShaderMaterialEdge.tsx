import vertexShader from "../shaders/edge/vertex.glsl";
import fragmentShader from "../shaders/edge/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";

export const ShaderMaterialEdge = shaderMaterial(
  {
    map: null,
    iTime: 0,
    iResolution: [800,600],
    distH: 1.0,
    intensity: 5.0
  },
  vertexShader,
  fragmentShader
);