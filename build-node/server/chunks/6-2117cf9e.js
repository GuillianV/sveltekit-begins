import { e as error } from './index-36410280.js';

const load = async (loadEvent) => {
  const { fetch, params } = loadEvent;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + params.pokemonName);
  if (response.status != 200) {
    throw error(response.status, {
      message: "Pokemon name not found"
    });
  }
  let pokemon = await response.json();
  return {
    pokemon
  };
};
let ssr = true;
let csr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  load: load,
  ssr: ssr
});

const index = 6;
const component = async () => (await import('./_page.svelte-87f86224.js')).default;
const universal_id = "src/routes/pokemon/[pokemonName]/+page.js";
const imports = ["_app/immutable/nodes/6.ece38bdf.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.9d9ad1c9.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-2117cf9e.js.map
