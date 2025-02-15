uniform sampler2D map;
varying vec2 vUv;
uniform vec2 iResolution;
uniform sampler2D previousFrames[15]; // N is the number of frames you want to accumulate
uniform float decayFactor;

void main() {
    vec2 fragCoord = vUv;
    vec4 currentColor = texture2D(map, (fragCoord));

    vec4 accumulatedColor = currentColor;

    vec4 previousColor0 = texture2D(previousFrames[0], vUv);
    vec4 previousColor1 = texture2D(previousFrames[1], vUv);
    vec4 previousColor2 = texture2D(previousFrames[2], vUv);
    vec4 previousColor3 = texture2D(previousFrames[3], vUv);
    vec4 previousColor4 = texture2D(previousFrames[4], vUv);
    vec4 previousColor5 = texture2D(previousFrames[5], vUv);
    vec4 previousColor6 = texture2D(previousFrames[6], vUv);
    vec4 previousColor7 = texture2D(previousFrames[7], vUv);
    vec4 previousColor8 = texture2D(previousFrames[8], vUv);
    vec4 previousColor9 = texture2D(previousFrames[9], vUv);
    vec4 previousColor10 = texture2D(previousFrames[10], vUv);
    vec4 previousColor11 = texture2D(previousFrames[11], vUv);
    vec4 previousColor12 = texture2D(previousFrames[12], vUv);
    vec4 previousColor13 = texture2D(previousFrames[13], vUv);
    vec4 previousColor14 = texture2D(previousFrames[14], vUv);
    
    accumulatedColor = previousColor0 + previousColor1 + previousColor2 + previousColor3 + previousColor4 + previousColor5 + previousColor6 + previousColor7 + previousColor8 + previousColor9 + previousColor10 + previousColor11 + previousColor12 + previousColor13 + previousColor14 + currentColor;

    gl_FragColor = accumulatedColor / 20.0;
}