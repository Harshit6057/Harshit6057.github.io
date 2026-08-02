"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Placeholder — will be populated in Phase 2
const EXPERIENCE_PLACEHOLDER = [
  { period: "Phase 2", company: "Company Name",   role: "Role Title",    type: "Full-time" },
  { period: "Phase 2", company: "Company Name",   role: "Intern Title",  type: "Internship" },
  { period: "Phase 2", company: "Company Name",   role: "Intern Title",  type: "Internship" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="Roles, internships, and contributions — added in Phase 2."
          id="experience-heading"
        />

        {/* Timeline */}
        <div className="relative mt-4" role="list" aria-label="Work experience timeline">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {EXPERIENCE_PLACEHOLDER.map(({ period, company, role, type }, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                <div
                  role="listitem"
                  className="group relative md:pl-10 py-8 border-b last:border-b-0 transition-colors duration-200"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4.5px] top-10 w-2.5 h-2.5 rounded-full border-2 hidden md:block transition-all duration-300 group-hover:scale-125"
                    style={{
                      borderColor: "var(--accent-dim)",
                      background: "var(--bg-primary)",
                      boxShadow: "0 0 0 4px var(--bg-primary)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                      {/* Period */}
                      <span className="font-mono text-text-muted text-xs tracking-wider">{period}</span>

                      {/* Role */}
                      <h3
                        className="font-display font-semibold text-text-primary text-xl mt-1 group-hover:text-accent transition-colors duration-200"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {role}
                      </h3>

                      {/* Company */}
                      <p className="text-text-secondary text-sm mt-0.5">{company}</p>

                      {/* Placeholder description */}
                      <ul className="mt-4 space-y-2 list-none">
                        {[1, 2, 3].map((n) => (
                          <li
                            key={n}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: "var(--accent-dim)" }}
                              aria-hidden="true"
                            />
                            [Achievement / responsibility {n} — Phase 2]
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Type badge */}
                    <div className="flex-shrink-0">
                      <span className="badge-neutral badge text-2xs">{type}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
