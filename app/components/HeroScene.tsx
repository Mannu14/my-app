"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface NodeSpec {
  label: string;
  color: number;
  angle: number;
  radius: number;
  height: number;
}

const SATELLITES: NodeSpec[] = [
  { label: "Redis", color: 0xef4444, angle: 0, radius: 2.3, height: 0.6 },
  { label: "MongoDB", color: 0x22c55e, angle: (Math.PI * 2) / 4, radius: 2.3, height: -0.5 },
  { label: "Socket.IO", color: 0x38bdf8, angle: (Math.PI * 4) / 4 / 2, radius: 2.3, height: 0.4 },
  { label: "REST API", color: 0xf59e0b, angle: (Math.PI * 6) / 4 / 2, radius: 2.3, height: -0.3 },
];

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.3, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    const keyLight = new THREE.PointLight(0x8b5cf6, 60, 25);
    keyLight.position.set(4, 4, 6);
    const rimLight = new THREE.PointLight(0x38bdf8, 40, 25);
    rimLight.position.set(-4, -2, -4);
    scene.add(ambient, keyLight, rimLight);

    const network = new THREE.Group();
    scene.add(network);

    // Core node ("Node.js")
    const coreGeometry = new THREE.IcosahedronGeometry(0.55, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.55,
      roughness: 0.25,
      metalness: 0.4,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    network.add(core);

    const coreGlow = new THREE.PointLight(0xa855f7, 25, 6);
    core.add(coreGlow);

    // Satellite nodes + connecting lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.35,
    });

    const satellites = SATELLITES.map((spec) => {
      const geometry = new THREE.SphereGeometry(0.16, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: spec.color,
        emissive: spec.color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      network.add(mesh);

      const linePoints = [core.position.clone(), mesh.position.clone()];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      network.add(line);

      return { spec, mesh, line, lineGeometry };
    });

    // Ambient particle field
    const particleCount = 300;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.018,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // HTML labels for core + satellites, positioned via screen projection
    const labelLayer = document.createElement("div");
    labelLayer.style.cssText =
      "position:absolute;inset:0;pointer-events:none;overflow:hidden;";
    container.appendChild(labelLayer);

    const makeLabel = (text: string, accent: string) => {
      const el = document.createElement("div");
      el.textContent = text;
      el.style.cssText = `position:absolute;top:0;left:0;transform:translate(-50%,-50%);
        font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;
        color:${accent};background:rgba(10,10,14,0.55);border:1px solid rgba(255,255,255,0.12);
        padding:2px 8px;border-radius:9999px;white-space:nowrap;backdrop-filter:blur(4px);
        opacity:0;transition:opacity 0.4s ease;`;
      labelLayer.appendChild(el);
      requestAnimationFrame(() => (el.style.opacity = "1"));
      return el;
    };

    const coreLabel = makeLabel("Node.js", "#c4b5fd");
    const satelliteLabels = satellites.map((s) =>
      makeLabel(s.spec.label, `#${s.spec.color.toString(16).padStart(6, "0")}`)
    );

    const projectToScreen = (obj: THREE.Object3D, el: HTMLDivElement) => {
      const vector = obj.getWorldPosition(new THREE.Vector3()).project(camera);
      const x = (vector.x * 0.5 + 0.5) * container.clientWidth;
      const y = (-vector.y * 0.5 + 0.5) * container.clientHeight;
      el.style.transform = `translate(-50%, -140%) translate(${x}px, ${y}px)`;
    };

    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight || 1;
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      network.rotation.y = elapsed * 0.15;
      network.rotation.x = THREE.MathUtils.lerp(
        network.rotation.x,
        pointerY * 0.25,
        0.04
      );
      network.rotation.z = THREE.MathUtils.lerp(
        network.rotation.z,
        pointerX * -0.12,
        0.04
      );

      core.rotation.y += 0.004;
      core.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.04);

      satellites.forEach(({ spec, mesh, lineGeometry }, i) => {
        const orbit = spec.angle + elapsed * 0.35;
        mesh.position.set(
          Math.cos(orbit) * spec.radius,
          spec.height + Math.sin(elapsed * 1.2 + i) * 0.15,
          Math.sin(orbit) * spec.radius
        );
        const positions = lineGeometry.attributes.position
          .array as Float32Array;
        positions[3] = mesh.position.x;
        positions[4] = mesh.position.y;
        positions[5] = mesh.position.z;
        lineGeometry.attributes.position.needsUpdate = true;
      });

      particles.rotation.y += 0.0005;

      projectToScreen(core, coreLabel);
      satellites.forEach(({ mesh }, i) => projectToScreen(mesh, satelliteLabels[i]));

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      satellites.forEach(({ mesh, lineGeometry }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        lineGeometry.dispose();
      });
      lineMaterial.dispose();
      renderer.dispose();
      container.removeChild(labelLayer);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="relative h-full w-full" />;
}
