uniform float iTime;
uniform float opacity;
uniform float mouseX;
uniform float mouseY;
varying vec2 vUv;
uniform vec2 iResolution;

vec3 palette(in float t) {
    vec3 a = vec3(0.668, -0.132, 0.898);
    vec3 b = vec3(0.623, 1.418, 0.878);
    vec3 c = vec3(-2.237, -1.032, 2.198);
    vec3 d = vec3(-0.112, 0.468, -0.112);
    return a + b * cos(6.28318 * (c * t + d));
}

float ndot(vec2 a, vec2 b) {
    return a.x * b.x - a.y * b.y;
}
float sdRhombus(in vec2 p, in vec2 b) {
    p = abs(p);
    float h = clamp(ndot(b - 2.0 * p, b) / dot(b, b), -1.0, 1.0);
    float d = length(p - 0.7 * b * vec2(1.0 - h, 1.0 + h));
    return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);
}

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;

    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for(float i = 0.0; i < 3.0; i++) {
        uv *= 1.5;
        uv = fract(uv);
        uv -= 0.5;

        float d = sdRhombus(uv, vec2(0.5, 0.5));

        vec3 col = palette(sdRhombus(uv0, vec2(5, 5))+ i*.3 + iTime/4.);

        d = sin(d * 8.0 + iTime) / (8. + i);
        d = abs(d);

        d = pow(0.01 / d, 3.);

        finalColor += col * d;

    }
    gl_FragColor = vec4(finalColor, 1);
}