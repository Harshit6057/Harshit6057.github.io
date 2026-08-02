"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const dotX = useSpring(rawX, { stiffness: 600, damping: 32 });
  const dotY = useSpring(rawY, { stiffness: 600, damping: 32 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const cursor = window.getComputedStyle(target).cursor;
      setIsPointer(cursor === "pointer");
    };

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], [data-cursor='hover']")
      ) {
        setIsHovering(true);
      }
    };

    const onHoverEnd = () => setIsHovering(false);
    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHoverStart);
    window.addEventListener("mouseout", onHoverEnd);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHoverStart);
      window.removeEventListener("mouseout", onHoverEnd);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [rawX, rawY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : isPointer ? 1.3 : 1,
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div
          className="w-full h-full rounded-full border border-white/40"
          style={{ willChange: "transform" }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-white mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
