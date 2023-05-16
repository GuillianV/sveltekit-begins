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


