import * as THREE from 'three'
import Experience from '../../index'

export default class Halo
{
    constructor(position = {x:0,y:0,z:0})
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.texture = this.experience.resources.items.clouds
        this.camera = this.experience.camera
        this.startPosition = position

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
      

    }
    setGeometry(){
        this.geometry = new THREE.SphereGeometry(5.2)
    }

    setMaterial(){
        this.material = new THREE.MeshBasicMaterial({

            transparent:true,
            map:this.texture,
            alphaMap: this.texture,
        })
    }

    setMesh(){
        this.mesh = new THREE.Mesh(
            this.geometry,
            this.material
        )

        this.scene.add(this.mesh)
    }

    tick(){
        
        this.mesh.rotation.x =  Math.PI / 2   *  this.time.elapsed / 1000 * 0.01
        this.mesh.rotation.y =  Math.PI / 2 *  this.time.elapsed / 1000 * 0.01
    }

}

