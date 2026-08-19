"use client";

/**
 * HeroGraph — minimal SVG network visualization.
 * Represents the career/tech progression path.
 * Animates via CSS keyframes defined in globals.css.
 * Pure CSS animation — no JavaScript animation loop.
 */

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  status: "active" | "learning" | "planned";
};

type Edge = [string, string];

const NODES: Node[] = [
  { id: "code",    label: "CODE",    x: 190, y: 38,  status: "active" },
  { id: "linux",   label: "LINUX",   x: 68,  y: 118, status: "active" },
  { id: "network", label: "NETWORK", x: 312, y: 118, status: "active" },
  { id: "cloud",   label: "CLOUD",   x: 190, y: 198, status: "learning" },
  { id: "infra",   label: "INFRA",   x: 80,  y: 278, status: "planned" },
  { id: "devops",  label: "DEVOPS",  x: 300, y: 278, status: "planned" },
];

const EDGES: Edge[] = [
  ["code",    "linux"],
  ["code",    "network"],
  ["linux",   "cloud"],
  ["network", "cloud"],
  ["cloud",   "infra"],
  ["cloud",   "devops"],
];

const statusColor: Record<Node["status"], string> = {
  active:   "#3B82F6",   // blue-500
  learning: "#22D3EE",   // cyan-400
  planned:  "#374151",   // gray-700
};

const statusTextColor: Record<Node["status"], string> = {
  active:   "#93C5FD",   // blue-300
  learning: "#67E8F9",   // cyan-300
  planned:  "#6B7280",   // gray-500
};

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function HeroGraph() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[380px] mx-auto select-none"
    >
      <svg
        viewBox="0 0 380 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Career progression network diagram"
      >
        {/* ── Edges ─────────────────────────────── */}
        {EDGES.map(([fromId, toId]) => {
          const from = nodeMap[fromId];
          const to = nodeMap[toId];
          const isActive = from.status !== "planned" && to.status !== "planned";
          return (
            <line
              key={`${fromId}-${toId}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isActive ? "#252B35" : "#1C2230"}
              strokeWidth="1.5"
              strokeDasharray={isActive ? "6 6" : "4 6"}
              className={isActive ? "line-flow" : ""}
              style={isActive ? { strokeDashoffset: 0 } : {}}
            />
          );
        })}

        {/* ── Nodes ─────────────────────────────── */}
        {NODES.map((node, i) => {
          const color = statusColor[node.status];
          const textColor = statusTextColor[node.status];
          const isLearning = node.status === "learning";
          const delay = i * 0.4;

          return (
            <g key={node.id}>
              {/* Pulsing ring for "learning" node */}
              {isLearning && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={22}
                  stroke={color}
                  strokeWidth="1"
                  opacity="0"
                  className="ring-pulse"
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />
              )}

              {/* Node circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={18}
                fill={`${color}18`}
                stroke={color}
                strokeWidth={node.status === "active" ? 1.5 : 1}
                className={node.status === "active" ? "node-pulse" : ""}
                style={{ animationDelay: `${delay}s` }}
              />

              {/* Node label */}
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                fontSize="7.5"
                fontFamily="var(--font-mono, monospace)"
                fontWeight="600"
                letterSpacing="0.08em"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* ── Legend ────────────────────────────── */}
        <g>
          {([
            { color: "#3B82F6", label: "Foundation" },
            { color: "#22D3EE", label: "Learning" },
            { color: "#374151", label: "Planned" },
          ] as const).map((item, i) => (
            <g key={item.label} transform={`translate(${28 + i * 110}, 306)`}>
              <circle cx="5" cy="4" r="3.5" fill={`${item.color}40`} stroke={item.color} strokeWidth="1" />
              <text
                x="13"
                y="8"
                fill="#6B7280"
                fontSize="8"
                fontFamily="var(--font-mono, monospace)"
                fontWeight="500"
              >
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
