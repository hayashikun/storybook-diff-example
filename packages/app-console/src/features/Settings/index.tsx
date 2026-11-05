import { Button, Card, colors } from '@example/shared-components'
import { useState } from 'react'

export function Settings({ initialName = 'Support team' }: { initialName?: string }) {
  const [name, setName] = useState(initialName)
  const [saved, setSaved] = useState(false)
  return (
    <Card title="Workspace settings">
      <label style={{ display: 'block', marginBottom: 12, color: colors.muted }}>
        Workspace name
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setSaved(false)
          }}
          style={{ display: 'block', marginTop: 4, padding: 6, width: '100%' }}
        />
      </label>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Button onClick={() => setSaved(true)} disabled={name.trim() === ''}>
          Save
        </Button>
        <Button variant="secondary" onClick={() => setName(initialName)}>
          Reset
        </Button>
        {saved && <span style={{ color: colors.success }}>Saved</span>}
      </div>
    </Card>
  )
}
