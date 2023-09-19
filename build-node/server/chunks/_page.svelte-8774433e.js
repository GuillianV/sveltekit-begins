import { c as create_ssr_component, b as subscribe, e as escape } from './index3-ff90be27.js';
import './index4-687c1742.js';
import { p as page } from './stores-dfa5a902.js';
import './index2-93f70d3f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.data.user);
  $$unsubscribe_page();
  return `You are logged in Admin

<pre>  ${escape($page.data.user)}
</pre>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8774433e.js.map
