import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
}

export default preview
