// Initialization
const scene = new THREE.Scene()
const w = postWidth();
const a = 1; // aspect ratio 1
const h = w/a;
const fov = 70; // Field of View (degrees)
const camera = new THREE.PerspectiveCamera(fov, w/h, 1, 100);

// returns the width of the article.post element, used in resizing
function postWidth() {
    const leftPadding = 10;
    return document.getElementsByClassName("post")[0].offsetWidth - leftPadding*2;
}
// handle resizing
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = a;
    camera.updateProjectionMatrix();// what is this?
    const w = postWidth();
    const h = w/a;
    renderer.setSize(w, h);
    controls.handleResize();
}

var axisHelper = new THREE.AxisHelper( 15 );
scene.add(axisHelper);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
const vfCanvas = document.getElementById("vector-fields");
vfCanvas.appendChild(renderer.domElement);

vfCanvas.onmouseenter = function() {
    controls.enabled = true;
}
vfCanvas.onmouseleave = function() {
    controls.enabled = false;
}

function vectorField(v) {
    const x = v.x;
    const y = v.y;
    const z = v.z;
    var fv = new THREE.Vector3(x + 1/x, y + 1/y, z + 1/z);
    return fv;
}

// distance between v and vf
function d(v, vf) {
    const dx = v.x-vf.x;
    const dy = v.y-vf.y;
    const dz = v.z-vf.z;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

const vn = 5; // number of vectors along a dimension
const vectors = [];
const hex = 0xffff00;
for(var x = -vn/2; x < vn/2; x += 0.25) {
    for(var y = -vn/2; y < vn/2; y += 0.25) {
        for(var z = -vn/2; z < vn/2; z += 0.25) {
            var v = new THREE.Vector3(x,y,z);
            vectors.push(v);
            var vf = vectorField(v);
            var df = 0.1;
            vf.normalize();
            const arrow = new THREE.ArrowHelper(vf, v, df, 16776960-Math.floor(df));
            scene.add(arrow);
        }
    }
}



// controls
controls = new THREE.TrackballControls(camera);//sets up controls

function animate() {
	requestAnimationFrame( animate );
    controls.update();
	renderer.render(scene, camera);
}
animate();