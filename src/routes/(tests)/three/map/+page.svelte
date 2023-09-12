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
	import testVertexShader from '$lib/three/shaders/31/vertex.glsl';
	import testFragmentShader from '$lib/three/shaders/31/fragment.glsl';
	import { ThreeJSOverlayView } from "@googlemaps/three";
	import Experience from '$lib/three/map/experience';


	onMount(function (){
		let experience = new Experience(document.querySelector("canvas.webgl"))
	})


	
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
	

		#map{
			width: 100%;
			height: 100vh;

		
		}
	}
</style>
