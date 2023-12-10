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
      console.log("stream", stream.getVideoTracks()[0].getSettings());
      setUserMedia(stream);
    });
  }, []);

  if (!userMedia || !userMedia.getVideoTracks().length) {
    return null;
  }
  return <VideoPlane userMedia={userMedia} />;
};
