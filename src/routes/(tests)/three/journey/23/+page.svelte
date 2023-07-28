<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
    import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 
    import * as CANNON from 'cannon-es'

    onMount(() => {
        
        THREE.ColorManagement.enabled = false

        /**
         * Base
         */
        // Debug
        const gui = new GUI()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()


        /**
         * Models
        */
       
        let model = null
        const gltfLoader= new GLTFLoader()
        gltfLoader.load("/three/journey/23/models/Duck/glTF-Binary/Duck.glb",(gltf)=>{
            model = gltf.scene
            scene.add(model)
        })

        const ambiantLight = new THREE.AmbientLight(0xffffff,0.2)
        const directionalLight = new THREE.DirectionalLight(0xffffff,0.7)
        directionalLight.position.set(-3,3,3)
        scene.add(ambiantLight,directionalLight)

        /**
         * Objects
         */
        const object1 = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 16, 16),
            new THREE.MeshBasicMaterial({ color: '#ff0000' })
        )
        object1.position.x = - 2

        const object2 = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 16, 16),
            new THREE.MeshBasicMaterial({ color: '#ff0000' })
        )

        const object3 = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 16, 16),
            new THREE.MeshBasicMaterial({ color: '#ff0000' })
        )
        object3.position.x = 2

        scene.add(object1, object2, object3)


        /**
         * Raycaster
        */
        const raycaster = new THREE.Raycaster()
    
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

        const mouse = new THREE.Vector2()
        window.addEventListener("mousemove", e=>{
            mouse.x = e.clientX / sizes.width * 2 - 1
            mouse.y = - (e.clientY /  sizes.height) * 2 + 1
        })

        window.addEventListener("click", e=>{

            if(currentIntersect !== null){

                const mesh =  currentIntersect.object
                mesh.scale.set(mesh.scale.x+0.1,mesh.scale.y+0.1,mesh.scale.z+0.1)
                console.log(currentIntersect.object.uuid + " clicked")
            }

        })



        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 3
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()


        let currentIntersect = null

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()


            //Animate Objects
            object1.position.y = Math.sin(elapsedTime)
            object2.position.y = Math.sin(elapsedTime+0.5)
            object3.position.y = Math.sin(elapsedTime+1)

            // object1.updateMatrixWorld()
            // object2.updateMatrixWorld()
            // object3.updateMatrixWorld()

            raycaster.setFromCamera(mouse,camera)

            // const rayOrigin = new THREE.Vector3(-4,1,0)
            // const rayDirection = new THREE.Vector3(10,0,0).normalize()
            // raycaster.set(rayOrigin,rayDirection)



            let intersects = null
            if(model)
                intersects = raycaster.intersectObjects([object1,object2,object3,model])
            else
                intersects = raycaster.intersectObjects([object1,object2,object3])

            if(intersects.length > 0)
            {

                if(!currentIntersect){
                    // console.log("mouse enter");
                }
                currentIntersect = intersects[0]
            }
            else{
                if(currentIntersect){
                    // console.log("mouse leave");
                }
                currentIntersect = null
            }

         


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


<div>

    <div class="app">
        <canvas class="webgl"></canvas>
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

  

</style>