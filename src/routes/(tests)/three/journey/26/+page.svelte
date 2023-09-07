<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
    import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
    import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
    import { GroundProjectedSkybox } from 'three/addons/objects/GroundProjectedSkybox.js'
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 
    import * as CANNON from 'cannon-es'

    onMount(() => {
                
        /**
         * Loaders
         */
        const gltfLoader = new GLTFLoader()
        const rgbeLoader = new RGBELoader()

        /**
         * Base
         */
        // Debug
        const gui = new GUI()
        const global = {}

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Update all materials
         */
        const updateAllMaterials = () =>
        {
            scene.traverse((child) =>
            {
                if(child.isMesh && child.material.isMeshStandardMaterial)
                {
                    child.material.envMapIntensity = global.envMapIntensity
                }
            })
        }

        /**
         * Environment map
         */
        // Global intensity
        global.envMapIntensity = 1
        gui
            .add(global, 'envMapIntensity')
            .min(0)
            .max(10)
            .step(0.001)
            .onChange(updateAllMaterials)

        // HDR (RGBE) equirectangular
        rgbeLoader.load('/three/journey/26/environmentMaps/0/2k.hdr', (environmentMap) =>
        {
            environmentMap.mapping = THREE.EquirectangularReflectionMapping

            scene.background = environmentMap
            scene.environment = environmentMap
        })

        /**
         * Models
         */
        // Helmet
        gltfLoader.load(
            '/three/journey/26/models/FlightHelmet/glTF/FlightHelmet.gltf',
            (gltf) =>
            {
                gltf.scene.scale.set(10, 10, 10)
                scene.add(gltf.scene)

                updateAllMaterials()
            }
        )

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
        camera.position.set(4, 5, 4)
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.target.y = 3.5
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            // antialias:true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.toneMappingExposure = 3

        //directionalLight.shadow.normalBias , bias

        //Tone Mapping
        renderer.toneMapping = THREE.ReinhardToneMapping
        renderer.useLegacyLights = false
        gui.add(renderer,'toneMapping',{
            No:THREE.NoToneMapping,
            Linear: THREE.LinearToneMapping,
            Reinhard: THREE.ReinhardToneMapping,
            Cineon:THREE.CineonToneMapping,
            ASCESFilmic:THREE.ACESFilmicToneMapping,
        })

        gui.add(renderer,'toneMappingExposure',0,10,0.1)
        /**
         * Animate
         */
        const tick = () =>
        {
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