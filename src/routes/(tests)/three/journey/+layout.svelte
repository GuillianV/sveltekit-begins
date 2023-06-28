<div id="three-container">

    <h1>Three.js journey</h1>

    <slot />


</div>

<style lang="scss">


#three-container{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
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


  h1{

    width: 100%;
    text-align: center;
    font-size: 3rem;
    padding: 16px;

  }

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