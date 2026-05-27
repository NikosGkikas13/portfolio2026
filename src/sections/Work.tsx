export function Work() {
  return (
    <section id="work">
      <div className="eyebrow">03 / work</div>
      <h2 className="section-title">Side projects.</h2>
      <p className="body">
        Things I'm making outside the day job. Most of them are works in
        progress — I'll point you at them when they're ready.
      </p>

      <div className="project-list">
        <a
          className="project"
          href="https://odyhook.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-head">
            <div className="title-wrap">
              <h3>Odyhook</h3>
              <div className="url">odyhook.dev&nbsp;→</div>
            </div>
            <span className="pill pill--in-flight">
              <span className="dot dot--in-flight" />
              in_flight
            </span>
          </div>
          <p>
            A smart webhook proxy. Ingests events from upstream providers, logs
            every payload forever, fans out to multiple destinations with
            automatic retries, and lets you replay any event with one click.
            AI-compiled filters and JS transforms run in a QuickJS sandbox
            before forwarding.
          </p>
          <div className="project-meta">
            <span>
              stack <b>Next.js · Prisma · Postgres · QuickJS</b>
            </span>
            <span>
              status <b>under construction</b>
            </span>
          </div>
        </a>
      </div>

      <div className="project-empty">
        More projects landing here soon — currently shipping privately.
      </div>
    </section>
  );
}
