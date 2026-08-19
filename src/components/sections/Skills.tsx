import { techStack } from "@/data/techStack";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="05"
            label="Technical Stack"
            heading="Tools of the trade."
            subheading="Technologies I use to build, network, and deploy solutions."
          />
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          {/* ── Bento Box Container ── */}
          <div className="flex flex-col lg:flex-row bg-[#0E1219] border border-border rounded-3xl overflow-hidden shadow-2xl">
            
            {/* ── Left Side: Tech Grid ── */}
            <div className="flex-1 p-6 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-sm" aria-hidden="true" />
                <h3 className="font-bold text-gray-100 tracking-[0.15em] uppercase text-sm">
                  Skills & Tech Stack
                </h3>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center justify-center p-4 bg-[#141922] border border-border/50 rounded-xl hover:border-blue-500/40 hover:bg-[#1A212D] transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 transition-transform duration-300 group-hover:scale-110 ${
                        tech.invertDark ? "invert opacity-90" : ""
                      }`}
                      loading="lazy"
                    />
                    <span className="font-mono text-[9px] sm:text-[10px] text-gray-400 group-hover:text-gray-100 tracking-[0.08em] uppercase text-center transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Side: Quote / Mission ── */}
            <div className="w-full lg:w-[400px] xl:w-[450px] relative overflow-hidden flex flex-col justify-between p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-border min-h-[400px]">
              
              {/* Background image & gradient overlay */}
              <div 
                className="absolute inset-0 z-0 mix-blend-overlay opacity-30"
                style={{
                  backgroundImage: "url('/photo2.jpg')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  filter: "blur(6px)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950/80 to-[#0A0D12]/90" aria-hidden="true" />

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="text-5xl font-serif text-blue-500/40 mb-2 leading-none" aria-hidden="true">
                  "
                </div>
                <p className="text-lg sm:text-[22px] font-medium text-gray-100 leading-relaxed text-balance">
                  Building a robust foundation in software engineering and networking to architect scalable, secure, and impactful cloud infrastructure solutions.
                </p>
              </div>

              {/* Author Strip */}
              <div className="relative z-10 mt-12 pt-6 border-t border-white/10">
                <h4 className="font-bold text-gray-100 tracking-wider uppercase text-sm mb-1">
                  Sayeed Ibne Saif
                </h4>
                <p className="font-mono text-[10px] text-blue-400 tracking-[0.1em] uppercase">
                  CSE Student & Cloud Enthusiast
                </p>
                
                {/* Decorative dots (matching reference image style) */}
                <div className="absolute right-0 bottom-2 flex gap-1.5" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-blue-500 rounded-sm rotate-45 opacity-60"
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
