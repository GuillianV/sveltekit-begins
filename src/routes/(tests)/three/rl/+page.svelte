<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

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


        /**
         * GLTF
        */
        const gltfLoader = new GLTFLoader(loadingManager);
        gltfLoader.load( '/models/RL/Car/scene.gltf', function ( gltf )
		{
           const carGroup = gltf.scene
           carGroup.traverse( function( node ) {

            if ( node.isMesh ) { 
                
                node.material.emissiveIntensity = 6
                node.castShadow = true; 
            }

            } );
           carGroup.scale.set(0.05,0.05,0.05)
           carGroup.position.y = 1
           scene.add(carGroup)
		});     

        const ambientLight = new THREE.AmbientLight('#ffffff',0.3)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight('#ffffff',0.8)
        directionalLight.castShadow = true
        directionalLight.position.set(0,10,0)
        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
        scene.add(directionalLight,directionalLightHelper)


           
        const terrain = new THREE.Mesh(
            new THREE.BoxGeometry(20,1,20),
            new THREE.MeshStandardMaterial({color:0xffffff})
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