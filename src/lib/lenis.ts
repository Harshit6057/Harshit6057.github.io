/**
 * Safely retrieves the Lenis instance attached to window by SmoothScrollProvider.
 * Casting through `unknown` avoids the conflicting Window type declaration from lenis/types.
 */
export function getLenis() {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as unknown as Record<string, any>)["lenis"] ?? null;
}

export function scrollToSection(selector: string, offset = -80, duration = 1.4) {
  const el = typeof selector === "string" && selector.startsWith("#")
    ? document.getElementById(selector.slice(1))
    : document.querySelector(selector);

  if (!el) return;

  const lenis = getLenis();
  if (lenis?.scrollTo) {
    lenis.scrollTo(el, { offset, duration });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
