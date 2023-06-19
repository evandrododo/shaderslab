uniform float time;
uniform float opacity;
uniform float mouseX;
uniform float mouseY;
varying vec2 vUv;

void main()	{
    float red = 1.0;
    float green = 0.0;
    float blue = 0.0; 
    
    gl_FragColor = vec4(red, green, blue, 1);
}