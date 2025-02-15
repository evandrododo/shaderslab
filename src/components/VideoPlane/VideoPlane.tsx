import { useAspect } from "@react-three/drei";
import { Suspense } from "react";
import { FilterMaterialVideoChroma } from "../../materials/FilterMaterialVideoChroma";
import { FilterMaterialVideoEdge } from "../../materials/FilterMaterialVideoEdge";
import { useControls } from "leva";
import { FilterMaterialVideoTrail } from "../../materials/FilterMaterialVideoTrail";

export const VideoPlane = ({
  userMedia,
  shader,
}: {
  userMedia: MediaStream;
  shader?: string;
}) => {
  const { shaderControl } = useControls({
    shaderControl: {
      value: "edge",
      options: ["chroma", "edge", "trail"],
    },
  });

  shader = shader || shaderControl;

  const mediaWidth = userMedia.getVideoTracks()[0].getSettings().width || 1;
  const mediaHeight = userMedia.getVideoTracks()[0].getSettings().height || 1;
  const size = useAspect(mediaWidth, mediaHeight, 3);

  return (
    <mesh scale={size} position={[0, 0, 0]}>
      <planeGeometry />

      <Suspense>
        {shader === "chroma" && (
          <FilterMaterialVideoChroma userMedia={userMedia} />
        )}
        {shader === "edge" && <FilterMaterialVideoEdge userMedia={userMedia} />}
        {shader === "trail" && (
          <FilterMaterialVideoTrail userMedia={userMedia} />
        )}
      </Suspense>
    </mesh>
  );
};
