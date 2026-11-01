import { useEffect, useRef, useState } from "react";

type Ev = { id: number; time: string; source: string; event: string; status: "delivered" | "retrying" | "replayed"; dest: string };

// Illustrative events: shows what Odyhook does, not real traffic.
const EVENTS: Ev[] = [
  { id: 4, time: "14:02:11", source: "stripe", event: "payment_intent.succeeded", status: "delivered", dest: "3/3" },
  { id: 3, time: "14:01:58", source: "shopify", event: "orders/create", status: "retrying", dest: "1/2" },
  { id: 2, time: "14:01:40", source: "github", event: "push", status: "delivered", dest: "2/2" },
  { id: 1, time: "14:01:22", source: "stripe", event: "invoice.paid", status: "delivered", dest: "3/3" },
];

export function OdyhookSnippet() {
  const [events, setEvents] = useState(EVENTS);
  const [busy, setBusy] = useState(false);

  const replay = () => {
    const src = events.find((e) => e.status === "retrying") ?? events[0];
    const now = new Date().toTimeString().slice(0, 8);
    setBusy(true);
    setEvents((prev) => [{ ...src, id: Date.now(), time: now, status: "replayed" as const, dest: "…" }, ...prev].slice(0, 5));
    window.setTimeout(() => {
      setEvents((prev) => prev.map((e, i) => (i === 0 ? { ...e, dest: "2/2" } : e)));
      setBusy(false);
    }, 700);
  };

  return (
    <div className="panel snippet">
      <div className="panel-bar">
        <span className="panel-title">Events</span>
        <button className="btn btn--sm" type="button" onClick={replay} disabled={busy}>
          {busy ? "Replaying…" : "Replay failed"}
        </button>
      </div>
      <ul className="ev-list" aria-live="polite">
        {events.map((e) => (
          <li key={e.id} className="ev">
            <span className="ev-time">{e.time}</span>
            <span className="ev-src">{e.source}</span>
            <span className="ev-name">{e.event}</span>
            <span className={`status status--${e.status}`}>
              {e.status} <span className="ev-dest">{e.dest}</span>
            </span>
          </li>
        ))}
      </ul>
      <pre className="code" aria-label="Example transform">
        <code>
          <span className="tok-c">{"// transform.js — runs in a QuickJS sandbox"}</span>
          {"\n"}
          <span className="tok-k">export default</span> (event) =&gt; ({"{"}
          {"\n  "}...event,
          {"\n  "}amount: event.data.amount / <span className="tok-n">100</span>,
          {"\n"}
          {"});"}
        </code>
      </pre>
      <p className="snippet-note">Illustrative data</p>
    </div>
  );
}

// Steps: 0 diff only, 1 reviewer comments, 2 fix lands, 3 author replies, 4 resolved.
const LAST_STEP = 4;

export function NitpilotSnippet() {
  const still = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [step, setStep] = useState(still ? LAST_STEP : 0);
  const [runs, setRuns] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Start once the panel scrolls into view; "Run again" replays it.
  useEffect(() => {
    if (still || !ref.current) return;
    let timers: number[] = [];
    const play = () => {
      setStep(0);
      timers = [1, 2, 3, 4].map((n) => window.setTimeout(() => setStep(n), n * 1100));
    };
    if (runs > 0) {
      play();
      return () => timers.forEach(clearTimeout);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [runs, still]);

  const fixed = step >= 2;
  const done = step >= LAST_STEP;

  return (
    <div className="panel snippet" ref={ref}>
      <div className="panel-bar">
        <span className="panel-title mono">src/api/orders.ts</span>
        <button className="btn btn--sm" type="button" onClick={() => setRuns((r) => r + 1)} disabled={!still && !done}>
          {done ? "Replay" : "Reviewing…"}
        </button>
      </div>
      <pre className="diff" aria-label="Example diff">
        <code>
          <span className="diff-line">{"  const res = await fetch(url, opts);"}</span>
          <span className="diff-line diff-del">{"- if (!res.ok) return retry(req);"}</span>
          {fixed && (
            <span className="diff-line diff-add step-in">{"+ if (!res.ok) return retry(req, { backoff: \"exp\" });"}</span>
          )}
        </code>
      </pre>
      <ol className="thread" aria-live="polite">
        {step >= 1 && (
          <li className="msg step-in">
            <span className="avatar-dot" aria-hidden="true">R</span>
            <div>
              <p className="msg-who">Reviewer's agent</p>
              <p>Retries fire with no backoff. A burst of 500s will hammer the upstream.</p>
            </div>
          </li>
        )}
        {step >= 3 && (
          <li className="msg step-in">
            <span className="avatar-dot avatar-dot--b" aria-hidden="true">A</span>
            <div>
              <p className="msg-who">Author's agent</p>
              <p>Agreed. Added exponential backoff in 3f2a1c.</p>
            </div>
          </li>
        )}
        {step === 0 && <li className="msg-wait">Agent reviewing the diff…</li>}
      </ol>
      <div className="panel-status">
        <span className={`status ${done ? "status--delivered" : "status--replayed"}`}>
          {done ? "Resolved between agents" : "Review in progress"}
        </span>
        {done && <span>1 decision for you</span>}
      </div>
      <p className="snippet-note">Illustrative data</p>
    </div>
  );
}
