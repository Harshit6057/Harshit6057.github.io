import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Design Tokens ──────────────────────────────────────────────
      colors: {
        // Backgrounds — soft dark, never pure black
        bg: {
          primary:   "#0a0a0f",   // main canvas
          secondary: "#0f0f17",   // cards, surfaces
          tertiary:  "#141420",   // elevated cards
          overlay:   "#1a1a2a",   // modals, popovers
        },
        // Surface borders
        border: {
          subtle:  "rgba(255,255,255,0.06)",
          DEFAULT: "rgba(255,255,255,0.10)",
          strong:  "rgba(255,255,255,0.16)",
        },
        // Text hierarchy
        text: {
          primary:   "#f0f0f8",   // headlines
          secondary: "#9898b0",   // body, descriptions
          muted:     "#5a5a72",   // captions, meta
          inverse:   "#0a0a0f",
        },
        // Accent — indigo-violet family, subtle
        accent: {
          DEFAULT:   "#7c6ff7",
          light:     "#a89cf8",
          dim:       "#3d3880",
          glow:      "rgba(124,111,247,0.15)",
        },
        // Semantic
        success: "#3ecf8e",
        warning: "#f5a623",
        error:   "#f16c7a",
      },

      // ── Typography Scale ───────────────────────────────────────────
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)",  "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "Menlo", "monospace"],
      },
      fontSize: {
        "2xs":  ["0.625rem", { lineHeight: "1rem" }],
        xs:     ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:     ["0.875rem", { lineHeight: "1.375rem" }],
        base:   ["1rem",     { lineHeight: "1.625rem" }],
        lg:     ["1.125rem", { lineHeight: "1.75rem" }],
        xl:     ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl":  ["1.5rem",   { lineHeight: "2rem",    letterSpacing: "-0.01em" }],
        "3xl":  ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.02em" }],
        "4xl":  ["2.25rem",  { lineHeight: "2.625rem",letterSpacing: "-0.025em" }],
        "5xl":  ["3rem",     { lineHeight: "3.375rem",letterSpacing: "-0.03em" }],
        "6xl":  ["3.75rem",  { lineHeight: "4rem",    letterSpacing: "-0.035em" }],
        "7xl":  ["4.5rem",   { lineHeight: "4.75rem", letterSpacing: "-0.04em" }],
        "8xl":  ["6rem",     { lineHeight: "6.25rem", letterSpacing: "-0.045em" }],
        "9xl":  ["8rem",     { lineHeight: "8.25rem", letterSpacing: "-0.05em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter:  "-0.04em",
        tight:    "-0.02em",
        normal:   "0em",
        wide:     "0.04em",
        wider:    "0.08em",
        widest:   "0.16em",
      },

      // ── Spacing & Layout ───────────────────────────────────────────
      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
        "30":  "7.5rem",
        "34":  "8.5rem",
        "38":  "9.5rem",
        "42":  "10.5rem",
        "128": "32rem",
        "144": "36rem",
      },
      maxWidth: {
        "8xl":  "88rem",
        "9xl":  "96rem",
        "10xl": "104rem",
      },

      // ── Borders & Radius ───────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      // ── Shadows ────────────────────────────────────────────────────
      boxShadow: {
        "soft-xs": "0 1px 2px rgba(0,0,0,0.4)",
        "soft-sm": "0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "soft":    "0 4px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)",
        "soft-md": "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)",
        "soft-lg": "0 16px 48px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)",
        "soft-xl": "0 24px 64px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.5)",
        "accent":  "0 8px 32px rgba(124,111,247,0.2), 0 2px 8px rgba(124,111,247,0.1)",
        "glow":    "0 0 40px rgba(124,111,247,0.12), 0 0 80px rgba(124,111,247,0.06)",
        "card":    "0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.5)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.08) inset, 0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,111,247,0.15)",
      },

      // ── Backdrop blur ──────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
        "4xl": "64px",
      },

      // ── Animations ────────────────────────────────────────────────
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to:   { backgroundPosition: "-200% 0" },
        },
        "gradient-shift": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%":     { backgroundPosition: "100% 50%" },
        },
        "scroll-indicator": {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "cursor-blink": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in":        "fade-in 0.4s ease-out",
        "fade-up":        "fade-up 0.5s ease-out",
        "fade-down":      "fade-down 0.5s ease-out",
        "scale-in":       "scale-in 0.3s ease-out",
        shimmer:          "shimmer 3s linear infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        float:            "float 4s ease-in-out infinite",
        "cursor-blink":   "cursor-blink 1s ease-in-out infinite",
      },

      // ── Gradients ─────────────────────────────────────────────────
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise":            "url('/noise.svg')",
        "grid-pattern":     "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "dot-pattern":      "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "accent-gradient":  "linear-gradient(135deg, #7c6ff7 0%, #a89cf8 100%)",
        "hero-gradient":    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,111,247,0.12), transparent)",
        "card-gradient":    "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      },
    },
  },
  plugins: [animate],
};

export default config;
