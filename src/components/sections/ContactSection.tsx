"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    label:  "GitHub",
    href:   "https://github.com/Harshit6057",
    icon:   Github,
    handle: "Harshit6057",
    desc:   "Projects & code",
  },
  {
    label:  "LinkedIn",
    href:   "https://linkedin.com/in/harshitbhoriya",
    icon:   Linkedin,
    handle: "harshitbhoriya",
    desc:   "Professional profile",
  },
  {
    label:  "Instagram",
    href:   "https://www.instagram.com/harshit_23976/",
    icon:   FaInstagram,
    handle: "@harshit_23976",
    desc:   "Personal updates",
  },
  {
    label:  "X / Twitter",
    href:   "https://x.com/Harshit2391976",
    icon:   FaXTwitter,
    handle: "@Harshit2391976",
    desc:   "Thoughts & threads",
  },
  {
    label:  "Email",
    href:   "mailto:harshit@harshitbhoriya.me",
    icon:   Mail,
    handle: "harshit@harshitbhoriya.me",
    desc:   "Fastest way to reach me",
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
            <span
              className="section-label mb-4"
              style={{ justifyContent: "center", display: "flex" }}
            >
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
              I&apos;m actively looking for full-time Software Engineering roles.
              Open to interesting problems, teams, and products. Reach out — I respond quickly.
            </p>
          </div>
        </FadeIn>

        {/* Primary CTA */}
        <FadeIn delay={0.1} direction="up">
          <div className="flex justify-center mb-14">
            <MagneticButton
              as="a"
              href="mailto:harshit@harshitbhoriya.me"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          role="list"
          aria-label="Contact and social links"
        >
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, handle, desc }, i) => (
            <FadeIn key={label} delay={0.2 + i * 0.06}>
              <a
                role="listitem"
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="card p-5 flex flex-col gap-3 group no-underline"
                aria-label={`${label}: ${handle}`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted group-hover:text-accent transition-colors duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border-subtle)" }}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="block text-xs text-text-muted font-mono mb-0.5">{label}</span>
                  <span className="block text-text-primary text-sm font-medium group-hover:text-accent transition-colors truncate">
                    {handle}
                  </span>
                  <span className="block text-text-muted text-xs mt-0.5">{desc}</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
