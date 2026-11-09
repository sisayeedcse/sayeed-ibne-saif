import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "navy" | "muted" | "green" | "amber";
  size?: "sm" | "md";
}

const variantClasses: Record<NonNullable<TagProps["variant"]>, string> = {
  default: "bg-raised border border-line text-dim",
  navy:    "bg-navy-tint border border-navy/15 text-navy",
  muted:   "bg-transparent border border-line text-faint",
  green:   "bg-[#1E7B4D]/8 border border-[#1E7B4D]/20 text-green",
  amber:   "bg-[#96652A]/8 border border-[#96652A]/25 text-amber",
};

const sizeClasses: Record<NonNullable<TagProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-[10.5px]",
  md: "px-2.5 py-1 text-xs",
};

export default function Tag({
  children,
  variant = "default",
  size = "md",
  className,
  ...rest
}: TagProps) {
  return (
    <span
      {...rest}
      className={cn(
        "inline-flex items-center rounded-sm font-mono font-medium leading-none tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
