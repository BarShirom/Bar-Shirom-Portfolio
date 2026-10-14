# Bar Shirom portfolio

React 19 + TypeScript + Vite, plain CSS, React Router, and EmailJS. Deployment remains on Vercel. No backend or new runtime dependencies were added.

## Local development

Use Node.js 22 and npm (package-lock.json).

```sh
cd client
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

For the offline contact behavior suite, start the dev server and open http://127.0.0.1:5173/tests/contact.html. It runs 11 assertions against the actual React component with injected senders: pending, duplicate submits, success, failure, draft retention, retry, and missing configuration. It makes **no EmailJS requests**. Tests are typechecked and linted, and excluded from the production entry.

## Edit content

- `src/data/profileData.ts`: public contact links, biography, education. Update the explicit AI program status only after attendance is confirmed.
- `src/data/projectsData.ts`: typed projects, statuses, source links, case studies, gallery captions.
- The Sales Agent case study groups its verified stack by interface, API, testing, containers, and release verification. About summarizes the same project; distinguish deployment preparation from public hosting.
- `src/data/skillsData.ts`: skills and learning groups.
- `src/App.css`: shared visual system and responsive styles.
- `public/images/`: project assets, synthetic demo screenshots, social-sharing image.
- `index.html`: SEO metadata and canonical URL.

The homepage uses native expandable case studies. Original routes `/aboutMe`, `/portfolio`, `/skills`, and `/contact` remain supported. No new case-study routes are required.

## EmailJS

Copy `.env.example` to `.env` only if no local configuration exists. Set these names locally and in the existing Vercel project:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

These are browser-facing EmailJS identifiers; never put private API keys or other secrets in `VITE_*` variables. Template fields remain `user_name`, `user_email`, and `message`. Missing configuration disables the form and keeps the email fallback available. Success is shown only for a successful provider response. Tests use mocks; live delivery is not verified.

## Existing deployment

Vercel uses `client` as the app directory, `npm run vercel-build`, and `dist` output. `vercel-build` now runs the same TypeScript-checked build as local development. The existing `vercel.json` SPA rewrite supports direct route loads and refresh.

The existing portfolio is accessible at https://barshirom.com/, which is now used for canonical and social metadata. GitHub previously linked the Vercel address. On an authorized release, verify the social image at the custom domain after the new build is deployed. Fonts load from Google Fonts with system fallbacks.

Publish through the existing Vercel workflow only after explicit owner approval.

See [content verification and remaining checks](../docs/content-verification.md). The owner has chosen to omit a CV download and employment history from the site. Education remains visible.

The current opening is text only, with no portrait. Public copy avoids dash punctuation. The footer uses the same identity and contact links as the rest of the site.
