import { Button } from '../Button'
import { colors } from '../theme'

export type EmptyStateProps = {
  message: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ message, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        padding: 32,
        color: colors.muted,
        border: `1px dashed ${colors.border}`,
        borderRadius: 8,
        maxWidth: 480,
      }}
    >
      <p style={{ margin: '0 0 16px' }}>{message}</p>
      {actionLabel && <Button onClick={onAction}>{actionLabel}</Button>}
    </div>
  )
}
