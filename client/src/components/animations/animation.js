import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js';

// takes list of moves in order, and two colors for animation sequence
function playAnimations(input, colorA, colorB, playback = 1.0)
{
  let currentAnim = 0;
  let flag = 0;
  let counter = 0;
  let animCounter = 0;
  let timeCounter = 0;

  const objectUrl = new URL('./Jiu-Jitsu.glb', import.meta.url);

  let numInput = input.length;

  // WILL BE EXPANDED
  const anims = {};
  anims['Inside_Trip'] = {name: 'Inside Trip', mult: 1.0, f: false, a: null, b: null};
  anims['Kimura_From_Half'] = {name: 'Kimura From Half', mult: 1.0, f: false, a: null,b: null};
  anims['Double_Leg'] = {name: 'Double Leg', mult: .50, f: false, a: null,b: null};
  anims['Torreando_Pass'] = {name: 'Double Leg', mult: 0.5, f: false, a: null,b: null};
  anims['Guard_Break'] = {name: 'Double Leg', mult: 0.5, f: false, a: null,b: null};
  anims['Back_Take_From_Mount'] = {name: 'Back Take From Mount', mult: 0.4, f: false, a: null,b: null};
  var numAnim = anims.length;

  // WILL BE EXPANDED
  const colorList = {};
  colorList['blue'] = {r: 0.0, g: 0.0, b: 0.77, isColor: true};
  colorList['red'] = {r: 0.77, g: 0.0, b: 0.0, isColor: true};
  colorList['green'] = {r: 0.0, g: 0.77, b: 0.0, isColor: true};
  var numColors = colorList.length;

  var colors = [colorList[colorA],colorList[colorB]];

  var flip = false;

  const renderer = new THREE.WebGLRenderer();

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFFFFFF);  
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  camera.position.set(25, 10, 0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  const assetLoader = new GLTFLoader();

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.9);
  scene.add(directionalLight);

  let mixer;
  let clip_A;
  let clip_B;
  let clips;
  let actions = [];
  let actionsC = [];

  assetLoader.load(objectUrl.href, function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    mixer = new THREE.AnimationMixer(model);
    clips = gltf.animations;
    console.log(gltf);
    
    for(var x in anims)
    {
    let subActions = [];
    console.log(x + '_A');
    clip_A = THREE.AnimationClip.findByName(clips, x + '_A');
    console.log(clip_A);
    let action_A = mixer.clipAction(clip_A);
    action_A.setLoop(THREE.LoopOnce);
    action_A.clampWhenFinished = true;
    action_A.enable = true;
    console.log(x + '_B');
    clip_B = THREE.AnimationClip.findByName(clips, x + '_B');
    console.log(clip_B);
    let action_B = mixer.clipAction(clip_B);
    action_B.setLoop(THREE.LoopOnce);
    action_B.clampWhenFinished = true;
    action_B.enable = true;
    anims[x].a = action_A;
    anims[x].b = action_B;
    }
    console.log("TIME TO PLAY");
    play();
  }, undefined, function(error) {
  });

  function play()
  {
    console.log("PLAY");
    mixer.stopAllAction();
    if(flip)
    {
        let x = colors[0];
        colors[0] = colors[1];
        colors[1] = x;
        flip = false;
    }
    flip = anims[input[animCounter]].f;
    mixer._root.children[0].children[12].children[3].material.color = colors[0];
    mixer._root.children[1].children[12].children[3].material.color = colors[1];
    anims[input[animCounter]].a.play();
    anims[input[animCounter]].b.play();
    animCounter = (animCounter + 1) % numInput;
    console.log("PLAYING " + animCounter);
  }

  const clock = new THREE.Clock();
  function animate()
  {
    if(mixer)
    {
        mixer.update(clock.getDelta() * 1.5 * playback * anims[input[(numInput + animCounter - 1) % numInput]].mult);
        if(flag == 0)
        {
            flag = 1;
            mixer.addEventListener( 'finished', function(e)
            {
                play();
            });
        }
    }
    controls.update();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

// const input = ['Back_Take_From_Mount', 'Torreando_Pass', 'Guard_Break', 'Double_Leg', 'Inside_Trip', 'Kimura_From_Half'];
// const colorA = 'red';
// const colorB = 'blue';

// playAnimations(input, colorA, colorB);

export default playAnimations;