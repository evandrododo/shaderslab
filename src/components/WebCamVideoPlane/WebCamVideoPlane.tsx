import { useEffect, useState } from "react";
import { VideoPlane } from "../VideoPlane/VideoPlane";

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

  if (!userMedia) return null;
  return <VideoPlane userMedia={userMedia} />;
};
