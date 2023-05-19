<script>
    import { onMount } from 'svelte';
    import {GitGuiScene} from "$lib/three/gitgui.scene.js";

    
	let el;

    onMount(() => {
        let gltfScene = new GitGuiScene({
            width: window.innerWidth,
            height: window.innerHeight
        })
        gltfScene.createScene(el)
    });


</script>


<canvas bind:this={el} />


<style lang="scss">

canvas{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: -5;

}


</style>