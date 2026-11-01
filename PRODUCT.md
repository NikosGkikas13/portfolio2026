# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, all confirmed:

- **Hiring managers and recruiters** at fintech, trading and tech companies, deciding whether to reach out about a role.
- **Freelance clients** looking for someone to build or speed up a web product.
- **Developers and peers** checking out Nitpilot, Odyhook and the AI tooling work.

## Product Purpose

The personal site of Nikos Gkikas, a software engineer in Marathon, Greece. It exists to get the right people to make contact (form, email, LinkedIn, GitHub). Success: a visitor leaves knowing what he is good at and has a reason to get in touch.

## Positioning

What a visitor should remember (the owner's words): keeping up with current tech stacks, handling very fast and very large flows of data, and AI-driven engineering. Backed by real work: trader-facing ETF basket, pricing and risk UIs at JPMorganChase, and two shipped side products (Nitpilot, Odyhook).

## Operating Context

Single-page React 19 + TypeScript + Vite site, deployed over SSH/rsync to nikosgkikasdev.com. Contact form posts to Formspree via `VITE_FORMSPREE_ENDPOINT`. A printable résumé lives at `public/resume.html` / `public/resume.pdf`.

## Capabilities and Constraints

- Light and dark themes with a toggle (stored in localStorage).
- Content lives in `src/data/content.ts` and the section components.
- No new runtime dependencies without reason.

## Evidence on Hand

- Real roles: JPMorganChase (2025–now), OKTO (2023–2025), Sportion (2020–2023), freelance (2019–2020).
- Shipped products: Nitpilot (nitpilot.dev), Odyhook (odyhook.dev), both live.
- Avatar photo: `src/assets/avatar.jpeg`. OG image: `public/og-image.png`.
- No testimonials, client logos, metrics or benchmarks exist. Do not invent them.

## Product Principles

1. Show the work, don't describe it: the shipped products and the trading-UI experience carry the case.
2. Every claim on the page must match the résumé.
3. Fast and light: the site itself should feel like proof of performance-minded engineering.

## Brand Commitments

- The owner rejected a themed visual world (engraved "Security Print") as hard to read and not engineer-like. Standing preference: the category standard for engineering sites, executed at full craft, sitting alongside Linear and Vercel. Readability and showing the work beat concept.
- Projects are demonstrated with small working UI/code snippets built in HTML, not screenshots.
- Motion must feel sophisticated and adult: slow ease-outs, masked reveals, light. The owner rejected bouncy/springy/rotating "playful" motion as childish.
