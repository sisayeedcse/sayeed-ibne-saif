import { skillCategories } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { ChipGrid } from "@/components/ui/Schematics";

export default function Stack() {
  const primary = skillCategories.filter((c) =>
    ["cloud-infra", "systems", "networking", "programming"].includes(c.id)
  );
  const secondary = skillCategories.filter((c) =>
    ["web", "mobile", "databases", "ai-data"].includes(c.id)
  );

  return (
    <section id="stack" className="py-16 sm:py-20 rule" aria-label="Technical stack">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative">
        <ChipGrid className="absolute right-0 -top-12 sm:-top-10 xl:-top-4 w-[120px] sm:w-[150px] xl:w-[220px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-100" />
        <FadeIn>
          <SectionHeader
            index="06"
            eyebrow="Stack"
            heading="What I work with."
            subheading="Counted honestly — the cloud and systems track is mid-build, and the categories below say exactly that."
          />
        </FadeIn>

        <FadeIn delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...primary, ...secondary].map((cat) => (
              <div
                key={cat.id}
                className="border border-line bg-surface p-5 flex items-start justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <h3 className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink font-semibold">
                      {cat.label}
                    </h3>
                    {cat.note && (
                      <span className="font-mono text-[9.5px] tracking-[0.12em] uppercase text-faint border border-line rounded-full px-2 py-0.5">
                        {cat.note}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-raised text-[11.5px] text-dim rounded-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="font-serif text-2xl font-semibold text-ink/15 tnum leading-none shrink-0">
                  {cat.skills.length}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
