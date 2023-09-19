import { l as locale, a as loadTranslations } from './index4-687c1742.js';
import './index2-93f70d3f.js';
import './index3-ff90be27.js';

const load = async ({ url }) => {
  const { pathname } = url;
  const defaultLocale = "fr";
  const initLocale = locale.get() || defaultLocale;
  await loadTranslations(initLocale, pathname);
  return {};
};

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_layout.svelte-6ba51cc5.js')).default;
const universal_id = "src/routes/(portfolio)/+layout.js";
const imports = ["_app/immutable/nodes/3.ae26351d.js","_app/immutable/chunks/index.32dea7b4.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.d60425e4.js","_app/immutable/chunks/index.137f5445.js","_app/immutable/chunks/stores.a906f7e6.js","_app/immutable/chunks/singletons.57a9acf1.js","_app/immutable/chunks/detailMode.3b881e8c.js"];
const stylesheets = ["_app/immutable/assets/3.fd2559d5.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=3-3f8f2e55.js.map
