import * as THREE from 'three'
import gsap from 'gsap';
import Experience from '../../index.js'
import Slide from './slide.js'
export default class Caroussel {

    constructor(){


        this.experience = new Experience()
        this.resources = this.experience.resources
        this.canvas = this.experience.canvas
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.gui = this.experience.debug.gui.addFolder('Caroussel')
        this.slideIndex = 0;

		this.setInstance()
        this.setOptions()
        this.setCaroussel()
        this.setCamera()
    }

    setInstance(){
        this.instance = new THREE.Group()
        this.scene.add(this.instance)
    }

    setOptions() {

        this.carousselSettings = {
            radius: 10,
            space: 0.76,
            doubleSided : false,
            wireframe : false,
            twist:-0.065,
            nextSlide : ()=>{
				this.slideIndex++;
				this.slide(this.slideIndex)
			},
			prevSlide : () => {
				this.slideIndex--
				this.slide(this.slideIndex)
			},
        };


        this.gui.add(this.carousselSettings, 'radius', 1, 10, 0.1).onChange(() => this.setCaroussel());
        this.gui.add(this.carousselSettings, 'space',0, 5, 0.01).onChange(() => this.setCaroussel());
        this.gui.add(this.carousselSettings, 'doubleSided').onChange(() => this.setCaroussel());
        this.gui.add(this.carousselSettings, 'wireframe').onChange(() => this.setCaroussel());
        this.gui.add(this.carousselSettings, 'twist',-1, 2, 0.001).onChange(() => this.setCaroussel());
        this.gui.add(this.carousselSettings, 'nextSlide');
        this.gui.add(this.carousselSettings, 'prevSlide');

        this.images = [this.resources.items["img-1"],
        this.resources.items["img-3"],
        this.resources.items["img-2"],
        this.resources.items["img-3"],
        this.resources.items["img-4"],
        this.resources.items["img-3"],
        this.resources.items["img-5"],
        this.resources.items["img-3"],]


        this.slides = []

    }

    setCaroussel(){

        this.removeCaroussel()

      

        for (let i = 0; i < this.images.length; i++) {

            const slide = new Slide(this.images[i],this.carousselSettings,i,this.images.length)
            this.instance.add(slide.mesh)
            this.slides.push(slide)

        }


    }

    setCamera(){
                
        const cameraStartX = this.carousselSettings.radius *2 * Math.cos(((360 / this.images.length) *  Math.PI) / 180);
		const cameraStartZ = this.carousselSettings.radius *2 * Math.sin(((360 / this.images.length) * Math.PI) / 180);
        
		this.camera.instance.position.set(cameraStartX,0,cameraStartZ)

    }



    removeCaroussel(){

        
        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i]
            slide.remove()
            this.instance.remove(slide.mesh)
        }

    }

    slide(index){
        gsap.to(this.instance.rotation,{
            y: ( - ((Math.PI * 2) / this.images.length) * index)
        })
    }

}