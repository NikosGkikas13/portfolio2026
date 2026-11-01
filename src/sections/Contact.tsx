import { useState } from "react";
import { ArrowUpRight } from "../components/Icons";

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
    status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send message";

  return (
    <section id="contact" className="contact">
      <div className="contact-panel">
        <div className="contact-intro">
          <h2 className="section-title">Let's talk.</h2>
          <p className="section-sub">
            Have a project, a hire, or just want to compare notes on AI tooling?
            The form goes straight to my inbox. Or pick the channel you prefer.
          </p>
          <dl className="channels">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:ngkdev93@gmail.com">ngkdev93@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+306984764168">+30 698 476 4168</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Marathon, Greece · GMT+2</dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd className="channel-links">
                <a href="https://www.linkedin.com/in/nikos-gkikas-7b250b1b0" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight />
                </a>
                <a href="https://github.com/NikosGkikas13" target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>
                <a href="https://www.instagram.com/nick_klg" target="_blank" rel="noreferrer">
                  Instagram <ArrowUpRight />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            void submit(e.currentTarget);
          }}
        >
          <div className="field">
            <label htmlFor="n">Name</label>
            <input id="n" name="name" type="text" autoComplete="name" placeholder="Your name" required disabled={status === "sending"} />
          </div>
          <div className="field">
            <label htmlFor="e">Email</label>
            <input id="e" name="email" type="email" autoComplete="email" placeholder="you@company.com" required disabled={status === "sending"} />
          </div>
          <div className="field">
            <label htmlFor="m">Message</label>
            <textarea id="m" name="message" rows={5} placeholder="What are you working on?" required disabled={status === "sending"} />
          </div>
          <div className="form-foot">
            <button className="btn btn--primary" type="submit" disabled={status === "sending" || status === "sent"}>
              {buttonLabel}
            </button>
            {status === "error" && error && (
              <p className="form-msg form-msg--error" role="alert">
                {error}
              </p>
            )}
            {status === "sent" && (
              <p className="form-msg" role="status">
                Thanks — I'll get back to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
