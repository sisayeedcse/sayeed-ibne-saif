import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "muted" | "status-green" | "status-cyan" | "status-amber";
  size?: "sm" | "md";
}

const variantClasses: Record<NonNullable<TagProps["variant"]>, string> = {
  default:        "bg-surface border border-border text-gray-400",
  accent:         "bg-blue-500/10 border border-blue-500/30 text-blue-400",
  muted:          "bg-elevated text-gray-500",
  "status-green": "bg-green-500/10 border border-green-500/30 text-green-400",
  "status-cyan":  "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400",
  "status-amber": "bg-amber-500/10 border border-amber-500/30 text-amber-400",
};

const sizeClasses: Record<NonNullable<TagProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-[11px]",
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
        "inline-flex items-center rounded font-mono font-medium leading-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
