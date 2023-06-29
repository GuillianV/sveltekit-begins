import { c as create_ssr_component, v as validate_component } from './index3-67e14a90.js';
import { H as H1 } from './H1-ce626e39.js';
import './index4-1150b7eb.js';
import './index2-3a51d7f3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(H1, "H1").$$render($$result, { innerText: "Login" }, {}, {})}


<h1>Login</h1>

<form action="?/login" method="POST"><div><label for="username">Username</label>
    <input id="username" name="username" type="text" required></div>

  <div><label for="password">Password</label>
    <input id="password" name="password" type="password" required></div>

  ${form?.invalid ? `<p class="error">Username and password is required.</p>` : ``}

  ${form?.credentials ? `<p class="error">You have entered the wrong credentials.</p>` : ``}

  <button type="submit">Log in</button></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-468184c1.js.map
