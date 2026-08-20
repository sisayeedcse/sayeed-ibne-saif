"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { activities } from "@/data/activities";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import FadeIn from "@/components/ui/FadeIn";

export default function Activities() {
  const [activeImage, setActiveImage] = useState<{ src: string; src2?: string; title: string } | null>(null);

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
              label="Activities & Achievements"
              heading="Hackathons, leadership and community."
              subheading="Active participation in competitive hackathons and technical events — organizing programs, building software under pressure, and expanding knowledge beyond the classroom."
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
                      onClick={() => setActiveImage({ src: activity.image!, src2: activity.image2, title: activity.title })}
                      className="w-full h-48 overflow-hidden relative border-b border-border/50 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 flex"
                      aria-label={`View full image for ${activity.title}`}
                    >
                      <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-blue-900/30 transition-colors z-20 flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-mono font-bold px-3 py-1.5 rounded-full tracking-[0.08em] shadow-lg">
                          <ZoomIn size={12} aria-hidden="true" />
                          VIEW
                        </div>
                      </div>
                      
                      {!activity.image2 ? (
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ objectPosition: activity.imagePosition || "center" }}
                          loading="lazy"
                        />
                      ) : (
                        <>
                          <div className="w-[60%] h-full relative overflow-hidden border-r border-border">
                            <img 
                              src={activity.image} 
                              alt={`${activity.title} - 1`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ objectPosition: activity.imagePosition || "center" }}
                              loading="lazy"
                            />
                          </div>
                          <div className="w-[40%] h-full relative overflow-hidden">
                            <img 
                              src={activity.image2} 
                              alt={`${activity.title} - 2`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              style={{ objectPosition: "center" }}
                              loading="lazy"
                            />
                            {/* A subtle dark gradient over the second image to make it look like a secondary panel */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                          </div>
                        </>
                      )}
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
                      {activity.link && (
                        <span className="block mt-2">
                          <a 
                            href={activity.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
                          >
                            {activity.linkText || "View Project"} →
                          </a>
                        </span>
                      )}
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

          {/* ── Leadership Timeline ── */}
          <div className="mt-24 max-w-3xl mx-auto">
            <FadeIn direction="up">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[1px] bg-blue-500" />
                <h3 className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-blue-400 font-bold">
                  Leadership Journey
                </h3>
                <div className="flex-1 h-[1px] bg-border" />
              </div>
            </FadeIn>

            <div className="relative border-l border-border ml-2 sm:ml-4">
              
              {/* Role 1: Chairperson (Future/Current) */}
              <FadeIn direction="up" delay={0}>
                <div className="relative pl-8 sm:pl-12 py-6 group">
                  {/* Glowing Node */}
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-[#0A0D12] rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                      Chairperson
                    </h4>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 font-mono text-[10px] uppercase tracking-wider rounded border border-blue-500/20">
                      Present
                    </span>
                  </div>
                  <p className="text-[15px] text-gray-400 leading-relaxed font-medium">
                    IEEE Computer Society Premier University Student Branch Chapter
                  </p>
                </div>
              </FadeIn>

              {/* Role 2: General Secretary */}
              <FadeIn direction="up" delay={100}>
                <div className="relative pl-8 sm:pl-12 py-6 group">
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-[#0A0D12] rounded-full border-2 border-gray-600 flex items-center justify-center transition-colors group-hover:border-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-gray-100 transition-colors">
                      General Secretary
                    </h4>
                    <span className="font-mono text-xs text-gray-500 tracking-wider">
                      2025
                    </span>
                  </div>
                  <p className="text-[14px] text-gray-400 leading-relaxed">
                    IEEE Computer Society Premier University Student Branch Chapter
                  </p>
                </div>
              </FadeIn>

              {/* Role 3: Additional Webmaster */}
              <FadeIn direction="up" delay={200}>
                <div className="relative pl-8 sm:pl-12 py-6 group">
                  <div className="absolute -left-[9px] top-8 w-4 h-4 bg-[#0A0D12] rounded-full border-2 border-gray-600 flex items-center justify-center transition-colors group-hover:border-gray-400">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-gray-100 transition-colors">
                      Additional Webmaster
                    </h4>
                    <span className="font-mono text-xs text-gray-500 tracking-wider">
                      2025
                    </span>
                  </div>
                  <p className="text-[14px] text-gray-400 leading-relaxed">
                    IEEE Premier University Student Branch
                  </p>
                </div>
              </FadeIn>

            </div>
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
            
            <div className="bg-surface flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 gap-4 min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={activeImage.src} 
                alt={activeImage.title}
                className="w-full md:w-auto md:max-w-[50%] max-h-[70vh] object-contain rounded-lg shadow-lg"
              />
              {activeImage.src2 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={activeImage.src2} 
                  alt={`${activeImage.title} 2`}
                  className="w-full md:w-auto md:max-w-[50%] max-h-[70vh] object-contain rounded-lg shadow-lg"
                />
              )}
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
