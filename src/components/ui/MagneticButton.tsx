"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as: Tag = "button",
  href,
  onClick,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPosition({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onMouseLeave = () => setPosition({ x: 0, y: 0 });

  const sharedEventProps = { onMouseMove, onMouseLeave };

  const inner =
    Tag === "a" ? (
      <a
        href={href}
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
        {...sharedEventProps}
      >
        {children}
      </a>
    ) : Tag === "div" ? (
      <div
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
        role="button"
        tabIndex={0}
        {...sharedEventProps}
      >
        {children}
      </div>
    ) : (
      <button
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
        {...sharedEventProps}
      >
        {children}
      </button>
    );

  return (
    <motion.div
      ref={wrapperRef}
      style={{ display: "inline-flex" }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
    >
      {inner}
    </motion.div>
  );
}
