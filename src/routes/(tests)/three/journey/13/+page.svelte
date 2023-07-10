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
         * Manager
        */

        const loaderManager = new THREE.LoadingManager()

        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader(loaderManager)
        const toonTexture = textureLoader.load('/three/journey/12/textures/gradients/5.jpg')

        /**
         * Fonts
        */
        const fontLoader = new FontLoader(loaderManager);



        let font;
        fontLoader.load('/three/journey/13/fonts/Belanosima_SemiBold_Regular.json',(fontLoaded)=>{
            font = fontLoaded
        });

        loaderManager.onLoad = (loaded) => {


            let settings = {
                font,
                size:0.5,
                height:0.2,
                curveSegments:3,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 2
            }

            const textGeometry = new TextGeometry( 'Guillian', settings);
            const textMaterials =  new THREE.MeshToonMaterial()
            toonTexture.minFilter = THREE.NearestFilter
            toonTexture.magFilter = THREE.NearestFilter
            toonTexture.generateMipmaps = false
            textMaterials.gradientMap = toonTexture
            

            const textMesh = new THREE.Mesh(
                textGeometry,
                textMaterials
            )



            const textGeometryFolder = gui.addFolder('Text')
            textGeometryFolder.add(textMaterials,'wireframe')


            scene.add(textMesh)



        }

        /**
         * Axes
        */

        const axes = new THREE.AxesHelper()
        scene.add(axes)


        /**
         * Lights
        */

        const ambiantLight = new THREE.AmbientLight(0xffffff,0.5)
        ambiantLight.position.set(2,2,2)
        scene.add(ambiantLight)


        const pointLight = new THREE.PointLight(0xffffff,0.5)
        pointLight.position.set(-4,4,4)
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
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
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