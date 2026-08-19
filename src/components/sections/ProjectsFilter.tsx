"use client";

import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects, type Project } from "@/data/projects";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group flex flex-col bg-[#0E1219] rounded-2xl overflow-hidden border border-border hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 h-full"
      aria-label={project.title}
    >
      {/* Project Image Banner */}
      {project.image && (
        <a 
          href={project.links?.live || project.links?.github || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-full h-[220px] sm:h-[240px] overflow-hidden block"
        >
          <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </a>
      )}

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.15em] text-blue-500 uppercase mb-2 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-mono tracking-wide text-gray-500 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex gap-2 shrink-0">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="p-2 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
              >
                <GitHubIcon size={16} />
              </a>
            )}
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live Site`}
                className="p-2 text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed text-gray-400 mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <Tag key={t} size="sm">
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsFilter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
