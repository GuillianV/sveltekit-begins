<div id="three-container">

    <slot />


</div>

<style lang="scss">


#three-container{
  overflow-x: hidden;
    width: 100%;
    height: fit-content;
    z-index: 0;
    font-family: $font-family-secondary;
    color: #03033E;
    background: linear-gradient(
    -45deg,
    #d02090,
    #7c1000,
    #ff4605,
    #ffd729,
    #f8a42f,
    #d3312e,
    #ea0000,
    #50010a
  );
  background-size: 400% 400%;
  animation: backgroundChange1 50s ease infinite;



}

@keyframes backgroundChange1 {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


</style>