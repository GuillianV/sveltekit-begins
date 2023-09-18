<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import { FontLoader } from 'three/addons/loaders/FontLoader.js';
	import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
	import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
	import { GroundProjectedSkybox } from 'three/addons/objects/GroundProjectedSkybox.js';
	import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
	import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
	import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader';
	import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js';
	import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import GUI from 'lil-gui/dist/lil-gui.esm';
	import * as CANNON from 'cannon-es';
	import VertexShader from '$lib/three/shaders/33/vertex.glsl';
	import FragmentShader from '$lib/three/shaders/33/fragment.glsl';

	onMount(() => {
		/**
		 * Base
		 */
		// Debug
		const gui = new GUI();

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		/**
		 * Loaders
		 */
		const gltfLoader = new GLTFLoader();
		const cubeTextureLoader = new THREE.CubeTextureLoader();
		const textureLoader = new THREE.TextureLoader();

		/**
		 * Update all materials
		 */
		const updateAllMaterials = () => {
			scene.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
					child.material.envMapIntensity = 2.5;
					child.material.needsUpdate = true;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
		};

		/**
		 * Environment map
		 */
		// const environmentMap = cubeTextureLoader.load([
		// 	'/three/journey/33/textures/environmentMaps/0/px.jpg',
		// 	'/three/journey/33/textures/environmentMaps/0/nx.jpg',
		// 	'/three/journey/33/textures/environmentMaps/0/py.jpg',
		// 	'/three/journey/33/textures/environmentMaps/0/ny.jpg',
		// 	'/three/journey/33/textures/environmentMaps/0/pz.jpg',
		// 	'/three/journey/33/textures/environmentMaps/0/nz.jpg'
		// ]);


		const bg = textureLoader.load("/images/lac.jpg")
		bg.generateMipmaps = false
		bg.minFilter = THREE.NearestFilter
		bg.magFilter = THREE.NearestFilter
		scene.background = bg;

		/**
		 * Models
		 */
		// gltfLoader.load('/three/journey/33/models/DamagedHelmet/glTF/DamagedHelmet.gltf', (gltf) => {
		// 	gltf.scene.scale.set(2, 2, 2);
		// 	gltf.scene.rotation.y = Math.PI * 0.5;
		// 	scene.add(gltf.scene);

		// 	updateAllMaterials();
		// });

		/**
		 * Lights
		 */
		const directionalLight = new THREE.DirectionalLight('#ffffff', 3);
		directionalLight.castShadow = true;
		directionalLight.shadow.mapSize.set(1024, 1024);
		directionalLight.shadow.camera.far = 15;
		directionalLight.shadow.normalBias = 0.05;
		directionalLight.position.set(0.25, 3, -2.25);
		//scene.add(directionalLight);

		/**
		 * Sizes
		 */
		const sizes = {
			width: canvas.clientWidth,
			height: canvas.clientHeight
		};

		const mouses = {
			x:0,
			y:0
		}

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = canvas.clientWidth;
			sizes.height = canvas.clientHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

			effectComposer.setPixelRatio(renderer.getPixelRatio());
			effectComposer.setSize(sizes.width, sizes.height);
		});

		canvas.addEventListener('mousemove',(event)=>{
			mouses.x = event.offsetX / sizes.width
			mouses.y = event.offsetY / sizes.height
		})

		
		canvas.addEventListener('mouseenter',(event)=>{
			customPass.material.uniforms.uMouseOut.value = false
			
		})

		canvas.addEventListener('mouseleave',(event)=>{
			customPass.material.uniforms.uMouseOut.value = true
		})

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(4, 1, -4);
		scene.add(camera);

		// Controls
		// const controls = new OrbitControls(camera, canvas);
		// controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha:true
		});
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;
		renderer.useLegacyLights = false;
		// renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 1.5;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 *
		 * PProcess
		 */

		const renderTarget = new THREE.WebGLRenderTarget(sizes.width,sizes.height, {
			sampples: 2
		});

		const effectComposer = new EffectComposer(renderer, renderTarget);
		effectComposer.setPixelRatio(renderer.getPixelRatio());
		effectComposer.setSize(sizes.width, sizes.height);

		const renderPass = new RenderPass(scene, camera);
		effectComposer.addPass(renderPass);

		// const gammaCorrectionShader = new ShaderPass(GammaCorrectionShader);
		// effectComposer.addPass(gammaCorrectionShader);
		// const dotScreenPass = new DotScreenPass()
		// dotScreenPass.enabled = false
		// effectComposer.addPass(dotScreenPass)
		

		const customPassProperties = {
			uniforms: {
				tDiffuse: {
					value: null
				},
				uMouses: {
					type:'vec2',
					value : new THREE.Vector2(mouses.x,mouses.y)
				},
				uTime: {
					type:'float',
					value :0
				},
				uResolution: {
					type: 'vec2',
					value: new THREE.Vector2(sizes.width,sizes.height),
				},
				uImageResolution: {
					type: 'vec2',
					value: new THREE.Vector2(5600,3200),
				},
				uMouseOut:{
					type:'bool',
					value:true
				}
			},
			vertexShader: VertexShader,
			fragmentShader: FragmentShader,
			transparent: true
		};

		const customPass = new ShaderPass(customPassProperties);
		effectComposer.addPass(customPass);

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();

			// Update controls
			// controls.update();
			customPass.material.uniforms.uMouses.value = new THREE.Vector2(mouses.x,mouses.y);
			customPass.material.uniforms.uTime.value = elapsedTime
			// Render
			//renderer.render(scene, camera);
			effectComposer.render();

			// Call tick again on the next frame
			window.requestAnimationFrame(tick);
		};

		tick();
	});
</script>

<div>
	<div class="app">
		<div class="container">
			<canvas class="webgl" />
			<img src="/images/back.png" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.app {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;

		z-index: 5;

		.container {
			position: relative;
			margin: 10vw 10vh;
			width: 100%;
			height: 80vh;
			overflow: hidden;
			border-radius: 15px;

			canvas.webgl {
				z-index: 2;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			img {
				z-index: 1;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-size: cover;
				object-fit: cover;
			}
		}
	}
</style>
