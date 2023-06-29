<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import gsap from 'gsap'

    onMount(() => {
       


        
        /**
         * Cursor
        */

        const cursor = {
            x:0,
            y:0,
        }
        window.addEventListener("mousemove",(event)=>{
            cursor.x = event.clientX / window.innerWidth - 0.5
            cursor.y = event.clientY / window.innerHeight - 0.5
        })


        // Sizes
        const sizes = {
            width: 800,
            height: 600
        }

        /**
         * Base
         */
        // Canvas
        const canvas = document.querySelector('canvas.webgl')


        //Aspect Ration
        const aspectRation = sizes.width / sizes.height

        // Scene
        const scene = new THREE.Scene()

        // Object
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
            new THREE.MeshBasicMaterial({ color: 0xff00ff })
        )
        scene.add(mesh)

        // Camera
         const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height,0.1,100)
        // const camera = new THREE.OrthographicCamera( -2*aspectRation,2*aspectRation,2,-2, .1, 100 );
        // camera.position.x = 2
        // camera.position.y = 2
        camera.position.z =3
        camera.lookAt(mesh.position)
        scene.add(camera)

        //Controls
        const controls = new OrbitControls(camera,canvas)
        controls.enableDamping = true
        controls.dampingFactor = 0.3
        controls.autoRotate = true
        controls.autoRotateSpeed = 2


        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)

        // Animate
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Update objects
            // mesh.rotation.y = elapsedTime;
            //     mesh.rotation.y = cursor.x * Math.PI * 2
            //    // mesh.rotation.x = cursor.y * Math.PI * 2

            //     camera.position.x  = -cursor.x 
            //     camera.position.y = cursor.y *5
            //     camera.lookAt(mesh.position)


            //Update controls
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

        canvas.webgl{
            width: 100%;
            height: 100%;
            background: rgba($color: #dadada, $alpha: .3);
        }
    }

  

</style>