import { useLayoutEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const THEME_KEY = "portfolio_theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Layout effect so the class lands inside flushSync, before the view transition snapshots the new theme.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // `from` is the toggle button: the new theme grows out of it as a circle.
  const toggle = (from: Element) => {
    const flip = () => flushSync(() => setTheme((t) => (t === "dark" ? "light" : "dark")));
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      flip();
      return;
    }
    const r = from.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;
    document.startViewTransition(flip).ready.then(
      () =>
        root.animate(
          { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
          {
            duration: 400,
            easing: getComputedStyle(root).getPropertyValue("--ease-out").trim(),
            pseudoElement: "::view-transition-new(root)",
          },
        ),
      () => {}, // transition skipped: the theme still flipped
    );
  };

  return [theme, toggle] as const;
}
