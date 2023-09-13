import * as THREE from 'three'
import Experience from '../../index'
import VertexShader from '../../shaders/halo/vertex.glsl';
import FragmentShader from '../../shaders/halo/fragment.glsl';

export default class Halo
{
    constructor(position = {x:0,y:0,z:0})
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.texture = this.experience.resources.items.star
        this.camera = this.experience.camera
        this.startPosition = position

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
      

    }
    setGeometry(){
        this.geometry = new THREE.PlaneGeometry(20,20,50,50)
    }

    setMaterial(){
        this.material = new THREE.ShaderMaterial({
            vertexShader: VertexShader,
            fragmentShader: FragmentShader,
            transparent:true,
            uniforms:{
				uTime: {type: 'float', value: 0},
			}
        })
    }

    setMesh(){
        this.mesh = new THREE.Mesh(
            this.geometry,
            this.material
        )

        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }

    tick(){

        
        this.material.uniforms.uTime.value = this.time.elapsed / 1000;
        this.mesh.lookAt( this.camera.instance.position)
    }

}

