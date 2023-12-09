import vertexShader from "../shaders/chroma/vertex.glsl";
import fragmentShader from "../shaders/chroma/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";

export const ShaderMaterialChroma = shaderMaterial(
  {
    map: null,
    iTime: 0,
    iResolution: [0, 0],
    chromaKey: [0.692, 0.329, 0.114], // #b1541d
    threshold: 0.3,
    tolerance: 0.1,
  },
  vertexShader,
  fragmentShader
);
