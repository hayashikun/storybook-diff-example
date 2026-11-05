import type { ReactNode } from 'react'
import { colors, fontFamily } from '../theme'

export type BadgeProps = {
  tone?: 'neutral' | 'success' | 'warning' | 'danger'
  children: ReactNode
}

const tones = {
  neutral: colors.muted,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span
      style={{
        fontFamily,
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 600,
        padding: '2px 8px',
        borderRadius: 999,
        color: tones[tone],
        border: `1px solid ${tones[tone]}`,
      }}
    >
      {children}
    </span>
  )
}
