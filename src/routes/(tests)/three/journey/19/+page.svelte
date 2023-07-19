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
         * Galaxy
        */
       const parameters = {
            count:100000,
            size:0.01,
            radius:5,
            branches:3,
            spin:1,
            startSpacing:0,
            randomness:0.2,
            randomnessPower:1,
            insideColor:'#ff5588',
            outsideColor:'#005588'
       }

       let geometry = null
       let material = null
       let points = null;



       const generateGalaxy = ()=>{
            

            //Destroy Galaxy
            if(points !== null){
                geometry.dispose()
                material.dispose()
                scene.remove(points)
            }

            geometry = new THREE.BufferGeometry()

            const positions = new Float32Array(parameters.count*3)
            const colors = new Float32Array(parameters.count * 3)

            const colorInside = new THREE.Color(parameters.insideColor)
            const colorOutside = new THREE.Color(parameters.outsideColor)

            for(let i = 0;i< parameters.count;i++){

                const i3 = i * 3
                const radius = Math.random() * parameters.radius + parameters.startSpacing
                const angle = (i % parameters.branches / parameters.branches) * Math.PI * 2

                const spinAngle = radius * parameters.spin

                const randX = Math.pow(Math.random(), parameters.randomnessPower)  * (Math.random()<0.5?-1:1) * parameters.randomness * radius
                const randY = Math.pow(Math.random(), parameters.randomnessPower)  * (Math.random()<0.5?-1:1) * parameters.randomness * radius
                const randZ = Math.pow(Math.random(), parameters.randomnessPower)  * (Math.random()<0.5?-1:1) * parameters.randomness * radius


                positions[i3] = Math.cos(angle+spinAngle) * radius +randX 
                positions[i3+1] =  randY
                positions[i3+2] =  Math.sin(angle+spinAngle) * radius  + randZ 

                const mixedColor = colorInside.clone()
                mixedColor.lerp(colorOutside,radius/ parameters.radius)

                colors[i3] = mixedColor.r 
                colors[i3+1] = mixedColor.g
                colors[i3+2] = mixedColor.b

            }
            geometry.setAttribute("position", new THREE.BufferAttribute(positions,3))
            geometry.setAttribute("color", new THREE.BufferAttribute(colors,3))

            const materialProperties  = {
                color : 0xdadada,
                size:parameters.size,
                sizeAttenuation:true,
                blending : THREE.AdditiveBlending,
                vertexColors : true,
            }


            material = new THREE.PointsMaterial(materialProperties)
            points = new THREE.Points(geometry,material)

            scene.add(points)
       }


       const galaxyFolder =  gui.addFolder("Galaxy")
       galaxyFolder.add(parameters,'count',100,1000000,100).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'size',0.001,0.1,0.001).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'radius',0.01,20,0.01).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'branches',2,20,1).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'spin',0,2,0.01).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'randomness',0.01,1,0.01).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'startSpacing',-10,10,0.01).onFinishChange(generateGalaxy)
       galaxyFolder.add(parameters,'randomnessPower',1,10,0.01).onFinishChange(generateGalaxy)
       
       generateGalaxy()

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
        camera.position.x = 3
        camera.position.y = 3
        camera.position.z = 3
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
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