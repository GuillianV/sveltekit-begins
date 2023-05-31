
<script>
    import H1 from '$lib/components/H1.svelte';
    import { t } from '$lib/translations';
    import { onMount } from 'svelte';
    import {InsidecubeScene} from "$lib/three/insidecube.scene.js";

    
	let el;

    onMount(() => {
        init()
    });

    async function init() {
        let gltfScene = new InsidecubeScene({
            width: window.innerWidth,
            height: window.innerHeight
        })
        gltfScene.createScene(el)
    }

</script>

<H1 innerText="{$t("projects.titre")}" />
<canvas bind:this={el} />


<style lang="scss">

canvas{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -5;

}


</style>