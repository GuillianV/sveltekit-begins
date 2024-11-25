<script>
	import { onMount } from 'svelte';
    import Experience from '$lib/three/effect/experience'


	let el;
Experience
	onMount(() => {
        let experience = new Experience(el)

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
	background: linear-gradient(-45deg, #0E0027, #32313B, #0a0a0a, #000000);
	background-size: 400% 400%;
	animation: gradient 35s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}



</style>