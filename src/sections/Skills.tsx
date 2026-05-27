import { SKILLS } from "../data/content";

export function Skills() {
  return (
    <section id="skills">
      <div className="eyebrow">05 / skills</div>
      <h2 className="section-title">Tech stack.</h2>
      <p className="body" style={{ marginBottom: 28 }}>
        A working knowledge of the front-end stack, with depth where I've spent
        the most time.
      </p>
      <div className="skill-grid">
        {SKILLS.map((s) => (
          <div className="skill" key={s.name}>
            <span className="name">{s.name}</span>
            <span className="level">{s.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
