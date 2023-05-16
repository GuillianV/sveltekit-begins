<script>
    import {GetTraductions} from '$lib/lang/traductions.js'
    import H1 from '$lib/components/H1.svelte';
    export let  data;
</script>

<H1 innerText="{GetTraductions(data,"titre")}" />