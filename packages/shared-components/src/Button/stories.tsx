import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '.'

const meta = {
  title: 'shared-components/Button',
  component: Button,
  args: { children: 'Save' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Delete' } }
export const Disabled: Story = { args: { disabled: true } }
