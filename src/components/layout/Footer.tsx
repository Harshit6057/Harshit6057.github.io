import { FadeIn } from "@/components/ui/FadeIn";

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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            {/* Left */}
            <div>
              <span className="font-display font-semibold text-text-primary text-sm" style={{ letterSpacing: "-0.01em" }}>
                Harshit Bhoriya
              </span>
              <p className="text-text-muted text-xs mt-0.5">
                Software Engineer · AI Engineer · Full Stack Developer
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center sm:items-end gap-1">
              <p className="text-text-muted text-xs">
                © {year} Harshit Bhoriya. All rights reserved.
              </p>
              <p className="text-text-muted text-2xs font-mono opacity-60">
                harshitbhoriya.me
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
