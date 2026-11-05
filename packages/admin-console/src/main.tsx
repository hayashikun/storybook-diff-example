import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserList } from './features/UserList'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserList
      users={[
        { name: 'Alex Kim', email: 'alex@example.com', role: 'admin', active: true },
      ]}
    />
  </StrictMode>,
)
