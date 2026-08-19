"use client";

import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to get initial scroll position
    setScrollY(window.scrollY);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate animation values based on scroll position
  // Max scroll assumed around 2500px for full effect
  const progress = Math.min(scrollY / 2500, 1); // 0 to 1
  
  // Scale from 1 to 1.1
  const scale = 1 + (progress * 0.10);
  
  // Grayscale from 0% to 100%
  const grayscale = progress * 100;

  // Brightness from 100% down to 60% (darkens as you scroll down)
  const brightness = 100 - (progress * 40);

  return (
    <>
      {/* Global Background Image (Mobile: < 768px) */}
      <div 
        className="fixed inset-0 -z-50 md:hidden will-change-transform"
        style={{ 
          backgroundImage: "url('/photo2.jpg')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `scale(${scale})`,
          filter: `grayscale(${grayscale}%) brightness(${brightness}%)`,
          transition: "transform 0.15s ease-out, filter 0.15s ease-out"
        }}
        aria-hidden="true"
      />

      {/* Global Background Image (Desktop/Tablet: >= 768px) */}
      <div 
        className="fixed inset-0 -z-50 hidden md:block will-change-transform"
        style={{ 
          backgroundImage: "url('/bg-desktop.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `scale(${scale})`,
          filter: `grayscale(${grayscale}%) brightness(${brightness}%)`,
          transition: "transform 0.15s ease-out, filter 0.15s ease-out"
        }}
        aria-hidden="true"
      />
    </>
  );
}
