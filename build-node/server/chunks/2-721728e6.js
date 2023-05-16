const load = async ({ fetch, locals }) => {
  let { traductions = {} } = locals;
  return traductions;
};

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_layout.svelte-f01274fb.js')).default;
const server_id = "src/routes/(portfolio)/[[langCode=lang]]/+layout.server.js";
const imports = ["_app/immutable/nodes/2.aee02922.js","_app/immutable/chunks/index.fc594a95.js","_app/immutable/chunks/stores.cbaa167a.js","_app/immutable/chunks/singletons.b51e0eef.js"];
const stylesheets = ["_app/immutable/assets/2.39e1434a.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-721728e6.js.map
