import{S as x,i as _,s as b,k as d,l,m as h,h as c,n as v,b as M,G as g,H as w,o as P}from"../chunks/index.137f5445.js";import{S,B as y,M as E,b as C,P as k,W as z,C as R}from"../chunks/three.module.c2ac7129.js";import{O as q}from"../chunks/OrbitControls.e9bb9833.js";function W(m){let t,n,i;return{c(){t=d("div"),n=d("div"),i=d("canvas"),this.h()},l(s){t=l(s,"DIV",{});var a=h(t);n=l(a,"DIV",{class:!0});var e=h(n);i=l(e,"CANVAS",{class:!0}),h(i).forEach(c),e.forEach(c),a.forEach(c),this.h()},h(){v(i,"class","webgl svelte-1xjiexi"),v(n,"class","app svelte-1xjiexi")},m(s,a){M(s,t,a),g(t,n),g(n,i)},p:w,i:w,o:w,d(s){s&&c(t)}}}function j(m){return P(()=>{const t=document.querySelector("canvas.webgl"),n=new S,i=new y(1,1,1),s=new E({color:16711680}),a=new C(i,s);n.add(a);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,o.aspect=e.width/e.height,o.updateProjectionMatrix(),r.setSize(e.width,e.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2))}),window.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():t.requestFullscreen()});const o=new k(75,e.width/e.height,.1,100);o.position.z=3,n.add(o);const p=new q(o,t);p.enableDamping=!0;const r=new z({canvas:t,alpha:!0});r.setSize(e.width,e.height),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new R,u=()=>{f.getElapsedTime(),p.update(),r.render(n,o),window.requestAnimationFrame(u)};u()}),[]}class F extends x{constructor(t){super(),_(this,t,j,W,b,{})}}export{F as component};