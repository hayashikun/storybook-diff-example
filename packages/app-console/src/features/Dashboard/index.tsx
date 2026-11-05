import { Badge, Card, colors, EmptyState } from '@example/shared-components'

export type Stat = {
  label: string
  value: number
  trend: 'up' | 'down' | 'flat'
}

const trendTone = { up: 'success', down: 'danger', flat: 'neutral' } as const
const trendLabel = { up: '▲ up', down: '▼ down', flat: '– flat' }

export function Dashboard({ stats }: { stats: Stat[] }) {
  if (stats.length === 0) {
    return <EmptyState message="No data for this period." />
  }
  return (
    <div
      data-testid="dashboard-stats"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 220px)', gap: 16 }}
    >
      {stats.map((s) => (
        <Card key={s.label} title={s.label}>
          <div style={{ fontSize: 32, fontWeight: 700, color: colors.text }}>
            {s.value}
          </div>
          <Badge tone={trendTone[s.trend]}>{trendLabel[s.trend]}</Badge>
        </Card>
      ))}
    </div>
  )
}
