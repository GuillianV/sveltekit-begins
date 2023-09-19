import { e as error } from './index-39e97e00.js';

const load = async (loadEvent) => {
  try {
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
  } catch (e) {
    throw error(e.status, {
      message: e.body.message
    });
  }
};
const prerender = "auto";
let ssr = true;
let csr = false;

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  csr: csr,
  load: load,
  prerender: prerender,
  ssr: ssr
});

const index = 15;
const component = async () => (await import('./_page.svelte-9607cf43.js')).default;
const universal_id = "src/routes/(tests)/pokemon/[pokemonName]/+page.js";
const imports = ["_app/immutable/nodes/15.7db0f7e4.js","_app/immutable/chunks/index.2defaa64.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/chunks/index.137f5445.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=15-5e116b81.js.map
