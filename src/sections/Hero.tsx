import avatarImg from "../assets/avatar.jpeg";
import { useTypingTicker } from "../hooks/useTypingTicker";
import { TICKER_WORDS } from "../data/content";

export function Hero() {
  const typed = useTypingTicker(TICKER_WORDS);
  return (
    <section className="hero">
      <img
        className="avatar"
        src={avatarImg}
        alt="Nikos Gkikas"
        width={92}
        height={92}
      />
      <div className="status">
        <span className="dot dot--delivered" />
        available for new work — Q3 2026
      </div>
      <h1>
        <span className="first">Nikos</span>
        <br />
        <span className="last">
          Gkikas<span className="dot-char">.</span>
        </span>
      </h1>
      <div className="role">
        software engineer
        <span className="sep">·</span>
        Marathon, Greece
        <span className="sep">·</span>
        JPMorganChase
      </div>

      <p className="lede">
        Software engineer with experience building{" "}
        <span className="accent">
          high-performance frontend and full-stack applications
        </span>{" "}
        across fintech, trading, and web platforms. Specialized in React,
        TypeScript, and real-time systems, with a strong focus on scalable UI
        architecture, trading workflows, and low-latency data-driven
        applications.
      </p>
      <p className="lede">
        Passionate about <span className="accent">AI-driven engineering</span>,
        workflow automation, and developer productivity — with hands-on
        experience building and integrating AI agents, reusable skills, and
        intelligent tooling into modern software platforms.
      </p>

      <div className="ticker">
        <span className="prompt">~/</span>
        <span>currently building&nbsp;→&nbsp;</span>
        <span className="typed">{typed}</span>
        <span className="cursor" />
      </div>
    </section>
  );
}
