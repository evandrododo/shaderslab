import { ShaderMaterial } from "three";

export class BrisaMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
    void main()
    {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    void main()
    {
    float red = gl_FragCoord.x;
    float green = gl_FragCoord.y;
    float blue = gl_FragCoord.x;
        gl_FragColor = vec4(red, green, blue, 1.0);
    }
  `
  });
  }
}

