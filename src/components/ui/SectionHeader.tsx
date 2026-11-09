import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  index?: string;          // e.g. "01" editorial numbering
  heading: string;
  subheading?: string;
  action?: { href: string; label: string; external?: boolean };
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  index,
  heading,
  subheading,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-12", className)}>
      <div className="flex items-center gap-4 mb-5">
        {index && (
          <span className="font-mono text-[11px] font-semibold tnum text-navy">
            {index}
          </span>
        )}
        {eyebrow && <span className="eyebrow text-faint">{eyebrow}</span>}
        <span className="flex-1 h-px bg-line" aria-hidden="true" />
        {action &&
          (action.external ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-faint hover:text-navy transition-colors whitespace-nowrap"
            >
              {action.label} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <a
              href={action.href}
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-faint hover:text-navy transition-colors whitespace-nowrap"
            >
              {action.label} <span aria-hidden="true">→</span>
            </a>
          ))}
      </div>

      <h2 className="display text-[1.7rem] sm:text-[2rem] font-semibold leading-[1.15] max-w-2xl">
        {heading}
      </h2>

      {subheading && (
        <p className="mt-3 text-dim text-base leading-relaxed max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
