import { useEffect, useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export default function PointerEffects() {
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;
    const enabled = window.matchMedia("(any-pointer: fine) and (prefers-reduced-motion: no-preference)");
    let x = 0;
    let y = 0;
    let currentX = 0;
    let currentY = 0;
    let angle = 0;
    let frame = 0;
    let active = false;
    let magnetic = null;

    function clearMagnet() {
      magnetic?.style.removeProperty("--magnetic-x");
      magnetic?.style.removeProperty("--magnetic-y");
      magnetic = null;
    }

    function animate() {
      frame = 0;
      if (!active) return;
      const dx = x - currentX;
      const dy = y - currentY;
      currentX += dx * .25;
      currentY += dy * .25;
      if (Math.hypot(dx, dy) > 2) {
        const target = Math.atan2(dy, dx) * 180 / Math.PI + 45;
        angle += (((target - angle) % 360 + 540) % 360 - 180) * .2;
      }
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      cursor.style.setProperty("--cursor-angle", `${angle}deg`);
      if (Math.abs(dx) + Math.abs(dy) > .2) frame = requestAnimationFrame(animate);
    }

    function hide() {
      active = false;
      cursor.removeAttribute("data-visible");
      clearMagnet();
      cancelAnimationFrame(frame);
      frame = 0;
    }

    function move(event) {
      if (!enabled.matches || event.pointerType !== "mouse") {
        if (active) hide();
        return;
      }
      x = event.clientX;
      y = event.clientY;
      if (!active) {
        currentX = x;
        currentY = y;
        active = true;
        cursor.dataset.visible = "";
      }
      const target = event.target;
      cursor.dataset.mode = target.closest(".orbit-scene[data-ready=true]") ? "drag"
        : target.closest("a,button,summary") ? "action" : "default";
      const next = target.closest("[data-magnetic]");
      if (next !== magnetic) clearMagnet();
      if (next) {
        magnetic = next;
        const bounds = next.getBoundingClientRect();
        next.style.setProperty("--magnetic-x", `${(x - bounds.left - bounds.width / 2) * .12}px`);
        next.style.setProperty("--magnetic-y", `${(y - bounds.top - bounds.height / 2) * .16}px`);
      }
      if (!frame) frame = requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", hide, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    enabled.addEventListener("change", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
      enabled.removeEventListener("change", hide);
      hide();
    };
  }, []);

  return <div ref={ref} className="pointer-layer" aria-hidden="true"><span className="pointer-ring"><FaLocationArrow /></span><span className="pointer-dot" /></div>;
}
