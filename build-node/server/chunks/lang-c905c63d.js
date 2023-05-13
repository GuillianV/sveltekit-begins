import { g as getValidLangs } from './traductions2-c9c39e1e.js';
import './traductions-3068eae5.js';

function match(param) {
  let valid = RegExp("^[a-z]{2}$").test(param);
  if (!valid)
    return false;
  if (!getValidLangs(param))
    return false;
  return valid;
}

export { match };
//# sourceMappingURL=lang-c905c63d.js.map
