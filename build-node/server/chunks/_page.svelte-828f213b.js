import { c as create_ssr_component, b as add_attribute } from './index3-e904a6bd.js';

const css = {
  code: '@import url("/styles/reset.scss");@font-face{font-family:"BebasNeue";font-style:normal;font-weight:400;src:url("/fonts/BebasNeue.ttf");font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;src:url("/fonts/Comfortaa.ttf");font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"BebasNeue";--font-family-secondary:"Comfortaa";font-size:18px}canvas.svelte-98a0xt{width:100vw;height:100vh;display:block;position:fixed;top:0;left:0;background:rgb(74, 74, 74);background:radial-gradient(circle, rgb(74, 74, 74) 0%, rgb(14, 14, 14) 48%, rgb(0, 0, 0) 100%)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let el;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1p0pas8_START -->${$$result.title = `<title>Three.js</title>`, ""}<meta name="description" content="Three.js gltf app built with Svelte"><!-- HEAD_svelte-1p0pas8_END -->`, ""}

<canvas class="svelte-98a0xt"${add_attribute("this", el, 0)}></canvas>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-828f213b.js.map
