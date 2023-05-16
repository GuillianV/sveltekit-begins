import { c as create_ssr_component, v as validate_component } from './index3-e904a6bd.js';
import { G as GetTraductions, H as H1 } from './H1-51d93d87.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(H1, "H1").$$render($$result, { innerText: GetTraductions(data, "titre") }, {}, {})}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d56521ae.js.map
