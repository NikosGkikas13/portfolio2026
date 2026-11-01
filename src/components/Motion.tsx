import { useEffect, useRef, useState, type ReactNode } from "react";

/** Cycles through phrases; each slides up out of a mask. */
export function RollingWord({ words, every = 3200 }: { words: readonly string[]; every?: number }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % words.length), every);
    return () => window.clearInterval(t);
  }, [words, every]);

  return (
    <span className="roll">
      <span className="sr-only">{words.join(", ")}</span>
      <span className="roll-word" key={i} aria-hidden="true">
        {words[i]}
      </span>
    </span>
  );
}

/** A soft light that follows the cursor along the panel's edge. */
export function Spotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="spotlight" ref={ref}>
      {children}
    </div>
  );
}
