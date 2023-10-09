import { shaderMaterial, useVideoTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, ShaderMaterial, VideoTexture } from "three";
import vertexShader from "../shaders/chroma/vertex.glsl";
import fragmentShader from "../shaders/chroma/fragment.glsl";
import { extend } from "@react-three/fiber";
import { useControls } from "leva";

// get the texture from the webcam
export const ChromaShaderMaterial = shaderMaterial(
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

extend({ ChromaShaderMaterial });

const hexToVec3 = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

export const VideoTextureMaterial = ({
  userMedia,
}: {
  userMedia: MediaStream;
}) => {
  const { chromaKey, threshold, tolerance } = useControls({
    chromaKey: {
      value: "#00ff00",
      label: "Chroma Key",
    },
    threshold: {
      value: 0.3,
      min: 0.0,
      max: 1.0,
    },
    tolerance: {
      value: 0.1,
      min: 0.0,
      max: 1.0,
    },
  });

  const [videoTexture, setVideoTexture] = useState<VideoTexture>();
  const texture = useVideoTexture(userMedia);
  const materialRef = useRef<ShaderMaterial>();
  
  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.map.value = texture;
    setVideoTexture(texture);
  }, [texture]);

  
  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.chromaKey.value = hexToVec3(chromaKey);
  }, [chromaKey]);

  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.threshold.value = threshold;
  }
  , [threshold]);

  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.tolerance.value = tolerance;
  }
  , [tolerance]);
  return (
    <chromaShaderMaterial
      map={videoTexture}
      toneMapped={false}
      side={DoubleSide}
      ref={materialRef}
      transparent
    />
  );
};
