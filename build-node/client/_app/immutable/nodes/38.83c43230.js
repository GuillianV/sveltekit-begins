import{S as F,i as A,s as B,k as p,a as I,l as v,m as _,h as g,c as V,n as u,M as O,b as G,G as w,H as C,o as Q}from"../chunks/index.137f5445.js";import{aj as j,I as Y,aZ as L,b as W,aK as b,a_ as X,_ as d,a$ as T,C as E,U as q,S as H,e as K,T as N,N as y,D as $,P as Z,W as J,aY as ee}from"../chunks/three.module.c2ac7129.js";import{G as te}from"../chunks/GLTFLoader.e74a6222.js";import{G as se}from"../chunks/lil-gui.esm.5b862306.js";const ie={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class R{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ae=new j(-1,1,1,-1,0,1),P=new Y;P.setAttribute("position",new L([-1,3,0,-1,-1,0,3,-1,0],3));P.setAttribute("uv",new L([0,2,0,0,2,0],2));class re{constructor(e){this._mesh=new W(P,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ae)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class D extends R{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof b?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=X.clone(e.uniforms),this.material=new b({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new re(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class M extends R{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const a=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),i.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(a.EQUAL,1,4294967295),i.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),i.buffers.stencil.setLocked(!0)}}class oe extends R{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ne{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new d);this._width=r.width,this._height=r.height,t=new T(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new D(ie),this.clock=new E}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let a=0,i=this.passes.length;a<i;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}M!==void 0&&(s instanceof M?r=!0:s instanceof oe&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new d);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class le extends R{constructor(e,t,r,a,i){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=i!==void 0?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new q}render(e,t,r){const a=e.autoClear;e.autoClear=!1;let i,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,i),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=a}}var he=`uniform float uTime;

varying vec2 vUv;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position,1.0);\r
    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;\r
    vUv = uv;\r
}`,ce=`uniform sampler2D tDiffuse;\r
uniform vec2 uMouses;\r
uniform float uTime;

uniform vec2 uResolution;\r
uniform vec2 uImageResolution;\r
uniform bool uMouseOut;

varying vec2 vUv;\r
float mouseFadeValue = 1.0;

void main() {

    
    mouseFadeValue = clamp(mouseFadeValue,0.0,1.0);

    vec2 localRatio = vec2(min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0), min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0));

    vec2 localUv = vec2(vUv.x * localRatio.x + (1.0 - localRatio.x) * 0.5, vUv.y * localRatio.y + (1.0 - localRatio.y) * 0.5);

    float mouseX = uMouses.x;\r
    float mouseY = 1.0 - uMouses.y;

    float differenceX = vUv.x - mouseX  ;\r
    float differenceY =  vUv.y - mouseY ;\r
    float magnitude = sqrt(pow(differenceX ,2.0)+pow(differenceY,2.0));\r
    vec2 displacementUv = vec2(\r
        localUv.x + differenceX *  1.0 /  exp(2.0 +magnitude*7.0) * mouseFadeValue  ,   
        localUv.y + differenceY *   1.0 /   exp(2.0 +magnitude*7.0) * mouseFadeValue  
        );

    vec4 color = texture2D(tDiffuse, displacementUv);\r
    gl_FragColor = vec4(color);

    
    
    
}`;function fe(c){let e,t,r,a,i,s,o;return{c(){e=p("div"),t=p("div"),r=p("div"),a=p("canvas"),i=I(),s=p("img"),this.h()},l(l){e=v(l,"DIV",{});var n=_(e);t=v(n,"DIV",{class:!0});var x=_(t);r=v(x,"DIV",{class:!0});var h=_(r);a=v(h,"CANVAS",{class:!0}),_(a).forEach(g),i=V(h),s=v(h,"IMG",{src:!0,alt:!0,class:!0}),h.forEach(g),x.forEach(g),n.forEach(g),this.h()},h(){u(a,"class","webgl svelte-16wdch4"),O(s.src,o="/images/back.png")||u(s,"src",o),u(s,"alt",""),u(s,"class","svelte-16wdch4"),u(r,"class","container svelte-16wdch4"),u(t,"class","app svelte-16wdch4")},m(l,n){G(l,e,n),w(e,t),w(t,r),w(r,a),w(r,i),w(r,s)},p:C,i:C,o:C,d(l){l&&g(e)}}}function ue(c){return Q(()=>{new se;const e=document.querySelector("canvas.webgl"),t=new H;new te,new K;const a=new N().load("/images/lac.jpg");a.generateMipmaps=!1,a.minFilter=y,a.magFilter=y,t.background=a;const i=new $("#ffffff",3);i.castShadow=!0,i.shadow.mapSize.set(1024,1024),i.shadow.camera.far=15,i.shadow.normalBias=.05,i.position.set(.25,3,-2.25);const s={width:e.clientWidth,height:e.clientHeight},o={x:0,y:0};window.addEventListener("resize",()=>{s.width=e.clientWidth,s.height=e.clientHeight,l.aspect=s.width/s.height,l.updateProjectionMatrix(),n.setSize(s.width,s.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setPixelRatio(n.getPixelRatio()),h.setSize(s.width,s.height)}),e.addEventListener("mousemove",f=>{o.x=f.offsetX/s.width,o.y=f.offsetY/s.height}),e.addEventListener("mouseenter",f=>{m.material.uniforms.uMouseOut.value=!1}),e.addEventListener("mouseleave",f=>{m.material.uniforms.uMouseOut.value=!0});const l=new Z(75,s.width/s.height,.1,100);l.position.set(4,1,-4),t.add(l);const n=new J({canvas:e,antialias:!0,alpha:!0});n.shadowMap.enabled=!0,n.shadowMap.type=ee,n.useLegacyLights=!1,n.toneMappingExposure=1.5,n.setSize(s.width,s.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2));const x=new T(s.width,s.height,{sampples:2}),h=new ne(n,x);h.setPixelRatio(n.getPixelRatio()),h.setSize(s.width,s.height);const U=new le(t,l);h.addPass(U);const k={uniforms:{tDiffuse:{value:null},uMouses:{type:"vec2",value:new d(o.x,o.y)},uTime:{type:"float",value:0},uResolution:{type:"vec2",value:new d(s.width,s.height)},uImageResolution:{type:"vec2",value:new d(5600,3200)},uMouseOut:{type:"bool",value:!0}},vertexShader:he,fragmentShader:ce,transparent:!0},m=new D(k);h.addPass(m);const z=new E,S=()=>{const f=z.getElapsedTime();m.material.uniforms.uMouses.value=new d(o.x,o.y),m.material.uniforms.uTime.value=f,h.render(),window.requestAnimationFrame(S)};S()}),[]}class ge extends F{constructor(e){super(),A(this,e,ue,fe,B,{})}}export{ge as component};
