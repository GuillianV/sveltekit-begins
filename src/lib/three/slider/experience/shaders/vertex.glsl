#define M_PI 3.1415926535897932384626433832795

uniform float uTwist;
varying vec2 vUv;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    modelPosition.x += sin(uv.x * M_PI) * uTwist * modelPosition.x; //modelPosition.x*2.0 *cos( uv.x); //uCenter
    modelPosition.z += sin(uv.x * M_PI)* uTwist * modelPosition.z;//modelPosition.z*2.0 *   cos( uv.x);

    vec4 viewPosition = viewMatrix * modelPosition;

    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vUv = uv;
}