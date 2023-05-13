import { c as create_ssr_component, v as validate_component } from './index3-e904a6bd.js';

const css = {
  code: "div.svelte-1sn11j7{width:300px;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { randomPhoto } = data;
  let { Component, photoData } = randomPhoto;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-1sn11j7">${validate_component(Component, "Component").$$render($$result, { photoData }, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e48feed9.js.map
