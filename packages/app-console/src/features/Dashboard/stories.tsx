import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dashboard } from '.'

const meta = {
  title: 'app-console/Dashboard',
  component: Dashboard,
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    stats: [
      { label: 'Open tickets', value: 12, trend: 'up' },
      { label: 'Resolved today', value: 34, trend: 'flat' },
      { label: 'Escalations', value: 2, trend: 'down' },
      { label: 'New users', value: 7, trend: 'up' },
    ],
  },
}

export const Empty: Story = { args: { stats: [] } }
