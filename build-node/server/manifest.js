const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/BebasNeue.ttf","fonts/Comfortaa.ttf","images/back.png","images/bottom.png","images/clouds.jpg","images/earthTexture.jpg","images/ecrou.png","images/front.png","images/git-book-img.png","images/git-book.svg","images/lac.jpg","images/left.png","images/maison.jpg","images/noise.png","images/right.png","images/star.png","images/top.png","main.scss","models/floating/license.txt","models/floating/scene.bin","models/floating/scene.gltf","models/floating/textures/artichoke_baseColor.jpeg","models/floating/textures/artichoke_metallicRoughness.png","models/floating/textures/artichoke_normal.jpeg","models/floating/textures/battery_baseColor.jpeg","models/floating/textures/battery_metallicRoughness.png","models/floating/textures/battery_normal.png","models/floating/textures/bolts_baseColor.jpeg","models/floating/textures/bolts_metallicRoughness.png","models/floating/textures/bolts_normal.png","models/floating/textures/book_A_baseColor.jpeg","models/floating/textures/book_A_metallicRoughness.png","models/floating/textures/book_A_normal.jpeg","models/floating/textures/book_B_baseColor.jpeg","models/floating/textures/book_B_normal.jpeg","models/floating/textures/bucket_baseColor.jpeg","models/floating/textures/bucket_metallicRoughness.png","models/floating/textures/bucket_normal.png","models/floating/textures/cable_baseColor.jpeg","models/floating/textures/cable_metallicRoughness.png","models/floating/textures/cable_normal.png","models/floating/textures/crates_baseColor.jpeg","models/floating/textures/crates_metallicRoughness.png","models/floating/textures/crates_normal.jpeg","models/floating/textures/curtain_baseColor.jpeg","models/floating/textures/curtain_metallicRoughness.png","models/floating/textures/curtain_normal.jpeg","models/floating/textures/dome_baseColor.jpeg","models/floating/textures/dome_metallicRoughness.png","models/floating/textures/dome_normal.jpeg","models/floating/textures/floors_baseColor.jpeg","models/floating/textures/floors_metallicRoughness.png","models/floating/textures/floors_normal.jpeg","models/floating/textures/floor_baseColor.jpeg","models/floating/textures/floor_metallicRoughness.png","models/floating/textures/flowerpot_baseColor.jpeg","models/floating/textures/flowerpot_metallicRoughness.png","models/floating/textures/flowerpot_normal.jpeg","models/floating/textures/frames_baseColor.jpeg","models/floating/textures/frames_metallicRoughness.png","models/floating/textures/frames_normal.jpeg","models/floating/textures/ginger_baseColor.jpeg","models/floating/textures/ginger_metallicRoughness.png","models/floating/textures/ginger_normal.jpeg","models/floating/textures/greenhouse_glass_baseColor.png","models/floating/textures/greenhouse_glass_metallicRoughness.png","models/floating/textures/greenhouse_glass_normal.jpeg","models/floating/textures/greenhouse_metal_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_baseColor.jpeg","models/floating/textures/greenhouse_metal_inside_metallicRoughness.png","models/floating/textures/greenhouse_metal_inside_normal.jpeg","models/floating/textures/greenhouse_metal_metallicRoughness.png","models/floating/textures/greenhouse_metal_normal.jpeg","models/floating/textures/klampe_baseColor.jpeg","models/floating/textures/klampe_metallicRoughness.png","models/floating/textures/klampe_normal.jpeg","models/floating/textures/lamp_A_baseColor.jpeg","models/floating/textures/lamp_A_emissive.jpeg","models/floating/textures/lamp_A_metallicRoughness.png","models/floating/textures/lamp_A_normal.jpeg","models/floating/textures/lamp_B_baseColor.jpeg","models/floating/textures/lamp_B_emissive.jpeg","models/floating/textures/lamp_B_metallicRoughness.png","models/floating/textures/lamp_B_normal.png","models/floating/textures/lantern_A_baseColor.jpeg","models/floating/textures/lantern_A_emissive.jpeg","models/floating/textures/lantern_A_metallicRoughness.png","models/floating/textures/lantern_A_normal.jpeg","models/floating/textures/lantern_B_baseColor.jpeg","models/floating/textures/lantern_B_metallicRoughness.png","models/floating/textures/lantern_B_normal.jpeg","models/floating/textures/leaf_A_baseColor.jpeg","models/floating/textures/leaf_A_normal.jpeg","models/floating/textures/leaf_B.001_baseColor.jpeg","models/floating/textures/leaf_B.001_normal.jpeg","models/floating/textures/lighthouselamp_baseColor.jpeg","models/floating/textures/lighthouselamp_emissive.jpeg","models/floating/textures/lighthouselamp_metallicRoughness.png","models/floating/textures/lighthouselamp_normal.jpeg","models/floating/textures/log_A_baseColor.jpeg","models/floating/textures/log_A_metallicRoughness.png","models/floating/textures/log_A_normal.jpeg","models/floating/textures/log_B_baseColor.jpeg","models/floating/textures/log_B_metallicRoughness.png","models/floating/textures/log_B_normal.jpeg","models/floating/textures/mushroom_huge_A_baseColor.jpeg","models/floating/textures/mushroom_huge_A_metallicRoughness.png","models/floating/textures/mushroom_huge_A_normal.jpeg","models/floating/textures/mushroom_medium_A_baseColor.jpeg","models/floating/textures/mushroom_medium_A_metallicRoughness.png","models/floating/textures/mushroom_medium_A_normal.jpeg","models/floating/textures/mushroom_medium_B_baseColor.jpeg","models/floating/textures/mushroom_medium_B_metallicRoughness.png","models/floating/textures/mushroom_medium_B_normal.jpeg","models/floating/textures/mushroom_medium_C_baseColor.jpeg","models/floating/textures/mushroom_medium_C_metallicRoughness.png","models/floating/textures/mushroom_medium_C_normal.jpeg","models/floating/textures/mushroom_small_A_baseColor.jpeg","models/floating/textures/mushroom_small_A_metallicRoughness.png","models/floating/textures/mushroom_small_A_normal.jpeg","models/floating/textures/mushroom_small_C_baseColor.jpeg","models/floating/textures/mushroom_small_C_metallicRoughness.png","models/floating/textures/mushroom_small_C_normal.jpeg","models/floating/textures/mushroom_tiny_A_baseColor.jpeg","models/floating/textures/mushroom_tiny_A_metallicRoughness.png","models/floating/textures/mushroom_tiny_A_normal.jpeg","models/floating/textures/mushroom_tiny_C_baseColor.jpeg","models/floating/textures/mushroom_tiny_C_metallicRoughness.png","models/floating/textures/mushroom_tiny_C_normal.jpeg","models/floating/textures/platform_baseColor.jpeg","models/floating/textures/platform_metallicRoughness.png","models/floating/textures/platform_normal.jpeg","models/floating/textures/platform_up_baseColor.jpeg","models/floating/textures/platform_up_normal.jpeg","models/floating/textures/rocks_baseColor.jpeg","models/floating/textures/rocks_metallicRoughness.png","models/floating/textures/rocks_normal.jpeg","models/floating/textures/rock_5_baseColor.jpeg","models/floating/textures/rock_5_metallicRoughness.png","models/floating/textures/rock_5_normal.jpeg","models/floating/textures/sticks_A_baseColor.jpeg","models/floating/textures/sticks_A_metallicRoughness.png","models/floating/textures/sticks_A_normal.jpeg","models/floating/textures/sticks_B_baseColor.jpeg","models/floating/textures/sticks_B_metallicRoughness.png","models/floating/textures/sticks_B_normal.jpeg","models/floating/textures/sticks_C_baseColor.jpeg","models/floating/textures/sticks_C_metallicRoughness.png","models/floating/textures/sticks_C_normal.jpeg","models/floating/textures/sticks_D_baseColor.jpeg","models/floating/textures/sticks_D_metallicRoughness.png","models/floating/textures/sticks_D_normal.jpeg","models/floating/textures/stone_A_baseColor.jpeg","models/floating/textures/stone_A_metallicRoughness.png","models/floating/textures/stone_A_normal.jpeg","models/floating/textures/stone_B_baseColor.jpeg","models/floating/textures/stone_B_metallicRoughness.png","models/floating/textures/stone_B_normal.jpeg","models/floating/textures/stone_C_baseColor.jpeg","models/floating/textures/stone_C_metallicRoughness.png","models/floating/textures/stone_C_normal.jpeg","models/floating/textures/stone_D_baseColor.jpeg","models/floating/textures/stone_D_metallicRoughness.png","models/floating/textures/stone_D_normal.jpeg","models/floating/textures/stone_stairs_baseColor.jpeg","models/floating/textures/stone_stairs_metallicRoughness.png","models/floating/textures/stone_stairs_normal.jpeg","models/floating/textures/window_baseColor.jpeg","models/floating/textures/window_metallicRoughness.png","models/floating/textures/window_normal.jpeg","models/floating/textures/wood_baseColor.jpeg","models/floating/textures/wood_normal.jpeg","models/gitgui/gitgui.gltf","models/gitgui/untitled.gltf","models/lameule/Albedo.jpg","models/lameule/cheeese.bin","models/lameule/cheeese.gltf","models/lameule/Image.png","models/lameule/Normal.jpg","models/lameule/Roughness.png","models/map/pin.gltf","models/RL/Car/license.txt","models/RL/Car/scene.bin","models/RL/Car/scene.gltf","models/RL/Car/textures/Octane_Chassis_baseColor.png","models/RL/Car/textures/Octane_Chassis_metallicRoughness.png","models/switch/license.txt","models/switch/scene.bin","models/switch/scene.gltf","models/switch/textures/BaseCol_baseColor.png","models/switch/textures/Opacity_Stuff_baseColor.png","robot.txt","styles/reset.scss","three/journey/11/textures/checkerboard-1024x1024.png","three/journey/11/textures/checkerboard-8x8.png","three/journey/11/textures/door/alpha.jpg","three/journey/11/textures/door/ambientOcclusion.jpg","three/journey/11/textures/door/color.jpg","three/journey/11/textures/door/height.jpg","three/journey/11/textures/door/metalness.jpg","three/journey/11/textures/door/normal.jpg","three/journey/11/textures/door/roughness.jpg","three/journey/11/textures/minecraft.png","three/journey/12/textures/door/alpha.jpg","three/journey/12/textures/door/ambientOcclusion.jpg","three/journey/12/textures/door/color.jpg","three/journey/12/textures/door/height.jpg","three/journey/12/textures/door/metalness.jpg","three/journey/12/textures/door/normal.jpg","three/journey/12/textures/door/roughness.jpg","three/journey/12/textures/environmentMaps/0/nx.jpg","three/journey/12/textures/environmentMaps/0/ny.jpg","three/journey/12/textures/environmentMaps/0/nz.jpg","three/journey/12/textures/environmentMaps/0/px.jpg","three/journey/12/textures/environmentMaps/0/py.jpg","three/journey/12/textures/environmentMaps/0/pz.jpg","three/journey/12/textures/environmentMaps/1/nx.jpg","three/journey/12/textures/environmentMaps/1/ny.jpg","three/journey/12/textures/environmentMaps/1/nz.jpg","three/journey/12/textures/environmentMaps/1/px.jpg","three/journey/12/textures/environmentMaps/1/py.jpg","three/journey/12/textures/environmentMaps/1/pz.jpg","three/journey/12/textures/environmentMaps/2/nx.jpg","three/journey/12/textures/environmentMaps/2/ny.jpg","three/journey/12/textures/environmentMaps/2/nz.jpg","three/journey/12/textures/environmentMaps/2/px.jpg","three/journey/12/textures/environmentMaps/2/py.jpg","three/journey/12/textures/environmentMaps/2/pz.jpg","three/journey/12/textures/environmentMaps/3/nx.jpg","three/journey/12/textures/environmentMaps/3/ny.jpg","three/journey/12/textures/environmentMaps/3/nz.jpg","three/journey/12/textures/environmentMaps/3/px.jpg","three/journey/12/textures/environmentMaps/3/py.jpg","three/journey/12/textures/environmentMaps/3/pz.jpg","three/journey/12/textures/gradients/3.jpg","three/journey/12/textures/gradients/5.jpg","three/journey/12/textures/matcaps/1.png","three/journey/12/textures/matcaps/2.png","three/journey/12/textures/matcaps/3.png","three/journey/12/textures/matcaps/4.png","three/journey/12/textures/matcaps/5.png","three/journey/12/textures/matcaps/6.png","three/journey/12/textures/matcaps/7.png","three/journey/12/textures/matcaps/8.png","three/journey/13/fonts/Belanosima-Bold.ttf","three/journey/13/fonts/Belanosima-Regular.ttf","three/journey/13/fonts/Belanosima-SemiBold.ttf","three/journey/13/fonts/Belanosima_SemiBold_Regular.json","three/journey/13/textures/matcaps/1.png","three/journey/13/textures/matcaps/2.png","three/journey/13/textures/matcaps/3.png","three/journey/13/textures/matcaps/4.png","three/journey/13/textures/matcaps/5.png","three/journey/13/textures/matcaps/6.png","three/journey/13/textures/matcaps/7.png","three/journey/13/textures/matcaps/8.png","three/journey/16/textures/bakedShadow.jpg","three/journey/16/textures/door/alpha.jpg","three/journey/16/textures/door/ambientOcclusion.jpg","three/journey/16/textures/door/color.jpg","three/journey/16/textures/door/height.jpg","three/journey/16/textures/door/metalness.jpg","three/journey/16/textures/door/normal.jpg","three/journey/16/textures/door/roughness.jpg","three/journey/16/textures/environmentMaps/0/nx.jpg","three/journey/16/textures/environmentMaps/0/ny.jpg","three/journey/16/textures/environmentMaps/0/nz.jpg","three/journey/16/textures/environmentMaps/0/px.jpg","three/journey/16/textures/environmentMaps/0/py.jpg","three/journey/16/textures/environmentMaps/0/pz.jpg","three/journey/16/textures/environmentMaps/1/nx.jpg","three/journey/16/textures/environmentMaps/1/ny.jpg","three/journey/16/textures/environmentMaps/1/nz.jpg","three/journey/16/textures/environmentMaps/1/px.jpg","three/journey/16/textures/environmentMaps/1/py.jpg","three/journey/16/textures/environmentMaps/1/pz.jpg","three/journey/16/textures/environmentMaps/2/nx.jpg","three/journey/16/textures/environmentMaps/2/ny.jpg","three/journey/16/textures/environmentMaps/2/nz.jpg","three/journey/16/textures/environmentMaps/2/px.jpg","three/journey/16/textures/environmentMaps/2/py.jpg","three/journey/16/textures/environmentMaps/2/pz.jpg","three/journey/16/textures/environmentMaps/3/nx.jpg","three/journey/16/textures/environmentMaps/3/ny.jpg","three/journey/16/textures/environmentMaps/3/nz.jpg","three/journey/16/textures/environmentMaps/3/px.jpg","three/journey/16/textures/environmentMaps/3/py.jpg","three/journey/16/textures/environmentMaps/3/pz.jpg","three/journey/16/textures/gradients/3.jpg","three/journey/16/textures/gradients/5.jpg","three/journey/16/textures/matcaps/1.png","three/journey/16/textures/matcaps/2.png","three/journey/16/textures/matcaps/3.png","three/journey/16/textures/matcaps/4.png","three/journey/16/textures/matcaps/5.png","three/journey/16/textures/matcaps/6.png","three/journey/16/textures/matcaps/7.png","three/journey/16/textures/matcaps/8.png","three/journey/16/textures/simpleShadow.jpg","three/journey/17/textures/bricks/ambientOcclusion.jpg","three/journey/17/textures/bricks/color.jpg","three/journey/17/textures/bricks/normal.jpg","three/journey/17/textures/bricks/roughness.jpg","three/journey/17/textures/door/alpha.jpg","three/journey/17/textures/door/ambientOcclusion.jpg","three/journey/17/textures/door/color.jpg","three/journey/17/textures/door/height.jpg","three/journey/17/textures/door/metalness.jpg","three/journey/17/textures/door/normal.jpg","three/journey/17/textures/door/roughness.jpg","three/journey/17/textures/grass/ambientOcclusion.jpg","three/journey/17/textures/grass/color.jpg","three/journey/17/textures/grass/normal.jpg","three/journey/17/textures/grass/roughness.jpg","three/journey/18/textures/particles/1.png","three/journey/18/textures/particles/10.png","three/journey/18/textures/particles/11.png","three/journey/18/textures/particles/12.png","three/journey/18/textures/particles/13.png","three/journey/18/textures/particles/2.png","three/journey/18/textures/particles/3.png","three/journey/18/textures/particles/4.png","three/journey/18/textures/particles/5.png","three/journey/18/textures/particles/6.png","three/journey/18/textures/particles/7.png","three/journey/18/textures/particles/8.png","three/journey/18/textures/particles/9.png","three/journey/20/textures/gradients/3.jpg","three/journey/20/textures/gradients/5.jpg","three/journey/21/sounds/hit.mp3","three/journey/21/textures/environmentMaps/0/nx.png","three/journey/21/textures/environmentMaps/0/ny.png","three/journey/21/textures/environmentMaps/0/nz.png","three/journey/21/textures/environmentMaps/0/px.png","three/journey/21/textures/environmentMaps/0/py.png","three/journey/21/textures/environmentMaps/0/pz.png","three/journey/21/textures/environmentMaps/1/nx.png","three/journey/21/textures/environmentMaps/1/ny.png","three/journey/21/textures/environmentMaps/1/nz.png","three/journey/21/textures/environmentMaps/1/px.png","three/journey/21/textures/environmentMaps/1/py.png","three/journey/21/textures/environmentMaps/1/pz.png","three/journey/21/textures/environmentMaps/2/nx.png","three/journey/21/textures/environmentMaps/2/ny.png","three/journey/21/textures/environmentMaps/2/nz.png","three/journey/21/textures/environmentMaps/2/px.png","three/journey/21/textures/environmentMaps/2/py.png","three/journey/21/textures/environmentMaps/2/pz.png","three/journey/21/textures/environmentMaps/3/nx.png","three/journey/21/textures/environmentMaps/3/ny.png","three/journey/21/textures/environmentMaps/3/nz.png","three/journey/21/textures/environmentMaps/3/px.png","three/journey/21/textures/environmentMaps/3/py.png","three/journey/21/textures/environmentMaps/3/pz.png","three/journey/21/textures/environmentMaps/4/nx.png","three/journey/21/textures/environmentMaps/4/ny.png","three/journey/21/textures/environmentMaps/4/nz.png","three/journey/21/textures/environmentMaps/4/px.png","three/journey/21/textures/environmentMaps/4/py.png","three/journey/21/textures/environmentMaps/4/pz.png","three/journey/22/models/Duck/glTF/Duck.gltf","three/journey/22/models/Duck/glTF/Duck0.bin","three/journey/22/models/Duck/glTF/DuckCM.png","three/journey/22/models/Duck/glTF-Binary/Duck.glb","three/journey/22/models/Duck/glTF-Draco/0.bin","three/journey/22/models/Duck/glTF-Draco/Duck.bin","three/journey/22/models/Duck/glTF-Draco/Duck.gltf","three/journey/22/models/Duck/glTF-Draco/DuckCM.png","three/journey/22/models/Duck/glTF-Embedded/Duck.gltf","three/journey/22/models/Duck/README.md","three/journey/22/models/Duck/screenshot/screenshot.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet.bin","three/journey/22/models/FlightHelmet/glTF/FlightHelmet.gltf","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_BaseColor.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_Normal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_OcclusionRoughMetal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_BaseColor.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_Normal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_OcclusionRoughMetal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_BaseColor.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_Normal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_OcclusionRoughMetal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_BaseColor.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_Normal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_OcclusionRoughMetal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_BaseColor.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_Normal.png","three/journey/22/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_OcclusionRoughMetal.png","three/journey/22/models/FlightHelmet/README.md","three/journey/22/models/FlightHelmet/screenshot/screenshot.jpg","three/journey/22/models/Fox/glTF/Fox.bin","three/journey/22/models/Fox/glTF/Fox.gltf","three/journey/22/models/Fox/glTF/Texture.png","three/journey/22/models/Fox/glTF-Binary/Fox.glb","three/journey/22/models/Fox/glTF-Embedded/Fox.gltf","three/journey/22/models/Fox/README.md","three/journey/22/models/Fox/screenshot/screenshot.jpg","three/journey/23/models/Duck/glTF/Duck.gltf","three/journey/23/models/Duck/glTF/Duck0.bin","three/journey/23/models/Duck/glTF/DuckCM.png","three/journey/23/models/Duck/glTF-Binary/Duck.glb","three/journey/23/models/Duck/glTF-Draco/0.bin","three/journey/23/models/Duck/glTF-Draco/Duck.bin","three/journey/23/models/Duck/glTF-Draco/Duck.gltf","three/journey/23/models/Duck/glTF-Draco/DuckCM.png","three/journey/23/models/Duck/glTF-Embedded/Duck.gltf","three/journey/23/models/Duck/README.md","three/journey/23/models/Duck/screenshot/screenshot.png","three/journey/24/blend/Tac-tic/23.blend","three/journey/24/blend/Tac-tic/23.blend1","three/journey/24/blend/Tac-tic/pion.blend","three/journey/24/blend/Tac-tic/pion.blend1","three/journey/24/blend/Tac-tic/pion.glb","three/journey/24/blend/Tac-tic/tac-tic.glb","three/journey/24/blend/Tac-tic/Textures/Metal/Material_2034.jpg","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_ambientOcclusion.jpg","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_basecolor.jpg","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_height.png","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_metallic.jpg","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_normal.jpg","three/journey/24/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_roughness.jpg","three/journey/24/blend/Tac-tic/Textures/Wood/Material_1766.jpg","three/journey/24/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_ambientOcclusion.jpg","three/journey/24/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_basecolor.jpg","three/journey/24/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_height.png","three/journey/24/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_normal.jpg","three/journey/24/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_roughness.jpg","three/journey/24/models/tac-tic.glb","three/journey/25/environmentMaps/0/2k.hdr","three/journey/25/environmentMaps/0/nx.png","three/journey/25/environmentMaps/0/ny.png","three/journey/25/environmentMaps/0/nz.png","three/journey/25/environmentMaps/0/px.png","three/journey/25/environmentMaps/0/py.png","three/journey/25/environmentMaps/0/pz.png","three/journey/25/environmentMaps/1/2k.hdr","three/journey/25/environmentMaps/1/nx.png","three/journey/25/environmentMaps/1/ny.png","three/journey/25/environmentMaps/1/nz.png","three/journey/25/environmentMaps/1/px.png","three/journey/25/environmentMaps/1/py.png","three/journey/25/environmentMaps/1/pz.png","three/journey/25/environmentMaps/2/2k.hdr","three/journey/25/environmentMaps/2/nx.png","three/journey/25/environmentMaps/2/ny.png","three/journey/25/environmentMaps/2/nz.png","three/journey/25/environmentMaps/2/px.png","three/journey/25/environmentMaps/2/py.png","three/journey/25/environmentMaps/2/pz.png","three/journey/25/environmentMaps/blockadesLabsSkybox/anime_art_style_japan_streets_with_cherry_blossom_.jpg","three/journey/25/environmentMaps/blockadesLabsSkybox/digital_painting_neon_city_night_orange_lights_.jpg","three/journey/25/environmentMaps/blockadesLabsSkybox/fantasy_lands_castles_at_night.jpg","three/journey/25/environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg","three/journey/25/environmentMaps/blockadesLabsSkybox/scifi_white_sky_scrapers_in_clouds_at_day_time.jpg","three/journey/25/environmentMaps/nvidiaCanvas-4k.exr","three/journey/25/models/.gitkeep","three/journey/25/models/FlightHelmet/glTF/FlightHelmet.bin","three/journey/25/models/FlightHelmet/glTF/FlightHelmet.gltf","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_BaseColor.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_Normal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_OcclusionRoughMetal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_BaseColor.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_Normal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_OcclusionRoughMetal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_BaseColor.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_Normal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_OcclusionRoughMetal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_BaseColor.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_Normal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_OcclusionRoughMetal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_BaseColor.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_Normal.png","three/journey/25/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_OcclusionRoughMetal.png","three/journey/25/models/FlightHelmet/README.md","three/journey/25/models/FlightHelmet/screenshot/screenshot.jpg","three/journey/26/environmentMaps/0/2k.hdr","three/journey/26/environmentMaps/0/nx.png","three/journey/26/environmentMaps/0/ny.png","three/journey/26/environmentMaps/0/nz.png","three/journey/26/environmentMaps/0/px.png","three/journey/26/environmentMaps/0/py.png","three/journey/26/environmentMaps/0/pz.png","three/journey/26/environmentMaps/1/2k.hdr","three/journey/26/environmentMaps/1/nx.png","three/journey/26/environmentMaps/1/ny.png","three/journey/26/environmentMaps/1/nz.png","three/journey/26/environmentMaps/1/px.png","three/journey/26/environmentMaps/1/py.png","three/journey/26/environmentMaps/1/pz.png","three/journey/26/environmentMaps/2/2k.hdr","three/journey/26/environmentMaps/2/nx.png","three/journey/26/environmentMaps/2/ny.png","three/journey/26/environmentMaps/2/nz.png","three/journey/26/environmentMaps/2/px.png","three/journey/26/environmentMaps/2/py.png","three/journey/26/environmentMaps/2/pz.png","three/journey/26/models/.gitkeep","three/journey/26/models/FlightHelmet/glTF/FlightHelmet.bin","three/journey/26/models/FlightHelmet/glTF/FlightHelmet.gltf","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_BaseColor.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_Normal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_GlassPlasticMat_OcclusionRoughMetal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_BaseColor.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_Normal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LeatherPartsMat_OcclusionRoughMetal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_BaseColor.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_Normal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_LensesMat_OcclusionRoughMetal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_BaseColor.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_Normal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_MetalPartsMat_OcclusionRoughMetal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_BaseColor.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_Normal.png","three/journey/26/models/FlightHelmet/glTF/FlightHelmet_Materials_RubberWoodMat_OcclusionRoughMetal.png","three/journey/26/models/FlightHelmet/README.md","three/journey/26/models/FlightHelmet/screenshot/screenshot.jpg","three/journey/26/models/hamburger.glb","three/journey/26/textures/castle_brick_broken_06/castle_brick_broken_06_arm_1k.jpg","three/journey/26/textures/castle_brick_broken_06/castle_brick_broken_06_diff_1k.jpg","three/journey/26/textures/castle_brick_broken_06/castle_brick_broken_06_nor_gl_1k.png","three/journey/26/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_arm_1k.jpg","three/journey/26/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_diff_1k.jpg","three/journey/26/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_nor_gl_1k.png","three/journey/28/textures/flag-french.jpg","three/journey/32/draco/draco_decoder.js","three/journey/32/draco/draco_decoder.wasm","three/journey/32/draco/draco_encoder.js","three/journey/32/draco/draco_wasm_wrapper.js","three/journey/32/draco/gltf/draco_decoder.js","three/journey/32/draco/gltf/draco_decoder.wasm","three/journey/32/draco/gltf/draco_encoder.js","three/journey/32/draco/gltf/draco_wasm_wrapper.js","three/journey/32/draco/README.md","three/journey/32/models/.gitkeep","three/journey/32/models/LeePerrySmith/color.jpg","three/journey/32/models/LeePerrySmith/LeePerrySmith.glb","three/journey/32/models/LeePerrySmith/LeePerrySmith_License.txt","three/journey/32/models/LeePerrySmith/normal.jpg","three/journey/32/textures/environmentMaps/0/nx.jpg","three/journey/32/textures/environmentMaps/0/ny.jpg","three/journey/32/textures/environmentMaps/0/nz.jpg","three/journey/32/textures/environmentMaps/0/px.jpg","three/journey/32/textures/environmentMaps/0/py.jpg","three/journey/32/textures/environmentMaps/0/pz.jpg","three/journey/33/models/.gitkeep","three/journey/33/models/DamagedHelmet/glTF/DamagedHelmet.bin","three/journey/33/models/DamagedHelmet/glTF/DamagedHelmet.gltf","three/journey/33/models/DamagedHelmet/glTF/Default_albedo.jpg","three/journey/33/models/DamagedHelmet/glTF/Default_AO.jpg","three/journey/33/models/DamagedHelmet/glTF/Default_emissive.jpg","three/journey/33/models/DamagedHelmet/glTF/Default_metalRoughness.jpg","three/journey/33/models/DamagedHelmet/glTF/Default_normal.jpg","three/journey/33/models/DamagedHelmet/README.md","three/journey/33/textures/environmentMaps/0/nx.jpg","three/journey/33/textures/environmentMaps/0/ny.jpg","three/journey/33/textures/environmentMaps/0/nz.jpg","three/journey/33/textures/environmentMaps/0/px.jpg","three/journey/33/textures/environmentMaps/0/py.jpg","three/journey/33/textures/environmentMaps/0/pz.jpg","three/journey/33/textures/interfaceNormalMap.png","three/lameule/texture/leather/Albedo.jpg","three/lameule/texture/leather/AmbientOcclusion.jpg","three/lameule/texture/leather/Height.png","three/lameule/texture/leather/Material_1518.jpg","three/lameule/texture/leather/Normal.jpg","three/lameule/texture/leather/Roughness.jpg","three/tac-tic/blend/Tac-tic/23.blend","three/tac-tic/blend/Tac-tic/23.blend1","three/tac-tic/blend/Tac-tic/pion.blend","three/tac-tic/blend/Tac-tic/pion.blend1","three/tac-tic/blend/Tac-tic/pion.glb","three/tac-tic/blend/Tac-tic/tac-tic.glb","three/tac-tic/blend/Tac-tic/Textures/Metal/Material_2034.jpg","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_ambientOcclusion.jpg","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_basecolor.jpg","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_height.png","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_metallic.jpg","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_normal.jpg","three/tac-tic/blend/Tac-tic/Textures/Metal/Sci-Fi_Wall_014_roughness.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood/Material_1766.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_ambientOcclusion.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_basecolor.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_height.png","three/tac-tic/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_normal.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood/Wood_Plywood_Front_001_roughness.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood2/Wood_007_COLOR.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood2/Wood_007_DISP.png","three/tac-tic/blend/Tac-tic/Textures/Wood2/Wood_007_NORM.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood2/Wood_007_OCC.jpg","three/tac-tic/blend/Tac-tic/Textures/Wood2/Wood_007_ROUGH.jpg","three/tac-tic/models/pion.glb","three/tac-tic/models/tac-tic.glb"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".svg":"image/svg+xml",".scss":"text/x-scss",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".jpeg":"image/jpeg",".json":"application/json",".mp3":"audio/mpeg",".glb":"model/gltf-binary",".md":"text/markdown",".exr":"image/aces",".js":"application/javascript",".wasm":"application/wasm"},
	_: {
		client: {"start":"_app/immutable/entry/start.4b900517.js","app":"_app/immutable/entry/app.aacd0a6b.js","imports":["_app/immutable/entry/start.4b900517.js","_app/immutable/chunks/index.137f5445.js","_app/immutable/chunks/singletons.57a9acf1.js","_app/immutable/chunks/index.d60425e4.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.aacd0a6b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.137f5445.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-887d2254.js'),
			() => import('./chunks/1-2d876077.js'),
			() => import('./chunks/2-5bab190f.js'),
			() => import('./chunks/3-3f8f2e55.js'),
			() => import('./chunks/4-f3902cc9.js'),
			() => import('./chunks/5-fade6698.js'),
			() => import('./chunks/6-8385378f.js'),
			() => import('./chunks/7-0cc767d7.js'),
			() => import('./chunks/8-1d5b4b91.js'),
			() => import('./chunks/9-9aac755c.js'),
			() => import('./chunks/10-22f12d97.js'),
			() => import('./chunks/11-91ec8727.js'),
			() => import('./chunks/12-f582684c.js'),
			() => import('./chunks/13-6d69351f.js'),
			() => import('./chunks/14-4695af22.js'),
			() => import('./chunks/15-5e116b81.js'),
			() => import('./chunks/16-7a463be7.js'),
			() => import('./chunks/17-b72abd09.js'),
			() => import('./chunks/18-a091fcf0.js'),
			() => import('./chunks/19-428f24f8.js'),
			() => import('./chunks/20-f7566aa1.js'),
			() => import('./chunks/21-926d11f2.js'),
			() => import('./chunks/22-15eaeef8.js'),
			() => import('./chunks/23-adfad4a5.js'),
			() => import('./chunks/24-92f9c5b9.js'),
			() => import('./chunks/25-643317fd.js'),
			() => import('./chunks/26-9dfd7488.js'),
			() => import('./chunks/27-edb37045.js'),
			() => import('./chunks/28-9ec2aced.js'),
			() => import('./chunks/29-0d7d51d7.js'),
			() => import('./chunks/30-8b63bb2f.js'),
			() => import('./chunks/31-7c8eb9e5.js'),
			() => import('./chunks/32-85771c8b.js'),
			() => import('./chunks/33-bb6f60ed.js'),
			() => import('./chunks/34-897f2ee3.js'),
			() => import('./chunks/35-f1730a9a.js'),
			() => import('./chunks/36-fd96830e.js'),
			() => import('./chunks/37-7e055f1b.js'),
			() => import('./chunks/38-d190e94e.js'),
			() => import('./chunks/39-80a2ca34.js'),
			() => import('./chunks/40-04fb2f65.js'),
			() => import('./chunks/41-0710f4cc.js'),
			() => import('./chunks/42-5fd08a20.js'),
			() => import('./chunks/43-01553223.js'),
			() => import('./chunks/44-5857bcce.js'),
			() => import('./chunks/45-9781d621.js'),
			() => import('./chunks/46-04c2adb1.js'),
			() => import('./chunks/47-129d9c25.js'),
			() => import('./chunks/48-39c33f5d.js')
		],
		routes: [
			{
				id: "/(portfolio)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(portfolio)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/home",
				pattern: /^\/admin\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/login",
				pattern: /^\/admin\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/logout",
				pattern: /^\/admin\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/admin/register",
				pattern: /^\/admin\/register\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
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
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(tests)/pokemon",
				pattern: /^\/pokemon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(tests)/pokemon/[pokemonName]",
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: [{"name":"pokemonName","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(portfolio)/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(tests)/three/gltf",
				pattern: /^\/three\/gltf\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/10",
				pattern: /^\/three\/journey\/10\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/11",
				pattern: /^\/three\/journey\/11\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/12",
				pattern: /^\/three\/journey\/12\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/13",
				pattern: /^\/three\/journey\/13\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/15",
				pattern: /^\/three\/journey\/15\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/16",
				pattern: /^\/three\/journey\/16\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/17",
				pattern: /^\/three\/journey\/17\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/18",
				pattern: /^\/three\/journey\/18\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/19",
				pattern: /^\/three\/journey\/19\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/20",
				pattern: /^\/three\/journey\/20\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/21",
				pattern: /^\/three\/journey\/21\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/22",
				pattern: /^\/three\/journey\/22\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/23",
				pattern: /^\/three\/journey\/23\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/24",
				pattern: /^\/three\/journey\/24\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/25",
				pattern: /^\/three\/journey\/25\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/26",
				pattern: /^\/three\/journey\/26\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/28",
				pattern: /^\/three\/journey\/28\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/29",
				pattern: /^\/three\/journey\/29\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/30",
				pattern: /^\/three\/journey\/30\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/31",
				pattern: /^\/three\/journey\/31\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/32",
				pattern: /^\/three\/journey\/32\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/33",
				pattern: /^\/three\/journey\/33\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/5",
				pattern: /^\/three\/journey\/5\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/6",
				pattern: /^\/three\/journey\/6\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/7",
				pattern: /^\/three\/journey\/7\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/8",
				pattern: /^\/three\/journey\/8\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(tests)/three/journey/9",
				pattern: /^\/three\/journey\/9\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(tests)/three/lameule",
				pattern: /^\/three\/lameule\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(tests)/three/map",
				pattern: /^\/three\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(tests)/three/rl",
				pattern: /^\/three\/rl\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(tests)/three/tac-tic",
				pattern: /^\/three\/tac-tic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(tests)/unsplash/random",
				pattern: /^\/unsplash\/random\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 48 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: lang } = await import ('./chunks/lang-27851845.js');
			return { lang };
		}
	}
};

const prerendered = new Set(["/threejs","/threejs/__data.json","/threejs/1","/threejs/1/__data.json","/threejs/2","/threejs/2/__data.json","/threejs/3","/threejs/3/__data.json","/threejs/4","/threejs/4/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
