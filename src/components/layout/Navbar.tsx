"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about",           label: "ABOUT" },
  { href: "#education",       label: "EDUCATION" },
  { href: "#experience",      label: "EXPERIENCE" },
  { href: "#projects",        label: "PROJECTS" },
  { href: "#skills",          label: "SKILLS" },
  { href: "#activities",      label: "ACHIEVEMENTS" },
  { href: "#certifications",  label: "CERTS" },
  { href: "#contact",         label: "CONTACT" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Active section via IntersectionObserver ──
     rootMargin "-35% 0px -55% 0px" creates a horizontal
     band in the middle of the viewport. Whichever section
     occupies that band is "active".
  ─────────────────────────────────────────────── */
  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((l) => l.href.slice(1))];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Close mobile menu on Escape / resize ── */
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    const onResize = () => { if (window.innerWidth >= 1024) closeMenu(); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [closeMenu]);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Smooth scroll without hash in URL ── */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    
    // Clear hash from address bar without reloading
    window.history.replaceState(null, "", window.location.pathname);
    
    const id = href.replace(/.*#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ── Logo click: reload and land on hero ── */
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    // Scroll to top to ensure we land on the hero section, then hard reload
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <>
      {/* ── Skip-to-content for accessibility ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      {/* ── Pill navbar ── */}
      <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-3 w-full max-w-[1180px] px-4 py-2 rounded-full"
          style={{
            background: "rgba(10,13,18,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 2px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            border: "1px solid rgba(37,43,53,0.8)",
          }}
        >
          {/* ── Left: name / role ── */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0 group cursor-pointer"
            aria-label="Reload and go to top"
            onClick={handleLogoClick}
          >
            <span className="font-mono font-black text-[12px] sm:text-[13px] text-gray-100 tracking-[0.1em] uppercase group-hover:text-blue-400 transition-colors">
              SAYEED IBNE SAIF
            </span>
            <span className="text-gray-600 font-mono text-[13px] leading-none hidden sm:inline">
              /
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-gray-500 tracking-wide uppercase whitespace-nowrap">
              CLOUD ENG.
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <div
            className="hidden lg:flex items-center gap-0.5"
            role="list"
          >
            {navLinks.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  role="listitem"
                  className={cn(
                    "px-3 py-1.5 rounded-full font-mono text-[11px] font-semibold tracking-[0.1em] transition-all whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                      : "text-gray-400 hover:text-gray-100 hover:bg-white/5"
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-gray-100 transition-colors rounded-full hover:bg-white/5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* ── Mobile menu — drops below the pill ── */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 max-w-[1180px] mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,13,18,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(37,43,53,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
            }}
            role="menu"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  role="menuitem"
                  onClick={(e) => handleNavClick(e, href)}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3.5 font-mono text-[12px] font-semibold tracking-[0.1em] transition-colors border-b last:border-0 cursor-pointer",
                    isActive
                      ? "text-blue-400 bg-blue-500/8 border-border-subtle"
                      : "text-gray-400 hover:text-gray-100 hover:bg-white/4 border-border-subtle"
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
                  )}
                  {!isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent shrink-0" aria-hidden="true" />
                  )}
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* ── Mobile overlay ── */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
