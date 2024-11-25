import * as THREE from 'three';
import Experience from '../../index';

export default class Particle {
	constructor(position = { x: 0, y: 0, z: 0 }) {
		this.experience = new Experience();
		this.time = this.experience.time;
		this.size = this.experience.sizes;
		this.debug = this.experience.debug;
        this.intersect = this.experience.intersect;
		this.resources = this.experience.resources;
		this.scene = this.experience.scene;
		this.texture = this.experience.resources.items.star;
		this.camera = this.experience.camera;
		this.startPosition = position;
        this.particlesMesh = []
		this.setMesh();
        this.setIntersect()
	}

	setMesh() {
		const baseNumber = 40;
        const xBase = baseNumber
        const yBase = Math.floor(baseNumber / this.size.aspectRatio)
        
        

        const positions = new Float32Array(xBase * yBase * 3)

		for (let y = 0; y <= yBase; y++) {
			for (let x = 0; x <= xBase * 3; x +=3) {
                

                positions[(y * xBase * 3) + x] = x/3 - (xBase-1) / 2
                positions[(y * xBase * 3) +x +1] = y - (yBase -1)/ 2
                positions[(y * xBase * 3) +x +2] = 0
                
			}
		}

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            size: 0.15 * this.size.aspectRatio,
            color: 0xffffff,
            sizeAttenuation: true,
            alphaMap: this.resources.items.particle,
            transparent: true,
        });

        const mesh = new THREE.Points(geometry, material);
        this.particlesMesh.push(mesh)
        this.scene.add(mesh);
	}

    setIntersect(){
        
        // this.intersect.setObject({
        //     object : this.particlesMesh[0],
        //     name : "particles",
        //     mouseEnter : true,
        //     mouseLeave : true,
        //     mouseClick : true
        // })

        // this.intersect.on("particles-click",(data)=>{
        //     console.log("particles click")
        // })
        
    }

	tick() {

        this.particlesMesh.forEach((mesh)=>{
            // mesh.position.x += 0.01
            // mesh.position.y += 0.01
        })

    }
}
