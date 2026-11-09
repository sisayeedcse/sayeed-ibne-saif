import type { Metadata } from "next";
import Link from "next/link";
import { activities } from "@/data/activities";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";
import { StarNetwork } from "@/components/ui/Schematics";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Extracurricular record of Sayeed Ibne Saif — hackathons, IEEE conferences, competitions and student technology programs, each with full notes and photos.",
};

export default function ActivitiesPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-12 sm:py-16 relative">
      {/* Index ornament: small plate above the header on mobile, corner schematic on wide screens */}
      <div className="flex justify-end -mb-4 xl:hidden">
        <StarNetwork className="w-[140px] sm:w-[170px] h-auto pointer-events-none select-none opacity-55" />
      </div>
      <StarNetwork className="absolute right-0 top-6 hidden xl:block w-[220px] h-auto pointer-events-none select-none" />
      <div className="relative">
      <FadeIn>
        <SectionHeader
          index="W"
          eyebrow="Beyond the coursework"
          heading="Activities."
          subheading="Hackathons, IEEE conferences, competitions and student programs — each entry links to its own page with the full account, outcome and photos."
        />
      </FadeIn>

      <div className="border-t border-line">
        {activities.map((activity, i) => (
          <FadeIn key={activity.slug} delay={i * 40}>
            <Link
              href={`/activities/${activity.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-4 md:gap-10 py-7 border-b border-line items-start"
              aria-label={`Read the full account: ${activity.title}`}
            >
              {/* Meta column */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-navy mb-2">
                  {activity.organization}
                </p>
                <p className="font-mono text-[11px] text-faint tnum">
                  {activity.period ?? "—"}
                </p>
                {activity.location && (
                  <p className="font-mono text-[10.5px] text-faint/80 mt-1 leading-snug">
                    {activity.location}
                  </p>
                )}
              </div>

              {/* Main */}
              <div>
                <h2 className="display text-xl sm:text-[1.45rem] font-semibold leading-snug group-hover:text-navy transition-colors">
                  {activity.title}
                </h2>
                <p className="mt-3 text-[14.5px] text-dim leading-relaxed max-w-2xl">
                  {activity.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {activity.tags.map((tag) => (
                    <Tag key={tag} size="sm" variant="muted">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Thumb + arrow */}
              <div className="hidden md:flex items-center gap-6">
                {activity.photos?.[0] && (
                  <div className="w-36 h-24 border border-line overflow-hidden bg-raised">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activity.photos[0].src}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: activity.photos[0].position || "center" }}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      </div>
    </div>
  );
}
