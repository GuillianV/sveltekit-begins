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
	import VertexShader from '$lib/three/shaders/35/vertex.glsl';
	import FragmentShader from '$lib/three/shaders/35/fragment.glsl';
	import Stats from 'stats.js';

	let loadingBar;
	onMount(() => {
		/**
		 * Loaders
		 */
		const loadingManager = new THREE.LoadingManager(
		()=>{
			//Loaded
			gsap.to(materialOverlay.uniforms.uAlpha,{
				duration:3,
				value: 0,
			})
			gsap.to(loadingBar,{
				duration:3,
				opacity:0
			})
		},
		(itemUrl,itemsLoaded,itemsTotal)=>{
			let loadPercentage =itemsLoaded  / itemsTotal
			gsap.to(loadingBar,{
				scale:loadPercentage
			})
			//Progress
		})



		const gltfLoader = new GLTFLoader(loadingManager);
		const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager);

		/**
		 * Base
		 */
		// Debug
		const debugObject = {};

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		/**
		 * Update all materials
		 */
		const updateAllMaterials = () => {
			scene.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
					// child.material.envMap = environmentMap
					child.material.envMapIntensity = debugObject.envMapIntensity;
					child.material.needsUpdate = true;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
		};

		/**
		 * Environment map
		 */
		const environmentMap = cubeTextureLoader.load([
			'/three/journey/35/textures/environmentMaps/0/px.jpg',
			'/three/journey/35/textures/environmentMaps/0/nx.jpg',
			'/three/journey/35/textures/environmentMaps/0/py.jpg',
			'/three/journey/35/textures/environmentMaps/0/ny.jpg',
			'/three/journey/35/textures/environmentMaps/0/pz.jpg',
			'/three/journey/35/textures/environmentMaps/0/nz.jpg'
		]);

		environmentMap.colorSpace = THREE.SRGBColorSpace;

		scene.background = environmentMap;
		scene.environment = environmentMap;

		debugObject.envMapIntensity = 2.5;

		/**
		 * Models
		 */
		gltfLoader.load('/three/journey/35/models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) => {
			gltf.scene.scale.set(10, 10, 10);
			gltf.scene.position.set(0, -4, 0);
			gltf.scene.rotation.y = Math.PI * 0.5;
			scene.add(gltf.scene);

			updateAllMaterials();
		});

		/**
		 * Lights
		 */
		const directionalLight = new THREE.DirectionalLight('#ffffff', 3);
		directionalLight.castShadow = true;
		directionalLight.shadow.camera.far = 15;
		directionalLight.shadow.mapSize.set(1024, 1024);
		directionalLight.shadow.normalBias = 0.05;
		directionalLight.position.set(0.25, 3, -2.25);
		scene.add(directionalLight);

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		});

		/**
		 * Camera
		 */
		// Base camera
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.set(4, 1, -4);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true
		});
		renderer.useLegacyLights = false;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 3;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/*
		Overlay		
		*/
		const geometryOverlay = new THREE.PlaneGeometry(2,2,1,1)
		const materialOverlay = new THREE.ShaderMaterial({
			transparent:true,
			fragmentShader:FragmentShader,
			vertexShader:VertexShader,
			uniforms:{
				uAlpha:{
					type:'float',
					value:1
				}
			}
		});
		const meshOverlay = new THREE.Mesh(geometryOverlay,materialOverlay)
		scene.add(meshOverlay)
		/**
		 * Animate
		 */
		const tick = () => {
			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

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
			<div class="loading-bar" bind:this={loadingBar}></div>
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
			width: 100%;
			height: 100vh;
			overflow: hidden;

			.loading-bar{
				z-index: 2;
				position: absolute;
				top: 50%;
				left: 0;
				height: 2px;
				width: 100%;
				transform: scaleX(0);
				transform-origin: left;
				background-color: aliceblue;

			}
			canvas.webgl {
				z-index: 2;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
