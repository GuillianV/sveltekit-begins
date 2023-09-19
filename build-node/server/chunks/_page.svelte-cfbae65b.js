import { c as create_ssr_component } from './index3-ff90be27.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}.app.svelte-16wdch4.svelte-16wdch4{display:flex;width:100%;height:100%;justify-content:center;align-items:center;z-index:5}.app.svelte-16wdch4 .container.svelte-16wdch4{position:relative;margin:10vw 10vh;width:100%;height:80vh;overflow:hidden;border-radius:15px}.app.svelte-16wdch4 .container canvas.webgl.svelte-16wdch4{z-index:2;position:absolute;top:0;left:0;width:100%;height:100%}.app.svelte-16wdch4 .container img.svelte-16wdch4{z-index:1;position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;object-fit:cover}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div><div class="app svelte-16wdch4"><div class="container svelte-16wdch4"><canvas class="webgl svelte-16wdch4"></canvas>
			<img src="/images/back.png" alt="" class="svelte-16wdch4"></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cfbae65b.js.map
