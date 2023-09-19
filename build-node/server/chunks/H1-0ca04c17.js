import { c as create_ssr_component, e as escape } from './index3-ff90be27.js';

/* empty css                                  */const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}h1.svelte-17xjmla{color:#FFFBFC;font-family:"Bebas Neue";font-size:3rem;border-bottom:8px solid #D30C7B;width:fit-content;line-height:2.8rem;letter-spacing:0.8rem;margin:16px}',
  map: null
};
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { innerText = innerText.length <= 0 ? "Undefined" : innerText } = $$props;
  if ($$props.innerText === void 0 && $$bindings.innerText && innerText !== void 0)
    $$bindings.innerText(innerText);
  $$result.css.add(css);
  return `<h1 class="svelte-17xjmla">${escape(innerText)}</h1>`;
});

export { H1 as H };
//# sourceMappingURL=H1-0ca04c17.js.map
