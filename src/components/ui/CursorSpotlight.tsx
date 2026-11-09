"use client";

import { useEffect, useRef } from "react";

/**
 * CursorSpotlight — a navy glow that trails the pointer across the page.
 * Pattern borrowed from mdmehedihasansr.vercel.app: rAF-throttled
 * pointermove writes --spot-x / --spot-y CSS vars, and CSS renders a
 * radial-gradient wash at that position. Mouse-only on hover-capable,
 * fine-pointer devices, disabled entirely under prefers-reduced-motion.
 */
export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    // Lerp target for a slightly trailing, silky wash
    let tx = 0, ty = 0, cx = 0, cy = 0, active = false;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.setProperty("--spot-x", `${cx.toFixed(1)}px`);
      el.style.setProperty("--spot-y", `${cy.toFixed(1)}px`);
      raf = active ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      tx = e.clientX;
      ty = e.clientY;
      if (!active) {
        active = true;
        cx = tx;
        cy = ty;
        el.dataset.on = "true";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      active = false;
      delete el.dataset.on;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
      delete el.dataset.on;
    };
  }, []);

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
}
