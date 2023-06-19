uniform float time;
uniform float opacity;
uniform float mouseX;
uniform float mouseY;
varying vec2 vUv;

void main()	{
    vec2 uv = vUv;
    float red = uv.x;
    float green = uv.y;
    float blue = 0.0; 
    
    gl_FragColor = vec4(red, green, blue, 1);
}