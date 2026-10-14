# Portfolio content verification

Reviewed 2026-10-14. Internal handoff document; not imported by the app or copied into its build.

Owner revisions, October 14: omit the CV download, employment history and portrait. Education remains. Decorative full stops after the name and em dashes in public copy were removed. The opening uses a single text column. The footer now includes the consistent professional title, contact links, copyright, and back to top. Original screenshots predate these revisions; newer captures include `no-portrait` or `footer` in their names.

## Latest content cross-check

- LinkedIn opened successfully in the signed-in browser. The visible headline is Full Stack Developer | React, TypeScript, Node.js & Python | AI & Automation, with Bat Yam as the location. Its About mentions the October 2026 AI program; its four education entries do not yet include that program. Existing courses and degree dates agree; site dates now include the months shown there. The site describes Python as developing skills, because Python implementation was not verified in the featured projects. LinkedIn itself was not edited.
- Sales Agent GitHub main at `1f7804827eae232d026a1f8d14c90c593a7725dd` was reviewed through package manifests, AI integration, tests, and deployment files. The project now lists React/React DOM, TypeScript, Vite, HTML/CSS and Hebrew RTL; Node.js, Express, OpenAI Node SDK, Responses API, Structured Outputs and Zod; Node test runner, JSDOM, tsx, offline evaluations, npm workspaces and Git; Docker, Compose, Caddy and Chainguard/Wolfi. The expanded release notes mention Grype, Cosign, SBOM inspection, npm audit and Go tooling for the Caddy build. These are implementation/build tools, not claims of general expertise in Go or cloud operations.
- Evidence: [client package](https://github.com/BarShirom/moving-services-sales-agent/blob/main/client/package.json), [server package](https://github.com/BarShirom/moving-services-sales-agent/blob/main/server/package.json), [AI extraction](https://github.com/BarShirom/moving-services-sales-agent/blob/main/server/src/integrations/openai/extractMessageWithAI.ts), [Compose](https://github.com/BarShirom/moving-services-sales-agent/blob/main/deploy/compose.yaml), [runtime adoption](https://github.com/BarShirom/moving-services-sales-agent/blob/main/docs/security/chainguard-adoption-20261012/README.md). The latest runtime record supersedes older blocked preparation documents. It records local checks and readiness for controlled deployment, not public deployment. Earlier private AWS ECR image publication is qualified separately. No live model or deployment checks were performed here.
- vladis.ai was viewed directly in the browser as well as read through web tools. Its concise opening, restrained styling and clear contact navigation remain the reference. Bar's site uses projects as its main evidence and follows the owner's choice to omit a portrait and employment history.
- The accessible public site at https://barshirom.com/ still serves the earlier Enter/About design, portrait, CV links and older AI wording including LangChain. That published version does not contain these local revisions. Local canonical and social metadata now use this existing custom domain. The new social image must be checked on that domain after an authorized release.

## Sources and claim boundaries

| Content | Evidence inspected | Publication boundary |
| --- | --- | --- |
| Identity, contact, career, education, ANT status | Owner's supplied brief | Full-Stack Developer; AI Engineering direction, Python learning; independent development begins June 2025. GlobalNET ends November 2023. AI professional program is enrolled, starting October 20, 2026. No automatic completion. ANT paused; no ownership, payments, tracking, or specific engineering claims. |
| RAY map, feeding and reports | Read-only sibling checkout: ../ray/client/src/pages/mapPage/MapPage.tsx, feeding/report components and Redux features; server controllers, validation, auth middleware | Implemented workflows, not field usage or rescue outcomes. |
| RAY PostgreSQL/PostGIS/Drizzle | ../ray/server/db/schema.ts, migrations, docs/migrations/postgres-preview.md, compose.postgres.yml | Development preview. Normal startup still uses MongoDB. No historical-data import, production switch, or broad AWS expertise claimed. |
| RAY private S3 media | ../ray/server/media/s3.ts; docs/migrations/s3-media.md development checkpoint dated September 24, 2026 | Code supports signed upload/read and private objects. Existing records report local browser upload/display/restart persistence; full security acceptance and public deployment remain pending. No cloud calls or RAY tests rerun here. |
| Sales Agent | [Public README](https://github.com/BarShirom/moving-services-sales-agent), server/src/integrations/openai/extractMessageWithAI.ts, server/src/domain/pricing/calculatePrice.ts, [screenshot guide](https://github.com/BarShirom/moving-services-sales-agent/tree/main/docs/screenshots) | Structured extraction, deterministic provisional pricing, mandatory human approval, acceptance followed by manual coordination. In-memory local prototype; no persistent DB, authentication, WhatsApp, RAG, or multi-agent claims. Existing tests/evals use injected responses; no live accuracy or numeric performance claims. |
| Project source links | Public GitHub pages for [RAY](https://github.com/BarShirom/ray) and [Sales Agent](https://github.com/BarShirom/moving-services-sales-agent) accessed | Links exist. RAY public code may lag local development; local work was not pushed. No full deployed-flow verification. |
| Domain | [Bar's GitHub profile](https://github.com/BarShirom) links bar-shirom-portfolio-qu19.vercel.app; the custom domain https://barshirom.com/ also opened successfully | Canonical/social URLs use the existing custom domain. Vercel dashboard settings not accessed; no new domain or hosting. |

The reference [vladis.ai](https://vladis.ai) informed concise navigation and professional hierarchy only. No reference copy, claims, portraits, or other assets reused.

## Assets and publication gaps

- Original portrait assets are preserved in source, but no portrait is imported or included in the current app bundle. Social artwork is text only and was regenerated from its SVG source to match the updated punctuation.
- RAY's existing logo copied read-only and optimized to WebP (about 14 KB). A real map capture from the isolated synthetic PostgreSQL preview was investigated. The owner then deferred this work pending their own RAY checks. No RAY files or services were changed; the original identity remains the current image.
- Sales Agent gallery: five existing JPGs from docs/screenshots/, inspected visually. Its README identifies them as an offline demo with synthetic data. Addresses are synthetic examples; no private customer data or credentials observed. English captions explain the Hebrew views.
- **Intentionally omitted by owner:** CV download. Pre-existing deletion of client/public/Bar_Shirom-Full_Stack-Developer-CV.pdf preserved. No CV link is published; a new CV is no longer a site requirement.
- ANT: source/contribution detail and public-sharing approval unavailable. Description stays broad and owner-confirmed; no private code or partner materials copied.
- Rata Engineering and Rick & GO: no source/screenshot verification performed; omitted as optional secondary projects.
- RAY's old public demo URL could not be verified with web tooling; omitted rather than labelled live. Sales Agent has no verified public demo URL.
- LinkedIn was verified in the signed-in browser during the latest revision; anonymous web access returned a rate-limit error.
- EmailJS values not printed or changed. Local form configuration is present, but template correctness, account/domain settings and real delivery are unverified. No email sent.
- Before authorized launch: confirm existing Vercel domain/settings and EmailJS allowed origin/template fields. The optional RAY screenshot gap does not block local use.

## Checks actually performed

### Final review, October 14

- Final TypeScript/production build and ESLint passed after all edits. Output: JavaScript 251.16 KB (81.06 KB gzip), CSS 16.18 KB (4.27 KB gzip). This is bundle size evidence, not a measured Lighthouse score.
- Re-ran the browser contact suite: **11 passed, 0 failed**, using injected senders only. No real email was sent.
- Reviewed the desktop opening, About, contact and footer, plus mobile and tablet layouts. Measured widths 360, 390, 768 and 1440 had no horizontal overflow. Reduced the About heading at tablet widths to avoid an isolated short word.
- Corrected route/hash focus handling. First Tab reaches Skip to content on initial load; skip activation focuses main; Projects and About navigation focus their sections. Programmatically focused containers do not draw a page-sized outline; interactive controls retain visible keyboard focus. Native case study and gallery disclosures opened using Enter.
- Improved contrast: About note 5.51:1, placeholders 5.33:1, input borders at least 3.60:1 against adjacent backgrounds, contact link focus 7.26:1. The empty form status region remains rendered so later updates can be announced. This is not a screen-reader certification.
- Refreshed /aboutMe, /portfolio, /skills and /contact successfully; a nonexistent route renders the 404 view. All eight public image assets returned HTTP 200. Main previews and the first expanded gallery image loaded in the browser. No warnings/errors appeared in the inspected console.
- Confirmed one homepage h1, image alt text, the updated canonical domain, footer link targets, and absence of the three removed slogans and em dashes. No CV, experience section or personal portrait was reintroduced.
- Latest captures: `docs/qa/final-desktop.jpg`, `final-mobile.jpg`, `final-footer-desktop.jpg`, `final-footer-mobile.jpg`. Earlier captures below are historical.
- Browser checks used the existing development server on localhost:5173. A separate production preview started but was unreachable from the browser in this environment and was stopped. The production build itself passed. Real EmailJS delivery, post-deployment social previews, hosted project flows, Lighthouse and assistive-technology audits remain unverified.
- RAY screenshot work was deferred at the owner's request. No commit, push, PR or deployment occurred.

### Earlier checks

Latest portrait/footer revision: lint and the production build (including TypeScript) passed. Browser DOM checks at measured widths 360, 390, 768 and 1440 found no horizontal overflow. The new footer was visually checked at 390px, its email/GitHub/LinkedIn targets inspected, and Back to top confirmed to return to scroll position 0. About navigation and the expanded Sales Agent technology groups were checked. No portrait element or em dash remained in the app content. The inspected preview reported no console warnings/errors. New captures: `docs/qa/desktop-no-portrait.jpg`, `mobile-no-portrait.jpg`, and `footer-mobile.jpg`. Contact logic was unchanged, so the previous mock suite was not rerun in this revision. No live messages, commit, push or deployment occurred.

- Baseline ESLint and TypeScript passed. Baseline Vite initially failed under Windows sandbox esbuild directory permissions; the same existing build passed outside that restriction.
- Final npm.cmd run typecheck, npm.cmd run lint, and npm.cmd run vercel-build passed. The latter runs npm run build (TypeScript + Vite). No dependencies added.
- Browser offline contact suite: **11 passed, 0 failed**. Actual component rendered with injected senders; no real email/API requests.
- Chrome layout measured at 360, 390, 768 and 1440 CSS pixels: no horizontal overflow. Desktop/tablet/mobile visually reviewed; hero screenshots saved in docs/qa/.
- Browser's existing zoom made requested viewport sizes differ from measured CSS dimensions. Sizes adjusted using innerWidth; saved screenshots cropped to measured viewport because capture appended blank/duplicated pixels outside it.
- Native case studies operated with Enter; visible focus outline observed. Contact keyboard traversal reached the labelled email field with visible focus.
- Legacy routes loaded/refreshed locally. Navigation, project source targets, email link, and gallery disclosures inspected. No new deep routes.
- No console warnings/errors reported in the inspected preview. Main images decoded; gallery image availability checked by local asset responses.
- Reduced-motion CSS disables animation/transitions; no autoplay. OS reduced-motion emulation, screen-reader audit, Lighthouse, hosted end-to-end checks not performed.
- Final diff reviewed for scope and accidental private data. No environment values added to documentation. No commit, push, PR, deployment, paid service, or other-repository changes.
