import { c as create_ssr_component, v as validate_component } from './index3-db52095e.js';
import { H as H1 } from './H1-41a1d2c1.js';
import './index4-df635a58.js';
import './index2-fda56f3e.js';

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
//# sourceMappingURL=_page.svelte-4275b593.js.map
