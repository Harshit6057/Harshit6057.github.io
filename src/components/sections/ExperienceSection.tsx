"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const PROJECTS = [
  {
    id:    "web",
    tab:   "PingME Web",
    title: "PingME Website Ecosystem",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "Firebase", "Vite"],
    summary:
      "Refactored and shipped six core modules of a live privacy-tech web platform used by real customers.",
    points: [
      "Built Admin Panel with Firestore onSnapshot listeners for real-time order monitoring, protected by Firebase Auth route guards.",
      "Rebuilt Home, About, Contact, Partners, and Products pages — responsive across mobile and desktop.",
      "Resolved a Lenis smooth-scroll / React Router v6 viewport conflict affecting the checkout flow.",
      "Deployed to Firebase Hosting CDN; verified cross-browser parity on Chrome, Safari, and Firefox.",
    ],
  },
  {
    id:    "mobile",
    tab:   "Flutter App",
    title: "Lawyer–Client Management App",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "Material 3"],
    summary:
      "Designed and built a role-based Android app from scratch — lawyers and clients each get a tailored workspace.",
    points: [
      "Implemented secure authentication, role-based routing, and separate dashboards for two user types.",
      "Features: lawyer discovery, case tracking, document vault, hearing scheduling, and in-app messaging.",
      "Used Flutter Material 3 components throughout for a consistent Android-native feel.",
    ],
  },
  {
    id:    "tracking",
    tab:   "Field Tracker",
    title: "Field Executive Tracking System",
    stack: ["Flutter", "Riverpod", "Geolocator", "Firebase", "OpenStreetMap"],
    summary:
      "GPS tracking app for field sales teams, later evolved into a lightweight web check-in platform.",
    points: [
      "Added GPS accuracy filtering — drops points worse than 60m accuracy or implying speeds above 55 m/s.",
      "Built a custom OTP fallback (OtpService) to handle Firebase Phone Auth SHA-1 issues on Android.",
      "Implemented geofence CRUD and a live admin map with heat-map overlay and employee status board.",
      "Evolved into Location Pinpoint Track — a web app using OpenStreetMap reverse-geocoding for fraud-resistant proof-of-visit records.",
    ],
  },
  {
    id:    "data",
    tab:   "Automation",
    title: "Data Engineering & Automation",
    stack: ["Python", "Pandas", "BeautifulSoup", "Node.js", "QA Testing"],
    summary:
      "Extraction pipelines, internal tooling, and systematic QA — the engineering work that keeps operations running.",
    points: [
      "Built a QR Tag Template System for automating sticker positioning, QR allocation, and PDF generation at manufacturing scale.",
      "Engineered a B2B data pipeline collecting and cleaning 6,064 verified car dealer records across 5 automotive brands.",
      "Developed an Instagram media scraper for marketing research — rate-limited, public data only.",
      "Conducted functional and regression testing of @PlzPingMeBot — covering reminders, Google Calendar sync, and voice recognition.",
    ],
  },
];

export function ExperienceSection() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

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

        {/* Company header card */}
        <FadeIn delay={0.05}>
          <div className="card p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Logo mark */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-accent"
                style={{ background: "rgba(124,111,247,0.1)", border: "1px solid rgba(124,111,247,0.2)" }}
                aria-hidden="true"
              >
                P
              </div>
              <div>
                <h3 className="font-display font-semibold text-text-primary text-lg" style={{ letterSpacing: "-0.02em" }}>
                  Ping IFF LLP
                </h3>
                <p className="text-text-secondary text-sm">Software Engineering Intern · Chandigarh, India</p>
                <p className="text-text-muted text-xs font-mono mt-0.5">Jan 2026 – Jun 2026 · 6 months</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {["React 18", "Flutter", "Firebase", "Python"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tab + content layout */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4" role="tablist" aria-label="Projects at Ping IFF LLP">

            {/* Left — tab list */}
            <div className="md:w-44 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1 md:pb-0 flex-shrink-0">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`tab-panel-${p.id}`}
                  onClick={() => setActive(i)}
                  className="relative px-3 py-2.5 rounded-lg text-left text-sm font-medium whitespace-nowrap transition-colors duration-150 flex-shrink-0"
                  style={{
                    color: active === i ? "var(--text-primary)" : "var(--text-muted)",
                    background: active === i ? "rgba(124,111,247,0.08)" : "transparent",
                  }}
                >
                  {active === i && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(124,111,247,0.08)",
                        border: "1px solid rgba(124,111,247,0.18)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{p.tab}</span>
                </button>
              ))}
            </div>

            {/* Right — content panel */}
            <div
              id={`tab-panel-${proj.id}`}
              role="tabpanel"
              aria-label={proj.title}
              className="flex-1 min-w-0"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="card p-6 h-full"
                >
                  {/* Title + stack */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <h4
                      className="font-display font-semibold text-text-primary text-xl"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {proj.title}
                    </h4>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">{proj.summary}</p>

                  {/* Points */}
                  <ul className="space-y-3 mb-5" role="list">
                    {proj.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed"
                      >
                        <span
                          className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--accent)", opacity: 0.6 }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                    {proj.stack.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
