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
        const gui = new GUI()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Lights
         */
        const ambiantLight = new THREE.AmbientLight(0xffffff,0.2)
        const guiAmbientFolder = gui.addFolder('Ambient Light')
        guiAmbientFolder.add(ambiantLight,'intensity',0,1,0.1)
        guiAmbientFolder.addColor(ambiantLight,'color')
        guiAmbientFolder.add(ambiantLight,'visible')
        scene.add(ambiantLight)


        const directionalLight = new THREE.DirectionalLight(0xffffff,0.5)
        directionalLight.position.set(3,1,1)
        const guiDirectionalFolder = gui.addFolder('Directional Light')
        guiDirectionalFolder.add(directionalLight,'intensity',0,1,0.1)
        guiDirectionalFolder.addColor(directionalLight,'color').onChange(value => { 
            directionalLight.color = value;
        })
        guiDirectionalFolder.add(directionalLight,'visible')
        scene.add(directionalLight)

        const hemisphereLight = new THREE.HemisphereLight('#E8B33A','#E8563A',0.3)
        scene.add(hemisphereLight)

        const pointLight = new THREE.PointLight(0xff00ff,0.4)
        pointLight.distance = 3
        pointLight.decay = 4
        pointLight.position.set(0,-0.4,-2)
        scene.add(pointLight)

         
        const rectAreaLight = new THREE.RectAreaLight(0xfff000,2.9,1,1)
        rectAreaLight.position.set(1,1,1)
        rectAreaLight.lookAt(0,0,0)
        scene.add(rectAreaLight)

        // const spotLight = new THREE.SpotLight(0xff0f00,0.5,10,Math.PI*0.2,0.25,1)
        // scene.position.set(2,2,3)
        // scene.add(spotLight)
    

        /**
         * Helpers
        */

        const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight,0.2)
        scene.add(hemisphereLightHelper)

        const pointLightHelper = new THREE.PointLightHelper(pointLight,0.2)
        scene.add(pointLightHelper)
        /**
         * Objects
         */

        const axes = new THREE.AxesHelper()
        scene.add(axes)

        // Material
        const material = new THREE.MeshStandardMaterial()
        material.roughness = 0.4

        // Objects
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 32, 32),
            material
        )
        sphere.position.x = - 1.5

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.75, 0.75, 0.75),
            material
        )

        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(0.3, 0.2, 32, 64),
            material
        )
        torus.position.x = 1.5

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(5, 5),
            material
        )
        plane.rotation.x = - Math.PI * 0.5
        plane.position.y = - 0.65

        scene.add(sphere, cube, torus, plane)

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

        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Update objects
            sphere.rotation.y = 0.1 * elapsedTime
            cube.rotation.y = 0.1 * elapsedTime
            torus.rotation.y = 0.1 * elapsedTime

            sphere.rotation.x = 0.15 * elapsedTime
            cube.rotation.x = 0.15 * elapsedTime
            torus.rotation.x = 0.15 * elapsedTime

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