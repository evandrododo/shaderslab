import { useVideoTexture } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, ShaderMaterial, VideoTexture } from "three";
import { extend } from "@react-three/fiber";
import { useControls } from "leva";
import { ShaderMaterialEdge } from "./ShaderMaterialEdge";

extend({ ShaderMaterialEdge });

export const FilterMaterialVideoEdge = ({
  userMedia,
}: {
  userMedia: MediaStream;
}) => {
  const { distH, intensity } = useControls({
    distH: {
      value: 1.0,
      min: 0.0,
      max: 10.0,
    },
    intensity: {
      value: 5.0,
      min: 0.0,
      max: 20.0,
    },
  });

  const [videoTexture, setVideoTexture] = useState<VideoTexture>();
  const texture = useVideoTexture(userMedia);
  const mediaTrackSettings = userMedia.getVideoTracks()[0].getSettings();
  const materialRef = useRef<ShaderMaterial>();

  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.map.value = texture;
    setVideoTexture(texture);
  }, [texture]);

  useEffect(() => {
    if (materialRef.current === undefined) return;
    const resolution = [mediaTrackSettings.width, mediaTrackSettings.height];
    materialRef.current.uniforms.iResolution.value = resolution;
  }, [mediaTrackSettings]);

  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.distH.value = distH;
  }, [distH]);
  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.intensity.value = intensity;
  }, [intensity]);

  return (
    <shaderMaterialEdge
      map={videoTexture}
      toneMapped={false}
      side={DoubleSide}
      ref={materialRef}
      transparent
    />
  );
};
