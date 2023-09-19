import{S as B,i as L,s as q,k as P,l as x,m as M,h as f,n as F,b as D,G as R,H as S,o as H}from"../chunks/index.137f5445.js";import{S as O,P as V,W as K,L as U,I as $,U as T,K as C,aK as N,Q,O as X,C as Y}from"../chunks/three.module.c2ac7129.js";import{O as Z}from"../chunks/OrbitControls.e9bb9833.js";import{G as J}from"../chunks/lil-gui.esm.5b862306.js";var nn=`attribute float aScale;\r
attribute vec3 aRandomness;

uniform float uSize;\r
uniform float uTime;

varying vec3 vColor;

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position,1.0);

    
    float angle = atan(modelPosition.x,modelPosition.z);\r
    float distanceToCenter = length(modelPosition.xz); 
    float offsetAngle = (1.0 / distanceToCenter) * uTime * 0.2;\r
    angle += offsetAngle;

    modelPosition.x =  cos(angle) * distanceToCenter;\r
    modelPosition.z = sin(angle) * distanceToCenter;

     
    modelPosition.xyz += aRandomness;

    \r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;

  \r
    gl_PointSize = uSize * aScale;\r
    gl_Position = projectedPosition;\r
    gl_PointSize *= ( 1.0 / - viewPosition.z );\r

    vColor = color;\r
}`,en=`varying vec3 vColor;

void main() {

    
    \r
    
    
    
    \r

    
    float strength = distance(gl_PointCoord.x, 0.5) / 2.0;\r
    strength +=  distance(gl_PointCoord.y, 0.5) / 2.0;\r
    strength = 1.0 - strength;\r
    strength = pow(strength, 10.0);

    vec3 color = mix(vec3(0.0),vColor,strength);

    gl_FragColor = vec4(color,1.0);\r
    \r
}`;function on(_){let e,i,t;return{c(){e=P("div"),i=P("div"),t=P("canvas"),this.h()},l(n){e=x(n,"DIV",{});var o=M(e);i=x(o,"DIV",{class:!0});var l=M(i);t=x(l,"CANVAS",{class:!0}),M(t).forEach(f),l.forEach(f),o.forEach(f),this.h()},h(){F(t,"class","webgl svelte-1xjiexi"),F(i,"class","app svelte-1xjiexi")},m(n,o){D(n,e,o),R(e,i),R(i,t)},p:S,i:S,o:S,d(n){n&&f(e)}}}function tn(_){return H(()=>{const e=new J,i=document.querySelector("canvas.webgl"),t=new O,n={};n.count=2e5,n.size=.005,n.radius=5,n.branches=3,n.spin=1,n.randomness=.5,n.randomnessPower=3,n.insideColor="#ffa55c",n.outsideColor="#7aa0ff";let o=null,l=null,g=null;const r=()=>{g!==null&&(o.dispose(),l.dispose(),t.remove(g)),o=new $;const m=new Float32Array(n.count*3),w=new Float32Array(n.count*3),z=new Float32Array(n.count*1),p=new Float32Array(n.count*3),j=new T(n.insideColor),E=new T(n.outsideColor);for(let u=0;u<n.count;u++){const s=u*3,h=Math.random()*n.radius,A=u%n.branches/n.branches*Math.PI*2,I=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h,W=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h,k=Math.pow(Math.random(),n.randomnessPower)*(Math.random()<.5?1:-1)*n.randomness*h;m[s]=Math.cos(A)*h,m[s+1]=0,m[s+2]=Math.sin(A)*h,p[s]=I,p[s+1]=W,p[s+2]=k;const v=j.clone();v.lerp(E,h/n.radius),w[s]=v.r,w[s+1]=v.g,w[s+2]=v.b,z[u]=Math.random()}o.setAttribute("position",new C(m,3)),o.setAttribute("color",new C(w,3)),o.setAttribute("aScale",new C(z,1)),o.setAttribute("aRandomness",new C(p,3)),l=new N({depthWrite:!1,blending:Q,vertexColors:!0,vertexShader:nn,fragmentShader:en,uniforms:{uSize:{type:"float",value:10*c.getPixelRatio()},uTime:{type:"float",value:0}}}),g=new X(o,l),t.add(g)};e.add(n,"count").min(100).max(1e6).step(100).onFinishChange(r),e.add(n,"radius").min(.01).max(20).step(.01).onFinishChange(r),e.add(n,"branches").min(2).max(20).step(1).onFinishChange(r),e.add(n,"randomness").min(0).max(2).step(.001).onFinishChange(r),e.add(n,"randomnessPower").min(1).max(10).step(.001).onFinishChange(r),e.addColor(n,"insideColor").onFinishChange(r),e.addColor(n,"outsideColor").onFinishChange(r);const a={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight,d.aspect=a.width/a.height,d.updateProjectionMatrix(),c.setSize(a.width,a.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2))});const d=new V(75,a.width/a.height,.1,100);d.position.x=3,d.position.y=3,d.position.z=3,t.add(d);const b=new Z(d,i);b.enableDamping=!0;const c=new K({canvas:i});c.outputColorSpace=U,c.setSize(a.width,a.height),c.setPixelRatio(Math.min(window.devicePixelRatio,2));const G=new Y,y=()=>{const m=G.getElapsedTime();l.uniforms.uTime.value=m,b.update(),c.render(t,d),window.requestAnimationFrame(y)};r(),y()}),[]}class ln extends B{constructor(e){super(),L(this,e,tn,on,q,{})}}export{ln as component};
