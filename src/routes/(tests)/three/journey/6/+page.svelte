<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'
    import gsap from 'gsap'

    onMount(() => {
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        // Object
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        // Sizes
        const sizes = {
            width: 800,
            height: 600
        }

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        camera.position.z = 5
        scene.add(camera)

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        
        //Time
        //let time = Date.now()
        //const clock = new THREE.Clock()

        gsap.to(mesh.position,{

            x:2,
            delay:1,
            duration:1,
            yoyo:true,
            repeat:-1,
            ease:"none"

        })

        //Animation
        const tick = () => {
         
            //Time
            // const currentTime = Date.now()
            // const deltaTime = currentTime - time
            // time = currentTime
            // const elapsedTime = clock.getElapsedTime()
            // console.log(elapsedTime);

            //Update Objects
            // mesh.rotation.y = Math.sin(elapsedTime) * Math.PI 
            // mesh.position.x = Math.sin(elapsedTime) * Math.PI * 0.5 
            // mesh.position.y = Math.cos(elapsedTime) * Math.PI * 0.5
            // camera.lookAt(mesh.position)
            //Render
            renderer.render(scene, camera)
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