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
            subheading="A selection of my recent web development work, including client e-commerce platforms, organizational websites, and custom web applications."
          />
        </FadeIn>
        <ProjectsFilter />
      </div>
    </section>
  );
}
