import { c as create_ssr_component, b as subscribe, e as escape } from './index3-db52095e.js';
import './index4-df635a58.js';
import { p as page } from './stores-14e4c1d9.js';
import './index2-fda56f3e.js';

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
//# sourceMappingURL=_page.svelte-249538a3.js.map
