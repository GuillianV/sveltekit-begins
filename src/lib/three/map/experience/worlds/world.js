import * as THREE from 'three'
import Experience from '../index'
import Environment from './environment.js'
import Planet from './objects/planet.js'
import Halo from './objects/halo'

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
             this.planet = new Planet({x:0,y:0,z:0})
             this.halo = new Halo()

        })
       

    }


    tick(){
        if(this.planet)
            this.planet.tick()

        if(this.halo)
            this.halo.tick()
    }
}