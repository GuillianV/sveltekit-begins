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
	import VertexShader from '$lib/three/shaders/slider/vertex.glsl';
	import FragmentShader from '$lib/three/shaders/slider/fragment.glsl';
	import Stats from 'stats.js';

	import Slider from '$lib/three/slider/experience'
	let loadingBar;
	onMount(() => {


	    const slider =	new Slider(document.querySelector('canvas.webgl'))

		return
		/**
		 * Loaders
		 */
		const loadingManager = new THREE.LoadingManager(
			() => {
				console.log(imgsMeshs);
			},
			(itemUrl, itemsLoaded, itemsTotal) => {
				//Progress
			}
		);

		const gui = new GUI();

		const gltfLoader = new GLTFLoader(loadingManager);
		const textureLoader = new THREE.TextureLoader(loadingManager);

		/**
		 * Base
		 */

		const carousselSettings = {
			radius: 8.6,
			space: 0.88,
			doubleSided : false,
			wireframe : false,
			twist:0.046
		};

		const controlsSettings = {
			nextSlide : ()=>{
				carousselIndex++;
				slide(carousselIndex)
			},
			prevSlide : () => {
				carousselIndex--
				slide(carousselIndex)
			},
			freeMove : true,

		};
		/*
            Textures
        */

		const imgsTextures = [
			textureLoader.load('/three/slider/img-1.jpg'),
			textureLoader.load('/three/slider/img-1.jpg'),
			textureLoader.load('/three/slider/img-2.jpg'),
			textureLoader.load('/three/slider/img-3.jpg'),
			textureLoader.load('/three/slider/img-4.jpg'),
			textureLoader.load('/three/slider/img-5.jpg'),
			textureLoader.load('/three/slider/img-5.jpg')
		];


		// Canvas
		const canvas = document.querySelector('canvas.webgl');

		// Scene
		const scene = new THREE.Scene();

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
		camera.position.set(0, 0, -10);
		scene.add(camera);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.enabled = controlsSettings.freeMove
		controls.enablePan = false
		controls.enableZoom = false
		controls.maxPolarAngle = Math.PI /2
		controls.minPolarAngle = Math.PI /2
		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha:true
		});
		renderer.useLegacyLights = false;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 3;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


		const carousselGroup = new THREE.Group()
		scene.add(carousselGroup)


		const imgsMeshs = [];
		
	 	const carousselFolder = gui.addFolder("caroussel")
		carousselFolder.add(carousselSettings, 'radius', 1, 10, 0.1).onChange(createCaroussel);
		carousselFolder.add(carousselSettings, 'space',0, 5, 0.01).onChange(createCaroussel);
		carousselFolder.add(carousselSettings, 'doubleSided').onChange(createCaroussel);
		carousselFolder.add(carousselSettings, 'wireframe').onChange(createCaroussel);
		carousselFolder.add(carousselSettings, 'twist',-1, 2, 0.001).onChange(createCaroussel);

		const controlsFolder = gui.addFolder("controls")
		controlsFolder.add(controlsSettings,'nextSlide')
		controlsFolder.add(controlsSettings,'prevSlide')
		controlsFolder.add(controlsSettings,'freeMove').onChange(value => controls.enabled = value)

		let carousselIndex = 0;
		function slide(index){
			gsap.to(carousselGroup.rotation,{
				y: ( - ((Math.PI * 2) / imgsTextures.length) * index)
			})
		}

		const cameraStartX = carousselSettings.radius *2 * Math.cos(((360 / imgsTextures.length) *  Math.PI) / 180);
		const cameraStartZ = carousselSettings.radius *2 * Math.sin(((360 / imgsTextures.length) * Math.PI) / 180);
		camera.position.set(cameraStartX,0,cameraStartZ)


		function createCaroussel() {

			deleteCaroussel()

			for (let i = 0; i < imgsTextures.length; i++) {
				const imgMaterial = new THREE.ShaderMaterial({
					wireframe: carousselSettings.wireframe,
					side: carousselSettings.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
					transparent: true,
					vertexShader: VertexShader,
					fragmentShader: FragmentShader,
					uniforms: {
						uPicture: { value: null },
						uTwist : { value : carousselSettings.twist }
					}
				});

				const imgGeometry = new THREE.PlaneGeometry(1, 1, 100, 1);

				const mesh = new THREE.Mesh(imgGeometry, imgMaterial);

				mesh.rotation.y = Math.PI * 0.5 - ((Math.PI * 2) / imgsTextures.length) * i;
				mesh.scale.x = carousselSettings.radius * carousselSettings.space;
				mesh.scale.y = carousselSettings.radius *  carousselSettings.space;
				mesh.position.x =
					carousselSettings.radius * Math.cos(((360 / imgsTextures.length) * i * Math.PI) / 180);
				mesh.position.z =
					carousselSettings.radius * Math.sin(((360 / imgsTextures.length) * i * Math.PI) / 180);
				mesh.material.uniforms.uPicture.value = imgsTextures[i];

				carousselGroup.add(mesh);
				imgsMeshs.push(mesh);
			}
		}

		function deleteCaroussel() {
			for (let i = 0; i < imgsMeshs.length; i++) {
				const mesh = imgsMeshs[i]
				carousselGroup.remove(mesh);
				mesh.geometry.dispose()
				mesh.material.dispose()
				mesh.clear()
			}
		}

		createCaroussel()
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
