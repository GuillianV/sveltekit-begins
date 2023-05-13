import { c as create_ssr_component, d as subscribe, b as add_attribute, e as escape } from './index3-e904a6bd.js';
import { p as page } from './stores-ee31d206.js';

const css = {
  code: ".app.svelte-1j670qv{display:flex;flex-direction:column;min-height:100vh;background-color:antiquewhite}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1mhw16t_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-1mhw16t_END -->`, ""}

<div class="app svelte-1j670qv">LE giga layout
	<main>${slots.default ? slots.default({}) : ``}</main>

</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d722ed6a.js.map
