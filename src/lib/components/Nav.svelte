<script>

let navActive = false;


function toggleNav(){
    navActive =!navActive

}

</script>
<div id="navContainer">
    <button name="toggle nav" class="{navActive ? 'active' : ''}" on:click={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
    </button>
    
    <nav>
    
    
    
    
    </nav>
</div>



<style lang="scss">

#navContainer{
    position: fixed;
    top: 0;
    right: 48px;
    width: 16px;
    height: 16px;
    margin: 16px 16px;
    z-index: 10;



button{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    &.active{

        span:nth-child(1){

            transform:rotate(45deg);
            width: 85%;
            border-radius: 8px;
        }
        span:nth-child(2){

          opacity: 0;
          width: 0%;

        }
        span:nth-child(3){

            transform: rotate(-45deg);
            width: 85%;
            border-radius: 8px;
        }
    }

    span {
        transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    span:nth-child(1){
        width: 100%;
            height: 10%;
            background-color: $color-light;
            border-top-left-radius: 8px;
            display: block;
            position:relative;
            bottom: 20%;
            transform-origin: center left;
    }

    span:nth-child(2){
        width: 100%;
        height: 10%;
        background-color: $color-light;
        display: block;
        position:relative;
    }

    span:nth-child(3){
            border-bottom-right-radius: 8px;
            width: 80%;
            height:10%;
            background-color: $color-light;
            display: block;
            position:relative;
            top: 20%;
              transform-origin: center left;
    }

}
}

</style>