"use client";

import { useEffect, useRef } from "react";

export default function IDBadge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* ── Smooth 3D tilt on mouse move ── */
  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!container || !card || !glow) return;

    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      card.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg) translateZ(20px)`;
      glow.style.background = `radial-gradient(circle at ${50 + currentX * 2}% ${50 + currentY * 2}%, rgba(59,130,246,0.35) 0%, transparent 65%)`;
      raf = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = ((e.clientX - cx) / rect.width) * 18;
      targetY = ((e.clientY - cy) / rect.height) * 18;
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    raf = requestAnimationFrame(animate);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "800px", width: "260px", height: "340px" }}
      aria-hidden="true"
    >
      {/* ── Ambient glow rings ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute rounded-full border border-blue-500/10 animate-[spin_18s_linear_infinite]"
          style={{ width: "320px", height: "320px" }}
        />
        <div
          className="absolute rounded-full border border-blue-400/8 animate-[spin_12s_linear_infinite_reverse]"
          style={{ width: "280px", height: "280px" }}
        />
        {/* Corner accent dots on outer ring */}
        <div className="absolute" style={{ width: "320px", height: "320px" }}>
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.9)]"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateX(160px) translateY(-50%)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Card ── */}
      <div
        ref={cardRef}
        className="relative will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.3s ease",
          width: "220px",
        }}
      >
        {/* Dynamic glow overlay */}
        <div
          ref={glowRef}
          className="absolute -inset-4 rounded-3xl pointer-events-none z-0 blur-xl opacity-60"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.35) 0%, transparent 65%)",
          }}
        />

        {/* Card frame */}
        <div
          className="relative z-10 rounded-2xl overflow-hidden border border-blue-500/20 bg-[#0E1219]"
          style={{
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Scanline texture overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)",
            }}
          />

          {/* Top notch bar */}
          <div className="flex justify-center py-2 bg-[#0A0D12] border-b border-white/5">
            <div className="w-10 h-1 rounded-full bg-gray-700" />
          </div>

          {/* Photo area with float animation */}
          <div
            className="relative overflow-hidden"
            style={{
              height: "260px",
              backgroundImage: "url('/bg-hero-card.jpg')",
              backgroundPosition: "center 5%",
              backgroundSize: "cover",
              animation: "hero-float 5s ease-in-out infinite",
            }}
          >
            {/* Blue tint overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 60%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #0E1219 0%, rgba(14,18,25,0.2) 40%, transparent 100%)",
              }}
            />
          </div>

          {/* Card footer */}
          <div className="px-4 py-3 flex items-center justify-between bg-[#0E1219]">
            <div>
              <p className="font-mono font-black text-[11px] text-gray-100 tracking-[0.14em] uppercase">
                SAYEED
              </p>
              <p className="font-mono text-[9px] text-gray-500 tracking-wider mt-0.5">
                CSE · PREMIER UNIV.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="px-2.5 py-1 bg-blue-600 rounded text-[9px] font-bold text-white font-mono tracking-wide uppercase shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                Cloud Eng.
              </span>
              {/* Live status dot */}
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="font-mono text-[8px] text-emerald-500 tracking-wider">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: scale(1.02) translateY(0px); }
          50%       { transform: scale(1.05) translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
