import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 sm:py-20" aria-label="Selected case studies">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        <FadeIn>
          <SectionHeader
            index="01"
            eyebrow="Selected work"
            heading="Highlighted builds."
            subheading="Each of these started as a real requirement and shipped publicly. Every one has a dedicated case study."
            action={{ href: "/projects", label: "All projects" }}
          />
        </FadeIn>

        <div className="space-y-4">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 60}>
              <Link
                href={`/projects/${project.slug}`}
                className="group card-lift block border border-line bg-surface"
                aria-label={`Read the ${project.title} case study`}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Thumbnail */}
                  {project.image && (
                    <div className="sm:w-[360px] shrink-0 border-b sm:border-b-0 sm:border-r border-line bg-raised p-4 sm:p-5 flex items-center h-44 sm:h-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={`${project.title} — interface`}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] tnum text-faint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-navy">
                          {project.category}
                        </span>
                      </div>
                      <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-navy opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Read case study →
                      </span>
                    </div>

                    <h3 className="display text-xl sm:text-2xl font-semibold leading-snug group-hover:text-navy transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-faint tracking-wide">
                      {project.subtitle} · {project.year}
                    </p>

                    <p className="mt-4 text-[15px] text-dim leading-relaxed max-w-prose">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-5">
                      {project.tech.slice(0, 5).map((t) => (
                        <Tag key={t} size="sm" variant="muted">
                          {t}
                        </Tag>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="font-mono text-[10px] text-faint">
                          +{project.tech.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
