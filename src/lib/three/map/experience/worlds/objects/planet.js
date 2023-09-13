import * as THREE from 'three'
import Experience from '../../index'
import VertexShader from '../../shaders/vertex.glsl';
import FragmentShader from '../../shaders/fragment.glsl';


export default class Planet
{
    constructor(position = {x:0,y:0,z:0})
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.texture = this.experience.resources.items.earthTexture
        this.startPosition = position

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
      
    }

    setGeometry(){
        this.geometry = new THREE.SphereGeometry(5,1000,1000)
    }

    setMaterial(){
        this.material = new THREE.ShaderMaterial({
            vertexShader: VertexShader,
            fragmentShader: FragmentShader,
            uniforms:{
				uTime: {type: 'float', value: 0},
				uBigWavesElevation: {type: 'float', value: 0.15},
				uBigWavesFrequency: {type: 'vec2', value: new THREE.Vector2(1.2,.5)},
				uBigWavesSpeed: {type: 'float', value: .42},
				uDepthColor: {type: 'vec3', value: new THREE.Color("#0000CF")},
				uSurfaceColor: {type: 'vec3', value: new THREE.Color("#887aff")},
				uSmallWavesElevation: { value: 0.072 },
				uSmallWavesFrequency: { value: 0.7 },
				uSmallWavesSpeed: { value: 0.216 },
				uSmallIterations: { value: 3 },
                uTexture: {type:'sampler2D', value: this.texture}
			}
        })


        const seaFolder =	this.debug.gui.addFolder("Sea");
		seaFolder.add(this.material.uniforms.uBigWavesElevation,"value",0,2,0.01).name("Big Wave elevation")
		seaFolder.add(this.material.uniforms.uBigWavesFrequency.value,"x",0,10,0.1).name("Big Wave frequency X")
		seaFolder.add(this.material.uniforms.uBigWavesFrequency.value,"y",0,10,0.1).name("Big Wave frequency Z")
		seaFolder.add(this.material.uniforms.uBigWavesSpeed,"value",0,3,0.01).name("Big Wave speed")
		seaFolder.add(this.material.uniforms.uSmallWavesElevation, 'value').min(0).max(1).step(0.001).name('uSmallWavesElevation')
		seaFolder.add(this.material.uniforms.uSmallWavesFrequency, 'value').min(0).max(30).step(0.001).name('uSmallWavesFrequency')
		seaFolder.add(this.material.uniforms.uSmallWavesSpeed, 'value').min(0).max(4).step(0.001).name('uSmallWavesSpeed')
		seaFolder.add(this.material.uniforms.uSmallIterations, 'value').min(0).max(5).step(1).name('uSmallIterations')
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
    }

}

