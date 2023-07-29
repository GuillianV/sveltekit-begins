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
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        let mixer = null
        let model = null
        let plateau = null
        let pion = null

        gltfLoader.load(
            '/three/tac-tic/models/tac-tic.glb',
            (gltf) =>
            {
                
                plateau = gltf.scene
                plateau.traverse( function ( child ) { if ( child.isMesh ) {  child.receiveShadow = true; }})
                plateau.scale.set(5,5,5)
                plateau.position.set(0,0.51,0)
                scene.add(plateau)
            }
        )

        gltfLoader.load(
            '/three/tac-tic/models/pion.glb',
            (gltf) =>
            {
                pion = gltf.scene.children[0]
                pion.castShadow = true
                pion.material.color = new THREE.Color("1","0","0")
                pion.scale.set(0.2,0.2,0.2)
                pion.position.set(5.9,1.25,0)
                scene.add(pion)
            }
        )



        /**
         * Floor
         */
        const floor = new THREE.Mesh(
            new THREE.CircleGeometry(17),
            new THREE.MeshStandardMaterial({
                color: '#4e4e4e',
                metalness: 0.2,
                roughness: 0.9
            })
        )
        floor.material.side = THREE.DoubleSide
        floor.receiveShadow = true
        floor.rotation.x = - Math.PI * 0.5
        scene.add(floor)


     

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
        scene.add(ambientLight)

        const pointLight = new THREE.SpotLight(0xffffff,0.7,35,Math.PI*0.18,Math.PI*0.1,0)
        pointLight.position.set(0,30,0)
        pointLight.castShadow = true
        pointLight.shadow.mapSize.set(1024, 1024)
        pointLight.shadow.camera.left = - 15
        pointLight.shadow.camera.top = 15
        pointLight.shadow.camera.right = 15
        pointLight.shadow.camera.bottom = - 15
        pointLight.shadow.camera.far = 31
        pointLight.shadow.camera.near = 25
        scene.add(pointLight)


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
        camera.position.set(- 8, 4, 8)
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.target.set(0, 1, 0)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        /**
         * Animate
         */
        const clock = new THREE.Clock()
        let previousTime = 0

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - previousTime
            previousTime = elapsedTime

            if(mixer)
            {
                mixer.update(deltaTime)
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