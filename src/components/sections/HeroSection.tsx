"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/lib/lenis";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

// Roles that cycle in the hero
const ROLES = [
  "Software Engineer",
  "AI Engineer",
  "Full Stack Developer",
  "Systems Thinker",
];

function TypewriterRole() {
  const [index, setIndex]     = useState(0);
  const [displayed, setDisp]  = useState("");
  const [deleting, setDel]    = useState(false);
  const timeoutRef            = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const current = ROLES[index];

    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDel(true), 2200);
    } else if (deleting && displayed === "") {
      setDel(false);
      setIndex((i) => (i + 1) % ROLES.length);
    } else if (!deleting) {
      timeoutRef.current = setTimeout(
        () => setDisp(current.slice(0, displayed.length + 1)),
        60
      );
    } else {
      timeoutRef.current = setTimeout(
        () => setDisp(current.slice(0, displayed.length - 1)),
        35
      );
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, index]);

  return (
    <span className="text-gradient-accent font-display" aria-live="polite" aria-label={`Role: ${ROLES[index]}`}>
      {displayed}
      <span className="animate-cursor-blink ml-0.5 inline-block w-0.5 h-[0.9em] bg-accent align-middle" aria-hidden="true" />
    </span>
  );
}

// Floating status badge
function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="badge inline-flex gap-2">
        <span className="relative flex h-2 w-2 flex-shrink-0 items-center justify-center" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{ background: "var(--success)" }}
          />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5"
            style={{ background: "var(--success)" }}
          />
        </span>
        <span>Open to opportunities</span>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax on scroll out
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScrollDown = () => {
    scrollToSection("#about");
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero — introduction"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,111,247,0.1), transparent 70%)" }}
      />
      {/* Subtle glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(124,111,247,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(168,156,248,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative container-main flex flex-col items-center text-center z-10"
      >
        {/* Status badge */}
        <div className="mb-8">
          <StatusBadge />
        </div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-display font-bold text-text-primary"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Harshit Bhoriya
          </h1>
        </motion.div>

        {/* Role typewriter */}
        <motion.div
          className="mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="font-display font-semibold"
            style={{
              fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
            aria-hidden="true"
          >
            <TypewriterRole />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Building products where engineering precision meets design sensibility.
          From intelligent systems to polished interfaces.
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton
            as="button"
            onClick={() => scrollToSection("#projects")}
            className="btn btn-primary px-6 py-3 text-sm"
            aria-label="View my projects"
          >
            <Sparkles size={15} aria-hidden="true" />
            View Projects
          </MagneticButton>

          <MagneticButton
            as="button"
            onClick={() => scrollToSection("#contact")}
            className="btn btn-secondary px-6 py-3 text-sm"
            aria-label="Get in touch"
          >
            Get in touch
            <ArrowUpRight size={15} aria-hidden="true" />
          </MagneticButton>
        </motion.div>

        {/* Tech strip */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          aria-label="Primary technologies"
        >
          {["TypeScript", "React", "Next.js", "Python", "Node.js", "AI/ML"].map((tech, i) => (
            <motion.span
              key={tech}
              className="tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.06, duration: 0.4 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-2xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  );
}
