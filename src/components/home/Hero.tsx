import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { cloudJourney } from "@/data/cloudJourney";
import HeroSchematic from "@/components/ui/HeroSchematic";

const facts = [
  {
    value: `${projects.length}`,
    label: "Case studies",
    href: "/projects",
  },
  {
    value: `${certifications.length}`,
    label: "Certifications",
    href: "/#education",
  },
  {
    value: `${cloudJourney.length}`,
    label: "Roadmap stages",
    href: "/#roadmap",
  },
  {
    value: "3+",
    label: "Years client work",
    href: "/#experience",
  },
];

export default function Hero() {
  return (
    <section className="relative border-b border-line overflow-hidden" aria-label="Introduction">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-0 relative">
        {/* Blueprint schematic backdrop */}
        <HeroSchematic className="absolute -top-2 right-4 sm:right-8 lg:top-0 lg:right-6 w-[330px] sm:w-[430px] lg:w-[560px] h-auto pointer-events-none select-none opacity-35 lg:opacity-100" />

        <div className="relative">
        <p className="eyebrow mb-8">
          Portfolio · Chattogram, Bangladesh · 2026
        </p>

        {/* Two-column frontispiece: statement + portrait plate */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-end">
          {/* Left column — the statement */}
          <div>
            <h1 className="display text-[2.5rem] sm:text-6xl lg:text-[4.25rem] font-semibold leading-[1.05] max-w-4xl">
              From software delivery to running{" "}
              <span className="text-navy">real infrastructure</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-dim leading-relaxed max-w-2xl">
              I'm Sayeed — a final-year Computer Science & Engineering student with{" "}
              <strong className="font-semibold text-ink">3+ years of delivered client work</strong>, a{" "}
              <strong className="font-semibold text-ink">Linux and networking foundation</strong>, and a
              deliberate path toward{" "}
              <strong className="font-semibold text-ink">
                cloud engineering and IT operations
              </strong>
              . This site collects the projects and the record behind that path.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-navy hover:bg-navy-deep text-white text-sm font-medium rounded-sm transition-colors"
              >
                View case studies
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-line-strong bg-surface text-sm font-medium text-ink rounded-sm hover:border-navy hover:text-navy transition-colors"
              >
                Curriculum vitae
                <ArrowUpRight size={14} aria-hidden="true" className="text-faint" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            {/* Status line */}
            <p className="mt-6 text-sm text-faint flex items-center gap-2">
              <MapPin size={13} aria-hidden="true" />
              {profile.location}
              <span className="text-line-strong" aria-hidden="true">·</span>
              <span>{profile.status}</span>
            </p>
          </div>

          {/* Right column — portrait plate */}
          <figure className="relative mx-auto lg:mx-0 w-[260px] sm:w-[320px] lg:w-[400px] shrink-0 group">
            {/* Off-register navy frame (print-plate effect) */}
            <div
              className="absolute -top-3 -right-3 bottom-4 left-4 border border-navy/35 pointer-events-none transition-colors group-hover:border-navy/60"
              aria-hidden="true"
            />

            {/* The plate itself — dark photo reads like a printed photograph */}
            <div className="relative border border-line-strong bg-ink overflow-hidden">
              <img
                src="/portrait.png"
                alt="Portrait of Sayeed Ibne Saif"
                className="w-full h-[340px] sm:h-[420px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                style={{ objectPosition: "center 18%" }}
              />
              {/* Corner registration ticks */}
              <span
                className="absolute top-2 left-2 w-2 h-2 border-t border-l border-paper/50"
                aria-hidden="true"
              />
              <span
                className="absolute top-2 right-2 w-2 h-2 border-t border-r border-paper/50"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-paper/50"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-paper/50"
                aria-hidden="true"
              />
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.14em] uppercase text-faint">
              <span>Fig. 01 — The author</span>
              <span className="tnum">Chattogram · 2026</span>
            </figcaption>
          </figure>
        </div>

        {/* Facts strip */}
        <dl className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-line border-b divide-x divide-line">
          {facts.map(({ value, label, href }) => (
            <a
              key={label}
              href={href}
              className="group px-5 py-5 -mx-px hover:bg-surface transition-colors"
            >
              <dd className="font-serif text-3xl font-semibold text-ink tnum leading-none">
                {value}
              </dd>
              <dt className="mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-faint group-hover:text-navy transition-colors">
                {label}
              </dt>
            </a>
          ))}
        </dl>
        </div>
      </div>
    </section>
  );
}
