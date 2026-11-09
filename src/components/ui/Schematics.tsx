/**
 * Schematics — per-section blueprint line-art decorations.
 * One shared visual language with HeroSchematic: navy hairlines,
 * orthographic/isometric forms, mono labels, occasional data-packet
 * dash animation. All decorative (aria-hidden, pointer-events-none).
 */

const NAVY = "#1F4E79";
const GRAY = "#C9C9C2";
const FAINT = "#7A838C";
const PAPER = "#F8F8F5";

const mono = {
  fontFamily: "var(--font-jbmono)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
} as React.CSSProperties;

type Props = { className?: string };

/* ── Roadmap: isometric platforms ascending with an axis ── */
export function IsoSteps({ className }: Props) {
  return (
    <svg viewBox="0 0 220 200" fill="none" className={className} aria-hidden="true" focusable="false">
      {/* platforms */}
      <g stroke={NAVY} strokeWidth="1.1" opacity="0.45">
        <path d="M110 22L170 50L110 78L50 50Z" opacity="0.35" />
        <path d="M110 62L170 90L110 118L50 90Z" opacity="0.5" />
        <path d="M110 102L170 130L110 158L50 130Z" opacity="0.7" />
      </g>
      {/* vertical axis with arrowhead */}
      <path d="M110 152V30" stroke={NAVY} strokeWidth="1" opacity="0.5" className="blueprint-dash" />
      <path d="M104 38L110 29L116 38" stroke={NAVY} strokeWidth="1.2" opacity="0.6" />
      {/* stage nodes */}
      <circle cx="110" cy="118" r="2.5" fill={NAVY} opacity="0.6" />
      <circle cx="110" cy="78" r="2.5" fill={PAPER} stroke={NAVY} strokeWidth="1" opacity="0.6" />
      {/* stage labels */}
      <g fill={FAINT} style={mono} fontSize="9">
        <text x="178" y="134" opacity="0.8">01</text>
        <text x="178" y="94" opacity="0.8">02</text>
        <text x="178" y="54" opacity="0.8">03</text>
      </g>
    </svg>
  );
}

/* ── Stack: bus-connected chip grid ── */
export function ChipGrid({ className }: Props) {
  const chip = (x: number, y: number, hot?: boolean) => (
    <g key={`${x}-${y}`} stroke={NAVY} opacity="0.42" strokeWidth="1">
      <rect x={x} y={y} width="56" height="56" rx="2" />
      <rect
        x={x + 8} y={y + 8} width="40" height="40"
        strokeWidth="0.9" opacity="0.6"
        fill={hot ? "rgba(31,78,121,0.12)" : "none"}
      />
      <path
        d={`M${x + 14} ${y}v-7M${x + 28} ${y}v-7M${x + 42} ${y}v-7M${x + 14} ${y + 56}v7M${x + 28} ${y + 56}v7M${x + 42} ${y + 56}v7`}
        strokeWidth="1"
        opacity="0.8"
      />
    </g>
  );
  return (
    <svg viewBox="0 0 240 156" fill="none" className={className} aria-hidden="true" focusable="false">
      {chip(16, 16, true)}
      {chip(136, 16)}
      {chip(16, 84)}
      {chip(136, 84)}
      {/* bus traces */}
      <g stroke={GRAY} strokeWidth="1">
        <path d="M72 44H136M72 112H136M44 72v12M164 72v12" />
      </g>
      {/* packets on the bus */}
      <path d="M72 44H136M164 72v12" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 10" opacity="0.7" className="blueprint-dash" />
      {/* vias */}
      <g fill={PAPER} stroke={NAVY} strokeWidth="1" opacity="0.7">
        <circle cx="44" cy="72" r="2.6" />
        <circle cx="164" cy="72" r="2.6" />
      </g>
      <g fill={FAINT} style={mono} fontSize="9">
        <text x="88" y="36" opacity="0.8">BUS-01</text>
      </g>
    </svg>
  );
}

/* ── Activities: hub-and-spoke event network ── */
export function StarNetwork({ className }: Props) {
  const sats = ["36,34", "208,42", "222,126", "120,156", "24,126"];
  return (
    <svg viewBox="0 0 240 170" fill="none" className={className} aria-hidden="true" focusable="false">
      {/* spokes */}
      <g stroke={GRAY} strokeWidth="1">
        {sats.map((p) => {
          const [x, y] = p.split(",").map(Number);
          return <path key={p} d={`M120 80L${x} ${y}`} />;
        })}
      </g>
      {/* active link */}
      <path d="M120 80L222 126" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 10" opacity="0.7" className="blueprint-dash" />
      {/* satellites */}
      <g fill={PAPER} stroke={NAVY} strokeWidth="1" opacity="0.55">
        {sats.map((p) => {
          const [x, y] = p.split(",").map(Number);
          return <circle key={p} cx={x} cy={y} r="5.5" />;
        })}
      </g>
      {/* hub with orbit ring */}
      <circle cx="120" cy="80" r="30" stroke={GRAY} strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />
      <circle cx="120" cy="80" r="15" fill={PAPER} stroke={NAVY} strokeWidth="1.2" opacity="0.6" />
      <circle cx="120" cy="80" r="6" stroke={NAVY} strokeWidth="1" opacity="0.45" />
      <g fill={FAINT} style={mono} fontSize="9">
        <text x="152" y="106" opacity="0.85">HUB</text>
      </g>
    </svg>
  );
}

/* ── Contact: terminal plate with blinking caret ── */
export function TerminalPlate({ className }: Props) {
  return (
    <svg viewBox="0 0 260 168" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect x="0.5" y="0.5" width="259" height="167" rx="6" stroke={NAVY} strokeWidth="1.1" opacity="0.45" />
      <path d="M0.5 30H259.5" stroke={NAVY} strokeWidth="0.9" opacity="0.3" />
      <g stroke={NAVY} strokeWidth="1" opacity="0.5">
        <circle cx="16" cy="15" r="3.5" fill={NAVY} stroke="none" opacity="0.55" />
        <circle cx="32" cy="15" r="3.5" />
        <circle cx="48" cy="15" r="3.5" />
      </g>
      <g style={mono} fontSize="10">
        <text x="16" y="54" fill={NAVY} opacity="0.75">$<tspan fill={FAINT} opacity="0.85"> whoami</tspan></text>
        <text x="16" y="76" fill={FAINT}>sayeed · final-year cse</text>
        <text x="16" y="102" fill={NAVY} opacity="0.75">$<tspan fill={FAINT} opacity="0.85"> uptime</tspan></text>
        <text x="16" y="124" fill={FAINT}>client work 3+yrs · linux daily</text>
        <text x="16" y="150" fill={NAVY} opacity="0.75">$</text>
      </g>
      <rect x="26" y="140" width="9" height="12" fill={NAVY} opacity="0.7" className="terminal-caret" />
    </svg>
  );
}

/* ── Experience: org-chart tree ── */
export function OrgTree({ className }: Props) {
  return (
    <svg viewBox="0 0 240 130" fill="none" className={className} aria-hidden="true" focusable="false">
      <g stroke={GRAY} strokeWidth="1">
        <path d="M98 21h-0M120 34v18M40 52h160M40 52v14M200 52v14" />
        <path d="M40 92v12H24M200 92v12h16" />
      </g>
      {/* root + children */}
      <g stroke={NAVY} strokeWidth="1.1" opacity="0.5">
        <rect x="98" y="8" width="44" height="26" rx="3" />
        <rect x="18" y="66" width="44" height="26" rx="3" opacity="0.75" />
        <rect x="178" y="66" width="44" height="26" rx="3" opacity="0.75" />
      </g>
      {/* leaves */}
      <g fill={PAPER} stroke={NAVY} strokeWidth="1" opacity="0.5">
        <circle cx="24" cy="112" r="5" />
        <circle cx="216" cy="112" r="5" />
      </g>
      {/* packet down the stem */}
      <path d="M120 34v18" stroke={NAVY} strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 8" opacity="0.7" className="blueprint-dash" />
      <g fill={FAINT} style={mono} fontSize="9">
        <text x="150" y="24" opacity="0.85">ORG.01</text>
      </g>
    </svg>
  );
}

/* ── Education: certified seal with ribbons ── */
export function DegreeSeal({ className }: Props) {
  return (
    <svg viewBox="0 0 200 240" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="100" cy="88" r="58" stroke={NAVY} strokeWidth="1.2" opacity="0.45" />
      <circle cx="100" cy="88" r="46" stroke={NAVY} strokeWidth="1" strokeDasharray="2 5" opacity="0.4" />
      <path d="M78 90l15 15 30-33" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
      {/* ribbon tails */}
      <g stroke={NAVY} strokeWidth="1.1" opacity="0.4">
        <path d="M84 143L72 214L93 199Z" />
        <path d="M116 143L128 214L107 199Z" />
      </g>
      <path d="M84 143h32" stroke={NAVY} strokeWidth="1" opacity="0.3" />
      <g fill={FAINT} style={mono} fontSize="9">
        <text x="100" y="236" textAnchor="middle" opacity="0.8">verified</text>
      </g>
    </svg>
  );
}
