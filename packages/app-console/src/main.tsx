import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Dashboard } from './features/Dashboard'
import { Settings } from './features/Settings'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Dashboard
      stats={[
        { label: 'Open tickets', value: 12, trend: 'up' },
        { label: 'Resolved today', value: 34, trend: 'flat' },
      ]}
    />
    <Settings />
  </StrictMode>,
)
