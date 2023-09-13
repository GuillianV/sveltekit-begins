
varying vec2 vUv;

void main() {


       //Light point
    float strength = 0.1 /  distance(vUv, vec2(0.5))-0.1;
    strength = strength > 0.1 ? strength : 0.0;
    gl_FragColor = vec4(strength,strength,strength,strength);
} 