import { c as create_ssr_component, b as subscribe, v as validate_component } from './index3-db52095e.js';
import { p as page } from './stores-14e4c1d9.js';
import { H as H1 } from './H1-41a1d2c1.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-62vunb_START -->${$$result.title = `<title>SvelteKit Admin</title>`, ""}<!-- HEAD_svelte-62vunb_END -->`, ""}
  
  <nav>${!$page.data.user ? `<a href="/admin/login">Login</a>
      <a href="/admin/register">Register</a>` : ``}
  
    ${$page.data.user ? `${validate_component(H1, "H1").$$render(
    $$result,
    {
      innerText: "Welcome Home " + $page.data.user.name
    },
    {},
    {}
  )}
  
      <form action="/admin/logout" method="POST"><button type="submit">Log out</button></form>` : ``}</nav>
  
  <main>${slots.default ? slots.default({}) : ``}</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b21f4c31.js.map
