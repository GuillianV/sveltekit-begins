import { t as traductions } from './traductions-1b45cc24.js';
import './index-36410280.js';

async function handle({ event, resolve }) {
  let { route, params, url } = event;
  let { id = "/" } = route;
  let { pathname = "/" } = url;
  if (id != null && id.includes("/(portfolio)/[[langCode=lang]]")) {
    let { langCode = "fr" } = event.params;
    let baseTrads = traductions[langCode];
    let { defaults = {} } = baseTrads;
    event.locals.traductions = Object.assign({}, defaults, baseTrads[pathname]);
  }
  return await resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-764f16cf.js.map
