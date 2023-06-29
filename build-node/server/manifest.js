const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/BebasNeue.ttf","fonts/Comfortaa.ttf","images/ecrou.png","images/git-book-img.png","images/git-book.svg","images/noise.png","main.scss","models/floating/license.txt","models/floating/scene.bin","models/floating/scene.gltf","models/floating/textures/artichoke_baseColor.jpeg","models/floating/textures/artichoke_metallicRoughness.png","models/floating/textures/artichoke_normal.jpeg","models/floating/textures/battery_baseColor.jpeg","models/floating/textures/battery_metallicRoughness.png","models/floating/textures/battery_normal.png","models/floating/textures/bolts_baseColor.jpeg","models/floating/textures/bolts_metallicRoughness.png","models/floating/textures/bolts_normal.png","models/floating/textures/book_A_baseColor.jpeg","models/floating/textures/book_A_metallicRoughness.png","models/floating/textures/book_A_normal.jpeg","models/floating/textures/book_B_baseColor.jpeg","models/floating/textures/book_B_normal.jpeg","models/floating/textures/bucket_baseColor.jpeg","models/floating/textures/bucket_metallicRoughness.png","models/floating/textures/bucket_normal.png","models/floating/textures/cable_baseColor.jpeg","models/floating/textures/cable_metallicRoughness.png","models/floating/textures/cable_normal.png","models/floating/textures/crates_baseColor.jpeg","models/floating/textures/crates_metallicRoughness.png","models/floating/textures/crates_normal.jpeg","models/floating/textures/curtain_baseColor.jpeg","models/floating/textures/curtain_metallicRoughness.png","models/floating/textures/curtain_normal.jpeg","models/floating/textures/dome_baseColor.jpeg","models/floating/textures/dome_metallicRoughness.png","models/floating/textures/dome_normal.jpeg","models/floating/textures/floors_baseColor.jpeg","models/floating/textures/floors_metallicRoughness.png","models/floating/textures/floors_normal.jpeg","models/floating/textures/floor_baseColor.jpeg","models/floating/textures/floor_metallicRoughness.png","models/floating/textures/flowerpot_baseColor.jpeg","models/floating/textures/flowerpot_metallicRoughness.png","models/floating/textures/flowerpot_normal.jpeg","models/floating/textures/frames_baseColor.jpeg","models/floating/textures/frames_metallicRoughness.png","models/floating/textures/frames_normal.jpeg","models/floating/textures/ginger_baseColor.jpeg","models/floating/textures/ginger_metallicRoughness.png","models/floating/textures/ginger_normal.jpeg","models/floating/textures/greenhouse_glass_baseColor.png","models/floating/textures/greenhouse_glass_metallicRoughness.png","models/floating/textures/greenhouse_glass_normal.jpeg","models/floating/textures/greenhouse_metal_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_metallicRoughness.png","models/floating/textures/greenhouse_metal_inside_normal.jpeg","models/floating/textures/greenhouse_metal_metallicRoughness.png","models/floating/textures/greenhouse_metal_normal.jpeg","models/floating/textures/klampe_baseColor.jpeg","models/floating/textures/klampe_metallicRoughness.png","models/floating/textures/klampe_normal.jpeg","models/floating/textures/lamp_A_baseColor.jpeg","models/floating/textures/lamp_A_emissive.jpeg","models/floating/textures/lamp_A_metallicRoughness.png","models/floating/textures/lamp_A_normal.jpeg","models/floating/textures/lamp_B_baseColor.jpeg","models/floating/textures/lamp_B_emissive.jpeg","models/floating/textures/lamp_B_metallicRoughness.png","models/floating/textures/lamp_B_normal.png","models/floating/textures/lantern_A_baseColor.jpeg","models/floating/textures/lantern_A_emissive.jpeg","models/floating/textures/lantern_A_metallicRoughness.png","models/floating/textures/lantern_A_normal.jpeg","models/floating/textures/lantern_B_baseColor.jpeg","models/floating/textures/lantern_B_metallicRoughness.png","models/floating/textures/lantern_B_normal.jpeg","models/floating/textures/leaf_A_baseColor.jpeg","models/floating/textures/leaf_A_normal.jpeg","models/floating/textures/leaf_B.001_baseColor.jpeg","models/floating/textures/leaf_B.001_normal.jpeg","models/floating/textures/lighthouselamp_baseColor.jpeg","models/floating/textures/lighthouselamp_emissive.jpeg","models/floating/textures/lighthouselamp_metallicRoughness.png","models/floating/textures/lighthouselamp_normal.jpeg","models/floating/textures/log_A_baseColor.jpeg","models/floating/textures/log_A_metallicRoughness.png","models/floating/textures/log_A_normal.jpeg","models/floating/textures/log_B_baseColor.jpeg","models/floating/textures/log_B_metallicRoughness.png","models/floating/textures/log_B_normal.jpeg","models/floating/textures/mushroom_huge_A_baseColor.jpeg","models/floating/textures/mushroom_huge_A_metallicRoughness.png","models/floating/textures/mushroom_huge_A_normal.jpeg","models/floating/textures/mushroom_medium_A_baseColor.jpeg","models/floating/textures/mushroom_medium_A_metallicRoughness.png","models/floating/textures/mushroom_medium_A_normal.jpeg","models/floating/textures/mushroom_medium_B_baseColor.jpeg","models/floating/textures/mushroom_medium_B_metallicRoughness.png","models/floating/textures/mushroom_medium_B_normal.jpeg","models/floating/textures/mushroom_medium_C_baseColor.jpeg","models/floating/textures/mushroom_medium_C_metallicRoughness.png","models/floating/textures/mushroom_medium_C_normal.jpeg","models/floating/textures/mushroom_small_A_baseColor.jpeg","models/floating/textures/mushroom_small_A_metallicRoughness.png","models/floating/textures/mushroom_small_A_normal.jpeg","models/floating/textures/mushroom_small_C_baseColor.jpeg","models/floating/textures/mushroom_small_C_metallicRoughness.png","models/floating/textures/mushroom_small_C_normal.jpeg","models/floating/textures/mushroom_tiny_A_baseColor.jpeg","models/floating/textures/mushroom_tiny_A_metallicRoughness.png","models/floating/textures/mushroom_tiny_A_normal.jpeg","models/floating/textures/mushroom_tiny_C_baseColor.jpeg","models/floating/textures/mushroom_tiny_C_metallicRoughness.png","models/floating/textures/mushroom_tiny_C_normal.jpeg","models/floating/textures/platform_baseColor.jpeg","models/floating/textures/platform_metallicRoughness.png","models/floating/textures/platform_normal.jpeg","models/floating/textures/platform_up_baseColor.jpeg","models/floating/textures/platform_up_normal.jpeg","models/floating/textures/rocks_baseColor.jpeg","models/floating/textures/rocks_metallicRoughness.png","models/floating/textures/rocks_normal.jpeg","models/floating/textures/rock_5_baseColor.jpeg","models/floating/textures/rock_5_metallicRoughness.png","models/floating/textures/rock_5_normal.jpeg","models/floating/textures/sticks_A_baseColor.jpeg","models/floating/textures/sticks_A_metallicRoughness.png","models/floating/textures/sticks_A_normal.jpeg","models/floating/textures/sticks_B_baseColor.jpeg","models/floating/textures/sticks_B_metallicRoughness.png","models/floating/textures/sticks_B_normal.jpeg","models/floating/textures/sticks_C_baseColor.jpeg","models/floating/textures/sticks_C_metallicRoughness.png","models/floating/textures/sticks_C_normal.jpeg","models/floating/textures/sticks_D_baseColor.jpeg","models/floating/textures/sticks_D_metallicRoughness.png","models/floating/textures/sticks_D_normal.jpeg","models/floating/textures/stone_A_baseColor.jpeg","models/floating/textures/stone_A_metallicRoughness.png","models/floating/textures/stone_A_normal.jpeg","models/floating/textures/stone_B_baseColor.jpeg","models/floating/textures/stone_B_metallicRoughness.png","models/floating/textures/stone_B_normal.jpeg","models/floating/textures/stone_C_baseColor.jpeg","models/floating/textures/stone_C_metallicRoughness.png","models/floating/textures/stone_C_normal.jpeg","models/floating/textures/stone_D_baseColor.jpeg","models/floating/textures/stone_D_metallicRoughness.png","models/floating/textures/stone_D_normal.jpeg","models/floating/textures/stone_stairs_baseColor.jpeg","models/floating/textures/stone_stairs_metallicRoughness.png","models/floating/textures/stone_stairs_normal.jpeg","models/floating/textures/window_baseColor.jpeg","models/floating/textures/window_metallicRoughness.png","models/floating/textures/window_normal.jpeg","models/floating/textures/wood_baseColor.jpeg","models/floating/textures/wood_normal.jpeg","models/gitgui/gitgui.gltf","models/gitgui/untitled.gltf","models/switch/license.txt","models/switch/scene.bin","models/switch/scene.gltf","models/switch/textures/BaseCol_baseColor.png","models/switch/textures/Opacity_Stuff_baseColor.png","robot.txt","styles/reset.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".scss":"text/x-scss",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.7bb6d30c.js","app":"_app/immutable/entry/app.d804646c.js","imports":["_app/immutable/entry/start.7bb6d30c.js","_app/immutable/chunks/index.137f5445.js","_app/immutable/chunks/singletons.4b3f7f2c.js","_app/immutable/chunks/index.d60425e4.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.d804646c.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.137f5445.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c28c241c.js'),
			() => import('./chunks/1-81c2e5a7.js'),
			() => import('./chunks/2-0affc817.js'),
			() => import('./chunks/4-92482154.js'),
			() => import('./chunks/5-853efa76.js'),
			() => import('./chunks/6-001e6d17.js'),
			() => import('./chunks/7-005d18af.js'),
			() => import('./chunks/8-1d5b4b91.js'),
			() => import('./chunks/9-e38985ef.js'),
			() => import('./chunks/13-2e8b10bd.js'),
			() => import('./chunks/14-f31e20eb.js'),
			() => import('./chunks/15-587f1068.js'),
			() => import('./chunks/16-bc5b9a74.js'),
			() => import('./chunks/17-8d0e8f1d.js'),
			() => import('./chunks/18-2cc3a7bb.js'),
			() => import('./chunks/19-f40d3a5b.js'),
			() => import('./chunks/20-502fcd04.js')
		],
		routes: [
			{
				id: "/(admin)/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/login",
				pattern: /^\/admin\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/logout",
				pattern: /^\/admin\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/register",
				pattern: /^\/admin\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(tests)/api/traductions/[langCode=lang]",
				pattern: /^\/api\/traductions\/([^/]+?)\/?$/,
				params: [{"name":"langCode","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server-a9dd0d10.js')
			},
			{
				id: "/(tests)/movivid",
				pattern: /^\/movivid\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(tests)/pokemon",
				pattern: /^\/pokemon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(tests)/pokemon/[pokemonName]",
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: [{"name":"pokemonName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(tests)/three/gltf",
				pattern: /^\/three\/gltf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/5",
				pattern: /^\/three\/journey\/5\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/6",
				pattern: /^\/three\/journey\/6\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/7",
				pattern: /^\/three\/journey\/7\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(tests)/unsplash/random",
				pattern: /^\/unsplash\/random\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('./chunks/lang-27851845.js');
			return { lang };
		}
	}
};

const prerendered = new Set(["/","/__data.json","/about","/about/__data.json","/projects","/projects/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
