import{S as q,i as H,s as T,k as L,l as z,m as D,h,n as A,b as f,H as k,o as W,w as O,y as B,a as E,q as y,e as Y,z as C,c as x,r as S,A as N,G as _,u as U,g as w,d as G,f as F,B as V,I as X,v as I}from"../chunks/index.137f5445.js";import{s as J}from"../chunks/detailMode.3b881e8c.js";import{H as R}from"../chunks/H1.3d9f7839.js";import{S as Z,P as K,B as Q,D as tt,W as et}from"../chunks/three.module.fb1d7e0c.js";import{l as it}from"../chunks/SplineLoader.f33477e3.js";import{t as st}from"../chunks/index.32dea7b4.js";let nt=!0,rt=!0;const at=!0,vt=Object.freeze(Object.defineProperty({__proto__:null,csr:nt,prerender:at,ssr:rt},Symbol.toStringTag,{value:"Module"}));class ot{constructor(t){this.width=100,this.height=100,typeof t=="object"&&(this.width=t.width??this.width,this.height=t.height??this.height),!(typeof window>"u")&&(this.isDragging=!1,this.scene=new Z,this.camera=new K(75,this.width/this.height,.1,1e3),this.camera.position.z=400,this.geometry=new Q,this.directionalLight=new tt(2960946,3.7),this.directionalLight.position.set(-150,200,200).normalize(),this.scene.add(this.directionalLight),this.renderer=null,this.starnight=null,this.onLoadModel(),window.addEventListener("mousedown",this.onMouseDown.bind(this)),window.addEventListener("mouseup",this.onMouseUp.bind(this)),window.addEventListener("resize",this.resize),window.addEventListener("mousemove",s=>{this.isDragging&&this.starnight!=null&&(this.mouseX=s.clientX,this.mouseY=s.clientY)}))}async onLoadModel(){self=this,this.loader=new it,this.loader.load("https://prod.spline.design/6JqM5YunTZGiztNg/scene.splinecode",t=>{self.starnight=t,self.scene.add(self.starnight)})}onMouseDown(t){this.isDragging=!0,this.mouseX=t.clientX,this.mouseY=t.clientY}onMouseUp(t){this.isDragging=!1}resize(){this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}animate(){requestAnimationFrame(()=>{this.animate()}),this.starnight!=null&&(this.isDragging?(this.starnight.rotation.y+=((this.mouseX??0)-this.width/2)*5e-5,this.starnight.rotation.x+=((this.mouseY??0)-this.height/2)*5e-5):this.starnight.rotation.y+=.001,this.renderer.render(this.scene,this.camera))}createScene(t){this.renderer=new et({antialias:!0,canvas:t,alpha:!0}),this.resize(),this.animate()}}function ht(a){let t;return{c(){t=L("canvas"),this.h()},l(s){t=z(s,"CANVAS",{class:!0}),D(t).forEach(h),this.h()},h(){A(t,"class","svelte-f395dx")},m(s,i){f(s,t,i),a[1](t)},p:k,i:k,o:k,d(s){s&&h(t),a[1](null)}}}function lt(a,t,s){let i;W(()=>{l()});async function l(){new ot({width:window.innerWidth,height:window.innerHeight}).createScene(i)}function o(c){O[c?"unshift":"push"](()=>{i=c,s(0,i)})}return[i,o]}class ct extends q{constructor(t){super(),H(this,t,lt,ht,T,{})}}function j(a){let t,s;return t=new ct({}),{c(){B(t.$$.fragment)},l(i){C(t.$$.fragment,i)},m(i,l){N(t,i,l),s=!0},i(i){s||(w(t.$$.fragment,i),s=!0)},o(i){G(t.$$.fragment,i),s=!1},d(i){V(t,i)}}}function ut(a){let t,s,i,l,o,c,d=a[0]("home.intro")+"",v,$,u,M,b,m,p;t=new R({props:{innerText:a[0]("home.titre")}});let n=a[1]>0&&j();return{c(){B(t.$$.fragment),s=E(),i=L("p"),l=y("Visit "),o=L("a"),c=y("kit.svelte.dev"),v=y(d),$=E(),u=L("a"),M=y("a propos"),b=E(),n&&n.c(),m=Y(),this.h()},l(e){C(t.$$.fragment,e),s=x(e),i=z(e,"P",{});var r=D(i);l=S(r,"Visit "),o=z(r,"A",{href:!0});var g=D(o);c=S(g,"kit.svelte.dev"),g.forEach(h),v=S(r,d),r.forEach(h),$=x(e),u=z(e,"A",{href:!0});var P=D(u);M=S(P,"a propos"),P.forEach(h),b=x(e),n&&n.l(e),m=Y(),this.h()},h(){A(o,"href","https://kit.svelte.dev"),A(u,"href","/about")},m(e,r){N(t,e,r),f(e,s,r),f(e,i,r),_(i,l),_(i,o),_(o,c),_(i,v),f(e,$,r),f(e,u,r),_(u,M),f(e,b,r),n&&n.m(e,r),f(e,m,r),p=!0},p(e,[r]){const g={};r&1&&(g.innerText=e[0]("home.titre")),t.$set(g),(!p||r&1)&&d!==(d=e[0]("home.intro")+"")&&U(v,d),e[1]>0?n?r&2&&w(n,1):(n=j(),n.c(),w(n,1),n.m(m.parentNode,m)):n&&(I(),G(n,1,1,()=>{n=null}),F())},i(e){p||(w(t.$$.fragment,e),w(n),p=!0)},o(e){G(t.$$.fragment,e),G(n),p=!1},d(e){V(t,e),e&&h(s),e&&h(i),e&&h($),e&&h(u),e&&h(b),n&&n.d(e),e&&h(m)}}}function ft(a,t,s){let i,l;return X(a,st,o=>s(0,i=o)),X(a,J,o=>s(1,l=o)),[i,l]}class $t extends q{constructor(t){super(),H(this,t,ft,ut,T,{})}}export{$t as component,vt as universal};
