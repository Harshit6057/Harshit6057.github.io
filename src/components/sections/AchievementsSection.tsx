"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ACHIEVEMENTS = [
  {
    icon: "🏭",
    title: "Production Software Delivery",
    meta: "Jan – Jun 2026",
    description:
      "Shipped four production-level projects to real users at Ping IFF LLP — a live web platform, an Android app, a real-time tracking system, and an internal admin tool.",
  },
  {
    icon: "📱",
    title: "Flutter App Built from Scratch",
    meta: "2026",
    description:
      "Designed and fully implemented the Lawyer–Client Management Android application independently — from Firebase auth flows to role-based dashboards, case tracking, and document management.",
  },
  {
    icon: "📍",
    title: "Real-Time Location Engineering",
    meta: "2026",
    description:
      "Built a GPS tracking system with accuracy filtering, foreground services, and geofence CRUD. Later evolved it into a web-based check-in platform using reverse-geocoding for fraud-resistant proof-of-visit.",
  },
  {
    icon: "🗃️",
    title: "6,064 B2B Records Extracted & Cleaned",
    meta: "2026",
    description:
      "Built and ran a Python + BeautifulSoup data pipeline that collected, cleaned, and validated over 6,000 verified car dealer records across five major automotive brands for the PingME sales team.",
  },
  {
    icon: "🔧",
    title: "Full SDLC Exposure in a Startup",
    meta: "2026",
    description:
      "Worked through the complete Software Development Lifecycle — from direct requirement gathering with the founder through design, implementation, testing, deployment, and maintenance — on live production systems.",
  },
  {
    icon: "🎓",
    title: "B.Tech Computer Science & Engineering",
    meta: "2023 – Present",
    description:
      "Pursuing a B.Tech in CSE (3rd Year) at Punjab Engineering College (Deemed to be University), Chandigarh — one of India's premier technical institutions.",
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
          label="Achievements"
          title="Milestones & recognition"
          description="Real-world engineering milestones from production work and academic study."
          id="achievements-heading"
        />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Achievements list"
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
