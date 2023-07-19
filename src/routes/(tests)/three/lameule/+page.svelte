<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
                          
        
                        
        THREE.ColorManagement.enabled = false
        gsap.registerPlugin(ScrollTrigger);
        
        /**
         * Base
         */
        // Debug
        const gui = new GUI()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        
        //LoadingManager
        const loadingManager = new THREE.LoadingManager(
            (load)=>{
                console.log("Everythig Loaded")
            },
            (progress)=>{
              // console.log(progress)
            },
            (error)=>{
                console.log(error)
            }
        )


        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader(loadingManager)
        const albedo = textureLoader.load('/three/lameule/texture/leather/Albedo.jpg',)
        const ambient = textureLoader.load('/three/lameule/texture/leather/AmbientOcclusion.jpg',)
        const normal = textureLoader.load('/three/lameule/texture/leather/Normal.jpg',)
        const height = textureLoader.load('/three/lameule/texture/leather/Height.png',)
        const roughness = textureLoader.load('/three/lameule/texture/leather/Roughness.jpg',)




        /**
         * GLTF
        */
        const gltfLoader = new GLTFLoader(loadingManager);
        gltfLoader.load( '/models/lameule/cheeese.gltf', function ( gltf )
		{
           const meule = gltf.scene
           meule.traverse( function( node ) {

            if ( node.isMesh ) { 
                node.geometry.center()
                node.material.emissiveIntensity = 6
                node.castShadow = true; 
            }

            } );
           meule.scale.set(3,3,3)
           meule.position.y = 0.19
           scene.add(meule)


           /**
            * AnimScroll
           */
           let scrollTimeline = new gsap.timeline({
            scrollTrigger:{
                trigger:"#three-container",
                start:"top top",
                end : "+=2000px",
                pin:true,
                scrub:true,
                pinSpacing:true
            }
           })
           scrollTimeline.to(meule.position,{
                y:meule.position.y +0.5,
           })
           scrollTimeline.to(meule.rotation,{
                z:meule.rotation.z + Math.PI,
                duration:2
           })
           scrollTimeline.to(meule.position,{
                y:meule.position.y,
           })


            /**
             * GUI
            */
            
            let spinTl = new gsap.timeline()
            const meuleSettings = {

                spinRight:()=>{
                    if(!spinTl.isActive())
                        spinTl.to(meule.rotation,{
                            y:meule.rotation.y + Math.PI *0.5,
                        })
                },
                spinLeft:()=>{
                    if(!spinTl.isActive())
                        spinTl.to(meule.rotation,{
                            y:meule.rotation.y - Math.PI *0.5,
                        })
                }


            }


            const folder = gui.addFolder('Meule')
            folder.add(meule.position,'x').min(-.5).max(.5).step(0.01).name("position X")
            folder.add(meule.position,'y').min(meule.position.y).max(.5).step(0.01).name("position Y")
            folder.add(meule.position,'z').min(-.5).max(.5).step(0.01).name("position Z")
            folder.add(meule,'visible')
            folder.add(meuleSettings,"spinRight").name("Spin Right !")
            folder.add(meuleSettings,"spinLeft").name("Spin Left !")



		});     

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight('#ffffff',0.3)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight('#ffffff',0.8)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.height = 1024
        directionalLight.shadow.mapSize.width = 1024
        directionalLight.shadow.radius = 3
        directionalLight.position.set(2,2,2)
        scene.add(directionalLight)
        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
        // scene.add(directionalLight,directionalLightHelper)
        const pointLight = new THREE.PointLight(0xffffff,0.4,10,2)
        pointLight.position.set(-1,1,-1)
        pointLight.castShadow = true
        scene.add(pointLight)

        /**
         * GUI Lights
         */
        const folder = gui.addFolder('Point Light')
        folder.add(pointLight.position,'x').min(-3.5).max(3.5).step(0.1).name("position X")
        folder.add(pointLight.position,'y').min(-3.5).max(3.5).step(0.1).name("position Y")
        folder.add(pointLight.position,'z').min(-3.5).max(3.5).step(0.1).name("position Z")
        folder.add(pointLight,'visible')



           
        //Terrain
        const terrainStandardMaterial = new THREE.MeshStandardMaterial(
            {
                map:albedo,
                transparent:true,
                aoMap:ambient,
                displacementMap : height,
                displacementScale:0,
                normalMap:normal,
                roughnessMap:roughness
            }
        )
        const terrain = new THREE.Mesh(
            new THREE.BoxGeometry(1.5,0.25,1.5),
            terrainStandardMaterial
        )
        terrain.receiveShadow = true
        scene.add(terrain)


    
        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 3
        camera.position.y = 2
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha:true
        })
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.shadowMap.enabled = true
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Update controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()

    })

</script>

<div id="three-container">
    <h1>La Meule !</h1>



    <div>
    
        <div class="app">
            
            <canvas class="webgl"></canvas>
        </div>
    
    </div>
    


</div>



<style lang="scss">

.app{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        z-index: 5;
        canvas.webgl{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba($color: #dadada, $alpha: .3);
        }
    }

  
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
    #567D8F,
    #5C9699,
    #558378,
    #5C9979,
    #568F61,
    #5A8A91,
    #60849C,
    #586784
  );
  background-size: 400% 400%;
  animation: backgroundChange1 50s ease infinite;


  h1{
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 3rem;
    padding: 16px;
    z-index: 10;
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