<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
                        
                    
            
        THREE.ColorManagement.enabled = false

        /**
         * Base
         */
        // Debug
        const gui = new dat.GUI()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader()

        /**
         * House
         */
        // Temporary sphere
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1, 32, 32),
            new THREE.MeshStandardMaterial({ roughness: 0.7 })
        )
        sphere.position.y = 1
        scene.add(sphere)

        // Floor
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            new THREE.MeshStandardMaterial({ color: '#a9c388' })
        )
        floor.rotation.x = - Math.PI * 0.5
        floor.position.y = 0
        scene.add(floor)

        /**
         * Lights
         */
        // Ambient light
        const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
        gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
        scene.add(ambientLight)

        // Directional light
        const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
        moonLight.position.set(4, 5, - 2)
        gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
        gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
        gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
        gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
        scene.add(moonLight)

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
        camera.position.x = 4
        camera.position.y = 2
        camera.position.z = 5
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