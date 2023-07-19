// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';



// export class SplineScene {

// 	constructor(properties){

// 		this.width = 100;
// 		this.height = 100;


// 		if(typeof properties === 'object'){
// 			this.width = properties.width ?? this.width;
// 			this.height = properties.height ?? this.height;
// 		}
	

// 		if (typeof window == 'undefined')
// 			return;
		

// 		self = this;
//         const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
//         camera.position.set(202.13, -29.5, 978.91);
//         camera.quaternion.setFromEuler(new THREE.Euler(0.03, 0.2, -0.01));
        
//         // scene
//         const scene = new THREE.Scene();
        
//         // spline scene
//         const loader = new SplineLoader();
//         loader.load(
//           'https://prod.spline.design/6JqM5YunTZGiztNg/scene.splinecode',
//           (splineScene) => {
//             scene.add(splineScene);
//           }
//         );
        
//         // renderer
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setAnimationLoop(this.animate);
//         document.body.appendChild(renderer.domElement);
        
//         // scene settings
//         renderer.shadowMap.enabled = true;
//         renderer.shadowMap.type = THREE.PCFShadowMap;
        
//         scene.background = new THREE.Color('#2d2e32');
//         renderer.setClearAlpha(1);
        
//         // orbit controls
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.125;
        
//         window.addEventListener('resize', this.onWindowResize);

// 	}


//     onWindowResize() {
//       camera.left = window.innerWidth / - 2;
//       camera.right = window.innerWidth / 2;
//       camera.top = window.innerHeight / 2;
//       camera.bottom = window.innerHeight / - 2;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
    
//     animate(time) {
//       controls.update();
//       renderer.render(scene, camera);
//     }
    

// }
