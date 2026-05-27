import { useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as
  | string
  | undefined;

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (form: HTMLFormElement) => {
    if (!FORMSPREE_ENDPOINT) {
      setError(
        "Form endpoint not configured. Set VITE_FORMSPREE_ENDPOINT in your .env file.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(
          body?.errors?.[0]?.message ?? `Request failed (${res.status})`,
        );
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "sending"
      ? "sending…"
      : status === "sent"
        ? "sent →"
        : "Send message →";

  return (
    <section id="contact">
      <div className="eyebrow">08 / contact</div>
      <h2 className="section-title">Let's talk.</h2>
      <p className="body" style={{ marginBottom: 32 }}>
        Have a project, a hire, or just want to compare notes on AI tooling? The
        form goes straight to my inbox. Or pick the channel you prefer on the
        right.
      </p>
      <div className="contact-grid">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            void submit(e.currentTarget);
          }}
        >
          <div className="field">
            <label htmlFor="n">Name</label>
            <input
              id="n"
              name="name"
              type="text"
              required
              disabled={status === "sending"}
            />
          </div>
          <div className="field">
            <label htmlFor="e">Email</label>
            <input
              id="e"
              name="email"
              type="email"
              required
              disabled={status === "sending"}
            />
          </div>
          <div className="field">
            <label htmlFor="m">Message</label>
            <textarea
              id="m"
              name="message"
              required
              disabled={status === "sending"}
            />
          </div>
          <button
            className="btn-send"
            type="submit"
            disabled={status === "sending" || status === "sent"}
          >
            {buttonLabel}
          </button>
          {status === "error" && error && (
            <div className="form-error" role="alert">
              {error}
            </div>
          )}
          {status === "sent" && (
            <div className="form-success" role="status">
              Thanks — I'll get back to you soon.
            </div>
          )}
        </form>

        <dl className="aside">
          <dt>Email</dt>
          <dd>
            <a href="mailto:ngkdev93@gmail.com">ngkdev93@gmail.com</a>
          </dd>

          <dt>Phone</dt>
          <dd>+30 698 476 4168</dd>

          <dt>Location</dt>
          <dd>Marathon, Greece · GMT+2</dd>

          <dt>Elsewhere</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/nikos-gkikas-7b250b1b0"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
          </dd>
          <dd>
            <a
              href="https://github.com/NikosGkikas13"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
          </dd>
          <dd>
            <a
              href="https://www.instagram.com/nick_klg"
              target="_blank"
              rel="noreferrer"
            >
              Instagram →
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
}
