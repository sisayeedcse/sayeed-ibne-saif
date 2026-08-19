import { cloudJourney, journeyStatusConfig } from "@/data/cloudJourney";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

const statusBgColor: Record<string, string> = {
  completed: "bg-green-500/10 border-green-500/30",
  learning:  "bg-blue-500/10  border-blue-500/30",
  building:  "bg-cyan-500/10  border-cyan-500/30",
  next:      "bg-amber-500/10 border-amber-500/30",
  planned:   "bg-elevated     border-border",
};

const stepDotColor: Record<string, string> = {
  completed: "bg-green-500 ring-green-500/20",
  learning:  "bg-blue-500  ring-blue-500/20",
  building:  "bg-cyan-400  ring-cyan-400/20",
  next:      "bg-amber-400 ring-amber-400/20",
  planned:   "bg-gray-700  ring-gray-700/20",
};

export default function CloudJourney() {
  return (
    <section
      id="journey"
      aria-label="Cloud engineering learning roadmap"
      className="py-24 border-t border-border bg-surface"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="05"
            label="Cloud Journey"
            heading="Building toward Cloud Engineering."
            subheading="My next stage is turning a networking and Linux foundation into practical cloud infrastructure skills — one layer at a time."
          />
        </FadeIn>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10" aria-label="Status legend">
          {Object.entries(journeyStatusConfig).map(([status, config]) => (
            <span
              key={status}
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-mono text-[11px] font-medium",
                statusBgColor[status],
                config.color
              )}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full", stepDotColor[status])} aria-hidden="true" />
              {config.label}
            </span>
          ))}
        </div>

        {/* Steps grid */}
        <ol
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-label="Cloud engineering roadmap steps"
        >
          {cloudJourney.map((step, i) => {
            const config = journeyStatusConfig[step.status];
            return (
              <FadeIn key={step.id} direction="up" delay={i * 50}>
                <li
                  className={cn(
                    "rounded-xl border p-5 transition-colors h-full",
                    statusBgColor[step.status]
                  )}
                >
                  {/* Step number + status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-gray-600">
                      {String(step.index).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.12em] uppercase font-medium",
                        config.color
                      )}
                    >
                      {config.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-200 mb-0.5">
                    {step.title}
                  </h3>
                  <p className="font-mono text-[10px] text-gray-600 tracking-wide uppercase mb-3">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
