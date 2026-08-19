import { Briefcase, Users, Calendar, MapPin, ChevronRight, Terminal } from "lucide-react";
import { experience, type ExperienceItem } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isLeadership = item.type === "leadership";
  const isFirst = index === 0;

  return (
    <article
      className={`group relative bg-elevated border border-border hover:border-border-subtle rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col h-full ${
        isFirst ? "md:col-span-2" : "col-span-1"
      }`}
      aria-label={`${item.title} at ${item.organization}`}
    >
      {/* ── Accent line top ── */}
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] transition-colors duration-300 ${
          isLeadership
            ? "bg-cyan-500/40 group-hover:bg-cyan-400"
            : "bg-blue-600/40 group-hover:bg-blue-500"
        }`}
        aria-hidden="true"
      />

      <div className="p-6 sm:p-8 flex flex-col h-full">
        {/* ── Header: Icon, Title, Org & Meta ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-5 pb-5 border-b border-border/50">
          <div className="flex items-start gap-4">
            <div
              className={`p-2.5 rounded-xl shrink-0 border ${
                isLeadership
                  ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                  : "bg-blue-500/10 border-blue-500/20 text-blue-400"
              }`}
              aria-hidden="true"
            >
              {isLeadership ? <Users size={20} /> : <Terminal size={20} />}
            </div>
            <div>
              <h3 className="font-bold text-gray-100 text-lg sm:text-xl leading-tight mb-1">
                {item.title}
              </h3>
              <p className="font-mono text-[11.5px] text-gray-400 uppercase tracking-wider">
                {item.organization}
              </p>
            </div>
          </div>

          {/* Desktop Meta (Period & Location) */}
          <div className="hidden sm:flex flex-col items-end gap-2 text-right shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500 bg-surface px-2.5 py-1 rounded-md border border-border">
              <Calendar size={12} className="text-gray-400" /> {item.period}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500 px-1">
              <MapPin size={12} className="text-gray-400" /> {item.location}
            </div>
          </div>
        </div>

        {/* Mobile Meta (Period & Location) */}
        <div className="flex sm:hidden flex-wrap items-center gap-3 mb-6 pb-5 border-b border-border/50">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500 bg-surface px-2.5 py-1 rounded-md border border-border">
            <Calendar size={12} className="text-gray-400" /> {item.period}
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-500">
            <MapPin size={12} className="text-gray-400" /> {item.location}
          </div>
        </div>

        {/* ── Body: Description & Highlights ── */}
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {item.description}
        </p>

        <div className="mb-8 flex-grow">
          <ul
            className={`grid gap-x-6 gap-y-3 ${
              isFirst ? "sm:grid-cols-2" : "grid-cols-1"
            }`}
            aria-label="Key responsibilities and achievements"
          >
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-gray-400 group/item">
                <ChevronRight
                  size={14}
                  className={`mt-[3px] shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 ${
                    isLeadership ? "text-cyan-500/60" : "text-blue-500/60"
                  }`}
                  aria-hidden="true"
                />
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Footer: Tech Stack ── */}
        {item.tech && item.tech.length > 0 && (
          <div className="mt-auto pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-2" aria-label="Technologies used">
              {item.tech.map((t) => (
                <Tag key={t} size="sm" variant="default" className="bg-surface hover:bg-white/5 transition-colors cursor-default">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience and Leadership"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="03"
            label="Experience & Leadership"
            heading="Real work. Real clients. Real responsibility."
            subheading="Three years of freelance development and active IEEE leadership — building professional and communication skills alongside technical ones."
          />
        </FadeIn>

        {/* ── Dashboard Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item, i) => (
            <FadeIn
              key={item.id}
              direction="up"
              delay={i * 80}
              className={i === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <ExperienceCard item={item} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
