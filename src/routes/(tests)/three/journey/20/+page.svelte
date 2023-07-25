<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
             
                
        THREE.ColorManagement.enabled = false
        gsap.registerPlugin(ScrollTrigger)
        /**
         * Loader
        */
        const loadingManager = new THREE.LoadingManager()
        const texturesLoader = new THREE.TextureLoader(loadingManager)


        /**
         * Textures
        */
        const gradient = texturesLoader.load("/three/journey/20/textures/gradients/3.jpg")
        gradient.minFilter = THREE.NearestFilter
        gradient.magFilter = THREE.NearestFilter
        gradient.generateMipmaps = false
        
        const particlesTexture = texturesLoader.load("/three/journey/18/textures/particles/12.png")
        particlesTexture.magFilter = THREE.NearestFilter
        /**
         * Debug
         */
        const gui = new GUI()

        const parameters = {
            materialColor: '#ecb998',
        }

        gui.addColor(parameters, 'materialColor').onChange(value =>{
            material.color = new THREE.Color(value)
        })

        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()


        /**
         * Objects
        */
        const material = new THREE.MeshToonMaterial({
            gradientMap:gradient,
            color:parameters.materialColor
        })
        const meshArray = []
        const donutMesh = new THREE.Mesh(
            new THREE.TorusGeometry(2,0.5,10,48),
            material
        )
        meshArray.push(donutMesh)
        donutMesh.position.set(2,0,-5)
        scene.add(donutMesh)

        const coneMesh = new THREE.Mesh(
            new THREE.ConeGeometry(2,5,5,4),
            material
        )
        meshArray.push(coneMesh)
        coneMesh.geometry.center()
        coneMesh.position.set(-2,-10,-5)
        scene.add(coneMesh)

        const octahedronMesh = new THREE.Mesh(
            new THREE.OctahedronGeometry(2,1),
            material
        )
        meshArray.push(octahedronMesh)
        octahedronMesh.geometry.center()
        octahedronMesh.position.set(2,-20,-5)
        scene.add(octahedronMesh)


        /**
         * Particles
        */
        const particlesNumber = 1000
        const particlesGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particlesNumber*3)
        for(let i =0; i < particlesNumber; i++){
            const i3 = i*3
            positions[i3] = (Math.random() -0.5)* 10
            positions[i3+1] = (Math.random()) * -30  + 5
            positions[i3+2] = (Math.random() -0.5)* 10
        }
        particlesGeometry.setAttribute("position",new THREE.BufferAttribute(positions,3))
      
        const particlesMaterial = new THREE.PointsMaterial({color:0xffffff,size:0.4,sizeAttenuation:true,  alphaMap:particlesTexture,transparent:true})
        const particles = new THREE.Points(
           particlesGeometry,
           particlesMaterial
        )

        scene.add(particles)

        /**
         * Lights
        */
        const ambiantLight = new THREE.AmbientLight(0xffffff,0.2)
        scene.add(ambiantLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff,0.9)
        directionalLight.position.set(4,4,4)
        scene.add(directionalLight)

        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
        // scene.add(directionalLightHelper)


        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight ,
            maxScrollHeight: document.body.scrollHeight - window.innerHeight,
            sections:3,
        
        }
        sizes.sectionScrollHeight = sizes.maxScrollHeight / sizes.sections

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            sizes.maxScrollHeight = document.body.scrollHeight - window.innerHeight
            sizes.sectionScrollHeight = sizes.maxScrollHeight / sizes.sections

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
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 10
        scene.add(camera)

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
        */
        const cameraInitialPos = camera.position
        let cameraMovingPosition = new THREE.Vector3(cameraInitialPos.x,cameraInitialPos.y,cameraInitialPos.z)
        let mouseCameraMovingPosition = new THREE.Vector3(0,0,0)

        //const clock = new THREE.Clock()
        let time = Date.now()

        const tick = () =>
        {
            
          //  const elapsedTime = clock.getElapsedTime()

            const currentTime = Date.now()
            const deltaTime = currentTime - time
            time = currentTime
            
            meshArray.forEach((mesh,index) =>{

                mesh.rotation.y +=  ((1+index) * deltaTime*0.001)
                
            })

            camera.position.lerp(new THREE.Vector3(
                cameraMovingPosition.x + mouseCameraMovingPosition.x,
                cameraMovingPosition.y + mouseCameraMovingPosition.y,
                cameraMovingPosition.z + mouseCameraMovingPosition.z
            ),0.15)
            // Render
            renderer.render(scene, camera) 

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
            cpt++;
            if(cpt == maxCpt)
                {
                    var end = window.performance.now();
                    console.log(`time for ${maxCpt} row of tick`,(end - start) / maxCpt)
                }
        }


        let cpt = 0
        let maxCpt = 1000
        var start = window.performance.now();
        tick()
     
        /**
         * Events
        */


        document.querySelectorAll("h2").forEach((h2,index) => {

            let h2Tl = gsap.timeline({
                scrollTrigger:{
                    trigger:h2,
                    // markers:true,
                    start:"top center",
                    end:"bottom center",
                    once:false,
                    
                    onEnter: ()=>{
                        gsap.to(meshArray[index].rotation,{

                        duration:1.5,
                        ease:"power4",
                        y:"+=3",

                        })
                    },
                    onLeave: ()=>{
                        gsap.to(meshArray[index].rotation,{

                        duration:1.5,
                        ease:"power4",
                        y:"+=3",

                        })
                    },
                    

                    onEnterBack: ()=>{
                        gsap.to(meshArray[index].rotation,{

                        duration:1.5,
                        ease:"power4",
                        y:"+=3",

                        })
                    },
                    onLeaveBack: ()=>{
                        gsap.to(meshArray[index].rotation,{

                        duration:1.5,
                        ease:"power4",
                        y:"+=3",

                        })
                    },
                    
                }
            })

          
        })
         
     
        window.addEventListener("scroll",event =>{
         
            const scrollHeight =  window.scrollY / sizes.maxScrollHeight
            cameraMovingPosition.y =  -20 * scrollHeight
          
        })

        const mousePos = {
            x:0,
            y:0,
        }

        window.addEventListener("mousemove",event=>{


            const xRatio = event.clientX / window.innerWidth   - 0.5
            const yRatio = event.clientY / window.innerWidth  - 0.5
            mouseCameraMovingPosition.set(xRatio,yRatio,0)

        })

    })

</script>


<div id="app-container">

    <div class="app">
        <canvas class="webgl"></canvas>


        <section>
            <h2 class="left">Guillian</h2>
        </section>
        
        <section>
            <h2 class="right">Vibert</h2>
            
        </section>

        
        <section>
            <h2 class="left">Vallet</h2>
            
        </section>

    </div>

 

</div>

<style lang="scss">

    #app-container{
        overflow: hidden;
        .app{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            z-index: 5;
            canvas.webgl{
                position: fixed;
                top: 0;
                width: 100%;
                height: 100%;
            }

            section{
                font-family:$font-family-main;
                height: 100vh;
                width: 100%;
                text-align: center;
                font-size: 3rem;
                padding: 16px;
                display:flex;
                justify-content: center;
                align-items: center;
                z-index: 15;
                color: antiquewhite;


                h2{
                    width: 100%;
                    margin: 10rem;
                }

                .left{
                    text-align: left;

                }

                .right{
                    text-align: right;
                }
            }
            

        }
    }


  

</style>