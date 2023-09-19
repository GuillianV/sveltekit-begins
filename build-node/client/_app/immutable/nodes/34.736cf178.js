import{S as p,i as P,s as _,k as v,l as d,m as l,h as s,n as y,b as z,G as h,H as x,o as C}from"../chunks/index.137f5445.js";import{S,B as b,aK as T,g as M,b as j,P as k,W as U,C as E}from"../chunks/three.module.c2ac7129.js";import{O as G}from"../chunks/OrbitControls.e9bb9833.js";import{G as R}from"../chunks/lil-gui.esm.5b862306.js";var D=`uniform float uTime;\r

varying vec2 vUv;\r
varying float vTime;\r

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position,1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r

    gl_Position = projectedPosition;

    vTime = uTime;\r
    vUv = uv;

}`,W=`varying vec2 vUv;\r
varying float vTime;\r

float random(vec2 st)\r
{\r
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\r
}

vec2 rotate(vec2 uv, float rotation, vec2 mid)\r
{\r
    return vec2(\r
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,\r
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y\r
    );\r
}

vec2 fade(vec2 t)\r
{\r
    return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

vec4 permute(vec4 x)\r
{\r
    return mod(((x*34.0)+1.0)*x, 289.0);\r
}

float cnoise(vec2 P)\r
{\r
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\r
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\r
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;\r
    vec4 iy = Pi.yyww;\r
    vec4 fx = Pf.xzxz;\r
    vec4 fy = Pf.yyww;\r
    vec4 i = permute(permute(ix) + iy);\r
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;\r
    vec4 tx = floor(gx + 0.5);\r
    gx = gx - tx;\r
    vec2 g00 = vec2(gx.x,gy.x);\r
    vec2 g10 = vec2(gx.y,gy.y);\r
    vec2 g01 = vec2(gx.z,gy.z);\r
    vec2 g11 = vec2(gx.w,gy.w);\r
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\r
    g00 *= norm.x;\r
    g01 *= norm.y;\r
    g10 *= norm.z;\r
    g11 *= norm.w;\r
    float n00 = dot(g00, vec2(fx.x, fy.x));\r
    float n10 = dot(g10, vec2(fx.y, fy.y));\r
    float n01 = dot(g01, vec2(fx.z, fy.z));\r
    float n11 = dot(g11, vec2(fx.w, fy.w));\r
    vec2 fade_xy = fade(Pf.xy);\r
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\r
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\r
    return 2.3 * n_xy;\r
}\r

void main() {

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    
    

    
    

    \r

    
    

    
    
    
    
    
    \r

    
    
    
    
    
    \r

    
 \r
    \r

    
    

    
    \r

    
    float strength =  step(0.8, sin(cnoise(vUv * 10.0 ) * 20.0 + vTime));\r
    vec3 blackColor = vec3(0.0);\r
    vec3 uvColor = vec3(vUv, 1.0);\r
    vec3 mixedColor = mix(blackColor, uvColor, strength);\r
    gl_FragColor = vec4(mixedColor, strength);\r
}`;function q(m){let e,t,i;return{c(){e=v("div"),t=v("div"),i=v("canvas"),this.h()},l(r){e=d(r,"DIV",{});var o=l(e);t=d(o,"DIV",{class:!0});var n=l(t);i=d(n,"CANVAS",{class:!0}),l(i).forEach(s),n.forEach(s),o.forEach(s),this.h()},h(){y(i,"class","webgl svelte-1xjiexi"),y(t,"class","app svelte-1xjiexi")},m(r,o){z(r,e,o),h(e,t),h(t,i)},p:x,i:x,o:x,d(r){r&&s(e)}}}function A(m){return C(()=>{new R;const e=document.querySelector("canvas.webgl"),t=new S,i=new b(1,1,1,32,32,32),r=new T({vertexShader:D,fragmentShader:W,transparent:!0,side:M,uniforms:{uTime:{type:"float",value:0}}}),o=new j(i,r);o.scale.set(10,10,10),t.add(o);const n={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,a.aspect=n.width/n.height,a.updateProjectionMatrix(),c.setSize(n.width,n.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2))});const a=new k(75,n.width/n.height,.1,100);a.position.set(.25,-.25,1),t.add(a);const g=new G(a,e);g.enableDamping=!0;const c=new U({canvas:e});c.setSize(n.width,n.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const u=new E,f=()=>{g.update();const w=u.getElapsedTime();r.uniforms.uTime.value=w,c.render(t,a),window.requestAnimationFrame(f)};f()}),[]}class F extends p{constructor(e){super(),P(this,e,A,q,_,{})}}export{F as component};
