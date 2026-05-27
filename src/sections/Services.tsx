import { SERVICES } from "../data/content";

export function Services() {
  return (
    <section id="services">
      <div className="eyebrow">06 / services</div>
      <h2 className="section-title">What I can help with.</h2>
      <p className="body" style={{ marginBottom: 28 }}>
        Whether you need an entire product front-end or a hand on something
        specific, these are the lanes I work in.
      </p>
      <div className="svc-grid">
        {SERVICES.map((s) => (
          <div className="svc" key={s.n}>
            <div className="n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
