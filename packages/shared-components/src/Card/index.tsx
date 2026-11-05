import type { ReactNode } from 'react'
import { colors, fontFamily, radius } from '../theme'

export type CardProps = {
  title?: ReactNode
  actions?: ReactNode
  children: ReactNode
}

export function Card({ title, actions, children }: CardProps) {
  return (
    <section
      style={{
        fontFamily,
        color: colors.text,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radius,
        padding: 16,
        maxWidth: 480,
      }}
    >
      {(title || actions) && (
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
          {actions}
        </header>
      )}
      {children}
    </section>
  )
}
