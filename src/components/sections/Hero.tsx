import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import IDBadge from "./IDBadge";

/* ── Rotating SVG text circle ──────────────── */
function RotatingCircle() {
  return (
    <div className="relative w-[108px] h-[108px]" aria-hidden="true">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full rotate-circle"
        aria-hidden="true"
      >
        <defs>
          <path
            id="rtext-circle"
            d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>
        <text
          fontSize="9"
          fontFamily="var(--font-jbmono, monospace)"
          fontWeight="600"
          letterSpacing="2.5"
          fill="#3B82F6"
          opacity="0.75"
        >
          <textPath href="#rtext-circle" startOffset="0%">
            CLOUD • NETWORKING • LINUX • INFRASTRUCTURE •
          </textPath>
        </text>
      </svg>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-4 h-4 rounded-full bg-blue-500"
          style={{ boxShadow: "0 0 12px #3B82F6" }}
        />
      </div>
    </div>
  );
}

/* ── Role tag list ──────────────────────────── */
const roles = [
  "CSE STUDENT · FINAL YEAR",
  "ASPIRING CLOUD ENGINEER",
  "IEEE CS CHAIRPERSON · 2026",
  "FREELANCE WEB DEVELOPER",
];

/* ── Main Hero ──────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
    >
      {/* ── Layer 1: Dot grid texture ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" aria-hidden="true" />

      {/* ── Layer 2: Radial glow — adds depth without a photo ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 68% 45%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: Watermark name (Hidden on mobile) ── */}
      <div
        className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <span
          className="font-black whitespace-nowrap"
          style={{
            fontSize: "clamp(96px, 20vw, 320px)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.2)",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            transform: "translateY(5%)",
            opacity: 1,
          }}
        >
          SAYEED
        </span>
      </div>

      {/* ── Layer 4: Main content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 pt-28 lg:pt-24 pb-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-12 items-center">

          {/* ── Left column (Text) ── */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <p
              className="text-lg text-gray-400 mb-1"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
            >
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="font-black text-gray-50 leading-none tracking-tight mb-5"
              style={{ fontSize: "clamp(2.8rem, 8vw, 5.8rem)", lineHeight: 0.93 }}
            >
              SAYEED<br />IBNE SAIF
            </h1>

            {/* Role tags */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6"
              role="list"
              aria-label="Roles"
            >
              {roles.map((role, i) => (
                <span key={role} role="listitem" className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.1em] text-blue-400 uppercase">
                    {role}
                  </span>
                  {i < roles.length - 1 && (
                    <span className="text-gray-700 font-mono text-[11px]">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed max-w-[500px] mb-8">
              {profile.bio}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold tracking-[0.06em] rounded transition-colors uppercase"
              >
                GET IN TOUCH <ArrowRight size={14} aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-gray-500 text-gray-300 hover:text-gray-100 text-[13px] font-bold tracking-[0.06em] rounded transition-colors uppercase"
              >
                DOWNLOAD CV <Download size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 mb-7">
              <MapPin size={13} aria-hidden="true" />
              <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
                {profile.location}
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2" role="list" aria-label="Social profiles">
              {[
                {
                  href: `mailto:${profile.email}`,
                  label: "Email",
                  icon: <Mail size={16} aria-hidden="true" />,
                },
                {
                  href: profile.social.linkedin,
                  label: "LinkedIn",
                  icon: <LinkedInIcon size={16} />,
                  external: true,
                },
                {
                  href: profile.social.github,
                  label: "GitHub",
                  icon: <GitHubIcon size={16} />,
                  external: true,
                },
              ].map(({ href, label, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="p-2.5 rounded-lg border border-border bg-elevated/60 text-gray-500 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column (Badge & Stats) ── */}
          <div className="flex flex-col items-center gap-5 order-1 lg:order-2">
            {/* Rotating career-skills circle (Desktop only to keep mobile clean) */}
            <div className="hidden lg:block">
              <RotatingCircle />
            </div>

            {/* Swinging ID badge */}
            <IDBadge />

            {/* Stats grid */}
            <div className="w-full max-w-[280px] lg:max-w-none grid grid-cols-2 gap-2.5 mt-1">
              <div
                className="bg-elevated/80 border border-border rounded-xl p-4"
                aria-label="Year of study"
              >
                <div
                  className="font-black text-blue-400 leading-none mb-2 uppercase"
                  style={{ fontSize: "1.65rem" }}
                >
                  FINAL<br />YEAR
                </div>
                <div className="font-mono text-[10px] text-gray-500 leading-tight uppercase tracking-wide">
                  B.SC CSE @<br />PREMIER UNIV.
                </div>
              </div>
              <div
                className="bg-elevated/80 border border-border rounded-xl p-4"
                aria-label="Years of experience"
              >
                <div
                  className="font-black text-blue-400 leading-none mb-2"
                  style={{ fontSize: "2.5rem" }}
                >
                  3+
                </div>
                <div className="font-mono text-[10px] text-gray-500 leading-tight uppercase tracking-wide">
                  YEARS DEV<br />EXPERIENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
