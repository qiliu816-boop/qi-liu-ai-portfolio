# Qi Liu AI Portfolio

Professional portfolio for job applications in China, positioned around
**Business × Data × AI Product**.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

```sh
npm run typecheck
npm run build
npm run preview
```

`build` checks TypeScript and writes the production site to `dist/`.
`preview` serves that build locally.

## Current scope

English Home Page V0.1: navigation, Hero, About and capability pillars, featured
TradePilot project, future-project cards, Resume / Contact, and footer.
TradePilot Case Study V0.1 is available at `/tradepilot` and linked from Home.
The resume remains labelled as pending. Set `links.resume` in
`src/pages/HomePage.tsx` when a confirmed URL or public PDF path is available.

The UI uses React, CSS, and system fonts without external assets or UI packages.
Case-study screenshot areas are explicitly labeled placeholders until real
TradePilot captures are provided. No product screenshots were fabricated.

Read AGENTS.md, PROJECT_CONTEXT.md, CURRENT_TASK.md, and CHANGELOG.md before
continuing work.

## Hosting

GitHub is the source repository. Vercel is the planned hosting platform, using
the Vite preset, `npm run build`, and output directory `dist`.
No deployment has been created. No environment variables or backend required.
`vercel.json` rewrites the dedicated case-study route to the application entry
point so direct links and refreshes can resolve on Vercel.
