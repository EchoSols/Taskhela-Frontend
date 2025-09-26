const items = [
  { to: '/', label: 'Dashboard' },
  { to: '/users', label: 'User Management' },
  { to: '/providers', label: 'Provider Management' },
  { to: '/jobs', label: 'Job Moderation' },
  { to: '/analytics', label: 'Analytics & Reports' },
  { to: '/notifications', label: 'Notifications' },
  { to: '/settings', label: 'System Configuration' },
]

export default function Sidebar() {
  return (
    <nav className="p-4 space-y-2">
      {items.map((item) => (
        <a
          key={item.to}
          href={item.to}
          className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}


