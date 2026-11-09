import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { activities } from "@/data/activities";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { StarNetwork } from "@/components/ui/Schematics";

export default function ActivitiesPreview() {
  const latest = activities.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 rule" aria-label="Activities">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative">
        <StarNetwork className="absolute right-0 -top-16 sm:-top-12 xl:top-0 w-[104px] sm:w-[128px] xl:w-[220px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-100" />
        <FadeIn>
          <SectionHeader
            index="06"
            eyebrow="Activities"
            heading="Beyond the coursework."
            subheading="Hackathons, IEEE conferences and student programs — each with its own write-up and photos."
            action={{ href: "/activities", label: "All activities" }}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latest.map((activity, i) => (
            <FadeIn key={activity.slug} delay={i * 60}>
              <Link
                href={`/activities/${activity.slug}`}
                className="group card-lift flex flex-col h-full border border-line bg-surface hover:border-navy/30"
                aria-label={`Read the full notes: ${activity.title}`}
              >
                {activity.photos?.[0] && (
                  <div className="h-44 overflow-hidden border-b border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activity.photos[0].src}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: activity.photos[0].position || "center" }}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint mb-3 tnum">
                    {activity.period}
                  </p>
                  <h3 className="display text-[16.5px] font-semibold leading-snug group-hover:text-navy transition-colors">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-navy">{activity.organization}</p>
                  <p className="mt-3 text-[13.5px] text-dim leading-relaxed flex-1">
                    {activity.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.1em] uppercase text-faint group-hover:text-navy transition-colors">
                    Full notes & photos
                    <ArrowRight
                      size={12}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
