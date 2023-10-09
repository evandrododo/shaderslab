import { useAspect } from "@react-three/drei";
import { Suspense } from "react";
import { VideoTextureMaterial } from "../../materials/VideoTextureMaterial";

export const VideoPlane = ({ userMedia }: {
  userMedia: MediaStream
}) => {
  const size = useAspect(4, 3);
  return <mesh scale={size} position={[0, 0, 0]}>
      <planeGeometry />
      
      <Suspense>
        <VideoTextureMaterial userMedia={userMedia} />
      </Suspense>
    </mesh>
};