import { EXPERIENCE } from "../data/content";

export function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Where I've worked.</h2>
      <ol className="jobs">
        {EXPERIENCE.map((job, i) => (
          <li className="job" key={job.company + job.years}>
            <span className="job-years">{job.years}</span>
            <div className="job-body">
              <h3 className="job-company">
                {job.company}
                {i === 0 && (
                  <span className="pill pill--live">
                    <span className="live-dot" aria-hidden="true" />
                    Current
                  </span>
                )}
              </h3>
              <p className="job-title">{job.title}</p>
              <ul className="job-notes">
                {job.bullets.slice(0, i === 0 ? undefined : 2).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {i > 0 && job.bullets.length > 2 && (
                <details className="job-more">
                  <summary>{job.bullets.length - 2} more</summary>
                  <ul className="job-notes">
                    {job.bullets.slice(2).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
