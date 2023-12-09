import { useVideoTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, ShaderMaterial, VideoTexture } from "three";
import { extend } from "@react-three/fiber";
import { useControls } from "leva";
import { ShaderMaterialChroma } from "./ShaderMaterialChroma";

extend({ ShaderMaterialChroma });

const hexToVec3 = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

export const FilterMaterialVideoChroma
 = ({
  userMedia,
}: {
  userMedia: MediaStream;
}) => {
  const { chromaKey, threshold, tolerance } = useControls({
    chromaKey: {
      value: "#b1541d",
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
    <shaderMaterialChroma
      map={videoTexture}
      toneMapped={false}
      side={DoubleSide}
      ref={materialRef}
      transparent
    />
  );
};
