import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1a1a1a);

// Click-to-focus config
const focusGroupsConfig = [
  {
    name: 'phone',
    meshNames: [
    'Body1', 'Body2', 'Body3', 'Body4', 'Body5', 'Body6', 'Body8', 'Body9', 'Body10',
    'Body11', 'Body12', 'Body13', 'Body14', 'Body15', 'Body16', 'Body17', 'Body18', 'Body19', 'Body20',
    'Body21', 'Body22', 'Body23', 'Body24', 'Body25', 'Body26', 'Body27', 'Body28', 'Body29', 'Body30',
    'Body31', 'Body32', 'Body33', 'Body34', 'Body35', 'Body36', 'Body37', 'Body38', 'Body39', 'Body40',
    'Body41', 'Body42', 'Body43', 'Body44', 'Body45', 'Body46', 'Body47', 'Body48', 'Body49', 'Body50',
    'Body51', 'Body52', 'Body53', 'Body54', 'Body55', 'Body56', 'Body57', 'Body58', 'Body59', 'Body60',
    'Body61', 'Body62', 'Body63', 'Body64', 'Body65', 'Body66', 'Body67', 'Body68', 'Body69', 'Body70',
    'Body71', 'Body72', 'Body73', 'Body74', 'Body75', 'Body76', 'Body77', 'Body78', 'Body79', 'Body80',
    'Body81', 'Body82', 'Body83', 'Body84', 'Body85', 'Body86',
    ],
    targetOffset: new THREE.Vector3(10.4, 15.75, -18.75),
    targetEuler: new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0),
  },
  /*
  {
    name: 'laptop',
    meshNames: [
    'MeshBody5__1_',
    'MeshBody5__2_',
    'MeshBody5__3_',
    'MeshBody5__4_',
    'MeshBody5__5_',
    'MeshBody5__6_',
    'MeshBody5__7_',
    'MeshBody5__8_',
    'MeshBody5__9_',
    'MeshBody5__10_',
    'MeshBody5__11_',
    'MeshBody5__12_',
    'MeshBody5__13_',
    'MeshBody5__14_',
    'MeshBody5__15_',
    'MeshBody5__16_',
    'MeshBody5__17_',
    'MeshBody5__18_',
    'MeshBody5__19_',
    'MeshBody5__20_',
    'MeshBody5__21_',
    'MeshBody5__22_',
    'MeshBody5__23_',
    'MeshBody5__24_',
    'MeshBody5__25_',
    'MeshBody5__26_',
    'MeshBody5__27_',
    'MeshBody5__28_',
    'MeshBody5__29_',
    'MeshBody5__30_',
    'MeshBody5__31_',
    'MeshBody5__32_',
    'MeshBody5__33_',
    'MeshBody5__34_',
    'MeshBody5__35_',
    'MeshBody5__36_',
    'MeshBody5__37_',
    'MeshBody5__38_',
    'MeshBody5__39_',
    'MeshBody5__40_',
    'MeshBody5__41_',
    'MeshBody5__42_',
    'MeshBody5__43_',
    'MeshBody5__44_',
    'MeshBody5__45_',
    'MeshBody5__46_',
    'MeshBody5__47_',
    'MeshBody5__48_',
    'MeshBody5__49_',
    'MeshBody5__50_',
    'MeshBody5__51_',
    'MeshBody5__52_',
    'MeshBody5__53_',
    'MeshBody5__54_',
    'MeshBody5__55_',
    'MeshBody5__56_',
    'MeshBody5__57_',
    'MeshBody5__58_',
    'MeshBody5__59_',
    'MeshBody5__60_',
    'MeshBody5__61_',
    'MeshBody5__62_',
    'MeshBody5__63_',
    'MeshBody5__64_',
    'MeshBody5__65_',
    'MeshBody5__66_',
    'MeshBody5__67_',
    'MeshBody5__68_',
    'MeshBody5__69_',
    'MeshBody5__70_',
    'MeshBody5__71_',
    'MeshBody5__72_',
    'MeshBody5__73_',
    'MeshBody5__74_',
    'MeshBody5__75_',
    'MeshBody5__76_',
    'MeshBody5__77_',
    'MeshBody5__78_',
    'MeshBody5__79_',
    'MeshBody5__80_',
    'MeshBody5__81_',
    'MeshBody5__82_',
    'MeshBody5__83_',
    'MeshBody5__84_',
    'MeshBody5__85_',
    'MeshBody5__86_',
    'MeshBody5__87_',
    'MeshBody5__88_',
    'MeshBody5__89_',
    'MeshBody5__90_',
    'MeshBody5__91_',
    'MeshBody5__92_',
    'MeshBody5__93_',
    'MeshBody5__94_',
    'MeshBody5__95_',
    'MeshBody5__96_',
    'MeshBody5__97_',
    'MeshBody5__98_',
    'MeshBody5__99_',
    'MeshBody5__100_',
    'MeshBody5__101_',
    'MeshBody5__102_',
    'MeshBody5__103_',
    'MeshBody5__104_',
    'MeshBody5__105_',
    'MeshBody5__106_',
    'MeshBody5__107_',
    'MeshBody5__108_',
    'MeshBody5__109_',
    'MeshBody5__110_',
    'MeshBody5__111_',
    'MeshBody5__112_',
    'MeshBody5__113_',
    'MeshBody5__114_',
    'MeshBody5__115_',
    'MeshBody5__116_',
    'MeshBody5__117_',
    'MeshBody5__118_',
    'MeshBody5__119_',
    'MeshBody5__120_',
    'MeshBody5__121_',
    'MeshBody5__122_',
    'MeshBody5__123_',
    'MeshBody5__124_',
    'MeshBody5__125_',
    'MeshBody5__126_',
    'MeshBody5__127_',
    'MeshBody5__128_',
    'MeshBody5__129_',
    'MeshBody5__130_',
    'MeshBody5__131_',
    'MeshBody5__132_',
    'MeshBody5__133_',
    'MeshBody5__134_',
    'MeshBody5__135_',
    'MeshBody5__136_',
    'MeshBody5__137_',
    'MeshBody5__138_',
    'MeshBody5__139_',
    'MeshBody5__140_',
    'MeshBody5__141_',
    'MeshBody5__142_',
    'MeshBody5__143_',
    'MeshBody5__144_',
    'MeshBody5__145_',
    'MeshBody5__146_',
    'MeshBody5__147_',
    'MeshBody5__148_',
    'MeshBody5__149_',
    'MeshBody4__1_',
    'MeshBody4__2_',
    'MeshBody4__3_',
    'MeshBody4__4_',
    'MeshBody9__0_',
    'MeshBody9__1_',
    'MeshBody2',
    'MeshBody6__1_',
    'MeshBody6__2_',
    'MeshBody6__3_',
    'MeshBody6__4_',
    'MeshBody6__5_',
    'MeshBody6__6_',
    'MeshBody6__7_',
    'MeshBody6__8_',
    'MeshBody6__9_',
    'MeshBody6__10_',
    'MeshBody6__11_',
    'MeshBody6__12_',
    'MeshBody6__13_',
    'MeshBody6__14_',
    'MeshBody6__15_',
    'MeshBody6__16_',
    'MeshBody6__17_',
    'MeshBody6__18_',
    'MeshBody6__19_',
    'MeshBody6__20_',
    'MeshBody6__21_',
    'MeshBody6__22_',
    'MeshBody6__23_',
    'MeshBody6__24_',
    'MeshBody6__25_',
    'MeshBody6__26_',
    'MeshBody6__27_',
    'MeshBody6__28_',
    'MeshBody6__29_',
    'MeshBody6__30_',
    'MeshBody6__31_',
    'MeshBody6__32_',
    'MeshBody6__33_',
    'MeshBody6__34_',
    'MeshBody6__35_',
    'MeshBody6__36_',
    'MeshBody6__37_',
    'MeshBody6__38_',
    'MeshBody6__39_',
    'MeshBody6__40_',
    'MeshBody6__41_',
    'MeshBody6__42_',
    'MeshBody6__43_',
    'MeshBody6__44_',
    'MeshBody6__45_',
    'MeshBody6__46_',
    'MeshBody6__47_',
    'MeshBody6__48_',
    'MeshBody6__49_',
    'MeshBody6__50_',
    'MeshBody6__51_',
    'MeshBody6__52_',
    'MeshBody6__53_',
    'MeshBody6__54_',
    'MeshBody6__55_',
    'MeshBody6__56_',
    'MeshBody6__57_',
    'MeshBody6__58_',
    'MeshBody6__59_',
    'MeshBody6__60_',
    'MeshBody6__61_',
    'MeshBody6__62_',
    'MeshBody6__63_',
    'MeshBody8__2_',
    'MeshBody8__3_',
    'MeshBody8__4_',
    'MeshBody8__5_',
    'MeshBody8__6_',
    'MeshBody8__7_',
    'MeshBody8__8_',
    'MeshBody8__9_',
    ],
    targetOffset: new THREE.Vector3(10.4, 16, -19),
    targetEuler: new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0),
  },
  */
  {
    name: 'resume',
    meshNames: ['Body5_1'],
    targetOffset: new THREE.Vector3(27.6, 19.5, -33),
    targetEuler: new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0),
  },
  {
    name: 'degree',
    meshNames: ['MeshBody1_13'],
    targetOffset: new THREE.Vector3(2, -29, -29),
    targetEuler: new THREE.Euler(0, -Math.PI / 2, 0),
  },
    {
    name: 'cert',
    meshNames: ['Body7'],
    targetOffset: new THREE.Vector3(-20, -10.5, 25),
    targetEuler: new THREE.Euler(0, 0, 0),
  },
];
const hoverLabelGroups = [
  { groupName: 'phone', text: 'Phone' },
  { groupName: 'laptop', text: 'Laptop' },
  { groupName: 'resume', text: 'Resume' },
  { groupName: 'degree', text: 'Degree' },
];
const hoverLabelOffsetFactor = 0.6;
const hoverLabelFadeMs = 200;
const focusConfig = {
  durationMs: 1000,
  fillFactor: 1.1, // 1.0 = fit in view, >1.0 = slightly larger
  minDistance: 6,
  offset: new THREE.Vector3(0, 0, 0),
};
const contactLinks = {
  phone: 'tel:+14374739401',
  email: 'mailto:m.khurram@mail.utoronto.ca',
  linkedin: 'https://www.linkedin.com/in/mahad-khurram',
  github: 'https://github.com/1WorthIte',
};
const phoneRigConfig = {
  positionOffset: new THREE.Vector3(0, 0.03, 0),
  rotation: new THREE.Euler(-Math.PI/2, 0.035, Math.PI/2),
  wallpaperTexturePath: '/textures/phone-wallpaper.JPEG',
  wallpaperFallbackColor: 0x0b1624,
  apps: [
    {
      name: 'Phone',
      accent: 0x35f2ff,
      clickable: true,
      href: contactLinks.phone,
      position: new THREE.Vector3(-1.45, 1.2, -0.3),
    },
    {
      name: 'Email',
      texturePath: '/textures/email-app.png',
      accent: 0xffc857,
      clickable: true,
      href: contactLinks.email,
      position: new THREE.Vector3(1.45, 1.2, -0.3),
    },
    {
      name: 'LinkedIn',
      texturePath: '/textures/linkedin-app.png',
      accent: 0x5fb7ff,
      clickable: true,
      href: contactLinks.linkedin,
      position: new THREE.Vector3(-1.45, -1.2, -0.3),
    },
    {
      name: 'GitHub',
      texturePath: '/textures/github-app.png',
      accent: 0xc6cbd6,
      clickable: true,
      href: contactLinks.github,
      position: new THREE.Vector3(1.45, -1.2, -0.3),
    },
  ],
};
const showNameLabels = false;
const showTriangleLabels = false;
const showClickableOutlines = true; // Phone rig outlines will be hidden
const showLaptopDebugHighlight = true;
const meshNameHoldKey = 'n';
const meshTextureDecals = [
  {
    meshName: 'Body5_1',
    texturePath: '/textures/resume9.png',
    size: new THREE.Vector2(1.4, 1.96),
    offset: new THREE.Vector3(0, 0, 0.01),
    euler: new THREE.Euler(Math.PI, Math.PI, 0),
    opacity: 1,
  },
    {
    meshName: 'MeshBody1_13',
    texturePath: '/textures/degree.jpg',
    size: new THREE.Vector2(1.8, 1.3),
    offset: new THREE.Vector3(0, -0.01, 0),
    euler: new THREE.Euler(Math.PI, 3*Math.PI/2, Math.PI/2),
    opacity: 1,
  },
  {
    meshName: 'MeshBody1_16',
    texturePath: '/textures/pakola.png',
    size: new THREE.Vector2(2.5, 2),
    offset: new THREE.Vector3(0.3, 0.3, 0),
    euler: new THREE.Euler(Math.PI/2, 3*Math.PI/4, 0),
    opacity: 1,
  },
    {
    meshName: 'Body7',
    texturePath: '/textures/CS50.png',
    size: new THREE.Vector2(2, 1.43),
    offset: new THREE.Vector3(0.01, 0, 0),
    euler: new THREE.Euler(Math.PI/2, Math.PI/2, 0),
    opacity: 1,
  },
  {
    meshName: 'pCube1',
    texturePath: '/textures/DDIA.jpg',
    size: new THREE.Vector2(1.1, 1.77),
    offset: new THREE.Vector3(0, -0.062, 0),
    euler: new THREE.Euler(Math.PI/2, 0, 0.263),
    opacity: 1,
  },
];

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const clickableRoots = new Set();
const clickableHelpers = [];
const laptopDebugHelpers = [];
const focusGroupByRoot = new Map();
const focusGroupByName = new Map(focusGroupsConfig.map((group) => [group.name, group]));
const originals = new Map();
const tempBox = new THREE.Box3();
const tempSize = new THREE.Vector3();
const tempCenter = new THREE.Vector3();
const tempDir = new THREE.Vector3();
const tempRight = new THREE.Vector3();
const tempUp = new THREE.Vector3();
const tempObj = new THREE.Object3D();
const tempQuat = new THREE.Quaternion();

let hoverLabel = null;
let hoverLabelMeshes = [];
const hoverLabelByMesh = new Map();
let hoveredLabelMesh = null;
let hoverLabelHideTimeout = null;
let meshNameLabels = [];
let isMeshNameHoldActive = false;
let areMeshNameLabelsVisible = showNameLabels;
let areClickableOutlinesVisible = showClickableOutlines;
let outlineToggleButton = null;
let meshNameToggleButton = null;
let axesToggleButton = null;
const contactButtonMeshes = [];
let contactButtonRig = null;

let activeFocuses = [];
let activeCameraReset = null;
let closeButton = null;

function createCloseButton() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'close-magnify-button';
  btn.textContent = '×';
  btn.setAttribute('aria-label', 'Close magnified view');
  
  btn.addEventListener('click', () => {
    resetAllFocuses();
  });
  
  document.body.appendChild(btn);
  return btn;
}

function updateCloseButtonVisibility() {
  if (!closeButton) return;
  
  // Check if there's an active animation
  if (activeFocuses.length > 0) {
    closeButton.classList.add('is-visible');
    return;
  }
  
  // Check if any object is currently magnified (not at original position)
  let isMagnified = false;
  for (const [object, original] of originals) {
    const distFromOriginal = object.position.distanceTo(original.position);
    if (distFromOriginal > 0.01) {
      isMagnified = true;
      break;
    }
  }
  
  if (isMagnified) {
    closeButton.classList.add('is-visible');
  } else {
    closeButton.classList.remove('is-visible');
  }
}

function setMeshNameLabelsVisible(visible) {
  areMeshNameLabelsVisible = visible;
  meshNameLabels.forEach((label) => {
    label.visible = visible;
  });

  if (meshNameToggleButton) {
    meshNameToggleButton.textContent = visible ? 'Names: On' : 'Names: Off';
    meshNameToggleButton.setAttribute('aria-pressed', String(visible));
  }
}

function setClickableOutlineVisibility(visible) {
  areClickableOutlinesVisible = visible;
  clickableHelpers.forEach((helper) => {
    helper.visible = visible;
  });

  if (outlineToggleButton) {
    outlineToggleButton.textContent = visible ? 'Outlines: On' : 'Outlines: Off';
    outlineToggleButton.setAttribute('aria-pressed', String(visible));
  }
}

function setAxesHelperVisibility(visible) {
  axesHelper.visible = visible;

  if (axesToggleButton) {
    axesToggleButton.textContent = visible ? 'Axes: On' : 'Axes: Off';
    axesToggleButton.setAttribute('aria-pressed', String(visible));
  }
}

// CSS2D Renderer for labels
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// Aggressive lighting setup - illuminate from all angles
// ADJUST THESE VALUES TO CONTROL LIGHTING:

// Ambient Light - general fill light everywhere
const ambientLight = new THREE.AmbientLight(0xffffff, 2);  // (color, intensity) - increase for brighter
scene.add(ambientLight);

// Hemisphere Light - mimics natural sky/ground lighting
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);  // (sky color, ground color, intensity)
scene.add(hemiLight);

// Directional Lights - like sunlight from different angles
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2);  // (color, intensity)
directionalLight1.position.set(100, 100, 100);  // Position in 3D space
directionalLight1.castShadow = true;  // Optional: cast shadows
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
directionalLight2.position.set(-100, 100, -100);
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight3.position.set(100, -100, 100);
scene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight4.position.set(-100, -100, -100);
scene.add(directionalLight4);

// Point Lights - like light bulbs at specific locations
const pointLight1 = new THREE.PointLight(0xffffff, 2, 1000);  // (color, intensity, distance)
pointLight1.position.set(0, 200, 0);  // Position above the scene
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 2, 1000);
pointLight2.position.set(0, -200, 0);  // Position below the scene
scene.add(pointLight2);

// LIGHTING TIPS:
// - Increase any light's intensity for brighter lighting
// - Change position.set(x, y, z) to move where light comes from
// - Try different colors like 0xff0000 (red), 0x0000ff (blue), etc.
// - If objects still don't show well, the material may need adjustment

// Add Axes Helper to visualize X, Y, Z axes
const axesHelper = new THREE.AxesHelper(1000);  // Size of the axes
axesHelper.visible = true;
scene.add(axesHelper);

// Setup OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = false;
controls.minDistance = 5;
controls.maxDistance = 200;
controls.maxPolarAngle = Math.PI/2;
controls.minAzimuthAngle = 0;
controls.maxAzimuthAngle = .62 * Math.PI;


// Set initial camera position
camera.position.set(107, 39, 34);
controls.target.set(0.00, 0.00, -10.00);
camera.lookAt(controls.target);
controls.update();

const initialCameraState = {
  position: camera.position.clone(),
  target: controls.target.clone(),
};

function startCameraReset() {
  activeCameraReset = {
    startPos: camera.position.clone(),
    endPos: initialCameraState.position.clone(),
    startTarget: controls.target.clone(),
    endTarget: initialCameraState.target.clone(),
    startTime: performance.now(),
    duration: 900,
  };
}

function stopCameraMotion() {
  controls.autoRotate = false;
  if (controls._sphericalDelta) {
    controls._sphericalDelta.set(0, 0, 0);
  }
  if (controls._panOffset) {
    controls._panOffset.set(0, 0, 0);
  }
  if ('_scale' in controls) {
    controls._scale = 1;
  }
  if ('_controlActive' in controls) {
    controls._controlActive = false;
  }
  if ('state' in controls) {
    controls.state = -1;
  }
}

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.type = 'button';
  resetButton.className = 'reset-camera-button';
  resetButton.textContent = 'Reset';
  resetButton.setAttribute('aria-label', 'Reset camera view');

  resetButton.addEventListener('click', () => {
    resetAllFocuses();
    startCameraReset();
  });

  document.body.appendChild(resetButton);
}

function createOutlineToggleButton() {
  const outlineButton = document.createElement('button');
  outlineButton.type = 'button';
  outlineButton.className = 'scene-toggle-button outline-toggle-button';
  outlineButton.textContent = 'Outlines: Off';
  outlineButton.setAttribute('aria-pressed', 'false');
  outlineButton.setAttribute('aria-label', 'Toggle clickable outline helpers');

  outlineButton.addEventListener('click', () => {
    const nextVisible = !areClickableOutlinesVisible;
    setClickableOutlineVisibility(nextVisible);
  });

  outlineToggleButton = outlineButton;
  document.body.appendChild(outlineButton);
}

function createMeshNameToggleButton() {
  const meshNameButton = document.createElement('button');
  meshNameButton.type = 'button';
  meshNameButton.className = 'scene-toggle-button mesh-name-toggle-button';
  meshNameButton.textContent = 'Names: Off';
  meshNameButton.setAttribute('aria-pressed', 'false');
  meshNameButton.setAttribute('aria-label', 'Toggle object name labels');

  meshNameButton.addEventListener('click', () => {
    setMeshNameLabelsVisible(!areMeshNameLabelsVisible);
  });

  meshNameToggleButton = meshNameButton;
  document.body.appendChild(meshNameButton);
}

function createAxesToggleButton() {
  const axesButton = document.createElement('button');
  axesButton.type = 'button';
  axesButton.className = 'scene-toggle-button axes-toggle-button';
  axesButton.textContent = 'Axes: On';
  axesButton.setAttribute('aria-pressed', 'true');
  axesButton.setAttribute('aria-label', 'Toggle X, Y, and Z axes');

  axesButton.addEventListener('click', () => {
    setAxesHelperVisibility(!axesHelper.visible);
  });

  axesToggleButton = axesButton;
  document.body.appendChild(axesButton);
}

function openContactLink(href) {
  if (!href) return;
  window.open(href, '_blank', 'noopener,noreferrer');
}

function createIconSlotTexture(accent) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) return null;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.12)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = accent;
  ctx.lineWidth = 10;
  ctx.strokeRect(30, 30, 196, 196);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
  ctx.lineWidth = 4;
  ctx.strokeRect(48, 48, 160, 160);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.fillRect(84, 84, 88, 88);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createPhoneAppRig({ name, href, accent, clickable, position, texturePath }) {
  const buttonGroup = new THREE.Group();
  buttonGroup.name = `phone-app-${name.toLowerCase()}`;

  const body = new THREE.Mesh(
    new RoundedBoxGeometry(1.88, 1.88, 0.16, 10, 0.12),
    new THREE.MeshPhysicalMaterial({
      color: 0x0d1a29,
      roughness: 0.26,
      metalness: 0.12,
      clearcoat: 0.92,
      clearcoatRoughness: 0.1,
      transmission: 0.04,
      transparent: true,
      opacity: 0.98,
      depthWrite: false,
    }),
  );
  body.castShadow = true;
  body.receiveShadow = true;
  buttonGroup.add(body);

  const iconShell = new THREE.Mesh(
    new RoundedBoxGeometry(1.42, 1.42, 0.08, 8, 0.08),
    new THREE.MeshStandardMaterial({
      color: 0x18283d,
      roughness: 0.35,
      metalness: 0.08,
      emissive: accent,
      emissiveIntensity: 0.08,
    }),
  );
  iconShell.position.z = 0.045;
  buttonGroup.add(iconShell);

  const iconSurface = new THREE.Mesh(
    new THREE.PlaneGeometry(1.18, 1.18),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.55,
      metalness: 0.0,
      emissive: accent,
      emissiveIntensity: 0.05,
      map: createIconSlotTexture(accent),
      transparent: true,
      opacity: 0.98,
      depthWrite: false,
    }),
  );
  iconSurface.position.z = 0.09;
  buttonGroup.add(iconSurface);

  if (texturePath) {
    textureLoader.load(
      texturePath,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        iconSurface.material.map = texture;
        iconSurface.material.needsUpdate = true;
      },
      undefined,
      (error) => {
        console.warn(`Failed to load app texture: ${texturePath}`, error);
      },
    );
  }

  const accentBar = new THREE.Mesh(
    new RoundedBoxGeometry(0.14, 1.24, 0.06, 4, 0.03),
    new THREE.MeshStandardMaterial({
      color: accent,
      emissive: accent,
      emissiveIntensity: 0.42,
      roughness: 0.22,
      metalness: 0.06,
    }),
  );
  accentBar.position.set(-0.72, 0, 0.085);
  buttonGroup.add(accentBar);

  buttonGroup.userData.href = href;
  buttonGroup.userData.clickable = Boolean(clickable);
  buttonGroup.userData.open = clickable ? () => openContactLink(href) : null;
  buttonGroup.userData.isContactButton = clickable;

  if (clickable) contactButtonMeshes.push(body);
  buttonGroup.position.copy(position);
  return buttonGroup;
}

function createContactRig(groupRoot) {
  if (contactButtonRig) {
    groupRoot.add(contactButtonRig);
    return contactButtonRig;
  }

  const panel = new THREE.Group();
  panel.name = 'contact-rig';





  const wallpaper = new THREE.Mesh(
    new THREE.PlaneGeometry(7.5, 15.7),
    new THREE.MeshBasicMaterial({
      color: phoneRigConfig.wallpaperFallbackColor,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    }),
  );
  wallpaper.position.set(0, 0, -0.315);
  panel.add(wallpaper);

  if (phoneRigConfig.wallpaperTexturePath) {
    textureLoader.load(
      phoneRigConfig.wallpaperTexturePath,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        wallpaper.material.map = texture;
        wallpaper.material.needsUpdate = true;
      },
      undefined,
      (error) => {
        console.warn(`Failed to load wallpaper texture: ${phoneRigConfig.wallpaperTexturePath}`, error);
      },
    );
  }

  phoneRigConfig.apps.forEach((appConfig) => {
    const appRig = createPhoneAppRig(appConfig);
    panel.add(appRig);
  });

  contactButtonRig = panel;
  groupRoot.add(panel);
  return panel;
}

createOutlineToggleButton();
createMeshNameToggleButton();
createAxesToggleButton();
createResetButton();
closeButton = createCloseButton();

// CAMERA TELEMETRY - Press 'C' to log camera/controls data to console
window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'c') {
    const data = {
      camera: {
        position: {
          x: camera.position.x.toFixed(2),
          y: camera.position.y.toFixed(2),
          z: camera.position.z.toFixed(2),
        },
        fov: camera.fov,
        aspect: camera.aspect.toFixed(2),
      },
      controls: {
        target: {
          x: controls.target.x.toFixed(2),
          y: controls.target.y.toFixed(2),
          z: controls.target.z.toFixed(2),
        },
        distance: controls.getDistance().toFixed(2),
        autoRotate: controls.autoRotate,
        minDistance: controls.minDistance,
        maxDistance: controls.maxDistance,
      },
    };
    
    console.log('=== CAMERA TELEMETRY ===');
    console.log(JSON.stringify(data, null, 2));
    console.log('Copy this and paste into your code to save these camera settings.');
  }

  if (event.key.toLowerCase() === meshNameHoldKey) {
    if (isMeshNameHoldActive) return;
    isMeshNameHoldActive = true;
    setMeshNameLabelsVisible(true);
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key.toLowerCase() !== meshNameHoldKey) return;
  isMeshNameHoldActive = false;
  setMeshNameLabelsVisible(areMeshNameLabelsVisible);
});

window.addEventListener('blur', () => {
  if (!isMeshNameHoldActive) return;
  isMeshNameHoldActive = false;
  setMeshNameLabelsVisible(areMeshNameLabelsVisible);
});

// LOAD DESK GLB FILE (includes textures and materials)
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

function addTextureDecal(mesh, decalConfig) {
  const geometry = mesh.geometry;
  if (!geometry) return;
  if (!geometry.boundingBox) geometry.computeBoundingBox();
  if (!geometry.boundingBox) return;

  const center = new THREE.Vector3();
  geometry.boundingBox.getCenter(center);

  textureLoader.load(
    decalConfig.texturePath,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: decalConfig.opacity ?? 1,
        side: THREE.DoubleSide,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      });

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(decalConfig.size.x, decalConfig.size.y),
        material,
      );

      plane.position.copy(center).add(decalConfig.offset || new THREE.Vector3());
      if (decalConfig.euler) plane.rotation.copy(decalConfig.euler);
      plane.renderOrder = 2;
      mesh.add(plane);
    },
    undefined,
    (error) => {
      console.warn(`Failed to load texture decal: ${decalConfig.texturePath}`, error);
    },
  );
}

loader.load('Desk-8-compressed.glb', (gltf) => {
  const desk = gltf.scene;
  scene.add(desk);
  desk.position.set(60, 0, -55);
  desk.rotation.set(-Math.PI/2, 0, -Math.PI/2);
  desk.scale.set(0.1, 0.1, 0.1);
  
  // Collect all mesh names and count stats, but group nearby mesh bodies
  const meshNames = [];
  const meshInfos = []; // { mesh, center: Vector3 (world), triCount }
  let meshCount = 0;
  let triCount = 0;
  meshNameLabels = [];

  desk.traverse((o) => {
    if (o.isMesh) {
      meshCount++;
      meshNames.push(o.name || '(unnamed)');

      // Calculate triangle count for this mesh
      const g = o.geometry;
      let meshTriCount = 0;
      if (g && g.index) meshTriCount = g.index.count / 3;
      else if (g && g.attributes?.position) meshTriCount = g.attributes.position.count / 3;

      triCount += meshTriCount;

      // Compute mesh center in world coordinates
      if (!g.boundingBox) g.computeBoundingBox();
      const localCenter = new THREE.Vector3();
      if (g.boundingBox) g.boundingBox.getCenter(localCenter);
      // transform to world
      o.updateWorldMatrix(true, false);
      const worldCenter = localCenter.clone();
      o.localToWorld(worldCenter);

      meshInfos.push({ mesh: o, center: worldCenter, triCount: meshTriCount });
    }
  });

  function addNameLabels() {
    desk.traverse((o) => {
      if (!o.isMesh) return;

      const labelDiv = document.createElement('div');
      labelDiv.className = 'name-label';
      labelDiv.textContent = o.name || '(unnamed)';
      labelDiv.style.cssText = `
        color: #00ff00;
        background: rgba(0, 0, 0, 0.6);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: monospace;
        font-size: 10px;
        border: 1px solid #00ff00;
        white-space: nowrap;
      `;

      const label = new CSS2DObject(labelDiv);
      label.visible = false;

      const g = o.geometry;
      if (g) {
        if (!g.boundingBox) g.computeBoundingBox();
        if (g.boundingBox) {
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          g.boundingBox.getCenter(center);
          g.boundingBox.getSize(size);
          label.position.copy(center).add(new THREE.Vector3(0, size.y * 0.6, 0));
        }
      }

      o.add(label);
      meshNameLabels.push(label);
    });

    setMeshNameLabelsVisible(areMeshNameLabelsVisible || isMeshNameHoldActive);
  }

  addNameLabels();

  // Build manual focus groups from explicit mesh name lists
  const meshByName = new Map();
  desk.traverse((o) => {
    if (o.isMesh && o.name) meshByName.set(o.name, o);
  });

  meshTextureDecals.forEach((decalConfig) => {
    const mesh = meshByName.get(decalConfig.meshName);
    if (!mesh) {
      console.warn(`Texture decal mesh not found: ${decalConfig.meshName}`);
      return;
    }
    addTextureDecal(mesh, decalConfig);
  });

  hoverLabelGroups.forEach((group) => {
    const groupConfig = focusGroupByName.get(group.groupName);
    if (!groupConfig) {
      console.warn(`Hover label group "${group.groupName}" not found.`);
      return;
    }
    groupConfig.meshNames.forEach((meshName) => {
      const mesh = meshByName.get(meshName);
      if (!mesh) return;
      hoverLabelByMesh.set(mesh, group.text);
    });
  });
  hoverLabelMeshes = Array.from(hoverLabelByMesh.keys());

  if (hoverLabelMeshes.length) {
    const hoverLabelDiv = document.createElement('div');
    hoverLabelDiv.className = 'sci-label';
    hoverLabelDiv.textContent = '';

    hoverLabel = new CSS2DObject(hoverLabelDiv);
    hoverLabel.position.set(0, 0, 0);
    hoverLabel.element.style.display = 'none';
    scene.add(hoverLabel);
  }

  focusGroupsConfig.forEach((groupConfig) => {
    const meshes = groupConfig.meshNames
      .map((name) => meshByName.get(name))
      .filter(Boolean);

    if (!meshes.length) {
      console.warn(`Focus group "${groupConfig.name}" has no meshes.`);
      return;
    }

    const groupRoot = new THREE.Group();
    groupRoot.name = `focus-${groupConfig.name}`;
    scene.add(groupRoot);

    meshes.forEach((mesh) => {
      groupRoot.attach(mesh);
    });

    clickableRoots.add(groupRoot);
    focusGroupByRoot.set(groupRoot, groupConfig);

    if (showLaptopDebugHighlight && groupConfig.name === 'laptop') {
      meshes.forEach((mesh) => {
        const helper = new THREE.BoxHelper(mesh, 0xff3bf5);
        helper.material.depthTest = false;
        helper.material.transparent = true;
        helper.material.opacity = 1;
        scene.add(helper);
        laptopDebugHelpers.push(helper);
      });
    }

    const helper = new THREE.BoxHelper(groupRoot, 0x00ff00);
    helper.visible = areClickableOutlinesVisible;
    scene.add(helper);
    clickableHelpers.push(helper);

    if (groupConfig.name === 'phone') {
      const phoneBounds = new THREE.Box3().setFromObject(groupRoot);
      const phoneCenter = new THREE.Vector3();
      phoneBounds.getCenter(phoneCenter);

      const phoneRig = createContactRig(groupRoot);
      phoneRig.position.set(
        phoneCenter.x + phoneRigConfig.positionOffset.x,
        phoneBounds.max.y + phoneRigConfig.positionOffset.y,
        phoneCenter.z + phoneRigConfig.positionOffset.z,
      );
      phoneRig.rotation.copy(phoneRigConfig.rotation);
    }
  });

  console.log({ meshCount, triCount });

  // Live clustering parameters and markers
  let mergeDistance = 6.2; // default world units
  const clusterMarkers = [];

  function computeClusters(distance) {
    const clusters = [];
    const assigned = new Set();
    for (let i = 0; i < meshInfos.length; i++) {
      if (assigned.has(i)) continue;
      const cluster = { indices: [i] };
      assigned.add(i);

      let changed = true;
      while (changed) {
        changed = false;
        for (let j = 0; j < meshInfos.length; j++) {
          if (assigned.has(j)) continue;
          for (const mi of cluster.indices) {
            const d = meshInfos[mi].center.distanceTo(meshInfos[j].center);
            if (d <= distance) {
              cluster.indices.push(j);
              assigned.add(j);
              changed = true;
              break;
            }
          }
        }
      }

      clusters.push(cluster);
    }
    return clusters;
  }

  function clearClusterMarkers() {
    while (clusterMarkers.length) {
      const m = clusterMarkers.pop();
      scene.remove(m);
    }
    // Also remove any lingering per-mesh labels (CSS2DObjects with class 'tri-label')
    const toRemove = [];
    scene.traverse((obj) => {
      if (obj && obj.element && obj.element.className === 'tri-label') {
        toRemove.push(obj);
      }
    });
    toRemove.forEach((obj) => {
      if (obj.parent) obj.parent.remove(obj);
    });
  }

  function renderClusters(distance) {
    if (!showTriangleLabels) return;
    clearClusterMarkers();
    const clusters = computeClusters(distance);

    clusters.forEach((c) => {
      let sumTris = 0;
      const center = new THREE.Vector3(0, 0, 0);
      c.indices.forEach((idx) => {
        sumTris += meshInfos[idx].triCount;
        center.add(meshInfos[idx].center);
      });
      center.divideScalar(c.indices.length);

      const labelDiv = document.createElement('div');
      labelDiv.className = 'tri-label';
      labelDiv.textContent = `${Math.round(sumTris).toLocaleString()} tris`;
      labelDiv.style.cssText = `
        color: #00ff00;
        background: rgba(0, 0, 0, 0.7);
        padding: 2px 6px;
        border-radius: 3px;
        font-family: monospace;
        font-size: 11px;
        border: 1px solid #00ff00;
        white-space: nowrap;
      `;

      const label = new CSS2DObject(labelDiv);
      const marker = new THREE.Object3D();
      marker.position.copy(center);
      marker.add(label);
      scene.add(marker);
      clusterMarkers.push(marker);
    });

  }

  // initial render
  if (showTriangleLabels) renderClusters(mergeDistance);
}, undefined, (error) => {
  console.error('Error loading GLB:', error);
});

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function computeFocusTarget(object) {
  const groupConfig = focusGroupByRoot.get(object);
  if (groupConfig && groupConfig.targetOffset && groupConfig.targetEuler) {
    camera.updateMatrixWorld(true);
    tempObj.position.copy(camera.position);
    tempObj.quaternion.copy(camera.quaternion);

    const offset = groupConfig.targetOffset.clone();
    offset.applyQuaternion(camera.quaternion);
    tempObj.position.add(offset);

    tempQuat.setFromEuler(groupConfig.targetEuler);
    tempObj.quaternion.multiply(tempQuat);

    return {
      position: tempObj.position.clone(),
      quaternion: tempObj.quaternion.clone(),
    };
  }

  tempBox.setFromObject(object);
  tempBox.getSize(tempSize);
  const maxDim = Math.max(tempSize.x, tempSize.y, tempSize.z);
  const fovRad = THREE.MathUtils.degToRad(camera.fov);
  const fitDistance = (maxDim / 2) / Math.tan(fovRad / 2);
  const distance = Math.max(focusConfig.minDistance, fitDistance * focusConfig.fillFactor);

  camera.getWorldDirection(tempDir).normalize();
  tempRight.crossVectors(tempDir, camera.up).normalize();
  tempUp.copy(camera.up).normalize();

  const targetPos = new THREE.Vector3();
  targetPos.copy(camera.position)
    .add(tempDir.multiplyScalar(distance))
    .add(tempRight.multiplyScalar(focusConfig.offset.x))
    .add(tempUp.multiplyScalar(focusConfig.offset.y));

  tempObj.position.copy(targetPos);
  tempObj.lookAt(camera.position);

  return {
    position: targetPos,
    quaternion: tempObj.quaternion.clone(),
  };
}

function startFocus(object) {
  if (!object) return;

  if (!originals.has(object)) {
    originals.set(object, {
      position: object.position.clone(),
      quaternion: object.quaternion.clone(),
    });
  }

  const target = computeFocusTarget(object);

  activeFocuses = activeFocuses.filter((a) => a.object !== object);
  activeFocuses.push({
    object,
    startPos: object.position.clone(),
    startQuat: object.quaternion.clone(),
    endPos: target.position,
    endQuat: target.quaternion,
    startTime: performance.now(),
    duration: focusConfig.durationMs,
  });
  updateCloseButtonVisibility();
}

function resetAllFocuses() {
  if (!originals.size) return;
  const now = performance.now();
  activeFocuses = [];
  originals.forEach((original, object) => {
    activeFocuses.push({
      object,
      startPos: object.position.clone(),
      startQuat: object.quaternion.clone(),
      endPos: original.position.clone(),
      endQuat: original.quaternion.clone(),
      startTime: now,
      duration: focusConfig.durationMs,
    });
  });
  updateCloseButtonVisibility();
}

function onPointerDown(event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const buttonIntersects = raycaster.intersectObjects(contactButtonMeshes, true);
  if (buttonIntersects.length) {
    let contactMesh = buttonIntersects[0].object;
    while (contactMesh && !contactMesh.userData?.isContactButton) {
      contactMesh = contactMesh.parent;
    }

    if (contactMesh?.userData?.open) {
      resetAllFocuses();
      contactMesh.userData.open();
      return;
    }
  }

  if (!clickableRoots.size) return;

  const intersects = raycaster.intersectObjects(Array.from(clickableRoots), true);
  if (!intersects.length) {
    let hitboxClicked = false;
    for (const root of clickableRoots) {
      tempBox.setFromObject(root);
      if (raycaster.ray.intersectsBox(tempBox)) {
        hitboxClicked = true;
        break;
      }
    }
    if (hitboxClicked) return;
    
    // Only reset if something is actually magnified
    let isMagnified = false;
    for (const [object, original] of originals) {
      if (object.position.distanceTo(original.position) > 0.01) {
        isMagnified = true;
        break;
      }
    }
    if (isMagnified) {
      resetAllFocuses();
    }
    return;
  }

  let root = intersects[0].object;
  while (root && !clickableRoots.has(root)) root = root.parent;
  if (!root) return;

  const original = originals.get(root);
  if (original) {
    const distFromOriginal = root.position.distanceTo(original.position);
    if (distFromOriginal > 0.01) {
      resetAllFocuses();
      return;
    }
  }

  stopCameraMotion();
  controls.update();
  resetAllFocuses();
  startFocus(root);
}

renderer.domElement.addEventListener('pointerdown', onPointerDown);

function onPointerMove(event) {
  if (!hoverLabel || !hoverLabelMeshes.length) return;

  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(hoverLabelMeshes, true);
  if (!intersects.length) {
    hoverLabel.element.classList.remove('is-visible');
    if (hoverLabelHideTimeout) clearTimeout(hoverLabelHideTimeout);
    hoverLabelHideTimeout = setTimeout(() => {
      hoverLabel.element.style.display = 'none';
    }, hoverLabelFadeMs);
    hoveredLabelMesh = null;
    return;
  }

  let hit = intersects[0].object;
  while (hit && !hoverLabelByMesh.has(hit)) hit = hit.parent;
  if (!hit) {
    hoverLabel.element.classList.remove('is-visible');
    if (hoverLabelHideTimeout) clearTimeout(hoverLabelHideTimeout);
    hoverLabelHideTimeout = setTimeout(() => {
      hoverLabel.element.style.display = 'none';
    }, hoverLabelFadeMs);
    hoveredLabelMesh = null;
    return;
  }

  hoveredLabelMesh = hit;
  hoverLabel.element.textContent = hoverLabelByMesh.get(hit) || '';
  if (hoverLabelHideTimeout) clearTimeout(hoverLabelHideTimeout);
  hoverLabel.element.style.display = 'block';
  hoverLabel.element.classList.add('is-visible');
}

renderer.domElement.addEventListener('pointermove', onPointerMove);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') resetAllFocuses();
  if (event.key.toLowerCase() === 'o') {
    setClickableOutlineVisibility(!areClickableOutlinesVisible);
  }
});

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  if (clickableHelpers.length) {
    clickableHelpers.forEach((helper) => helper.update());
  }

  if (laptopDebugHelpers.length) {
    laptopDebugHelpers.forEach((helper) => helper.update());
  }

  if (hoverLabel && hoveredLabelMesh) {
    tempBox.setFromObject(hoveredLabelMesh);
    tempBox.getCenter(tempCenter);
    tempBox.getSize(tempSize);
    hoverLabel.position.copy(tempCenter);
    hoverLabel.position.y += tempSize.y * hoverLabelOffsetFactor;
  }

  if (activeFocuses.length) {
    const now = performance.now();
    activeFocuses = activeFocuses.filter((focus) => {
      const elapsed = now - focus.startTime;
      const t = Math.min(elapsed / focus.duration, 1);
      const eased = easeInOutCubic(t);

      focus.object.position.lerpVectors(focus.startPos, focus.endPos, eased);
      focus.object.quaternion.slerpQuaternions(focus.startQuat, focus.endQuat, eased);

      return t < 1;
    });
  }
  updateCloseButtonVisibility();
  if (activeCameraReset) {
    const elapsed = performance.now() - activeCameraReset.startTime;
    const t = Math.min(elapsed / activeCameraReset.duration, 1);
    const eased = easeInOutCubic(t);

    camera.position.lerpVectors(activeCameraReset.startPos, activeCameraReset.endPos, eased);
    controls.target.lerpVectors(activeCameraReset.startTarget, activeCameraReset.endTarget, eased);

    if (t >= 1) activeCameraReset = null;
  }
  
  controls.update();

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
