import{H as y}from"../chunks/control.e7f5239e.js";import{S as w,i as b,s as P,k as f,q as _,a as E,l as d,m as S,r as h,h as m,c as j,K as q,n as k,b as c,E as g,J as p}from"../chunks/index.9d9ad1c9.js";function v(a,e){return new y(a,e)}new TextEncoder;const x=async a=>{try{const{fetch:e,params:o}=a,s=await e("https://pokeapi.co/api/v2/pokemon/"+o.pokemonName);if(s.status!=200)throw v(s.status,{message:"Pokemon name not found"});return{pokemon:await s.json()}}catch(e){throw v(e.status,{message:e.body.message})}},H="auto";let M=!0,O=!1;const I=Object.freeze(Object.defineProperty({__proto__:null,csr:O,load:x,prerender:H,ssr:M},Symbol.toStringTag,{value:"Module"}));function T(a){let e,o,s=a[0].name+"",i,n,r,u;return{c(){e=f("h1"),o=_("Pokemon "),i=_(s),n=E(),r=f("img"),this.h()},l(t){e=d(t,"H1",{});var l=S(e);o=h(l,"Pokemon "),i=h(l,s),l.forEach(m),n=j(t),r=d(t,"IMG",{src:!0,alt:!0}),this.h()},h(){q(r.src,u=a[0].sprites.front_default)||k(r,"src",u),k(r,"alt",a[0].name)},m(t,l){c(t,e,l),g(e,o),g(e,i),c(t,n,l),c(t,r,l)},p,i:p,o:p,d(t){t&&m(e),t&&m(n),t&&m(r)}}}function z(a,e,o){let{data:s}=e;const i=s.pokemon;return a.$$set=n=>{"data"in n&&o(1,s=n.data)},[i,s]}class J extends w{constructor(e){super(),b(this,e,z,T,P,{data:1})}}export{J as component,I as universal};