<script>
import Icon from '@iconify/svelte';

let navActive = false;


</script>

<button name="toggle nav" class="{navActive ? 'active' : ''}" on:click={()=> {navActive =!navActive}}>
    <span></span>
    <span></span>
    <span></span>
</button>

<nav>




</nav>


<style lang="scss">

button{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    margin: 32px 16px;
    display: flex;
    flex-direction: column;
    &.active{

        span:nth-child(1){

            transform:rotate(45deg);
            width: 35px;
            border-radius: 8px;
        }
        span:nth-child(2){

          opacity: 0;


        }
        span:nth-child(3){

            transform: rotate(-45deg);
            width: 35px;
            border-radius: 8px;
        }
    }

    span {
        transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    span:nth-child(1){
            width: 50px;
            height: 4px;
            background-color: $color-light;
            border-top-left-radius: 8px;
            display: block;
            position:relative;
            bottom: 8px;
            transform-origin: center left;
    }

    span:nth-child(2){
        width: 50px;
        height: 4px;
        background-color: $color-light;
        display: block;
        position:relative;
    }

    span:nth-child(3){
            border-bottom-right-radius: 8px;
            width: 40px;
            height: 4px;
            background-color: $color-light;
            display: block;
            position:relative;
            top: 8px;
              transform-origin: center left;
    }

}


</style>