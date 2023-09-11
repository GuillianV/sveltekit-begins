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
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import GUI from 'lil-gui/dist/lil-gui.esm';
	import * as CANNON from 'cannon-es';
	import testVertexShader from '$lib/three/shaders/30/vertex.glsl';
	import testFragmentShader from '$lib/three/shaders/30/fragment.glsl';

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
		 * Water
		 */
		// Geometry
		const waterGeometry = new THREE.IcosahedronGeometry(2, 64);

		// Material
		const waterMaterial = new THREE.ShaderMaterial({
			vertexShader: testVertexShader,
			fragmentShader: testFragmentShader,
			transparent : true,
			side: THREE.DoubleSide,
			uniforms:{
				uTime: {type: 'float', value: 0},
				uBigWavesElevation: {type: 'float', value: 0.2},
				uBigWavesFrequency: {type: 'vec2', value: new THREE.Vector2(3.2,1.5)},
				uBigWavesSpeed: {type: 'float', value: 1},
				uDepthColor: {type: 'vec3', value: new THREE.Color("#0000CF")},
				uSurfaceColor: {type: 'vec3', value: new THREE.Color("#aabaff")},
				uSmallWavesElevation: { value: 0.15 },
				uSmallWavesFrequency: { value: 3 },
				uSmallWavesSpeed: { value: 0.2 },
				uSmallIterations: { value: 4 },
			}
		});


	 	const seaFolder =	gui.addFolder("Sea");
		seaFolder.add(waterMaterial.uniforms.uBigWavesElevation,"value",0,2,0.01).name("Big Wave elevation")
		seaFolder.add(waterMaterial.uniforms.uBigWavesFrequency.value,"x",0,10,0.1).name("Big Wave frequency X")
		seaFolder.add(waterMaterial.uniforms.uBigWavesFrequency.value,"y",0,10,0.1).name("Big Wave frequency Z")
		seaFolder.add(waterMaterial.uniforms.uBigWavesSpeed,"value",0,3,0.01).name("Big Wave speed")
		seaFolder.add(waterMaterial.uniforms.uSmallWavesElevation, 'value').min(0).max(1).step(0.001).name('uSmallWavesElevation')
		seaFolder.add(waterMaterial.uniforms.uSmallWavesFrequency, 'value').min(0).max(30).step(0.001).name('uSmallWavesFrequency')
		seaFolder.add(waterMaterial.uniforms.uSmallWavesSpeed, 'value').min(0).max(4).step(0.001).name('uSmallWavesSpeed')
		seaFolder.add(waterMaterial.uniforms.uSmallIterations, 'value').min(0).max(5).step(1).name('uSmallIterations')
		// Mesh
		const water = new THREE.Mesh(waterGeometry, waterMaterial);
		water.rotation.x = -Math.PI * 0.5;
		scene.add(water);

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
		camera.position.set(1, 1, -8);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();

		const tick = () => {
			const elapsedTime = clock.getElapsedTime();

			waterMaterial.uniforms.uTime.value = elapsedTime;
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
		<canvas class="webgl" />
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
		canvas.webgl {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba($color: #dadada, $alpha: 0.3);
		}
	}
</style>
