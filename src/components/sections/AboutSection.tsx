"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Placeholder stat cards
const STATS = [
  { value: "—",  label: "Years Experience",  sublabel: "Add in Phase 2" },
  { value: "—",  label: "Projects Built",     sublabel: "Add in Phase 2" },
  { value: "—",  label: "Technologies",       sublabel: "Add in Phase 2" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad relative"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <SectionHeader
              label="About"
              title="Building at the intersection of engineering and craft"
              id="about-heading"
            />

            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  {/* Phase 2: Add real bio here */}
                  Bio paragraph one will go here. Describe who you are, what drives you, and your engineering philosophy. Keep it genuine and specific.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  {/* Phase 2: Add second paragraph */}
                  Bio paragraph two — talk about your interests in AI, systems, or product thinking. Mention what you&apos;re currently focused on.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  {/* Phase 2: Add closing thought */}
                  Closing thought — what are you building toward? What matters to you outside of code?
                </p>
              </FadeIn>
            </div>

            {/* Currently section */}
            <FadeIn delay={0.4} className="mt-10">
              <div className="card p-5 space-y-3">
                <span className="section-label text-xs" style={{ fontSize: "0.625rem" }}>Currently</span>
                <ul className="space-y-2 mt-2" role="list">
                  {[
                    "🎓  [Add current study / degree — Phase 2]",
                    "💼  [Add current role / internship — Phase 2]",
                    "🔭  [Add what you're exploring — Phase 2]",
                  ].map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right — stats + visual */}
          <div className="space-y-6">
            {/* Avatar / visual placeholder */}
            <FadeIn delay={0.15} direction="left">
              <div
                className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden card-elevated"
                aria-label="Profile photo placeholder"
              >
                {/* Gradient placeholder — swap for <Image> in Phase 2 */}
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,111,247,0.12) 0%, rgba(61,56,128,0.2) 50%, rgba(10,10,15,0.8) 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-6xl text-text-muted opacity-30 select-none">HB</span>
                </div>
              </div>
            </FadeIn>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label }, i) => (
                <FadeIn key={label} delay={0.25 + i * 0.08} direction="up">
                  <div className="card p-4 text-center">
                    <span className="font-display font-bold text-2xl text-text-primary block" style={{ letterSpacing: "-0.03em" }}>
                      {value}
                    </span>
                    <span className="text-text-muted text-xs mt-1 block leading-snug">{label}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
