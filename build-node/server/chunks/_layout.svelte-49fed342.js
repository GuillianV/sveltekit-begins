import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from './index3-ff90be27.js';
import { p as page } from './stores-dfa5a902.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-q9jxq7_START --><link rel="icon"${add_attribute("href", $page.data.icon || "%sveltekit.assets%/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-q9jxq7_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-49fed342.js.map
