import { c as create_ssr_component, d as subscribe, b as add_attribute, e as escape } from './index3-e904a6bd.js';
import { p as page } from './stores-ee31d206.js';

const css = {
  code: '@import url("/styles/reset.scss");@font-face{font-family:"BebasNeue";font-style:normal;font-weight:400;src:url("/fonts/BebasNeue.ttf");font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;src:url("/fonts/Comfortaa.ttf");font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"BebasNeue";--font-family-secondary:"Comfortaa";font-size:18px}.app.svelte-16rz7jc{background:#0B2027;background:radial-gradient(at center, #0B2027, #061418), url(https://grainy-gradients.vercel.app/noise.svg);background-repeat:no-repeat;width:100%;height:100%;min-height:100vh;min-width:100vw}.app.svelte-16rz7jc:after{content:"";background-image:url(/images/noise.png);background-repeat:repeat;pointer-events:none;width:100%;height:100%;z-index:9999;position:absolute;top:0}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1mhw16t_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-1mhw16t_END -->`, ""}

<div class="app svelte-16rz7jc"><main>${slots.default ? slots.default({}) : ``}</main>

</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-f01274fb.js.map
