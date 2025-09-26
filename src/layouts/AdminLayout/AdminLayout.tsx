import { PropsWithChildren } from 'react'

import Sidebar from '../../components/navigation/Sidebar'
import Topbar from '../../components/navigation/Topbar'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <aside className="w-64 border-r bg-white"><Sidebar /></aside>
        <main className="flex-1 min-h-screen">
          <Topbar />
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}


