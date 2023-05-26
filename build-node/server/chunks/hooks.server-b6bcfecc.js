import { t as traductions } from './traductions-a2e5b44f.js';
import './index-36410280.js';

async function handle({ event, resolve }) {
  let { route, params, url } = event;
  let { id = "/" } = route;
  if (id != null && id.includes("/(portfolio)/[[langCode=lang]]")) {
    let { langCode = "fr" } = event.params;
    let baseTrads = traductions[langCode];
    let { defaults = {} } = baseTrads;
    event.locals.traductions = defaults;
  }
  return await resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-b6bcfecc.js.map
