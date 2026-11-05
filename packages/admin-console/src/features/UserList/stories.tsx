import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserList } from '.'

const meta = {
  title: 'admin-console/UserList',
  component: UserList,
} satisfies Meta<typeof UserList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    users: [
      { name: 'Alex Kim', email: 'alex@example.com', role: 'admin', active: true },
      { name: 'Sam Lee', email: 'sam@example.com', role: 'member', active: true },
      { name: 'Jo Park', email: 'jo@example.com', role: 'member', active: false },
    ],
  },
}

export const Empty: Story = { args: { users: [] } }
