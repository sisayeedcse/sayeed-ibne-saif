import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import FadeIn from "@/components/ui/FadeIn";
import { TerminalPlate } from "@/components/ui/Schematics";

const links = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    value: profile.email,
    icon: Mail,
    external: false,
  },
  {
    href: profile.social.linkedin,
    label: "LinkedIn",
    value: "/in/sisayeedofficial",
    custom: <LinkedInIcon size={16} />,
    external: true,
  },
  {
    href: profile.social.github,
    label: "GitHub",
    value: "@sisayeedcse",
    custom: <GitHubIcon size={16} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="rule" aria-label="Contact">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-16 sm:py-24 relative">
        <TerminalPlate className="absolute right-4 -top-12 xl:top-6 w-[116px] sm:w-[140px] xl:w-[250px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-90" />
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24">
            <div>
              <p className="eyebrow mb-5">07 · Contact</p>
              <h2 className="display text-[1.9rem] sm:text-4xl font-semibold leading-tight">
                Open to the right first role.
              </h2>
              <p className="mt-5 text-base text-dim leading-relaxed max-w-md">
                I'm looking for roles where I can learn from real systems — cloud and
                infrastructure internships, junior DevOps or operations work, or
                freelance software projects. If that's on your team or if you have a
                project, write to me.
              </p>
              <p className="mt-4 text-sm text-faint flex items-center gap-2">
                <MapPin size={13} aria-hidden="true" />
                {profile.location}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {links.map(({ href, label, value, icon: Icon, custom, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 p-4 border border-line bg-surface hover:border-navy/40 transition-colors"
                  aria-label={`${label}: ${value}${external ? " (opens in a new tab)" : ""}`}
                >
                  <span className="p-2 bg-raised rounded-sm text-dim group-hover:text-navy transition-colors">
                    {custom ?? (Icon ? <Icon size={16} aria-hidden="true" /> : null)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-medium text-ink">{label}</span>
                    <span className="block font-mono text-[11px] text-faint truncate">
                      {value}
                    </span>
                  </span>
                  {external && (
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="ml-auto text-faint group-hover:text-navy transition-colors"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
