import { experience } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";
import { OrgTree } from "@/components/ui/Schematics";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 rule" aria-label="Experience">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 relative">
        <OrgTree className="absolute right-0 -top-8 xl:-top-2 w-[108px] sm:w-[132px] xl:w-[220px] h-auto pointer-events-none select-none opacity-40 sm:opacity-50 xl:opacity-100" />
        <FadeIn>
          <SectionHeader
            index="03"
            eyebrow="Experience"
            heading="Roles & responsibilities."
            subheading="Independent client delivery since early 2023, alongside IEEE Computer Society leadership at Premier University."
          />
        </FadeIn>

        <div className="border-t border-line">
          {experience.map((item, i) => (
            <FadeIn key={item.id} delay={i * 60}>
              <article
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-10 py-8 border-b border-line"
                aria-label={`${item.title} — ${item.organization}`}
              >
                {/* Left: title & org */}
                <div>
                  <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-faint mb-2 tnum">
                    {item.period}
                  </p>
                  <h3 className="display text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-navy">{item.organization}</p>
                  <p className="mt-1 text-[13px] text-faint">{item.location}</p>
                </div>

                {/* Right: description + highlights */}
                <div>
                  <p className="text-[15px] text-dim leading-relaxed">
                    {item.description}
                  </p>
                  {item.highlights.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13.5px] text-dim leading-snug">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-navy/50 shrink-0" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((t) => (
                        <Tag key={t} size="sm" variant="muted">
                          {t}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
