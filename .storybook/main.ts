import type { StorybookConfig } from '@storybook/react-vite'

// One Storybook for the whole monorepo, collecting stories from every package
const config: StorybookConfig = {
  stories: [
    '../packages/shared-components/src/**/stories.@(ts|tsx)',
    '../packages/app-console/src/**/stories.@(ts|tsx)',
    '../packages/admin-console/src/**/stories.@(ts|tsx)',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: { reactDocgen: false },
  features: {
    // React's act() is off in production builds, so play functions could run
    // before rendering finishes. Build in development mode instead
    developmentModeForBuild: true,
  },
}

export default config
