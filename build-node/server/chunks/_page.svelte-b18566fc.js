import { c as create_ssr_component, v as validate_component } from './index3-e904a6bd.js';

const css = {
  code: '@import url("/styles/reset.scss");@font-face{font-family:"BebasNeue";font-style:normal;font-weight:400;src:url("/fonts/BebasNeue.ttf");font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;src:url("/fonts/Comfortaa.ttf");font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"BebasNeue";--font-family-secondary:"Comfortaa";font-size:18px}div.svelte-y4njyz{width:300px;height:auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { randomPhoto } = data;
  let { Component, photoData } = randomPhoto;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-y4njyz">${validate_component(Component, "Component").$$render($$result, { photoData }, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b18566fc.js.map
