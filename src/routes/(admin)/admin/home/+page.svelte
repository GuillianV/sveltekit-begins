<script>
    import H1 from '$lib/components/H1.svelte';
    import { t } from '$lib/translations';
    import { page } from '$app/stores'

    console.log($page.data.user)
</script>

You are logged in Admin

<pre>
  {$page.data.user}
</pre>