<script>
    import {page} from '$app/stores'
    import Nav from '$lib/components/Nav.svelte'
</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<div class="app">
    <Nav />
	<main>
		<slot />
	</main>

</div>





