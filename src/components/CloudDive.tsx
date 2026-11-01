import { useEffect, useRef, useState } from "react";

const WIDE = [1280, 1920, 2560];
// Cover-fit art fills the taller of width or a 16:9 slice of the height.
const COVER = "max(100vw, 178svh)";

/** Painted layer served as AVIF with a WebP fallback (files in public/hero). */
function Art({ name, widths = WIDE, sizes = COVER, className, priority }: {
  name: string;
  widths?: number[];
  sizes?: string;
  className: string;
  priority?: boolean;
}) {
  const set = (ext: string) => widths.map((w) => `/hero/${name}-${w}.${ext} ${w}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <img
        className={`dive-layer ${className}`}
        src={`/hero/${name}-${widths[1] ?? widths[0]}.webp`}
        srcSet={set("webp")}
        sizes={sizes}
        alt=""
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
    </picture>
  );
}

// Lightning limits: at most two flashes per strike, never closer than this, strikes seconds apart.
// That keeps it under 3 flashes in any one second (WCAG 2.3.1).
const MIN_GAP = 350;
const FLASH_MS = 110;
const STORM = [0.52, 0.86];

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  (import.meta.env.DEV && new URLSearchParams(location.search).get("motion") === "reduce");

/** Scroll-driven descent: above the clouds, through a storm, out under it into the page. */
export function CloudDive() {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [still] = useState(() => typeof window !== "undefined" && reducedMotion());
  // Storm layers load after the first screen has what it needs.
  const [late, setLate] = useState(false);

  useEffect(() => {
    const el = track.current;
    const st = stage.current;
    if (still || !el || !st) return;
    const root = document.documentElement;
    let raf = 0;
    let stormy = false;
    let strikeTimer = 0;
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
      return id;
    };

    const flash = () => {
      if (!stormy || document.hidden) return;
      st.style.setProperty("--bolt-x", `${35 + Math.random() * 35}%`);
      st.style.setProperty("--bolt-flip", Math.random() < 0.5 ? "-1" : "1");
      st.dataset.flash = "";
      later(() => delete st.dataset.flash, FLASH_MS);
    };
    const schedule = (delay: number) => {
      strikeTimer = later(() => {
        strikeTimer = 0;
        if (!stormy) return;
        // Each strike swaps the quote: one bolt throws it on screen, the next takes it away.
        if (!document.hidden) st.toggleAttribute("data-lit");
        flash();
        if (Math.random() < 0.5) later(flash, MIN_GAP + Math.random() * 250);
        schedule(2500 + Math.random() * 3500);
      }, delay);
    };

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / span));
      st.style.setProperty("--p", p.toFixed(4));
      // The nav sits on the art (transparent, light) until the storm ceiling has scrolled out from under it.
      if (rect.bottom > window.innerHeight * 0.7) root.dataset.scene = "";
      else delete root.dataset.scene;

      const wasStormy = stormy;
      stormy = p > STORM[0] && p < STORM[1];
      if (stormy && !wasStormy && !strikeTimer) schedule(900);
      if (!stormy && strikeTimer) {
        clearTimeout(strikeTimer);
        timers.delete(strikeTimer);
        strikeTimer = 0;
      }
    };
    const onScroll = () => {
      setLate(true);
      if (!raf) raf = requestAnimationFrame(update);
    };
    const idle = window.setTimeout(() => setLate(true), 2500);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(idle);
      timers.forEach(clearTimeout);
      delete root.dataset.scene;
    };
  }, [still]);

  if (still) return null;

  return (
    <div className="dive" ref={track}>
      <div className="dive-stage" ref={stage}>
        <div className="dive-art" aria-hidden="true">
          <Art name="sky" className="dive-sky" priority />
          <Art name="cloud-mid" className="dive-mid" sizes="max(120vw, 200svh)" />
          <Art name="island" widths={[600, 1000]} sizes="(max-width: 800px) 240px, 30vw" className="dive-island" />
          <Art name="cloud-front" className="dive-front" sizes="max(120vw, 200svh)" />
          <div className="dive-fog" />
          {late && (
            <>
              <Art name="storm" className="dive-storm" />
              <div className="dive-dark" />
              <div className="dive-glow" />
              <Art name="bolt" widths={[1280, 1920]} sizes="150vh" className="dive-bolt" />
              <div className="dive-wash" />
              {/* Unseen until the first strike; each flash lights it, then it fades to a ghost (see [data-flash] in CSS). */}
              <div className="dive-quote">
                <span className="dive-line"><span>Think lightly of yourself</span></span>
                <span className="dive-line"><span>and deeply of the world.</span></span>
                <span className="dive-line dive-cite"><span>Miyamoto Musashi</span></span>
              </div>
              <Art name="cloud-front" className="dive-fore" sizes="max(130vw, 200svh)" />
              <div className="dive-ground" />
              <Art name="storm-under" className="dive-ceiling" sizes="100vw" />
            </>
          )}
        </div>
        <div className="dive-title">
          <p className="dive-name" aria-hidden="true">Nikos Gkikas</p>
          <p className="dive-sub" aria-hidden="true">Software engineer. Fast data, sharp UIs, AI-driven builds.</p>
          <p className="dive-cue">
            <span aria-hidden="true">Scroll to descend</span>
            <a href="#top">Skip intro</a>
          </p>
        </div>
      </div>
    </div>
  );
}
