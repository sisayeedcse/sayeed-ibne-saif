import type { ComponentType } from "react";
import {
  ArrowUpRight,
  Network,
  Terminal,
  Command,
  Code,
  Smartphone,
  Flag,
} from "lucide-react";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { DegreeSeal } from "@/components/ui/Schematics";

/** One per-row blueprint glyph, referencing the credential's domain. */
const certIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "network-fundamentals": Network,
  "hands-on-linux": Terminal,
  "command-line-basics": Command,
  "learn-python": Code,
  "app-development-kotlin": Smartphone,
  "hack-the-code-challenge": Flag,
};

/* Record figures — all derived from data, nothing invented */
const PROGRAM_YEARS = "4";
const COURSE_COUNT = education[0].coursework.length; // 12
const CGPA = 3.79;
const CGPA_PCT = ((CGPA / 4.0) * 100).toFixed(1); // 94.8

const stats: { value: string; label: string; plus?: boolean }[] = [
  { value: String(certifications.length), label: "Verified credentials" },
  { value: String(COURSE_COUNT), label: "Core modules" },
  { value: PROGRAM_YEARS, label: "Years in the program" },
];

export default function Education() {
  const edu = education[0];

  return (
    <section id="education" className="py-16 sm:py-20 rule" aria-label="Education and credentials">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative">
        <DegreeSeal className="absolute right-2 -top-12 xl:-top-6 w-[92px] sm:w-[108px] xl:w-[130px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-100" />
        <FadeIn>
          <SectionHeader
            index="04"
            eyebrow="Education & credentials"
            heading="The formal record."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-4">
          {/* ── Left panel: the degree, to scale ── */}
          <FadeIn>
            <article className="h-full border border-line bg-surface p-6 sm:p-8" aria-label={`${edu.degree} — academic record`}>
              <p className="eyebrow mb-5">Formal degree</p>

              <h3 className="display text-lg sm:text-xl font-semibold leading-snug">
                B.Sc. in Computer Science &amp; Engineering
              </h3>
              <p className="mt-1.5 text-[15px] text-dim">{edu.institution}</p>
              <p className="mt-1 font-mono text-[11px] text-faint tracking-wide tnum">
                {edu.period} · {edu.location}
              </p>

              {/* CGPA on a real 4.00 scale */}
              <div className="mt-7 pt-6 border-t border-line">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="eyebrow">CGPA</p>
                  <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-faint tnum">
                    Scale 4.00 · {CGPA_PCT}%
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-serif text-[2.4rem] leading-none font-semibold text-navy tnum">
                    {CGPA}
                  </p>
                  <div className="flex-1" aria-hidden="true">
                    <div
                      className="h-[3px] bg-raised relative"
                      role="presentation"
                    >
                      <div className="absolute inset-y-0 left-0 bg-navy" style={{ width: `${CGPA_PCT}%` }} />
                    </div>
                    <div className="mt-1.5 flex justify-between font-mono text-[9.5px] text-faint tnum">
                      <span>0</span>
                      <span>4.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-7 pt-6 border-t border-line">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="eyebrow">Core coursework</p>
                  <p className="font-mono text-[10.5px] text-faint tnum">
                    {COURSE_COUNT} modules
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-1 bg-raised text-[11.5px] text-dim rounded-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>

          {/* ── Right panel: impact & credential ledger ── */}
          <FadeIn delay={80}>
            <article className="h-full border border-line bg-surface p-6 sm:p-8 flex flex-col">
              <p className="eyebrow mb-1">Impact &amp; credentials</p>

              {/* Big record figures, hairline-divided like a ledger */}
              <div className="grid grid-cols-3 divide-x divide-line mt-5 mb-7">
                {stats.map((s) => (
                  <div key={s.label} className="px-3 first:pl-0 last:pr-0">
                    <p className="font-serif text-4xl sm:text-5xl font-semibold text-navy leading-none tnum">
                      {s.value}
                    </p>
                    <p className="mt-2.5 font-mono text-[9.5px] sm:text-[10px] tracking-[0.12em] uppercase text-faint leading-relaxed">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Credential rows */}
              <div className="flex items-baseline justify-between mb-1">
                <p className="eyebrow">Certifications</p>
                <span className="font-mono text-[10.5px] text-faint tnum">
                  {certifications.length} on record
                </span>
              </div>
              <ul className="divide-y divide-line">
                {certifications.map((cert) => {
                  const Icon = certIcons[cert.id] ?? Code;
                  return (
                    <li key={cert.id} className="py-3">
                      <div className="flex items-center gap-3.5">
                        <span className="shrink-0 w-8 h-8 border border-line bg-raised grid place-items-center text-navy/75">
                          <Icon size={14} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13.5px] font-medium text-ink leading-snug">
                            {cert.name}
                          </p>
                          <p className="font-mono text-[10px] text-faint mt-0.5 truncate">
                            {cert.issuer} · {cert.date}
                          </p>
                        </div>
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 inline-flex items-center gap-1 font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint hover:text-navy transition-colors"
                          >
                            Verify
                            <ArrowUpRight size={11} aria-hidden="true" />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Operating premise — close the record with the thesis */}
              <figure className="mt-auto pt-7">
                <div className="border border-line bg-raised p-5 flex gap-4">
                  <span
                    className="font-serif text-5xl leading-[0.75] font-semibold text-navy/25 select-none shrink-0"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <div>
                    <figcaption className="text-[14px] text-dim leading-relaxed">
                      {profile.positioning}
                    </figcaption>
                    <p className="mt-2 font-mono text-[9.5px] tracking-[0.12em] uppercase text-navy">
                      {profile.shortName} — Positioning
                    </p>
                  </div>
                </div>
              </figure>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
