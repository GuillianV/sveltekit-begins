const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","models/floating/license.txt","models/floating/scene.bin","models/floating/scene.gltf","models/floating/textures/artichoke_baseColor.jpeg","models/floating/textures/artichoke_metallicRoughness.png","models/floating/textures/artichoke_normal.jpeg","models/floating/textures/battery_baseColor.jpeg","models/floating/textures/battery_metallicRoughness.png","models/floating/textures/battery_normal.png","models/floating/textures/bolts_baseColor.jpeg","models/floating/textures/bolts_metallicRoughness.png","models/floating/textures/bolts_normal.png","models/floating/textures/book_A_baseColor.jpeg","models/floating/textures/book_A_metallicRoughness.png","models/floating/textures/book_A_normal.jpeg","models/floating/textures/book_B_baseColor.jpeg","models/floating/textures/book_B_normal.jpeg","models/floating/textures/bucket_baseColor.jpeg","models/floating/textures/bucket_metallicRoughness.png","models/floating/textures/bucket_normal.png","models/floating/textures/cable_baseColor.jpeg","models/floating/textures/cable_metallicRoughness.png","models/floating/textures/cable_normal.png","models/floating/textures/crates_baseColor.jpeg","models/floating/textures/crates_metallicRoughness.png","models/floating/textures/crates_normal.jpeg","models/floating/textures/curtain_baseColor.jpeg","models/floating/textures/curtain_metallicRoughness.png","models/floating/textures/curtain_normal.jpeg","models/floating/textures/dome_baseColor.jpeg","models/floating/textures/dome_metallicRoughness.png","models/floating/textures/dome_normal.jpeg","models/floating/textures/floor_baseColor.jpeg","models/floating/textures/floor_metallicRoughness.png","models/floating/textures/floors_baseColor.jpeg","models/floating/textures/floors_metallicRoughness.png","models/floating/textures/floors_normal.jpeg","models/floating/textures/flowerpot_baseColor.jpeg","models/floating/textures/flowerpot_metallicRoughness.png","models/floating/textures/flowerpot_normal.jpeg","models/floating/textures/frames_baseColor.jpeg","models/floating/textures/frames_metallicRoughness.png","models/floating/textures/frames_normal.jpeg","models/floating/textures/ginger_baseColor.jpeg","models/floating/textures/ginger_metallicRoughness.png","models/floating/textures/ginger_normal.jpeg","models/floating/textures/greenhouse_glass_baseColor.png","models/floating/textures/greenhouse_glass_metallicRoughness.png","models/floating/textures/greenhouse_glass_normal.jpeg","models/floating/textures/greenhouse_metal_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_metallicRoughness.png","models/floating/textures/greenhouse_metal_inside_normal.jpeg","models/floating/textures/greenhouse_metal_metallicRoughness.png","models/floating/textures/greenhouse_metal_normal.jpeg","models/floating/textures/klampe_baseColor.jpeg","models/floating/textures/klampe_metallicRoughness.png","models/floating/textures/klampe_normal.jpeg","models/floating/textures/lamp_A_baseColor.jpeg","models/floating/textures/lamp_A_emissive.jpeg","models/floating/textures/lamp_A_metallicRoughness.png","models/floating/textures/lamp_A_normal.jpeg","models/floating/textures/lamp_B_baseColor.jpeg","models/floating/textures/lamp_B_emissive.jpeg","models/floating/textures/lamp_B_metallicRoughness.png","models/floating/textures/lamp_B_normal.png","models/floating/textures/lantern_A_baseColor.jpeg","models/floating/textures/lantern_A_emissive.jpeg","models/floating/textures/lantern_A_metallicRoughness.png","models/floating/textures/lantern_A_normal.jpeg","models/floating/textures/lantern_B_baseColor.jpeg","models/floating/textures/lantern_B_metallicRoughness.png","models/floating/textures/lantern_B_normal.jpeg","models/floating/textures/leaf_A_baseColor.jpeg","models/floating/textures/leaf_A_normal.jpeg","models/floating/textures/leaf_B.001_baseColor.jpeg","models/floating/textures/leaf_B.001_normal.jpeg","models/floating/textures/lighthouselamp_baseColor.jpeg","models/floating/textures/lighthouselamp_emissive.jpeg","models/floating/textures/lighthouselamp_metallicRoughness.png","models/floating/textures/lighthouselamp_normal.jpeg","models/floating/textures/log_A_baseColor.jpeg","models/floating/textures/log_A_metallicRoughness.png","models/floating/textures/log_A_normal.jpeg","models/floating/textures/log_B_baseColor.jpeg","models/floating/textures/log_B_metallicRoughness.png","models/floating/textures/log_B_normal.jpeg","models/floating/textures/mushroom_huge_A_baseColor.jpeg","models/floating/textures/mushroom_huge_A_metallicRoughness.png","models/floating/textures/mushroom_huge_A_normal.jpeg","models/floating/textures/mushroom_medium_A_baseColor.jpeg","models/floating/textures/mushroom_medium_A_metallicRoughness.png","models/floating/textures/mushroom_medium_A_normal.jpeg","models/floating/textures/mushroom_medium_B_baseColor.jpeg","models/floating/textures/mushroom_medium_B_metallicRoughness.png","models/floating/textures/mushroom_medium_B_normal.jpeg","models/floating/textures/mushroom_medium_C_baseColor.jpeg","models/floating/textures/mushroom_medium_C_metallicRoughness.png","models/floating/textures/mushroom_medium_C_normal.jpeg","models/floating/textures/mushroom_small_A_baseColor.jpeg","models/floating/textures/mushroom_small_A_metallicRoughness.png","models/floating/textures/mushroom_small_A_normal.jpeg","models/floating/textures/mushroom_small_C_baseColor.jpeg","models/floating/textures/mushroom_small_C_metallicRoughness.png","models/floating/textures/mushroom_small_C_normal.jpeg","models/floating/textures/mushroom_tiny_A_baseColor.jpeg","models/floating/textures/mushroom_tiny_A_metallicRoughness.png","models/floating/textures/mushroom_tiny_A_normal.jpeg","models/floating/textures/mushroom_tiny_C_baseColor.jpeg","models/floating/textures/mushroom_tiny_C_metallicRoughness.png","models/floating/textures/mushroom_tiny_C_normal.jpeg","models/floating/textures/platform_baseColor.jpeg","models/floating/textures/platform_metallicRoughness.png","models/floating/textures/platform_normal.jpeg","models/floating/textures/platform_up_baseColor.jpeg","models/floating/textures/platform_up_normal.jpeg","models/floating/textures/rock_5_baseColor.jpeg","models/floating/textures/rock_5_metallicRoughness.png","models/floating/textures/rock_5_normal.jpeg","models/floating/textures/rocks_baseColor.jpeg","models/floating/textures/rocks_metallicRoughness.png","models/floating/textures/rocks_normal.jpeg","models/floating/textures/sticks_A_baseColor.jpeg","models/floating/textures/sticks_A_metallicRoughness.png","models/floating/textures/sticks_A_normal.jpeg","models/floating/textures/sticks_B_baseColor.jpeg","models/floating/textures/sticks_B_metallicRoughness.png","models/floating/textures/sticks_B_normal.jpeg","models/floating/textures/sticks_C_baseColor.jpeg","models/floating/textures/sticks_C_metallicRoughness.png","models/floating/textures/sticks_C_normal.jpeg","models/floating/textures/sticks_D_baseColor.jpeg","models/floating/textures/sticks_D_metallicRoughness.png","models/floating/textures/sticks_D_normal.jpeg","models/floating/textures/stone_A_baseColor.jpeg","models/floating/textures/stone_A_metallicRoughness.png","models/floating/textures/stone_A_normal.jpeg","models/floating/textures/stone_B_baseColor.jpeg","models/floating/textures/stone_B_metallicRoughness.png","models/floating/textures/stone_B_normal.jpeg","models/floating/textures/stone_C_baseColor.jpeg","models/floating/textures/stone_C_metallicRoughness.png","models/floating/textures/stone_C_normal.jpeg","models/floating/textures/stone_D_baseColor.jpeg","models/floating/textures/stone_D_metallicRoughness.png","models/floating/textures/stone_D_normal.jpeg","models/floating/textures/stone_stairs_baseColor.jpeg","models/floating/textures/stone_stairs_metallicRoughness.png","models/floating/textures/stone_stairs_normal.jpeg","models/floating/textures/window_baseColor.jpeg","models/floating/textures/window_metallicRoughness.png","models/floating/textures/window_normal.jpeg","models/floating/textures/wood_baseColor.jpeg","models/floating/textures/wood_normal.jpeg","models/switch/license.txt","models/switch/scene.bin","models/switch/scene.gltf","models/switch/textures/BaseCol_baseColor.png","models/switch/textures/Opacity_Stuff_baseColor.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.4dceb860.js","app":"_app/immutable/entry/app.9a8f9974.js","imports":["_app/immutable/entry/start.4dceb860.js","_app/immutable/chunks/index.9d9ad1c9.js","_app/immutable/chunks/singletons.436e9e94.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.9a8f9974.js","_app/immutable/chunks/traductions.c486ba17.js","_app/immutable/chunks/index.9d9ad1c9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-15a2b522.js'),
			() => import('./chunks/1-43952e2b.js'),
			() => import('./chunks/2-66292ded.js'),
			() => import('./chunks/4-b83305fc.js'),
			() => import('./chunks/6-02398179.js'),
			() => import('./chunks/7-b0d82d1e.js'),
			() => import('./chunks/8-f97ebaa5.js'),
			() => import('./chunks/9-da2c6f23.js')
		],
		routes: [
			{
				id: "/[[langCode=lang]]/about",
				pattern: /^(?:\/([^/]+))?\/about\/?$/,
				params: [{"name":"langCode","matcher":"lang","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/traductions/[langCode=lang]",
				pattern: /^\/api\/traductions\/([^/]+?)\/?$/,
				params: [{"name":"langCode","matcher":"lang","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server-8a478427.js')
			},
			{
				id: "/pokemon/[pokemonName]",
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: [{"name":"pokemonName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/three",
				pattern: /^\/three\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/three/gltf",
				pattern: /^\/three\/gltf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/unsplash/random",
				pattern: /^\/unsplash\/random\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('./chunks/lang-c905c63d.js');
			return { lang };
		}
	}
};

const prerendered = new Set(["/","/pokemon","/pokemon/pikachu","/pokemon/turtwig"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map