import { useVideoTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  DoubleSide,
  ShaderMaterial,
  VideoTexture,
  WebGLRenderTarget,
} from "three";
import { ShaderMaterialTrail } from "./ShaderMaterialTrail";

extend({ ShaderMaterialTrail });

export const FilterMaterialVideoTrail = ({
  userMedia,
}: {
  userMedia: MediaStream;
}) => {
  const [videoTexture, setVideoTexture] = useState<VideoTexture>();
  const texture = useVideoTexture(userMedia);
  const materialRef = useRef<ShaderMaterial>();

  const { gl, size } = useThree();
  const numFrames = 16;
  const frameBuffers = useRef<WebGLRenderTarget[]>([]);
  const currentFrameIndex = useRef(0);

  // Criar cena, câmera e geometria uma única vez
  const renderScene = useRef(new THREE.Scene());
  const renderCamera = useRef(
    new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000)
  );
  const renderMesh = useRef<THREE.Mesh>();

  useEffect(() => {
    // Inicializa render targets/framebuffers
    for (let i = 0; i < numFrames; i++) {
      const renderTarget = new WebGLRenderTarget(size.width, size.height);
      frameBuffers.current.push(renderTarget);
    }

    // Configura a câmera ortográfica
    const aspectRatio = size.width / size.height;
    const planeWidth = 2;
    const planeHeight = planeWidth / aspectRatio;
    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
    const material = new THREE.MeshBasicMaterial();
    renderMesh.current = new THREE.Mesh(geometry, material);
    renderScene.current.add(renderMesh.current);

    // Ajusta a câmera ortográfica para corresponder ao aspect ratio
    renderCamera.current.left = -1;
    renderCamera.current.right = 1;
    renderCamera.current.top = 1 / aspectRatio;
    renderCamera.current.bottom = -1 / aspectRatio;
    renderCamera.current.position.z = 1;
    renderCamera.current.updateProjectionMatrix();
  }, [size]);

  useFrame(() => {
    if (videoTexture === undefined || !renderMesh.current) return;

    const currentIndex = currentFrameIndex.current;
    const renderTarget = frameBuffers.current[currentIndex];

    // Atualiza apenas a textura do material
    (renderMesh.current.material as THREE.MeshBasicMaterial).map = videoTexture;

    // Renderiza para o target
    gl.setRenderTarget(renderTarget);
    gl.render(renderScene.current, renderCamera.current);
    gl.setRenderTarget(null);

    currentFrameIndex.current = (currentIndex + 1) % numFrames;
  });

  useEffect(() => {
    if (materialRef.current === undefined) return;
    materialRef.current.uniforms.map.value = texture;
    setVideoTexture(texture);
  }, [texture]);

  console.log("map", frameBuffers.current[currentFrameIndex.current]?.texture);

  useEffect(() => {
    return () => {
      // Cleanup
      frameBuffers.current.forEach((buffer) => buffer.dispose());
      renderMesh.current?.geometry.dispose();
      (renderMesh.current?.material as THREE.Material)?.dispose();
    };
  }, [size]);

  return (
    <shaderMaterialTrail
      map={frameBuffers.current[currentFrameIndex.current]?.texture || null} // Use o frame atual
      previousFrames={frameBuffers.current.map((frame) => frame.texture)} // Use todos os frames
      // map={videoTexture}
      toneMapped={false}
      side={DoubleSide}
      ref={materialRef}
      transparent
    />
  );
};
