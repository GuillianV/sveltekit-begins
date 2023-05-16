<script>
    export let data;
    let {randomPhoto} = data;
    let { Component, photoData } = randomPhoto;
    
</script>


<div>
    <Component {photoData} />
</div>

<style lang="scss">
    div{
        width: 300px;
        height: auto;
    }

</style>