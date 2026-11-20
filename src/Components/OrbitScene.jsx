import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

function makeStar() {
  const shape = new THREE.Shape();
  const points = [[0, 1.65], [.36, .49], [1.18, .67], [.67, -.05], [1.01, -.98], [.16, -.62], [-.49, -1.36], [-.53, -.43], [-1.53, -.13], [-.64, .23], [-.81, 1.12], [-.26, .66]];
  points.forEach(([x, y], index) => index ? shape.lineTo(x, y) : shape.moveTo(x, y));
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: .29, bevelEnabled: true, bevelThickness: .23, bevelSize: .18, bevelSegments: 5, steps: 1,
  }).center();
}

export default function OrbitScene() {
  const host = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stage = host.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    let renderer;
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2", { alpha: true, antialias: true, powerPreference: "low-power" });
      if (!context) return;
      renderer = new THREE.WebGLRenderer({ canvas, context, alpha: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse.matches ? 1 : 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    stage.prepend(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, .1, 35);
    const environment = new RoomEnvironment();
    const reflections = new THREE.PMREMGenerator(renderer);
    const environmentMap = reflections.fromScene(environment, .045, .1, 100, { size: 128 });
    scene.environment = environmentMap.texture;
    environment.dispose();
    reflections.dispose();

    const sculpture = new THREE.Group();
    const starGeometry = makeStar();
    const chrome = new THREE.MeshPhysicalMaterial({
      color: "#ad86ff", metalness: .83, roughness: .2, clearcoat: .76, iridescence: .45,
    });
    sculpture.add(new THREE.Mesh(starGeometry, chrome));

    const ringGeometry = new THREE.TorusGeometry(1.87, .039, 10, 96);
    const ringMaterial = new THREE.MeshStandardMaterial({ color: "#efe1ff", metalness: .72, roughness: .24 });
    const rings = new THREE.Group();
    const orbit = new THREE.Mesh(ringGeometry, ringMaterial);
    orbit.rotation.set(1.03, -.48, -.58);
    orbit.scale.y = .9;
    const outer = new THREE.Mesh(ringGeometry, ringMaterial);
    outer.rotation.set(1.19, -.43, -.52);
    outer.scale.set(1.12, 1, .48);
    rings.add(orbit, outer);
    sculpture.add(rings);

    const shardGeometry = new THREE.OctahedronGeometry(1);
    const lime = new THREE.MeshStandardMaterial({ color: "#d5ff57", metalness: .38, roughness: .26 });
    const pink = new THREE.MeshStandardMaterial({ color: "#fc69b7", metalness: .45, roughness: .29 });
    const satellites = [
      [1.69, 1.16, .48, .25, lime],
      [-1.73, -.87, .65, .23, pink],
      [.89, -1.54, .33, .13, ringMaterial],
      [-1.53, 1.23, -.35, .115, ringMaterial],
      [1.96, -.42, -.25, .13, chrome],
    ].map(([x, y, z, size, material], index) => {
      const shard = new THREE.Mesh(shardGeometry, material);
      shard.position.set(x, y, z);
      shard.scale.set(size, size * 1.65, size);
      shard.rotation.z = index * .65;
      scene.add(shard);
      return { shard, y, index };
    });

    const keyLight = new THREE.DirectionalLight("#fff5fd", 2.8);
    keyLight.position.set(-3, 5, 4);
    const rimLight = new THREE.PointLight("#ea53fe", 24);
    rimLight.position.set(2, -.9, 2.5);
    scene.add(sculpture, keyLight, rimLight);

    let frame = 0;
    let visible = true;
    let lost = false;
    let elapsed = 0;
    let previousTime;
    let drag = null;
    let rotationX = 0;
    let rotationY = 0;
    let pointerX = 0;
    let pointerY = 0;
    let scroll = 0;

    function draw(time = performance.now()) {
      frame = 0;
      if (lost) return;
      const delta = Math.min((time - (previousTime ?? time)) / 1000, .045);
      previousTime = time;
      const motion = !reduced.matches;
      if (motion) elapsed += delta;
      const ease = motion && delta ? 1 - Math.exp(-delta * 8) : 1;
      const x = -.15 + rotationX + (motion ? pointerY * .24 : 0);
      const y = -.42 + rotationY + (motion ? pointerX * .38 + Math.sin(elapsed * .7) * .14 : 0);
      sculpture.rotation.x += (x - sculpture.rotation.x) * ease;
      sculpture.rotation.y += (y - sculpture.rotation.y) * ease;
      sculpture.rotation.z = -.17 + (motion ? Math.sin(elapsed * .6) * .07 : 0);
      sculpture.position.y = .09 + (motion ? Math.sin(elapsed * 1.25) * .14 - scroll * .37 : 0);
      rings.rotation.z = motion ? Math.sin(elapsed * .55) * .14 : 0;
      satellites.forEach(({ shard, y: base, index }) => {
        shard.position.y = base + (motion ? Math.sin(elapsed * 1.4 + index) * .14 : 0);
        shard.rotation.y = index + elapsed * .55;
      });
      camera.position.x += ((motion ? pointerX * .24 : 0) - camera.position.x) * ease;
      camera.position.y += ((motion ? -pointerY * .18 : 0) - camera.position.y) * ease;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      if (visible && !document.hidden && motion) frame = requestAnimationFrame(draw);
    }

    function restart() {
      cancelAnimationFrame(frame);
      previousTime = undefined;
      draw();
    }

    function resize() {
      const { clientWidth, clientHeight } = stage;
      if (!clientWidth || !clientHeight) return;
      camera.aspect = clientWidth / clientHeight;
      camera.position.z = Math.max(6.8, 6.8 / camera.aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight, false);
      restart();
    }

    function onScroll() {
      scroll = Math.max(0, Math.min(1, -stage.getBoundingClientRect().top / stage.clientHeight));
    }

    function onMove(event) {
      if (drag?.id === event.pointerId) {
        rotationY += (event.clientX - drag.x) * .012;
        rotationX = THREE.MathUtils.clamp(rotationX + (event.clientY - drag.y) * .012, -1.4, 1.4);
        drag.x = event.clientX;
        drag.y = event.clientY;
        if (reduced.matches) restart();
      } else if (event.pointerType === "mouse" && !reduced.matches) {
        const bounds = stage.getBoundingClientRect();
        pointerX = THREE.MathUtils.clamp((event.clientX - bounds.left) / bounds.width * 2 - 1, -1, 1);
        pointerY = THREE.MathUtils.clamp((event.clientY - bounds.top) / bounds.height * 2 - 1, -1, 1);
      }
    }

    function onDown(event) {
      if (!event.isPrimary || event.button !== 0) return;
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      stage.setPointerCapture(event.pointerId);
    }

    function onRelease(event) {
      if (drag?.id === event.pointerId) drag = null;
    }

    function onLeave() {
      pointerX = 0;
      pointerY = 0;
    }

    function onKey(event) {
      const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
      if (!direction) return;
      event.preventDefault();
      rotationY += direction[0] * .24;
      rotationX = THREE.MathUtils.clamp(rotationX + direction[1] * .24, -1.4, 1.4);
      if (reduced.matches) restart();
    }

    function onContextLost(event) {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(frame);
      setReady(false);
    }

    function onContextRestored() {
      lost = false;
      resize();
      setReady(true);
    }

    const events = { pointerdown: onDown, pointermove: onMove, pointerup: onRelease, pointercancel: onRelease, lostpointercapture: onRelease, pointerleave: onLeave, keydown: onKey };
    Object.entries(events).forEach(([name, handler]) => stage.addEventListener(name, handler));
    renderer.domElement.addEventListener("webglcontextlost", onContextLost);
    renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", restart);
    reduced.addEventListener("change", restart);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    observer.observe(stage);
    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(stage);
    resize();
    onScroll();
    setReady(true);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", restart);
      reduced.removeEventListener("change", restart);
      Object.entries(events).forEach(([name, handler]) => stage.removeEventListener(name, handler));
      renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
      renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
      [starGeometry, ringGeometry, shardGeometry, chrome, ringMaterial, lime, pink, environmentMap].forEach((resource) => resource.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div ref={host} className="orbit-scene" data-ready={ready} tabIndex={ready ? 0 : undefined}
      aria-hidden={!ready} role="group" aria-label="Interactive 3D sculpture. Drag or use the arrow keys to rotate.">
      {ready && <span className="orbit-hint eyebrow"><span className="drag-hint">Hold &amp; drag</span><span className="keyboard-hint">Arrow keys to rotate</span></span>}
    </div>
  );
}
