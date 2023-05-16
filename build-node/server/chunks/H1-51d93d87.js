import { c as create_ssr_component, e as escape } from './index3-e904a6bd.js';

function GetTraductions(traductions, key) {
  return typeof traductions[key] != "undefined" ? traductions[key] : `Empty traduction ${key}`;
}
const css = {
  code: '@import url("/styles/reset.scss");@font-face{font-family:"BebasNeue";font-style:normal;font-weight:400;src:url("/fonts/BebasNeue.ttf");font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;src:url("/fonts/Comfortaa.ttf");font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"BebasNeue";--font-family-secondary:"Comfortaa";font-size:18px}h1.svelte-1paodon.svelte-1paodon{color:#FFFBFC;font-family:"BebasNeue";font-size:3rem;border-bottom:8px solid #D30C7B;width:fit-content;line-height:2.8rem;letter-spacing:0.8rem}h1.svelte-1paodon span.svelte-1paodon{color:#D30C7B;font-size:3.5rem;font-weight:700}',
  map: null
};
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { innerText = innerText.length <= 0 ? "Undefined" : innerText } = $$props;
  let capitalizedText = innerText.charAt(0);
  let otherText = innerText.slice(1);
  if ($$props.innerText === void 0 && $$bindings.innerText && innerText !== void 0)
    $$bindings.innerText(innerText);
  $$result.css.add(css);
  return `<h1 class="svelte-1paodon"><span class="svelte-1paodon">${escape(capitalizedText)}</span>${escape(otherText)}</h1>`;
});

export { GetTraductions as G, H1 as H };
//# sourceMappingURL=H1-51d93d87.js.map
