<script>
    import {page} from '$app/stores'
</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<div class="app">

	<main>
		<slot />
	</main>

</div>


<style lang="scss">

.app {


    background: $color-darkblue ;
    background: radial-gradient(at center, $color-darkblue , #061418), url(https://grainy-gradients.vercel.app/noise.svg);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;

    &:after{
        content: '';
        background-image: url(/images/noise.png);
        background-repeat: repeat;
        pointer-events: none;
        width: 100%;
        height: 100%;
        z-index: 9999;
        position: absolute;
        top: 0;
    }



}
</style>
