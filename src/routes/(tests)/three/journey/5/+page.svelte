<script>
	import { onMount } from 'svelte';
    import * as THREE from 'three'

    onMount(() => {
        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()



        /**
         * Objects
        */
        
        const group = new THREE.Group()
        scene.add(group)

        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        )


        const cube2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        )
        cube2.position.x = -2

        group.add(cube1)
        group.add(cube2)

        group.rotation.y = 0.2
        group.scale.x = 2
        group.position.x = 3
        group.position.z = -3
        // const geometry = new THREE.BoxGeometry(1, 1, 1)
        // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
        // const mesh = new THREE.Mesh(geometry, material)
        // mesh.position.set(2, -1, -5)
        // mesh.scale.x = 2
        // mesh.rotation.reorder('YXZ')
        // mesh.rotation.set(0.25* Math.PI,0.25* Math.PI, 0)
        // scene.add(mesh)


        //Axes helper
        const axesHelper = new THREE.AxesHelper(1)
        scene.add(axesHelper)


        /**
         * Sizes
         */
        const sizes = {
            width: 800,
            height: 600
        }

        /**
         * Camera
         */
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        camera.position.z = 3
        camera.position.set(1, 1, 3)
        // camera.lookAt(mesh.position)
        scene.add(camera)

        // console.log(`My cube is ${mesh.position.distanceTo(camera.position)} m far from camera` )


        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.render(scene, camera)
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