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
    import testVertexShader from '$lib/three/shaders/28/vertex.glsl'
    import testFragmentShader from '$lib/three/shaders/28/fragment.glsl'



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
		 * Textures
		 */
		const textureLoader = new THREE.TextureLoader();
		const flagTexture = textureLoader.load("/three/journey/28/textures/flag-french.jpg")

		/**
		 * Test mesh
		 */
		// Geometry
		const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);


		const count = geometry.attributes.position.count
		const randoms = new Float32Array(count)

		for(let i =0; i < count; i++){
			randoms[i] = Math.random()
		}

		geometry.setAttribute("aRandom",new THREE.BufferAttribute(randoms,1))

		console.log(geometry);
		// Material
		const material = new THREE.ShaderMaterial({
            vertexShader:testVertexShader,
            fragmentShader:testFragmentShader,
			transparent:true,
            side:THREE.DoubleSide,
			uniforms:{
				uFrequency: {type: 'vec2', value: new THREE.Vector2(10,5)},
				uTime: {type: 'float', value: 0},
				uTexture: {type:'sampler2D', value: flagTexture}
			}
        });

		gui.add(material.uniforms.uFrequency.value,'x',0,20,0.001)
		gui.add(material.uniforms.uFrequency.value,'y',0,20,0.001)
		// Mesh
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

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
		camera.position.set(0.25, -0.25, 1);
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

			//Update material
			material.uniforms.uTime.value = elapsedTime

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
