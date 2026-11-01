import { SERVICES } from "../data/content";

export function Services() {
  return (
    <section id="services" className="services">
      <h2 className="section-title">What I can help with.</h2>
      <p className="section-sub">
        Whether you need an entire product front-end or a hand on something
        specific, these are the lanes I work in.
      </p>
      <ul className="lanes">
        {SERVICES.map((s) => (
          <li className="lane" key={s.n}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
