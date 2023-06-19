import { ReactThreeFiber } from "@react-three/fiber";
import { BrisaMaterial } from "./materials/BrisaMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    brisaMaterial: ReactThreeFiber.Object3DNode<
      BrisaMaterial,
      typeof BrisaMaterial
    >;
  }
}