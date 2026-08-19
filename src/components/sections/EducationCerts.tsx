import { GraduationCap, BookOpen, Activity } from "lucide-react";
import { education } from "@/data/education";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

export default function EducationCerts() {
  const edu = education[0]; // Currently only 1 education item

  return (
    <section
      id="education"
      aria-label="Education"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <FadeIn direction="up">
          <SectionHeader
            index="02"
            label="Education"
            heading="Academic foundation."
            subheading="Bridging theoretical computer science with practical infrastructure engineering."
          />
        </FadeIn>

        <FadeIn direction="up" delay={100}>
          <div className="relative bg-[#0E1219] border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* ── Left Side: Degree Info & Coursework ── */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0 mt-1">
                    <GraduationCap size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 mt-1.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="px-3 py-1.5 bg-[#141922] border border-border/50 rounded-md font-mono text-[11.5px] text-gray-300">
                    {edu.period}
                  </span>
                  <span className="px-3 py-1.5 bg-[#141922] border border-border/50 rounded-md font-mono text-[11.5px] text-gray-300">
                    {edu.location}
                  </span>
                  <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-md font-mono text-[11.5px] text-blue-400 font-semibold tracking-wide">
                    Expected Grad: Nov 2026
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-4 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen size={14} className="text-blue-400" aria-hidden="true" />
                  <span className="font-mono text-[11px] tracking-[0.15em] text-gray-400 uppercase">
                    Relevant Coursework
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {edu.coursework.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1.5 bg-[#141922] border border-border hover:border-blue-500/30 text-gray-300 text-xs sm:text-[13px] rounded-lg transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right Side: CGPA Highlight ── */}
            <div className="w-full lg:w-[320px] xl:w-[380px] bg-gradient-to-b from-[#141922] to-[#0A0D12] border-t lg:border-t-0 lg:border-l border-border p-8 sm:p-10 flex flex-col items-center justify-center relative group overflow-hidden min-h-[300px]">
              
              {/* Background glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-500" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-600/10 blur-[80px] rounded-full" aria-hidden="true" />
              
              <Activity size={24} className="text-blue-500/40 mb-4" aria-hidden="true" />
              
              <span className="font-mono text-blue-400 text-xs tracking-[0.2em] uppercase mb-4 relative z-10 text-center">
                Current CGPA
              </span>
              
              <div className="relative z-10 flex items-baseline gap-1" aria-label="CGPA 3.83 out of 4.00">
                <span className="text-7xl sm:text-[84px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter leading-none">
                  3.83
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-600">
                  /4.00
                </span>
              </div>

              <div className="mt-8 text-center relative z-10">
                <p className="text-sm text-gray-400 leading-relaxed max-w-[240px] mx-auto">
                  Maintaining high academic performance while building practical infrastructure skills.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
