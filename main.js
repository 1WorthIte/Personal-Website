import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
    'Body1', 'Body2', 'Body3', 'Body4', 'Body5', 'Body6', 'Body7', 'Body8', 'Body9', 'Body10',
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
  {
    name: 'laptop',
    meshNames: [],
    targetOffset: new THREE.Vector3(10.4, 16, -19),
    targetEuler: new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0),
  },
  {
    name: 'resume',
    meshNames: ['Body5_1'],
    targetOffset: new THREE.Vector3(27.6, 19.5, -33),
    targetEuler: new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0),
  },
  {
    name: 'degree',
    meshNames: ['MeshBody1_14'],
    targetOffset: new THREE.Vector3(2, -29, -29),
    targetEuler: new THREE.Euler(0, -Math.PI / 2, 0),
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
const showNameLabels = false;
const showTriangleLabels = false;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const clickableRoots = new Set();
const clickableHelpers = [];
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

let activeFocuses = [];

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
scene.add(axesHelper);

// Setup OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.autoRotate = false;
controls.minDistance = 5;
controls.maxDistance = 200;

// Set initial camera position
camera.position.set(107, 39, 34);
controls.target.set(0.00, 0.00, -10.00);
camera.lookAt(controls.target);
controls.update();

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
});

// LOAD DESK GLB FILE (includes textures and materials)
const loader = new GLTFLoader();

loader.load('Desk-6-compressed.glb', (gltf) => {
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
  const nameLabels = [];

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
      nameLabels.push(label);
    });
  }

  if (showNameLabels) addNameLabels();

  // Build manual focus groups from explicit mesh name lists
  const meshByName = new Map();
  desk.traverse((o) => {
    if (o.isMesh && o.name) meshByName.set(o.name, o);
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

    const helper = new THREE.BoxHelper(groupRoot, 0x00ff00);
    scene.add(helper);
    clickableHelpers.push(helper);
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
}

function onPointerDown(event) {
  if (!clickableRoots.size) return;

  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(pointer, camera);
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
    resetAllFocuses();
    return;
  }

  let root = intersects[0].object;
  while (root && !clickableRoots.has(root)) root = root.parent;
  if (!root) return;

  const original = originals.get(root);
  if (original) {
    const distFromOriginal = root.position.distanceTo(original.position);
    if (distFromOriginal > 0.01) return;
  }

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
});

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  if (clickableHelpers.length) {
    clickableHelpers.forEach((helper) => helper.update());
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
