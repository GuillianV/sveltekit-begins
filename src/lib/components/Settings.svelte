<script>

import { lowDetailMode } from '$lib/settings/detailMode.js'

function detailMode(){
    
    $lowDetailMode = !$lowDetailMode
}

</script>

<button name="settings" on:click={detailMode}><img alt="parametres" src="/images/ecrou.png" /></button>

<style lang="scss">

button{
    position: fixed;
    top: 0;
    right: 0;
    width:50px;
    height: 50px;
    margin: 16px 16px;

    img{
        width: 100%;
        height: 100%;
        filter: invert(1);
    }
}

</style>