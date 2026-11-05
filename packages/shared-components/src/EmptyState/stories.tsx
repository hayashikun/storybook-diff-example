import type { Meta, StoryObj } from '@storybook/react-vite'
import { EmptyState } from '.'

const meta = {
  title: 'shared-components/EmptyState',
  component: EmptyState,
  args: { message: 'Nothing here yet.' },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithAction: Story = { args: { actionLabel: 'Create one' } }
