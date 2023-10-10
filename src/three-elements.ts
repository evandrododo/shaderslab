import { ReactThreeFiber } from "@react-three/fiber";
import { VegasMaterial } from "./materials/ShaderMaterialVegas";
import { ShaderMaterialChroma } from "./materials/ShaderMaterialChroma";
import { ShaderMaterialEdge } from "./materials/ShaderMaterialEdge";

declare module "@react-three/fiber" {
  interface ThreeElements {
    vegasMaterial: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      VegasMaterial,
      typeof VegasMaterial
    >;
    shaderMaterialChroma: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      ShaderMaterialChroma,
      typeof ShaderMaterialChroma
    >;
    shaderMaterialEdge: ReactThreeFiber.Object3DNode<
      // @ts-expect-error
      ShaderMaterialEdge,
      typeof ShaderMaterialEdge
    >;
  }
}