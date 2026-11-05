import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Settings } from '.'

const meta = {
  title: 'app-console/Settings',
  component: Settings,
} satisfies Meta<typeof Settings>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

// storybook-diff waits for play functions to finish before taking the screenshot
export const AfterSave: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Save' }))
    await expect(canvas.getByText('Saved')).toBeInTheDocument()
  },
}
