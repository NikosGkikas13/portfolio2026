# nikosgkikasdev.com

My personal website and résumé. It's live at **[nikosgkikasdev.com](https://nikosgkikasdev.com/)**.

It's a single page with an about section, my stack, selected work ([Nitpilot](https://nitpilot.dev/) and [Odyhook](https://odyhook.dev/)), my experience and contact details. It has light and dark themes and section-reveal animations.

## Stack

- React 19 and TypeScript
- Vite
- Plain CSS, with no UI library

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check and production build into dist/
npm run lint
```

`npm run resume` prints `public/resume.html` to `public/resume.pdf` with headless Chrome.

## Where things live

- `src/data/content.ts`: all the copy (projects, experience, skills, services).
- `src/sections/`: one component per page section.
- `src/components/`: nav, footer, icons and the motion helpers.
- `public/`: favicon, social image, hero art and the résumé.
