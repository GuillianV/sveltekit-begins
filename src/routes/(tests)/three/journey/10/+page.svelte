<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import gsap from 'gsap'
    import GUI from 'lil-gui/dist/lil-gui.esm'; 

    onMount(() => {
            

        /**
         * DEBUG
        */
        const gui = new GUI();

  
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
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)


        let spinTl = new gsap.timeline()
        const cubeSettings = {

            spinRight:()=>{
                if(!spinTl.isActive())
                    spinTl.to(mesh.rotation,{
                        y:mesh.rotation.y + Math.PI *0.5,
                    })
            },
            spinLeft:()=>{
                if(!spinTl.isActive())
                    spinTl.to(mesh.rotation,{
                        y:mesh.rotation.y - Math.PI *0.5,
                    })
            }


        }
      
        const folder = gui.addFolder('Cube')
        folder.add(mesh.position,'x').min(-3).max(3).step(0.1).name("position X")
        folder.add(mesh.position,'y').min(-3).max(3).step(0.1).name("position Y")
        folder.add(mesh.position,'z').min(-3).max(3).step(0.1).name("position Z")
        folder.add(mesh,'visible')
        folder.add(material,'wireframe')
        folder.addColor(material,'color')
        folder.add(cubeSettings,"spinRight").name("Spin Right !")
        folder.add(cubeSettings,"spinLeft").name("Spin Left !")
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
        camera.position.z = 3
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