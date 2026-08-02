"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const EXPERIENCE = [
  {
    period:   "Jan 2026 – Jun 2026",
    company:  "Ping IFF LLP",
    location: "Chandigarh, India",
    role:     "Software Engineering Intern",
    type:     "Internship · 6 months",
    mentor:   "Mr. Mohit Shrivastava (Founder & Designated Partner)",
    description:
      "Six-month project semester at an agile tech startup building the PingME ecosystem — a privacy-first platform using static QR codes and NFC smart-tags to protect personal contact data on physical assets. Contributed to live production systems across web, mobile, and data engineering.",
    contributions: [
      {
        title: "PingME Website Ecosystem",
        points: [
          "Built and refactored six core modules of the live PingME web platform — Admin Panel, Home, About, Contact Us, Partners, and Products pages — using React 18, TypeScript, Tailwind CSS, and shadcn/ui.",
          "Developed the Admin Panel (/admin) with Firestore live listeners (onSnapshot) for real-time order monitoring and route guards using Firebase Auth to restrict access to authenticated admins only.",
          "Configured client-side local cache rules via the Firestore SDK to keep the app responsive during network drops, and resolved a viewport jump bug caused by a conflict between Lenis smooth-scroll and React Router v6.",
          "Deployed production builds to Firebase Hosting CDN; conducted cross-browser testing across Chrome, Safari, and Firefox.",
        ],
      },
      {
        title: "Lawyer–Client Management Application (Flutter / Android)",
        points: [
          "Designed and built a role-based Android application from scratch using Flutter and Dart, with Firebase Authentication, Cloud Firestore, and Firebase Storage as the backend.",
          "Implemented separate dashboards for lawyers and clients — including case tracking, document vault, hearing scheduling, lawyer discovery, earnings monitoring, and a secure in-app messaging system.",
          "Used Flutter Material 3 components throughout to ensure a consistent, responsive experience across Android devices.",
        ],
      },
      {
        title: "Field Executive Tracking System",
        points: [
          "Improved an existing Flutter-based field tracker app used by Ping IFF LLP's marketing team, adding role-based access (Employee / Admin), GPS accuracy filtering (discarding points over 60m accuracy or implying speeds above 55 m/s), and a geofence CRUD interface.",
          "Built a custom OTP fallback service (OtpService) that generates 6-digit codes stored in Firestore with a 10-minute expiry and 5-attempt limit, as a workaround for Firebase Phone Auth SHA-1 registration issues on Android.",
          "Subsequently developed Location Pinpoint Track — a lightweight web-based verification platform where field executives check in with a live photo and GPS coordinates, reverse-geocoded via the OpenStreetMap Nominatim API, stored as fraud-resistant proof-of-visit records.",
        ],
      },
      {
        title: "Automation, Data Engineering & QA",
        points: [
          "Built a QR Tag Template Management System that automates the positioning, allocation, and PDF generation of QR sticker sheets for manufacturing — reducing duplicate allocation errors.",
          "Developed an Instagram media scraper using automated browser contexts to extract public image and video assets for marketing research.",
          "Engineered a B2B data extraction pipeline using Python, BeautifulSoup, and Pandas to collect and clean approximately 6,064 verified car dealer records across Hyundai, Maruti Suzuki, Mahindra, Skoda, and MG Motor India — structured as a sales lead database.",
          "Conducted systematic functional and regression testing of the @PlzPingMeBot Telegram bot, including Google Calendar sync, voice recognition, and reminder workflows.",
        ],
      },
    ],
    tags: [
      "React 18", "TypeScript", "Flutter", "Dart", "Firebase", "Firestore",
      "Python", "Pandas", "Git", "Tailwind CSS", "Vite", "Node.js",
    ],
  },
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
          id="experience-heading"
        />

        <div className="relative" role="list" aria-label="Work experience">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)" }}
            aria-hidden="true"
          />

          {EXPERIENCE.map((exp, idx) => (
            <FadeIn key={idx} delay={0.05}>
              <div
                role="listitem"
                className="relative md:pl-10 py-8"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-4.5px] top-10 w-2.5 h-2.5 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--bg-primary)",
                    boxShadow: "0 0 0 4px var(--bg-primary)",
                  }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <span className="font-mono text-text-muted text-xs tracking-wider">{exp.period}</span>
                    <h3
                      className="font-display font-bold text-2xl text-text-primary mt-1"
                      style={{ letterSpacing: "-0.025em" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-medium mt-0.5">{exp.company} · {exp.location}</p>
                    <p className="text-text-muted text-xs mt-1">Mentor: {exp.mentor}</p>
                  </div>
                  <span className="badge-neutral badge shrink-0">{exp.type}</span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-2xl">
                  {exp.description}
                </p>

                {/* Contributions */}
                <div className="space-y-7">
                  {exp.contributions.map((contrib, ci) => (
                    <FadeIn key={ci} delay={0.1 + ci * 0.08}>
                      <div className="card p-5">
                        <h4
                          className="font-display font-semibold text-text-primary text-base mb-4"
                          style={{ letterSpacing: "-0.015em" }}
                        >
                          <span
                            className="inline-block mr-2 font-mono text-xs text-accent"
                            aria-hidden="true"
                          >
                            {String(ci + 1).padStart(2, "0")}
                          </span>
                          {contrib.title}
                        </h4>
                        <ul className="space-y-2.5" role="list">
                          {contrib.points.map((point, pi) => (
                            <li
                              key={pi}
                              className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                            >
                              <span
                                className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: "var(--accent-dim)" }}
                                aria-hidden="true"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Tech tags */}
                <FadeIn delay={0.3}>
                  <div className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
