import { c as create_ssr_component, v as validate_component } from './index3-ff90be27.js';
import { H as H1 } from './H1-0ca04c17.js';
import './index4-687c1742.js';
import './index2-93f70d3f.js';

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
//# sourceMappingURL=_page.svelte-edc97b66.js.map
