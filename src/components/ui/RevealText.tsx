"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
}

// Splits text into words, each word reveals upward from a clip container
export function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "p",
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });

  const words = children.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={children}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + i * 0.04,
              }}
              aria-hidden="true"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
