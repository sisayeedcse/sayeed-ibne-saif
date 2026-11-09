"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award, Network, Terminal, Command, Code, Smartphone, Flag } from "lucide-react";
import type { ComponentType } from "react";
import { certifications } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

/* Domain glyph per credential, matching the icon language of the Education section */
const certIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "network-fundamentals": Network,
  "hands-on-linux": Terminal,
  "command-line-basics": Command,
  "learn-python": Code,
  "app-development-kotlin": Smartphone,
  "hack-the-code-challenge": Flag,
};

const AUTOPLAY_MS = 4200;

export default function CredentialsGallery() {
  const total = certifications.length;

  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setPerView(mq.matches ? 2 : 1);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /* Auto-advance the ledger — respecting the user's motion preference */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!auto || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [auto, total]);

  const canVerify = useMemo(() => certifications.some((c) => c.verifyUrl), []);

  const go = (dir: 1 | -1) => {
    setAuto(false);
    setIndex((i) => (i + dir + total) % total);
  };

  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="credentials" className="py-16 sm:py-20 rule" aria-label="Certificates and recognition">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <FadeIn>
          <SectionHeader
            index="05"
            eyebrow="Recognition"
            heading="Certificates & honours."
            subheading="Verified credentials across networking, Linux, Python and application development — each earned through assessed coursework or competition."
            action={
              canVerify
                ? { href: "/#education", label: "Ledger" }
                : undefined
            }
          />
        </FadeIn>

        {/* Carousel viewport */}
        <FadeIn delay={60}>
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(index * 100) / perView}%)` }}
            >
              {certifications.map((cert, i) => {
                const Icon = certIcons[cert.id] ?? Award;
                return (
                  <article
                    key={cert.id}
                    className="w-full lg:w-1/2 shrink-0 px-2 first:pl-0"
                    aria-hidden={i < index || i >= index + perView}
                  >
                    <div className="h-full border border-line bg-surface rounded-sm group card-lift flex flex-col">
                      {/* Certificate plate — full document, letterboxed */}
                      <a
                        href={cert.verifyUrl ?? cert.image}
                        target={cert.verifyUrl ? "_blank" : undefined}
                        rel={cert.verifyUrl ? "noopener noreferrer" : undefined}
                        className="block border-b border-line bg-raised p-4 sm:p-5"
                        aria-label={cert.verifyUrl ? `Verify ${cert.name} (opens in a new tab)` : `${cert.name} — image`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.image}
                          alt={`${cert.name} certificate`}
                          className="w-full max-h-[220px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </a>

                      {/* Ledger row */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 w-9 h-9 rounded-full border border-line bg-raised grid place-items-center text-navy/80">
                            <Icon size={15} />
                          </span>
                          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint tnum">
                            {cert.date}
                          </p>
                          <span className="px-2.5 py-0.5 rounded-full border border-line text-[10.5px] text-dim">
                            {cert.tag}
                          </span>
                        </div>

                        <h3 className="mt-3.5 text-[15.5px] font-semibold text-ink leading-snug">
                          {cert.name}
                        </h3>
                        <p className="mt-1 text-[12.5px] font-medium text-navy">
                          {cert.verifyUrl ? "Verified credential" : "On record"}
                        </p>
                        <p className="mt-2.5 text-[13px] text-dim">
                          {cert.issuer}
                        </p>

                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline mt-3 self-start font-mono text-[10.5px] tracking-[0.08em] uppercase text-faint hover:text-navy transition-colors"
                          >
                            Verify
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Controls — arrows, counter, progress, playback state */}
        <FadeIn delay={120}>
          <div className="mt-8 flex items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Previous certificate"
              className="w-9 h-9 rounded-full border border-line bg-surface grid place-items-center text-dim hover:text-navy hover:border-navy/40 transition-colors"
            >
              <ChevronLeft size={15} />
            </button>

            <p className="font-mono text-[11px] tnum text-faint" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>

            <div className="w-32 sm:w-44 h-[3px] bg-raised" aria-hidden="true">
              <div
                className="h-full bg-navy transition-all duration-500"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next certificate"
              className="w-9 h-9 rounded-full border border-line bg-surface grid place-items-center text-dim hover:text-navy hover:border-navy/40 transition-colors"
            >
              <ChevronRight size={15} />
            </button>

            {/* Play / pause state */}
            <button
              onClick={() => setAuto((v) => !v)}
              aria-pressed={!auto}
              className={cn(
                "font-mono text-[10px] tracking-[0.18em] uppercase transition-colors",
                auto ? "text-navy" : "text-faint"
              )}
            >
              {auto ? "Auto" : "Paused"}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
