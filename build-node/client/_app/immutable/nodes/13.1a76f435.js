import{S as d,i as m,s as p,k as f,l as u,m as h,h as l,b as v,H as s,o as g}from"../chunks/index.137f5445.js";function _(n){let t;return{c(){t=f("div")},l(a){t=u(a,"DIV",{});var e=h(t);e.forEach(l)},m(a,e){v(a,t,e)},p:s,i:s,o:s,d(a){a&&l(t)}}}function b(n){return g(t=>{{let a=[],e=document.createElement("video");e.src="https://scrollyvideo.js.org/goldengate.mp4";const o=async(r,x)=>{const c=await createImageBitmap(e),i=a.length;a.push(c),select.append(new Option("Frame #"+(i+1),i)),!e.ended&&!stopped?e.requestVideoFrameCallback(o):select.disabled=!1};e.onended=r=>select.disabled=!1,e.requestVideoFrameCallback(o)}}),[]}class q extends d{constructor(t){super(),m(this,t,b,_,p,{})}}export{q as component};
