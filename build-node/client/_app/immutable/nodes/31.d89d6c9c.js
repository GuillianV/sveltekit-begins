import{S as C,i as G,s as y,k as p,l as f,m as g,h,n as S,b as E,G as M,H as m,o as P}from"../chunks/index.137f5445.js";import{S as R,T as A,A as D,D as z,aG as H,b as T,B as k,f as I,P as W,W as j,L as q,Q as B,c as F,d as V,C as O}from"../chunks/three.module.cb2436d1.js";import{O as $}from"../chunks/OrbitControls.872887f5.js";import{G as N}from"../chunks/GLTFLoader.4d8dea84.js";import{G as Q}from"../chunks/lil-gui.esm.5b862306.js";function U(u){let t,e,i;return{c(){t=p("div"),e=p("div"),i=p("canvas"),this.h()},l(o){t=f(o,"DIV",{});var r=g(t);e=f(r,"DIV",{class:!0});var s=g(e);i=f(s,"CANVAS",{class:!0}),g(i).forEach(h),s.forEach(h),r.forEach(h),this.h()},h(){S(i,"class","webgl svelte-1xjiexi"),S(e,"class","app svelte-1xjiexi")},m(o,r){E(o,t,r),M(t,e),M(e,i)},p:m,i:m,o:m,d(o){o&&h(t)}}}function J(u){return P(()=>{V.enabled=!1,new Q;const t=document.querySelector("canvas.webgl"),e=new R,i=new F(d=>{console.log("Everythig Loaded")},d=>{},d=>{console.log(d)});new A(i),new N(i).load("/models/RL/Car/scene.gltf",function(d){const l=d.scene;l.traverse(function(w){w.isMesh&&(w.material.emissiveIntensity=6,w.castShadow=!0)}),l.scale.set(.05,.05,.05),l.position.y=1,e.add(l)});const r=new D("#ffffff",.3);e.add(r);const s=new z("#ffffff",.8);s.castShadow=!0,s.position.set(0,10,0);const _=new H(s);e.add(s,_);const v=new T(new k(20,1,20),new I({color:16777215}));v.receiveShadow=!0,e.add(v);const a={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight,c.aspect=a.width/a.height,c.updateProjectionMatrix(),n.setSize(a.width,a.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2))});const c=new W(75,a.width/a.height,.1,100);c.position.z=3,e.add(c);const L=new $(c,t);L.enableDamping=!0;const n=new j({canvas:t,alpha:!0});n.outputColorSpace=q,n.setSize(a.width,a.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.toneMapping=B,n.toneMappingExposure=1;const b=new O,x=()=>{b.getElapsedTime(),L.update(),n.render(e,c),window.requestAnimationFrame(x)};x()}),[]}class te extends C{constructor(t){super(),G(this,t,J,U,y,{})}}export{te as component};