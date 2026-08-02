"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

// These are outcomes and facts — not a repeat of the project work shown in Experience
const ACHIEVEMENTS = [
  {
    icon: "🎓",
    title: "B.Tech Computer Science & Engineering",
    meta: "2023 – Present",
    description:
      "Pursuing CSE at Punjab Engineering College (Deemed to be University), Chandigarh — completing third year alongside a full-time internship semester.",
  },
  {
    icon: "🏭",
    title: "6 Months of Production Engineering",
    meta: "Jan – Jun 2026",
    description:
      "Spent an entire semester shipping real software at a startup — not sandbox projects, not tutorials. Live users, live data, live deployments.",
  },
  {
    icon: "🗃️",
    title: "6,064 Verified Records Extracted",
    meta: "2026",
    description:
      "Built a complete B2B data pipeline — scraping, cleaning, deduplication, and structured export — across five automotive brands for a real sales team.",
  },
  {
    icon: "🔧",
    title: "Full SDLC in a Startup Environment",
    meta: "2026",
    description:
      "Went from verbal requirements to production deployment across four different product domains — web, mobile, systems, and data — in a single internship.",
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <SectionHeader
          label="Highlights"
          title="What stands out"
          id="achievements-heading"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          role="list"
          aria-label="Key highlights"
        >
          {ACHIEVEMENTS.map(({ icon, title, meta, description }, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                role="listitem"
                className="card p-6 flex gap-4 group"
                aria-label={title}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(124,111,247,0.08)", border: "1px solid rgba(124,111,247,0.15)" }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="font-display font-semibold text-text-primary text-base group-hover:text-accent transition-colors duration-200"
                      style={{ letterSpacing: "-0.015em" }}
                    >
                      {title}
                    </h3>
                    <span className="font-mono text-text-muted text-xs shrink-0 mt-0.5">{meta}</span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">{description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
