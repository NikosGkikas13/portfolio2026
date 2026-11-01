---
name: Nikos Gkikas — Portfolio
description: Product-engineering portfolio in the Linear/Vercel lineage; the work is shown running, not described.
colors:
  indigo-accent: "#7c85ff"
  indigo-link: "#9aa1ff"
  live-green: "#4cc38a"
  down-red: "#f2777a"
  warn-amber: "#e8b14a"
  night-ground: "#08090a"
  night-ground-2: "#0d0e10"
  night-surface: "#0f1012"
  night-surface-2: "#151619"
  night-fg: "#f7f8f8"
  night-fg-2: "#b4b8bf"
  night-fg-3: "#8a8f98"
  night-hairline: "#1f2125"
  night-hairline-strong: "#2b2e33"
  indigo-accent-light: "#4f5bd5"
  indigo-link-light: "#4651c4"
  up-green-light: "#12805c"
  live-green-light: "#16a34a"
  down-red-light: "#c2373b"
  warn-amber-light: "#a16207"
  day-ground: "#fbfbfc"
  day-ground-2: "#f4f4f6"
  day-surface: "#ffffff"
  day-surface-2: "#f7f7f9"
  day-fg: "#0d0e10"
  day-fg-2: "#4b4f57"
  day-fg-3: "#6b7079"
  day-hairline: "#e4e5e9"
  day-hairline-strong: "#d2d4da"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.045em"
  intro:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.375rem, 3vw, 2rem)"
    fontWeight: 500
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
    fontWeight: 600
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
  mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    lineHeight: 1.7
rounded:
  xs: "4px"
  tag: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2rem)"
  section: "clamp(6rem, 12vw, 9rem)"
  page: "70rem"
  panel-x: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.night-fg}"
    textColor: "{colors.night-ground}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.5rem"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-fg}"
    rounded: "{rounded.sm}"
    padding: "0 1rem"
    height: "2.5rem"
  button-secondary-hover:
    backgroundColor: "{colors.night-surface-2}"
  button-small:
    rounded: "{rounded.sm}"
    padding: "0 0.75rem"
    height: "2rem"
  icon-button:
    textColor: "{colors.night-fg-2}"
    rounded: "{rounded.sm}"
    size: "2rem"
  pill:
    backgroundColor: "{colors.night-surface-2}"
    textColor: "{colors.night-fg-2}"
    rounded: "{rounded.pill}"
    padding: "0 0.6rem"
    height: "1.5rem"
  tag:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.night-fg-2}"
    rounded: "{rounded.tag}"
    padding: "0 0.65rem"
    height: "1.75rem"
  panel:
    backgroundColor: "{colors.night-surface}"
    rounded: "{rounded.md}"
  hero-card:
    backgroundColor: "{colors.night-surface}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  avatar:
    rounded: "{rounded.pill}"
    size: "5.5rem"
  panel-bar:
    backgroundColor: "{colors.night-surface-2}"
    textColor: "{colors.night-fg-2}"
    padding: "0 1rem"
    height: "3rem"
  input:
    backgroundColor: "{colors.night-ground}"
    textColor: "{colors.night-fg}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 0.75rem"
  nav:
    height: "3.5rem"
    textColor: "{colors.night-fg-2}"
---

# Design System: Nikos Gkikas — Portfolio

## Overview

**Creative North Star: "The Running Build"**

The category standard for an engineering site, played straight at Linear/Vercel craft. A near-black ground, one indigo voice, hairline structure, and Geist set tight. Nothing on the page is themed or conceptual; the distinctive thing is that the work runs. The Odyhook panel replays a failed webhook, the Nitpilot panel plays out a review between two agents; both are HTML and both say their data is illustrative. The page opens as a personal intro, greeting the visitor by name.

Motion is restrained and adult: slow expo ease-outs, masks, and light; no bounce, overshoot, rotation, or wiggle. The owner rejected an earlier playful layer as childish. The greeting glides up out of a mask, the "I build" phrase slides through its own mask, the hero copy and card fade up, section headings rise once into view, and a soft indigo light follows the pointer along the project panels' edges. Nothing else moves.

Density is calm: one 70rem column, big section gaps, prose capped near 40rem, and dense mono data confined to app-window panels. Readability beats concept. The owner rejected an earlier themed world ("Security Print": engraved paper, display serif, seal red) as hard to read and not engineer-like; nothing from it survives and none of it should return.

Dark (#08090a ground) is the reference world; a light twin (#fbfbfc ground) is a full token swap, not an afterthought. Theme follows the OS preference until the visitor toggles it, and the toggle persists.

**Key Characteristics:**
- Near-black ground with a complete light twin; tokens swap under `.dark`.
- One indigo accent for links, focus, and selection; green and red carry state only.
- Geist for everything; Geist Mono only for code, data, dates, and diffs.
- 1px hairlines, 12px panels, 8px controls, soft offset shadows with an inset top highlight.
- Work is shown as working HTML snippets, each labelled illustrative.
- Sophisticated motion: one expo ease-out for every entrance, masks and edge light, no overshoot; never under reduced motion.

## Colors

A neutral graphite scale with one cool indigo voice and two signal colors that only ever mean state.

### Primary
- **Signal Indigo** (`indigo-accent`, light twin `indigo-accent-light`): focus outlines (2px, 2px offset), input focus border and 25% ring, text selection at 30%, the event-arrival flash in the Odyhook log, the Nitpilot reviewer avatar tint, and the spotlight edge light (with an 8% inner wash) on project panels. Never a fill for buttons or large areas.
- **Link Indigo** (`indigo-link`, light `indigo-link-light`): the text color of links, "Show more" summaries, contact-channel hover, the `replayed` status, and keywords in code samples. A lighter step of the accent tuned for text contrast.

### Secondary (state signals)
- **Live Green** (`live-green`, light `up-green-light` for up/delivered text and `live-green-light` for the live dot): live dots, `delivered`/resolved status, diff additions.
- **Down Red** (`down-red`, light `down-red-light`): diff deletions, form error messages.
- **Retry Amber** (`warn-amber`, light `warn-amber-light`): the `retrying` status only.

### Neutral
- **Night Ground** (`night-ground` / `day-ground`): page background, input fill.
- **Ground 2** (`night-ground-2` / `day-ground-2`): code and diff wells, nav link hover.
- **Surface** (`night-surface` / `day-surface`): panels, secondary buttons, tags, contact panel.
- **Surface 2** (`night-surface-2` / `day-surface-2`): panel title bars, pills, button and row hover.
- **Foreground ramp** (`fg`, `fg-2`, `fg-3`): headings and emphasis / body and secondary copy / meta, labels, timestamps, placeholders.
- **Hairline** and **Hairline Strong**: every border and divider; strong for control outlines and inputs.

### Named Rules
**The One Voice Rule.** Indigo is the only accent. It marks where you can go (links), where you are (focus), what you selected (selection), and the spotlight edge light on project panels. It never fills a button. The sky dive's painted art (see Motion) carries its own colors, including the storm's crimson light; that palette lives only inside the scene, never in the page UI.

**The Signals Mean State Rule.** Green means live, delivered, or added. Red means deleted or error. Amber means retrying. None of them decorate.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo)

**Character:** One neutral grotesk carrying the whole page, set tight at large sizes; the mono appears only where the content is machine-shaped.

### Hierarchy
- **Display** (600, clamp 3–6rem, 1, −0.045em): the hero greeting only ("Hi, I'm Nikos.").
- **Intro** (500, clamp 1.375–2rem, −0.025em, fg-2): the "I build <phrase>" line under the greeting; the rolling phrase is fg over a 1px hairline-strong underline.
- **Headline** (600, clamp 1.75–2.5rem, 1.1, −0.035em, balanced): section titles, written as plain sentences ending in a period ("Side projects.").
- **Title** (600, clamp 1.5–2rem, −0.03em): project names. Company names step down to 1.25rem (−0.02em), the current role at 1.5rem.
- **Lead** (400, clamp 1.25–1.5rem, 1.4, −0.015em): the opening line of About prose.
- **Body** (400, 1rem/1.6; 1.0625rem for section subs and prose): prose capped at 38–40rem; experience notes at 36em.
- **Label** (500, 0.8125rem, sentence case, fg-3): field labels, list group labels ("Primary", "Familiar"), panel titles, table headers. Never uppercase, never tracked out.
- **Mono** (400–500, 0.75–0.8125rem): event logs, code, diffs, job years, the footer date, file paths in panel bars.

### Named Rules
**The Mono Is Data Rule.** Geist Mono sets only code, numbers, timestamps, dates, paths, and diffs. Headings, labels, and buttons stay in Geist.

**The Plain Heading Rule.** A section opens with its headline. No eyebrow, kicker, or section number sits above it.

## Layout

A single centered column (max 70rem) with a fluid gutter (clamp 1–2rem). Sections are separated by a large fluid gap (clamp 6–9rem); the hero is a two-column grid (`1.6fr` copy / `minmax(16rem, 1fr)` card, gap clamp 2–5rem, vertically centered) at about one viewport tall (min of 100svh minus the nav, or 52rem), padded clamp 3–5rem. Copy on the left (subline capped at 36rem); the at-a-glance card on the right.

Two-column splits use `1fr / 1.6fr` (About, Skills); projects alternate copy and snippet sides on a `1fr / 1.25fr` grid; Services is a two-column list of hairline-topped rows; Experience is an 11rem date column beside the role. Everything collapses to one column at 900px (the hero drops its min-height and the card caps at 24rem); at 640px the nav links hide, the hero's GitHub/LinkedIn links wrap to their own line, experience and service rows stack, and the event log drops its timestamp column.

Sticky nav offsets anchors with 5rem scroll padding.

## Elevation & Depth

Hybrid: depth is mostly hairlines and tonal steps (ground → surface → surface 2), with soft offset shadows only under app-window panels. Every raised surface carries a 1px inset top highlight (white at 90% in light, 5% in dark) that reads as a lit edge.

### Shadow Vocabulary
- **Panel, light** (`box-shadow: inset 0 1px 0 var(--highlight), 0 1px 2px rgb(0 0 0 / 0.04), 0 16px 40px -16px rgb(0 0 0 / 0.14)`): snippet panels and the hero card.
- **Panel, dark** (`box-shadow: inset 0 1px 0 var(--highlight), 0 24px 60px -24px rgb(0 0 0 / 0.8)`): the same panels on the night ground.
- **Edge highlight only** (`box-shadow: inset 0 1px 0 var(--highlight)`): secondary buttons and the contact panel.
- **Focus ring** (`box-shadow: 0 0 0 3px` accent at 25%): inputs on focus.
- **Nav glass**: ground at 80% with `saturate(1.4) blur(12px)` and a bottom hairline.

### Named Rules
**The Soft Lift Rule.** Shadows are diffuse, negatively spread, and offset downward. No hard offset shadows, no ambient glows, no gradients on text. The one light effect is the hover spotlight on project panels.

## Shapes

Rounded rectangles in a tight family: 12px panels (the contact panel and hero card 16px), 8px buttons, icon buttons, and inputs, 7px for the monogram badge, 6px tags and nav-link hovers, 4px for focus outlines, full pills for status pills, circles for avatars and status dots. Every border is 1px; the only dashed border is the "more on the way" note. Chevrons are drawn with borders, not glyphs.

## Components

### Buttons
Quiet and solid; the primary inverts the page.
- **Shape:** gently rounded (8px), 2.5rem tall; small variant 2rem.
- **Primary:** foreground color as fill, ground color as text (near-white on night, near-black on day). Hover mixes 15% of the ground into the fill. No shadow.
- **Secondary:** surface fill, strong hairline, inset top highlight. Hover steps to surface 2 and the border to fg-3. Trailing arrow icons nudge 1px up-right on hover.
- **Disabled:** 55% opacity, not-allowed cursor.
- **Icon button:** 2rem square, transparent, hairline border, fg-2 icon brightening to fg on hover.

### Chips
- **Pill:** full radius, 1.5rem, surface 2 fill, hairline border, 0.75rem/500. The live variant pairs a 6px green dot (with a 3px 22% halo) with fg text: "Live" on each project.
- **Tag:** 6px radius, 1.75rem, surface fill, hairline border, fg-2 at 0.8125rem. Large variant 2.25rem; strong variant uses fg, 500, and a strong hairline. Tags list technology stacks only: the two Skills clusters (Primary, Familiar) and one stack row per project.

### Cards / Containers
- **Corner Style:** 12px (contact panel and hero card 16px).
- **Background:** surface, with a surface-2 title bar (3rem, bottom hairline) holding a 0.8125rem fg-2 title on the left and a pill or small button on the right.
- **Shadow Strategy:** Panel shadows (see Elevation).
- **Border:** 1px hairline.
- **Internal Padding:** 1rem horizontal; a mono status bar (0.75rem, fg-3, top hairline) closes data panels.

### Inputs / Fields
- **Style:** ground fill, strong hairline, 8px radius, 0.6rem × 0.75rem padding, 0.9375rem text; label above in Label style.
- **Focus:** border turns accent with a 3px accent ring at 25%.
- **Error / Disabled:** error text in down red; disabled at 60% opacity.

### Navigation
Sticky 3.5rem glass bar with a bottom hairline. Monogram badge (inverted, 7px radius) plus name on the left; fg-2 text links in 6px hover boxes that fill with ground 2; theme icon button; small primary "contact" button. Links hide under 640px.

### Hero At-a-Glance Card
A 16px surface card (1.5rem padding, hairline border, inset top highlight, soft lift) set straight beside the greeting; it fades up on load and has no hover motion. An 88px circular avatar sits at the top, ringed by a 4px surface gap and a 1px hairline; below it a small `dl`: fg-3 0.75rem terms, fg 0.9375rem/500 values ("Currently", "Shipped", "Based in", "Into"). This is the only photo on the page; About is text only.

### Work Snippets (signature)
Projects are demonstrated with small working HTML panels, never screenshots, each carrying an "Illustrative data" note in the bottom-right corner. Each panel sits in a Spotlight wrapper (see Motion).
- **Odyhook event log:** mono rows (time, source, event, status with a colored dot, destinations); "Replay failed" re-queues the retrying event, which arrives with an indigo flash and resolves; a code well shows the transform.
- **Nitpilot review:** a diff well (red deletion, green addition), then a thread of two agents with tinted initial avatars, stepping in once the panel is half visible; the status bar resolves to "Resolved between agents"; a small "Replay" button reruns it.

### Motion
Two curves, no overshoot. `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`) at 180ms carries every state change; data animations run 0.45–0.9s. `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-expo`) carries every entrance and the spotlight fade.
- **Headline:** "Hi, I'm Nikos." sits in an overflow-hidden mask and glides up from 105% below (1.1s, 0.1s delay).
- **Rolling phrase:** the "I build" phrase cycles every 3.2s; each phrase slides up from 100% below inside an overflow-hidden mask (0.8s), no blur. Screen readers get the full list once.
- **Fade-up:** the subline and actions rise 12px and fade in (1s, delayed 0.45s and 0.55s); the hero card does the same (1.2s, 0.6s delay) and sits straight with no hover motion.
- **Spotlight:** on project snippet panels, a radial indigo light (18rem) follows the cursor along the panel's 1px border ring (a mask-composite exclude ring), over a faint 8% indigo wash (24rem) inside the panel. Both fade in on hover over 0.5s. Nothing rotates. Mouse and trackpad only (`hover: hover` and `pointer: fine`).
- **Section reveal:** once JS runs with reduced motion off, `<html>` gets `reveal-ready`; each non-hero section's title and sub then rise 18px and fade in once the section is 15% into the viewport (0.9s opacity / 1.1s transform, the sub 80ms later). Without JS or with reduced motion, headings are simply visible.

- **Sky dive (opening scene, `components/CloudDive.tsx`):** before the hero, a 350svh track (300svh on phones) pins a full-screen stage. JS writes only `--p` (0→1); every layer derives `transform`/`opacity` from it in CSS, so nothing reflows. Painted Kling art lives in `public/hero/` (AVIF + WebP at 1280/1920/2560; sources and keyed cut-outs in `.impeccable/mocks/hero-art/`). Beats: **above** (sky, island floating ±8px over 6s, clouds drifting ±2%, name in the sky, "Skip intro" link) → **dive** (p .05–.40: island leaves fastest, front bank swells ×2.6, far bank ×1.6, sky ×1.12) → **whiteout** (.30–.45) → **dims** (.45–.56) → **storm** (.56+: red-lit walls, slow push-in; Miyamoto Musashi's "Think lightly of yourself / and deeply of the world." in Geist 600 is present .58–.92 but unseen until a strike; strikes alternate it: one bolt throws it on screen in full white (60ms) and it stays until the next bolt takes it away (350ms fade); the lines part up/down .80–.92) → **below** (.84–1: the storm ceiling slides in and fades into the ground; the hero rises under it, overlapping the last 35svh). In light theme the ceiling fades through grey mist into the light ground. The nav rides transparent with light text on the art (`html[data-scene]`) until the ceiling clears it. Only the sky is preloaded; storm layers load after first scroll or 2.5s.
- **Lightning:** only while .52 < p < .86 and the tab is visible. A strike every 2.5–6s, at most two flashes per strike, never closer than 350ms, so never more than 3 flashes in any second (WCAG 2.3.1; measured max 2/s). A flash shows the bolt (screen blend, random position and mirror) and a dim wash of at most 22% opacity for 110ms: no shake, no white frame.

Entrances use `backwards` fill. Under reduced motion, transitions and animations collapse to near-zero, the reveal never arms, the Nitpilot snippet renders its end state, and the sky dive is not rendered at all (the page opens on the hero).

## Do's and Don'ts

### Do:
- **Do** keep indigo to links, focus, selection, and the panel spotlight; let the inverted fg-on-ground button be the strongest mark on any screen.
- **Do** set every border at 1px with the hairline tokens, panels at 12px, controls at 8px.
- **Do** show work as small working HTML snippets inside panels, and label each one "Illustrative data".
- **Do** run every entrance on the expo ease-out (`--ease-expo`): long (0.8–1.2s), masked or a short fade-up, with backwards fill; keep pointer response to the spotlight's light.
- **Do** use Geist Mono for every date, path, log line, and line of code.
- **Do** ship both themes from the same token names; give reduced-motion users the end state.

### Don't:
- **Don't** put eyebrows, kickers, or section numbers above headings.
- **Don't** build icon-card grids; services and skills are hairline rows and tag lists.
- **Don't** add tag clusters beyond stack lists (the two Skills groups and one row per project).
- **Don't** use green or red for decoration; they are state.
- **Don't** use hard offset shadows, ambient glows, or gradient text.
- **Don't** return to a themed world: no engraved paper textures, display serifs, or seal red.
- **Don't** set headings, labels, or buttons in Geist Mono, or uppercase and track labels.
- **Don't** bounce, overshoot, rotate, or wiggle anything; no spring curves, tilts, or letter-by-letter play.
