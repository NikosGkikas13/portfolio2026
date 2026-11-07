import avatarImg from "../assets/avatar.jpeg";
import { ROLES } from "../data/content";
import { ArrowUpRight } from "../components/Icons";
import { RollingWord } from "../components/Motion";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" className="mask">
          <span className="mask-inner">Hi, I'm Nikos.</span>
        </h1>
        <p className="hero-roll">
          I build <RollingWord words={ROLES} />
        </p>
        <p className="hero-sub">
          Software engineer at JPMorganChase, making React and TypeScript apps
          that stream live pricing and risk to traders — and AI agents that
          speed up how software gets built.
        </p>
        <div className="hero-actions">
          <a className="btn btn--primary" href="#contact">
            Get in touch
          </a>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight />
          </a>
          <span className="hero-socials">
            <a className="link" href="https://github.com/NikosGkikas13" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight />
            </a>
            <a className="link" href="https://www.linkedin.com/in/nikos-gkikas-7b250b1b0" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight />
            </a>
          </span>
        </div>
      </div>

      <aside className="hero-card" aria-label="At a glance">
        <img className="hero-avatar" src={avatarImg} alt="Nikos Gkikas" width={96} height={96} />
        <dl className="glance">
          <div>
            <dt>Currently</dt>
            <dd>Software Engineer II, JPMorganChase</dd>
          </div>
          <div>
            <dt>Shipped</dt>
            <dd>
              <a href="https://github.com/NikosGkikas13/nitpilot" target="_blank" rel="noreferrer">
                Nitpilot
              </a>
              {" · "}
              <a href="https://github.com/NikosGkikas13/odyhook" target="_blank" rel="noreferrer">
                Odyhook
              </a>
            </dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>Athens, Greece · GMT+2</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
