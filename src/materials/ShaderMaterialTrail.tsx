import vertexShader from "../shaders/trail/vertex.glsl";
import fragmentShader from "../shaders/trail/fragment.glsl";
import { shaderMaterial } from "@react-three/drei";

export const ShaderMaterialTrail = shaderMaterial(
  {
    map: null,
    previousFrames: null,
    iTime: 0,
    iResolution: [800,600],
    distH: 1.0,
    intensity: 5.0
  },
  vertexShader,
  fragmentShader
);