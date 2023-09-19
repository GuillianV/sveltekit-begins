import{S as h,i as W,s as _,k as c,l as g,m as u,h as l,n as p,b as q,G as z,H as m,o as B}from"../chunks/index.137f5445.js";import{S as E,aJ as F,aK as C,g as b,_ as I,U as P,b as M,P as T,W as D,C as j}from"../chunks/three.module.c2ac7129.js";import{O as G}from"../chunks/OrbitControls.e9bb9833.js";import{G as R}from"../chunks/lil-gui.esm.5b862306.js";var k=`uniform float uTime;\r
uniform float uBigWavesElevation;\r
uniform vec2 uBigWavesFrequency;\r
uniform float uBigWavesSpeed;\r
uniform float uSmallWavesElevation;\r
uniform float uSmallWavesFrequency;\r
uniform float uSmallWavesSpeed;\r
uniform float uSmallIterations;

varying float vElevation;

vec4 permute(vec4 x)\r
{\r
    return mod(((x*34.0)+1.0)*x, 289.0);\r
}\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
vec3 fade(vec3 t)\r
{\r
    return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

float cnoise(vec3 P)\r
{\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
    return 2.2 * n_xyz;\r
}

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position,1.0);\r
    float elevation =   sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) * \r
                        sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWavesSpeed) * \r
                        uBigWavesElevation;

    for(float i = 1.0; i <= uSmallIterations; i++)\r
    {\r
        elevation -= abs(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)) * uSmallWavesElevation / i);\r
    }

    modelPosition.y += elevation;\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r

    gl_Position = projectedPosition;

    
    vElevation = elevation;

}`,V=`uniform vec3 uDepthColor;\r
uniform vec3 uSurfaceColor;

varying float vElevation;

void main() {

    vec3 color = mix(uDepthColor,uSurfaceColor,vElevation * 5.0 + 0.5);\r
    gl_FragColor = vec4(color,1.0);\r
}`;function A(d){let a,t,o;return{c(){a=c("div"),t=c("div"),o=c("canvas"),this.h()},l(i){a=g(i,"DIV",{});var e=u(a);t=g(e,"DIV",{class:!0});var n=u(t);o=g(n,"CANVAS",{class:!0}),u(o).forEach(l),n.forEach(l),e.forEach(l),this.h()},h(){p(o,"class","webgl svelte-1xjiexi"),p(t,"class","app svelte-1xjiexi")},m(i,e){q(i,a,e),z(a,t),z(t,o)},p:m,i:m,o:m,d(i){i&&l(a)}}}function H(d){return B(()=>{const a=new R,t=document.querySelector("canvas.webgl"),o=new E,i=new F(2,64),e=new C({vertexShader:k,fragmentShader:V,transparent:!0,side:b,uniforms:{uTime:{type:"float",value:0},uBigWavesElevation:{type:"float",value:.2},uBigWavesFrequency:{type:"vec2",value:new I(3.2,1.5)},uBigWavesSpeed:{type:"float",value:1},uDepthColor:{type:"vec3",value:new P("#0000CF")},uSurfaceColor:{type:"vec3",value:new P("#aabaff")},uSmallWavesElevation:{value:.15},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.2},uSmallIterations:{value:4}}}),n=a.addFolder("Sea");n.add(e.uniforms.uBigWavesElevation,"value",0,2,.01).name("Big Wave elevation"),n.add(e.uniforms.uBigWavesFrequency.value,"x",0,10,.1).name("Big Wave frequency X"),n.add(e.uniforms.uBigWavesFrequency.value,"y",0,10,.1).name("Big Wave frequency Z"),n.add(e.uniforms.uBigWavesSpeed,"value",0,3,.01).name("Big Wave speed"),n.add(e.uniforms.uSmallWavesElevation,"value").min(0).max(1).step(.001).name("uSmallWavesElevation"),n.add(e.uniforms.uSmallWavesFrequency,"value").min(0).max(30).step(.001).name("uSmallWavesFrequency"),n.add(e.uniforms.uSmallWavesSpeed,"value").min(0).max(4).step(.001).name("uSmallWavesSpeed"),n.add(e.uniforms.uSmallIterations,"value").min(0).max(5).step(1).name("uSmallIterations");const f=new M(i,e);f.rotation.x=-Math.PI*.5,o.add(f);const r={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{r.width=window.innerWidth,r.height=window.innerHeight,v.aspect=r.width/r.height,v.updateProjectionMatrix(),s.setSize(r.width,r.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2))});const v=new T(75,r.width/r.height,.1,100);v.position.set(1,1,-8),o.add(v);const x=new G(v,t);x.enableDamping=!0;const s=new D({canvas:t});s.setSize(r.width,r.height),s.setPixelRatio(Math.min(window.devicePixelRatio,2));const w=new j,y=()=>{const S=w.getElapsedTime();e.uniforms.uTime.value=S,x.update(),s.render(o,v),window.requestAnimationFrame(y)};y()}),[]}class J extends h{constructor(a){super(),W(this,a,H,A,_,{})}}export{J as component};
