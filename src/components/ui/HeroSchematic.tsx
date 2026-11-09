/**
 * HeroSchematic — orthographic "blueprint" line-art of a cloud
 * infrastructure topology: control-plane cloud, PCB traces with
 * vias, a compute chip and a labeled server rack.
 * Pure decoration; strokes are navy at reduced opacity.
 */
export default function HeroSchematic({ className = "" }: { className?: string }) {
  const mono = { fontFamily: "var(--font-jbmono)", letterSpacing: "0.12em" } as React.CSSProperties;

  return (
    <svg
      viewBox="0 0 560 360"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* ── Registration targets ─────────────────────── */}
      <g stroke="#1F4E79" strokeWidth="1" opacity="0.3">
        <path d="M40 32v16M32 40h16" />
        <path d="M524 36v16M516 44h16" />
        <path d="M48 300v16M40 308h16" />
      </g>

      {/* ── Trace baselines (static, hairline) ───────── */}
      <g stroke="#C9C9C2" strokeWidth="1">
        <path d="M120 118v60h-30v84" />
        <path d="M128 70h204v108h64" />
        <path d="M450 300h90" />
      </g>

      {/* ── Data packets (animated dashes) ───────────── */}
      <g
        stroke="#1F4E79"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 11"
        className="blueprint-dash"
        opacity="0.75"
      >
        <path d="M120 118v60h-30v84" />
        <path d="M128 70h204v108h64" />
      </g>

      {/* ── Vias & junctions ─────────────────────────── */}
      <g fill="#F8F8F5" stroke="#1F4E79" strokeWidth="1.2">
        <circle cx="90" cy="178" r="3.2" />
        <circle cx="332" cy="178" r="3.2" />
        <circle cx="396" cy="178" r="3.2" />
      </g>
      <rect x="447" y="297" width="6" height="6" fill="#1F4E79" opacity="0.5" />

      {/* ── Control-plane cloud ──────────────────────── */}
      <g transform="translate(24,26) scale(4.4)">
        <path
          d="M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 9 19h8.5z"
          stroke="#1F4E79"
          strokeWidth="1.1"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </g>

      {/* ── Compute chip with pins ───────────────────── */}
      <g transform="translate(70,262)" stroke="#1F4E79">
        <rect x="0" y="0" width="40" height="40" rx="2" strokeWidth="1.2" opacity="0.45" />
        <rect x="9" y="9" width="22" height="22" strokeWidth="0.9" opacity="0.25" />
        <path d="M14 0v-8M26 0v-8M14 40v8M26 40v8" strokeWidth="1" opacity="0.4" />
      </g>

      {/* ── Server rack (front elevation) ────────────── */}
      <g transform="translate(396,120)" stroke="#1F4E79">
        {/* frame */}
        <rect x="0" y="0" width="140" height="180" rx="3" strokeWidth="1.3" opacity="0.5" />
        {/* drive bays */}
        {[16, 56, 96].map((y) => (
          <g key={y} opacity="0.35" strokeWidth="1">
            <rect x="10" y={y + 6} width="76" height="26" rx="1.5" />
            <circle cx="20" cy={y + 19} r="2.5" />
            <rect x="98" y={y + 16} width="9" height="5" fill="#1F4E79" stroke="none" opacity="0.55" />
            <rect x="114" y={y + 16} width="9" height="5" fill="#1F4E79" stroke="none" opacity="0.25" />
          </g>
        ))}
        {/* fans */}
        <g opacity="0.3" strokeWidth="1">
          <circle cx="44" cy="158" r="15" />
          <circle cx="44" cy="158" r="7" />
          <circle cx="102" cy="158" r="15" />
          <circle cx="102" cy="158" r="7" />
        </g>
      </g>

      {/* ── Labels with leader lines ─────────────────── */}
      <g stroke="#C9C9C2" strokeWidth="0.8">
        <path d="M120 44h-20" />
        <path d="M396 306l-8 16" />
      </g>
      <g fill="#7A838C" style={mono} fontSize="9" className="uppercase">
        <text x="62" y="128" opacity="0.75">CONTROL PLANE</text>
        <text x="50" y="326" opacity="0.75">SYS.01</text>
        <text x="378" y="338" opacity="0.75">RACK-A</text>
        <text x="360" y="56" opacity="0.75">UPLINK ▲</text>
      </g>
    </svg>
  );
}
