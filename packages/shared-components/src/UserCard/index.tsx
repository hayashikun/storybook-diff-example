import { Badge } from '../Badge'
import { Button } from '../Button'
import { Card } from '../Card'
import { colors } from '../theme'

export type UserCardProps = {
  name: string
  email: string
  role: 'admin' | 'member'
  active: boolean
  onEdit?: () => void
}

export function UserCard({ name, email, role, active, onEdit }: UserCardProps) {
  return (
    <Card
      title={name}
      actions={
        <Button size="small" variant="secondary" onClick={onEdit}>
          Edit
        </Button>
      }
    >
      <p style={{ margin: '0 0 8px', color: colors.muted }}>{email}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge>{role}</Badge>
        <Badge tone={active ? 'success' : 'danger'}>
          {active ? 'Active' : 'Suspended'}
        </Badge>
      </div>
    </Card>
  )
}
