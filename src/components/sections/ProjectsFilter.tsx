"use client";

import { useState } from "react";
import { ExternalLink, Clock } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const isComingNext = project.category === "coming-next";

  return (
    <article
      className={cn(
        "rounded-xl border p-5 flex flex-col gap-4 transition-colors h-full",
        isComingNext
          ? "bg-elevated/40 border-border-subtle border-dashed"
          : "bg-elevated border-border hover:border-gray-600"
      )}
      aria-label={project.title}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className={cn(
                "font-mono text-[10px] tracking-[0.12em] uppercase",
                isComingNext ? "text-gray-600" : "text-blue-500"
              )}
            >
              {isComingNext ? "COMING NEXT" : project.category.toUpperCase()}
            </span>
          </div>
          <h3
            className={cn(
              "text-sm font-semibold leading-snug",
              isComingNext ? "text-gray-500" : "text-gray-100"
            )}
          >
            {project.title}
          </h3>
          <p className={cn("text-xs mt-0.5", isComingNext ? "text-gray-600" : "text-gray-500")}>
            {project.subtitle}
          </p>
        </div>

        {isComingNext ? (
          <Clock size={14} className="text-gray-700 shrink-0 mt-0.5" aria-label="Planned project" />
        ) : (
          <div className="flex gap-1 shrink-0">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="p-1.5 text-gray-600 hover:text-gray-300 transition-colors rounded"
              >
              <GitHubIcon size={14} />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="p-1.5 text-gray-600 hover:text-gray-300 transition-colors rounded"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <p className={cn("text-sm leading-relaxed flex-1", isComingNext ? "text-gray-600" : "text-gray-400")}>
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t} size="sm" variant={isComingNext ? "muted" : "default"}>
            {t}
          </Tag>
        ))}
      </div>
    </article>
  );
}

export default function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

  const completedProjects = projects.filter((p) => p.category !== "coming-next");
  const comingNext = projects.filter((p) => p.category === "coming-next");

  const filtered =
    activeCategory === "all"
      ? completedProjects
      : completedProjects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-1 mb-8 p-1 bg-surface border border-border rounded-lg w-fit"
      >
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded transition-colors font-mono tracking-wide",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-300"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-gray-600 font-mono text-sm">
          No projects in this category yet.
        </div>
      )}

      {/* Coming next */}
      <div className="mt-6">
        <p className="font-mono text-[11px] tracking-[0.14em] text-gray-600 uppercase mb-4">
          Currently Building / Planned Next
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {comingNext.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
