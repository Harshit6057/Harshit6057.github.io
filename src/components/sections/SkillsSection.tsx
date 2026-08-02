"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "⌨️",
    skills: ["JavaScript", "TypeScript", "Dart", "Python", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React 18", "Next.js", "Tailwind CSS", "Vite", "shadcn/ui", "Responsive UI"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["Flutter", "Android", "Material 3", "flutter_riverpod", "Flutter Navigation"],
  },
  {
    category: "Backend & Cloud",
    icon: "☁️",
    skills: ["Firebase", "Cloud Firestore", "Firebase Auth", "Firebase Hosting", "Firebase Storage", "Node.js"],
  },
  {
    category: "Data & Automation",
    icon: "🤖",
    skills: ["Python", "Pandas", "BeautifulSoup", "Web Scraping", "Data Cleaning", "Automation Scripts"],
  },
  {
    category: "Tools & Practices",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "REST APIs", "SDLC", "Agile", "Debugging"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      <div className="container-main">
        <SectionHeader
          label="Skills"
          title="Tools of the craft"
          description="Technologies I worked with during my internship and personal projects."
          align="center"
          id="skills-heading"
        />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Skill categories"
        >
          {SKILL_GROUPS.map(({ category, icon, skills }, i) => (
            <FadeIn key={category} delay={i * 0.07} direction="up">
              <div
                role="listitem"
                className="card p-6 h-full"
                aria-label={`${category} skills`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-subtle)" }}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  <h3
                    className="font-display font-semibold text-text-primary text-base"
                    style={{ letterSpacing: "-0.015em" }}
                  >
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2" role="list" aria-label={`${category} technologies`}>
                  {skills.map((skill) => (
                    <span key={skill} className="tag" role="listitem">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
