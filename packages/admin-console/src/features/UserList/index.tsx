import { EmptyState, UserCard, type UserCardProps } from '@example/shared-components'

export type User = Omit<UserCardProps, 'onEdit'>

export function UserList({ users }: { users: User[] }) {
  if (users.length === 0) {
    return <EmptyState message="No users yet." actionLabel="Invite a user" />
  }
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {users.map((u) => (
        <UserCard key={u.email} {...u} />
      ))}
    </div>
  )
}
