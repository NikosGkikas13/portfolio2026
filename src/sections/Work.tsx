import type { ReactNode } from "react";
import { PROJECTS } from "../data/content";
import { ArrowUpRight } from "../components/Icons";
import { NitpilotSnippet, OdyhookSnippet } from "../components/Snippets";
import { Spotlight } from "../components/Motion";

const DEMOS: Record<string, () => ReactNode> = {
  Odyhook: OdyhookSnippet,
  Nitpilot: NitpilotSnippet,
};

export function Work() {
  return (
    <section id="work" className="work">
      <h2 className="section-title">Side projects.</h2>
      <p className="section-sub">
        Things I've built outside the day job — made for myself, shipped, and
        in use.
      </p>

      <div className="projects">
        {PROJECTS.map((p) => {
          const Demo = DEMOS[p.name];
          return (
            <article className="project" key={p.name}>
              <div className="project-copy">
                <div className="project-name">
                  <h3>{p.name}</h3>
                  <span className="pill pill--live">
                    <span className="live-dot" aria-hidden="true" />
                    Live
                  </span>
                </div>
                <p>{p.body}</p>
                <ul className="tags">
                  {p.stack.split(" · ").map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                <a className="link" href={p.href} target="_blank" rel="noreferrer">
                  {p.domain} <ArrowUpRight />
                </a>
              </div>
              <Spotlight>
                <Demo />
              </Spotlight>
            </article>
          );
        })}
      </div>

      <p className="more">More on the way — I'm always building something on the side.</p>
    </section>
  );
}
