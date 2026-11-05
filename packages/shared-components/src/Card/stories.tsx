import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card } from '.'

const meta = {
  title: 'shared-components/Card',
  component: Card,
  args: { title: 'Card title', children: 'Some content inside the card.' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithActions: Story = {
  args: { actions: <Button size="small">Edit</Button> },
}
