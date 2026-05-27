import { FOCUS_CHIPS } from "../data/content";

export function Now() {
  return (
    <section id="now">
      <div className="eyebrow">02 / now</div>
      <h2 className="section-title">What I'm focused on.</h2>
      <p className="body">
        A short list of what's holding my attention this quarter.
      </p>
      <div className="chips">
        {FOCUS_CHIPS.map((chip) => (
          <span key={chip} className="chip">
            <span className="dot" />
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
}
