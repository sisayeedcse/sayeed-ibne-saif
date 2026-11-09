import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";
import { ChipGrid } from "@/components/ui/Schematics";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of delivered work by Sayeed Ibne Saif — client e-commerce, POS systems, platforms and tools. Each project includes challenge, approach and result.",
};

const categoryLabel: Record<string, string> = {
  web: "Web",
  mobile: "Mobile",
  software: "Software",
  cloud: "Cloud",
  systems: "Systems",
  "coming-next": "Coming next",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-12 sm:py-16 relative">
      {/* Index ornament: small plate above the header on mobile, corner schematic on wide screens */}
      <div className="flex justify-end -mb-4 xl:hidden">
        <ChipGrid className="w-[150px] sm:w-[180px] h-auto pointer-events-none select-none opacity-55" />
      </div>
      <ChipGrid className="absolute right-0 top-6 hidden xl:block w-[230px] h-auto pointer-events-none select-none" />
      <div className="relative">
      <FadeIn>
        <SectionHeader
          index="W"
          eyebrow="Case studies"
          heading="Projects."
          subheading="Seven delivered builds — client platforms, organizational sites and product work. Each links to a full write-up: the challenge, the approach and the result."
          action={{ href: "/", label: "Back home" }}
        />
      </FadeIn>

      <div className="border-t border-line">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 40}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-4 md:gap-10 py-7 border-b border-line items-start"
              aria-label={`Read the ${project.title} case study`}
            >
              {/* Meta column */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-navy mb-2">
                  {categoryLabel[project.category] || project.category}
                </p>
                <p className="font-mono text-[11px] text-faint tnum">
                  {project.year}
                </p>
              </div>

              {/* Main */}
              <div>
                <h2 className="display text-xl sm:text-[1.45rem] font-semibold leading-snug group-hover:text-navy transition-colors">
                  {project.title}
                </h2>
                <p className="mt-1 font-mono text-[11px] text-faint tracking-wide">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-[14.5px] text-dim leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 6).map((t) => (
                    <Tag key={t} size="sm" variant="muted">
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Thumb + arrow */}
              <div className="hidden md:flex items-center gap-6">
                {project.image && (
                  <div className="w-36 h-24 border border-line overflow-hidden bg-raised">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain"
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
