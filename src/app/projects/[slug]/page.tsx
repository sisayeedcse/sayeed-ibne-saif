import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projectIndex, projects } from "@/data/projects";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FadeIn from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case study`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = projects[(projectIndex(slug) + 1) % projects.length];

  const meta: { label: string; value: React.ReactNode }[] = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
    ...(project.links?.live
      ? [{
          label: "Live",
          value: (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-[13px]"
            >
              Visit site ↗<span className="sr-only">(opens in a new tab)</span>
            </a>
          ),
        }]
      : []),
    ...(project.links?.github
      ? [{
          label: "Source",
          value: (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-[13px]"
            >
              GitHub ↗<span className="sr-only">(opens in a new tab)</span>
            </a>
          ),
        }]
      : []),
  ];

  return (
    <article className="max-w-[1120px] mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { label: project.title },
        ]}
      />

      {/* Title block */}
      <FadeIn>
        <header className="max-w-3xl">
          <p className="eyebrow mb-4">Case study · {project.year}</p>
          <h1 className="display text-[2rem] sm:text-5xl font-semibold leading-[1.08]">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-dim leading-relaxed">
            {project.description}
          </p>
        </header>
      </FadeIn>

      {/* Cover */}
      {project.image && (
        <FadeIn delay={80}>
          <figure className="mt-10 border border-line bg-raised overflow-hidden p-4 sm:p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} — main interface`}
              className="w-full max-h-[460px] object-contain"
            />
          </figure>
        </FadeIn>
      )}

      {/* Body grid: writeup + meta sidebar */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
        {/* Writeup */}
        <div className="max-w-2xl">
          {[
            { label: "The challenge", body: project.writeup.challenge },
            { label: "The approach", body: project.writeup.approach },
            { label: "The result", body: project.writeup.result },
          ].map((block, i) => (
            <FadeIn key={block.label} delay={i * 60}>
              <section className="mb-10">
                <h2 className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[11px] tnum text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-xl font-semibold">{block.label}</span>
                </h2>
                <p className="text-[15.5px] text-dim leading-relaxed">
                  {block.body}
                </p>
              </section>
            </FadeIn>
          ))}
        </div>

        {/* Meta sidebar */}
        <aside className="lg:sticky lg:top-24 self-start space-y-8" aria-label="Project facts">
          <div className="border border-line bg-surface p-6">
            <p className="eyebrow mb-4">Project facts</p>
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
              <p className="eyebrow mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-raised text-[11px] text-dim rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next project */}
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-4 border border-line bg-surface p-5 hover:border-navy/40 transition-colors"
            aria-label={`Next case study: ${next.title}`}
          >
            <span>
              <span className="eyebrow block mb-1.5">Next case study</span>
              <span className="block font-semibold text-ink group-hover:text-navy transition-colors text-[15px]">
                {next.title}
              </span>
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="text-faint group-hover:text-navy group-hover:translate-x-0.5 transition-all shrink-0"
            />
          </Link>
        </aside>
      </div>
    </article>
  );
}
