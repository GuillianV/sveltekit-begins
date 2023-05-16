<script>
	import { onMount } from 'svelte';
    import { CubeScene } from '$lib/three/cube.scene.js';


	let el;

	onMount(() => {
        let cubeScene = new CubeScene({
            width: window.innerWidth -40,
            height: window.innerHeight-40
        })
        cubeScene.createScene(el)
	});
</script>

<svelte:head>
	<title>Three.js</title>
	<meta name="description" content="Three.js example app built with Svelte" />
</svelte:head>

<canvas bind:this={el} />

