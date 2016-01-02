/**
 * Created by hwj on 2016/1/2.
 */

var staticColor = 0x00ff00;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000);
var control = new THREE.OrbitControls(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({
    color: staticColor
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;

scene.add(mesh);

camera.position.z = 10;


var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera);
};

// 控制器事件
control.addEventListener("change",function(){
    control.update();
});

render();
