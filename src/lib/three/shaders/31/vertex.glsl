
attribute float aScale;
attribute vec3 aRandomness;

uniform float uSize;
uniform float uTime;

varying vec3 vColor;

void main() {


    vec4 modelPosition = modelMatrix * vec4(position,1.0);

    //Spin
    float angle = atan(modelPosition.x,modelPosition.z);
    float distanceToCenter = length(modelPosition.xz); // distance(modelPosition.xz,vec2(0));
    float offsetAngle = (1.0 / distanceToCenter) * uTime * 0.2;
    angle += offsetAngle;

    modelPosition.x =  cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;

     // Randomness
    modelPosition.xyz += aRandomness;

    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

  
    gl_PointSize = uSize * aScale;
    gl_Position = projectedPosition;
    gl_PointSize *= ( 1.0 / - viewPosition.z );


    vColor = color;
} 