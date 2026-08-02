"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href:  "https://github.com",
    icon:  Github,
    handle: "@harshitbhoriya",
  },
  {
    label: "LinkedIn",
    href:  "https://linkedin.com",
    icon:  Linkedin,
    handle: "harshitbhoriya",
  },
  {
    label: "Twitter / X",
    href:  "https://twitter.com",
    icon:  Twitter,
    handle: "@harshitbhoriya",
  },
  {
    label: "Email",
    href:  "mailto:hello@harshitbhoriya.me",
    icon:  Mail,
    handle: "hello@harshitbhoriya.me",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-pad relative"
    >
      <div className="absolute top-0 inset-x-0 h-px divider" aria-hidden="true" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 inset-x-0 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(124,111,247,0.07), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center mb-14">
            <span className="section-label mb-4 justify-center" style={{ justifyContent: "center", display: "flex" }}>
              Contact
            </span>
            <h2
              id="contact-heading"
              className="font-display font-bold text-text-primary mt-2"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
              }}
            >
              Let&apos;s build something
              <br />
              <span className="text-gradient-accent">great together.</span>
            </h2>
            <p className="mt-5 text-text-secondary text-base leading-relaxed max-w-md mx-auto">
              Open to collaborations, interesting problems, and new opportunities.
              Reach out — I respond within 24 hours.
            </p>
          </div>
        </FadeIn>

        {/* Primary CTA */}
        <FadeIn delay={0.1} direction="up">
          <div className="flex justify-center mb-14">
            <MagneticButton
              as="a"
              href="mailto:hello@harshitbhoriya.me"
              className="btn btn-primary px-8 py-4 text-base"
              aria-label="Send an email to Harshit"
            >
              <Mail size={16} aria-hidden="true" />
              Say hello
            </MagneticButton>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.15}>
          <div className="divider mb-14" aria-hidden="true" />
        </FadeIn>

        {/* Social links */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          role="list"
          aria-label="Social media and contact links"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, handle }, i) => (
            <FadeIn key={label} delay={0.2 + i * 0.06}>
              <a
                role="listitem"
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="card p-4 flex items-center gap-4 group no-underline"
                aria-label={`${label}: ${handle}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
                >
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs text-text-muted mb-0.5 font-mono">{label}</span>
                  <span className="block text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors truncate">
                    {handle}
                  </span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  aria-hidden="true"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
