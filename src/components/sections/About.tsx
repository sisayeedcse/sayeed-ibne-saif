import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";

const careerPath = [
  {
    step: "Software Development",
    note: "Foundation",
    detail: "Started here — programming, web and mobile apps, client projects.",
    done: true,
  },
  {
    step: "Networking",
    note: "Foundation",
    detail: "Computer networks, TCP/IP, protocols, network security basics.",
    done: true,
  },
  {
    step: "Linux & Systems",
    note: "Foundation",
    detail: "Shell scripting, server administration, file systems, processes.",
    done: true,
  },
  {
    step: "Cloud",
    note: "Building",
    detail: "Cloud fundamentals, platform services, deployment and architecture.",
    done: false,
  },
  {
    step: "Infrastructure & DevOps",
    note: "Direction",
    detail: "IaC, containers, CI/CD, monitoring, reliability engineering.",
    done: false,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Sayeed"
      className="py-24 border-t border-border"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20">

          {/* ── Left: narrative ── */}
          <FadeIn direction="up">
            <SectionHeader
              index="01"
              label="About"
              heading="From building applications to understanding the systems behind them."
            />
            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                I started my technical journey writing code — web development, Android apps, client
                projects. That hands-on experience gave me a solid software foundation: how
                applications are structured, how data flows, how real clients use technology.
              </p>
              <p>
                Over time, my curiosity expanded outward. I started asking questions about the
                systems <em>underneath</em> the applications: How are servers configured? How do
                networks route traffic? How does a deployment actually work? That shift led me
                toward networking, Linux and now cloud infrastructure.
              </p>
              <p>
                My goal is to become a Cloud / Infrastructure Engineer — someone who understands
                both the application layer and the infrastructure it runs on. My software background
                is an advantage: I can read the code, reason about system design, and communicate
                with development teams, not just manage the infrastructure.
              </p>
              <p>
                I am honest about where I am: a final-year student, actively building practical
                skills in networking, Linux and cloud — not yet a working cloud engineer, but
                deliberately building toward it.
              </p>
            </div>
          </FadeIn>

          {/* ── Right: career path ── */}
          <FadeIn direction="left" delay={120}>
            <div className="bg-surface border border-border rounded-xl p-6">
              <p className="font-mono text-[10px] tracking-[0.14em] text-gray-600 uppercase mb-6">
                Career Path
              </p>
              <ol className="relative" aria-label="Career progression">
                {careerPath.map((item, i) => (
                  <li key={item.step} className="flex gap-4 pb-7 last:pb-0">
                    {/* Connector line + dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-2.5 h-2.5 rounded-full shrink-0 mt-0.5 ring-2 ring-offset-2 ring-offset-surface ${
                          item.done
                            ? "bg-blue-500 ring-blue-500/30"
                            : "bg-elevated ring-border"
                        }`}
                        aria-hidden="true"
                      />
                      {i < careerPath.length - 1 && (
                        <div
                          className={`w-px flex-1 mt-2 ${
                            item.done ? "bg-blue-500/30" : "bg-border"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm font-semibold ${
                            item.done ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {item.step}
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-wide uppercase ${
                            item.done ? "text-blue-500" : "text-gray-600"
                          }`}
                        >
                          {item.note}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] text-gray-500 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
