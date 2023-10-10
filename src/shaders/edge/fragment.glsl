uniform sampler2D	map;
varying vec2 vUv;
uniform vec2 iResolution;
uniform float distH;
uniform float intensity;

void main() {
    vec2 fragCoord = vUv;
// I suggest playing around with this value
    float h = distH;
    
    vec4 camColor = texture2D(map, fragCoord);
    // convert from [0,iResolution] to [-1, 1]
    
    vec4 o = texture2D(map, (fragCoord + vec2( 0, 0)));
    vec4 n = texture2D(map, (fragCoord + vec2( 0, h)/iResolution.xy));
    // vec4 n = texture2D(map, (fragCoord + vec2( 0, h))/iResolution.xy);
    vec4 e = texture2D(map, (fragCoord + vec2( h, 0)/iResolution.xy));
    vec4 s = texture2D(map, (fragCoord + vec2( 0,-h)/iResolution.xy));
    vec4 w = texture2D(map, (fragCoord + vec2(-h, 0)/iResolution.xy));
    
    vec4 dy = (n - s)*.5;
    vec4 dx = (e - w)*.5;
    
    vec4 edge = sqrt(dx*dx + dy*dy);
    vec4 angle = atan(dy, dx);
   
   
    // Below is another way to make an edge detector, 
    // It is invariant under intensity-scalings of the image
    // and linear illumination differences.
    // This should make it more "human-sight" like
   
    // vec4 laplacian = n + e + s + w - 4.0 * o;
    // vec3 fragColor = abs(laplacian.xyz/o.xyz) * 1.0;
    gl_FragColor = vec4(edge.xyz * intensity, 1.0);
}