uniform sampler2D tDiffuse;
uniform vec2 uMouses;
uniform float uTime;

uniform vec2 uResolution;
uniform vec2 uImageResolution;
uniform bool uMouseOut;

varying vec2 vUv;
float mouseFadeValue = 1.0;

void main() {

    // uMouseOut == true ? mouseFadeValue -= 0.1  : mouseFadeValue += 0.1 ;
    mouseFadeValue = clamp(mouseFadeValue,0.0,1.0);

    vec2 localRatio = vec2(min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0), min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0));

    vec2 localUv = vec2(vUv.x * localRatio.x + (1.0 - localRatio.x) * 0.5, vUv.y * localRatio.y + (1.0 - localRatio.y) * 0.5);

    float mouseX = uMouses.x;
    float mouseY = 1.0 - uMouses.y;

    float differenceX = vUv.x - mouseX  ;
    float differenceY =  vUv.y - mouseY ;
    float magnitude = sqrt(pow(differenceX ,2.0)+pow(differenceY,2.0));
    vec2 displacementUv = vec2(
        localUv.x + differenceX *  1.0 /  exp(2.0 +magnitude*7.0) * mouseFadeValue  ,   //+ cos(mouseX - 0.5) * 0.05 * uTime
        localUv.y + differenceY *   1.0 /   exp(2.0 +magnitude*7.0) * mouseFadeValue  //+ sin(mouseY -0.5) * 0.05 * uTime
        );

    vec4 color = texture2D(tDiffuse, displacementUv);
    gl_FragColor = vec4(color);

    // float colorR = mix(color.r,1.0,distanceToMouseX*distanceToMouseY);
    // float colorG = mix(color.g,1.0,distanceToMouseX*distanceToMouseY);
    // float colorB = mix(color.b,1.0,distanceToMouseX*distanceToMouseY);
}