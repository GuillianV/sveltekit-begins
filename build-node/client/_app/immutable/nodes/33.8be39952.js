import{S,i as C,s as M,k as v,l as m,m as h,h as u,n as P,b as q,G as _,H as w,o as E}from"../chunks/index.137f5445.js";import{S as F,T as R,i as j,K as D,aK as A,g as z,_ as G,b as L,P as U,W as k,C as V}from"../chunks/three.module.c2ac7129.js";import{O as W}from"../chunks/OrbitControls.e9bb9833.js";import{G as H}from"../chunks/lil-gui.esm.5b862306.js";var I=`uniform vec2 uFrequency;\r
uniform float uTime;

attribute float aRandom;

varying float vRandom;\r
varying float vElevation;\r
varying vec2 vUv;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position,1.0);

    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;\r
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;

    modelPosition.z += elevation;\r
    \r

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r

    gl_Position = projectedPosition;

    vElevation = elevation;\r
    vUv = uv;\r
    
}`,K=`uniform sampler2D uTexture;

varying float vRandom;\r
varying vec2 vUv;\r
varying float vElevation;\r

void main() {

    vec4 textureColor = texture2D(uTexture,vUv);\r
    textureColor.rgb *= vElevation  * 2.0 + 1.0;\r
    gl_FragColor = textureColor;\r
}`;function O(f){let e,t,o;return{c(){e=v("div"),t=v("div"),o=v("canvas"),this.h()},l(a){e=m(a,"DIV",{});var r=h(e);t=m(r,"DIV",{class:!0});var i=h(t);o=m(i,"CANVAS",{class:!0}),h(o).forEach(u),i.forEach(u),r.forEach(u),this.h()},h(){P(o,"class","webgl svelte-1xjiexi"),P(t,"class","app svelte-1xjiexi")},m(a,r){q(a,e,r),_(e,t),_(t,o)},p:w,i:w,o:w,d(a){a&&u(e)}}}function $(f){return E(()=>{const e=new H,t=document.querySelector("canvas.webgl"),o=new F,r=new R().load("/three/journey/28/textures/flag-french.jpg"),i=new j(1,1,32,32),p=i.attributes.position.count,g=new Float32Array(p);for(let c=0;c<p;c++)g[c]=Math.random();i.setAttribute("aRandom",new D(g,1)),console.log(i);const d=new A({vertexShader:I,fragmentShader:K,transparent:!0,side:z,uniforms:{uFrequency:{type:"vec2",value:new G(10,5)},uTime:{type:"float",value:0},uTexture:{type:"sampler2D",value:r}}});e.add(d.uniforms.uFrequency.value,"x",0,20,.001),e.add(d.uniforms.uFrequency.value,"y",0,20,.001);const b=new L(i,d);o.add(b);const n={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{n.width=window.innerWidth,n.height=window.innerHeight,s.aspect=n.width/n.height,s.updateProjectionMatrix(),l.setSize(n.width,n.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2))});const s=new U(75,n.width/n.height,.1,100);s.position.set(.25,-.25,1),o.add(s);const x=new W(s,t);x.enableDamping=!0;const l=new k({canvas:t});l.setSize(n.width,n.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2));const T=new V,y=()=>{const c=T.getElapsedTime();d.uniforms.uTime.value=c,x.update(),l.render(o,s),window.requestAnimationFrame(y)};y()}),[]}class X extends S{constructor(e){super(),C(this,e,$,O,M,{})}}export{X as component};
