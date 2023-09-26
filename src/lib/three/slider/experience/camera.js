import * as THREE from 'three';
import Experience from './index';
import gsap from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Camera {
	constructor() {
		this.experience = new Experience();
		this.sizes = this.experience.sizes;
		this.scene = this.experience.scene;
		this.canvas = this.experience.canvas;
		this.gui = this.experience.debug.gui.addFolder('Camera');
		this.setInstance();
		this.setOptions();
		this.setControls();
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(75, this.sizes.aspectRatio, 0.1, 100);
		this.instance.position.set(0, 0, -10);
		this.scene.add(this.instance);
	}

	setOptions() {
		this.controlsSettings = {
			freeMove: true,
			getSpeed: () => {
				console.log(this.controls);
			}
		};
		this.gui
			.add(this.controlsSettings, 'freeMove')
			.onChange((value) => (this.controls.enabled = value));
		this.gui.add(this.controlsSettings, 'getSpeed');
	}
	setControls() {
		this.controls = new OrbitControls(this.instance, this.canvas);
		this.controls.enableDamping = true;
		this.controls.enabled = this.controlsSettings.freeMove;
		this.controls.enablePan = false;
		this.controls.enableZoom = false;
		this.controls.maxPolarAngle = Math.PI / 2;
		this.controls.minPolarAngle = Math.PI / 2;

		// Stockez la dernière position de la souris
		let lastMouseX;
		let lastTimestamp;

		// Stockez la vitesse du drag
		this.dragSpeed = 0;

		// Récupérez le canvas de votre scène
		const canvas = this.canvas

		// Coefficient de décroissance de la vitesse du drag (plus le coefficient est bas, plus l'inertie sera prononcée)
		const dragDecayFactor = 0.95; // Vous pouvez ajuster ce coefficient selon vos préférences

		// Fonction pour calculer la vitesse du drag
		function calculateDragSpeed(event) {
			const currentMouseX = event.clientX;
			const currentTimestamp = performance.now();

			if (lastMouseX !== undefined && lastTimestamp !== undefined) {
				const deltaTime = (currentTimestamp - lastTimestamp) / 1000; // Convertissez en secondes
				const distanceX = currentMouseX - lastMouseX;
				this.dragSpeed = distanceX / deltaTime; // Vitesse en pixels par seconde
			}

			lastMouseX = currentMouseX;
			lastTimestamp = currentTimestamp;
		}

		// Fonction pour appliquer l'inertie au drag
		function applyInertia() {
			if (Math.abs(this.dragSpeed) > 0.1) {
				// Réduisez la vitesse du drag progressivement
				this.dragSpeed *= dragDecayFactor;
			} else {
				// Arrêtez la décroissance une fois que la vitesse est suffisamment faible
				this.dragSpeed = 0;
			}
		}

		// Écoutez les événements de souris sur le canvas
		canvas.addEventListener('mousedown', (event) => {
			// Réinitialisez la vitesse du drag
			this.dragSpeed = 0;
			// Ajoutez un écouteur pour calculer la vitesse pendant le drag
			canvas.addEventListener('mousemove', calculateDragSpeed);
		});

		// Lorsque le drag est relâché, retirez l'écouteur et commencez à appliquer l'inertie
		canvas.addEventListener('mouseup', () => {
			canvas.removeEventListener('mousemove', calculateDragSpeed);

			// Commencez à appliquer l'inertie
			requestAnimationFrame(applyInertia);
		});
	}

	resize() {
		this.instance.aspect = this.sizes.width / this.sizes.height;
		this.instance.updateProjectionMatrix();
	}

	tick() {
		this.controls.update();
        console.log(this.dragSpeed);
	}

	lookAt(position = { x: 0, y: 0, z: 0 }) {
		const { x, y, z } = position;
		gsap.to(this.instance.position, {
			x,
			y,
			z,
			duration: 2,
			ease: 'linear'
		});

		this.controls.autoRotate = false;
	}
}
