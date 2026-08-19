"use client";

import { useEffect, useRef } from "react";

/* ── Swing trigger helper ────────────────────
   Forces a CSS animation restart by removing
   the animation, triggering a reflow, then
   reapplying — no React remount needed.
─────────────────────────────────────────────── */
function triggerSwing(el: HTMLElement) {
  el.style.animation = "none";
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  el.offsetHeight; // synchronous layout reflow — resets animation
  el.style.animation =
    "badge-swing 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) forwards";
}

export default function IDBadge() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // ── 1. Initial swing 600ms after mount ──
    const initialTimer = setTimeout(() => triggerSwing(card), 600);

    // ── 2. Re-swing on scroll (debounced with 3s cooldown) ──
    let lastScrollY = window.scrollY;
    let onCooldown = false;

    const onScroll = () => {
      if (onCooldown) return;
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta > 80) {
        lastScrollY = window.scrollY;
        if (cardRef.current) triggerSwing(cardRef.current);
        onCooldown = true;
        setTimeout(() => {
          onCooldown = false;
          lastScrollY = window.scrollY;
        }, 3200);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center" aria-hidden="true">
      {/* ── Lanyard string ── */}
      <div className="flex flex-col items-center" aria-hidden="true">
        {/* Metal clip */}
        <div className="w-7 h-3 rounded bg-gray-600 border border-gray-500 shadow-sm" />
        {/* String */}
        <div
          className="w-px bg-gradient-to-b from-gray-500 to-gray-700"
          style={{ height: "18px" }}
        />
      </div>

      {/*
       * ── Animated card pivot point ──
       * transform-origin: top center makes it swing like a real badge
       * hanging from the clip above.
       */}
      <div
        ref={cardRef}
        style={{ transformOrigin: "top center" }}
        className="will-change-transform"
      >
        {/* ── Card frame ── */}
        <div
          className="w-[230px] rounded-2xl overflow-hidden border-2 border-gray-600 bg-elevated"
          style={{
            boxShadow:
              "0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/*
           * ── Photo area ──
           * Shows /public/photo.jpg via CSS background-image.
           * Falls back to subtle "S" monogram when photo is absent.
           */}
          <div
            className="id-card-photo relative w-full overflow-hidden"
            style={{
              height: "280px",
              backgroundImage: "url('/bg-hero-card.jpg')",
              backgroundPosition: "center 5%",
              backgroundSize: "cover",
            }}
          >
            {/* Monogram fallback (shown when no photo) */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <span
                className="font-mono font-black text-blue-500/10 leading-none"
                style={{ fontSize: "6rem" }}
              >
                S
              </span>
            </div>

            {/* Bottom gradient — smooth transition into card footer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #141922 0%, rgba(20,25,34,0.4) 45%, transparent 100%)",
              }}
            />
          </div>

          {/* ── Card footer strip ── */}
          <div className="bg-elevated px-3 py-2.5 flex items-center justify-between">
            <span className="font-mono font-bold text-[11px] text-gray-200 tracking-[0.12em] uppercase">
              SAYEED
            </span>
            <span className="px-2.5 py-1 bg-blue-600 rounded text-[10px] font-bold text-white font-mono tracking-wide uppercase">
              Cloud Eng.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
