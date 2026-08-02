"use client";

import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : ""} ${className}`}>
      <FadeIn delay={0}>
        <span className="section-label mb-4 block"
          style={isCenter ? { justifyContent: "center" } : {}}
        >
          {label}
        </span>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2
          id={id}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          {title}
        </h2>
      </FadeIn>

      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed max-w-2xl"
            style={isCenter ? { marginInline: "auto" } : {}}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
