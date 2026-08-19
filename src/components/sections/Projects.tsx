import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import ProjectsFilter from "./ProjectsFilter";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="04"
            label="Projects"
            heading="What I've built."
            subheading="Real projects across web, mobile and software. Cloud and infrastructure projects are in progress — they'll appear here as they're completed."
          />
        </FadeIn>
        <ProjectsFilter />
      </div>
    </section>
  );
}
