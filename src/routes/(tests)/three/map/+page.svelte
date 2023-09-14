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
	import { ThreeJSOverlayView } from '@googlemaps/three';
	import Experience from '$lib/three/map/experience';

	let top;
	let top2;
	let popup;
	onMount(function () {
		window.experience = new Experience(document.querySelector('canvas.webgl'));
		const cam =  window.experience.camera.instance
		gsap.registerPlugin(ScrollTrigger)
		let planetReveal = new gsap.timeline({
			scrollTrigger:{
				trigger:top,
				start:"center center",
				end:"+=5000",
				scrub:true,
				pin:true,
				markers:true,

			}
		})

		planetReveal.to(top,{
			yPercent:100
		})

		planetReveal.to(top2,{
			yPercent:100
		},"<0")


		
	
	
	});

	function closePopup(){
			popup.classList.add("hide")
			window.experience.camera.controls.autoRotate = true
	}
</script>

<div>
	<div class="app">

		<div class="top" bind:this={top}>

		</div>

		<div class="top2" bind:this={top2}>

		</div>

		<canvas class="webgl" />

		<div bind:this={popup} class="popup hide">
			<div class="infos" >
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="cross" on:click={closePopup}>
					<span></span>
					<span></span>
				</div>
			</div>
			<h1>Ma maison !</h1>
			<div class="description" >

				Voici ma maison ma belle maison.<br>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum<br><br>
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
				optio, eaque rerum! Provident similique accusantium nemo autem.
			</div>
			<img src="/images/maison.jpg">
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
		font-family: $font-family-secondary;
		color: #fff;
		z-index: 5;

		canvas{
			position: fixed;
			z-index: 3;
			top: 0;
		}

		.top{
			top: 0;
			z-index: 5;
			display: block;
			position: absolute;
			background-color: rgb(81, 139, 81);
			height: 100vh;
			width: 100%;
		}


		.top2{
			top: -50%;
			z-index: 1;
			display: block;
			position: fixed;
			background-color: rgb(72, 116, 72);
			height: 150vh;
			width: 100%;
		}

		.popup {
			transition: all ease-in-out .3s;
			opacity: 1;
			z-index: 999;
			&.hide{
				pointer-events: none;
				opacity: 0;
			}
			.infos{

				display: flex;
				justify-content: end;
				align-items: end;
				.cross{
					position: relative;
					cursor: pointer;
					width: 50px;
					height: 50px;
					span{
						display: block;
						position: absolute;
						width: 50px;
						height: 2px;
						background-color: #fff;
						top: 50%;
					}

					:nth-child(1){
						transform: rotate(45deg);
					}
					:nth-child(2){
						transform: rotate(-45deg);
					}
				}
			}

			padding: 32px;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 50%;
			height: fit-content;

			border-radius: 15px;
			background: rgba(255, 255, 255, 0.1);
			box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
			background: rgba(255, 255, 255, 0.1);
			border-top: 1px solid rgba(255, 255, 255, 0.5);
			border-left: 1px solid rgba(255, 255, 255, 0.5);
			backdrop-filter: blur(4px) brightness(1.3);

			h1{
				font-family: $font-family-main;
				font-size: 3rem;
			}

			img{
				margin-top: 32px;
				width: 100%;
				height: auto;
				border-radius: 15px;
			}
		}
	}
</style>
