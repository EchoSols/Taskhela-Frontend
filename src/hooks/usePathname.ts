import { useEffect, useState } from 'react'

export function usePathname() {
  const [pathname, setPathname] = useState<string>(window.location.pathname || '/')

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname || '/')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return pathname
}


