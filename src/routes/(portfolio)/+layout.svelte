


<script>
    import {page} from '$app/stores'
    import Nav from '$lib/components/Nav.svelte'
    import Settings from '$lib/components/Settings.svelte'


</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<div class="app">
    <Nav />
    <Settings />
	<main>
		<slot />
	</main>

</div>





