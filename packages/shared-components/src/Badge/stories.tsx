import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '.'

const meta = {
  title: 'shared-components/Badge',
  component: Badge,
  args: { children: 'Active' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Success: Story = { args: { tone: 'success' } }
export const Warning: Story = { args: { tone: 'warning', children: 'Pending' } }
export const Danger: Story = { args: { tone: 'danger', children: 'Suspended' } }
