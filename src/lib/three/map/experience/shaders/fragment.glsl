uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform sampler2D uTexture;

varying float vElevation;
varying float vSeaElevation;
varying vec2 vUv;

void main() {


    vec4 textureColor = texture2D(uTexture,vUv);
    vec3 seaColor = mix(uSurfaceColor,uDepthColor,vElevation * -vSeaElevation * 5.0 + 0.5);


    //textureColor.rgb *= vElevation * vSeaElevation  * 2.0 + 1.0;
   // gl_FragColor = textureColor;
   // vec3 seaColorUpdated = uDepthColor;
    // seaColorUpdated.b = step(0.5, textureColor.b);
    // color = mix(color,textureColor.rgb,vSeaElevation * 5.0 + 0.5);
    gl_FragColor = vec4( vSeaElevation == 0.0 ? textureColor.rgb : seaColor ,1.0);
} 