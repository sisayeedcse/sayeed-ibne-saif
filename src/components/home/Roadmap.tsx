import { cloudJourney, journeyStatusConfig } from "@/data/cloudJourney";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";
import { IsoSteps } from "@/components/ui/Schematics";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-16 sm:py-20 rule" aria-label="Learning roadmap">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative">
        <IsoSteps className="absolute right-0 -top-6 xl:-right-2 xl:-top-4 w-[104px] sm:w-[128px] xl:w-[180px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-100" />
        <FadeIn>
          <SectionHeader
            index="02"
            eyebrow="Roadmap"
            heading="How I'm getting there."
            subheading="A staged plan from software foundations to operating real infrastructure — each stage anchored to something concrete."
          />
        </FadeIn>

        <FadeIn delay={80}>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-line bg-surface divide-y sm:divide-y lg:divide-y-0 lg:divide-x divide-line lg:grid-cols-none">
            {cloudJourney.map((step, i) => {
              const status = journeyStatusConfig[step.status];
              return (
                <li key={step.id} className={`p-6 ${i === 0 ? "" : ""}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-semibold text-ink/20 tnum leading-none">
                      {String(step.index).padStart(2, "0")}
                    </span>
                    <Tag
                      size="sm"
                      variant={
                        step.status === "completed"
                          ? "green"
                          : step.status === "learning" || step.status === "building"
                          ? "navy"
                          : "muted"
                      }
                      className="uppercase tracking-[0.12em]"
                    >
                      {status.label}
                    </Tag>
                  </div>
                  <h3 className="font-semibold text-ink text-[15px] leading-snug">
                    {step.title}
                    <span className="block font-mono text-[10px] font-normal tracking-[0.14em] uppercase text-faint mt-1">
                      {step.subtitle}
                    </span>
                  </h3>
                  <p className="mt-2.5 text-[13px] text-dim leading-relaxed">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
