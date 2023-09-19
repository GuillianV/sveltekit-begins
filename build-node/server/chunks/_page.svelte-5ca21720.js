import { c as create_ssr_component, d as add_attribute } from './index3-ff90be27.js';
import '@googlemaps/three';
import 'stats.js';

const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa&display=swap");@import url("/styles/reset.scss");@font-face{font-family:"Bebas Neue";font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:"Comfortaa";font-style:normal;font-weight:400;font-display:swap}:root{--color-primary:#D30C7B;--color-light:#FFFBFC;--color-darkblue:#0B2027;--font-family-main:"Bebas Neue";--font-family-secondary:"Comfortaa";font-size:18px}.app.svelte-tlvewy.svelte-tlvewy{display:flex;width:100%;height:100%;justify-content:center;align-items:center;font-family:"Comfortaa";color:#fff;z-index:5}.app.svelte-tlvewy canvas.svelte-tlvewy{position:fixed;z-index:3;top:0}.app.svelte-tlvewy .top.svelte-tlvewy{top:0;z-index:5;display:block;position:absolute;background-color:rgb(81, 139, 81);height:100vh;width:100%}.app.svelte-tlvewy .top2.svelte-tlvewy{top:-50%;z-index:1;display:block;position:fixed;background-color:rgb(72, 116, 72);height:150vh;width:100%}.app.svelte-tlvewy .popup.svelte-tlvewy{transition:all ease-in-out 0.3s;opacity:1;z-index:999;padding:32px;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:50%;height:fit-content;border-radius:15px;background:rgba(255, 255, 255, 0.1);box-shadow:20px 20px 50px rgba(0, 0, 0, 0.2);background:rgba(255, 255, 255, 0.1);border-top:1px solid rgba(255, 255, 255, 0.5);border-left:1px solid rgba(255, 255, 255, 0.5);backdrop-filter:blur(4px) brightness(1.3)}.app.svelte-tlvewy .popup.hide.svelte-tlvewy{pointer-events:none;opacity:0}.app.svelte-tlvewy .popup .infos.svelte-tlvewy{display:flex;justify-content:end;align-items:end}.app.svelte-tlvewy .popup .infos .cross.svelte-tlvewy{position:relative;cursor:pointer;width:50px;height:50px}.app.svelte-tlvewy .popup .infos .cross span.svelte-tlvewy{display:block;position:absolute;width:50px;height:2px;background-color:#fff;top:50%}.app.svelte-tlvewy .popup .infos .cross .svelte-tlvewy:nth-child(1){transform:rotate(45deg)}.app.svelte-tlvewy .popup .infos .cross .svelte-tlvewy:nth-child(2){transform:rotate(-45deg)}.app.svelte-tlvewy .popup h1.svelte-tlvewy{font-family:"Bebas Neue";font-size:3rem}.app.svelte-tlvewy .popup img.svelte-tlvewy{margin-top:32px;width:100%;height:auto;border-radius:15px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let top2;
  let popup;
  $$result.css.add(css);
  return `<div><div class="app svelte-tlvewy"><div class="top svelte-tlvewy"${add_attribute("this", top, 0)}></div>

		<div class="top2 svelte-tlvewy"${add_attribute("this", top2, 0)}></div>

		<canvas class="webgl svelte-tlvewy"></canvas>

		<div class="popup hide svelte-tlvewy"${add_attribute("this", popup, 0)}><div class="infos svelte-tlvewy">
				<div class="cross svelte-tlvewy"><span class="svelte-tlvewy"></span>
					<span class="svelte-tlvewy"></span></div></div>
			<h1 class="svelte-tlvewy">Ma maison !</h1>
			<div class="description svelte-tlvewy">Voici ma maison ma belle maison.<br class="svelte-tlvewy">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum<br class="svelte-tlvewy"><br class="svelte-tlvewy">
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem.
			</div>
			<img src="/images/maison.jpg" class="svelte-tlvewy"></div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5ca21720.js.map
