<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { FontLoader } from 'three/addons/loaders/FontLoader.js';
    import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
    import gsap from 'gsap'
    import ScrollTrigger  from 'gsap/dist/ScrollTrigger';
    import GUI from 'lil-gui/dist/lil-gui.esm'; 
    import * as CANNON from 'cannon-es'

    onMount(() => {
                    
        THREE.ColorManagement.enabled = false
        /**
         * Debug
         */
        const gui = new GUI()
        const parameters = {
            create : ()=>{

                createSphere(10.5,{x: (Math.random() -0.5) *5 ,y: 200,z: (Math.random() -0.5) *5}, 1000, {x:0,y:1000000,z:0})

            },
            reset: () => {
                for(const object of objectsToUpdate){

                    object.body.removeEventListener('collide',playHitSound)
                    world.removeBody(object.body)
                    scene.remove(object.mesh)


                }
                objectsToUpdate.length = 0

            }
        }
        gui.add(parameters,"create").name("Dinosaurs extinction")
        gui.add(parameters,"reset").name("Delete All")
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
         * Audio
        */
        const hitSound = new Audio("/three/journey/21/sounds/hit.mp3")
        const playHitSound = (collision)=>{

            if(collision.contact.getImpactVelocityAlongNormal() > 100){
                hitSound.currentTime = 0
                        hitSound.play()
            }

         
        }


        /**
         * Physics
        */

        //World
        const world = new CANNON.World()
        world.gravity.set(0,-9.82*2,0)
        world.allowSleep = true
        world.broadphase = new CANNON.SAPBroadphase(world)
        //Materials
        const concreteMaterial = new CANNON.Material("concrete")
        const plasticMaterial = new CANNON.Material("plastic")

        const concretePlasticContactMaterial = new CANNON.ContactMaterial(
            concreteMaterial,
            plasticMaterial,
            {
                friction:0.8,
                restitution: 0.5
            }
        )
        world.addContactMaterial(concretePlasticContactMaterial)

   
        //Floor
        const floorShape = new CANNON.Plane()
        const floorBody = new CANNON.Body({
            mass:0,
            shape:floorShape,
            material:concreteMaterial
        })
        floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),- Math.PI*0.5)
        world.addBody(floorBody)


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
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 150)
        camera.position.set(- 30, 30, 30)
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
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Utils
        */

        const objectsToUpdate = []

        const boxGeometry = new THREE.BoxGeometry(1,1)
        const boxMaterial = new THREE.MeshStandardMaterial({
                    metalness:0.6,
                    roughness:0.2,
                    envMap:environmentMapTexture
                })
        const createBox = (radius,position) =>{


            //Three js mesh
            const mesh = new THREE.Mesh(
                boxGeometry,
                boxMaterial
            )
            mesh.scale.set(radius,radius,radius)
            mesh.castShadow = true
            mesh.position.copy(position)
            scene.add(mesh)
            
            
            const boxShape = new CANNON.Box(new CANNON.Vec3(radius/2,radius/2,radius/2))
            const boxBody = new CANNON.Body({
                position :new CANNON.Vec3(position.x,position.y,position.z),
                mass:Math.random()*10 +1,
                material:plasticMaterial,
                linearDamping:0.8,
                angularDamping:0.8
            })

            boxBody.addShape(boxShape)
            world.addBody(boxBody)

            objectsToUpdate.push({
                mesh : mesh,
                body: boxBody
            })
       }



        const sphereGeometry = new THREE.SphereGeometry(1)
        const sphereMaterial = new THREE.MeshStandardMaterial({
                    metalness:0.3,
                    roughness:0.5,
                    envMap:environmentMapTexture
                })
     
        const createSphere = (radius,position,mass = Math.random()*10 +1, initialVelocity = {x:0,y:0,z:0}) =>{


            //Three js mesh
            const mesh = new THREE.Mesh(
                sphereGeometry,
                sphereMaterial
            )
            mesh.scale.set(radius,radius,radius)
            mesh.castShadow = true
            mesh.position.copy(position)
            scene.add(mesh)

            const sphereShape = new CANNON.Sphere(radius)
            const sphereBody = new CANNON.Body({
                position :new CANNON.Vec3(position.x,position.y,position.z),
                mass:mass,
                material:concreteMaterial,
                linearDamping:0.8,
                angularDamping:0.8
            })
 
            sphereBody.addShape(sphereShape)
            sphereBody.addEventListener('collide',playHitSound)
            sphereBody.applyLocalImpulse(new CANNON.Vec3(initialVelocity.x,-initialVelocity.y,initialVelocity.z),new CANNON.Vec3(0,0,0) )
            world.addBody(sphereBody)
            objectsToUpdate.push({
                mesh : mesh,
                body: sphereBody
            })
       }


       for(let i =0;i<100;i++){
            createSphere(0.5,{x: (Math.random() -0.5) *5 ,y: Math.random() *15 +5,z: (Math.random() -0.5) *5})
            createBox(1.5,{x: (Math.random() -0.5) *5 ,y: Math.random() *15 +5,z: (Math.random() -0.5) *5})
       }


        /**
         * Animate
         */
        const clock = new THREE.Clock()
        let oldElapsedTime = 0

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()
            const deltaTime = elapsedTime - oldElapsedTime
            oldElapsedTime = elapsedTime 

            //Update physics world
            for(const object of objectsToUpdate){
                object.mesh.position.copy(object.body.position)
                object.mesh.quaternion.copy(object.body.quaternion)
            }

            world.step(1/60,deltaTime,3)


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