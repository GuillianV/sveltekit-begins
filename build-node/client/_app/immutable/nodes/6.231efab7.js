import{S as f,i as g,s as h,q as l,k as x,r as p,l as b,m as v,h as c,b as d,G as u,u as $,H as _,I as q}from"../chunks/index.137f5445.js";/* empty css                                                 */import"../chunks/index.32dea7b4.js";import{p as y}from"../chunks/stores.61b2e0c9.js";function A(o){let r,e,n,s=o[0].data.user+"",i,m;return{c(){r=l(`You are logged in Admin\r
\r
`),e=x("pre"),n=l("  "),i=l(s),m=l(`\r
`)},l(t){r=p(t,`You are logged in Admin\r
\r
`),e=b(t,"PRE",{});var a=v(e);n=p(a,"  "),i=p(a,s),m=p(a,`\r
`),a.forEach(c)},m(t,a){d(t,r,a),d(t,e,a),u(e,n),u(e,i),u(e,m)},p(t,[a]){a&1&&s!==(s=t[0].data.user+"")&&$(i,s)},i:_,o:_,d(t){t&&c(r),t&&c(e)}}}function E(o,r,e){let n;return q(o,y,s=>e(0,n=s)),console.log(n.data.user),[n]}class C extends f{constructor(r){super(),g(this,r,E,A,h,{})}}export{C as component};
