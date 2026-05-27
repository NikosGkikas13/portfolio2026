import { EXPERIENCE } from "../data/content";

export function Experience() {
  return (
    <section id="experience">
      <div className="eyebrow">04 / experience</div>
      <h2 className="section-title">Where I've worked.</h2>
      {EXPERIENCE.map((job) => (
        <div className="xp" key={job.company + job.years}>
          <div className="years">{job.years}</div>
          <div>
            <div className="company">{job.company}</div>
            <div className="title">{job.title}</div>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
