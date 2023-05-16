<script>
    import {page} from '$app/stores'

</script>

<svelte:head>
    <link rel="icon" href="{$page.data.icon || "%sveltekit.assets%/favicon.png"}" />
    <title>{$page.data.title || 'Selte Begins'}</title>
</svelte:head>

<slot />