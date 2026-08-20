"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { X, Award, ZoomIn } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

/* ── Certificate thumbnail card ─────────────── */
function CertCard({
  cert,
  index,
  onClick,
}: {
  cert: Certification;
  index: number;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <FadeIn direction="up" delay={index * 60}>
      <button
        onClick={onClick}
        className="group text-left w-full bg-elevated border border-border hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)] cursor-pointer"
        aria-label={`View certificate: ${cert.name}`}
      >
        {/* ── Thumbnail area ── */}
        <div className="relative aspect-[4/3] bg-surface overflow-hidden">
          {/* Certificate image */}
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-[1.04]"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            /* Placeholder when image is missing */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface">
              <Award
                size={36}
                className="text-blue-500/25"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] text-gray-600 text-center px-4 leading-snug uppercase tracking-wide">
                {cert.name}
              </span>
              <span className="font-mono text-[9px] text-gray-700">
                Image missing
              </span>
            </div>
          )}

          {/* Hover overlay with "VIEW" pill */}
          <div
            className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-900/30 transition-colors duration-200 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-mono font-bold px-3 py-1.5 rounded-full tracking-[0.08em] shadow-lg">
              <ZoomIn size={12} aria-hidden="true" />
              VIEW
            </div>
          </div>
        </div>

        {/* ── Card info ── */}
        <div className="p-4">
          <h3 className="text-[13px] font-bold text-gray-100 leading-snug uppercase tracking-wide mb-1.5">
            {cert.name}
          </h3>
          <p className="font-mono text-[11px] text-blue-400">{cert.issuer}</p>
          <p className="font-mono text-[11px] text-gray-600 mt-0.5">{cert.date}</p>
        </div>
      </button>
    </FadeIn>
  );
}

/* ── Lightbox / modal ────────────────────────── */
function CertModal({
  cert,
  onClose,
}: {
  cert: Certification;
  onClose: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Focus the close button when modal opens */
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  /* Close on Escape; lock body scroll */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.name}`}
    >
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/88"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-[720px] rounded-2xl overflow-hidden border border-border bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.8)]">

        {/* ── Close button — top right, red on hover (matches reference) ── */}
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
          aria-label="Close certificate viewer"
        >
          <X size={18} />
        </button>

        {/* ── Certificate image ── */}
        <div className="bg-surface flex items-center justify-center p-4 sm:p-6 min-h-[300px]">
          {!imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cert.image}
              alt={`${cert.name} certificate`}
              className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-lg"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-4 py-16">
              <Award size={56} className="text-blue-500/20" aria-hidden="true" />
              <div className="text-center">
                <p className="font-mono text-sm text-gray-400 mb-1">Image not found</p>
                <p className="font-mono text-xs text-gray-600">
                  Add to:{" "}
                  <code className="text-blue-500/70">{cert.image}</code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer strip — title + issuer (matches reference layout) ── */}
        <div className="bg-elevated border-t border-border px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-bold text-sm text-gray-100 uppercase tracking-[0.08em] mb-1">
                {cert.name}
              </h3>
              <p className="font-mono text-[11px] text-blue-400 tracking-wide">
                {cert.issuer} · {cert.date}
              </p>
            </div>
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-mono text-[11px] text-gray-500 hover:text-blue-400 transition-colors"
              >
                Verify →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section export ──────────────────────────── */
export default function CertificateGallery() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);
  const openCert = useCallback((cert: Certification) => setActiveCert(cert), []);
  const closeCert = useCallback(() => setActiveCert(null), []);

  return (
    <section
      id="certifications"
      aria-label="Certifications"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="07"
            label="Certifications"
            heading={`Verified learning. (${certifications.length})`}
            subheading="Certificates from online courses and technical challenges. Click any card to view the full certificate."
          />
        </FadeIn>

        {/* ── Certificate grid — 3 cols on desktop, 2 on tablet, 1 on mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={i}
              onClick={() => openCert(cert)}
            />
          ))}
        </div>

        {/* ── Lightbox modal ── */}
        {activeCert && (
          <CertModal cert={activeCert} onClose={closeCert} />
        )}
      </div>
    </section>
  );
}
