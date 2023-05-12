<script>
	import { onMount } from 'svelte';
    import { GLTFScene } from '$lib/three/gltf.scene.js';


	let el;

	onMount(() => {
        let gltfScene = new GLTFScene({
            width: window.innerWidth -40,
            height: window.innerHeight-40
        })
        gltfScene.createScene(el)
	});
</script>

<svelte:head>
	<title>Three.js</title>
	<meta name="description" content="Three.js gltf app built with Svelte" />
</svelte:head>

<h1>GLTF</h1>

<canvas bind:this={el} />

