<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 
    import CANNON from 'cannon'

    onMount(() => {
                    
        THREE.ColorManagement.enabled = false
        /**
         * Debug
         */
        const gui = new GUI()

        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader()
        const cubeTextureLoader = new THREE.CubeTextureLoader()

        const environmentMapTexture = cubeTextureLoader.load([
            '/three/journey/21/textures/environmentMaps/0/px.png',
            '/three/journey/21/textures/environmentMaps/0/nx.png',
            '/three/journey/21/textures/environmentMaps/0/py.png',
            '/three/journey/21/textures/environmentMaps/0/ny.png',
            '/three/journey/21/textures/environmentMaps/0/pz.png',
            '/three/journey/21/textures/environmentMaps/0/nz.png'
        ])

        /**
         * Physics
        */

        //World
        const world = new CANNON.World()
        world.gravity.set(0,-9.82,0)

        // Sphere
        const sphereShape = new CANNON.Sphere(0.5)
        const sphereBody = new CANNON.Body({
            mass:1,
            position: new CANNON.Vec3(0,3,0),
            shape:sphereShape
        })

        world.addBody(sphereBody)

        /**
         * Test sphere
         */
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 32, 32),
            new THREE.MeshStandardMaterial({
                metalness: 0.3,
                roughness: 0.4,
                envMap: environmentMapTexture,
                envMapIntensity: 0.5
            })
        )
        sphere.castShadow = true
        sphere.position.y = 0.5
        scene.add(sphere)

        /**
         * Floor
         */
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10),
            new THREE.MeshStandardMaterial({
                color: '#777777',
                metalness: 0.3,
                roughness: 0.4,
                envMap: environmentMapTexture,
                envMapIntensity: 0.5
            })
        )
        floor.receiveShadow = true
        floor.rotation.x = - Math.PI * 0.5
        scene.add(floor)

        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.set(1024, 1024)
        directionalLight.shadow.camera.far = 15
        directionalLight.shadow.camera.left = - 7
        directionalLight.shadow.camera.top = 7
        directionalLight.shadow.camera.right = 7
        directionalLight.shadow.camera.bottom = - 7
        directionalLight.position.set(5, 5, 5)
        scene.add(directionalLight)

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
        camera.position.set(- 3, 3, 3)
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
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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