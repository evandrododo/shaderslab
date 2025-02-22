import { useEffect, useState } from "react";
import { VideoPlane } from "../VideoPlane/VideoPlane";

export const WebCamVideoPlane = ({ shader }: { shader?: string }) => {
  const [userMedia, setUserMedia] = useState<MediaStream>();

  // Gets user webcam
  useEffect(() => {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          console.log(
            `${device.kind}: ${device.label} id = ${device.deviceId}`
          );
        });
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });

    const media = navigator.mediaDevices.getUserMedia({
      video: true,
    });

    media.then((stream) => {
      setUserMedia(stream);
    });
  }, []);

  if (!userMedia || !userMedia.getVideoTracks().length) {
    return null;
  }
  return (
    <>
      <VideoPlane userMedia={userMedia} shader={shader} />
    </>
  );
};
