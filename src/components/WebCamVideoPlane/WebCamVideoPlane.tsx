import { useEffect, useState } from "react";
import { VideoPlane } from "../VideoPlane/VideoPlane";

export const WebCamVideoPlane = () => {
  const [userMedia, setUserMedia] = useState<MediaStream>();
  const [renderizado, setRenderizado] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("renderizado");
      setRenderizado(true);
    }, 100);

    // Limpa o timeout para evitar execuções extras
    return () => clearTimeout(timeout);
  }, []);

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
      console.log("stream", stream);
      setUserMedia(stream);
    });
  }, []);

  if (!userMedia || !userMedia.getVideoTracks().length) {
    return null;
  }
  return <>{renderizado && <VideoPlane userMedia={userMedia} />};</>;
};
