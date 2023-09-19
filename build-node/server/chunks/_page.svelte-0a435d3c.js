import { c as create_ssr_component, b as subscribe, v as validate_component } from './index3-ff90be27.js';
import { H as H1 } from './H1-0ca04c17.js';
import { t as t2 } from './index4-687c1742.js';
import './index2-93f70d3f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${validate_component(H1, "H1").$$render($$result, { innerText: $t("about.titre") }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0a435d3c.js.map
