"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";

// Placeholder project shape — will be populated in Phase 3
const PROJECT_PLACEHOLDERS = Array.from({ length: 4 }, (_, i) => ({
  id:          i,
  title:       "Project Title",
  description: "Project description goes here. What it does, why it matters, and what problem it solves. This will be populated in Phase 3.",
  tags:        ["TypeScript", "React", "API"],
  featured:    i < 2,
  github:      "#",
  live:        "#",
}));

function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
  index,
}: {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.article
        className="card p-6 h-full flex flex-col group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-label={`Project: ${title}`}
      >
        {/* Top — icon placeholder */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(124,111,247,0.1)", border: "1px solid rgba(124,111,247,0.2)" }}
            aria-hidden="true"
          >
            <span className="text-accent font-mono text-sm font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={github}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/06 transition-colors"
              aria-label={`GitHub repository for ${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} aria-hidden="true" />
            </a>
            <a
              href={live}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/06 transition-colors"
              aria-label={`Live demo for ${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Content */}
        <h3
          className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors duration-200"
          style={{ letterSpacing: "-0.02em" }}
        >
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.article>
    </FadeIn>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(124,111,247,0.04), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-main relative">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <SectionHeader
            label="Projects"
            title="Things I've built"
            description="A selection of projects — full list added in Phase 3."
            id="projects-heading"
            className="mb-0"
          />
          <FadeIn delay={0.2}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-sm shrink-0"
              aria-label="View all projects on GitHub"
            >
              View all on GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </FadeIn>
        </div>

        {/* Project grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Project list"
        >
          {PROJECT_PLACEHOLDERS.map((project, i) => (
            <div key={project.id} role="listitem">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                live={project.live}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
