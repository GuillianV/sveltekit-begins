<script>
	import { onMount } from 'svelte';
    import { GLTFScene } from '$lib/three/gltf.scene.js';


	let el;

	onMount(() => {
        let gltfScene = new GLTFScene({
            width: window.innerWidth,
            height: window.innerHeight
        })
        gltfScene.createScene(el)
	});
</script>

<svelte:head>
	<title>Three.js</title>
	<meta name="description" content="Three.js gltf app built with Svelte" />
</svelte:head>

<canvas bind:this={el} />

<style lang="scss">

canvas{

    width: 100vw;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(74,74,74);
background: radial-gradient(circle, rgba(74,74,74,1) 0%, rgba(14,14,14,1) 48%, rgba(0,0,0,1) 100%);
}


</style>