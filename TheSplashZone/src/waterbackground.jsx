// WaterSceneWorking.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";

export default function WaterSceneWorking() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let rafId;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0e8ff); // bright sky

    // Camera (above water, angled down)
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      20000
    );
    camera.position.set(0, 30, 100);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(100, 200, 100);
    scene.add(dirLight);
    const amb = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(amb);

    // Helper to start fallback (simple plane) animation
    const startFallback = () => {
      const planeGeo = new THREE.PlaneGeometry(10000, 10000, 64, 64);
      const planeMat = new THREE.MeshPhongMaterial({
        color: 0x1ca3ec,
        shininess: 60,
        specular: 0x88ccff,
      });
      const plane = new THREE.Mesh(planeGeo, planeMat);
      plane.rotation.x = -Math.PI / 2;
      scene.add(plane);

      // animate simple wave by modifying vertices (only if geometry is non-indexed)
      const pos = plane.geometry.attributes.position;
      const basePositions = new Float32Array(pos.array); // copy original
      const clock = new THREE.Clock();

      const animateFallback = () => {
        rafId = requestAnimationFrame(animateFallback);
        const t = clock.getElapsedTime();
        for (let i = 0; i < pos.count; i++) {
          const ix = i * 3;
          const x = basePositions[ix];
          const y = basePositions[ix + 1];
          pos.array[ix + 2] =
            Math.sin((x + t * 4) * 0.002) * 1.2 + Math.cos((y + t * 4) * 0.002) * 0.6;
        }
        pos.needsUpdate = true;
        renderer.render(scene, camera);
      };
      animateFallback();
    };

    // Try to load the water normals and create Water surface
    const loader = new THREE.TextureLoader();
    // (set crossOrigin if your environment needs it)
    loader.load(
      "https://threejs.org/examples/textures/waternormals.jpg",
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        try {
          const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
          const water = new Water(waterGeometry, {
            textureWidth: 1024,
            textureHeight: 1024,
            waterNormals: texture,
            sunDirection: dirLight.position.clone().normalize(),
            sunColor: 0xffffff,
            waterColor: 0x1ca3ec, // tropical turquoise
            distortionScale: 3.7,
            fog: false,
          });

          water.rotation.x = -Math.PI / 2;
          scene.add(water);

          const clock = new THREE.Clock();
          const render = () => {
            rafId = requestAnimationFrame(render);
            // update time uniform used by Water shader
            if (water.material && water.material.uniforms && water.material.uniforms.time) {
              water.material.uniforms.time.value += clock.getDelta();
            }
            renderer.render(scene, camera);
          };
          render();
        } catch (err) {
          console.error("Failed to create Water object, falling back to simple plane:", err);
          startFallback();
        }
      },
      undefined,
      (err) => {
        console.error("Failed to load water normals texture (CORS/network?). Falling back.", err);
        startFallback();
      }
    );

    // Resize handling
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      // remove renderer element
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // dispose renderer to free resources
      renderer.dispose();
    };
  }, []);

  return (
  <div
    ref={mountRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none", // so UI elements still clickable
    }}
  />
);
}
