import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component, h as null_to_empty, j as each } from './index3-ff90be27.js';
import { p as page } from './stores-dfa5a902.js';
import { t as t2, l as locale, b as locales } from './index4-687c1742.js';
import { s as setting_ldm_store } from './detailMode-37e578ea.js';
import './index2-93f70d3f.js';
import './prod-ssr-7cc47430.js';

const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}#navContainer.svelte-1ek81rl.svelte-1ek81rl{position:fixed;top:0;right:48px;width:16px;height:16px;margin:16px 16px;z-index:10}#navContainer.svelte-1ek81rl nav.svelte-1ek81rl{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#0b2027;clip-path:polygon(0 0, 30% 0, 30% 0, 0 0, 0 30%, 0 30%);backdrop-filter:brightness(3.5);box-shadow:3px 3px 10px -5px #000000;display:flex;justify-content:center;align-items:center;transition:all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)}#navContainer.svelte-1ek81rl nav.active.svelte-1ek81rl{clip-path:polygon(0 0, 30% 0, 100% 70%, 100% 100%, 70% 100%, 0 30%)}#navContainer.svelte-1ek81rl nav #linksContainer.svelte-1ek81rl{display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;width:100%;height:100%}#navContainer.svelte-1ek81rl nav #linksContainer span.svelte-1ek81rl{font-family:"Bebas Neue";font-size:3rem;line-height:2.8rem;letter-spacing:0.8rem;text-align:center;width:100%;transform:translateX(calc(var(--m) * (33vw - 7%) - 50vw))}#navContainer.svelte-1ek81rl nav #linksContainer span a.svelte-1ek81rl{color:#FFFBFC;margin:16px;text-decoration:none}#navContainer.svelte-1ek81rl nav #linksContainer span.active a.svelte-1ek81rl{border-bottom:8px solid #D30C7B}#navContainer.svelte-1ek81rl button.svelte-1ek81rl{display:flex;flex-direction:column;width:100%;height:100%;justify-content:center;cursor:pointer}#navContainer.svelte-1ek81rl button.active span.svelte-1ek81rl:nth-child(1){transform:rotate(45deg);width:100%;border-radius:8px;bottom:-10%}#navContainer.svelte-1ek81rl button.active span.svelte-1ek81rl:nth-child(2){opacity:0;width:0%}#navContainer.svelte-1ek81rl button.active span.svelte-1ek81rl:nth-child(3){transform:rotate(-45deg);width:100%;border-radius:8px;top:-10%}#navContainer.svelte-1ek81rl button span.svelte-1ek81rl{transition:all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1)}#navContainer.svelte-1ek81rl button span.svelte-1ek81rl:nth-child(1){width:100%;height:10%;background-color:#FFFBFC;border-top-left-radius:8px;display:block;position:relative;bottom:20%}#navContainer.svelte-1ek81rl button span.svelte-1ek81rl:nth-child(2){width:100%;height:10%;background-color:#FFFBFC;display:block;position:relative}#navContainer.svelte-1ek81rl button span.svelte-1ek81rl:nth-child(3){border-bottom-right-radius:8px;width:80%;height:10%;background-color:#FFFBFC;display:block;position:relative;top:20%}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { url } = $page;
  function setNavActive(pathname = null) {
    if (pathname == null || url == null) {
      return false;
    }
    return url.pathname == pathname;
  }
  $$result.css.add(css$1);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `<div id="navContainer" class="svelte-1ek81rl"><button name="toggle nav" class="${escape(null_to_empty(""), true) + " svelte-1ek81rl"}"><span class="svelte-1ek81rl"></span>
        <span class="svelte-1ek81rl"></span>
        <span class="svelte-1ek81rl"></span></button>
    
    <nav class="${escape(null_to_empty(""), true) + " svelte-1ek81rl"}"><div id="linksContainer" class="svelte-1ek81rl"><span class="${escape(null_to_empty(setNavActive("/about") ? "active" : ""), true) + " svelte-1ek81rl"}" style="--m:1"><a href="/about" class="svelte-1ek81rl">${escape($t("common.about"))}</a></span>

            <span class="${escape(null_to_empty(setNavActive("/") ? "active" : ""), true) + " svelte-1ek81rl"}" style="--m:2"><a href="/" class="svelte-1ek81rl">${escape($t("common.homepage"))}</a></span>

            <span class="${escape(null_to_empty(setNavActive("/projects") ? "active" : ""), true) + " svelte-1ek81rl"}" style="--m:3"><a href="/projects" class="svelte-1ek81rl">${escape($t("common.projects"))}</a></span></div></nav>
</div>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}button.svelte-1eszfc.svelte-1eszfc.svelte-1eszfc{position:fixed;top:0;right:0;width:16px;height:16px;margin:16px 16px;z-index:10;cursor:pointer}button.svelte-1eszfc img.svelte-1eszfc.svelte-1eszfc{width:100%;height:100%;filter:invert(1)}.switch.svelte-1eszfc.svelte-1eszfc.svelte-1eszfc{position:relative;display:inline-block;width:48px;height:16px}.switch.svelte-1eszfc input.svelte-1eszfc.svelte-1eszfc{opacity:0;width:0;height:0}.switch.svelte-1eszfc .slider.svelte-1eszfc.svelte-1eszfc{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#FFFBFC;-webkit-transition:0.4s;transition:0.4s}.switch.svelte-1eszfc .slider.svelte-1eszfc.svelte-1eszfc::before{position:absolute;content:"";height:12px;width:12px;left:2px;bottom:2px;background-color:#0B2027;-webkit-transition:0.4s;transition:0.4s}.switch.svelte-1eszfc .slider.round.svelte-1eszfc.svelte-1eszfc{border-radius:34px}.switch.svelte-1eszfc .slider.round.svelte-1eszfc.svelte-1eszfc::before{border-radius:50%}.switch.svelte-1eszfc input.svelte-1eszfc:checked+.slider.svelte-1eszfc{background-color:#FFFBFC}.switch.svelte-1eszfc input.svelte-1eszfc:focus+.slider.svelte-1eszfc{box-shadow:0 0 1px #FFFBFC}.switch.svelte-1eszfc input.svelte-1eszfc:checked+.slider.svelte-1eszfc:before{-webkit-transform:translateX(32px);-ms-transform:translateX(32px);transform:translateX(32px);background-color:#D30C7B}#popup-settings.svelte-1eszfc.svelte-1eszfc.svelte-1eszfc{position:fixed;top:0;right:0;background-color:rgba(11, 32, 39, 0.7);backdrop-filter:brightness(1.5) blur(4px);margin:32px;z-index:20;padding:16px;box-shadow:3px 3px 10px -5px #000000;opacity:0;transition:cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s all;border-top-right-radius:32px;border-bottom-left-radius:32px;pointer-events:none}#popup-settings.popup-open.svelte-1eszfc.svelte-1eszfc.svelte-1eszfc{pointer-events:all;opacity:1}#popup-settings.svelte-1eszfc table.svelte-1eszfc.svelte-1eszfc{border-collapse:unset;border-spacing:unset}#popup-settings.svelte-1eszfc table tr.svelte-1eszfc.svelte-1eszfc{padding:8px;color:#FFFBFC;font-family:"Comfortaa"}#popup-settings.svelte-1eszfc table tr td.svelte-1eszfc.svelte-1eszfc{padding:8px}#popup-settings.svelte-1eszfc table tr td select.svelte-1eszfc.svelte-1eszfc{border-radius:16px;text-align:center;border:none}',
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_setting_ldm_store;
  let $t, $$unsubscribe_t;
  let $$unsubscribe_locale;
  let $locales, $$unsubscribe_locales;
  $$unsubscribe_setting_ldm_store = subscribe(setting_ldm_store, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => value);
  $$unsubscribe_locales = subscribe(locales, (value) => $locales = value);
  let popupPanel;
  let switchElem;
  $$result.css.add(css);
  $$unsubscribe_setting_ldm_store();
  $$unsubscribe_t();
  $$unsubscribe_locale();
  $$unsubscribe_locales();
  return `<button title="Toggle settings button" name="settings" class="svelte-1eszfc"><img alt="parametres" src="/images/ecrou.png" class="svelte-1eszfc"></button>

<div id="popup-settings" class="${escape(null_to_empty(""), true) + " svelte-1eszfc"}"${add_attribute("this", popupPanel, 0)}><table class="svelte-1eszfc"><tr class="svelte-1eszfc"><td class="svelte-1eszfc">${escape($t("common.Setting_LDM"))}</td>
            <td class="svelte-1eszfc"><label class="switch svelte-1eszfc"><input type="checkbox" class="svelte-1eszfc"${add_attribute("this", switchElem, 0)}>
                    <span class="slider round svelte-1eszfc"></span></label></td></tr>
        <tr class="svelte-1eszfc"><td class="svelte-1eszfc">${escape($t("common.Setting_Language"))}</td>
            <td class="svelte-1eszfc"><select class="svelte-1eszfc">${each($locales, (value) => {
    return `<option${add_attribute("value", value, 0)}>${escape($t(`lang.${value}`))}</option>`;
  })}</select></td></tr></table>

</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
    ${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1mhw16t_START --><link rel="icon"${add_attribute("href", $page.data.icon || "/favicon.png", 0)}>${$$result.title = `<title>${escape($page.data.title || "Selte Begins")}</title>`, ""}<!-- HEAD_svelte-1mhw16t_END -->`, ""}

<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6ba51cc5.js.map
