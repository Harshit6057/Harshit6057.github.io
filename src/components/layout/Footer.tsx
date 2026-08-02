"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";

const SOCIAL = [
  { href: "https://github.com/Harshit6057",      icon: Github,   label: "GitHub"   },
  { href: "https://linkedin.com/in/harshitbhoriya", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:harshit@harshitbhoriya.me",    icon: Mail,     label: "Email"    },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative py-10 border-t"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="container-main">
        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="text-center sm:text-left">
              <span
                className="font-display font-semibold text-text-primary text-sm"
                style={{ letterSpacing: "-0.01em" }}
              >
                Harshit Bhoriya
              </span>
              <p className="text-text-muted text-xs mt-0.5">
                Software Engineer · Full Stack · Flutter · AI
              </p>
              <p className="text-text-muted text-2xs font-mono mt-0.5 opacity-60">
                B.Tech CSE · Punjab Engineering College, Chandigarh
              </p>
            </div>

            {/* Center — social icons */}
            <div className="flex items-center gap-3" role="list" aria-label="Social links">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  role="listitem"
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
                  aria-label={label}
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex flex-col items-center sm:items-end gap-2">
              <p className="text-text-muted text-xs">© {year} Harshit Bhoriya</p>
              <button
                onClick={() => scrollToSection("#hero", 0)}
                className="flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors text-xs group"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center group-hover:-translate-y-0.5 transition-transform"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid var(--border-subtle)" }}
                  aria-hidden="true"
                >
                  <ArrowUp size={10} />
                </span>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
