"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STATS = [
  { value: "6",    label: "Month Internship",   sublabel: "Jan – Jun 2026" },
  { value: "4",    label: "Production Projects", sublabel: "Shipped to live users" }
];

const CURRENTLY = [
  "🎓  B.Tech CSE, 3rd Year — Punjab Engineering College, Chandigarh",
  "💼  Internship Graduate — Ping IFF LLP (Jan – Jun 2026)",
  "🔭  Looking for full-time Software Engineering roles",
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <SectionHeader
              label="About"
              title="Engineer by practice, not just by degree"
              id="about-heading"
            />

            <div className="space-y-5 text-text-secondary text-base leading-relaxed">
              <FadeIn delay={0.1}>
                <p>
                  I&apos;m a third-year Computer Science student at Punjab Engineering College,
                  Chandigarh. Most of what I know about software came from building real things
                  — not from textbooks. I started with frontend work, got curious about how
                  systems fit together, and ended up spending six months shipping production
                  software at a tech startup.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p>
                  At Ping IFF LLP, I worked across the full stack. I built React web modules
                  for a live product used by real customers, developed a Flutter Android app
                  from scratch, engineered a real-time field tracking system, and wrote
                  automation scripts that processed over 6,000 business records. Every one of
                  these shipped to production.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  I care about code that&apos;s easy to maintain and systems that hold up under
                  pressure. I&apos;m looking for a team where I can keep building things that matter.
                </p>
              </FadeIn>
            </div>

            {/* Currently */}
            <FadeIn delay={0.4} className="mt-10">
              <div className="card p-5 space-y-3">
                <span className="section-label" style={{ fontSize: "0.625rem" }}>Currently</span>
                <ul className="space-y-2.5 mt-2" role="list">
                  {CURRENTLY.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right — avatar + stats */}
          <div className="space-y-6">
            {/* Avatar placeholder */}
            <FadeIn delay={0.15} direction="left">
              <div
                className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden card-elevated"
                aria-label="Profile photo"
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,111,247,0.12) 0%, rgba(61,56,128,0.2) 50%, rgba(10,10,15,0.8) 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-6xl text-text-muted opacity-30 select-none" aria-hidden="true">HB</span>
                </div>
              </div>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ value, label, sublabel }, i) => (
                <FadeIn key={label} delay={0.25 + i * 0.08} direction="up">
                  <div className="card p-4 text-center">
                    <span
                      className="font-display font-bold text-2xl text-text-primary block"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {value}
                    </span>
                    <span className="text-text-secondary text-xs mt-1 block leading-snug">{label}</span>
                    <span className="text-text-muted text-2xs mt-0.5 block leading-snug">{sublabel}</span>
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
