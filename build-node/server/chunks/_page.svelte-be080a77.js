import { c as create_ssr_component, v as validate_component } from './index3-67e14a90.js';
import { H as H1 } from './H1-ce626e39.js';
import './index4-1150b7eb.js';
import './index2-3a51d7f3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(H1, "H1").$$render($$result, { innerText: "Register" }, {}, {})}
<form action="?/register" method="POST"><div><label for="username">Username</label>
    <input id="username" name="username" type="text" required></div>

  <div><label for="password">Password</label>
    <input id="password" name="password" type="password" required></div>

  ${form?.user ? `<p class="error">Username is taken.</p>` : ``}

  <button type="submit">Register</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-be080a77.js.map
