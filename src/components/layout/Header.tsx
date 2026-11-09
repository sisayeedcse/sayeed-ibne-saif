"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/projects", label: "Projects", match: (p: string) => p.startsWith("/projects") },
  { href: "/activities", label: "Activities", match: (p: string) => p.startsWith("/activities") },
  // Section anchors never claim the active pill — only page routes do
  { href: "/#education", label: "Education", match: (p: string) => false },
  { href: "/#experience", label: "Experience", match: (p: string) => false },
];

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper/90 backdrop-blur-sm transition-all",
        scrolled ? "border-b border-line" : "border-b border-transparent"
      )}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Logo lockup — navy monogram plate + SAYEED wordmark */}
        <Link
          href="/"
          className="group shrink-0 flex items-center gap-2.5"
          aria-label="Sayeed Ibne Saif — home"
        >
          <span
            className="shrink-0 w-8 h-8 rounded-[0.55rem] bg-navy text-paper font-serif text-[17px] font-semibold grid place-items-center leading-none shadow-[0_1px_3px_rgba(31,78,121,0.25)] transition-transform duration-300 group-hover:-rotate-3"
            aria-hidden="true"
          >
            S
          </span>
          <span className="flex items-start leading-none">
            <span className="font-sans text-[1.2rem] font-extrabold tracking-tight text-ink group-hover:text-navy transition-colors">
              SAYEED
            </span>
            <span
              className="font-mono text-[0.65rem] text-navy translate-y-0.5 ml-0.5"
              aria-hidden="true"
            >
              °
            </span>
          </span>
        </Link>

        {/* Floating pill nav */}
        <nav
          className="hidden md:flex items-center p-1 rounded-full border border-line bg-raised/70 shadow-[0_1px_2px_rgba(31,78,121,0.05)]"
          aria-label="Main navigation"
        >
          {navItems.map(({ href, label, match }) => {
            const active = match(pathname);
            return (
              <div
                key={href}
                className="relative flex rounded-full"
                data-active={active || undefined}
              >
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-4 py-1.5 text-[12.5px] rounded-full transition-colors",
                    active
                      ? "bg-surface text-ink font-medium shadow-[0_1px_3px_rgba(31,78,121,0.1)]"
                      : "text-dim hover:text-ink"
                  )}
                >
                  {label}
                </Link>
                {/* Current-page tick in the theme accent */}
                <span
                  className={cn(
                    "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-opacity",
                    active ? "opacity-100 bg-navy" : "opacity-0"
                  )}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-paper text-[12.5px] font-medium hover:bg-navy/90 transition-colors"
          >
            Résumé
            <ArrowUpRight size={13} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-dim hover:text-ink rounded-full border border-line bg-raised/70"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-b border-line bg-paper"
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="max-w-[1120px] mx-auto px-5 py-3">
            {navItems.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                role="menuitem"
                aria-current={match(pathname) ? "page" : undefined}
                className={cn(
                  "block px-3 py-3 text-[15px] border-b border-line last:border-0",
                  match(pathname) ? "text-navy font-medium" : "text-dim"
                )}
              >
                {label}
              </Link>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 text-[15px] text-navy border-t border-line"
            >
              Résumé ↗<span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
