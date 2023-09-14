import * as THREE from 'three'
import Experience from '../../index'
import Geography from '../../utils/geography'

export default class Pin
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.intersect = this.experience.intersect
        this.mesh = this.experience.resources.items.pin.scene.children[2]

        this.setGltf()
      

    }
    
    setGltf(){

    
        const {x,y,z} = Geography.CoordinatesToWorldPoint(5.6,45.919650,6.151866)
        this.mesh.geometry.center()
        this.mesh.position.set(x,y,z)
        this.mesh.scale.set(100,100,100)
        
        this.mesh.lookAt(new THREE.Vector3(0,0,0))
        this.intersect.setObject({
            object : this.mesh,
            name : 'pin',
            mouseClick:true,
            mouseEnter : true,
            mouseLeave : true
        })

        this.intersect.on("pin-enter",(clickedEvent) => {
            document.body.style.cursor = "pointer"
        })
        this.intersect.on("pin-leave",(clickedEvent) => {
            document.body.style.cursor = "inherit"
        })
        this.intersect.on("pin-click",(clickedEvent) => {
            this.camera.lookAt({x,y,z})
            setTimeout(_=>{

                const popup = document.querySelector(".popup");
                popup.classList.remove("hide")

            },2000)
        })
        this.scene.add(this.mesh)
    }
    tick(){
        
    }

}

