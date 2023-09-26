import * as THREE from 'three'
import VertexShader from '../../shaders/vertex.glsl';
import FragmentShader from '../../shaders/fragment.glsl';
export default class Slide {

    constructor(image,settings,index,maxIndex){


        this.image = image;
        this.settings = settings
        this.index = index
        this.maxIndex = maxIndex

        this.setMaterial()
        this.setGeometry()
        this.setMesh()

    }




    setMaterial(){
        this.material = new THREE.ShaderMaterial({
            wireframe: this.settings.wireframe,
            side: this.settings.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
            transparent: true,
            vertexShader: VertexShader,
            fragmentShader: FragmentShader,
            uniforms: {
                uPicture: { value: null },
                uTwist : { value : this.settings.twist }
            }
        });

    }
    
    setGeometry(){
        this.geometry = new THREE.PlaneGeometry(1, 1, 100, 1);
    }

    setMesh(){
        this.mesh  = new THREE.Mesh(this.geometry, this.material);
           
        this.mesh.rotation.y = Math.PI * 0.5 - ((Math.PI * 2) /  this.maxIndex) *  this.index;
        this.mesh.scale.x = this. settings.radius * this. settings.space;
        this.mesh.scale.y = this. settings.radius *  this. settings.space;
        this.mesh.position.x = this. settings.radius * Math.cos(((360 /  this.maxIndex) *  this.index * Math.PI) / 180);
        this.mesh.position.z = this. settings.radius * Math.sin(((360 /  this.maxIndex) *  this.index * Math.PI) / 180);
        this.mesh.material.uniforms.uPicture.value = this.image;


    }

    remove(){

            this.geometry.dispose()
            this.material.dispose()
            this.mesh.clear()

    }
    
}