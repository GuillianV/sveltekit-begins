<script>
	import { index } from './../../../../../.svelte-kit/output/server/nodes/2.js';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import { FontLoader } from 'three/addons/loaders/FontLoader.js';
	import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
	import gsap from 'gsap';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import GUI from 'lil-gui/dist/lil-gui.esm';
	import Hexasphere from '$lib/hexasphere/hexasphere.js';
	import Stats from 'stats.js';
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

		// const ambientLight = new THREE.AmbientLight('#ffffff', 0.3);
		// scene.add(ambientLight);

		// const directionalLight = new THREE.DirectionalLight('#ffffff', 0.8);
		// directionalLight.castShadow = true;
		// directionalLight.position.set(0, 10, 0);
		// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
		// scene.add(directionalLight, directionalLightHelper);

		// const pointLight = new THREE.PointLight('#ffffff', 2.5);
		// pointLight.position.set(-2, 31, 1);
		// scene.add(pointLight);

		/**
		 * Raycaster
		 */
		const raycaster = new THREE.Raycaster();

		const mouse = new THREE.Vector2();
		window.addEventListener('mousemove', (e) => {
			mouse.x = (e.clientX / sizes.width) * 2 - 1;
			mouse.y = -(e.clientY / sizes.height) * 2 + 1;
		});

		window.addEventListener('click', (e) => {
			if (currentIntersect !== null) {
				const mesh = currentIntersect.object;

				if (typeof mesh.userData.id !== 'number') return;

				//Do something with the mesh
				carthesienne(mesh.userData.lat, mesh.userData.lon);
			}
		});

		let material = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: false });

		//	material.wireframe = true;
		material.opacity = 0.7;
		material.color.setHSL(Math.random(), 1, 0.5);

		//Hexasphere
		const tilesMeshes = [];
		const hexasphere = new Hexasphere(1, 100, 1);

		const groupTiles = new THREE.Group();

		for (var i = 0; i < hexasphere.tiles.length; i++) {
			var t = hexasphere.tiles[i];
			var latLon = t.getLatLon(hexasphere.radius);

			let vertices = [];
			let indices = [];
			let geometry = new THREE.BufferGeometry();
			for (var j = 0; j < t.boundary.length; j++) {
				var bp = t.boundary[j];
				vertices.push(parseFloat(bp.x), parseFloat(bp.y), parseFloat(bp.z));
			}
			indices.push(0, 1, 2, 0, 2, 3, 0, 3, 4);
			if (vertices.length > 15) {
				indices.push(0, 4, 5);
			}
			geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3, false));
			geometry.setIndex(indices);

			geometry.computeVertexNormals();

			var mesh = new THREE.Mesh(geometry, material.clone());
			mesh.material.color.setHSL(Math.random(), 1, 0.5);
			mesh.userData = { id: i, lat: latLon.lat, lon: latLon.lon };
			groupTiles.add(mesh);

			hexasphere.tiles[i].mesh = mesh;
			tilesMeshes.push(mesh);
		}

		scene.add(groupTiles);

		var carthesienne = function (lat, lon) {
			var x = parseFloat((lon + 180) / 360);
			var y = parseFloat((lat + 90) / 180);
		};

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
		renderer.shadowMap.enabled = false;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;

		/**
		 * Cuelling
		 */
		function isMeshInFrustum(mesh, frustumPlanes) {
			mesh.updateMatrixWorld(); // Assurez-vous que la matrice mondiale est à jour

			if(frustum.intersectsObject(mesh)) {
				return true;
			}
			return false;
		}
		// Fonction de mise à jour de la visibilité des maillages dans la scène
		function updateMeshVisibility(frustumPlanes) {
			for (let i = 0; i < groupTiles.children.length; i++) {
				const mesh = groupTiles.children[i];
				const isInFrustum = isMeshInFrustum(mesh, frustumPlanes);
				mesh.visible = isInFrustum;
				mesh.material.color.setHSL(0.5, 1, 0.5);
			}
		}

		const frustum = new THREE.Frustum();

		/**
		 * Animate
		 */
		const clock = new THREE.Clock();
		let currentIntersect = null;
		const tick = () => {
			const elapsedTime = clock.getElapsedTime();
			stats.begin();

			// Update controls
			controls.update();

			// Render
			renderer.render(scene, camera);

			frustum.setFromProjectionMatrix(
				new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse)
			);
			updateMeshVisibility(frustum);
			//Raycaster
			// raycaster.setFromCamera(mouse, camera);
			// let intersects = raycaster.intersectObjects(tilesMeshes);

			// // gsap.to(groupTiles.rotation, {
			// // 	duration: 1.5,
			// // 	ease: 'power4',
			// // 	y: '+=0.03',
			// // 	x: '+=0.02'
			// // });

			// if (intersects.length > 0) {
			// 	if (!currentIntersect) {
			// 		// console.log("mouse enter");
			// 	}
			// 	currentIntersect = intersects[0];
			// } else {
			// 	if (currentIntersect) {
			// 		// console.log("mouse leave");
			// 	}
			// 	currentIntersect = null;
			// }
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
