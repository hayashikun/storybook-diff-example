# storybook-diff-example

An example monorepo that runs [storybook-diff](https://github.com/hayashikun/storybook-diff) on pull requests.

The layout is the one storybook-diff was built for: one Storybook for a pnpm monorepo, with a shared library that the apps import through its built `dist`.

```
.storybook/                 one Storybook for the whole monorepo
packages/
  shared-components/        components shared by the apps. Stories in src/**/stories.tsx, built to dist
  app-console/              app. Stories in src/features/**/stories.tsx
  admin-console/            app. Stories in src/features/**/stories.tsx
.github/workflows/storybook-diff.yml
```

The apps import `@example/shared-components` through `dist`. Storybook's dependency graph stops at that boundary: a change in `shared-components/src/` doesn't connect to the app stories that use it. That is why the workflow passes it as `dist-boundary-packages`.

## What happens on a pull request

`.github/workflows/storybook-diff.yml`:

1. Skips everything if the PR changes nothing under `packages/` or `.storybook/`.
2. Builds Storybook for head (with `--stats-json`) and for base (in a `git worktree`).
3. Runs storybook-diff on the two builds.
4. Uploads the report, with both Storybooks next to it, as a workflow artifact.
5. Posts the summary as a PR comment and updates the same comment on every push.

To see the gallery, download the artifact from the link in the comment, unzip it and open `index.html`.

## Things to try

| change | what storybook-diff reports |
|---|---|
| `primary` in `packages/shared-components/src/theme.ts` | every story is in scope (dist boundary). Only the stories that show a primary button are reported as changed |
| `packages/app-console/src/features/Dashboard/index.tsx` | only the Dashboard stories are rendered, found through the dependency graph |
| a new story in any `stories.tsx` | reported as added |
| a change to markup that doesn't show (for example a `data-*` attribute) | the HTML differs, but the pixel comparison drops it |

## Local development

```bash
pnpm install          # also builds shared-components (prepare)
pnpm run storybook
pnpm run build        # rebuild shared-components after changing it
pnpm run typecheck
```
