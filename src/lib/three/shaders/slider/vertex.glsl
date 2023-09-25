uniform vec2 uCenterPicture;
uniform vec2 uCenterCaroussel;
varying vec2 vUv;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position,1.0);
   
    
    
     modelPosition.x = sin(uv.x); //modelPosition.x*2.0 *cos( uv.x); //uCenter
        modelPosition.z = sin(uv.x);//modelPosition.z*2.0 *   cos( uv.x);

    
    vec4 viewPosition = viewMatrix * modelPosition;

    vec4 projectedPosition = projectionMatrix * viewPosition;

   

    gl_Position = projectedPosition;
    vUv = uv;
}