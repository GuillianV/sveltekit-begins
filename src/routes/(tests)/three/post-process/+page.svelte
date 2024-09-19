<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import Hexasphere from '$lib/hexasphere/hexasphere.js';
	import Stats from 'stats.js';
    import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
    import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
    import { DotScreenPass } from 'three/examples/jsm/postprocessing/DotScreenPass.js'

	onMount(() => {
		const stats = new Stats();
		stats.showPanel(0);
		document.body.appendChild(stats.dom);
		THREE.ColorManagement.enabled = false;

		/**
		 * Base
		 */
		// Debug
		// const gui = new GUI();

		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

		//LoadingManager
		const loadingManager = new THREE.LoadingManager(
			(load) => {
				console.log('Everythig Loaded');
			},
			(progress) => {
				// console.log(progress)
			},
			(error) => {
				console.log(error);
			}
		);

		const ambientLight = new THREE.AmbientLight('#ffffff', 0.3);
		scene.add(ambientLight);

		const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8);
		directionalLight.castShadow = true;
		directionalLight.position.set(0, 10, 0);
		const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
		scene.add(directionalLight, directionalLightHelper);

		const pointLight = new THREE.PointLight('#ffffff', 2.5);
		pointLight.position.set(-2, 31, 1);
		scene.add(pointLight);

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
		camera.position.z = 3;
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: true
		});
		renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.shadowMap.enabled = true;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;


        const block = new THREE.Mesh(new THREE.BoxGeometry(1,1),new THREE.MeshStandardMaterial({color:"#00ff00"}))
        scene.add(block)
      
        /**
         * 
         * PostProcess
         * 
        */
        const effectComposer = new EffectComposer(renderer)
        effectComposer.setSize(sizes.width, sizes.height)
        effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        const renderPass = new RenderPass(scene, camera)
        effectComposer.addPass(renderPass)


        const dotScreenPass = new DotScreenPass()
        effectComposer.addPass(dotScreenPass)

        /**
		 * Animate
		 */
		const clock = new THREE.Clock();
		const tick = () => {
			const elapsedTime = clock.getElapsedTime();
			stats.begin();

			// Update controls
			controls.update();
            effectComposer.render()
			// Render
			
			stats.end();
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
