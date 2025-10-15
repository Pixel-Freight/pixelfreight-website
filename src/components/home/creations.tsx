"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Creations({ enable3D = true }: { enable3D?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!enable3D || !isClient || !mountRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let mesh: THREE.InstancedMesh;
    let animationId: number;
    const clock = new THREE.Clock();

    const init3D = async () => {
      scene = new THREE.Scene();
      const container = mountRef.current!;
      const { width, height } = container.getBoundingClientRect();

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(-9, 8, 13);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      mesh = createInstancedTerrain(THREE, width);
      scene.add(mesh);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime(); // ⏱ delta-based
        mesh.rotation.y = t * 0.1; // radians per second
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        const { width, height } = container.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      window.addEventListener("resize", handleResize);

      const handleVisibility = () => {
        if (document.hidden) cancelAnimationFrame(animationId);
        else animate();
      };
      document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("visibilitychange", handleVisibility);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        if (mountRef.current?.contains(renderer.domElement))
          mountRef.current.removeChild(renderer.domElement);
      };
    };

    init3D().catch(console.error);
  }, [enable3D, isClient]);

  function createInstancedTerrain(THREE: any, width: number) {
    const count = width < 600 ? 500 : width < 900 ? 1000 : 2000;
    const geometry = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const material = new THREE.MeshBasicMaterial({ color: "#7443f4" });
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    const dummy = new THREE.Object3D();
    const grid = Math.sqrt(count);
    const spacing = 1.5;

    let i = 0;
    for (let x = 0; x < grid; x++) {
      for (let z = 0; z < grid; z++) {
        if (i >= count) break;
        const px = (x - grid / 2) * spacing;
        const pz = (z - grid / 2) * spacing;
        const py =
          Math.sin(px * 0.15) * Math.cos(pz * 0.2) * 3 +
          (Math.random() - 0.5) * 0.2;
        dummy.position.set(px, py, pz);
        dummy.updateMatrix();
        mesh.setMatrixAt(i++, dummy.matrix);
      }
    }
    return mesh;
  }

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[520px] lg:h-[600px]">
        {enable3D ? (
          <div ref={mountRef} className="w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            3D Terrain Disabled
          </div>
        )}
      </div>
    </section>
  );
}
