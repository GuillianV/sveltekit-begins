import { c as create_ssr_component, v as validate_component } from './index3-ff90be27.js';
import { H as H1 } from './H1-0ca04c17.js';
import './index4-687c1742.js';
import './index2-93f70d3f.js';

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
//# sourceMappingURL=_page.svelte-291c8102.js.map
