import{S as V,i as k,s as C,k as p,a as I,q,l as _,m,c as w,r as S,h as d,n as c,M as j,b as M,G as l,H as y,y as z,z as G,A as H,g as N,d as O,B as A}from"../chunks/index.137f5445.js";function B(a){let t,e,s,n,o,r,i,u,D,v,$;return{c(){t=p("div"),e=p("img"),n=I(),o=p("div"),r=p("div"),i=p("h1"),u=q(a[2]),D=I(),v=p("p"),$=q(a[3]),this.h()},l(f){t=_(f,"DIV",{class:!0,id:!0});var h=m(t);e=_(h,"IMG",{id:!0,src:!0,alt:!0,class:!0}),n=w(h),o=_(h,"DIV",{class:!0});var E=m(o);r=_(E,"DIV",{class:!0});var g=m(r);i=_(g,"H1",{});var P=m(i);u=S(P,a[2]),P.forEach(d),D=w(g),v=_(g,"P",{});var b=m(v);$=S(b,a[3]),b.forEach(d),g.forEach(d),E.forEach(d),h.forEach(d),this.h()},h(){c(e,"id","img"),j(e.src,s=a[1])||c(e,"src",s),c(e,"alt",a[2]),c(e,"class","svelte-ptmxso"),c(r,"class","description"),c(o,"class","description-wrapper"),c(t,"class","container svelte-ptmxso"),c(t,"id","photo-"+a[0])},m(f,h){M(f,t,h),l(t,e),l(t,n),l(t,o),l(o,r),l(r,i),l(i,u),l(r,D),l(r,v),l(v,$)},p:y,i:y,o:y,d(f){f&&d(t)}}}function T(a,t,e){let{photoData:s}=t,{id:n="unknown"}=s.id,{regular:o="unknown"}=s.urls,{alt_description:r="No alternate description"}=s,{description:i="No description"}=s;return a.$$set=u=>{"photoData"in u&&e(4,s=u.photoData)},[n,o,r,i,s]}class x extends V{constructor(t){super(),k(this,t,T,B,C,{photoData:4})}}const F=async a=>{const{data:t}=a;return{title:t.alt_description,icon:t.urls.thumb,randomPhoto:{photoData:t,Component:x}}},Q=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function J(a){let t,e,s;return e=new a[0]({props:{photoData:a[1]}}),{c(){t=p("div"),z(e.$$.fragment),this.h()},l(n){t=_(n,"DIV",{class:!0});var o=m(t);G(e.$$.fragment,o),o.forEach(d),this.h()},h(){c(t,"class","svelte-1qhm3ih")},m(n,o){M(n,t,o),H(e,t,null),s=!0},p:y,i(n){s||(N(e.$$.fragment,n),s=!0)},o(n){O(e.$$.fragment,n),s=!1},d(n){n&&d(t),A(e)}}}function K(a,t,e){let{data:s}=t,{randomPhoto:n}=s,{Component:o,photoData:r}=n;return a.$$set=i=>{"data"in i&&e(2,s=i.data)},[o,r,s]}class R extends V{constructor(t){super(),k(this,t,K,J,C,{data:2})}}export{R as component,Q as universal};