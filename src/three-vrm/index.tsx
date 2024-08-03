import { VRM, VRMLoaderPlugin } from '@pixiv/three-vrm';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import useStyles from './style';

const loader = new GLTFLoader();

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// camera
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 20);
camera.position.set(0, 1, 5);

// camera controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;
controls.target.set(0, 1, 0);
controls.update();

// scene
const scene = new THREE.Scene();

// light
const light = new THREE.DirectionalLight(0xFF_FF_FF);
light.position.set(1, 1, 1).normalize();
scene.add(light);

let currentVrm: VRM;

// Install GLTFLoader plugin
loader.register((parser) => {
  return new VRMLoaderPlugin(parser);
});

loader.load(
  // URL of the VRM you want to load
  '/VRM1_Constraint_Twist_Sample.vrm',

  // called when the resource is loaded
  (gltf) => {
    // retrieve a VRM instance from gltf
    const vrm = gltf.userData.vrm;

    // add the loaded vrm to the scene
    scene.add(vrm.scene);

    currentVrm = vrm;

    // deal with vrm features
    console.log(vrm);
  },

  // called while loading is progressing
  (progress) => console.log('Loading model...', 100 * (progress.loaded / progress.total), '%'),

  // called when loading has errors
  (error) => console.error(error),
);

// animate
const clock = new THREE.Clock();
clock.start();

function animate() {
  requestAnimationFrame(animate);

  // update vrm components
  if (currentVrm) {
    currentVrm.update(clock.getDelta());
  }

  // render
  renderer.render(scene, camera);
}

const ThreeDemo = () => {
  const { styles } = useStyles();
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    container.current?.append(renderer.domElement);
    animate();
  }, []);

  return <div className={styles.container} ref={container}></div>;
};

export default ThreeDemo;
