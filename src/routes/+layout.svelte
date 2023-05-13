<script>
    import {page} from '$app/stores'
	
</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<div class="app">

    LE giga layout
	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
        background-color: antiquewhite;
	}

</style>


