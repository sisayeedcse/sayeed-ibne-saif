import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";

/* ── Contact links for the card center column ── */
const contactItems = [
  {
    icon: <Mail size={14} aria-hidden="true" />,
    label: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: <LinkedInIcon size={14} />,
    label: profile.social.linkedin.replace("https://www.", "").replace(/\/$/, ""),
    href: profile.social.linkedin,
    external: true,
  },
  {
    icon: <GitHubIcon size={14} />,
    label: profile.social.github.replace("https://", ""),
    href: profile.social.github,
    external: true,
  },
  {
    icon: <MapPin size={14} aria-hidden="true" />,
    label: profile.location,
    href: null,
    external: false,
  },
];

/* ── Creative Terminal Widget ── */
function TerminalWidget() {
  return (
    <div
      className="rounded-xl overflow-hidden border border-border/50 w-full max-w-[220px] shrink-0 font-mono"
      aria-hidden="true"
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
    >
      {/* Terminal header */}
      <div className="bg-[#1a1b26] px-3 py-2.5 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f7768e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#e0af68]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#9ece6a]" />
        </div>
        <div className="text-[#a9b1d6] opacity-40 text-[9px] uppercase tracking-[0.2em]">
          sys_admin@sayeed
        </div>
      </div>
      
      {/* Terminal body */}
      <div className="bg-[#16161e] p-4 text-[11px] leading-relaxed flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#7aa2f7] font-bold">➜</span>
          <span className="text-[#9ece6a]">~</span>
          <span className="text-[#a9b1d6]">ping status</span>
        </div>
        
        <div className="text-[#a9b1d6] opacity-60 mt-1">
          PING 127.0.0.1: 56 data bytes
        </div>
        
        <div className="text-[#9ece6a] opacity-90 pl-1 border-l-2 border-[#9ece6a]/30">
          64 bytes: status=AVAILABLE
        </div>
        <div className="text-[#9ece6a] opacity-90 pl-1 border-l-2 border-[#9ece6a]/30">
          64 bytes: systems=ONLINE
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#7aa2f7] font-bold">➜</span>
          <span className="text-[#9ece6a]">~</span>
          <span className="w-2 h-3.5 bg-[#a9b1d6] animate-pulse" />
        </div>
      </div>
    </div>
  );
}

/* ── Main Footer ────────────────────────────── */
export default function Footer() {
  return (
    <footer role="contentinfo" id="contact" className="relative overflow-hidden border-t border-border">

      {/* ── Photo background (same photo as hero, strongly blurred) ── */}
      <div
        className="hero-photo-bg absolute inset-0"
        style={{
          backgroundImage: "url('/photo2.jpg')",
          opacity: 0.15,
          filter: "blur(12px)",
          transform: "scale(1.05)", // prevent blur edge artifact
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,13,18,0.88)" }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 py-16">

        {/* ── Contact card ── */}
        <div
          className="rounded-3xl border border-border overflow-hidden"
          style={{
            background: "rgba(16,20,27,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 2px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
          aria-label="Contact information"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr_auto] gap-0 divide-y md:divide-y-0 md:divide-x divide-border">

            {/* ── Left: heading + cta ── */}
            <div className="p-8 lg:p-12 flex flex-col justify-between gap-6">
              <div>
                <h2
                  className="font-black text-gray-50 leading-none mb-5 flex items-start gap-3"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1 }}
                >
                  <span>
                    LET'S<br />CONNECT
                  </span>
                  {/* Star / sparkle */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 mt-1 text-blue-400"
                  >
                    <path
                      d="M14 2 L15.8 11.2 L25 13 L15.8 14.8 L14 24 L12.2 14.8 L3 13 L12.2 11.2 Z"
                      fill="currentColor"
                    />
                  </svg>
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                  Open to opportunities in cloud engineering, IT infrastructure, networking and
                  software development — roles, collaborations and graduate programs.
                </p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold tracking-[0.08em] rounded-lg transition-colors uppercase w-fit"
              >
                GET IN TOUCH <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* ── Center: contact links ── */}
            <div className="p-8 lg:p-12 flex flex-col justify-center gap-4" role="list" aria-label="Contact details">
              {contactItems.map(({ icon, label, href, external }) => {
                const inner = (
                  <div className="flex items-center gap-4 group">
                    <span className="text-gray-500 shrink-0 group-hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md">
                      {icon}
                    </span>
                    <span
                      className={`text-[13px] font-mono text-gray-400 leading-none truncate ${
                        href ? "group-hover:text-gray-100" : ""
                      } transition-colors tracking-wide`}
                    >
                      {label}
                    </span>
                  </div>
                );

                return (
                  <div key={label} role="listitem" className="py-2 border-b border-border/50 last:border-0">
                    {href ? (
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        aria-label={label}
                        className="block"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── Right: Creative Terminal ── */}
            <div className="hidden md:flex p-8 lg:p-12 items-center justify-center bg-white/[0.01]">
              <TerminalWidget />
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Meta text */}
          <p className="font-mono text-[11px] text-gray-600 tracking-[0.1em] uppercase text-center sm:text-left">
            Premier University · B.SC Computer Science &amp; Engineering ·
            Cloud &amp; Infrastructure · © 2026 Sayeed Ibne Saif
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2" role="list" aria-label="Social profiles">
            {[
              { href: `mailto:${profile.email}`, label: "Email", icon: <Mail size={15} aria-hidden="true" /> },
              { href: profile.social.linkedin, label: "LinkedIn", icon: <LinkedInIcon size={15} />, external: true },
              { href: profile.social.github, label: "GitHub", icon: <GitHubIcon size={15} />, external: true },
            ].map(({ href, label, icon, external }) => (
               <a
                key={label}
                href={href}
                role="listitem"
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="p-2.5 text-gray-500 hover:text-blue-400 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-center font-mono text-[11px] text-gray-600/80 italic">
          Built with curiosity, systems thinking and a lot of learning.
        </p>
      </div>
    </footer>
  );
}
