import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute } from './index3-ff90be27.js';
import { H as H1 } from './H1-0ca04c17.js';
import { t as t2 } from './index4-687c1742.js';
import './index2-93f70d3f.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}canvas.svelte-f395dx{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-5}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let el;
  $$result.css.add(css);
  $$unsubscribe_t();
  return `${validate_component(H1, "H1").$$render($$result, { innerText: $t("projects.titre") }, {}, {})}
<canvas class="svelte-f395dx"${add_attribute("this", el, 0)}></canvas>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ba8358e5.js.map
