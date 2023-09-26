import * as THREE from 'three'
import Experience from '../index'
import Environment from './environment.js'
import Caroussel from './objects/caroussel.js'
export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.resources = this.experience.resources
      
       
        // Wait for resources
        this.resources.on('ready', () =>
        {
             // Setup
            this.environment = new Environment()
            this.caroussel = new Caroussel()

        })
       

    }


    tick(){
      
    }
}