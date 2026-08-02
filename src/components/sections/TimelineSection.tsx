"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TIMELINE = [
  {
    year:  "2023",
    title: "Started B.Tech in CSE",
    desc:  "Enrolled at Punjab Engineering College (Deemed to be University), Chandigarh. Started learning web fundamentals alongside academic coursework.",
    tags:  ["PEC Chandigarh", "Computer Science"],
    accent: false,
  },
  {
    year:  "2024",
    title: "Frontend & React Development",
    desc:  "Deepened knowledge of React, JavaScript, and modern CSS. Built personal projects to understand component architecture, state management, and responsive design.",
    tags:  ["React", "JavaScript", "CSS"],
    accent: false,
  },
  {
    year:  "Early 2025",
    title: "Expanding into Flutter & Firebase",
    desc:  "Learned cross-platform mobile development with Flutter and Dart. Explored Firebase as a serverless backend — authentication, Firestore, and storage.",
    tags:  ["Flutter", "Dart", "Firebase"],
    accent: false,
  },
  {
    year:  "Jan 2026",
    title: "Software Engineering Internship — Ping IFF LLP",
    desc:  "Joined Ping IFF LLP, Chandigarh as a Software Engineering Intern. Started work on the live PingME web ecosystem using React 18, TypeScript, and Tailwind CSS.",
    tags:  ["React 18", "TypeScript", "Tailwind CSS", "Firebase"],
    accent: true,
  },
  {
    year:  "Mar 2026",
    title: "Flutter App & Field Tracking System",
    desc:  "Independently built the Lawyer–Client Management Android app. Simultaneously engineered the Field Executive Tracking System with real-time GPS filtering, geofencing, and role-based dashboards.",
    tags:  ["Flutter", "GPS Tracking", "Riverpod", "Geofencing"],
    accent: true,
  },
  {
    year:  "May 2026",
    title: "Data Engineering & Automation",
    desc:  "Built Python-based extraction pipelines to collect and clean 6,064+ B2B car dealer records. Developed the QR Tag Template Management System and conducted QA on the @PlzPingMeBot Telegram bot.",
    tags:  ["Python", "Pandas", "BeautifulSoup", "QA Testing"],
    accent: true,
  },
  {
    year:  "Jun 2026",
    title: "Internship Complete — Present",
    desc:  "Completed six months of production engineering across web, mobile, and data systems. Now actively seeking full-time Software Engineering roles.",
    tags:  ["Software Engineer", "Open to Work"],
    accent: true,
  },
];

function TimelineItem({
  year,
  title,
  desc,
  tags,
  accent,
  index,
  isLast,
}: (typeof TIMELINE)[0] & { index: number; isLast: boolean }) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Left — year + connector */}
      <div className="flex flex-col items-center flex-shrink-0 w-16 md:w-24">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
          style={{
            background: accent ? "var(--accent)" : "var(--border-strong)",
            boxShadow: accent ? "0 0 12px rgba(124,111,247,0.4)" : "none",
          }}
          aria-hidden="true"
        />
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: "var(--border-subtle)", minHeight: "40px" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.07 + 0.2, duration: 0.5 }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right — content */}
      <motion.div
        className="pb-12 flex-1"
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.07 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="font-mono text-xs tracking-widest mb-2 block"
          style={{ color: accent ? "var(--accent)" : "var(--text-muted)" }}
        >
          {year}
        </span>
        <h3
          className="font-display font-semibold text-text-primary text-lg mb-2"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={accent ? {
                background: "rgba(124,111,247,0.08)",
                borderColor: "rgba(124,111,247,0.2)",
                color: "var(--accent-light)",
              } : {}}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left — sticky label */}
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <SectionHeader
                label="Timeline"
                title="How I got here"
                description="From first lines of code to production systems."
                id="timeline-heading"
                className="mb-0"
              />
            </FadeIn>
          </div>

          {/* Right — timeline */}
          <div role="list" aria-label="Career timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} role="listitem">
                <TimelineItem
                  {...item}
                  index={i}
                  isLast={i === TIMELINE.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
