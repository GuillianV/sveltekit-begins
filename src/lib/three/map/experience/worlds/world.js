import * as THREE from 'three'
import Experience from '../index'
import Environment from './environment.js'
import Planet from './objects/planet.js'
import Halo from './objects/halo'
import Clouds from './objects/clouds'
import Pin from './objects/pin'

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
             this.clouds = new Clouds()
             this.pin = new Pin({x:5,y:5,z:5})
        })
       

    }


    tick(){
        if(this.planet)
            this.planet.tick()

        if(this.halo)
            this.halo.tick()

        if(this.clouds)
            this.clouds.tick()
    }
}