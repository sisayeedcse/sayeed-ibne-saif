import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getActivity, activityIndex, activities } from "@/data/activities";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) return {};
  return {
    title: activity.title,
    description: activity.summary,
  };
}

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  const idx = activityIndex(slug);
  const prev = activities[(idx - 1 + activities.length) % activities.length];
  const next = activities[(idx + 1) % activities.length];

  const meta: { label: string; value: React.ReactNode }[] = [
    { label: "Period", value: activity.period ?? "—" },
    { label: "Organization", value: activity.organization },
    ...(activity.location ? [{ label: "Location", value: activity.location }] : []),
  ];

  return (
    <article className="max-w-[1120px] mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/activities", label: "Activities" },
          { label: activity.title },
        ]}
      />

      {/* Title block */}
      <FadeIn>
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">
            Activity · {activity.organization}
          </p>
          <h1 className="display text-[1.9rem] sm:text-[2.75rem] font-semibold leading-[1.1]">
            {activity.title}
          </h1>
          <p className="mt-4 text-lg text-dim leading-relaxed">
            {activity.summary}
          </p>
        </header>
      </FadeIn>

      {/* Photo gallery */}
      {activity.photos && activity.photos.length > 0 && (
        <FadeIn delay={80}>
          <div
            className={`mt-10 grid gap-4 ${
              activity.photos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {activity.photos.map((photo, i) => (
              <figure
                key={photo.src}
                className="border border-line bg-surface overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={`${activity.title} — photo ${i + 1}`}
                  className="w-full h-64 sm:h-80 object-cover"
                  style={{ objectPosition: photo.position || "center" }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </figure>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Body grid: write-up + meta sidebar */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        {/* Write-up */}
        <div className="max-w-2xl">
          <FadeIn>
            <section className="mb-10">
              <h2 className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-[11px] tnum text-navy">01</span>
                <span className="display text-xl font-semibold">The account</span>
              </h2>
              <p className="text-[15.5px] text-dim leading-relaxed">
                {activity.detail}
              </p>
            </section>
          </FadeIn>

          {activity.outcome && (
            <FadeIn delay={60}>
              <section className="mb-10">
                <h2 className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[11px] tnum text-navy">02</span>
                  <span className="display text-xl font-semibold">The outcome</span>
                </h2>
                <p className="text-[15.5px] text-dim leading-relaxed">
                  {activity.outcome}
                </p>
              </section>
            </FadeIn>
          )}

          {activity.link && (
            <FadeIn delay={100}>
              <a
                href={activity.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-line-strong bg-surface text-sm font-medium text-ink rounded-sm hover:border-navy hover:text-navy transition-colors"
              >
                {activity.linkText ?? "View link"}
                <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </FadeIn>
          )}
        </div>

        {/* Meta sidebar */}
        <aside className="lg:sticky lg:top-24 self-start space-y-8" aria-label="Activity facts">
          <div className="border border-line bg-surface p-6">
            <p className="eyebrow mb-4">Activity facts</p>
            <dl className="space-y-3">
              {meta.map(({ label, value }) => (
                <div key={label} className="flex items-baseline justify-between gap-3">
                  <dt className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint shrink-0">
                    {label}
                  </dt>
                  <dd className="text-[13px] text-ink text-right font-medium">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 pt-4 border-t border-line">
              <p className="eyebrow mb-3">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {activity.tags.map((tag) => (
                  <Tag key={tag} size="sm" variant="navy">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Prev / Next navigation */}
      <nav
        aria-label="Activity navigation"
        className="mt-16 pt-8 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Link
          href={`/activities/${prev.slug}`}
          className="group flex items-center gap-4 border border-line bg-surface p-5 hover:border-navy/40 transition-colors"
          aria-label={`Previous activity: ${prev.title}`}
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="text-faint group-hover:text-navy group-hover:-translate-x-0.5 transition-all shrink-0"
          />
          <span>
            <span className="eyebrow block mb-1.5">Previous</span>
            <span className="block font-semibold text-ink group-hover:text-navy transition-colors text-[15px]">
              {prev.title}
            </span>
          </span>
        </Link>
        <Link
          href={`/activities/${next.slug}`}
          className="group flex items-center justify-end gap-4 border border-line bg-surface p-5 hover:border-navy/40 transition-colors sm:text-right"
          aria-label={`Next activity: ${next.title}`}
        >
          <span className="order-2 sm:order-1">
            <span className="eyebrow block mb-1.5">Next</span>
            <span className="block font-semibold text-ink group-hover:text-navy transition-colors text-[15px]">
              {next.title}
            </span>
          </span>
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="order-1 sm:order-2 text-faint group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0"
          />
        </Link>
      </nav>
    </article>
  );
}
