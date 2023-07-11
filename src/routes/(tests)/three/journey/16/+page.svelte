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
         * Manager
        */

        const loaderManager = new THREE.LoadingManager()

        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader(loaderManager)
        const bakedShadow = textureLoader.load('/three/journey/16/textures/bakedShadow.jpg')
        const simpleShadow = textureLoader.load('/three/journey/16/textures/simpleShadow.jpg')




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
         * Lights
         */
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
        scene.add(ambientLight)

        // Directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
        directionalLight.position.set(2, 2, - 1)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.width = 512
        directionalLight.shadow.mapSize.height = 512
        directionalLight.shadow.radius = 2
        directionalLight.shadow.blurSamples = 8 
        directionalLight.shadow.camera.near = 1
        directionalLight.shadow.camera.far = 11


        directionalLight.shadow.camera.top = 3
        directionalLight.shadow.camera.bottom = -3
        directionalLight.shadow.camera.left = -3
        directionalLight.shadow.camera.right = 3
        const directionalCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
        directionalCameraHelper.visible = false
        scene.add(directionalCameraHelper)

        gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001)
        gui.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001)
        gui.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001)
        gui.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001)
        scene.add(directionalLight)



        //Spot Light
        const spotLight = new THREE.SpotLight(0xffffff,0.3,10,Math.PI*0.3)
        spotLight.position.set(0,2,2)
        spotLight.castShadow = true
        spotLight.shadow.mapSize.width = 1024
        spotLight.shadow.mapSize.height = 1024
        spotLight.shadow.camera.near =2
        spotLight.shadow.camera.far = 5

        scene.add(spotLight)
        scene.add(spotLight.target)

        const spotlightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
        spotlightCameraHelper.visible = false
        scene.add(spotlightCameraHelper)
        

        const pointLight = new THREE.PointLight(0xffffff,0.2,10)
        pointLight.castShadow = true
        pointLight.shadow.mapSize.width = 1024
        pointLight.shadow.mapSize.height = 1024
        pointLight.shadow.camera.near =2
        pointLight.shadow.camera.far = 7
        pointLight.position.set(-2,2,-2)
        const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
        pointLightCameraHelper.visible = false
        scene.add(pointLight,pointLightCameraHelper)
        /**
         * Materials
         */
        const material = new THREE.MeshStandardMaterial()
        material.roughness = 0.7
        gui.add(material, 'metalness').min(0).max(1).step(0.001)
        gui.add(material, 'roughness').min(0).max(1).step(0.001)

        /**
         * Objects
         */
        const axes = new THREE.AxesHelper()
        scene.add(axes)

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 32, 32),
            material
        )
        sphere.castShadow = true
        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 5),
            material
        )
        plane.rotation.x = - Math.PI * 0.5
        plane.position.y = - 0.5
        plane.receiveShadow = true

        scene.add(sphere, plane)

        const sphereShadow = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(1.5,1.5),
            material
        )
        // sphereShadow.rotation.x = - Math.PI * 0.5
        // sphereShadow.position.y = plane.position.y + 0.01
        // scene.add(sphereShadow)


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
        camera.position.z = 2
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
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Update controls
            controls.update()

            sphere.position.x = Math.cos(elapsedTime)
            sphere.position.y = Math.abs(Math.sin(elapsedTime*3))
            sphere.position.z = Math.sin(elapsedTime)

            sphereShadow.position.x = sphere.position.x
            sphereShadow.position.z = sphere.position.z
           
            // sphereShadow.scale.x = 1 / sphere.position.distanceTo(plane.position)
            // sphereShadow.scale.y = 1 / sphere.position.distanceTo(plane.position)
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