uniform float uTime;


varying vec2 vUv;
varying float vTime;


void main() {


    vec4 modelPosition = modelMatrix * vec4(position,1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;


    gl_Position = projectedPosition;

    vTime = uTime;
    vUv = uv;

}