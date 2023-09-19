import{S as ue,i as me,s as de,k as v,a as W,q as B,l as p,m as b,h as w,c as C,r as G,n as g,M as ve,b as pe,G as l,L as ge,H as X,o as fe,w as Z}from"../chunks/index.137f5445.js";import{g as $}from"../chunks/index.7127c1b0.js";import{c as xe,g as ye,S as we}from"../chunks/ScrollTrigger.d950decd.js";import{X as ne,P as be,W as Se,L as ze,aX as Pe,v as ke,H as Ee,D as Me,t as Le,A as Ie,N as se,h as ae,aK as re,_ as oe,U as ie,b as J,i as _e,M as We,T as Ce,e as je,Z as qe,S as Te}from"../chunks/three.module.c2ac7129.js";import{O as Re}from"../chunks/OrbitControls.e9bb9833.js";import{G as Fe}from"../chunks/GLTFLoader.e74a6222.js";import{G as Ae}from"../chunks/lil-gui.esm.5b862306.js";new ne(0,0,1);class N{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(n=>{const s=this.resolveName(n);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(i=>{const n=this.resolveName(i);if(n.namespace!=="base"&&n.value==="")delete this.callbacks[n.namespace];else if(n.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][n.value]instanceof Array&&(delete this.callbacks[s][n.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[n.namespace]instanceof Object&&this.callbacks[n.namespace][n.value]instanceof Array&&(delete this.callbacks[n.namespace][n.value],Object.keys(this.callbacks[n.namespace]).length===0&&delete this.callbacks[n.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const n=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const c in this.callbacks)this.callbacks[c]instanceof Object&&this.callbacks[c][s.value]instanceof Array&&this.callbacks[c][s.value].forEach(function(d){d.apply(this,n)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(c){c.apply(this,n)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class De extends N{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspectRatio=window.innerWidth/window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspectRatio=window.innerWidth/window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class Be{constructor(e="",t={seconds:1,once:!0,tickInterval:1}){const{seconds:i,once:n,tickInterval:s}=t;return this.experience=new P,this.time=this.experience.time,this.start=this.time.current,this.startSecond=this.time.current,this.seconds=i,this.once=n,this.tickInterval=s,this.eventName=e,this}tick(){if(this.time.current-this.start>=this.seconds*1e3)if(this.time.trigger(this.eventName),this.once){this.time.removeStopwatch(this.eventName);return}else this.start=this.time.current;this.tickInterval!=null&&this.time.current-this.startSecond>=this.tickInterval&&(this.time.trigger(`${this.eventName}-tick`),this.startSecond=this.time.current)}}class Ge extends N{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.test=0,this.stopwatchs=[],window.requestAnimationFrame(()=>{this.tick()})}setStopwatch(e){return e instanceof Be&&this.stopwatchs.push(e),this}removeStopwatch(e){const t=this.stopwatchs.indexOf(this.stopwatchs.find(i=>i.eventName===e));this.stopwatchs.splice(t,1)}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick");let t=0;for(;t<this.stopwatchs.length;)this.stopwatchs[t].tick(),t++;window.requestAnimationFrame(()=>{this.tick()})}}class Ne{constructor(){this.experience=new P,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setControls()}setInstance(){this.instance=new be(35,this.sizes.aspectRatio,.1,100),this.instance.position.set(20,20,20),this.scene.add(this.instance)}setControls(){this.controls=new Re(this.instance,this.canvas),this.controls.target.set(0,1,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxDistance=50,this.controls.minDistance=15,this.controls.rotateSpeed=.5,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2.1,this.controls.panSpeed=.1,this.controls.enablePan=!1,this.controls.maxPolarAngle=Math.PI/3*2,this.controls.minPolarAngle=Math.PI/3,this.controls.enableZoom=!1}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}tick(){this.controls.update()}lookAt(e={x:0,y:0,z:0}){const{x:t,y:i,z:n}=e;$.to(this.instance.position,{x:t,y:i,z:n,duration:2,ease:"linear"}),this.controls.autoRotate=!1}}class Oe{constructor(){this.experience=new P,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new Se({canvas:this.canvas,alpha:!0,antialias:!0}),this.instance.outputColorSpace=ze,this.instance.useLegacyLights=!0,this.instance.toneMapping=Pe,this.instance.toneMappingExposure=1,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=ke,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}tick(){this.instance.render(this.scene,this.camera.instance)}}class He{constructor(){this.experience=new P,this.scene=this.experience.scene,this.resources=this.experience.resources,this.gui=this.experience.debug.gui,this.setEnvironementLight(),this.setAmbiant(),this.setSun()}setAmbiant(){this.ambiantLight=new Ee("#EECCFF","#5566AA",.7),this.scene.add(this.ambiantLight)}setSun(){this.sunLight=new Me("#ffffff",1.5),this.sunLight.position.set(-10,10,-20),this.scene.add(this.sunLight)}setSpotLight(){this.spotLight=new Le(16777215,3.7,35,Math.PI*.18,Math.PI*.1,0),this.spotLight.position.set(0,30,0),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.set(256,256),this.spotLight.shadow.camera.left=-12,this.spotLight.shadow.camera.top=12,this.spotLight.shadow.camera.right=12,this.spotLight.shadow.camera.bottom=-12,this.spotLight.shadow.camera.far=32,this.spotLight.shadow.camera.near=28,this.gui.add(this.spotLight.shadow,"bias",0,1,.001),this.gui.add(this.spotLight.shadow,"normalBias",0,1,.001),this.spotLight.shadow.bias=.005,this.spotLight.shadow.normalBias=.1,this.scene.add(this.spotLight)}setEnvironementLight(){this.ambientLight=new Ie(16777215,.6),this.scene.add(this.ambientLight)}setEnvironementMap(){this.envMap=this.resources.items.environment,this.envMap.generateMipmaps=!1,this.envMap.minFilter=se,this.envMap.magFilter=se,this.scene.background=this.envMap,this.scene.environment=this.envMap}}var Ve=`uniform float uTime;\r
uniform float uBigWavesElevation;\r
uniform vec2 uBigWavesFrequency;\r
uniform float uBigWavesSpeed;\r
uniform float uSmallWavesElevation;\r
uniform float uSmallWavesFrequency;\r
uniform float uSmallWavesSpeed;\r
uniform float uSmallIterations;\r
uniform sampler2D uTexture;

varying vec2 vUv;\r
varying float vElevation;\r
varying float vSeaElevation;

vec4 permute(vec4 x)\r
{\r
    return mod(((x*34.0)+1.0)*x, 289.0);\r
}\r
vec4 taylorInvSqrt(vec4 r)\r
{\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
vec3 fade(vec3 t)\r
{\r
    return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

float cnoise(vec3 P)\r
{\r
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);\r
    Pi1 = mod(Pi1, 289.0);\r
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
    vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
    vec4 iz0 = Pi0.zzzz;\r
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);\r
    vec4 ixy0 = permute(ixy + iz0);\r
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;\r
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\r
    gx0 = fract(gx0);\r
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
    vec4 sz0 = step(gz0, vec4(0.0));\r
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;\r
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\r
    gx1 = fract(gx1);\r
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
    vec4 sz1 = step(gz1, vec4(0.0));\r
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
    g000 *= norm0.x;\r
    g010 *= norm0.y;\r
    g100 *= norm0.z;\r
    g110 *= norm0.w;\r
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
    g001 *= norm1.x;\r
    g011 *= norm1.y;\r
    g101 *= norm1.z;\r
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);\r
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);\r
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
    return 2.2 * n_xyz;\r
}

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position,1.0);\r
    float elevation =   sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWavesSpeed) * \r
                        sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWavesSpeed) * \r
                        uBigWavesElevation;

    for(float i = 1.0; i <= uSmallIterations; i++)\r
    {\r
        elevation -= abs(cnoise(vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)) * uSmallWavesElevation / i);\r
    }

    vec4 textureColor = texture2D(uTexture,uv);\r
    float seaElevation =  step(1.0 , (step(0.94,  1.0-textureColor.r) + step(0.94,  1.0-textureColor.g) +  step(0.94,  1.0-textureColor.b)  / 3.0 ));\r

    modelPosition.y += elevation *   seaElevation * 0.5;\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r

    gl_Position = projectedPosition;

    
    vElevation = elevation;\r
    vSeaElevation = seaElevation;\r
    vUv = uv;\r
}`,Ue=`uniform vec3 uDepthColor;\r
uniform vec3 uSurfaceColor;\r
uniform sampler2D uTexture;

varying float vElevation;\r
varying float vSeaElevation;\r
varying vec2 vUv;

void main() {\r

    vec4 textureColor = texture2D(uTexture,vUv);\r
    vec3 seaColor = mix(uSurfaceColor,uDepthColor,vElevation * -vSeaElevation * 5.0 + 0.5);\r

    
   
   
    
    
    gl_FragColor = vec4( vSeaElevation == 0.0 ? textureColor.rgb : seaColor ,1.0);\r
}`;class Xe{constructor(e={x:0,y:0,z:0}){this.experience=new P,this.time=this.experience.time,this.debug=this.experience.debug,this.scene=this.experience.scene,this.texture=this.experience.resources.items.earthTexture,this.startPosition=e,this.setGeometry(),this.setMaterial(),this.setMesh()}setGeometry(){this.geometry=new ae(5,1e3,1e3)}setMaterial(){this.material=new re({vertexShader:Ve,fragmentShader:Ue,uniforms:{uTime:{type:"float",value:0},uBigWavesElevation:{type:"float",value:.15},uBigWavesFrequency:{type:"vec2",value:new oe(1.2,.5)},uBigWavesSpeed:{type:"float",value:.42},uDepthColor:{type:"vec3",value:new ie("#0000CF")},uSurfaceColor:{type:"vec3",value:new ie("#887aff")},uSmallWavesElevation:{value:.072},uSmallWavesFrequency:{value:.7},uSmallWavesSpeed:{value:.216},uSmallIterations:{value:3},uTexture:{type:"sampler2D",value:this.texture}}});const e=this.debug.gui.addFolder("Sea");e.add(this.material.uniforms.uBigWavesElevation,"value",0,2,.01).name("Big Wave elevation"),e.add(this.material.uniforms.uBigWavesFrequency.value,"x",0,10,.1).name("Big Wave frequency X"),e.add(this.material.uniforms.uBigWavesFrequency.value,"y",0,10,.1).name("Big Wave frequency Z"),e.add(this.material.uniforms.uBigWavesSpeed,"value",0,3,.01).name("Big Wave speed"),e.add(this.material.uniforms.uSmallWavesElevation,"value").min(0).max(1).step(.001).name("uSmallWavesElevation"),e.add(this.material.uniforms.uSmallWavesFrequency,"value").min(0).max(30).step(.001).name("uSmallWavesFrequency"),e.add(this.material.uniforms.uSmallWavesSpeed,"value").min(0).max(4).step(.001).name("uSmallWavesSpeed"),e.add(this.material.uniforms.uSmallIterations,"value").min(0).max(5).step(1).name("uSmallIterations")}setMesh(){this.mesh=new J(this.geometry,this.material),this.scene.add(this.mesh)}tick(){this.material.uniforms.uTime.value=this.time.elapsed/1e3}}var Ze=`uniform float uTime;\r
varying vec2 vUv;

void main() {\r

    vec4 modelPosition = modelMatrix * vec4(position,1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r

    gl_Position = projectedPosition;\r
    vUv = uv;\r
}`,Ke=`varying vec2 vUv;

void main() {\r

       
    float strength = 0.1 /  distance(vUv, vec2(0.5))-0.1;\r
    strength = strength > 0.1 ? strength : 0.0;\r
    gl_FragColor = vec4(strength,strength,strength,strength);\r
}`;let $e=class{constructor(e={x:0,y:0,z:0}){this.experience=new P,this.time=this.experience.time,this.debug=this.experience.debug,this.scene=this.experience.scene,this.texture=this.experience.resources.items.star,this.camera=this.experience.camera,this.startPosition=e,this.setGeometry(),this.setMaterial(),this.setMesh()}setGeometry(){this.geometry=new _e(20,20,50,50)}setMaterial(){this.material=new re({vertexShader:Ze,fragmentShader:Ke,transparent:!0,uniforms:{uTime:{type:"float",value:0}}})}setMesh(){this.mesh=new J(this.geometry,this.material),this.mesh.receiveShadow=!0,this.scene.add(this.mesh)}tick(){this.material.uniforms.uTime.value=this.time.elapsed/1e3,this.mesh.lookAt(this.camera.instance.position)}};class Je{constructor(e={x:0,y:0,z:0}){this.experience=new P,this.time=this.experience.time,this.debug=this.experience.debug,this.scene=this.experience.scene,this.texture=this.experience.resources.items.clouds,this.camera=this.experience.camera,this.startPosition=e,this.setGeometry(),this.setMaterial(),this.setMesh()}setGeometry(){this.geometry=new ae(5.2)}setMaterial(){this.material=new We({transparent:!0,map:this.texture,alphaMap:this.texture})}setMesh(){this.mesh=new J(this.geometry,this.material),this.scene.add(this.mesh)}tick(){this.mesh.rotation.x=Math.PI/2*this.time.elapsed/1e3*.01,this.mesh.rotation.y=Math.PI/2*this.time.elapsed/1e3*.01}}class Ye{static CoordinatesToWorldPoint(e=1,t=0,i=0){const n=-i*Math.PI/180,s=t*Math.PI/180;return{x:e*Math.cos(n)*Math.cos(s),y:e*Math.cos(n)*Math.sin(s),z:e*Math.sin(n)}}}class Qe{constructor(){this.experience=new P,this.time=this.experience.time,this.debug=this.experience.debug,this.scene=this.experience.scene,this.camera=this.experience.camera,this.intersect=this.experience.intersect,this.mesh=this.experience.resources.items.pin.scene.children[2],this.setGltf()}setGltf(){const{x:e,y:t,z:i}=Ye.CoordinatesToWorldPoint(5.6,45.91965,6.151866);this.mesh.geometry.center(),this.mesh.position.set(e,t,i),this.mesh.scale.set(100,100,100),this.mesh.lookAt(new ne(0,0,0)),this.intersect.setObject({object:this.mesh,name:"pin",mouseClick:!0,mouseEnter:!0,mouseLeave:!0}),this.intersect.on("pin-enter",n=>{document.body.style.cursor="pointer"}),this.intersect.on("pin-leave",n=>{document.body.style.cursor="inherit"}),this.intersect.on("pin-click",n=>{this.camera.lookAt({x:e,y:t,z:i}),setTimeout(s=>{document.querySelector(".popup").classList.remove("hide")},2e3)}),this.scene.add(this.mesh)}tick(){}}class et{constructor(){this.experience=new P,this.scene=this.experience.scene,this.time=this.experience.time,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.environment=new He,this.planet=new Xe({x:0,y:0,z:0}),this.halo=new $e,this.clouds=new Je,this.pin=new Qe})}tick(){this.planet&&this.planet.tick(),this.halo&&this.halo.tick(),this.clouds&&this.clouds.tick()}}class tt extends N{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new Fe,this.loaders.textureLoader=new Ce,this.loaders.cubeTextureLoader=new je}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>[this.sourceLoaded(e,t)]):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>[this.sourceLoaded(e,t)]):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>[this.sourceLoaded(e,t)])}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}const st=[{name:"earthTexture",type:"texture",path:"/images/earthTexture.jpg"},{name:"star",type:"texture",path:"/images/star.png"},{name:"clouds",type:"texture",path:"/images/clouds.jpg"},{name:"environment",type:"cubeTexture",path:["/images/right.png","/images/left.png","/images/top.png","/images/bottom.png","/images/front.png","/images/back.png"]},{name:"pin",type:"gltfModel",path:"/models/map/pin.gltf"}];var ce={exports:{}};(function(o,e){(function(t,i){o.exports=i()})(xe,function(){var t=function(){function i(u){return c.appendChild(u.dom),u}function n(u){for(var m=0;m<c.children.length;m++)c.children[m].style.display=m===u?"block":"none";s=u}var s=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",c.addEventListener("click",function(u){u.preventDefault(),n(++s%c.children.length)},!1);var d=(performance||Date).now(),f=d,a=0,h=i(new t.Panel("FPS","#0ff","#002")),x=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var S=i(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:c,addPanel:i,showPanel:n,begin:function(){d=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(x.update(u-d,200),u>f+1e3&&(h.update(1e3*a/(u-f),100),f=u,a=0,S)){var m=performance.memory;S.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return u},update:function(){d=this.end()},domElement:c,setMode:n}};return t.Panel=function(i,n,s){var c=1/0,d=0,f=Math.round,a=f(window.devicePixelRatio||1),h=80*a,x=48*a,S=3*a,u=2*a,m=3*a,z=15*a,y=74*a,k=30*a,E=document.createElement("canvas");E.width=h,E.height=x,E.style.cssText="width:80px;height:48px";var r=E.getContext("2d");return r.font="bold "+9*a+"px Helvetica,Arial,sans-serif",r.textBaseline="top",r.fillStyle=s,r.fillRect(0,0,h,x),r.fillStyle=n,r.fillText(i,S,u),r.fillRect(m,z,y,k),r.fillStyle=s,r.globalAlpha=.9,r.fillRect(m,z,y,k),{dom:E,update:function(M,j){c=Math.min(c,M),d=Math.max(d,M),r.fillStyle=s,r.globalAlpha=1,r.fillRect(0,0,h,z),r.fillStyle=n,r.fillText(f(M)+" "+i+" ("+f(c)+"-"+f(d)+")",S,u),r.drawImage(E,m+a,z,y-a,k,m,z,y-a,k),r.fillRect(m+y-a,z,a,k),r.fillStyle=s,r.globalAlpha=.9,r.fillRect(m+y-a,z,a,f((1-M/j)*k))}}},t})})(ce);var it=ce.exports;const nt=ye(it);class at{constructor(e=!0){this.setGUI(),this.setFPS(),this.setHidden(e)}setGUI(){this.gui=new Ae}setFPS(){this.stats=new nt,this.stats.showPanel(0)}setHidden(e){e?document.body.appendChild(this.stats.dom):this.gui.hide()}tickStart(){this.stats.begin()}tickEnd(){this.stats.end()}}class rt extends N{constructor(){super(),this.experience=new P,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.instance=new qe,this.mouse=new oe,this.objects={},this.currentIntersect=null,window.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/this.sizes.width*2-1,this.mouse.y=-(e.clientY/this.sizes.height)*2+1}),window.addEventListener("click",e=>{this.currentIntersect!==null&&this.trigger(`${this.currentIntersect.name}-click`,[this.currentIntersect])})}setObject(e={object:null,name:null,mouseEnter:!1,mouseLeave:!1,mouseClick:!1}){const{object:t,name:i,mouseEnter:n=!1,mouseLeave:s=!1,mouseClick:c=!1}=e;typeof i=="string"&&t.isObject3D&&(n!=!1||s!=!1||c!=!1)?this.objects[i]=e:console.error("Intersect set object Error ",i??"null")}removeObject(e=null){typeof e=="string"&&delete this.objects[e]}removeAllObjects(){this.objects={}}tick(){this.instance.setFromCamera(this.mouse,this.camera.instance);for(const e in this.objects){const t=this.objects[e];this.instance.intersectObject(t.object).length>0?(!this.currentIntersect&&t.mouseLeave==!0&&this.trigger(`${t.name}-enter`,t),this.currentIntersect=t):(this.currentIntersect&&this.trigger(`${t.name}-leave`,t),this.currentIntersect=null)}}}let K=null;class P{constructor(e){if(K!==null)return K;K=this,this.canvas=e,this.debug=new at(!1),this.sizes=new De,this.time=new Ge,this.scene=new Te,this.resources=new tt(st),this.camera=new Ne,this.renderer=new Oe,this.intersect=new rt,this.world=new et,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.tick()}),this.resources.on("ready",()=>{console.log("Sources ready")})}resize(){this.camera.resize(),this.renderer.resize()}tick(){this.debug.tickStart(),this.camera.tick(),this.renderer.tick(),this.intersect.tick(),this.world.tick(),this.debug.tickEnd()}}function ot(o){let e,t,i,n,s,c,d,f,a,h,x,S,u,m,z,y,k,E,r,M,j,O,R,F,H,V,q,Y,U,Q;return{c(){e=v("div"),t=v("div"),i=v("div"),n=W(),s=v("div"),c=W(),d=v("canvas"),f=W(),a=v("div"),h=v("div"),x=v("div"),S=v("span"),u=W(),m=v("span"),z=W(),y=v("h1"),k=B("Ma maison !"),E=W(),r=v("div"),M=B("Voici ma maison ma belle maison."),j=v("br"),O=B(`\r
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`),R=v("br"),F=v("br"),H=B(`\r
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r
				optio, eaque rerum! Provident similique accusantium nemo autem.`),V=W(),q=v("img"),this.h()},l(T){e=p(T,"DIV",{});var A=b(e);t=p(A,"DIV",{class:!0});var L=b(t);i=p(L,"DIV",{class:!0});var le=b(i);le.forEach(w),n=C(L),s=p(L,"DIV",{class:!0});var he=b(s);he.forEach(w),c=C(L),d=p(L,"CANVAS",{class:!0}),b(d).forEach(w),f=C(L),a=p(L,"DIV",{class:!0});var I=b(a);h=p(I,"DIV",{class:!0});var ee=b(h);x=p(ee,"DIV",{class:!0});var D=b(x);S=p(D,"SPAN",{class:!0}),b(S).forEach(w),u=C(D),m=p(D,"SPAN",{class:!0}),b(m).forEach(w),D.forEach(w),ee.forEach(w),z=C(I),y=p(I,"H1",{class:!0});var te=b(y);k=G(te,"Ma maison !"),te.forEach(w),E=C(I),r=p(I,"DIV",{class:!0});var _=b(r);M=G(_,"Voici ma maison ma belle maison."),j=p(_,"BR",{class:!0}),O=G(_,`\r
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r
				molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`),R=p(_,"BR",{class:!0}),F=p(_,"BR",{class:!0}),H=G(_,`\r
				numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r
				optio, eaque rerum! Provident similique accusantium nemo autem.`),_.forEach(w),V=C(I),q=p(I,"IMG",{src:!0,class:!0}),I.forEach(w),L.forEach(w),A.forEach(w),this.h()},h(){g(i,"class","top svelte-tlvewy"),g(s,"class","top2 svelte-tlvewy"),g(d,"class","webgl svelte-tlvewy"),g(S,"class","svelte-tlvewy"),g(m,"class","svelte-tlvewy"),g(x,"class","cross svelte-tlvewy"),g(h,"class","infos svelte-tlvewy"),g(y,"class","svelte-tlvewy"),g(j,"class","svelte-tlvewy"),g(R,"class","svelte-tlvewy"),g(F,"class","svelte-tlvewy"),g(r,"class","description svelte-tlvewy"),ve(q.src,Y="/images/maison.jpg")||g(q,"src",Y),g(q,"class","svelte-tlvewy"),g(a,"class","popup hide svelte-tlvewy"),g(t,"class","app svelte-tlvewy")},m(T,A){pe(T,e,A),l(e,t),l(t,i),o[4](i),l(t,n),l(t,s),o[5](s),l(t,c),l(t,d),l(t,f),l(t,a),l(a,h),l(h,x),l(x,S),l(x,u),l(x,m),l(a,z),l(a,y),l(y,k),l(a,E),l(a,r),l(r,M),l(r,j),l(r,O),l(r,R),l(r,F),l(r,H),l(a,V),l(a,q),o[6](a),U||(Q=ge(x,"click",o[3]),U=!0)},p:X,i:X,o:X,d(T){T&&w(e),o[4](null),o[5](null),o[6](null),U=!1,Q()}}}function ct(o,e,t){let i,n,s;fe(function(){window.experience=new P(document.querySelector("canvas.webgl")),window.experience.camera.instance,$.registerPlugin(we);let h=new $.timeline({scrollTrigger:{trigger:i,start:"center center",end:"+=5000",scrub:!0,pin:!0,markers:!0}});h.to(i,{yPercent:100}),h.to(n,{yPercent:100},"<0")});function c(){s.classList.add("hide"),window.experience.camera.controls.autoRotate=!0}function d(h){Z[h?"unshift":"push"](()=>{i=h,t(0,i)})}function f(h){Z[h?"unshift":"push"](()=>{n=h,t(1,n)})}function a(h){Z[h?"unshift":"push"](()=>{s=h,t(2,s)})}return[i,n,s,c,d,f,a]}class ft extends ue{constructor(e){super(),me(this,e,ct,ot,de,{})}}export{ft as component};
