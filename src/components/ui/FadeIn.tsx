"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
  amount = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offsets = {
    up:    { y: 24, x: 0 },
    down:  { y: -24, x: 0 },
    left:  { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none:  { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
