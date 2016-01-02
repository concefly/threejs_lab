/**
 * Created by hwj on 2016/1/2.
 */

var staticColor = 0x00ff00;
var activeColor = 0xff0000;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({
    color: staticColor
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 1;

scene.add(mesh);

camera.position.z = 10;

var render = function() {
    requestAnimationFrame(render);

    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children );
    scene.children.map(function(item){
        item.material.color.set(staticColor);
    });
    for ( var i = 0; i < intersects.length; i++ ) {
        intersects[ i ].object.material.color.set( activeColor );
    }

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// 添加鼠标事件
window.addEventListener("mousemove",function(event){
    //mesh.position.x = event.clientX;
    //mesh.position.y = event.clientY;
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
},false);

render();
