var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material)
    {

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;


    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    scene.add(cube);
    return(cube);
}
function init()
 {

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    Cubo = []; 
    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Lambert', false));
    Cubo.push(cubo(4, 4, 4, 0x00FFFF, 'Standard', false));
    Cubo.push(cubo(4, 4, 4, 0xFFFFFF, 'Phong', false));
    Cubo.push(cubo(4, 4, 4, 0xFF00FF, 'Physical', false));
    Cubo.push(cubo(4, 4, 4, 0xFF0000, 'Basic', false));

    Cubo[0].position.set(0, 2, 0);
    Cubo[1].position.set(0, 6, 0);
    Cubo[2].position.set(0, 10, 0);
    Cubo[3].position.set(0, 14, 0);
    Cubo[4].position.set(0, 18, 0);

    light = new THREE.PointLight(0xFFFF00);  
    light.position.set( -10, 15, 15 );            
    scene.add( light );

    
    camera.position.set(-35, 20, 45);
    camera.lookAt(scene.position);

    
    document.getElementById("webgl-output").appendChild(renderer.domElement);

   
    renderer.render(scene, camera);
}