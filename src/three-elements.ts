import { ReactThreeFiber } from "@react-three/fiber";
import { VegasMaterial } from "./materials/VegasMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    vegasMaterial: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      VegasMaterial,
      typeof VegasMaterial
    >;
  }
}