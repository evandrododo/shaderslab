import { ReactThreeFiber } from "@react-three/fiber";
import { VegasMaterial } from "./materials/ShaderMaterialVegas";
import { ShaderMaterialChroma } from "./materials/ShaderMaterialChroma";
import { ShaderMaterialEdge } from "./materials/ShaderMaterialEdge";
import { ShaderMaterialTrail } from "./materials/ShaderMaterialTrail";

declare module "@react-three/fiber" {
  interface ThreeElements {
    vegasMaterial: ReactThreeFiber.Object3DNode<
      // @ts-expect-error Material type
      VegasMaterial,
      typeof VegasMaterial
    >;
    shaderMaterialChroma: ReactThreeFiber.Object3DNode<
      // @ts-expect-error Material type
      ShaderMaterialChroma,
      typeof ShaderMaterialChroma
    >;
    shaderMaterialEdge: ReactThreeFiber.Object3DNode<
      // @ts-expect-error Material type
      ShaderMaterialEdge,
      typeof ShaderMaterialEdge
    >;
    shaderMaterialTrail: ReactThreeFiber.Object3DNode<
      // @ts-expect-error Material type
      ShaderMaterialTrail,
      typeof ShaderMaterialTrail
    >;
  }
}
