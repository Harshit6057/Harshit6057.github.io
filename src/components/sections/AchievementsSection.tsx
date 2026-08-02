"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Placeholder — populate in Phase 2
const ACHIEVEMENT_PLACEHOLDERS = [
  { icon: "🏆", title: "Achievement / Award",     meta: "Phase 2",    description: "Description of this achievement, competition, or recognition." },
  { icon: "🥇", title: "Achievement / Award",     meta: "Phase 2",    description: "Description of this achievement, competition, or recognition." },
  { icon: "📄", title: "Certification / Course",  meta: "Phase 2",    description: "Description of what was learned and certified." },
  { icon: "🎓", title: "Academic Milestone",       meta: "Phase 2",    description: "Dean's list, scholarship, or other academic recognition." },
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
          label="Achievements"
          title="Milestones & recognition"
          description="Awards, certifications, and highlights — detailed in Phase 2."
          id="achievements-heading"
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Achievements list"
        >
          {ACHIEVEMENT_PLACEHOLDERS.map(({ icon, title, meta, description }, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                role="listitem"
                className="card p-6 flex gap-4 group"
                aria-label={title}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(124,111,247,0.08)", border: "1px solid rgba(124,111,247,0.15)" }}
                  aria-hidden="true"
                >
                  {icon}
                </div>

                {/* Content */}
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
