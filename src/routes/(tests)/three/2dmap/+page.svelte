<script>
	import { onMount } from 'svelte';
    import { Map2DScene } from '$lib/three/2dmap/2dmap.scene.js';
    import * as THREE from 'three';
    export let data
    console.log(data)

    onMount(() => {
      const mapscene =   new Map2DScene({
        width: window.innerWidth,
        height: window.innerHeight
      })
      mapscene.createScene(document.querySelector('canvas.webgl'))
    })
</script>

<canvas class="webgl" />

<style lang="scss">
    .webgl{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
</style>