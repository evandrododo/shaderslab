import vertexShader from "../shaders/chroma/vertex.glsl";
import fragmentShader from "../shaders/chroma/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";

export const ShaderMaterialChroma = shaderMaterial(
  {
    map: null,
    iTime: 0,
    iResolution: [0, 0],
    chromaKey: [0.0, 1.0, 0.0],
    threshold: 0.3,
    tolerance: 0.1,
  },
  vertexShader,
  fragmentShader
);