import type { ButtonHTMLAttributes } from 'react'
import { colors, fontFamily, radius } from '../theme'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium'
}

const palette = {
  primary: { background: colors.primary, color: colors.primaryText, border: colors.primary },
  secondary: { background: colors.surface, color: colors.text, border: colors.border },
  danger: { background: colors.danger, color: colors.primaryText, border: colors.danger },
}

export function Button({
  variant = 'primary',
  size = 'medium',
  style,
  ...props
}: ButtonProps) {
  const p = palette[variant]
  return (
    <button
      type="button"
      {...props}
      style={{
        fontFamily,
        fontSize: size === 'small' ? 13 : 15,
        fontWeight: 600,
        padding: size === 'small' ? '4px 12px' : '8px 20px',
        borderRadius: radius,
        border: `1px solid ${p.border}`,
        background: p.background,
        color: p.color,
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        opacity: props.disabled ? 0.5 : 1,
        ...style,
      }}
    />
  )
}
