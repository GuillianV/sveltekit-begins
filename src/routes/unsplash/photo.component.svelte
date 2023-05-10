<script>
    export let photoData;
    
    let {id = 'unknown'} = photoData.id;
    let {regular = 'unknown'} = photoData.urls;
    let {alt_description = 'No alternate description'} = photoData;
    let {description = 'No description'} = photoData;

</script>


<div class="container" id="photo-{id}">

    <img id="img" src={regular} alt={alt_description} />
    <div class="description-wrapper">
        <div class="description">
            <h1>{alt_description}</h1>
            <p>{description}</p>
        </div>

    </div>
</div>

<style lang="scss">

    .container{
        margin: 16px;
        padding: 8px;
        backdrop-filter: blur(15px) brightness(120%);
        background-color: rgba(42, 102, 255, 0.02);
        width: 100%;
        height: 100%;

        border-radius: 30px;
        
        #img {
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            width: 100%;
            height: 80%;
            object-fit: cover;
        }

    }


</style>