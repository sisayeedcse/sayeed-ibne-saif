import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";

const explore = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/activities", label: "Activities" },
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
];

const handles = [
  {
    label: "@sisayeedcse",
    href: profile.social.github,
    icon: <GitHubIcon size={12} />,
    external: true,
  },
  {
    label: "@sisayeedofficial",
    href: profile.social.linkedin,
    icon: <LinkedInIcon size={12} />,
    external: true,
  },
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail size={12} />,
    external: false,
  },
];

/** Navy accent circle with an arrow — the reference-footer "call" device */
function AccentArrow({ up = false }: { up?: boolean }) {
  return (
    <span className="shrink-0 w-6 h-6 rounded-full bg-navy text-paper grid place-items-center transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
      <ArrowUpRight size={13} strokeWidth={2.2} className={up ? "" : "-rotate-45"} />
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-6" role="contentinfo">
      {/* ── The plate ── */}
      <div className="relative rounded-[2rem] sm:rounded-[2.75rem] border border-line bg-raised overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 relative">
          {/* Dot-grid on the plate so the texture continues across surfaces */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none select-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(rgba(31,78,121,0.14) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            {/* Statement */}
            <div className="md:col-span-4">
              <p className="text-[1.25rem] sm:text-[1.45rem] font-semibold text-ink leading-snug tracking-tight max-w-[18rem]">
                Sayeed is a final-year CSE student building toward{" "}
                <span className="text-navy">cloud &amp; infrastructure engineering</span>.
              </p>
            </div>

            {/* Explore */}
            <nav aria-label="Footer navigation" className="md:col-span-2">
              <p className="text-[13px] font-medium text-ink mb-4">Explore</p>
              <ul className="space-y-2.5 text-[13px]">
                {explore.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className="text-faint hover:text-navy transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Follow */}
            <div className="md:col-span-3">
              <p className="text-[13px] font-medium text-ink mb-4">Follow me</p>
              <div className="flex flex-wrap gap-2">
                {handles.map(({ label, href, icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-line bg-surface text-[11.5px] text-dim hover:text-navy hover:border-navy/40 transition-colors"
                  >
                    <span className="text-navy/80">{icon}</span>
                    {label}
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact ledgers */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 font-serif text-xl font-semibold text-navy"
                >
                  Email Sayeed
                  <AccentArrow />
                </a>
                <p className="mt-1.5 text-[12.5px] text-faint">Let&rsquo;s work together</p>
              </div>
              <div>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 font-serif text-xl font-semibold text-ink hover:text-navy transition-colors"
                >
                  Résumé &amp; CV
                  <AccentArrow up />
                </a>
                <p className="mt-1.5 text-[12.5px] text-faint">
                  Full experience record
                  <span className="sr-only">(opens in a new tab)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Giant wordmark, sunk into the plate edge */}
          <div className="relative mt-8 sm:mt-12 overflow-hidden" aria-hidden="true">
            <p className="font-giant text-navy text-center whitespace-nowrap leading-[0.8] tracking-[-0.01em] text-[clamp(3.5rem,25vw,16.5rem)] translate-y-[11%]">
              SAYEED
            </p>
          </div>
        </div>
      </div>

      {/* ── Meta strip below the plate ── */}
      <div className="max-w-[1240px] mx-auto mt-5 px-2 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2">
        <p className="font-mono text-[10.5px] text-faint tracking-wide tnum">
          © 2026 Sayeed Ibne Saif
          <span className="mx-2 text-line" aria-hidden="true">·</span>
          Premier University, Chattogram
        </p>
        <p className="font-mono text-[10px] text-faint/90 tracking-[0.14em] uppercase tnum">
          Chittagong · GMT+6
          <span className="mx-2 text-line" aria-hidden="true">·</span>
          Open to opportunities
          <span className="mx-2 text-line" aria-hidden="true">·</span>
          Next.js
        </p>
      </div>
    </footer>
  );
}
