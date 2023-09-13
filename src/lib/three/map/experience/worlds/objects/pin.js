import * as THREE from 'three'
import Experience from '../../index'

export default class Pin
{
    constructor(position = {x:0,y:0,z:0})
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        
        this.mesh = this.experience.resources.items.pin
        this.startPosition = position

        this.setGltf()
      

    }
    
    setGltf(){

        const lat = -( 6.616964 ) // 48.453966
        const lng = 45.863491 // -4.631720
        const radius = 6

        const latRad = (lat * Math.PI) / 180;
        const lngRad = (lng * Math.PI) / 180;

        const posX = radius * Math.cos(latRad) * Math.cos(lngRad)  
        const posY = radius * Math.cos(latRad) * Math.sin(lngRad) 
        const posZ = radius * Math.sin(latRad)

        this.mesh.scene.position.set( this.startPosition.x, this.startPosition.y, this.startPosition.z)
        this.mesh.scene.position.set( posX,posY, posZ)
        this.mesh.scene.scale.set(0.2,0.2,0.2)
        
        this.mesh.scene.lookAt(new THREE.Vector3(0,0,0))
        this.scene.add(this.mesh.scene)
    }
    tick(){
        
    }

}

