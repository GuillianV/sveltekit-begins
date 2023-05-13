import { t as traductions } from './traductions-3068eae5.js';

let actualLang = "fr";
let validLangs = Object.keys(traductions);
function getValidLangs(lang) {
  if (!validLangs.includes(lang))
    return false;
  actualLang = lang;
  return true;
}
function getTraduction(key) {
  let actualLangTranslation = traductions[actualLang];
  if (actualLangTranslation == null)
    throw new Error("Lang not found");
  let translation = actualLangTranslation[key];
  if (translation == null)
    throw new Error("Translation not found");
  return translation;
}

export { getTraduction as a, getValidLangs as g };
//# sourceMappingURL=traductions2-c9c39e1e.js.map
