import { SKILLS } from "../data/content";

const PRIMARY = SKILLS.filter((s) => s.level === "primary");
const FAMILIAR = SKILLS.filter((s) => s.level === "familiar");

export function Skills() {
  return (
    <section id="skills" className="split">
      <div className="split-head">
        <h2 className="section-title">Tech stack.</h2>
        <p className="section-sub">
          The stack I build with at work and on the side, with depth where
          I've spent the most time.
        </p>
      </div>
      <div className="stack">
        <div className="stack-group">
          <h3 className="label">Primary</h3>
          <ul className="tags tags--lg">
            {PRIMARY.map((s) => (
              <li key={s.name} className="tag tag--strong">
                {s.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="stack-group">
          <h3 className="label">Familiar</h3>
          <ul className="tags">
            {FAMILIAR.map((s) => (
              <li key={s.name} className="tag">
                {s.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="stack-group">
          <h3 className="label">Education</h3>
          <p className="edu">
            <strong>B.Eng. Computer Science</strong> · Bachelor's degree — Greece
          </p>
        </div>
      </div>
    </section>
  );
}
