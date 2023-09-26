uniform sampler2D uPicture;

varying vec2 vUv;

void main() {

    vec4 color = texture2D(uPicture, vUv);
    gl_FragColor = vec4(color);
}