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
         * Base
         */
        // Debug
        const gui = new GUI()
        const global = {
            envMapIntensity : 3,
            backgroundBlurriness :0,
            backgroundIntensity:5
        }
        gui.add(global,'envMapIntensity',0,10,0.01).onChange(value => {
            updateAllMaterials(value)
        })
        // gui.add(global,'backgroundBlurriness',0,1,0.01).onChange(value => {  scene.backgroundBlurriness = value  })
        // gui.add(global,'backgroundIntensity',0,5,0.01).onChange(value => {  scene.backgroundIntensity = value  })

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Torus Knot
         */
        const torusKnot = new THREE.Mesh(
            new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
            new THREE.MeshStandardMaterial({color :0xf5f5f5,metalness:1,roughness:0.3})
        )
        torusKnot.position.y = 4
        torusKnot.position.x = -4
        scene.add(torusKnot)

        //Loaders
        const gltfLoader = new GLTFLoader()
        const cubeTextureLoader = new THREE.CubeTextureLoader()
        const rgbeLoader = new RGBELoader()

        //Models
        gltfLoader.load('/three/journey/25/models/FlightHelmet/glTF/FlightHelmet.gltf',(gltf)=>{
            gltf.scene.scale.set(10,10,10)
            scene.add(gltf.scene)
            updateAllMaterials()

        })

        /**
         * Update All Materalls
        */
        const updateAllMaterials = (intensity = 1)=>{
            scene.traverse((child)=>{
                if(child.isMesh && child.material.isMeshStandardMaterial)
                {
                    child.material.envMapIntensity = intensity
                }
            })
        }

        /**
         * Env Maps
        */
        // const environementMap = cubeTextureLoader.load([
        //     "/three/journey/25/environmentMaps/0/px.png",
        //     "/three/journey/25/environmentMaps/0/nx.png",
        //     "/three/journey/25/environmentMaps/0/py.png",
        //     "/three/journey/25/environmentMaps/0/ny.png",
        //     "/three/journey/25/environmentMaps/0/pz.png",
        //     "/three/journey/25/environmentMaps/0/nz.png",
        // ])

        // scene.background = environementMap
        // scene.environment = environementMap
        scene.backgroundBlurriness = global.backgroundBlurriness
        scene.backgroundIntensity = global.backgroundIntensity
        
        // RGBE Loader
        rgbeLoader.load("/three/journey/25/environmentMaps/0/2k.hdr",(envMap)=>{
            envMap.mapping = THREE.EquirectangularRefractionMapping

            // scene.background = envMap



            const skybox = new GroundProjectedSkybox(envMap)
            skybox.scale.setScalar(50)
            scene.add(skybox)

            gui.add(skybox,'radius',1,200,0.1)
            gui.add(skybox,'height',1,200,0.1)
        })


        /**
         * 
         * Real Time Environement
        */
        const holyDonut = new THREE.Mesh(
            new THREE.TorusGeometry(8,0.5),
            new THREE.MeshBasicMaterial({ color: new THREE.Color(10,4,3) })

        )
        holyDonut.layers.enable(1)
        holyDonut.position.y = 3.5
        scene.add(holyDonut)
        
        // const holyCube = new THREE.Mesh(
        //     new THREE.BoxGeometry(2,2,2),
        //     new THREE.MeshBasicMaterial({ color: new THREE.Color(15,5,4) ,  })

        // )
        // holyCube.layers.enable(1)
        // holyCube.position.y = 10
        // scene.add(holyCube)

        //Cube render target
        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256,{
            type:THREE.HalfFloatType
        })
        scene.environment = cubeRenderTarget.texture

        //Cube Camera
        const cubeCamera = new THREE.CubeCamera(0.1,100,cubeRenderTarget)
        cubeCamera.layers.set(1)

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
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()
        const tick = () =>
        {
            // Time
            const elapsedTime = clock.getElapsedTime()

            //RTE MAP
            if(holyDonut){
                holyDonut.rotation.x = Math.sin(elapsedTime) * 2
                cubeCamera.update(renderer,scene)
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