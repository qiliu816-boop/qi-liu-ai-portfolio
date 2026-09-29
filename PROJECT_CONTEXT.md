# Qi Liu AI Portfolio

## Goal and positioning

Build a professional portfolio website for job applications in China.
Position Qi Liu as **Business × Data × AI Product**.

Help recruiters quickly understand who Qi Liu is, which business problems she
can solve, how she uses AI and data in real product scenarios, her flagship
project TradePilot AI, and where to access its live demo and GitHub.
The goal is business and product communication, not flashy frontend engineering.

## Project stage

Completed:
- Portfolio foundation
- Home Page V0.1
- Home content refinement
- Responsive/build/browser QA for Home

Home Page V0.1 has passed review and is frozen. Do not modify the Home page
unless a later review identifies a specific issue. The sole authorized exception
for the Case Study task was connecting the existing View Case Study CTA.

Current task: **TradePilot AI Case Study Page V0.1**.
Implemented from the supplied content architecture; final QA complete on
2026-09-29 after the evidence screenshot caption correction. The page
is available at `/tradepilot`. Do not proceed beyond Case Study V0.1.

## Target roles

- Product Manager
- AI Product Manager
- Product Operations
- Business / Operations Analyst
- International Trade / Cross-border E-commerce
- SaaS / Business Product roles

## V0.1 scope

Home: Hero, About Me, Featured Project: TradePilot AI, Other Projects:
BizDoctor AI and Roomie AI, Resume / Contact.

TradePilot Case Study V0.1 approved content architecture: Hero, Problem,
Insight, Solution / Product Flow, AI Role & Evidence Mechanism, Execution,
Validation, Reflection, and final demo / GitHub / Portfolio links.
Validation distinguishes demonstrated MVP capabilities from unvalidated user
adoption and business impact, with a future validation question rather than
invented metrics.

BizDoctor AI and Roomie AI may appear only as Coming Soon / Future Update
cards. Detailed development is outside V0.1.

TradePilot AI is an AI-powered cross-border market research assistant.
Its V0.1 is complete and live. This repository only presents the case study;
it must not modify or rebuild TradePilot.

## Stack and constraints

Vite + React + TypeScript, source hosted on GitHub, future hosting on Vercel.
Keep dependencies minimal. No database, authentication, CMS, LLM API, backend,
paid services, or unnecessary UI frameworks. Do not change scope or stack.

## Design principles

Professional, modern, clean, business-oriented, internationally credible,
and easy for Chinese recruiters to scan. Prioritize business impact and
product thinking over coding. Avoid futuristic AI aesthetics, excessive
gradients, neon/cyberpunk styling, excessive animation, decorative complexity,
and generic developer-portfolio aesthetics.

## Confirmed Home content

Home Page V0.1 and its content refinements have passed review. Preserve its visual system, section
structure, and responsive behavior. AI coding is a supporting capability;
professional positioning centers on business, data, and AI product workflows.

V0.1 is primarily English, serving as an international capability signal for
Chinese recruiters. Background: International Economics & Trade, MSc Applied
Social Data Science, platform / OTA operations, merchant collaboration, data
analysis, market research, and AI coding / rapid MVP execution.

TradePilot presents an evidence-aware cross-border research workflow combining
market, competitor, pricing, and customer-review inputs. Distinguish data facts
from AI inference and highlight opportunity, risk, and action insights.

- Live demo: https://tradepilot-ai-livid.vercel.app
- TradePilot repository: https://github.com/qiliu816-boop/tradepilot-ai
- Personal GitHub: https://github.com/qiliu816-boop
- BizDoctor AI: AI merchant performance diagnosis and growth assistant;
  Operations × Data × B2B Product × AI; Coming Soon.
- Roomie AI: AI-enhanced shared-living management product;
  Consumer Product × AI Coding × MVP; Future Update.

Resume file/URL, project metrics and supporting evidence, and additional contact
details remain unprovided. Do not fabricate them. The Home resume action is a
clearly labelled pending state; navigation and the Hero CTA lead to that section.

## Foundation structure

- `src/main.tsx`: React entry point and global styles.
- `src/App.tsx`: minimal pathname-based Home / TradePilot selection and page title.
  Native links handle navigation without an additional routing dependency.
- `src/pages/HomePage.tsx`: English Home sections, small reusable link helpers,
  capability data, and confirmed URLs. Wire the resume through `links.resume`.
- `src/styles/global.css`: responsive neutral/teal presentation with system fonts,
  visible focus styles, and reduced-motion support. No external assets required.
- `src/pages/TradePilotPage.tsx`: supplied case-study narrative, flow diagrams,
  evidence comparison, honest validation boundaries, and real product screenshots.
- `src/styles/case-study.css`: all added styles scoped under `.case-study`;
  existing global CSS remains unchanged.
- `vercel.json`: rewrites `/tradepilot` and `/tradepilot/` to the SPA entry point
  for direct access on the planned Vercel host. No deployment performed.

Home keeps its anchor navigation and pending resume behavior. Its case-study
CTA now links to `/tradepilot`; the obsolete coming-next label was removed.

## Case Study assets and content boundaries

The three user-selected real screenshots in public/images/tradepilot/ replace
the existing placeholders: tradepilot-report.png (hero), tradepilot-input.png
(Solution input), and tradepilot-evidence.png (Solution evidence). Full image
content and demo/mock disclosures are preserved without cropping or distortion.
Screenshots link to their full-size assets for detailed reading. The surrounding
layout and Evidence Mechanism visual system are unchanged. Solution item 02
is labeled “Structured evidence” with the supplied evidence-layer description. The optional
execution screen strip remains deferred. Do not fabricate product screenshots.

The page describes a portfolio MVP using user-supplied content, including its
four core screens and stated workflow validation. No customer, revenue, adoption,
accuracy, time-saving, or business-impact metrics have been invented. The
TradePilot application itself has not been modified.
