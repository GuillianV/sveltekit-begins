import { c as create_ssr_component, b as subscribe, v as validate_component } from './index3-67e14a90.js';
import { p as page } from './stores-2fa3e9be.js';
import { H as H1 } from './H1-ce626e39.js';

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
//# sourceMappingURL=_layout.svelte-9317d41f.js.map
