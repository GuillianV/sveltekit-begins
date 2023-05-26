
<script>
    import {page} from '$app/stores'
    import { setting_ldm_store } from '$lib/settings/detailMode.js'
    import H1 from "$lib/components/H1.svelte";
    import GitGui from "$lib/components/GitGui.svelte";
    import { t } from '$lib/translations';


</script>

<H1 innerText="{$t('home.titre')}" />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>{$t('home.intro')}</p>
<a href="/about">a propos</a>
{#if $setting_ldm_store > 0}
    <GitGui />
{/if}

