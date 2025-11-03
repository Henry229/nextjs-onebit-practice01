# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts App Router segments such as `(with-searchbar)`, `allbooks`, `book`, `parallel`, and `practice`; they map to pages, modals, and examples.
- Shared logic lives in `app/actions`, `app/components`, `app/types`, `app/util`, and `app/mock`; use `@modal` for intercepting route UIs.
- Global styles come from `app/globals.css` (Tailwind v4). Static assets stay in `public/`. Root configs `next.config.ts`, `tsconfig.json`, and `eslint.config.mjs` control runtime, TypeScript paths, and linting.

## Build, Test, and Development Commands
- `npm run dev` – start the Next.js dev server with webpack.
- `npm run build` – compile the production bundle.
- `npm run start` – serve the `.next` build locally for smoke checks.
- `npm run lint` – run ESLint (core-web-vitals); must pass before opening a PR.

## Coding Style & Naming Conventions
- TypeScript strict mode is enabled; type server responses (`BookData`) and add explicit returns for actions.
- Keep component files kebab-case and export components in PascalCase; co-locate CSS, mocks, and helpers with their feature.
- Favor functional React components, Tailwind utility classes, and the alias `@/*` for root imports. Use single quotes and two-space indentation to match the repository.

## Testing Guidelines
- Automated tests are not yet configured; prefer React Testing Library for UI and MSW-backed action tests when adding coverage.
- Place specs beside the feature (`app/components/book-item.test.tsx`) or in a local `__tests__` folder, using the `.test.ts(x)` suffix.
- Until the harness exists, document manual QA in PRs and always run `npm run lint` before pushing.

## Commit & Pull Request Guidelines
- Follow the existing history: imperative subject lines that describe the change (“Implement book deletion functionality”). Add a concise body when needed.
- Scope commits narrowly and confirm they build and lint successfully before pushing.
- PRs should note the problem, solution, verification steps, linked issues, UI screenshots, and any new env vars or migrations.

## Environment & Configuration Tips
- Define `NEXT_PUBLIC_API_SERVER_URL` in `.env.local` for local fetches; keep secrets server-side.
- Use `npm install` with the lockfile. Tailwind v4 loads via PostCSS; restart the dev server after adjusting theme tokens.
