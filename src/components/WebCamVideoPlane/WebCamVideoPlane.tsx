import { useAspect, useVideoTexture } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { DoubleSide, VideoTexture } from "three";

export const VideoTextureMaterial = ({ userMedia }: { userMedia: MediaStream }) => {
  const [videoTexture, setVideoTexture] = useState<VideoTexture>();
  const texture = useVideoTexture(userMedia);

  useEffect(() => {
    setVideoTexture(texture);
  }, [texture]);

  return (
    
        <meshBasicMaterial
          map={videoTexture}
          toneMapped={false}
          side={DoubleSide}
        />
  );
};

export const WebCamVideoPlane = () => {

  const [userMedia, setUserMedia] = useState<MediaStream>();
  // Gets user webcam
  useEffect(() => {
    const media = navigator.mediaDevices.getUserMedia({
      video: true,
    });

    media.then((stream) => {
      setUserMedia(stream);
    });
  }, []);


  const size = useAspect(4, 3);
  if(!userMedia) return null;
  return (
    <mesh scale={size} position={[0, 0, 0]}>
      <planeGeometry />
      
      <Suspense>
        <VideoTextureMaterial userMedia={userMedia} />
      </Suspense>
    </mesh>
  );
};
