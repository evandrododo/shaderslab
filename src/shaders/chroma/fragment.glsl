uniform sampler2D map;
varying vec2 vUv;
uniform vec3 chromaKey;
uniform float threshold;
uniform float tolerance;

void main() {
    vec2 uv = vUv;

    vec4 camColor = texture2D(map, uv);
    
    // CHROMA KEY

    float d = distance(camColor.rgb, chromaKey);
    float edge0 = threshold * (1.0 - tolerance);
    float alpha = smoothstep(edge0, threshold, d);

    gl_FragColor = vec4(camColor.rgb, alpha);

}