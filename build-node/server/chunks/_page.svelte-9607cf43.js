import { c as create_ssr_component, e as escape, d as add_attribute } from './index3-ff90be27.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pokemon = data.pokemon;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Pokemon ${escape(pokemon.name)}</h1>
<img${add_attribute("src", pokemon.sprites.front_default, 0)}${add_attribute("alt", pokemon.name, 0)}>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9607cf43.js.map
