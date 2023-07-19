import { c as create_ssr_component } from './index3-db52095e.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}#three-container.svelte-1hch0zq.svelte-1hch0zq{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;z-index:0;font-family:"Comfortaa";color:#03033E;background:linear-gradient(-45deg, #d02090, #7c1000, #ff4605, #ffd729, #f8a42f, #d3312e, #ea0000, #50010a);background-size:400% 400%;animation:svelte-1hch0zq-backgroundChange1 50s ease infinite}#three-container.svelte-1hch0zq h1.svelte-1hch0zq{position:relative;width:100%;text-align:center;font-size:3rem;padding:16px;z-index:10}@keyframes svelte-1hch0zq-backgroundChange1{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="three-container" class="svelte-1hch0zq"><h1 class="svelte-1hch0zq">Three.js journey</h1>

    ${slots.default ? slots.default({}) : ``}


</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b7e0c142.js.map
