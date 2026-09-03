"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  title:       string;
  description: string;
  tags:        string[];
  github:      string;
  live?:       string;   // optional — not all projects have a live demo
  image?:      string;
  featured?:   boolean;
}

const PROJECTS: Project[] = [
  {
    title:       "Justice For You — Lawyer-Client App",
    description:
      "A role-based Android app connecting lawyers and clients. Handles secure authentication, lawyer discovery, case tracking, document vault, hearing scheduling, and in-app messaging — built entirely with Flutter and Firebase.",
    tags:        ["Flutter", "Dart", "Firebase", "Firestore", "Material 3"],
    github:      "https://github.com/Harshit6057/legal_case",
    live:        "https://lawcase-83ac4.web.app/",
    image:       "/images/Lawcase.png",
    featured:    true,
  },
  {
    title:       "MEDBOT — AI Medical Diagnosis System",
    description:
      "An AI-powered medical chatbot for disease diagnosis using chest X-ray imaging. Runs a dual-model inference stack: a PyTorch CNN classifying chest X-rays (Normal, Pneumonia, COVID-19, Lung Opacity) and a PyTorch MURA model localising upper-limb fractures across 7 body parts. Clinicians get unified report generation, chat interpretation, and downloadable diagnostic reports.",
    tags:        ["Next.js", "Python", "PyTorch", "MongoDB", "Node.js", "Deep Learning"],
    github:      "https://github.com/Harshit6057/Disease_And_Fracture_Detection",
    image:       "/images/MainUI.png",
    featured:    true,
  },
  {
    title:       "QR Locator — Asset Tracking via QR",
    description:
      "Scan a QR code, instantly see where an asset is. A lightweight web app that maps physical items to trackable location records — no app install needed. Built for real-world asset management and proof-of-location workflows.",
    tags:        ["Next.js", "TypeScript", "QR Code", "Vercel", "Geolocation"],
    github:      "https://github.com/Harshit6057/QR_Locator",
    live:        "https://qr-locator.vercel.app/",
    image:       "/images/QR_Locator.png",
    featured:    true,
  },
  {
    title:       "Quiver — Reddit Clone",
    description:
      "A full-stack Reddit-style community platform. Create communities, post content, comment, and vote — with a clean modern UI. React + Vite frontend, Express + Node.js API, Supabase for auth and database, all containerized with Docker.",
    tags:        ["React", "TypeScript", "Vite", "Node.js", "Express", "Supabase", "Docker"],
    github:      "https://github.com/Harshit6057/Quiver",
    live:        "https://quiver-ecru.vercel.app/",
    image:       "/images/Quiver.png",
    featured:    true,
  },
  {
    title:       "LangGraph Chatbot — AI Agent with Tools",
    description:
      "A production-ready AI chatbot powered by LangGraph and Groq. Supports web search, stock price lookup, and calculator tools. Features full message editing, persistent conversation history via SQLite, in-memory caching, rate limiting, and streaming responses.",
    tags:        ["Python", "LangGraph", "Groq API", "Streamlit", "LangChain", "SQLite"],
    github:      "https://github.com/Harshit6057/Chatbot",
    live:        "https://chatbot-langraph.streamlit.app/",
    image:       "/images/Chatbot.png",
    featured:    true,
  },
  {
    title:       "Road Accident Dashboard — Tableau",
    description:
      "An interactive Tableau dashboard analysing road accident fatality data. Visualises accident trends, severity breakdowns, and geographic patterns to surface insights for road safety decision-making.",
    tags:        ["Tableau", "Data Visualisation", "Excel", "Data Analysis"],
    github:      "https://github.com/Harshit6057/road-accident-dashboard",
    image:       "/images/Road_Accident.png",
    featured:    true,
  },
  {
    title:       "GeoLookup — Weather & Air Quality Dashboard",
    description:
      "A data analytics dashboard built for researchers, urban planners, and environmentalists. Provides actionable insights into weather patterns and air quality trends through interactive visualisations. Built as part of a Data Analytics & Visualisation coursework project.",
    tags:        ["R", "Python", "Shiny", "Data Analytics", "Visualisation"],
    github:      "https://github.com/Harshit6057/GeoLookup",
    image:       "/images/Geolookup.png",
    featured:    true,
  },
  {
    title:       "Book Recommender System",
    description:
      "A Flask-based book recommendation engine using collaborative filtering and similarity scores. Includes an AI chat feature powered by Google Gemini so users can ask questions about any book — plot, characters, themes — directly in the app.",
    tags:        ["Python", "Flask", "Pandas", "NumPy", "Gemini API", "Collaborative Filtering"],
    github:      "https://github.com/Harshit6057/Book_Recommender_System",
    image:       "/images/Book.png",
    featured:    true,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { title, description, tags, github, live, image } = project;

  return (
    <FadeIn delay={index * 0.08}>
      <motion.article
        className="card overflow-hidden h-full flex flex-col group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-label={`Project: ${title}`}
      >
        {/* Thumbnail */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {image ? (
            <Image
              src={image}
              alt={`Screenshot of ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            /* Gradient placeholder when no image provided */
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(124,111,247,0.12) 0%, rgba(61,56,128,0.18) 100%)",
              }}
              aria-hidden="true"
            >
              <span className="font-mono text-2xl text-accent opacity-30 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}

          {/* Overlay with links — appears on hover */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
            style={{ background: "rgba(10,10,15,0.65)", backdropFilter: "blur(4px)" }}
          >
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2 text-xs"
                aria-label={`Open live demo of ${title}`}
              >
                Live Demo
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-4 py-2 text-xs"
              aria-label={`View source code of ${title} on GitHub`}
            >
              <Github size={13} aria-hidden="true" />
              Source
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3
              className="font-display font-semibold text-text-primary text-base group-hover:text-accent transition-colors duration-200"
              style={{ letterSpacing: "-0.018em" }}
            >
              {title}
            </h3>
            {/* Persistent icon links */}
            <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
                aria-label={`GitHub: ${title}`}
              >
                <Github size={13} aria-hidden="true" />
              </a>
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-md flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
                  aria-label={`Live: ${title}`}
                >
                  <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
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
            description="Selected work from internship and personal projects."
            id="projects-heading"
            className="mb-0"
          />
          <FadeIn delay={0.2}>
            <a
              href="https://github.com/Harshit6057"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-sm shrink-0"
              aria-label="View all projects on GitHub"
            >
              GitHub Profile
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </FadeIn>
        </div>

        {/* Projects — single column for now, widens when more are added */}
        <div
          className={`grid gap-6 ${PROJECTS.length === 1 ? "grid-cols-1 max-w-2xl" : "grid-cols-1 md:grid-cols-2"}`}
          role="list"
          aria-label="Project list"
        >
          {PROJECTS.map((project, i) => (
            <div key={project.title} role="listitem">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
