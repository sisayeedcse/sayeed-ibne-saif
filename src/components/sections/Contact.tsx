import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    label: "Email Me",
    description: profile.email,
    icon: Mail,
    external: false,
    variant: "primary" as const,
  },
  {
    href: profile.social.linkedin,
    label: "LinkedIn",
    description: "Connect on LinkedIn",
    icon: LinkedInIcon,
    external: true,
    variant: "secondary" as const,
  },
  {
    href: profile.social.github,
    label: "GitHub",
    description: "View my repositories",
    icon: GitHubIcon,
    external: true,
    variant: "secondary" as const,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Sayeed"
      className="py-24 border-t border-border bg-surface"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Left: copy ── */}
          <FadeIn direction="up">
            <SectionHeader
              index="08"
              label="Let's Connect"
              heading="Have a project, opportunity or idea?"
            />
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              I'm open to opportunities where I can learn, contribute and grow — in software,
              networking, infrastructure and cloud engineering. Whether you have a role, a
              collaboration or just want to talk technology, I'd be glad to hear from you.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={14} aria-hidden="true" />
              <span className="text-sm">{profile.location}</span>
            </div>
          </FadeIn>

          {/* ── Right: contact buttons ── */}
          <FadeIn direction="left" delay={100}>
            <div className="flex flex-col gap-3 pt-2 lg:pt-14">
              {contactLinks.map(({ href, label, description, icon: Icon, external, variant }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`
                    group flex items-center gap-4 p-4 rounded-xl border transition-all
                    ${
                      variant === "primary"
                        ? "bg-blue-600/10 border-blue-500/30 hover:bg-blue-600/20 hover:border-blue-500/60"
                        : "bg-elevated border-border hover:border-gray-500"
                    }
                  `}
                  aria-label={label}
                >
                  <div
                    className={`p-2 rounded-lg border ${
                      variant === "primary"
                        ? "bg-blue-500/20 border-blue-500/30"
                        : "bg-surface border-border"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={variant === "primary" ? "text-blue-400" : "text-gray-400"}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        variant === "primary" ? "text-blue-300" : "text-gray-200"
                      }`}
                    >
                      {label}
                    </p>
                    <p className="text-xs text-gray-500">{description}</p>
                  </div>
                  <svg
                    className="ml-auto text-gray-600 group-hover:translate-x-0.5 transition-transform"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
