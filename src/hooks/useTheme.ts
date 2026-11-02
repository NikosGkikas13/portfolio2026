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

  const toggle = () => {
    const flip = () => flushSync(() => setTheme((t) => (t === "dark" ? "light" : "dark")));
    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      flip();
      return;
    }
    document.startViewTransition(flip);
  };

  return [theme, toggle] as const;
}
