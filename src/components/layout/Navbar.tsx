"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/lib/lenis";

const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Skills",       href: "#skills" },
  { label: "Contact",      href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActive]    = useState("");
  const [mobileOpen, setMobileOpen]   = useState(false);
  const { scrollY }                   = useScroll();

  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center"
        style={{ height: "var(--nav-height)" }}
      >
        {/* Background — only shows after scroll */}
        <motion.div
          className="absolute inset-0 glass-strong border-b"
          style={{
            opacity: navOpacity,
            borderColor: "var(--border-subtle)",
          }}
          aria-hidden="true"
        />

        <nav
          className="relative container-main flex items-center justify-between h-full"
          aria-label="Main navigation"
        >
          {/* Logo / Wordmark */}
          <MagneticButton
            as="a"
            href="#"
            aria-label="Harshit Bhoriya — home"
            className="group flex items-center gap-2 no-underline"
            onClick={() => handleNavClick("#")}
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--accent)", boxShadow: "0 4px 12px rgba(124,111,247,0.35)" }}
            >
              <span className="text-white font-display font-bold text-sm select-none">H</span>
            </div>
            <span
              className="font-display font-semibold text-text-primary text-sm tracking-tight hidden sm:block"
              style={{ letterSpacing: "-0.02em" }}
            >
              Harshit Bhoriya
            </span>
          </MagneticButton>

          {/* Desktop Nav Links */}
          <ul
            className="hidden md:flex items-center gap-1 list-none"
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`
                      relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                      ${isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"}
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid var(--border-subtle)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              as="a"
              href="/resume.pdf"
              aria-label="Download resume"
              className="btn btn-secondary text-sm px-4 py-2"
            >
              Resume
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              className="block w-5 h-px bg-current rounded-full origin-center"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-current rounded-full"
              animate={mobileOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-px bg-current rounded-full origin-center"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-bg-primary/80 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong border-l md:hidden flex flex-col"
              style={{ borderColor: "var(--border-subtle)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close */}
              <div className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span className="font-display font-semibold text-text-primary">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 p-6 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id = href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.button
                      key={href}
                      onClick={() => handleNavClick(href)}
                      className={`
                        w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors
                        ${isActive
                          ? "text-text-primary bg-white/06 border border-white/08"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/04"
                        }
                      `}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                <a
                  href="/resume.pdf"
                  className="btn btn-primary w-full justify-center"
                  aria-label="Download resume PDF"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
