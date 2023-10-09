import { ReactThreeFiber } from "@react-three/fiber";
import { VegasMaterial } from "./materials/VegasMaterial";
import { ChromaShaderMaterial } from "./materials/VideoTextureMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    vegasMaterial: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      VegasMaterial,
      typeof VegasMaterial
    >;
    chromaShaderMaterial: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      ChromaShaderMaterial,
      typeof ChromaShaderMaterial
    >;
  }
}