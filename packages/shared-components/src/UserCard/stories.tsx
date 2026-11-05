import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserCard } from '.'

const meta = {
  title: 'shared-components/UserCard',
  component: UserCard,
  args: {
    name: 'Alex Kim',
    email: 'alex@example.com',
    role: 'member',
    active: true,
  },
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const Member: Story = {}
export const Admin: Story = { args: { role: 'admin' } }
export const Suspended: Story = { args: { active: false } }
