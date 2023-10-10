import { useAspect } from "@react-three/drei";
import { Suspense } from "react";
import { FilterMaterialVideoChroma } from "../../materials/FilterMaterialVideoChroma";
import { FilterMaterialVideoEdge } from "../../materials/FilterMaterialVideoEdge";
import { useControls } from "leva";

export const VideoPlane = ({ userMedia }: {
  userMedia: MediaStream
}) => {
  // shaders options on leva: Chroma, Edge
  const { shader } = useControls({
    shader: {
      value: "edge",
      options: ["chroma", "edge"],
    },
  });

  const size = useAspect(4,3);
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