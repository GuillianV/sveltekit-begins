import{S,i as j,s as I,k as f,l as w,m as b,h as m,n as _,b as T,G as k,H as y,o as W}from"../chunks/index.137f5445.js";import{b as P,aJ as G,aK as B,g as F,S as q,j as L,f as R,e as z,aL as D,r as A,M as V,U as H,aM as U,aN as N,aO as K,P as O,W as Y,C as $}from"../chunks/three.module.c2ac7129.js";import{O as J}from"../chunks/OrbitControls.e9bb9833.js";import{G as Q}from"../chunks/GLTFLoader.e74a6222.js";import{R as X}from"../chunks/RGBELoader.8cff8fe7.js";import{G as Z}from"../chunks/lil-gui.esm.5b862306.js";class ee extends P{constructor(e,o={}){const t=[e.isCubeTexture?"#define ENVMAP_TYPE_CUBE":""],n=`
			varying vec3 vWorldPosition;

			void main() {

				vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
				vWorldPosition = worldPosition.xyz;

				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			}
			`,d=t.join(`
`)+`

				varying vec3 vWorldPosition;

				uniform float radius;
				uniform float height;
				uniform float angle;

				#ifdef ENVMAP_TYPE_CUBE

					uniform samplerCube map;

				#else

					uniform sampler2D map;

				#endif

				// From: https://www.shadertoy.com/view/4tsBD7
				float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
				{

					float d = dot ( rd, n );

					if( d > 0.0 ) { return 1e6; }

					vec3 o = ro - c;
					float t = - dot( n, o ) / d;
					vec3 q = o + rd * t;

					return ( dot( q, q ) < r * r ) ? t : 1e6;

				}

				// From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
				float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) {

					vec3 oc = ro - ce;
					float b = dot( oc, rd );
					float c = dot( oc, oc ) - ra * ra;
					float h = b * b - c;

					if( h < 0.0 ) { return -1.0; }

					h = sqrt( h );

					return - b + h;

				}

				vec3 project() {

					vec3 p = normalize( vWorldPosition );
					vec3 camPos = cameraPosition;
					camPos.y -= height;

					float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
					if( intersection > 0.0 ) {

						vec3 h = vec3( 0.0, - height, 0.0 );
						float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
						p = ( camPos + min( intersection, intersection2 ) * p ) / radius;

					} else {

						p = vec3( 0.0, 1.0, 0.0 );

					}

					return p;

				}

				#include <common>

				void main() {

					vec3 projectedWorldPosition = project();

					#ifdef ENVMAP_TYPE_CUBE

						vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;

					#else

						vec3 direction = normalize( projectedWorldPosition );
						vec2 uv = equirectUv( direction );
						vec3 outcolor = texture2D( map, uv ).rgb;

					#endif

					gl_FragColor = vec4( outcolor, 1.0 );

					#include <tonemapping_fragment>
					#include <encodings_fragment>

				}
				`,p={map:{value:e},height:{value:o.height||15},radius:{value:o.radius||100}},h=new G(1,16),c=new B({uniforms:p,fragmentShader:d,vertexShader:n,side:F});super(h,c)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}function te(v){let e,o,r;return{c(){e=f("div"),o=f("div"),r=f("canvas"),this.h()},l(t){e=w(t,"DIV",{});var n=b(e);o=w(n,"DIV",{class:!0});var d=b(o);r=w(d,"CANVAS",{class:!0}),b(r).forEach(m),d.forEach(m),n.forEach(m),this.h()},h(){_(r,"class","webgl svelte-1xjiexi"),_(o,"class","app svelte-1xjiexi")},m(t,n){T(t,e,n),k(e,o),k(o,r)},p:y,i:y,o:y,d(t){t&&m(e)}}}function oe(v){return W(()=>{const e=new Z,o={envMapIntensity:3,backgroundBlurriness:0,backgroundIntensity:5};e.add(o,"envMapIntensity",0,10,.01).onChange(a=>{h(a)});const r=document.querySelector("canvas.webgl"),t=new q,n=new P(new L(1,.4,100,16),new R({color:16119285,metalness:1,roughness:.3}));n.position.y=4,n.position.x=-4,t.add(n);const d=new Q;new z;const p=new X;d.load("/three/journey/25/models/FlightHelmet/glTF/FlightHelmet.gltf",a=>{a.scene.scale.set(10,10,10),t.add(a.scene),h()});const h=(a=1)=>{t.traverse(s=>{s.isMesh&&s.material.isMeshStandardMaterial&&(s.material.envMapIntensity=a)})};t.backgroundBlurriness=o.backgroundBlurriness,t.backgroundIntensity=o.backgroundIntensity,p.load("/three/journey/25/environmentMaps/0/2k.hdr",a=>{a.mapping=D;const s=new ee(a);s.scale.setScalar(50),t.add(s),e.add(s,"radius",1,200,.1),e.add(s,"height",1,200,.1)});const c=new P(new A(8,.5),new V({color:new H(10,4,3)}));c.layers.enable(1),c.position.y=3.5,t.add(c);const M=new U(256,{type:N});t.environment=M.texture;const x=new K(.1,100,M);x.layers.set(1);const i={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{i.width=window.innerWidth,i.height=window.innerHeight,l.aspect=i.width/i.height,l.updateProjectionMatrix(),u.setSize(i.width,i.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2))});const l=new O(75,i.width/i.height,.1,100);l.position.set(4,5,4),t.add(l);const g=new J(l,r);g.target.y=3.5,g.enableDamping=!0;const u=new Y({canvas:r});u.setSize(i.width,i.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2));const E=new $,C=()=>{const a=E.getElapsedTime();c&&(c.rotation.x=Math.sin(a)*2,x.update(u,t)),g.update(),u.render(t,l),window.requestAnimationFrame(C)};C()}),[]}class de extends S{constructor(e){super(),j(this,e,oe,te,I,{})}}export{de as component};
