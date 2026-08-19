/* ── Shared utils ───────────────────────────── */

/**
 * Lightweight className joiner.
 * Filters out falsy values and joins with a space.
 * Use this everywhere instead of string template literals.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
