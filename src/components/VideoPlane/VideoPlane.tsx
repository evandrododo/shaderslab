import { useAspect } from "@react-three/drei";
import { Suspense } from "react";
import { FilterMaterialVideoChroma } from "../../materials/FilterMaterialVideoChroma";
import { FilterMaterialVideoEdge } from "../../materials/FilterMaterialVideoEdge";
import { useControls } from "leva";

export const VideoPlane = ({ userMedia }: { userMedia: MediaStream }) => {
  // shaders options on leva: Chroma, Edge
  const { shader, 
  } = useControls({
    shader: {
      value: "edge",
      options: ["chroma", "edge"],
    },
  });

  const mediaWidth = userMedia.getVideoTracks()[0].getSettings().width || 1;
  const mediaHeight = userMedia.getVideoTracks()[0].getSettings().height || 1;
  const mediaAspect = mediaWidth / mediaHeight;
  const size = useAspect(mediaAspect, 1, 0.1);
  console.log("userMedia.getVideoTracks()[0].getSettings()", userMedia.getVideoTracks()[0].getSettings());
  return (
    <mesh scale={size} position={[0, 0, 0]}>
      <planeGeometry />

      <Suspense>
        {shader === "chroma" && (
          <FilterMaterialVideoChroma userMedia={userMedia} />
        )}
        {shader === "edge" && <FilterMaterialVideoEdge userMedia={userMedia} />}
      </Suspense>
    </mesh>
  );
};
