<script>
    export let innerText = innerText.length <= 0 ? "Undefined" : innerText

    let capitalizedText = innerText.charAt(0)
    let otherText = innerText.slice(1)
</script>
<h1><span>{capitalizedText}</span>{otherText}</h1>

<style lang="scss">


    h1{
        color:$color-light;
        font-family: $font-family-main;
        font-size: 3rem;
        border-bottom: 8px solid $color-primary;
        width: fit-content;
        line-height: 2.8rem;
        letter-spacing: 0.8rem;

        span{
            color: $color-primary;
            font-size: 3.5rem;
            font-weight: 700;
        }
    }
</style>