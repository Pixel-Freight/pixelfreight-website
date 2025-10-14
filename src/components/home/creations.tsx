"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Link from "next/link";
import Image from "next/image";

interface CreationsProps {
  enable3D?: boolean;
}

export function Creations({ enable3D = true }: CreationsProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!enable3D || !isClient || !mountRef.current) return;

    // Dynamically import Three.js only when needed
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: any;
    let animationFrameId: number;

    const init3D = async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import(
        "three/examples/jsm/controls/OrbitControls.js"
      );

      // Initialize Three.js scene
      scene = new THREE.Scene();
      const container = mountRef.current!;
      const { width, height } = container.getBoundingClientRect();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(-9, 8, 13);
      camera.lookAt(0, 0, 0); // Make camera look at the center of the scene

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);

      // Clear any existing content
      if (mountRef.current) {
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
        mountRef.current.appendChild(renderer.domElement);
      }

      // Setup OrbitControls with auto-rotation but disable user interaction
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableRotate = false;
      controls.target.set(0, 0, 0);

      // Create terrain
      const group = createTerrain(THREE);
      scene.add(group);

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        if (!mountRef.current) return;
        const { width, height } = mountRef.current.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };
      window.addEventListener("resize", handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        if (renderer) {
          renderer.dispose();
        }
        if (controls && typeof controls.dispose === "function") {
          controls.dispose();
        }
        if (
          mountRef.current &&
          mountRef.current.contains(renderer.domElement)
        ) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    };

    init3D().catch(console.error);

    // Cleanup function for the effect
    return () => {
      cancelAnimationFrame(animationFrameId!);
    };
  }, [enable3D, isClient]);

  // Function to create terrain (moved outside for better organization)
  const createTerrain = (THREE: any) => {
    const group = new THREE.Group();
    const rows = 50;
    const cols = 50;
    const spacing = 1.5;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col - cols / 2) * spacing;
        const z = (row - rows / 2) * spacing;

        // Multi-octave fake noise
        let y = 0;
        let amplitude = 5;
        let frequency = 0.1;
        for (let o = 0; o < 4; o++) {
          const nx = x * frequency + o * 10;
          const nz = z * frequency + o * 10;
          y += (Math.sin(nx) * Math.cos(nz * 1.3) + 1) * 0.5 * amplitude;
          amplitude *= 0.4;
          frequency *= 2;
        }
        y += (Math.random() - 0.5) * 0.5; // random offset

        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: "#7443f4" });
        const dot = new THREE.Mesh(geometry, material);

        dot.position.set(x, y, z);
        group.add(dot);
      }
    }
    return group;
  };

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-18 py-20 flex flex-col gap-12">
      {/* Text Section */}
      <div className="w-full text-right space-y-6"></div>

      {/* 3D Terrain Section */}
      <div className="w-full h-[300px] md:h-[500px] relative">
        {enable3D ? (
          <div ref={mountRef} className="w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-black/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center p-4">3D Terrain Disabled</p>
          </div>
        )}
        {/* Overlay CTA buttons (images) */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="pointer-events-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4"></div>
        </div>
      </div>
    </section>
  );
}
