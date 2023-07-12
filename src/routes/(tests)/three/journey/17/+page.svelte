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


        //Fog
        const fog = new THREE.Fog("#262837",1,15)
        scene.fog = fog
        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader()
        const albedo = textureLoader.load('/three/journey/17/textures/door/color.jpg',)
        const alpha = textureLoader.load('/three/journey/17/textures/door/alpha.jpg',)
        const ambient = textureLoader.load('/three/journey/17/textures/door/ambientOcclusion.jpg',)
        const metalness = textureLoader.load('/three/journey/17/textures/door/metalness.jpg',)
        const normal = textureLoader.load('/three/journey/17/textures/door/normal.jpg',)
        const height = textureLoader.load('/three/journey/17/textures/door/height.jpg',)
        const roughness = textureLoader.load('/three/journey/17/textures/door/roughness.jpg',)

        const albedoBrick = textureLoader.load('/three/journey/17/textures/bricks/color.jpg',)
        albedoBrick.repeat.x = 2
        albedoBrick.wrapS = THREE.RepeatWrapping 
        albedoBrick.magFilter = THREE.NearestFilter
        albedoBrick.generateMipmaps = false
        const ambientBrick = textureLoader.load('/three/journey/17/textures/bricks/ambientOcclusion.jpg',)
        ambientBrick.repeat.x = 2
        ambientBrick.wrapS = THREE.RepeatWrapping 
        ambientBrick.magFilter = THREE.NearestFilter
        ambientBrick.generateMipmaps = false
        const normalBrick = textureLoader.load('/three/journey/17/textures/bricks/normal.jpg',)
        normalBrick.repeat.x = 2
        normalBrick.wrapS = THREE.RepeatWrapping 
        normalBrick.magFilter = THREE.NearestFilter
        normalBrick.generateMipmaps = false
        const roughnessBrick = textureLoader.load('/three/journey/17/textures/bricks/roughness.jpg',)
        roughnessBrick.repeat.x = 2
        roughnessBrick.wrapS = THREE.RepeatWrapping 
        roughnessBrick.magFilter = THREE.NearestFilter
        roughnessBrick.generateMipmaps = false




        const albedoGrass = textureLoader.load('/three/journey/17/textures/grass/color.jpg',)
        albedoGrass.repeat.set(12,12)
        albedoGrass.wrapS = THREE.RepeatWrapping 
        albedoGrass.wrapT = THREE.RepeatWrapping 
        const ambientGrass = textureLoader.load('/three/journey/17/textures/grass/ambientOcclusion.jpg',)
        ambientGrass.repeat.set(12,12)
        ambientGrass.wrapS = THREE.RepeatWrapping 
        ambientGrass.wrapT = THREE.RepeatWrapping 
        const normalGrass = textureLoader.load('/three/journey/17/textures/grass/normal.jpg',)
        normalGrass.repeat.set(12,12)
        normalGrass.wrapS = THREE.RepeatWrapping 
        normalGrass.wrapT = THREE.RepeatWrapping 
        const roughnessGrass = textureLoader.load('/three/journey/17/textures/grass/roughness.jpg',)
        roughnessGrass.repeat.set(12,12)
        roughnessGrass.wrapS = THREE.RepeatWrapping 
        roughnessGrass.wrapT = THREE.RepeatWrapping 



        /**
         * House
        */

        const house = new THREE.Group()
        scene.add(house)

        //Walls
        let wallsHeight = 3;
        const brickMaterial =  new THREE.MeshStandardMaterial( {
                map:albedoBrick,
                aoMap:ambientBrick,
                normalMap:normalBrick,
                roughnessMap:roughnessBrick,

        })

        console.log(brickMaterial)
        const walls = new THREE.Mesh(
            new THREE.BoxBufferGeometry(7,wallsHeight,4,10),
            brickMaterial
        )
        walls.position.y =wallsHeight/2
        walls.castShadow = true
        
        house.add(walls)

        //Roof
        const roofHeight = 2
        const coneGeometry = new THREE.ConeBufferGeometry(3.5,roofHeight,4)
        coneGeometry.rotateY(Math.PI*0.25)
        let roof = new THREE.Mesh(
            coneGeometry,
            new THREE.MeshStandardMaterial({color:"#b35f45"})
        )
        roof.position.y = wallsHeight + roofHeight/2
        roof.scale.x = 1.5
        house.add(roof)

        //Door
        const doorHeight = 2
        const doorStandardMaterial = new THREE.MeshStandardMaterial(
            {
                map:albedo,
                transparent:true,
                alphaMap:alpha,
                aoMap:ambient,
                displacementMap : height,
                displacementScale:0.1,
                normalMap:normal,
                metalnessMap:metalness,
                roughnessMap:roughness
            }
        )
        const door = new THREE.Mesh(
            new THREE.PlaneGeometry(2,doorHeight),
            doorStandardMaterial
        )
        door.position.y= doorHeight / 2
        door.position.z = 2.01
        house.add(door)

        //Door Light
        const doorLight = new THREE.PointLight("#ff7d46",1,7)
        doorLight.castShadow = true
        doorLight.shadow.mapSize.width = 256
        doorLight.shadow.mapSize.height = 256
        doorLight.shadow.mapSize.far = 7
        doorLight.position.set(0,2.2,3.7)
        house.add(doorLight)

        // Floor
        const floorStandardMaterial = new THREE.MeshStandardMaterial({ 
                map:albedoGrass,
                aoMap:ambientGrass,
                normalMap:normalGrass,
                roughnessMap:roughnessGrass,

         })
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 20),
            floorStandardMaterial
        )
        floor.rotation.x = - Math.PI * 0.5
        floor.position.y = 0
        floor.receiveShadow = true
        scene.add(floor)

        //Bushes
        const bushGeometry = new THREE.SphereGeometry(1,16,16)
        const bushMaterial = new THREE.MeshStandardMaterial({color:"#89c854"})

        const bush = new THREE.Mesh(bushGeometry,bushMaterial)
        bush.position.set(3.99,0.2,1.8)
        const bush2 = new THREE.Mesh(bushGeometry,bushMaterial)
        bush2.scale.set(0.5,0.5,0.5)
        bush2.position.set(5.2,0.2,2)
        house.add(bush,bush2)


        //Graves
        const gravesGroup = new THREE.Group()
        scene.add(gravesGroup)
        const graveHeight = 1.5
        const graveGeometry = new THREE.BoxGeometry(0.8,graveHeight,0.3)
        const graveMaterial = new THREE.MeshStandardMaterial({color:"#dadada"})

        for(let i = 0;i< 25 ;  i++ ){

            const random = (Math.random()-0.5)
            const posX = Math.sin(random * Math.PI * 2)
            const posY = Math.cos(random* Math.PI * 2)
            const grave = new THREE.Mesh(graveGeometry,graveMaterial)
            grave.rotation.set(random * 0.1 * Math.PI,Math.random()* 0.1 * Math.PI,0)
            grave.position.set(posX*7 +(Math.random()-0.5)*3,graveHeight/2 - 0.1,posY*7+(Math.random()-0.5)*3)
            grave.castShadow = true
            gravesGroup.add(grave)

        }

        /**
         * Lights
         */
        // Ambient light
        const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
        gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
        scene.add(ambientLight)

        // Directional light
        const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
        moonLight.castShadow = true
        moonLight.shadow.mapSize.width = 256
        moonLight.shadow.mapSize.height = 256
        moonLight.shadow.mapSize.far = 7
        moonLight.position.set(4, 5, - 2)
        gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
        gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
        gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
        gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
        scene.add(moonLight)


        /**
         * Ghosts
        */

        const ghost = new THREE.PointLight("#ff00ff",2,3)
        ghost.castShadow = true
        ghost.shadow.mapSize.width = 256
        ghost.shadow.mapSize.height = 256
        ghost.shadow.mapSize.far = 7
        const ghost2 = new THREE.PointLight("#dadada",2,3)
        ghost2.castShadow = true
        ghost2.shadow.mapSize.width = 256
        ghost2.shadow.mapSize.height = 256
        ghost2.shadow.mapSize.far = 7
        const ghost3 = new THREE.PointLight("#E5d30D",2,3)
        ghost3.castShadow = true
        ghost3.shadow.mapSize.width = 256
        ghost3.shadow.mapSize.height = 256
        ghost3.shadow.mapSize.far = 7
        scene.add(ghost,ghost2,ghost3)

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
            canvas: canvas,
            // alpha:true
        })
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor("#262837")
        renderer.shadowMap.enabled = true
        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()


            ghost.position.x = Math.cos(elapsedTime * 0.2) * 6
            ghost.position.y = Math.abs(Math.sin(elapsedTime*0.5)) +1
            ghost.position.z = Math.sin(elapsedTime* 0.2) * 6

           
            ghost2.position.x = Math.cos(-elapsedTime * 0.3) * 7
            ghost2.position.y = Math.abs(Math.sin(elapsedTime*0.5)) +1
            ghost2.position.z = Math.sin(-elapsedTime* 0.3) * 7

            ghost3.position.x = Math.cos(elapsedTime * 0.4) * 8
            ghost3.position.y = Math.abs(Math.sin(elapsedTime*0.6)) +1
            ghost3.position.z = Math.sin(elapsedTime* 0.4) * 8


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