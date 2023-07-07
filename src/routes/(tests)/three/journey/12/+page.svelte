<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import gsap from 'gsap'
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
            
        THREE.ColorManagement.enabled = false

        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Objects
        */

        const manager = new THREE.LoadingManager()
        const textureLoader = new THREE.TextureLoader(manager)
        const albedo = textureLoader.load('/three/journey/12/textures/door/color.jpg',)
        const alpha = textureLoader.load('/three/journey/12/textures/door/alpha.jpg',)
        const ambient = textureLoader.load('/three/journey/12/textures/door/ambientOcclusion.jpg',)
        const metalness = textureLoader.load('/three/journey/12/textures/door/metalness.jpg',)
        const normal = textureLoader.load('/three/journey/12/textures/door/normal.jpg',)
        const height = textureLoader.load('/three/journey/12/textures/door/height.jpg',)
        const roughness = textureLoader.load('/three/journey/12/textures/door/roughness.jpg',)
        const matCap = textureLoader.load('/three/journey/12/textures/matcaps/8.png')
        const gradient = textureLoader.load('/three/journey/12/textures/gradients/5.jpg')


        const cubeTextureLoader = new THREE.CubeTextureLoader(manager)
        const environementMapTexture = cubeTextureLoader.load(["/three/journey/12/textures/environmentMaps/0/px.jpg",
        "/three/journey/12/textures/environmentMaps/0/nx.jpg",
        "/three/journey/12/textures/environmentMaps/0/py.jpg",
        "/three/journey/12/textures/environmentMaps/0/ny.jpg",
        "/three/journey/12/textures/environmentMaps/0/pz.jpg",
        "/three/journey/12/textures/environmentMaps/0/nz.jpg"])

        // const material = new THREE.MeshBasicMaterial()
        // material.map = albedo
        // material.transparent = true
        // material.opacity =.7
        // material.depthWrite=true
        // material.depthTest = true
        // material.side = THREE.DoubleSide

        // const material = new THREE.MeshNormalMaterial()
        // material.flatShading = true

        // const material = new THREE.MeshMatcapMaterial()
        // material.matcap = matCap
       
        // const material = new THREE.MeshDepthMaterial()
        //const material = new THREE.MeshLambertMaterial()

        // const material = new THREE.MeshPhongMaterial()
        // material.shininess = 100
        // material.specular = new THREE.Color("rgb(150,20,255)")


        // gradient.magFilter = THREE.NearestFilter
        // gradient.minFilter = THREE.NearestFilter
        // gradient.generateMipmaps = false
        // const material = new THREE.MeshToonMaterial()
        // material.gradientMap = gradient

        // const material = new THREE.MeshToonMaterial()

        albedo.magFilter = THREE.NearestFilter
        albedo.minFilter = THREE.NearestFilter
        albedo.generateMipmaps = false

        const material = new THREE.MeshStandardMaterial()
        material.side = THREE.DoubleSide
        material.metalness = 0.7
        material.roughness = 0.1
        material.map = albedo
        material.aoMap = ambient
        material.aoMapIntensity = 2
        material.displacementMap = height
        material.displacementScale = 0.15
        material.alphaMap = alpha
        material.transparent = true
        material.metalnessMap = metalness
        material.metalness =0.6
        material.roughnessMap = roughness
        material.roughness =1
        material.normalMap = normal

        material.envMap = environementMapTexture
      

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.5,16,16),
            material
        )

        sphere.position.set(-3,0,0)

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2,2,50,50),
            material
        )

        const torus = new THREE.Mesh(
            new THREE.TorusKnotGeometry(8,2,80,80,2,3),
            material
        )
        torus.position.set(15,0,0)
        
        scene.add(sphere,plane,torus)
        
        /**
         * Lights
        */
        const ambiantLight = new THREE.AmbientLight(0xffffff,0.2)
        const pointLight = new THREE.PointLight(0xffffff,0.5)
        pointLight.position.set(2,3,4)

        scene.add(ambiantLight,pointLight)
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

            torus.rotation.y = elapsedTime * 0.1
            sphere.rotation.y = elapsedTime * 0.1
            
            
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