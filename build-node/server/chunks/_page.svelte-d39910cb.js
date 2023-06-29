import { c as create_ssr_component, b as subscribe, e as escape } from './index3-67e14a90.js';
import './index4-1150b7eb.js';
import { p as page } from './stores-2fa3e9be.js';
import './index2-3a51d7f3.js';

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
//# sourceMappingURL=_page.svelte-d39910cb.js.map
