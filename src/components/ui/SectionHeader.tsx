import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;       // e.g. "01"
  label: string;       // e.g. "ABOUT"
  heading?: string;
  subheading?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  index,
  label,
  heading,
  subheading,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      {/* Section index + label */}
      <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center")}>
        <span className="font-mono text-[11px] tracking-[0.14em] text-blue-500 uppercase">
          {index}
        </span>
        <span className="w-6 h-px bg-border" aria-hidden="true" />
        <span className="font-mono text-[11px] tracking-[0.14em] text-gray-500 uppercase">
          {label}
        </span>
      </div>

      {/* Heading */}
      {heading && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 leading-snug tracking-tight max-w-2xl">
          {heading}
        </h2>
      )}

      {/* Sub-heading */}
      {subheading && (
        <p className="mt-3 text-gray-400 text-base leading-relaxed max-w-xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
