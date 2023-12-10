import { useEffect, useState } from "react";
import { VideoPlane } from "../VideoPlane/VideoPlane";

export const WebCamVideoPlane = () => {
  const [userMedia, setUserMedia] = useState<MediaStream>();
  // Gets user webcam
  useEffect(() => {
    const media = navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
      },
    });

    media.then((stream) => {
      console.log("stream", stream);
      setUserMedia(stream);
    });
  }, []);

  if (!userMedia || !userMedia.getVideoTracks().length) {
    return null;
  }
  return <VideoPlane userMedia={userMedia} />;
};
