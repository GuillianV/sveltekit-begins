const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/BebasNeue.ttf","fonts/Comfortaa.ttf","images/ecrou.png","images/git-book-img.png","images/git-book.svg","images/noise.png","main.scss","models/floating/license.txt","models/floating/scene.bin","models/floating/scene.gltf","models/floating/textures/artichoke_baseColor.jpeg","models/floating/textures/artichoke_metallicRoughness.png","models/floating/textures/artichoke_normal.jpeg","models/floating/textures/battery_baseColor.jpeg","models/floating/textures/battery_metallicRoughness.png","models/floating/textures/battery_normal.png","models/floating/textures/bolts_baseColor.jpeg","models/floating/textures/bolts_metallicRoughness.png","models/floating/textures/bolts_normal.png","models/floating/textures/book_A_baseColor.jpeg","models/floating/textures/book_A_metallicRoughness.png","models/floating/textures/book_A_normal.jpeg","models/floating/textures/book_B_baseColor.jpeg","models/floating/textures/book_B_normal.jpeg","models/floating/textures/bucket_baseColor.jpeg","models/floating/textures/bucket_metallicRoughness.png","models/floating/textures/bucket_normal.png","models/floating/textures/cable_baseColor.jpeg","models/floating/textures/cable_metallicRoughness.png","models/floating/textures/cable_normal.png","models/floating/textures/crates_baseColor.jpeg","models/floating/textures/crates_metallicRoughness.png","models/floating/textures/crates_normal.jpeg","models/floating/textures/curtain_baseColor.jpeg","models/floating/textures/curtain_metallicRoughness.png","models/floating/textures/curtain_normal.jpeg","models/floating/textures/dome_baseColor.jpeg","models/floating/textures/dome_metallicRoughness.png","models/floating/textures/dome_normal.jpeg","models/floating/textures/floors_baseColor.jpeg","models/floating/textures/floors_metallicRoughness.png","models/floating/textures/floors_normal.jpeg","models/floating/textures/floor_baseColor.jpeg","models/floating/textures/floor_metallicRoughness.png","models/floating/textures/flowerpot_baseColor.jpeg","models/floating/textures/flowerpot_metallicRoughness.png","models/floating/textures/flowerpot_normal.jpeg","models/floating/textures/frames_baseColor.jpeg","models/floating/textures/frames_metallicRoughness.png","models/floating/textures/frames_normal.jpeg","models/floating/textures/ginger_baseColor.jpeg","models/floating/textures/ginger_metallicRoughness.png","models/floating/textures/ginger_normal.jpeg","models/floating/textures/greenhouse_glass_baseColor.png","models/floating/textures/greenhouse_glass_metallicRoughness.png","models/floating/textures/greenhouse_glass_normal.jpeg","models/floating/textures/greenhouse_metal_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_metallicRoughness.png","models/floating/textures/greenhouse_metal_inside_normal.jpeg","models/floating/textures/greenhouse_metal_metallicRoughness.png","models/floating/textures/greenhouse_metal_normal.jpeg","models/floating/textures/klampe_baseColor.jpeg","models/floating/textures/klampe_metallicRoughness.png","models/floating/textures/klampe_normal.jpeg","models/floating/textures/lamp_A_baseColor.jpeg","models/floating/textures/lamp_A_emissive.jpeg","models/floating/textures/lamp_A_metallicRoughness.png","models/floating/textures/lamp_A_normal.jpeg","models/floating/textures/lamp_B_baseColor.jpeg","models/floating/textures/lamp_B_emissive.jpeg","models/floating/textures/lamp_B_metallicRoughness.png","models/floating/textures/lamp_B_normal.png","models/floating/textures/lantern_A_baseColor.jpeg","models/floating/textures/lantern_A_emissive.jpeg","models/floating/textures/lantern_A_metallicRoughness.png","models/floating/textures/lantern_A_normal.jpeg","models/floating/textures/lantern_B_baseColor.jpeg","models/floating/textures/lantern_B_metallicRoughness.png","models/floating/textures/lantern_B_normal.jpeg","models/floating/textures/leaf_A_baseColor.jpeg","models/floating/textures/leaf_A_normal.jpeg","models/floating/textures/leaf_B.001_baseColor.jpeg","models/floating/textures/leaf_B.001_normal.jpeg","models/floating/textures/lighthouselamp_baseColor.jpeg","models/floating/textures/lighthouselamp_emissive.jpeg","models/floating/textures/lighthouselamp_metallicRoughness.png","models/floating/textures/lighthouselamp_normal.jpeg","models/floating/textures/log_A_baseColor.jpeg","models/floating/textures/log_A_metallicRoughness.png","models/floating/textures/log_A_normal.jpeg","models/floating/textures/log_B_baseColor.jpeg","models/floating/textures/log_B_metallicRoughness.png","models/floating/textures/log_B_normal.jpeg","models/floating/textures/mushroom_huge_A_baseColor.jpeg","models/floating/textures/mushroom_huge_A_metallicRoughness.png","models/floating/textures/mushroom_huge_A_normal.jpeg","models/floating/textures/mushroom_medium_A_baseColor.jpeg","models/floating/textures/mushroom_medium_A_metallicRoughness.png","models/floating/textures/mushroom_medium_A_normal.jpeg","models/floating/textures/mushroom_medium_B_baseColor.jpeg","models/floating/textures/mushroom_medium_B_metallicRoughness.png","models/floating/textures/mushroom_medium_B_normal.jpeg","models/floating/textures/mushroom_medium_C_baseColor.jpeg","models/floating/textures/mushroom_medium_C_metallicRoughness.png","models/floating/textures/mushroom_medium_C_normal.jpeg","models/floating/textures/mushroom_small_A_baseColor.jpeg","models/floating/textures/mushroom_small_A_metallicRoughness.png","models/floating/textures/mushroom_small_A_normal.jpeg","models/floating/textures/mushroom_small_C_baseColor.jpeg","models/floating/textures/mushroom_small_C_metallicRoughness.png","models/floating/textures/mushroom_small_C_normal.jpeg","models/floating/textures/mushroom_tiny_A_baseColor.jpeg","models/floating/textures/mushroom_tiny_A_metallicRoughness.png","models/floating/textures/mushroom_tiny_A_normal.jpeg","models/floating/textures/mushroom_tiny_C_baseColor.jpeg","models/floating/textures/mushroom_tiny_C_metallicRoughness.png","models/floating/textures/mushroom_tiny_C_normal.jpeg","models/floating/textures/platform_baseColor.jpeg","models/floating/textures/platform_metallicRoughness.png","models/floating/textures/platform_normal.jpeg","models/floating/textures/platform_up_baseColor.jpeg","models/floating/textures/platform_up_normal.jpeg","models/floating/textures/rocks_baseColor.jpeg","models/floating/textures/rocks_metallicRoughness.png","models/floating/textures/rocks_normal.jpeg","models/floating/textures/rock_5_baseColor.jpeg","models/floating/textures/rock_5_metallicRoughness.png","models/floating/textures/rock_5_normal.jpeg","models/floating/textures/sticks_A_baseColor.jpeg","models/floating/textures/sticks_A_metallicRoughness.png","models/floating/textures/sticks_A_normal.jpeg","models/floating/textures/sticks_B_baseColor.jpeg","models/floating/textures/sticks_B_metallicRoughness.png","models/floating/textures/sticks_B_normal.jpeg","models/floating/textures/sticks_C_baseColor.jpeg","models/floating/textures/sticks_C_metallicRoughness.png","models/floating/textures/sticks_C_normal.jpeg","models/floating/textures/sticks_D_baseColor.jpeg","models/floating/textures/sticks_D_metallicRoughness.png","models/floating/textures/sticks_D_normal.jpeg","models/floating/textures/stone_A_baseColor.jpeg","models/floating/textures/stone_A_metallicRoughness.png","models/floating/textures/stone_A_normal.jpeg","models/floating/textures/stone_B_baseColor.jpeg","models/floating/textures/stone_B_metallicRoughness.png","models/floating/textures/stone_B_normal.jpeg","models/floating/textures/stone_C_baseColor.jpeg","models/floating/textures/stone_C_metallicRoughness.png","models/floating/textures/stone_C_normal.jpeg","models/floating/textures/stone_D_baseColor.jpeg","models/floating/textures/stone_D_metallicRoughness.png","models/floating/textures/stone_D_normal.jpeg","models/floating/textures/stone_stairs_baseColor.jpeg","models/floating/textures/stone_stairs_metallicRoughness.png","models/floating/textures/stone_stairs_normal.jpeg","models/floating/textures/window_baseColor.jpeg","models/floating/textures/window_metallicRoughness.png","models/floating/textures/window_normal.jpeg","models/floating/textures/wood_baseColor.jpeg","models/floating/textures/wood_normal.jpeg","models/gitgui/gitgui.gltf","models/gitgui/untitled.gltf","models/lameule/Albedo.jpg","models/lameule/cheeese.bin","models/lameule/cheeese.gltf","models/lameule/Image.png","models/lameule/Normal.jpg","models/lameule/Roughness.png","models/RL/Car/license.txt","models/RL/Car/scene.bin","models/RL/Car/scene.gltf","models/RL/Car/textures/Octane_Chassis_baseColor.png","models/RL/Car/textures/Octane_Chassis_metallicRoughness.png","models/switch/license.txt","models/switch/scene.bin","models/switch/scene.gltf","models/switch/textures/BaseCol_baseColor.png","models/switch/textures/Opacity_Stuff_baseColor.png","robot.txt","styles/reset.scss","three/journey/11/textures/checkerboard-1024x1024.png","three/journey/11/textures/checkerboard-8x8.png","three/journey/11/textures/door/alpha.jpg","three/journey/11/textures/door/ambientOcclusion.jpg","three/journey/11/textures/door/color.jpg","three/journey/11/textures/door/height.jpg","three/journey/11/textures/door/metalness.jpg","three/journey/11/textures/door/normal.jpg","three/journey/11/textures/door/roughness.jpg","three/journey/11/textures/minecraft.png","three/journey/12/textures/door/alpha.jpg","three/journey/12/textures/door/ambientOcclusion.jpg","three/journey/12/textures/door/color.jpg","three/journey/12/textures/door/height.jpg","three/journey/12/textures/door/metalness.jpg","three/journey/12/textures/door/normal.jpg","three/journey/12/textures/door/roughness.jpg","three/journey/12/textures/environmentMaps/0/nx.jpg","three/journey/12/textures/environmentMaps/0/ny.jpg","three/journey/12/textures/environmentMaps/0/nz.jpg","three/journey/12/textures/environmentMaps/0/px.jpg","three/journey/12/textures/environmentMaps/0/py.jpg","three/journey/12/textures/environmentMaps/0/pz.jpg","three/journey/12/textures/environmentMaps/1/nx.jpg","three/journey/12/textures/environmentMaps/1/ny.jpg","three/journey/12/textures/environmentMaps/1/nz.jpg","three/journey/12/textures/environmentMaps/1/px.jpg","three/journey/12/textures/environmentMaps/1/py.jpg","three/journey/12/textures/environmentMaps/1/pz.jpg","three/journey/12/textures/environmentMaps/2/nx.jpg","three/journey/12/textures/environmentMaps/2/ny.jpg","three/journey/12/textures/environmentMaps/2/nz.jpg","three/journey/12/textures/environmentMaps/2/px.jpg","three/journey/12/textures/environmentMaps/2/py.jpg","three/journey/12/textures/environmentMaps/2/pz.jpg","three/journey/12/textures/environmentMaps/3/nx.jpg","three/journey/12/textures/environmentMaps/3/ny.jpg","three/journey/12/textures/environmentMaps/3/nz.jpg","three/journey/12/textures/environmentMaps/3/px.jpg","three/journey/12/textures/environmentMaps/3/py.jpg","three/journey/12/textures/environmentMaps/3/pz.jpg","three/journey/12/textures/gradients/3.jpg","three/journey/12/textures/gradients/5.jpg","three/journey/12/textures/matcaps/1.png","three/journey/12/textures/matcaps/2.png","three/journey/12/textures/matcaps/3.png","three/journey/12/textures/matcaps/4.png","three/journey/12/textures/matcaps/5.png","three/journey/12/textures/matcaps/6.png","three/journey/12/textures/matcaps/7.png","three/journey/12/textures/matcaps/8.png","three/journey/13/fonts/Belanosima-Bold.ttf","three/journey/13/fonts/Belanosima-Regular.ttf","three/journey/13/fonts/Belanosima-SemiBold.ttf","three/journey/13/fonts/Belanosima_SemiBold_Regular.json","three/journey/13/textures/matcaps/1.png","three/journey/13/textures/matcaps/2.png","three/journey/13/textures/matcaps/3.png","three/journey/13/textures/matcaps/4.png","three/journey/13/textures/matcaps/5.png","three/journey/13/textures/matcaps/6.png","three/journey/13/textures/matcaps/7.png","three/journey/13/textures/matcaps/8.png","three/journey/16/textures/bakedShadow.jpg","three/journey/16/textures/door/alpha.jpg","three/journey/16/textures/door/ambientOcclusion.jpg","three/journey/16/textures/door/color.jpg","three/journey/16/textures/door/height.jpg","three/journey/16/textures/door/metalness.jpg","three/journey/16/textures/door/normal.jpg","three/journey/16/textures/door/roughness.jpg","three/journey/16/textures/environmentMaps/0/nx.jpg","three/journey/16/textures/environmentMaps/0/ny.jpg","three/journey/16/textures/environmentMaps/0/nz.jpg","three/journey/16/textures/environmentMaps/0/px.jpg","three/journey/16/textures/environmentMaps/0/py.jpg","three/journey/16/textures/environmentMaps/0/pz.jpg","three/journey/16/textures/environmentMaps/1/nx.jpg","three/journey/16/textures/environmentMaps/1/ny.jpg","three/journey/16/textures/environmentMaps/1/nz.jpg","three/journey/16/textures/environmentMaps/1/px.jpg","three/journey/16/textures/environmentMaps/1/py.jpg","three/journey/16/textures/environmentMaps/1/pz.jpg","three/journey/16/textures/environmentMaps/2/nx.jpg","three/journey/16/textures/environmentMaps/2/ny.jpg","three/journey/16/textures/environmentMaps/2/nz.jpg","three/journey/16/textures/environmentMaps/2/px.jpg","three/journey/16/textures/environmentMaps/2/py.jpg","three/journey/16/textures/environmentMaps/2/pz.jpg","three/journey/16/textures/environmentMaps/3/nx.jpg","three/journey/16/textures/environmentMaps/3/ny.jpg","three/journey/16/textures/environmentMaps/3/nz.jpg","three/journey/16/textures/environmentMaps/3/px.jpg","three/journey/16/textures/environmentMaps/3/py.jpg","three/journey/16/textures/environmentMaps/3/pz.jpg","three/journey/16/textures/gradients/3.jpg","three/journey/16/textures/gradients/5.jpg","three/journey/16/textures/matcaps/1.png","three/journey/16/textures/matcaps/2.png","three/journey/16/textures/matcaps/3.png","three/journey/16/textures/matcaps/4.png","three/journey/16/textures/matcaps/5.png","three/journey/16/textures/matcaps/6.png","three/journey/16/textures/matcaps/7.png","three/journey/16/textures/matcaps/8.png","three/journey/16/textures/simpleShadow.jpg","three/journey/17/textures/bricks/ambientOcclusion.jpg","three/journey/17/textures/bricks/color.jpg","three/journey/17/textures/bricks/normal.jpg","three/journey/17/textures/bricks/roughness.jpg","three/journey/17/textures/door/alpha.jpg","three/journey/17/textures/door/ambientOcclusion.jpg","three/journey/17/textures/door/color.jpg","three/journey/17/textures/door/height.jpg","three/journey/17/textures/door/metalness.jpg","three/journey/17/textures/door/normal.jpg","three/journey/17/textures/door/roughness.jpg","three/journey/17/textures/grass/ambientOcclusion.jpg","three/journey/17/textures/grass/color.jpg","three/journey/17/textures/grass/normal.jpg","three/journey/17/textures/grass/roughness.jpg","three/journey/18/textures/particles/1.png","three/journey/18/textures/particles/10.png","three/journey/18/textures/particles/11.png","three/journey/18/textures/particles/12.png","three/journey/18/textures/particles/13.png","three/journey/18/textures/particles/2.png","three/journey/18/textures/particles/3.png","three/journey/18/textures/particles/4.png","three/journey/18/textures/particles/5.png","three/journey/18/textures/particles/6.png","three/journey/18/textures/particles/7.png","three/journey/18/textures/particles/8.png","three/journey/18/textures/particles/9.png","three/lameule/texture/leather/Albedo.jpg","three/lameule/texture/leather/AmbientOcclusion.jpg","three/lameule/texture/leather/Height.png","three/lameule/texture/leather/Material_1518.jpg","three/lameule/texture/leather/Normal.jpg","three/lameule/texture/leather/Roughness.jpg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml",".scss":"text/x-scss",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg",".jpg":"image/jpeg",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.7d6684b1.js","app":"_app/immutable/entry/app.c0de9539.js","imports":["_app/immutable/entry/start.7d6684b1.js","_app/immutable/chunks/index.137f5445.js","_app/immutable/chunks/singletons.d3908a16.js","_app/immutable/chunks/index.d60425e4.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.c0de9539.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.137f5445.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3cefbbdf.js'),
			() => import('./chunks/1-f91ff6df.js'),
			() => import('./chunks/2-be1a7e4b.js'),
			() => import('./chunks/4-0f3b4c49.js'),
			() => import('./chunks/5-5cf88dff.js'),
			() => import('./chunks/6-d056e6c6.js'),
			() => import('./chunks/7-bda20435.js'),
			() => import('./chunks/8-1d5b4b91.js'),
			() => import('./chunks/9-ef8c9f7d.js'),
			() => import('./chunks/13-4cb8ec3e.js'),
			() => import('./chunks/14-64ebd347.js'),
			() => import('./chunks/15-c6cba744.js'),
			() => import('./chunks/16-a26a33f2.js'),
			() => import('./chunks/17-a5a73ea1.js'),
			() => import('./chunks/18-07f6924f.js'),
			() => import('./chunks/19-f0683a34.js'),
			() => import('./chunks/20-61ecd259.js'),
			() => import('./chunks/21-a2f9eced.js'),
			() => import('./chunks/22-e794918d.js'),
			() => import('./chunks/23-2744c392.js'),
			() => import('./chunks/24-1ca52d60.js'),
			() => import('./chunks/25-b92a410b.js'),
			() => import('./chunks/26-d455a6c6.js'),
			() => import('./chunks/27-90f6c505.js'),
			() => import('./chunks/28-a97e214a.js'),
			() => import('./chunks/29-aefc085a.js'),
			() => import('./chunks/30-d4d2aa5f.js'),
			() => import('./chunks/31-f7881478.js'),
			() => import('./chunks/32-edb505a5.js')
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
				id: "/(tests)/three/journey/10",
				pattern: /^\/three\/journey\/10\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/11",
				pattern: /^\/three\/journey\/11\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/12",
				pattern: /^\/three\/journey\/12\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/13",
				pattern: /^\/three\/journey\/13\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/15",
				pattern: /^\/three\/journey\/15\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/16",
				pattern: /^\/three\/journey\/16\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/17",
				pattern: /^\/three\/journey\/17\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/18",
				pattern: /^\/three\/journey\/18\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/5",
				pattern: /^\/three\/journey\/5\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/6",
				pattern: /^\/three\/journey\/6\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/7",
				pattern: /^\/three\/journey\/7\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/8",
				pattern: /^\/three\/journey\/8\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/9",
				pattern: /^\/three\/journey\/9\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(tests)/three/lameule",
				pattern: /^\/three\/lameule\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(tests)/three/rl",
				pattern: /^\/three\/rl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(tests)/unsplash/random",
				pattern: /^\/unsplash\/random\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
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
