# Changelog

## 2026-09-29 — TradePilot Case Study final QA complete

- Corrected only Solution screenshot item 02 to “Structured evidence” and the
  supplied description of pricing, customer value and dissatisfaction evidence
  before AI interpretation.
- Preserved layout, screenshots, CSS, Home, all other Case Study copy and styling.
- Passed npm run build, including TypeScript checking; final QA is complete.
- Updated task/context records. No new features or deployment.

## 2026-09-29 — Real TradePilot screenshot replacement

- Replaced only the three Case Study placeholders with supplied report, input,
  and evidence PNGs, with descriptive alt text and full-size image links.
- Preserved full image content, demo disclosures, and natural aspect ratios.
  Removed placeholder padding/minimum heights; used a subtle solid border,
  7px radius, and light shadow. Existing grids and captions remain unchanged.
- Passed TypeScript/build and browser image-loading checks. Inspected 1440px
  desktop and 390px mobile; also checked 320px for overflow. No horizontal
  overflow or console warnings/errors.
- Verified source changes are restricted to screenshot rendering/styles;
  Home and Evidence Mechanism remain unchanged. No deployment or new features.

## 2026-09-28 — TradePilot AI Case Study V0.1

- Added `/tradepilot` with the supplied recruiter-facing narrative: problem,
  insight, solution, AI/evidence boundaries, execution, validation, and reflection.
- Reused the approved visual system with scoped case-study CSS and no new
  dependencies. Added simple pathname routing and Vercel deep-link rewrites.
- Connected the existing Home case-study CTA; removed its obsolete pending note.
  Preserved all other Home code and its shared stylesheet.
- Added three clearly labeled screenshot placeholders because no real product
  assets were available. No fabricated interfaces or quantitative impact claims.
- Passed TypeScript/build, responsive checks, route navigation, and browser
  console checks. Both supplied external destinations returned HTTP 200.
- Updated context; stopped for Case Study review. TradePilot itself is unchanged.

## 2026-09-28 — Home frozen; Case Study stage pending

- Recorded portfolio foundation, Home Page V0.1, Home content refinement, and
  responsive/build/browser QA for Home as completed.
- Recorded Home review approval and freeze: changes require a specific issue
  identified in a later review.
- Set the current task to TradePilot AI Case Study Page V0.1, awaiting finalized
  content architecture and a separate development task.
- Updated context/task files only; no Home changes or Case Study development.

## 2026-09-28 — Reviewed Home copy refinements

- Updated About copy to emphasize business problems, data, AI workflows, and
  rapid prototyping; retained AI coding as a supporting capability.
- Changed the closing heading to “Explore more.” with existing supporting copy.
- Preserved the approved design and both resume/case-study pending states.
- Verified production build and TypeScript; confirmed updated browser copy
  and no console warnings or errors.

## 2026-09-28 — Home Page V0.1

- Replaced the foundation placeholder with all seven requested Home sections.
- Added business/data/AI capability pillars, a prominent TradePilot feature and
  conceptual workflow overview, and restrained future-project cards.
- Wired supplied live-demo and GitHub URLs; added explicit pending states for
  the resume and case study without broken links or extra routes.
- Added responsive layouts, system fonts, keyboard focus and skip navigation,
  and reduced-motion support using React and CSS with no new dependencies.
- Verified TypeScript/build, desktop/tablet/mobile layout, anchor navigation,
  external destinations (HTTP 200), and absence of console warnings/errors.
- Updated project context and documentation; stopped for Home review.

## 2026-09-28 — Foundation complete

- Recorded product scope, technical constraints, working agreements, and
  the current task in four root context files.
- Initialized Vite, React, and TypeScript with a dependency lockfile.
- Added the React entry point, application component, Home placeholder,
  neutral global styles, HTML metadata, and TypeScript/Vite configuration.
- Added local development/build instructions and Vercel hosting notes.
- Verified TypeScript, production build, and development-server rendering
  in the browser; no browser console warnings or errors were observed.
- Stopped before full Home page development. TradePilot remains untouched.
