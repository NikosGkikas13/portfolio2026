import { useEffect } from "react";

/** Marks sections as they enter the viewport so their headings can rise into place. */
export function useSectionReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = document.querySelectorAll("main > section:not(.hero)");
    // Content stays visible unless this script runs.
    document.documentElement.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -15% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
}
