<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import gsap from 'gsap'
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
            

        THREE.ColorManagement.enabled = false


        const loadingManager = new THREE.LoadingManager()

        // loadingManager.onStart = () => {
        //     console.log("start");
        // }

        // loadingManager.onLoad = () => {
        //     console.log("load");
        // }

        // loadingManager.onProgress = (event) => {
        //     console.log("progress",event);
        // }

        // loadingManager.onError = (error) => {
        //     console.log("error",error);
        // }


        const textureLoader = new THREE.TextureLoader(loadingManager)
        const checkboard = textureLoader.load('/three/journey/11/textures/minecraft.png',)
        const albedo = textureLoader.load('/three/journey/11/textures/door/color.jpg',)
        const alpha = textureLoader.load('/three/journey/11/textures/door/alpha.jpg',)
        const ambient = textureLoader.load('/three/journey/11/textures/door/ambientOcclusion.jpg',)
        const metalness = textureLoader.load('/three/journey/11/textures/door/metalness.jpg',)
        const normal = textureLoader.load('/three/journey/11/textures/door/normal.jpg',)
        const height = textureLoader.load('/three/journey/11/textures/door/height.jpg',)
        const roughness = textureLoader.load('/three/journey/11/textures/door/roughness.jpg',)

        checkboard.generateMipmaps = false
        checkboard.minFilter=THREE.NearestFilter
        checkboard.magFilter=THREE.NearestFilter
    //        console.log(THREE.NearestMipmapLinearFilter);


        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Object
         */
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ map:checkboard })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

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
        camera.position.x = 1
        camera.position.y = 1
        camera.position.z = 1
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