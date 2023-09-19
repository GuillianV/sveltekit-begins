import { r as redirect } from './index-39e97e00.js';
import 'bcrypt';
import './index5-21780dd4.js';
import '@prisma/client';

const load = async (serverloadEvent) => {
  let { locals } = serverloadEvent;
  if (!locals.user) {
    throw redirect(302, "/admin/login");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-8774433e.js')).default;
const server_id = "src/routes/(admin)/admin/home/+page.server.js";
const imports = ["_app/immutable/nodes/6.5418c68b.js","_app/immutable/chunks/index.137f5445.js","_app/immutable/chunks/index.32dea7b4.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.d60425e4.js","_app/immutable/chunks/stores.a906f7e6.js","_app/immutable/chunks/singletons.57a9acf1.js"];
const stylesheets = ["_app/immutable/assets/H1.bb193338.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-8385378f.js.map
