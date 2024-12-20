import * as THREE from 'three'
import Experience from "./index";
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Camera {


    constructor(){

        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance(){

        this.instance = new THREE.PerspectiveCamera(35, this.sizes.aspectRatio,0.1,100)
        this.instance.position.set(20,20,20)
        this.scene.add(this.instance)

    }

    setControls(){

        this.controls = new OrbitControls(this.instance,this.canvas)
        this.controls.target.set(0, 1, 0)
        this.controls.enableDamping = true
        this.controls.dampingFactor =0.05
        this.controls.maxDistance =50
        this.controls.minDistance =15
        this.controls.rotateSpeed =0.5
        this.controls.autoRotate = true
        this.controls.autoRotateSpeed =2.1
        this.controls.panSpeed =0.1
        this.controls.enablePan = false;
        this.controls.maxPolarAngle = Math.PI / 3 * 2
        this.controls.minPolarAngle = Math.PI / 3
        this.controls.enableZoom = false;

    }

    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    tick()
    {
        this.controls.update()
    }

    lookAt(position ={x:0,y:0,z:0}){

        const {x,y,z} = position
        gsap.to(this.instance.position,{
            x,y,z,
            duration: 2,
            ease:"linear"
        })

        this.controls.autoRotate = false;
    }

}