export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <h1 className="text-sm font-medium text-gray-700">Admin Dashboard</h1>
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-full bg-violet-600 text-white inline-flex items-center justify-center text-xs">TH</span>
        </div>
      </div>
    </header>
  )
}


