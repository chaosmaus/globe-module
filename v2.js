<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"
  integrity="sha512-Mf/xUqfWvDIr+1B6zfnIDIiG7XHzyP/guXUWgV6PgaQoIFeXkJQR5XWh9fqAiCiRCpemabt3naV4jhDWVnuYDQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>

<script
  async
  src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"
></script>

<script type="x-shader/x-vertex" id="vertex">
  varying vec2 vertexUV;
  varying vec3 vertexNormal;

  void main(){
      vertexUV = uv;
      vertexNormal = normalize(normalMatrix * normal);;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  }
</script>

<script type="x-shader/x-fragment" id="fragment">
  uniform sampler2D globeTexture;

  varying vec2 vertexUV;
  varying vec3 vertexNormal;


  void main(){

      float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
      vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

      gl_FragColor = vec4(
          atmosphere +
          texture2D(globeTexture, vertexUV).xyz, 1.0);

  }
</script>

<script type="x-shader/x-fragment" id="atmosphereFragment">

  varying vec3 vertexNormal;


  void main(){

      float intensity = pow(0.6 - dot(vertexNormal, vec3(0,0,1.0)), 2.0);

      gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;

  }
</script>

<script type="x-shader/x-fragment" id="atmosphereVertex">

  varying vec3 vertexNormal;

  void main(){
      vertexNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.9 );

  }
</script>

<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.144.0/build/three.module.js"
    }
  }
</script>

<script type="module">
  import * as THREE from "https://unpkg.com/three@0.144.0/build/three.module.js";

  let vertexShader = document.querySelector("#vertex").innerHTML;
  let fragmentShader = document.querySelector("#fragment").innerHTML;
  let atmosphereFragmentShader = document.querySelector(
    "#atmosphereFragment"
  ).innerHTML;
  let atmosphereVertexShader =
    document.querySelector("#atmosphereVertex").innerHTML;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true 
  });
  renderer.setSize(innerWidth - 20, innerHeight - 20 );
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // create a sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load(
            "https://uploads-ssl.webflow.com/630aa08824bca4561dfddb1b/6330f699320e0e8339bc1864_earth-texture-2.jpg"
          ),
        },
      },
    })
  );

  // outer atmosphere

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    })
  );

  atmosphere.scale.set(1.2, 1.2, 1.2);
  scene.add(atmosphere);

  const group = new THREE.Group();
  group.add(sphere);
  scene.add(group);

  //camera is default on center
  camera.position.z = 15;

  const mouse = {
    x: 0,
    y: 0,
  };

  let rotationRate = 0.001;

  addEventListener("mousedown", () => {
    rotationRate = 0;
    addEventListener("mousemove", () => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 + 1;

      // console.log(mouse);
    });
  });

  addEventListener("mouseup", () => {
    rotationRate = 0.001;
    let lastX = (event.clientX / innerWidth) * 2 - 1;
    let lastY = -(event.clientY / innerHeight) * 2 + 1;
    addEventListener("mousemove", () => {
      mouse.x = lastX;
      mouse.y = lastY;

      // console.log(mouse);
    });
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.y += rotationRate;
    gsap.to(group.rotation, {
      x: -mouse.y * 1,
      y: mouse.x * 1,
      duration: 2,
    });
  }

  animate();
</script>
