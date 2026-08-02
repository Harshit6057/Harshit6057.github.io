"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const TIMELINE = [
  {
    year:   "2023",
    title:  "B.Tech CSE — Punjab Engineering College",
    desc:   "Started undergraduate studies in Computer Science at PEC Chandigarh. Picked up HTML, CSS, and JavaScript alongside the coursework.",
    tags:   ["PEC Chandigarh", "Computer Science"],
    accent: false,
  },
  {
    year:   "2024",
    title:  "React & Frontend Development",
    desc:   "Built personal projects to understand component architecture, hooks, and state management. Started working with REST APIs and version control.",
    tags:   ["React", "JavaScript", "Git"],
    accent: false,
  },
  {
    year:   "2025",
    title:  "Flutter, Firebase & TypeScript",
    desc:   "Expanded into cross-platform mobile development and serverless backends. Learned TypeScript and started building with the Firebase ecosystem.",
    tags:   ["Flutter", "Firebase", "TypeScript"],
    accent: false,
  },
  {
    year:   "Jan 2026",
    title:  "Joined Ping IFF LLP as Software Engineering Intern",
    desc:   "Started a six-month internship at an agile Chandigarh startup. Immediately contributed to a live production web platform used by real customers.",
    tags:   ["Internship", "Production Code", "Startup"],
    accent: true,
  },
  {
    year:   "Jun 2026",
    title:  "Internship Complete",
    desc:   "Shipped four production systems across web, mobile, and data engineering. Completed the full SDLC on every project — from requirements to deployment.",
    tags:   ["4 Projects Shipped", "Full SDLC", "React · Flutter · Python"],
    accent: true,
  },
  {
    year:   "Now",
    title:  "Looking for the next chapter",
    desc:   "Actively seeking full-time Software Engineering roles. Ready to contribute to a team building something that matters.",
    tags:   ["Open to Work", "Full-Time Roles"],
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
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex gap-8">
      {/* Spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
          style={{
            background: accent ? "var(--accent)" : "var(--border-strong)",
            boxShadow: accent ? "0 0 10px rgba(124,111,247,0.5)" : "none",
          }}
          aria-hidden="true"
        />
        {!isLast && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: accent ? "rgba(124,111,247,0.2)" : "var(--border-subtle)", minHeight: 36 }}
            initial={{ scaleY: 0, originY: "top" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.07 + 0.2, duration: 0.45 }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="pb-10 flex-1"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.07 + 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="font-mono text-xs tracking-widest mb-1.5 block"
          style={{ color: accent ? "var(--accent)" : "var(--text-muted)" }}
        >
          {year}
        </span>
        <h3
          className="font-display font-semibold text-text-primary text-base mb-1.5"
          style={{ letterSpacing: "-0.018em" }}
        >
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="tag"
              style={accent ? {
                background: "rgba(124,111,247,0.08)",
                borderColor: "rgba(124,111,247,0.18)",
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left — sticky label */}
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <SectionHeader
                label="Journey"
                title="How I got here"
                description="From first lines of code to production systems."
                id="timeline-heading"
                className="mb-0"
              />
            </FadeIn>
          </div>

          {/* Right — timeline items */}
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
