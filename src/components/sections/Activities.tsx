"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { activities } from "@/data/activities";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";

export default function Activities() {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeImage]);

  /* Close modal on escape key */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section
        id="activities"
        aria-label="Technical activities and community involvement"
        className="py-24 border-t border-border"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn direction="up">
            <SectionHeader
              index="06"
              label="Technical Activities"
              heading="Community, learning and technical programs."
              subheading="Active participation in IEEE technical events — organizing programs, contributing to the technical community and expanding knowledge beyond the classroom."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((activity, i) => (
              <FadeIn key={activity.id} direction="up" delay={i * 60}>
                <article
                  className="bg-elevated border border-border rounded-xl overflow-hidden h-full flex flex-col group"
                  aria-label={activity.title}
                >
                  {activity.image && (
                    <button 
                      onClick={() => setActiveImage({ src: activity.image!, title: activity.title })}
                      className="w-full h-48 overflow-hidden relative border-b border-border/50 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label={`View full image for ${activity.title}`}
                    >
                      <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-blue-900/30 transition-colors z-10 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-mono font-bold px-3 py-1.5 rounded-full tracking-[0.08em] shadow-lg">
                          <ZoomIn size={12} aria-hidden="true" />
                          VIEW
                        </div>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: activity.imagePosition || "center" }}
                        loading="lazy"
                      />
                    </button>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-100 leading-snug mb-1">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-gray-500">{activity.organization}</p>
                      {activity.period && (
                        <p className="font-mono text-[11px] text-gray-600 mt-0.5">{activity.period}</p>
                      )}
                    </div>

                    <p className="text-[13px] text-gray-400 leading-relaxed flex-1">
                      {activity.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2" role="list" aria-label="Activity tags">
                      {activity.tags.map((tag) => (
                        <Tag key={tag} size="sm" role="listitem">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Modal ── */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing image: ${activeImage.title}`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/88 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
            aria-hidden="true"
          />
          
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-[900px] rounded-2xl overflow-hidden border border-border bg-elevated shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/50 text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Close image viewer"
            >
              <X size={18} />
            </button>
            
            <div className="bg-surface flex items-center justify-center p-4 sm:p-6 min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
              />
            </div>
            
            <div className="bg-elevated border-t border-border px-5 py-4">
              <h3 className="font-bold text-sm text-gray-100 uppercase tracking-[0.08em]">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
