import DashboardPage from './pages/Dashboard'
import UsersPage from './pages/Users'
import ProvidersPage from './pages/Providers'
import JobsModerationPage from './pages/JobsModeration'
import AnalyticsPage from './pages/Analytics'
import NotificationsPage from './pages/Notifications'
import SystemConfigPage from './pages/SystemConfig'
import { usePathname } from './hooks/usePathname'

export default function App() {
  const pathname = usePathname()

  switch (pathname) {
    case '/':
    case '/dashboard':
      return <DashboardPage />
    case '/user':
      return <UsersPage />
    case '/provider':
      return <ProvidersPage />
    case '/jobs':
      return <JobsModerationPage />
    case '/analytics':
      return <AnalyticsPage />
    case '/notifications':
      return <NotificationsPage />
    case '/configuration':
      return <SystemConfigPage />
    default:
      return <div className="p-6">Not Found</div>
  }
}
